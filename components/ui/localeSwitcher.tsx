"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import { useState, useEffect, useRef } from "react";
import { Globe } from "lucide-react";

export default function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  // stateparameter that holds the selected language made by the user
  const [selectedLocale, setSelectedLocale] = useState(locale);

  // state to control the globe-triggered dropdown
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setSelectedLocale(locale);
  }, [locale]);

  // Listening for clicks outside the switcher in order to close it
  const switcherRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        switcherRef.current &&
        !switcherRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const switchLocale = (newLocale: string) => {
    // Change the displayed language in the switcher
    setSelectedLocale(newLocale);

    // close the dropdown (if open)
    setIsOpen(false);

    // 1. Get the current (potentially corrupted) pathname
    const currentPathname = pathname; // e.g., "/pt-BR/about"

    // 2. Remove ANY existing locale segment from the pathname
    let cleanPathname = currentPathname;
    routing.locales.forEach((loc) => {
      // This regex matches a locale at the very start of the path
      cleanPathname = cleanPathname.replace(new RegExp(`^/${loc}`), "");
    });

    // 3. If the path is empty after stripping, it was the homepage
    if (cleanPathname === "") {
      cleanPathname = "/";
    }

    // 4. Now navigate to the new locale with the clean path
    router.replace(cleanPathname, { locale: newLocale });
    console.log("Raw pathname:", currentPathname);
    console.log("Cleaned pathname:", cleanPathname);
  };

  const languages = [
    { value: "en-US", label: "EN", flag: "🇺🇸" },
    { value: "de-DE", label: "DE", flag: "🇩🇪" },
    { value: "pt-BR", label: "PT", flag: "🇧🇷" },
  ];

  return (
    <div className="inline-block relative" ref={switcherRef}>
      <button
        type="button"
        aria-label="Select language"
        aria-haspopup="menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((s) => !s)}
        className="locale-switcher-button inline-flex items-center justify-center p-0 w-5 h-5 min-w-0 min-h-0 self-center hover:scale-105 hover:drop-shadow-[0_0_4px_rgba(255,255,255,0.3)]"
      >
        <Globe className="locale-switcher-icon block w-5 h-5" size={20} />
      </button>

      {isOpen && (
        <ul
          role="menu"
          className="locale-switcher-dropdown absolute right-0 mt-1 rounded-md border bg-background/95 backdrop-blur-md p-1 z-50"
        >
          {languages.map((language) => (
            <li key={language.value} role="none">
              <button
                role="menuitem"
                type="button"
                className="flex flex-nowrap w-full text-left text-white/90 px-3 py-2 rounded-sm hover:bg-white/5 gap-2"
                onClick={() => switchLocale(language.value)}
              >
                <span className="mr-2">{language.flag}</span>
                <span>{language.label}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
