export type Subsection = {
  parentTitle: string; // discovered or fallback
  items: string[];     // list items or a single description if no explicit lists present
  path: string[];      // JSON path, useful for debugging/ordering
};

// --- Regex patterns (kept & extended where needed) ---
const LIST_KEY_REGEX =
  /(list[-_]?element\d*|listItem\d*|list[-_]?\d+|items\d*|professionalItems|personalItems)$/i;

const TITLE_KEY_REGEX = /(^title$|[-_]?title$)/i;

const DESCRIPTION_KEY_REGEX =
  /(^description$|sectionDescription$|sectionSubtitle$|subtitle$)/i;

const HERO_KEY_REGEX = /(heroTitle$|[-_]hero$)/i;

const SECTION_TITLE_RX = /(^(.*[-_])?section[-_]?title$)/i;
const SECTION_SUBTITLE_RX = /(^(.*[-_])?section[-_]?subtitle$|^sectionDescription$)/i;
const CONTACT_SUMMARY_RX = /(^(.*[-_])?contact$)/i;
const CONTACT_BUTTON_RX = /contact[-_]?button/i;

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
  let t = stripHtmlTags(String(text ?? ''));
  t = t.replace(/^[•\-\u2022]+\s*/g, ''); // trim leading bullets/dashes
  return normalizeWhitespace(t);
}

/**
 * Extract hero title from an object (NOT included as a subsection).
 * Supports both "heroTitle" and "<slug>-hero" shapes.
 */
export function getHeroTitleFromObject(obj: Record<string, any>): string | null {
  if (!obj || typeof obj !== 'object') return null;
  for (const [k, v] of Object.entries(obj)) {
    if (typeof v === 'string' && HERO_KEY_REGEX.test(k)) {
      const s = sanitizeText(v);
      if (s) return s;
    }
  }
  return null;
}

/**
 * Collect page-level sections: section title, subtitle/description,
 * and "contact" summary (NOT the contact-button).
 * Returns a string[] you can assign to your document's `sections`.
 */
export function getSectionsFromObject(obj: Record<string, any>): string[] {
  const out: string[] = [];

  function walk(node: any) {
    if (!node || typeof node !== 'object') return;

    for (const [k, v] of Object.entries(node)) {
      if (typeof v === 'string') {
        // section title / subtitle / description anywhere
        if (/(^(.*[-_])?section[-_]?title$)/i.test(k)) out.push(sanitizeText(v));
        if (/(^(.*[-_])?section[-_]?subtitle$|^sectionDescription$)/i.test(k)) out.push(sanitizeText(v));
        if (/^sectionTitle$/i.test(k)) out.push(sanitizeText(v));
        if (/^sectionSubtitle$/i.test(k)) out.push(sanitizeText(v));
        if (/^sectionDescription$/i.test(k)) out.push(sanitizeText(v));

        // contact summary (NOT contact-button), anywhere
        if (/(^(.*[-_])?contact$)/i.test(k) && !/contact[-_]?button/i.test(k)) {
          out.push(sanitizeText(v));
        }
      } else if (v && typeof v === 'object') {
        walk(v);
      }
    }
  }

  walk(obj);
  return Array.from(new Set(out.filter(Boolean)));
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
): Subsection[] {
  const subsections: Subsection[] = [];

  function inspectNode(node: Record<string, any>, path: string[]) {
    if (!node || typeof node !== 'object' || Array.isArray(node)) return;

    // NOTE: Plain JSON → string keys are sufficient
    const keys = Object.keys(node);

    // 1) Collect explicit list keys grouped by prefix (e.g., "trip-organization-list-element1")
    const listGroups: Record<string, { order: number[]; items: string[] }> = {};

    for (const key of keys) {
      if (isUiKey(key)) continue;

      const val = (node as any)[key];
      if (typeof val !== 'string') continue; // handle only string leaves here
      if (!LIST_KEY_REGEX.test(key)) continue;

      // Derive a stable prefix by stripping the trailing list-suffix pattern
      const prefix =
        key
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
        if (typeof v === 'string') {
          const s = sanitizeText(v);
          if (s) {
            parentTitle = s;
            break;
          }
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
  return subsections;
}
