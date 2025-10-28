import fs from 'fs';
import path from 'path';
import { PAGE_TO_NAV_KEY } from '@/lib/constants/search-mappings';
import { cleanContentObject, resolvePageInfo } from '@/lib/utils/search-utils';
import { extractSubsectionsFromObject, getHeroTitleFromObject, getSectionsFromObject } from '@/lib/utils/extractSubsections';

const repoRoot = path.join(__dirname, '../..'); // adjust if needed
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

  // NEW: hero + sections using the extractor helpers
  const heroTitle = getHeroTitleFromObject(pageContent as Record<string, any>) ?? '';
  const sections = getSectionsFromObject(pageContent as Record<string, any>);

  // extract subsections → bullets/parentTitles
  const subsections = extractSubsectionsFromObject(pageContent as Record<string, any>);

  const bullets = subsections.map(s => {
    const joined = (s.items || []).join('. ').replace(/\s+/g, ' ').trim();
    return `${s.parentTitle}: ${joined}${joined.endsWith('.') ? '' : '.'}`;
  });

  const parentTitles = subsections.map(s => s.parentTitle || '');

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
    sections,     // now includes sectionTitle/Subtitle/Description + *-contact
    heroTitle     // now supports heroTitle and *-hero
  };

  console.log('-----');
  console.log(JSON.stringify(docPreview, null, 2));
}

console.log('Done.');
