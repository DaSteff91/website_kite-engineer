import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { PAGE_TO_NAV_KEY } from '@/lib/constants/search-mappings';
import { cleanContentObject, resolvePageInfo } from '@/lib/utils/search-utils';
import { SearchDocument } from '@/lib/schemas/search-schemas';
import {
  extractSubsectionsFromObject,
  getHeroTitleFromObject,
  getSectionsFromObject,
} from '@/lib/utils/extractSubsections';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

type FieldKind = 'list' | 'parentTitle' | 'sectionDescription' | 'heroTitle' | 'other';

const BASE_WEIGHTS: Record<FieldKind, number> = {
  list: 1.0,
  parentTitle: 0.8,
  sectionDescription: 0.6,
  heroTitle: 0.2,
  other: 0.4,
};

function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}

function tokenize(text: string): string[] {
  const MIN_TOKEN_LEN = 2;
  return text
    .toLowerCase()
    .split(/\s+/)
    .map((token) => token.trim())
    .filter((token) => token && /[a-z0-9]/i.test(token) && token.length >= MIN_TOKEN_LEN);
}

function countSentences(text: string): number {
  const matches = text.match(/[.!?]/g);
  return matches ? matches.length : 0;
}

function computeDensityScore(text: string, isList: boolean): number {
  const tokens = tokenize(text);
  const wordCount = tokens.length;

  if (wordCount === 0) {
    return 0;
  }

  const sentenceCount = countSentences(text);
  const uniqueTokenCount = new Set(tokens).size;

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

  const baseWeight = BASE_WEIGHTS[kind];
  const densityScore = computeDensityScore(normalizedText, kind === 'list');
  return baseWeight * densityScore;
}

export function createSearchDocuments(): SearchDocument[] {
  const documents: SearchDocument[] = [];
  const locales = ['en-US', 'de-DE', 'pt-BR'];
  const messagesDir = path.join(__dirname, '../../../messages');

  function stripHtmlTags(text: string): string {
    return String(text || '').replace(/<[^>]*>/g, '');
  }
  function clean(text: string): string {
    return stripHtmlTags(text).replace(/\s+/g, ' ').trim();
  }
  
  for (const locale of locales) {
    const messageFile = path.join(messagesDir, `${locale}.json`);
    
    if (!fs.existsSync(messageFile)) {
      console.warn(`Message file not found: ${messageFile}`);
      continue;
    }
    
    const messages = JSON.parse(fs.readFileSync(messageFile, 'utf8'));
    
    for (const pageKey of Object.keys(PAGE_TO_NAV_KEY) as Array<keyof typeof PAGE_TO_NAV_KEY>) {
      const pageInfo = resolvePageInfo(String(pageKey), messages, locale);

      if (!pageInfo.pagePath) {
        continue;
      }

      const pageContent = messages[pageKey];
      
      if (!pageContent || typeof pageContent !== 'object') {
        console.warn(`JSON key ${pageKey} not found in ${locale}.json or is not an object`);
        continue;
      }

      const cleanedContent = cleanContentObject(pageContent);
      const hasContent = Object.values(cleanedContent).some(value => value.trim().length > 0);

      if (!hasContent) {
        console.warn(`No text content found for ${pageKey} in ${locale}`);
        continue;
      }

      const pageObj = messages[pageKey];

      const heroTitleRaw = getHeroTitleFromObject(pageObj) ?? '';
      const heroTitle = heroTitleRaw ? clean(heroTitleRaw) : '';
      const sections = getSectionsFromObject(pageObj);
      const subsections = extractSubsectionsFromObject(pageObj);

      // Preview created bullets
      const bullets = subsections.map(s => {
        const joined = s.items.join('. ').replace(/\s+/g,' ').trim();
        return `${s.parentTitle}: ${joined}${joined.endsWith('.') ? '' : '.'}`;
      });

      const parentTitles = subsections.map(s => s.parentTitle);

      const normalizeCollection = (values: Iterable<string>): string[] =>
        Array.from(
          new Set(
            Array.from(values)
              .map((value) => clean(value))
              .filter(Boolean)
          )
        );

      const normalizedBullets = normalizeCollection(bullets);
      const normalizedParentTitles = normalizeCollection(parentTitles);
      const normalizedSections = normalizeCollection([...sections]);

      const totalFields = Object.keys(cleanedContent).length;
      const nonEmptyFields = Object.values(cleanedContent).filter(value => clean(value).length > 0).length;
      const pageCompleteness = totalFields > 0 ? Number((nonEmptyFields / totalFields).toFixed(2)) : 0;

      const usedStrings = new Set<string>([
        ...normalizedSections,
        ...normalizedParentTitles,
        ...normalizedBullets,
      ]);
      if (heroTitle) {
        usedStrings.add(heroTitle);
      }

      const fallbackParts = normalizeCollection(Object.values(cleanedContent));
      const fallbackFiltered = fallbackParts.filter((part) => !usedStrings.has(part));
      const fallbackContent = fallbackFiltered.length ? fallbackFiltered : fallbackParts;

      const fieldEntries: Array<{ text: string; kind: FieldKind }> = [];

      normalizedBullets.forEach((text) => fieldEntries.push({ text, kind: 'list' }));
      normalizedParentTitles.forEach((text) => fieldEntries.push({ text, kind: 'parentTitle' }));
      normalizedSections.forEach((text) => fieldEntries.push({ text, kind: 'sectionDescription' }));
      if (heroTitle) {
        fieldEntries.push({ text: heroTitle, kind: 'heroTitle' });
      }

      const maxWeight = fieldEntries.reduce((acc, entry) => {
        const weight = computeEffectiveWeight(entry.text, entry.kind);
        return weight > acc ? weight : acc;
      }, 0);

      const document: SearchDocument = {
        id: `${locale}|${String(pageKey)}`,
        title: pageInfo.title,
        locale,
        pageKey: pageInfo.pageKey,
        pagePath: pageInfo.pagePath,
        titleSource: pageInfo.titleSource,
        sections: normalizedSections,
        bullets: normalizedBullets,
        parentTitles: normalizedParentTitles,
        maxWeight: Math.round(maxWeight * 100),
        pageCompleteness,
      };

      if (heroTitle) {
        document.heroTitle = heroTitle;
      }

      documents.push(document);
    }
  }

  return documents;
}
