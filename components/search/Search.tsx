"use client";

import { useCallback, useEffect, useState } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebounce } from "use-debounce";
import { SearchResult } from "./types";
import { SearchDialog } from "./SearchDialog";
import { SearchResults } from "./SearchResult";

export function Search() {
  const [isOpen, setIsOpen] = useState(false);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const searchQuery = searchParams.get("q") || "";
  const [debouncedQuery] = useDebounce(searchQuery, 300);

  // Extract current locale from pathname
  const pathSegments = pathname.split("/");
  const currentLocale = ["de-DE", "pt-BR"].includes(pathSegments[1])
    ? pathSegments[1]
    : "en-US";

  const performSearch = useCallback(
    async (query: string) => {
      if (!query.trim()) {
        setResults([]);
        return;
      }

      setIsLoading(true);
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_MEILI_HOST}/indexes/pages/search`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_MEILI_SEARCH_KEY}`,
            },
            body: JSON.stringify({
              q: query,
              filter: [`locale = ${currentLocale}`],
              limit: 20,
            }),
          }
        );

        const data = await response.json();
        setResults(data.hits || []);
      } catch (error) {
        console.error("Search failed:", error);
        setResults([]);
      } finally {
        setIsLoading(false);
      }
    },
    [currentLocale]
  );

  useEffect(() => {
    if (debouncedQuery) {
      performSearch(debouncedQuery);
    } else {
      setResults([]);
    }
  }, [debouncedQuery, performSearch]);

  const handleSearchChange = (query: string) => {
    const params = new URLSearchParams(searchParams);
    if (query) {
      params.set("q", query);
    } else {
      params.delete("q");
    }
    router.replace(`${pathname}?${params.toString()}`);
  };

  const handleResultSelect = (result: SearchResult) => {
    router.push(`/${currentLocale}${result.pagePath}`);
    setIsOpen(false);
  };

  return (
    <SearchDialog
      isOpen={isOpen}
      onOpenChange={setIsOpen}
      searchQuery={searchQuery}
      onSearchChange={handleSearchChange}
    >
      <SearchResults
        results={results}
        isLoading={isLoading}
        onSelect={handleResultSelect}
        query={searchQuery}
      />
    </SearchDialog>
  );
}
