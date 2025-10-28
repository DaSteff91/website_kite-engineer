export interface SearchDocument {
  id: string;
  title: string;        // Page name like "AboutPage"
  locale: string;       // "en-US", "de-DE", "pt-BR"
  pageKey: string;      // JSON namespace key like "AboutPage"
  pagePath: string;     // URL path like "/about"
  content: MessageObject; // The entire page content as structured object
  heroTitle?: string;
  sections?: string[];
  summaries?: string[];
  contact?: string[];
  bullets?: string[];
  parentTitles?: string[];
}
export interface MessageObject {
  [key: string]: string;
}
export interface PageMapping {
  [pagePath: string]: string;
}