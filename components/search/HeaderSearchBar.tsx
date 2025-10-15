"use client";

import { X } from "lucide-react";

interface HeaderSearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onClose: () => void;
  autoFocus?: boolean;
  //   inputRef?: React.RefObject<HTMLInputElement>;
}

export function HeaderSearchBar({
  searchQuery,
  onSearchChange,
  onClose,
  autoFocus = false,
}: //   inputRef,
HeaderSearchBarProps) {
  return (
    <div
      //   ref={inputRef}
      className="flex flex-1 items-center bg-gray-100 rounded-md mx-4"
    >
      <input
        // ref={inputRef}
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        className="flex-1 py-2 px-4 text-lg outline-none placeholder-gray-500 bg-transparent text-gray-800 rounded-l-md"
        autoFocus={autoFocus}
      />
      <button
        onClick={onClose}
        className="p-2 text-gray-500 hover:text-gray-700 transition-colors rounded-r-md hover:bg-gray-200"
      >
        <X className="w-5 h-5" />
      </button>
    </div>
  );
}
