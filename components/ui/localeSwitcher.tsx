"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import { useState, useEffect } from "react";

export default function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  // stateparameter that holds the selected language made by the user
  const [selectedLocale, setSelectedLocale] = useState(locale);

  useEffect(() => {
    setSelectedLocale(locale);
  }, [locale]);

  const switchLocale = (newLocale: string) => {
    // Change the displayed language in the switcher
    setSelectedLocale(newLocale);

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
    { value: "en-US", label: "English", flag: "🇺🇸" },
    { value: "de-DE", label: "Deutsch", flag: "🇩🇪" },
    { value: "pt-BR", label: "Português", flag: "🇧🇷" },
  ];

  return (
    <div className="locale-switcher">
      <select
        className="locale-select"
        value={selectedLocale}
        onChange={(e) => switchLocale(e.target.value)}
        aria-label="Select language"
      >
        {languages.map((language) => (
          <option key={language.value} value={language.value}>
            {language.flag} {language.label}
          </option>
        ))}
      </select>

      {/* Mobile-friendly dropdown indicator */}
      <div className="select-arrow">▼</div>
    </div>
  );
}
