import { SearchResult, SearchResultMatch } from "@/components/search/types";

const FIELD_PRIORITY: ReadonlyArray<string> = [
  "bullets",
  "parentTitles",
  "sections",
  "heroTitle",
  "content",
  "title",
];

interface RawRange {
  start: number;
  length: number;
}

interface MatchCandidate extends RawRange {
  field: string;
  path: string[];
  index?: number;
  elementId?: string;
}

type MatchesSource = Record<string, unknown> | undefined;

function isRange(value: unknown): value is RawRange {
  if (!value || typeof value !== "object") {
    return false;
  }
  const maybeRange = value as Record<string, unknown>;
  return (
    typeof maybeRange.start === "number" &&
    Number.isFinite(maybeRange.start) &&
    typeof maybeRange.length === "number" &&
    Number.isFinite(maybeRange.length)
  );
}

function normalizeText(value: string | undefined): string {
  return (value ?? "")
    .replace(/<[^>]*>/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

function findElementIdByText(
  content: Record<string, string> | undefined,
  text: string | undefined,
): string | undefined {
  if (!content || !text) {
    return undefined;
  }
  const normalized = normalizeText(text);
  if (!normalized) {
    return undefined;
  }
  for (const [key, value] of Object.entries(content)) {
    if (!value) continue;
    const candidate = normalizeText(value);
    if (!candidate) continue;
    if (candidate.includes(normalized) || normalized.includes(candidate)) {
      return key;
    }
  }
  return undefined;
}

function deriveHeroId(pagePath: string | undefined): string | undefined {
  if (!pagePath) {
    return undefined;
  }
  const trimmed = pagePath.replace(/^\/+/, "").replace(/\/+$/, "");
  if (!trimmed) {
    return undefined;
  }
  const segments = trimmed.split("/").filter(Boolean);
  if (!segments.length) {
    return undefined;
  }
  const lastSegment = segments[segments.length - 1];
  if (!lastSegment) {
    return undefined;
  }
  return `${lastSegment}-hero`;
}

function collectMatchesFromSource(
  source: MatchesSource,
  candidates: MatchCandidate[],
  path: string[] = [],
) {
  if (!source) {
    return;
  }

  if (Array.isArray(source)) {
    source.forEach((entry, index) => {
      if (isRange(entry)) {
        const field = path[0];
        if (!field) {
          return;
        }
        candidates.push({
          field,
          path,
          index,
          start: Math.max(0, entry.start),
          length: Math.max(0, entry.length),
        });
        return;
      }
      collectMatchesFromSource(entry as MatchesSource, candidates, [...path, String(index)]);
    });
    return;
  }

  if (isRange(source)) {
    const field = path[0];
    if (!field) {
      return;
    }
    candidates.push({
      field,
      path,
      start: Math.max(0, source.start),
      length: Math.max(0, source.length),
    });
    return;
  }

  if (typeof source === "object") {
    Object.entries(source as Record<string, unknown>).forEach(([key, value]) => {
      collectMatchesFromSource(value as MatchesSource, candidates, [...path, key]);
    });
  }
}

function resolveCandidateElementId(result: SearchResult, candidate: MatchCandidate): string | undefined {
  const { field, path, index } = candidate;
  const { content, bullets, sections, parentTitles, heroTitle, title } = result;

  if (field === "content" && path.length > 1) {
    return path[path.length - 1];
  }

  if (field === "bullets" && typeof index === "number" && bullets) {
    const text = bullets[index];
    return findElementIdByText(content, text);
  }

  if (field === "sections" && typeof index === "number" && sections) {
    const text = sections[index];
    return findElementIdByText(content, text);
  }

  if (field === "parentTitles" && typeof index === "number" && parentTitles) {
    const text = parentTitles[index];
    return findElementIdByText(content, text);
  }

  if (field === "heroTitle") {
    const heroMatchId = findElementIdByText(content, heroTitle) ?? deriveHeroId(result.pagePath);
    return heroMatchId;
  }

  if (field === "title") {
    return findElementIdByText(content, title);
  }

  // Last resort: attempt to use trailing path segment as ID
  if (path.length) {
    return path[path.length - 1];
  }

  return undefined;
}

function ensureElementId(result: SearchResult, candidate: MatchCandidate): string | undefined {
  const found = resolveCandidateElementId(result, candidate);
  if (found) {
    return found;
  }
  const contentKeys = Object.keys(result.content ?? {});
  return contentKeys.length ? contentKeys[0] : undefined;
}

function sanitizeRange(range: RawRange | undefined): RawRange | undefined {
  if (!range) {
    return undefined;
  }
  const start = Number.isFinite(range.start) ? Math.max(0, range.start) : 0;
  const length = Number.isFinite(range.length) ? Math.max(0, range.length) : 0;
  return { start, length };
}

function resolveRangeFromCandidate(result: SearchResult, candidate: MatchCandidate): RawRange | undefined {
  const { field, index } = candidate;
  if (field === "content" && candidate.elementId && result.content) {
    const text = result.content[candidate.elementId];
    if (typeof text === "string" && !text.trim()) {
      return undefined;
    }
  }

  if (field === "heroTitle" && typeof result.heroTitle === "string") {
    return sanitizeRange(candidate);
  }

  if (field === "title" && typeof result.title === "string") {
    return sanitizeRange(candidate);
  }

  if (field === "bullets" && typeof index === "number" && result.bullets?.[index]) {
    return sanitizeRange(candidate);
  }

  if (field === "sections" && typeof index === "number" && result.sections?.[index]) {
    return sanitizeRange(candidate);
  }

  if (field === "parentTitles" && typeof index === "number" && result.parentTitles?.[index]) {
    return sanitizeRange(candidate);
  }

  return sanitizeRange(candidate);
}

function sortCandidates(a: MatchCandidate, b: MatchCandidate): number {
  const priorityA = FIELD_PRIORITY.indexOf(a.field);
  const priorityB = FIELD_PRIORITY.indexOf(b.field);
  const scoreA = priorityA === -1 ? FIELD_PRIORITY.length : priorityA;
  const scoreB = priorityB === -1 ? FIELD_PRIORITY.length : priorityB;

  if (scoreA !== scoreB) {
    return scoreA - scoreB;
  }

  if (a.start !== b.start) {
    return a.start - b.start;
  }

  return 0;
}

export function getPrimaryMatch(result: SearchResult): SearchResultMatch | undefined {
  const candidates: MatchCandidate[] = [];

  collectMatchesFromSource((result as Record<string, unknown>)._matchesInfo as MatchesSource, candidates);
  collectMatchesFromSource((result as Record<string, unknown>)._matchesPosition as MatchesSource, candidates);
  collectMatchesFromSource((result as Record<string, unknown>).matchesInfo as MatchesSource, candidates);

  if (!candidates.length) {
    return undefined;
  }

  candidates.sort(sortCandidates);

  for (const candidate of candidates) {
    const elementId = ensureElementId(result, candidate);
    if (!elementId) {
      continue;
    }
    const range = resolveRangeFromCandidate(result, { ...candidate, elementId });
    if (!range) {
      continue;
    }
    return {
      field: candidate.field,
      elementId,
      start: range.start,
      length: range.length,
    };
  }

  return undefined;
}

export function buildDeepLinkParams(match: SearchResultMatch | undefined): string {
  if (!match || !match.elementId) {
    return "";
  }
  const params = new URLSearchParams();
  params.set("h", match.elementId);
  if (match.field) {
    params.set("f", match.field);
  }
  const start = Number.isFinite(match.start) ? Math.max(0, match.start ?? 0) : 0;
  const length = Number.isFinite(match.length) ? Math.max(0, match.length ?? 0) : 0;
  params.set("pos", `${start}:${length}`);
  return params.toString();
}

export function applyMatchToResult(result: SearchResult): SearchResult {
  if (result.match) {
    return result;
  }
  const match = getPrimaryMatch(result);
  return {
    ...result,
    match,
  };
}
