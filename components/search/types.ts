export interface SearchResult {
  id: string;
  title: string;
  locale: string;
  pagePath: string;
  content: Record<string, string>;
}