import type { SearchDocument } from '@/lib/schemas/search-schemas';
import { searchTokenize } from '@/lib/utils/searchTokenize';
import { createSearchDocuments } from './utils/message-flattener';

type FieldKind = 'list' | 'parentTitle' | 'sectionDescription' | 'heroTitle' | 'other';

type FieldEntry = {
  label: string;
  text: string;
  kind: FieldKind;
};

function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}

function countSentences(text: string): number {
  const matches = text.match(/[.!?]/g);
  return matches ? matches.length : 0;
}

function computeDensityScore(text: string, isList: boolean): number {
  const { tokens, uniqueTokens } = searchTokenize(text, { withUnique: true });
  const wordCount = tokens.length;

  if (wordCount === 0) {
    return 0;
  }

  const sentenceCount = countSentences(text);
  const uniqueTokenCount = uniqueTokens.length;

  const wordCountNorm = clamp(wordCount / 200, 0, 1);
  const sentenceCountNorm = clamp(sentenceCount / 10, 0, 1);
  const uniqueTokenRatio = clamp(uniqueTokenCount / wordCount, 0, 1);
  const listPresence = isList ? 1 : 0;

  const density =
    0.45 * wordCountNorm +
    0.25 * sentenceCountNorm +
    0.2 * uniqueTokenRatio +
    0.1 * listPresence;

  return clamp(density, 0, 1);
}

function computeEffectiveWeight(text: string, kind: FieldKind): number {
  const normalizedText = text.trim();
  if (!normalizedText) {
    return 0;
  }

  const baseWeights: Record<FieldKind, number> = {
    list: 1.0,
    parentTitle: 0.8,
    sectionDescription: 0.6,
    heroTitle: 0.3,
    other: 0.4,
  };

  const baseWeight = baseWeights[kind];
  const densityScore = computeDensityScore(normalizedText, kind === 'list');
  return baseWeight * densityScore;
}

function buildFieldEntries(document: SearchDocument): FieldEntry[] {
  const entries: FieldEntry[] = [];

  document.bullets.forEach((text, index) => {
    entries.push({ label: `bullet[${index}]`, text, kind: 'list' });
  });

  document.parentTitles.forEach((text, index) => {
    entries.push({ label: `parentTitle[${index}]`, text, kind: 'parentTitle' });
  });

  document.sections.forEach((text, index) => {
    entries.push({ label: `section[${index}]`, text, kind: 'sectionDescription' });
  });

  if (document.heroTitle) {
    entries.push({ label: 'heroTitle', text: document.heroTitle, kind: 'heroTitle' });
  }

  if (document.content_searchable) {
    entries.push({ label: 'content_searchable', text: document.content_searchable, kind: 'other' });
  }

  return entries;
}

function summarizeWeights(document: SearchDocument): { entries: Array<FieldEntry & { weight: number }>; maxWeight: number } {
  const entries = buildFieldEntries(document).map((entry) => ({
    ...entry,
    weight: computeEffectiveWeight(entry.text, entry.kind),
  }));

  const maxWeight = entries.reduce((acc, entry) => (entry.weight > acc ? entry.weight : acc), 0);

  return { entries, maxWeight };
}

const localeArg = process.argv[2];
const pageKeyArg = process.argv[3];

const locale = localeArg ?? 'en-US';

console.log(`Generating search documents for locale: ${locale}`);
if (pageKeyArg) {
  console.log(`Filtering for page key: ${pageKeyArg}`);
}

const documents = createSearchDocuments();
const availableLocales = Array.from(new Set(documents.map((doc) => doc.locale))).sort();
const filteredDocuments = documents.filter((doc) => doc.locale === locale && (!pageKeyArg || doc.pageKey === pageKeyArg));

if (filteredDocuments.length === 0) {
  const availableForLocale = documents
    .filter((doc) => doc.locale === locale)
    .map((doc) => doc.pageKey)
    .sort();

  console.warn(`No documents found for locale ${locale}${pageKeyArg ? ` and page key ${pageKeyArg}` : ''}.`);
  if (availableForLocale.length > 0) {
    console.warn(`Available page keys for ${locale}: ${availableForLocale.join(', ')}`);
  } else {
    console.warn(`Available locales: ${availableLocales.join(', ')}`);
  }
  process.exit(0);
}

console.log(`Found ${filteredDocuments.length} documents for locale ${locale}.`);

for (const document of filteredDocuments) {
  const { entries, maxWeight } = summarizeWeights(document);

  console.log('-----');
  console.log(JSON.stringify(document, null, 2));

  console.log('Weight breakdown:');
  entries
    .filter((entry) => entry.weight > 0)
    .sort((a, b) => b.weight - a.weight)
    .forEach((entry) => {
      const pct = Math.round(entry.weight * 100);
      console.log(`  • ${entry.label} (${entry.kind}) -> ${pct}`);
    });

  const roundedMax = Math.round(maxWeight * 100);
  console.log(`Computed maxWeight: ${roundedMax}`);
  console.log(`Document maxWeight: ${document.maxWeight}`);
  console.log(`Page completeness: ${document.pageCompleteness}`);
}

console.log('Done.');
