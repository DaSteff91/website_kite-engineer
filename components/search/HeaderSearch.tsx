"use client";

import { useHeaderSearch } from "./useHeaderSearch";
import { HeaderSearchBar } from "./HeaderSearchBar";
import { HeaderSearchResults } from "./HeaderSearchResult";
import { SearchResult } from "./types";

interface HeaderSearchProps {
  onResultSelect: (result: SearchResult) => void;
  onClose: () => void;
  //   searchBarRef: React.RefObject<HTMLInputElement | null>;
}

export function HeaderSearch({
  onResultSelect,
  onClose,
}: //   searchBarRef,
HeaderSearchProps) {
  const { searchQuery, setSearchQuery, searchResults, isSearchLoading } =
    useHeaderSearch();

  return (
    <div className="flex-1 relative">
      <HeaderSearchBar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onClose={onClose}
        // inputRef={searchBarRef} // Pass the ref down
      />
      <HeaderSearchResults
        results={searchResults}
        isLoading={isSearchLoading}
        query={searchQuery}
        onSelect={onResultSelect}
      />
    </div>
  );
}
