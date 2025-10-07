export interface SearchDocument {
  id: string;
  title: string;        // Page name like "AboutPage"
  locale: string;       // "en-US", "de-DE", "pt-BR"
  pagePath: string;     // URL path like "/about"
  content: MessageObject; // The entire page content as structured object
}
export interface MessageObject {
  [key: string]: string;
}
export interface PageMapping {
  [pagePath: string]: string;
}