const SHORT_WHITELIST = new Set(['ai', 'ml', 'qa', 'eu', '3d', 'apc', 'spc', 'vdws', 'r2']);

interface SearchTokenizeOptions {
  dedupe?: boolean;
  withUnique?: boolean;
}

interface SearchTokenizeResult {
  tokens: string[];
  uniqueTokens: string[];
}

function normalizeToken(token: string): string | null {
  const normalized = token.toLowerCase().trim();

  if (!normalized) {
    return null;
  }

  if (SHORT_WHITELIST.has(normalized)) {
    return normalized;
  }

  const MIN_TOKEN_LENGTH = 2;
  if (normalized.length < MIN_TOKEN_LENGTH) {
    return null;
  }

  if (/^\d+$/.test(normalized) && normalized.length < 4) {
    return null;
  }

  return normalized;
}

const TOKEN_SPLIT_REGEX = /[^\p{L}\p{N}]+/u;

function tokenize(text: string): string[] {
  return text
    .split(TOKEN_SPLIT_REGEX)
    .map(normalizeToken)
    .filter((token): token is string => Boolean(token));
}

/**
 * Tokenizes text for search indexing while applying shared normalization rules.
 */
export function searchTokenize(text: string, options: SearchTokenizeOptions & { withUnique: true }): SearchTokenizeResult;
export function searchTokenize(text: string, options?: SearchTokenizeOptions): string[];
export function searchTokenize(
  text: string,
  options: SearchTokenizeOptions = {}
): string[] | SearchTokenizeResult {
  const { dedupe = true, withUnique = false } = options;

  const normalizedInput = String(text ?? '').normalize('NFKC');
  const allTokens = tokenize(normalizedInput);
  const uniqueTokens = Array.from(new Set(allTokens));

  if (withUnique) {
    return {
      tokens: allTokens,
      uniqueTokens,
    };
  }

  return dedupe ? uniqueTokens : allTokens;
}
