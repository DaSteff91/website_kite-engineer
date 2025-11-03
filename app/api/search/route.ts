import { NextResponse } from 'next/server';
import { sanitizeSearchQuery } from '@/lib/utils/sanitizeSearch';

type MeiliSearchReq = {
  q: string;
  limit: number;
  offset: number;
  filter: string[]; // like ["locale = en-US"]
  matchingStrategy: 'all';
  attributesToRetrieve?: string[];
  attributesToHighlight?: string[];
  matches?: boolean;
  showMatchesPosition?: boolean;
};

console.log('[DEBUG] search route.ts loaded at', new Date().toISOString());

// ---- Config ----
const MAX_LIMIT = 50;
const DEFAULT_LIMIT = 10;

// Rate limiter config (simple sliding window)
const RATE_LIMIT_WINDOW_MS = 60_000; // 60 seconds
const RATE_LIMIT_MAX_REQS = 30; // per IP per window

// Cache config
const CACHE_TTL_MS = 30_000; // 30s cache for identical queries
const CACHE_MAX_ENTRIES = 500;

// ---- In-memory rate limiter and cache ----
type RateInfo = { windowStart: number; count: number };
const rateMap = new Map<string, RateInfo>();

type CacheEntry = { ts: number; data: any };
const cacheMap = new Map<string, CacheEntry>();

// Maintain cache size
function cacheSet(key: string, data: any) {
  if (cacheMap.size >= CACHE_MAX_ENTRIES) {
    // delete oldest
    let oldestKey: string | null = null;
    let oldestTs = Infinity;
    for (const [k, v] of cacheMap.entries()) {
      if (v.ts < oldestTs) {
        oldestTs = v.ts;
        oldestKey = k;
      }
    }
    if (oldestKey) cacheMap.delete(oldestKey);
  }
  cacheMap.set(key, { ts: Date.now(), data });
}

function cacheGet(key: string) {
  const e = cacheMap.get(key);
  if (!e) return null;
  if (Date.now() - e.ts > CACHE_TTL_MS) {
    cacheMap.delete(key);
    return null;
  }
  return e.data;
}

// ---- Helpers ----
function clientIpFromReq(req: Request) {
  // Prefer x-forwarded-for if present (proxies), otherwise fallback to connection
  const forwarded = req.headers.get('x-forwarded-for');
  if (forwarded) return forwarded.split(',')[0].trim();
  const cf = req.headers.get('cf-connecting-ip');
  if (cf) return cf;
  return 'unknown';
}

function enforceRateLimit(ip: string) {
  const now = Date.now();
  const info = rateMap.get(ip);
  if (!info || now - info.windowStart > RATE_LIMIT_WINDOW_MS) {
    rateMap.set(ip, { windowStart: now, count: 1 });
    return true;
  }
  if (info.count >= RATE_LIMIT_MAX_REQS) {
    return false;
  }
  info.count++;
  return true;
}

function sanitizeFilters(rawFilters?: unknown): string[] {
  // Only allow a single locale filter of the shape: "locale = en-US"
  if (!Array.isArray(rawFilters)) return [];
  const out: string[] = [];
  for (const f of rawFilters) {
    if (typeof f !== 'string') continue;
    const m = f.match(/^\s*locale\s*=\s*(.+)\s*$/);
    if (m) {
      const locale = m[1].trim();
      // whitelist pattern for safety (basic)
      if (/^[a-z]{2}-[A-Z]{2}$/.test(locale)) {
        out.push(`locale = ${locale}`);
      }
    }
  }
  return out;
}

// ---- Route Handler ----
export async function POST(req: Request) {
  try {
    console.log('[DEBUG] POST /api/search called at', new Date().toISOString());
    const ip = clientIpFromReq(req);
    console.log('[DEBUG] Request IP:', ip);
    console.log('[DEBUG] Request headers:', Object.fromEntries(req.headers.entries()));

    // Rate limiting
    if (!enforceRateLimit(ip)) {
      return NextResponse.json({ error: 'rate_limited' }, { status: 429 });
    }

    const body = await req.json().catch(() => ({}));
    console.log('[DEBUG] Request body:', body);
    const sanitized = sanitizeSearchQuery(body.q, 100);
    const limit = Math.min(Math.max(1, body.limit ?? DEFAULT_LIMIT), MAX_LIMIT);
    const offset = Math.max(0, body.offset ?? 0);
    const filters = sanitizeFilters(body.filter);
    const sanitizedQuery = sanitized.cleaned || sanitized.tokens.join(' ');
    console.log('[DEBUG] Computed query:', sanitizedQuery, 'tokens:', sanitized.tokens);
    console.log('[DEBUG] limit:', limit, 'offset:', offset, 'filters:', filters);

    // If no tokens, return empty result set (quick response)
    if (!sanitized.tokens.length) {
      return NextResponse.json(
        { hits: [], nbHits: 0, query: sanitizedQuery },
        { status: 200 },
      );
    }

    // Build a cache key for identical requests
    const cacheKey = `q=${sanitizedQuery}|match=all|l=${limit}|o=${offset}|f=${filters.join(';')}`;
    const cached = cacheGet(cacheKey);
    if (cached) {
      console.log('[DEBUG] Returning cached result for key:', cacheKey);
      return NextResponse.json(cached, { status: 200 });
    }

    const meiliHost = process.env.MEILISEARCH_HOST;
    const meiliKey = process.env.MEILISEARCH_API_KEY;
    console.log('[DEBUG] MEILISEARCH_HOST:', process.env.MEILISEARCH_HOST);
    console.log('[DEBUG] MEILISEARCH_API_KEY exists:', !!process.env.MEILISEARCH_API_KEY);

    if (!meiliHost || !meiliKey) {
      console.error('Meili config missing in environment');
      return NextResponse.json({ error: 'server_misconfigured' }, { status: 500 });
    }

    const target = `${meiliHost.replace(/\/$/, '')}/indexes/pages/search`;

    // Call Meili
    const meiliPayload: MeiliSearchReq = {
      q: sanitizedQuery,
      limit,
      offset,
      filter: filters,
      matchingStrategy: 'all',
      attributesToRetrieve: ['id', 'title', 'locale', 'pagePath', 'content'],
      attributesToHighlight: ['content'],
      matches: true,
      showMatchesPosition: true,
    };

    console.log('[DEBUG] Sending request to Meili:', target, meiliPayload);
    const meiliRes = await fetch(target, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${meiliKey}`,
      },
      body: JSON.stringify(meiliPayload),
    });
    

    // Forward status and body (with small safety net)
    const data = await meiliRes.json().catch(() => ({ error: 'invalid_meili_response' }));
    console.log('[DEBUG] Meili response status:', meiliRes.status, 'data:', data);


    // Optionally: shape results here before caching / returning
    // For now we assume Meili returns { hits, nbHits, ... } and we forward as-is
    cacheSet(cacheKey, data);

    return NextResponse.json(data, { status: meiliRes.status });
  } catch (err) {
    console.error('search route error', err);
    return NextResponse.json({ error: 'internal_error' }, { status: 500 });
  }
}
