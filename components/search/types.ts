export interface SearchResult {
  id: string;
  title: string;
  locale: string;
  pagePath: string;
  content: Record<string, string>;
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