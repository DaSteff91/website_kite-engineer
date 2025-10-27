export type Subsection = {
  parentTitle: string; // discovered or fallback
  items: string[];     // list items or a single description if no explicit lists present
  path: string[];      // JSON path, useful for debugging/ordering
};

export type ExtractedContent = {
  subsections: Subsection[];
  contactTexts: string[];
  summaryTexts: string[];
  ctaTexts: string[];
};

// --- Regex patterns (robust & comprehensive) ---
const LIST_KEY_REGEX =
  /(list[-_]?element\d*|listItem\d*|list[-_]?\d+|items\d*|professionalItems|personalItems)$/i;

const TITLE_KEY_REGEX = /(^title$|[-_]?title$)/i;

const DESCRIPTION_KEY_REGEX =
  /(^description$|sectionDescription$|sectionSubtitle$|subtitle$)/i;

const HERO_KEY_REGEX = /(heroTitle$|[-_]hero$)/i;

const CONTACT_KEY_REGEX = /(^contact$|[-_]contact$)/i;
const SUMMARY_KEY_REGEX = /(^summary$|summary$|[-_](summary|overview|teaser)$)/i;
const CTA_KEY_REGEX = /(cta$|call[-_]?to[-_]?action$)/i;

const UI_DENYLIST = [
  /contact[-_]?button/i,
  /^NavigationMenu$/i,
  /^Footer$/i,
  /footer-/i,
  /back[-_]?to/i,
];

// --- Helpers ---
function isUiKey(key: string) {
  return UI_DENYLIST.some((rx) => rx.test(key));
}

function stripHtmlTags(text: string): string {
  return text.replace(/<[^>]*>/g, '');
}

function normalizeWhitespace(text: string): string {
  return text.replace(/\s+/g, ' ').trim();
}

function sanitizeText(text: string): string {
  // remove HTML, collapse whitespace, trim leading bullets/dashes
  let t = stripHtmlTags(String(text || ''));
  t = t.replace(/^[•\-\u2022]+\s*/g, '');
  return normalizeWhitespace(t);
}

/**
 * Extract hero title from an object (NOT included as a subsection).
 * Use this independently when building your final document.
 */
export function getHeroTitleFromObject(obj: Record<string, any>): string | null {
  if (!obj || typeof obj !== 'object') return null;
  for (const [k, v] of Object.entries(obj)) {
    if (typeof v === 'string' && HERO_KEY_REGEX.test(k)) {
      return sanitizeText(v);
    }
  }
  return null;
}

/**
 * Recursively walk a page object and extract subsection groups.
 * - If an object has list-like keys, collect them grouped by prefix.
 * - If an object has children with `title` and `description`, use them as a subsection.
 * - Skips UI keys and sanitizes text.
 *
 * Returns: Subsection[] (parentTitle, items, path)
 */
export function extractSubsectionsFromObject(
  obj: Record<string, any>,
  ancestors: string[] = []
): ExtractedContent {
  const subsections: Subsection[] = [];
  const contactTexts = new Set<string>();
  const summaryTexts = new Set<string>();
  const ctaTexts = new Set<string>();

  function pushUnique(target: Set<string>, value: unknown, minimumLength = 0) {
    if (typeof value !== 'string') return;
    const cleaned = sanitizeText(value);
    if (!cleaned) return;
    if (minimumLength > 0 && cleaned.length < minimumLength) return;
    target.add(cleaned);
  }

  function inspectNode(node: Record<string, any>, path: string[]) {
    if (!node || typeof node !== 'object' || Array.isArray(node)) return;

    const keys = Object.keys(node);

    // 1) Find explicit list keys grouped by prefix (e.g., "trip-organization-list-element1")
    const listGroups: Record<string, { order: number[]; items: string[] }> = {};

    for (const key of keys) {
      if (isUiKey(key)) continue;
      const val = (node as any)[key];

      if (typeof val === 'string') {
        if (CONTACT_KEY_REGEX.test(key)) {
          pushUnique(contactTexts, val, 20);
        } else if (SUMMARY_KEY_REGEX.test(key)) {
          pushUnique(summaryTexts, val, 16);
        } else if (CTA_KEY_REGEX.test(key)) {
          pushUnique(ctaTexts, val, 8);
        }
      }

      if (typeof val !== 'string') continue; // only string leaf values here
      if (!LIST_KEY_REGEX.test(key)) continue;

      // Derive a stable prefix by stripping the trailing list-suffix pattern
      const prefix = key
        .replace(
          /(-list[-_]?element\d*|listItem\d*|list[-_]?\d+|items\d*|professionalItems|personalItems)$/i,
          ''
        )
        .replace(/[-_]+$/, '') || 'list';

      // parse trailing number for ordering if present
      const numMatch = key.match(/(\d+)(?!.*\d)/);
      const idx = numMatch ? parseInt(numMatch[1], 10) : Number.MAX_SAFE_INTEGER;

      if (!listGroups[prefix]) listGroups[prefix] = { order: [], items: [] };
      listGroups[prefix].order.push(idx);
      listGroups[prefix].items.push(sanitizeText(val));
    }

    // Create subsections from list groups (one per prefix)
    for (const [prefix, data] of Object.entries(listGroups)) {
      // sort by discovered ordering
      const zipped = data.order.map((o, i) => [o, data.items[i]] as const).sort((a, b) => a[0] - b[0]);
      const sortedItems = zipped.map(([, item]) => item).filter(Boolean);

      // Title candidates close to the list prefix
      const candidateTitleKeys = [
        `${prefix}-title`,
        `${prefix}Title`,
        `${prefix}`,
        'title',
      ];

      let parentTitle = '';
      for (const tk of candidateTitleKeys) {
        const v = (node as any)[tk];
        if (typeof v === 'string' && sanitizeText(v).length > 0) {
          parentTitle = sanitizeText(v);
          break;
        }
      }

      // fallback: any sibling title in this node
      if (!parentTitle) {
        const stKey = keys.find((k) => TITLE_KEY_REGEX.test(k) && typeof (node as any)[k] === 'string');
        if (stKey) parentTitle = sanitizeText((node as any)[stKey]);
      }

      // ultimate fallback: build title from last path segment
      if (!parentTitle) {
        const last = path.length ? path[path.length - 1] : 'untitled';
        parentTitle = normalizeWhitespace(
          last.replace(/([A-Z])/g, ' $1').replace(/[-_]+/g, ' ')
        );
      }

      if (sortedItems.length > 0) {
        subsections.push({
          parentTitle,
          items: sortedItems,
          path,
        });
      }
    }

    // 2) If no list groups found here, but there is a 'title' and 'description', treat as one subsection
    if (Object.keys(listGroups).length === 0) {
      const titleKey = keys.find(
        (k) => TITLE_KEY_REGEX.test(k) && typeof (node as any)[k] === 'string'
      );
      const descKey = keys.find(
        (k) => DESCRIPTION_KEY_REGEX.test(k) && typeof (node as any)[k] === 'string'
      );

      if (titleKey && descKey) {
        const title = sanitizeText((node as any)[titleKey]);
        const desc = sanitizeText((node as any)[descKey]);
        if (title && desc) {
          subsections.push({
            parentTitle: title,
            items: [desc],
            path,
          });
        }
      }
    }

    // 3) Recurse into child objects to find nested service items
    for (const key of keys) {
      if (isUiKey(key)) continue;
      const child = (node as any)[key];
      if (child && typeof child === 'object' && !Array.isArray(child)) {
        inspectNode(child, path.concat(key));
      }
    }
  }

  inspectNode(obj, ancestors);
  return {
    subsections,
    contactTexts: Array.from(contactTexts),
    summaryTexts: Array.from(summaryTexts),
    ctaTexts: Array.from(ctaTexts),
  };
}
