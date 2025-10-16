"use client";

import { useTranslations } from "next-intl";
import { HeaderSearchResultsProps } from "./types";
import { Button } from "../ui/button";

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

  const t = useTranslations("SearchBar");

  if (results.length === 0 && query) {
    return (
      <div className="absolute top-full left-0 right-0 bg-background/10 backdrop-blur-md  border border-white/20 rounded-b-md shadow-lg">
        <div className="p-6 text-center text-gray-200">
          <p className="font-medium whitespace-normal break-words">
            {t("NoSearchResults")}
            {query}
          </p>
          <p className="text-sm mt-1">{t("NoSearchResultsDetails")}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-b-md shadow-lg max-h-96 overflow-y-auto">
      {results.map((result) => (
        <Button
          key={result.id}
          variant="ghost"
          className="w-full h-auto p-4 border-b hover:bg-gray-50 cursor-pointer justify-start text-left normal-case"
          onClick={() => {
            onSelect(result);
          }}
        >
          <div className="flex flex-col items-start w-full">
            <div className="font-medium text-gray-800">{result.title}</div>
            <div className="text-sm text-gray-600 line-clamp-2">
              {Object.values(result.content).join(" ").substring(0, 150)}...
            </div>
          </div>
        </Button>
      ))}
    </div>
  );
}
