"use client";

import { X } from "lucide-react";
import { useTranslations } from "next-intl";
import { Input } from "../ui/input";
import { HeaderSearchBarProps } from "./types";
import { Button } from "../ui/button";

export function HeaderSearchBar({
  searchQuery,
  onSearchChange,
  onClose,
  autoFocus = false,
}: //   inputRef,
HeaderSearchBarProps) {
  const t = useTranslations("SearchBar");

  return (
    <div
      //   ref={inputRef}
      className="flex flex-1 items-center rounded-md mx-4"
    >
      <Input
        // ref={inputRef}
        type="text"
        placeholder={t("SearchBarPlaceholder")}
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        className="flex-1 py-2 px-4 text-lg border border-white/20 placeholder-gray-200  bg-transparent text-gray-200 rounded-l-md"
        autoFocus={autoFocus}
        id="SearchInput"
        style={{
          caretColor: "white",
        }}
      />
      <Button
        variant="ghost"
        size="icon"
        onClick={onClose}
        className="p-2 text-gray-200 hover:text-gray-600 transition-colors rounded-r-md hover:bg-gray-200"
      >
        <X className="w-5 h-5" />
      </Button>
    </div>
  );
}
