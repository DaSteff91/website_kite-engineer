import { MeiliSearch } from 'meilisearch';
import { Settings } from 'meilisearch';
import { STOP_WORDS } from '@/lib/constants/search-stopwords';

export function createMeilisearchClient(): MeiliSearch {
  const host = process.env.MEILISEARCH_HOST || 'https://meilisearch.kite-engineer.de/';
  const apiKey = process.env.MEILISEARCH_API_KEY;
  
  if (!apiKey) {
    throw new Error('MEILISEARCH_API_KEY environment variable is required');
  }
  
  return new MeiliSearch({ host, apiKey });
}

export async function configureIndex(client: MeiliSearch) {
  const index = client.index('pages');
  
  const settings: Settings = {
    searchableAttributes: [
      'bullets',
      'parentTitles',
      'sections',
      'heroTitle',
    ],
    filterableAttributes: ['locale', 'pagePath', 'pageKey'],
    sortableAttributes: ['title'],
    rankingRules: ['typo', 'words', 'proximity', 'attribute', 'exactness', 'sort', 'desc(maxWeight)', 'desc(pageCompleteness)'],
    stopWords: STOP_WORDS,
  };
  
  await index.updateSettings(settings);
  return index;
}