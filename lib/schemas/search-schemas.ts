export interface SearchDocument {
  id: string;
  title: string;
  locale: string;
  pageKey: string;
  pagePath: string;
  titleSource?: 'navigation' | 'metadata' | 'fallback';
  heroTitle?: string;
  sections: string[];
  bullets: string[];
  parentTitles: string[];
  maxWeight: number;
  pageCompleteness: number;
}

export type MessageObject = Record<string, string>;
export type PageMapping = Record<string, string>;