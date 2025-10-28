import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { PAGE_TO_JSON_KEY, PAGE_TO_NAV_KEY } from '@/lib/constants/search-mappings';
import { cleanContentObject, getNavigationTitle } from '@/lib/utils/search-utils';
import { SearchDocument } from '@/lib/schemas/search-schemas';
import {
  extractSubsectionsFromObject,
  getHeroTitleFromObject,
  getSectionsFromObject,
} from '@/lib/utils/extractSubsections';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export function createSearchDocuments(): SearchDocument[] {
  const documents: SearchDocument[] = [];
  const locales = ['en-US', 'de-DE', 'pt-BR'];
  const messagesDir = path.join(__dirname, '../../../messages');

  const SECTION_KEY_RX = /^(sectionTitle|sectionSubtitle|sectionDescription)$/i;
  function stripHtmlTags(text: string): string {
    return String(text || '').replace(/<[^>]*>/g, '');
  }
  function clean(text: string): string {
    return stripHtmlTags(text).replace(/\s+/g, ' ').trim();
  }
  
  // Create reverse mapping
  const JSON_KEY_TO_PAGE: { [key: string]: string } = {};
  for (const [path, key] of Object.entries(PAGE_TO_JSON_KEY)) {
    JSON_KEY_TO_PAGE[key] = path;
  }
  
  for (const locale of locales) {
    const messageFile = path.join(messagesDir, `${locale}.json`);
    
    if (!fs.existsSync(messageFile)) {
      console.warn(`Message file not found: ${messageFile}`);
      continue;
    }
    
    const messages = JSON.parse(fs.readFileSync(messageFile, 'utf8'));
    
    for (const pageKey of Object.keys(PAGE_TO_NAV_KEY) as Array<keyof typeof PAGE_TO_NAV_KEY>) {
      const pagePath = JSON_KEY_TO_PAGE[pageKey];
      if (!pagePath) {
        console.warn(`No page path found for JSON key: ${pageKey}`);
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
      const keys = Object.keys(pageObj as Record<string, unknown>);

      const heroTitle = getHeroTitleFromObject(pageObj) ?? '';
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

      const normalizedSections = normalizeCollection([...sections]);
      const normalizedSummaries: string[] = [];
      const normalizedContacts: string[] = [];


      // Build partial SearchDocument (for testing only)
      const document: SearchDocument = {
        id: `${locale}|${String(pageKey)}`,
        title: getNavigationTitle(String(pageKey), messages, locale),
        locale,
        pagePath: (PAGE_TO_NAV_KEY as Record<string, string>)[String(pageKey)],
        content: cleanedContent,
      };

      if (heroTitle) {
        document.heroTitle = heroTitle;
      }

      if (bullets.length) {
        document.bullets = bullets;
      }

      if (parentTitles.length) {
        document.parentTitles = parentTitles;
      }

      if (normalizedSections.length) {
        document.sections = normalizedSections;
      }

      if (normalizedSummaries.length) {
        document.summaries = normalizedSummaries;
      }

      if (normalizedContacts.length) {
        document.contact = normalizedContacts;
      }

      documents.push(document);
    }
  }

  return documents;
}
