import { MeiliSearch} from 'meilisearch';
import { Settings } from 'meilisearch';

export function createMeilisearchClient(): MeiliSearch {
  const host = process.env.MEILI_HOST || 'http://localhost:7700';
  const apiKey = process.env.MEILI_MASTER_KEY;
  
  if (!apiKey) {
    throw new Error('MEILI_MASTER_KEY environment variable is required');
  }
  
  return new MeiliSearch({ host, apiKey });
}

export async function configureIndex(client: MeiliSearch) {
  const index = client.index('pages');
  
  const settings: Settings = {
    // Search in all nested fields of the content object
    searchableAttributes: ['content'],
    filterableAttributes: ['locale', 'pagePath', 'title'],
    sortableAttributes: ['title'],
    rankingRules: ['words', 'typo', 'proximity', 'attribute', 'sort', 'exactness'],
    stopWords: ['der', 'die', 'das', 'the', 'a', 'an', 'and'],
    synonyms: {
      'apc': ['advanced process control'],
      'spc': ['statistical process control'],
      'ai': ['artificial intelligence']
    }
  };
  
  await index.updateSettings(settings);
  return index;
}