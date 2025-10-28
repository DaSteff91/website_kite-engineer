import {
  PAGE_KEY_CANONICAL_PATHS,
  PAGE_TO_JSON_KEY,
  PAGE_TO_NAV_KEY,
} from '../constants/search-mappings';
import { NAV_ITEMS, type NavigationItem } from '../constants/navigation-menu';

const PAGE_KEY_TO_METADATA_PATH: Record<string, string> = Object.entries(PAGE_TO_JSON_KEY).reduce(
  (acc, [pagePath, jsonKey]) => {
    acc[jsonKey] = pagePath;
    return acc;
  },
  {} as Record<string, string>
);

const PAGE_KEY_TO_CANONICAL_PATH: Record<string, string> = {
  ...PAGE_KEY_TO_METADATA_PATH,
  ...(PAGE_KEY_CANONICAL_PATHS as Record<string, string>),
};

const NAV_KEY_TO_PAGE_PATH: Map<string, string> = (() => {
  const entries = new Map<string, string>();

  const visit = (items: NavigationItem[]): void => {
    for (const item of items) {
      if ('items' in item) {
        visit(item.items);
        continue;
      }

      entries.set(item.key, item.href);

      if (item.dropdownItems?.length) {
        visit(item.dropdownItems);
      }
    }
  };

  visit(NAV_ITEMS);

  return entries;
})();

export type PageTitleSource = 'navigation' | 'metadata' | 'fallback';

type TitleResolution = {
  title: string;
  source: PageTitleSource;
  usedFallback: boolean;
};

export interface ResolvedPageInfo {
  pageKey: string;
  pagePath?: string;
  title: string;
  titleSource: PageTitleSource;
  usedFallback: boolean;
}

export function stripHtmlTags(text: string): string {
  return text.replace(/<[^>]*>/g, '');
}

export function cleanContentObject(content: Record<string, string>): Record<string, string> {
  const cleaned: Record<string, string> = {};

  for (const [key, value] of Object.entries(content)) {
    if (typeof value === 'string') {
      cleaned[key] = stripHtmlTags(value);
    }
  }

  return cleaned;
}

export function getPagePath(pageKey: string): string | undefined {
  const explicitPath = PAGE_KEY_TO_CANONICAL_PATH[pageKey];
  if (explicitPath) {
    return explicitPath;
  }

  const navKey = PAGE_TO_NAV_KEY[pageKey as keyof typeof PAGE_TO_NAV_KEY];
  if (!navKey) {
    return undefined;
  }

  const navPath = NAV_KEY_TO_PAGE_PATH.get(navKey);
  if (!navPath) {
    console.warn(`[search] No navigation href found for nav key "${navKey}" (page ${pageKey}).`);
    return undefined;
  }

  return navPath;
}

function getMetadataPath(pageKey: string): string | undefined {
  return PAGE_KEY_TO_METADATA_PATH[pageKey];
}

export function getPageTitle(
  pageKey: string,
  messages: Record<string, any>,
  locale: string
): string {
  const metadataPath = getMetadataPath(pageKey);

  return resolveTitle(pageKey, messages, locale, {
    metadataPath,
    logMissingPath: !metadataPath,
  }).title;
}

export function resolvePageInfo(
  pageKey: string,
  messages: Record<string, any>,
  locale: string
): ResolvedPageInfo {
  const pagePath = getPagePath(pageKey);
  const metadataPath = getMetadataPath(pageKey);

  if (!pagePath) {
    console.warn(`[search][${locale}] No page path mapping found for page: ${pageKey}`);
  }

  if (!metadataPath) {
    console.warn(`[search][${locale}] No metadata path mapping found for page: ${pageKey}`);
  }

  const { title, source, usedFallback } = resolveTitle(pageKey, messages, locale, {
    metadataPath,
    logMissingPath: false,
  });

  return {
    pageKey,
    pagePath,
    title,
    titleSource: source,
    usedFallback,
  };
}

function resolveTitle(
  pageKey: string,
  messages: Record<string, any>,
  locale: string,
  options: { metadataPath?: string; logMissingPath: boolean }
): TitleResolution {
  const navKey = PAGE_TO_NAV_KEY[pageKey as keyof typeof PAGE_TO_NAV_KEY];

  if (!navKey) {
    console.warn(`[search][${locale}] No navigation key mapping found for page: ${pageKey}`);
  } else {
    const navigationMenu = messages?.NavigationMenu;
    const rawTitle = navigationMenu?.[navKey];

    if (typeof rawTitle === 'string') {
      const trimmed = rawTitle.trim();
      if (trimmed) {
        return { title: trimmed, source: 'navigation', usedFallback: false };
      }
      console.warn(
        `[search][${locale}] Navigation label for key "${navKey}" is empty (page ${pageKey}).`
      );
    } else {
      console.warn(
        `[search][${locale}] Navigation label missing for key "${navKey}" (page ${pageKey}).`
      );
    }
  }

  const metadataPath = options.metadataPath ?? getMetadataPath(pageKey);

  if (metadataPath) {
    const metadataTitle = getMetadataTitle(messages, metadataPath);
    if (metadataTitle) {
      return { title: metadataTitle, source: 'metadata', usedFallback: false };
    }
    console.warn(
      `[search][${locale}] No metadata title found for page path "${metadataPath}" (page ${pageKey}).`
    );
  } else if (options.logMissingPath) {
    console.warn(`[search][${locale}] No metadata path mapping found for page: ${pageKey}`);
  }

  const fallback = generateFallbackTitle(pageKey);
  console.warn(
    `[search][${locale}] Falling back to generated title for ${pageKey}: "${fallback}"`
  );

  return { title: fallback, source: 'fallback', usedFallback: true };
}

function getMetadataTitle(messages: Record<string, any>, pagePath: string): string | undefined {
  const metadata = messages?.MetaData;
  if (!metadata) {
    return undefined;
  }

  const metadataKeyParts = buildMetadataKeyParts(pagePath);
  if (!metadataKeyParts) {
    return undefined;
  }

  let current: unknown = metadata;
  for (const part of metadataKeyParts) {
    if (current && typeof current === 'object' && part in current) {
      current = (current as Record<string, unknown>)[part];
    } else {
      return undefined;
    }
  }

  const title = (current as Record<string, unknown>)?.title;
  return typeof title === 'string' ? title.trim() : undefined;
}

function buildMetadataKeyParts(pagePath: string): string[] | undefined {
  if (!pagePath) {
    return undefined;
  }

  const segments = pagePath.split('/').filter(Boolean);
  if (segments.length === 0) {
    return undefined;
  }

  if (segments.length === 1) {
    return [toPascalCase(segments[0])];
  }

  const [first, ...rest] = segments;
  const prefix = first === 'kite' ? 'KiteSubpages' : first === 'engineer' ? 'EngineerSubpages' : toPascalCase(first);

  return [prefix, ...rest.map(toPascalCase)];
}

function toPascalCase(value: string): string {
  return value
    .split(/[-_]/g)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
}

function generateFallbackTitle(pageKey: string): string {
  return pageKey
    .replace(/Page$/, '')
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (char) => char.toUpperCase())
    .trim();
}