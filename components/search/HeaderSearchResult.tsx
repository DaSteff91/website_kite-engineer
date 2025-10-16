"use client";

import { useTranslations } from "next-intl";
import { HeaderSearchResultsProps } from "./types";
import { Button } from "../ui/button";
import { PAGE_TO_NAV_KEY } from "@/lib/constants/search-mappings";

export function HeaderSearchResults({
  results,
  isLoading,
  query,
  onSelect,
}: HeaderSearchResultsProps) {
  const tSearch = useTranslations("SearchBar");
  const tTitle = useTranslations("NavigationMenu");

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
      <div className="absolute top-full left-0 right-0 bg-background/10 backdrop-blur-md  border border-white/20 rounded-b-md shadow-lg">
        <div className="p-6 text-center text-gray-200">
          <p className="font-medium whitespace-normal break-words">
            {tSearch("NoSearchResults")}
            {query}
          </p>
          <p className="text-sm mt-1">{tSearch("NoSearchResultsDetails")}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-b-md shadow-lg max-h-96 overflow-y-auto">
      {results.map((result) => {
        // Extract navigation key from result title
        const navKey =
          PAGE_TO_NAV_KEY[result.title as keyof typeof PAGE_TO_NAV_KEY];
        // Get translated title or fallback to original
        const displayTitle = navKey ? tTitle(navKey) : result.title;

        return (
          <Button
            key={result.id}
            variant="ghost"
            className="w-full h-auto p-4 border-b hover:bg-gray-50 cursor-pointer justify-start text-left normal-case"
            onClick={() => {
              onSelect(result);
            }}
          >
            <div className="flex flex-col items-start w-full">
              <div className="font-medium text-gray-800">{displayTitle}</div>
              <div className="text-sm text-gray-600 line-clamp-2">
                {Object.values(result.content).join(" ").substring(0, 150)}...
              </div>
            </div>
          </Button>
        );
      })}
    </div>
  );
}
