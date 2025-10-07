export interface SearchDocument {
  id: string;
  locale: string;
  pageKey: string;
  pagePath: string;
  pageTitle: string;
  content: string;
  sections: string[];
  lastIndexed: string;
}

export interface MessageObject {
  [key: string]: string | MessageObject;
}

export interface PageMapping {
  [pagePath: string]: string;
}