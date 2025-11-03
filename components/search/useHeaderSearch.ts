import { useState, useEffect } from 'react';
import { useDebounce } from 'use-debounce';
import { usePathname } from 'next/navigation';
import { SearchResult } from './types';
import { sanitizeSearchQuery } from '@/lib/utils/sanitizeSearch';
import { applyMatchToResult } from '@/lib/utils/search-match';

export function useHeaderSearch() {
  const pathname = usePathname();
  
  // Extract current locale from pathname
  const pathSegments = pathname.split("/");
  const currentLocale = ["de-DE", "pt-BR"].includes(pathSegments[1])
    ? pathSegments[1]
    : "en-US";

  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isSearchLoading, setIsSearchLoading] = useState(false);
  const [debouncedQuery] = useDebounce(searchQuery, 50);

  useEffect(() => {
    const performSearch = async (query: string) => {
      if (!query.trim()) {
        setSearchResults([]);
        return;
      }

      setIsSearchLoading(true);
      try {
        const { cleaned } = sanitizeSearchQuery(query);
        if (!cleaned) {
          setSearchResults([]);
          return;
        }

        const response = await fetch('/api/search', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            q: cleaned,
            filter: [`locale = ${currentLocale}`],
            limit: 20,
          }),
        });

        const data = await response.json();
        const hits = Array.isArray(data.hits)
          ? (data.hits as SearchResult[]).map((hit) =>
              applyMatchToResult({
                ...hit,
                content: hit.content ?? {},
              }),
            )
          : [];

        setSearchResults(hits);
      } catch (error) {
        console.error('Search failed:', error);
        setSearchResults([]);
      } finally {
        setIsSearchLoading(false);
      }
    };

    if (debouncedQuery.trim()) {
      performSearch(debouncedQuery);
    }
  }, [debouncedQuery, currentLocale]);

  return {
    searchQuery,
    setSearchQuery,
    searchResults,
    isSearchLoading,
    currentLocale,
  };
}
