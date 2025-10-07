"use client";

import { SearchResult } from "./types";

interface SearchResultsProps {
  results: SearchResult[];
  isLoading: boolean;
  query: string;
  onSelect: (result: SearchResult) => void;
}

export function SearchResults({
  results,
  isLoading,
  query,
}: SearchResultsProps) {
  if (!query) {
    return (
      <div className="p-8 text-center text-gray-500">
        Start typing to search across all pages
      </div>
    );
  }

  if (isLoading) {
    return <div className="p-8 text-center text-gray-500">Searching...</div>;
  }

  if (results.length === 0) {
    return (
      <div className="p-8 text-center text-gray-500">
        No results found for "{query}"
      </div>
    );
  }

  return (
    <div className="max-h-96 overflow-y-auto">
      {results.map((result, index) => (
        <div
          key={result.id}
          className="px-6 py-4 border-b hover:bg-gray-50 cursor-pointer"
        >
          <div className="flex justify-between items-start mb-1">
            <span className="font-medium text-sm text-blue-600">
              {result.title.replace("Page", "")}
            </span>
            <span className="text-xs text-gray-400 capitalize">
              {result.locale}
            </span>
          </div>
          <div className="text-sm text-gray-700 line-clamp-2">
            {Object.values(result.content).join(" ").substring(0, 150)}...
          </div>
        </div>
      ))}
    </div>
  );
}
