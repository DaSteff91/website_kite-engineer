"use client";

import { SearchResult } from "./types";

interface HeaderSearchResultsProps {
  results: SearchResult[];
  isLoading: boolean;
  query: string;
  onSelect: (result: SearchResult) => void;
}

export function HeaderSearchResults({
  results,
  isLoading,
  query,
  onSelect,
}: HeaderSearchResultsProps) {
  if (!query) return null;

  if (isLoading) {
    return (
      <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-b-md shadow-lg">
        <div className="p-4 text-gray-500 flex items-center justify-center">
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-gray-500 mr-2"></div>
          Searching...
        </div>
      </div>
    );
  }

  if (results.length === 0 && query) {
    return (
      <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-b-md shadow-lg">
        <div className="p-6 text-center text-gray-500">
          <p className="font-medium whitespace-normal break-words">
            No results found for "{query}"
          </p>
          <p className="text-sm mt-1">
            Try different keywords or check spelling
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-b-md shadow-lg max-h-96 overflow-y-auto">
      {results.map((result) => (
        <div
          key={result.id}
          className="p-4 border-b hover:bg-gray-50 cursor-pointer"
          onClick={() => onSelect(result)}
        >
          <div className="font-medium text-gray-800">{result.title}</div>
          <div className="text-sm text-gray-600 line-clamp-2">
            {Object.values(result.content).join(" ").substring(0, 150)}...
          </div>
        </div>
      ))}
    </div>
  );
}
