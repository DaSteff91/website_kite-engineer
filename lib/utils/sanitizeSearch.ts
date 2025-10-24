// lib/sanitizeSearch.ts
export function sanitizeSearchQuery(raw: unknown, maxLen = 300): string {
  if (raw == null) return '';

  // Coerce to string
  let s = String(raw);

  // 1) Remove common HTML tags (simple approach). Keeps inner text.
  //    This is not a full HTML sanitizer (we're not allowing markup), just strip tags.
  s = s.replace(/<\/?[^>]+(>|$)/g, ' ');

  // 2) Remove control characters (except newline/space/tab), and null bytes
  s = s.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]+/g, ' ');

  // 3) Collapse whitespace to single spaces and trim
  s = s.replace(/\s+/g, ' ').trim();

  // 4) Limit length
  if (s.length > maxLen) s = s.slice(0, maxLen);

  return s;
}
