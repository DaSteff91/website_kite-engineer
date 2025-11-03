export interface SearchResultMatch {
  field?: string;
  elementId?: string;
  start?: number;
  length?: number;
}

export interface SearchResult {
  id: string;
  title: string;
  locale: string;
  pagePath: string;
  content: Record<string, string>;
  sections?: string[];
  bullets?: string[];
  parentTitles?: string[];
  heroTitle?: string;
  match?: SearchResultMatch;
  matchesInfo?: Record<string, unknown>;
  _matchesInfo?: Record<string, unknown>;
  _matchesPosition?: Record<string, unknown>;
}

export interface HeaderSearchResultsProps {
  results: SearchResult[];
  isLoading: boolean;
  query: string;
  onSelect: (result: SearchResult) => void;
}

export interface HeaderSearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onClose: () => void;
  autoFocus?: boolean;
  //   inputRef?: React.RefObject<HTMLInputElement>;
}

export interface HeaderSearchProps {
  onResultSelect: (result: SearchResult) => void;
  onClose: () => void;
  //   searchBarRef: React.RefObject<HTMLInputElement | null>;
}