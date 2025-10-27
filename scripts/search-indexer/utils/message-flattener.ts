import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Import from new locations
import { PAGE_TO_JSON_KEY, PAGE_TO_NAV_KEY } from '@/lib/constants/search-mappings';
import { cleanContentObject, getNavigationTitle } from '@/lib/utils/search-utils';
import { SearchDocument } from '@/lib/schemas/search-schemas';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export function createSearchDocuments(): SearchDocument[] {
  const documents: SearchDocument[] = [];
  const locales = ['en-US', 'de-DE', 'pt-BR'];
  const messagesDir = path.join(__dirname, '../../../messages');
  
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
    
    for (const pageKey of Object.keys(PAGE_TO_NAV_KEY)) {
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
      
      // Find the page title for the search result
      const title = getNavigationTitle(pageKey, messages, locale);
      
      documents.push({
        id: `${locale}-${pageKey}`,
        title: title,
        locale: locale,
        pagePath: pagePath,
        content: cleanedContent
      });
    }
  }
  
  return documents;
}