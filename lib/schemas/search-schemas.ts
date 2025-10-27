export interface SearchDocument {
  id: string;
  title: string;
  locale: string;
  pagePath: string;
  content: Record<string, string>;
  heroTitle?: string;
  sections?: string[];
  summaries?: string[];
  contact?: string[];
  bullets?: string[];
  parentTitles?: string[];
}

export type MessageObject = Record<string, string>;
export type PageMapping = Record<string, string>;