import fs from 'fs';
import path from 'path';
import { PAGE_TO_NAV_KEY } from '@/lib/constants/search-mappings';
import { cleanContentObject, resolvePageInfo } from '@/lib/utils/search-utils';
import { extractSubsectionsFromObject } from '@/lib/utils/extractSubsections';

const repoRoot = path.join(__dirname, '../..'); // adjust if your scripts folder is elsewhere
const messagesDir = path.join(repoRoot, 'messages');
const locale = 'en-US';
const messageFile = path.join(messagesDir, `${locale}.json`);

if (!fs.existsSync(messageFile)) {
  console.error('messages file not found:', messageFile);
  process.exit(1);
}

const messages = JSON.parse(fs.readFileSync(messageFile, 'utf8'));

console.log(`Loaded ${locale} messages. Scanning pages...`);

for (const pageKey of Object.keys(PAGE_TO_NAV_KEY) as Array<keyof typeof PAGE_TO_NAV_KEY>) {
  const pageContent = messages[pageKey as string];
  if (!pageContent || typeof pageContent !== 'object') {
    console.warn(`Skipping ${pageKey} — no object in JSON`);
    continue;
  }

  // cleaned content (leaves only text strings, HTML stripped)
  const cleanedContent = cleanContentObject(pageContent as Record<string, string>);
  const hasContent = Object.values(cleanedContent).some(v => (v || '').trim().length > 0);
  if (!hasContent) {
    console.warn(`Skipping ${pageKey} — cleaned content empty`);
    continue;
  }

  // extract subsections using your new helper - FIX: access the subsections property
  const extractedContent = extractSubsectionsFromObject(pageContent as Record<string, any>);
  const subsections = extractedContent.subsections;

  const bullets = subsections.map(s => {
    const joined = (s.items || []).join('. ').replace(/\s+/g, ' ').trim();
    return `${s.parentTitle}: ${joined}${joined.endsWith('.') ? '' : '.'}`;
  });

  const parentTitles = subsections.map(s => s.parentTitle || '');
  const sections: string[] = [];
  if (typeof pageContent.sectionTitle === 'string') sections.push(pageContent.sectionTitle.trim());
  if (typeof pageContent.sectionDescription === 'string') sections.push(pageContent.sectionDescription.trim());

  const pageInfo = resolvePageInfo(String(pageKey), messages, locale);
  if (!pageInfo.pagePath) {
    console.warn(`Skipping ${pageKey} — page path mapping missing`);
    continue;
  }

  const docPreview = {
    id: `${locale}|${String(pageKey)}`,
    title: pageInfo.title,
    pageKey: pageInfo.pageKey,
    titleSource: pageInfo.titleSource,
    locale,
    pagePath: pageInfo.pagePath,
    bullets,
    parentTitles,
    sections,
    heroTitle: (pageContent as any).heroTitle || ''
  };

  console.log('-----');
  console.log(JSON.stringify(docPreview, null, 2));
}

console.log('Done.');