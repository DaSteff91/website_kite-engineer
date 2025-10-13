"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { Search, X } from "lucide-react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";

interface SearchDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  children: React.ReactNode;
}

export function SearchDialog({
  isOpen,
  onOpenChange,
  searchQuery,
  onSearchChange,
  children,
}: SearchDialogProps) {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onOpenChange}>
      <Dialog.Trigger asChild>
        <button className="inline-flex items-center justify-center p-0 w-7 h-7 min-w-0 min-h-0 self-center transition-colors hover:scale-105 hover:drop-shadow-[0_0_4px_rgba(255,255,255,0.3)]">
          {/* <Search className="text-xl w-6 h-6block" size={20} /> */}
          <Image
            src="/search.svg"
            alt="Search Icon"
            width={20}
            height={20}
            className="w-7 h-5.5 "
          />
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
        <Dialog.Content className="fixed top-1/4 left-1/2 transform -translate-x-1/2 w-full max-w-2xl bg-white rounded-lg shadow-xl">
          <Dialog.Title>Search Bar</Dialog.Title>
          <div className="flex items-center border-b">
            <Search className="w-5 h-5 mx-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search across all pages..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="flex-1 py-4 pr-4 text-lg outline-none placeholder-gray-400"
              autoFocus
            />
            <button
              onClick={() => onOpenChange(false)}
              className="p-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
