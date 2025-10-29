export interface SearchDocument {
  id: string;
  title: string;        // Page name like "AboutPage"
  locale: string;       // "en-US", "de-DE", "pt-BR"
  pageKey: string;      // JSON namespace key like "AboutPage"
  pagePath: string;     // URL path like "/about"
  heroTitle?: string;
  sections: string[];
  bullets: string[];
  parentTitles: string[];
  content_searchable: string;
  maxWeight: number;
  pageCompleteness: number;
}
export interface MessageObject {
  [key: string]: string;
}
export interface PageMapping {
  [pagePath: string]: string;
}