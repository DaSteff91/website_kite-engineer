"use client";

import { useState, useEffect, useRef } from "react";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import { Menu, X, House, ChevronDown, ChevronRight, Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import LocaleSwitcher from "../ui/localeSwitcher";
import {
  NAV_ITEMS,
  NavItem,
  NavSubmenu,
} from "@/lib/constants/navigation-menu";
import { routing } from "@/i18n/routing";
import { Search } from "../search/Search";
import NavElement from "@/components/layout/NavElements";
import { SearchResult } from "../search/types";

export function Header() {
  const t = useTranslations("NavigationMenu");
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMobileItem, setExpandedMobileItem] = useState<string | null>(
    null
  );
  const [expandedMobileSubmenu, setExpandedMobileSubmenu] = useState<
    string | null
  >(null);
  const [expandedDesktopSubmenu, setExpandedDesktopSubmenu] = useState<
    string | null
  >(null);
  const [mounted, setMounted] = useState(false);

  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  // Implementation of the search bar in the header

  const searchBarRef = useRef<HTMLDivElement>(null);

  // Extract current locale from pathname
  const pathSegments = pathname.split("/");
  const currentLocale = ["de-DE", "pt-BR"].includes(pathSegments[1])
    ? pathSegments[1]
    : "en-US";

  function HeaderSearchBar({
    searchQuery,
    onSearchChange,
    onClose,
  }: {
    searchQuery: string;
    onSearchChange: (query: string) => void;
    onClose: () => void;
  }) {
    return (
      <div
        ref={searchBarRef}
        className="flex flex-1 items-center bg-gray-100 rounded-md mx-4"
      >
        <input
          type="text"
          // Replace the "Search later with an next-intl t()"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="flex-1 py-2 px-4 text-lg outline-none placeholder-gray-500 bg-transparent text-gray-800 rounded-l-md"
          autoFocus
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

  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
  const openSearchBar = () => setIsSearchBarOpen(true);
  const closeSearchBar = () => {
    setIsSearchBarOpen(false);
    setSearchQuery("");
  };
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isSearchLoading, setIsSearchLoading] = useState(false);

  useEffect(() => {
    const performSearch = async (query: string) => {
      if (!query.trim()) {
        setSearchResults([]);
        return;
      }

      setIsSearchLoading(true);
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
        setSearchResults(data.hits || []);
      } catch (error) {
        console.error("Search failed:", error);
        setSearchResults([]);
      } finally {
        setIsSearchLoading(false);
      }
    };
    const timeoutId = setTimeout(() => {
      if (searchQuery.trim()) {
        performSearch(searchQuery);
      }
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [searchQuery, locale]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isSearchBarOpen) {
        closeSearchBar();
      }
    };

    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [isSearchBarOpen, closeSearchBar]);

  function HeaderSearchResults({
    results,
    isLoading,
    query,
    onSelect,
  }: {
    results: SearchResult[];
    isLoading: boolean;
    query: string;
    onSelect: (result: SearchResult) => void;
  }) {
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
            <p className="font-medium">No results found for "{query}"</p>
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

  const handleResultSelect = (result: SearchResult) => {
    router.push(`/${locale}${result.pagePath}`);
    closeSearchBar(); // Close search and clear state
  };

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMobileMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
        setExpandedMobileItem(null);
        setExpandedMobileSubmenu(null);
      }

      // Handle click outside for searchbar
      if (
        isSearchBarOpen &&
        searchBarRef.current &&
        !searchBarRef.current.contains(event.target as Node)
      ) {
        closeSearchBar();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen, isSearchBarOpen, closeSearchBar]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setExpandedMobileItem(null);
    setExpandedMobileSubmenu(null);
  }, [pathname]);

  const handleMobileItemClick = (itemKey: string) => {
    if (expandedMobileItem === itemKey) {
      setExpandedMobileItem(null);
      setExpandedMobileSubmenu(null);
    } else {
      setExpandedMobileItem(itemKey);
      setExpandedMobileSubmenu(null);
    }
  };

  const handleMobileSubmenuClick = (submenuKey: string) => {
    setExpandedMobileSubmenu((prev) =>
      prev === submenuKey ? null : submenuKey
    );
  };

  const handleDesktopSubmenuClick = (submenuKey: string) => {
    setExpandedDesktopSubmenu((prev) =>
      prev === submenuKey ? null : submenuKey
    );
  };

  // Helper to map an item to the correct "All X Services" translation key
  const getAllServicesLabel = (item: NavItem) => {
    if (item.key === "kite") return t("allKiteServices");
    if (item.key === "engineer") return t("allEngineeringServices");
    return t(`all_${item.key}_services`);
  };

  if (pathname === "/") return null;

  if (!mounted) {
    return (
      <header className="fixed top-2 left-1/2 transform -translate-x-1/2 w-[95%] max-w-screen-xl z-50 rounded-t-md rounded-b-2xl">
        <div className="bg-background/10 backdrop-blur-md h-16 shadow-[0_2px_8px_-1px_rgba(255,255,255,0.1)] border border-white/20">
          <div className="px-4 md:px-6 h-full flex items-center justify-between">
            <div className="h-[85%] w-auto min-w-[120px] relative flex items-center aspect-auto">
              <Image
                src="/images/logo_dark.svg"
                alt="Site Logo"
                width={120}
                height={56}
                priority
                className="object-contain object-left"
              />
            </div>
            <div className="w-9 h-9" />
          </div>
        </div>
      </header>
    );
  }

  const switchLocale = (newLocale: string) => {
    let cleanPathname = pathname;

    // Remove any existing locale prefix
    routing.locales.forEach((loc) => {
      cleanPathname = cleanPathname.replace(new RegExp(`^/${loc}`), "");
    });

    if (cleanPathname === "") cleanPathname = "/";

    // Navigate via router.replace and let next-intl handle locale
    router.replace(cleanPathname, { locale: newLocale });
  };

  const languages = [
    { value: "en-US", label: "EN", flag: "🇺🇸" },
    { value: "de-DE", label: "DE", flag: "🇩🇪" },
    { value: "pt-BR", label: "PT", flag: "🇧🇷" },
  ];

  return (
    <header className="fixed top-2 left-1/2 transform -translate-x-1/2 w-[95%] max-w-screen-xl z-50 min-h-16 shrink-0">
      <div className="relative">
        <div className="rounded-t-md rounded-b-2xl border border-white/20 shadow-[0_2px_8px_-1px_rgba(255,255,255,0.1)] bg-background/10 backdrop-blur-md">
          <div className="container px-4 md:px-6 h-16 flex items-center justify-between">
            <Link
              href="/"
              className="h-[85%] w-auto min-w-[100px] sm:min-w-[120px] relative flex items-center aspect-auto
              transition-transform hover:scale-105 active:scale-95 duration-200"
            >
              <Image
                src="/images/logo_dark.svg"
                alt="Site Logo"
                width={120}
                height={56}
                priority
                className="object-contain object-left w-auto h-full"
              />
            </Link>

            {/* THIS IS WHERE THE PREVIOUS DESKTOP NAVIGATION HAS HAPPENED */}
            {/* THIS IS WHERE THE PREVIOUS DESKTOP NAVIGATION HAS HAPPENED */}
            {/* THIS IS WHERE THE PREVIOUS DESKTOP NAVIGATION HAS HAPPENED */}

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-4 lg:gap-6 h-full">
              {isSearchBarOpen ? (
                <div className="flex-1 relative">
                  <HeaderSearchBar
                    searchQuery={searchQuery}
                    onSearchChange={setSearchQuery}
                    onClose={closeSearchBar}
                  />
                  <HeaderSearchResults
                    results={searchResults}
                    isLoading={isSearchLoading}
                    query={searchQuery}
                    onSelect={handleResultSelect}
                  />
                </div>
              ) : (
                <>
                  {/* Normal Navigation Layout */}
                  {NAV_ITEMS.map((item) => {
                    const Icon = item.icon as React.ElementType | undefined;
                    return (
                      <div key={item.key} className="h-full flex items-center">
                        {item.hasDropdown ? (
                          <DropdownMenu modal={false}>
                            <DropdownMenuTrigger asChild>
                              <button
                                className={cn(
                                  "h-full flex items-center px-2 lg:px-3 text-base lg:text-[1.2rem] font-medium gap-1",
                                  "transition-all duration-200 hover:scale-105 border-b-2 border-transparent",
                                  "hover:text-white hover:drop-shadow-[0_0_4px_rgba(255,255,255,0.3)]",
                                  pathname.startsWith(item.href)
                                    ? "text-white border-white drop-shadow-[0_0_4px_rgba(255,255,255,0.3)]"
                                    : "text-white/90"
                                )}
                              >
                                {item.href === "/" ? (
                                  <House className="h-5 w-5" />
                                ) : Icon ? (
                                  <Icon className="h-5 w-5" />
                                ) : (
                                  t(item.key)
                                )}
                                <ChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                              </button>
                            </DropdownMenuTrigger>

                            <DropdownMenuContent
                              align="start"
                              className="w-72 bg-background/95 backdrop-blur-md border border-white/20 p-1"
                              sideOffset={8}
                            >
                              {/* Top "All X Services" Link */}
                              <DropdownMenuItem asChild className="p-0">
                                <Link
                                  href={item.href}
                                  className={cn(
                                    "w-full cursor-pointer transition-colors px-3 py-3 text-base font-medium rounded-sm block text-left",
                                    "hover:text-white hover:drop-shadow-[0_0_4px_rgba(255,255,255,0.3)] hover:bg-white/5",
                                    pathname === item.href
                                      ? "text-white bg-white/10 drop-shadow-[0_0_4px_rgba(255,255,255,0.3)]"
                                      : "text-white/90"
                                  )}
                                >
                                  {getAllServicesLabel(item)}
                                </Link>
                              </DropdownMenuItem>
                              <DropdownMenuSeparator className="bg-white/20 my-1" />

                              {/* Direct Service Links (skip first plain link to avoid duplicate) */}
                              {item.dropdownItems?.map(
                                (dropdownItem, index) => {
                                  if (
                                    "isSubmenu" in dropdownItem &&
                                    dropdownItem.isSubmenu
                                  ) {
                                    const submenu = dropdownItem as NavSubmenu;
                                    return (
                                      <div
                                        key={submenu.key}
                                        className="space-y-1"
                                      >
                                        <button
                                          onClick={() =>
                                            handleDesktopSubmenuClick(
                                              submenu.key
                                            )
                                          }
                                          className="w-full flex items-center justify-between px-3 py-2 hover:bg-white/5 rounded-sm text-left transition-colors"
                                        >
                                          <span className="text-sm font-medium text-white/80 hover:text-white">
                                            {t(submenu.key)}
                                          </span>
                                          <ChevronRight
                                            className={cn(
                                              "h-4 w-4 transition-transform duration-200 text-white/60",
                                              expandedDesktopSubmenu ===
                                                submenu.key && "rotate-90"
                                            )}
                                          />
                                        </button>

                                        {expandedDesktopSubmenu ===
                                          submenu.key && (
                                          <div className="pl-4 space-y-1">
                                            {submenu.items.map((subItem) => (
                                              <DropdownMenuItem
                                                key={subItem.href}
                                                asChild
                                                className="p-0"
                                              >
                                                <Link
                                                  href={subItem.href}
                                                  className={cn(
                                                    "w-full cursor-pointer transition-colors px-3 py-2 text-sm font-medium rounded-sm block text-left",
                                                    "hover:text-white hover:drop-shadow-[0_0_4px_rgba(255,255,255,0.3)] hover:bg-white/5",
                                                    pathname === subItem.href
                                                      ? "text-white bg-white/10 drop-shadow-[0_0_4px_rgba(255,255,255,0.3)]"
                                                      : "text-white/70"
                                                  )}
                                                >
                                                  {t(subItem.key)}
                                                </Link>
                                              </DropdownMenuItem>
                                            ))}
                                          </div>
                                        )}
                                        <DropdownMenuSeparator className="bg-white/10 my-1" />
                                      </div>
                                    );
                                  } else if (
                                    !("isSubmenu" in dropdownItem) &&
                                    index > 0
                                  ) {
                                    // index > 0 prevents rendering the first plain item (duplicate)
                                    const navItem = dropdownItem as NavItem;
                                    return (
                                      <DropdownMenuItem
                                        key={navItem.href || index}
                                        asChild
                                        className="p-0"
                                      >
                                        <Link
                                          href={navItem.href || "#"}
                                          className={cn(
                                            "w-full cursor-pointer transition-colors px-3 py-2 text-sm font-medium rounded-sm block text-left",
                                            "hover:text-white hover:drop-shadow-[0_0_4px_rgba(255,255,255,0.3)] hover:bg-white/5",
                                            pathname === navItem.href
                                              ? "text-white bg-white/10 drop-shadow-[0_0_4px_rgba(255,255,255,0.3)]"
                                              : "text-white/90"
                                          )}
                                        >
                                          {t(navItem.key)}
                                        </Link>
                                      </DropdownMenuItem>
                                    );
                                  }
                                  return null;
                                }
                              )}
                            </DropdownMenuContent>
                          </DropdownMenu>
                        ) : (
                          <Link
                            href={item.href}
                            className={cn(
                              "h-full flex items-center px-2 lg:px-3 text-base lg:text-[1.2rem] font-medium",
                              "transition-all duration-200 hover:scale-105 border-b-2 border-transparent",
                              "hover:text-white hover:drop-shadow-[0_0_4px_rgba(255,255,255,0.3)]",
                              pathname === item.href
                                ? "text-white border-white drop-shadow-[0_0_4px_rgba(255,255,255,0.3)]"
                                : "text-white/90"
                            )}
                          >
                            {item.href === "/" ? (
                              <House className="h-5 w-5" />
                            ) : Icon ? (
                              <Icon className="h-5 w-5" />
                            ) : (
                              t(item.key)
                            )}
                          </Link>
                        )}
                      </div>
                    );
                  })}
                  <NavElement as="div" ariaLabel="locale switcher">
                    <LocaleSwitcher />
                  </NavElement>
                  <NavElement as="div" ariaLabel="search">
                    <button
                      onClick={openSearchBar}
                      className="inline-flex items-center justify-center p-0 w-7 h-7 min-w-0 min-h-0 self-center transition-colors hover:scale-105 hover:drop-shadow-[0_0_4px_rgba(255,255,255,0.3)]"
                    >
                      <Image
                        src="/search.svg"
                        alt="Search Icon"
                        width={20}
                        height={20}
                        className="w-7 h-5.5"
                      />
                    </button>
                  </NavElement>
                </>
              )}
            </div>
            <Button
              ref={menuButtonRef}
              variant="ghost"
              size="icon"
              className="md:hidden hover:scale-105 transition-transform p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          ref={mobileMenuRef}
          className={cn(
            "absolute top-full left-0 right-0 mt-2 md:hidden",
            "transition-all duration-300 ease-in-out",
            isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          )}
        >
          <div
            className="rounded-lg border border-white/20 shadow-[0_2px_8px_-1px_rgba(255,255,255,0.1)] bg-background/95 backdrop-blur-md p-4 overflow-y-auto"
            style={{
              maxHeight: "calc(100vh - 4rem)",
              WebkitOverflowScrolling: "touch",
              touchAction: "pan-y",
            }}
          >
            <nav className="flex flex-col gap-2">
              {NAV_ITEMS.map((item) => (
                <div key={item.key}>
                  {item.hasDropdown ? (
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <Link
                          href={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={cn(
                            "flex-1 px-4 py-3 text-lg font-medium rounded-md text-left",
                            "transition-all duration-200",
                            "hover:text-white hover:drop-shadow-[0_0_4px_rgba(255,255,255,0.3)]",
                            pathname === item.href
                              ? "text-white bg-white/10 drop-shadow-[0_0_4px_rgba(255,255,255,0.3)]"
                              : "text-white/90"
                          )}
                        >
                          {getAllServicesLabel(item)}
                        </Link>
                        <button
                          onClick={() => handleMobileItemClick(item.key)}
                          className="p-2 text-white/80 hover:text-white transition-colors"
                        >
                          <ChevronRight
                            className={cn(
                              "h-5 w-5 transition-transform duration-200",
                              expandedMobileItem === item.key && "rotate-90"
                            )}
                          />
                        </button>
                      </div>

                      {expandedMobileItem === item.key && (
                        <div className="pl-4 space-y-2 border-l border-white/20 ml-4">
                          {/* Mobile: filter out the top "All X Services" link (href === item.href) */}
                          {item.dropdownItems
                            ?.filter(
                              (dropdownItem) =>
                                !("isSubmenu" in dropdownItem) &&
                                (dropdownItem as NavItem).href !== item.href
                            )
                            .map((dropdownItem) => {
                              const navItem = dropdownItem as NavItem;
                              return (
                                <Link
                                  key={navItem.href}
                                  href={navItem.href || "#"}
                                  onClick={() => setIsMobileMenuOpen(false)}
                                  className={cn(
                                    "block px-3 py-2 text-base font-medium rounded-md text-left",
                                    "transition-all duration-200",
                                    "hover:text-white hover:bg-white/5 hover:drop-shadow-[0_0_4px_rgba(255,255,255,0.3)]",
                                    pathname === navItem.href
                                      ? "text-white bg-white/10 drop-shadow-[0_0_4px_rgba(255,255,255,0.3)]"
                                      : "text-white/80"
                                  )}
                                >
                                  {t(navItem.key)}
                                </Link>
                              );
                            })}

                          {/* Submenu Items */}
                          {item.dropdownItems
                            ?.filter(
                              (dropdownItem) =>
                                "isSubmenu" in dropdownItem &&
                                dropdownItem.isSubmenu
                            )
                            .map((submenu) => {
                              const subMenuItem = submenu as NavSubmenu;
                              return (
                                <div
                                  key={subMenuItem.key}
                                  className="space-y-1"
                                >
                                  <button
                                    onClick={() =>
                                      handleMobileSubmenuClick(subMenuItem.key)
                                    }
                                    className="w-full flex items-center justify-between px-3 py-2 text-left hover:bg-white/5 rounded-sm transition-colors"
                                  >
                                    <span className="text-base font-medium text-white/80">
                                      {t(subMenuItem.key)}
                                    </span>
                                    <ChevronRight
                                      className={cn(
                                        "h-4 w-4 transition-transform duration-200 text-white/60",
                                        expandedMobileSubmenu ===
                                          subMenuItem.key && "rotate-90"
                                      )}
                                    />
                                  </button>

                                  {expandedMobileSubmenu ===
                                    subMenuItem.key && (
                                    <div className="pl-3 space-y-1">
                                      {subMenuItem.items.map((subItem) => (
                                        <Link
                                          key={subItem.href}
                                          href={subItem.href}
                                          onClick={() =>
                                            setIsMobileMenuOpen(false)
                                          }
                                          className={cn(
                                            "block px-3 py-2 text-sm font-medium rounded-md text-left",
                                            "transition-all duration-200",
                                            "hover:text-white hover:bg-white/5 hover:drop-shadow-[0_0_4px_rgba(255,255,255,0.3)]",
                                            pathname === subItem.href
                                              ? "text-white bg-white/10 drop-shadow-[0_0_4px_rgba(255,255,255,0.3)]"
                                              : "text-white/70"
                                          )}
                                        >
                                          {t(subItem.key)}
                                        </Link>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              );
                            })}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        "px-4 py-3 text-lg font-medium rounded-md",
                        "transition-all duration-200 hover:scale-105",
                        "hover:text-white hover:drop-shadow-[0_0_4px_rgba(255,255,255,0.3)]",
                        "text-left block",
                        pathname === item.href
                          ? "text-white bg-white/10 drop-shadow-[0_0_4px_rgba(255,255,255,0.3)]"
                          : "text-white/90"
                      )}
                    >
                      {t(item.key)}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Additional Mobile Actions - Styled consistently with menu items */}
            {/* <div className="mt-4 pt-4"> */}
            <div className="flex flex-col">
              {/* Mobile Language Switcher */}
              <div className="flex flex-row gap-2">
                {languages
                  .filter((lang) => lang.value !== locale) // hide current
                  .map((lang) => (
                    <button
                      key={lang.value}
                      onClick={() => {
                        switchLocale(lang.value);
                        setIsMobileMenuOpen(false);
                      }}
                      className={cn(
                        "flex-1 flex items-center justify-start gap-2 px-4 py-3 text-lg font-medium rounded-md",
                        "transition-all duration-200",
                        "hover:text-white hover:bg-white/5 hover:drop-shadow-[0_0_4px_rgba(255,255,255,0.3)]",
                        "text-white/90"
                      )}
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.label}</span>
                    </button>
                  ))}
              </div>

              {/* Search Function */}
              <button
                onClick={() => {
                  // Add your search functionality here
                  setIsMobileMenuOpen(false);
                }}
                className={cn(
                  "w-full px-4 pt-3 text-lg font-medium rounded-md text-left",
                  "transition-all duration-200",
                  "hover:text-white hover:bg-white/5 hover:drop-shadow-[0_0_4px_rgba(255,255,255,0.3)]",
                  "text-white/90 mb-2"
                )}
              >
                {t("search")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
