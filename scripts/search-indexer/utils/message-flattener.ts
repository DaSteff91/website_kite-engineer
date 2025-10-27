import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { PAGE_TO_JSON_KEY, PAGE_TO_NAV_KEY } from '@/lib/constants/search-mappings';
import { cleanContentObject, getNavigationTitle } from '@/lib/utils/search-utils';
import { SearchDocument } from '@/lib/schemas/search-schemas';
import { extractSubsectionsFromObject } from '@/lib/utils/extractSubsections';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export function createSearchDocuments(): SearchDocument[] {
  const documents: SearchDocument[] = [];
  const locales = ['en-US', 'de-DE', 'pt-BR'];
  const messagesDir = path.join(__dirname, '../../../messages');

  const HERO_KEY_RX = /(heroTitle$|[-_]hero$)/i;
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
      const heroKey = keys.find((k: string) => HERO_KEY_RX.test(k) && typeof pageObj[k] === 'string');
      const heroTitle = heroKey ? clean(pageObj[heroKey]) : (typeof pageObj.heroTitle === 'string' ? clean(pageObj.heroTitle) : '');

      const {
        subsections,
        contactTexts,
        summaryTexts,
        ctaTexts,
      } = extractSubsectionsFromObject(pageObj);

      // Preview created bullets
      const bullets = subsections.map(s => {
        const joined = s.items.join('. ').replace(/\s+/g,' ').trim();
        return `${s.parentTitle}: ${joined}${joined.endsWith('.') ? '' : '.'}`;
      });

      // Align parentTitles to bullets
      const parentTitles = subsections.map(s => s.parentTitle);

      // SECTIONS (title + subtitle + description)
      const sections: string[] = [];
      for (const k of keys) {
        if (SECTION_KEY_RX.test(k) && typeof pageObj[k] === 'string') {
          const val = clean(pageObj[k]);
          if (val) sections.push(val);
        }
      }

      const normalizedSections = Array.from(
        new Set(
          sections
            .concat(summaryTexts)
            .concat(ctaTexts)
            .concat(contactTexts)
            .map((text) => text.replace(/\s+/g, ' ').trim())
            .filter(Boolean)
        )
      );

      const normalizedSummaries = Array.from(
        new Set(
          summaryTexts
            .concat(ctaTexts)
            .map((text) => text.replace(/\s+/g, ' ').trim())
            .filter(Boolean)
        )
      );

      const normalizedContacts = Array.from(
        new Set(contactTexts.map((text) => text.replace(/\s+/g, ' ').trim()).filter(Boolean))
      );

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
