'use client';

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Sun, Moon, Globe, ChevronDown } from "lucide-react";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Commented out for later implementation
/*const LANGUAGES = [
  { code: "en", label: "English" },
  { code: "pt-BR", label: "Português (Brasil)" },
  { code: "de", label: "Deutsch" },
];*/

const NAV_ITEMS = [
  { 
    href: "/kite", 
    label: "Kite",
    hasDropdown: true,
    dropdownItems: [
      { href: "/kite", label: "All Kite Services" },
      { href: "/kite/school-support", label: "School Support" },
      { href: "/kite/travel-services", label: "Travel Services" },
      { href: "/kite/consulting", label: "Consulting" },
      { href: "/kite/theory", label: "Theory Courses" },
      { href: "/kite/starting", label: "(Re-)Starting" },
      { href: "/kite/advanced", label: "Advanced Courses" },
    ]
  },
  { 
    href: "/engineer", 
    label: "Engineer",
    hasDropdown: true,
    dropdownItems: [
      { href: "/engineer", label: "All Engineering Services" },
      { href: "/engineer/process-engineering", label: "Process Engineering" },
      { href: "/engineer/process-development", label: "Process Development" },
      { href: "/engineer/software-development", label: "Software Development" },
      { href: "/engineer/project-management", label: "Project Management" },
      { href: "/engineer/technical-consulting", label: "Technical Consulting" },
    ]
  },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  
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
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

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

  return (
    <header className="fixed top-2 left-1/2 transform -translate-x-1/2 w-[95%] max-w-screen-xl z-50">
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

            <div className="hidden md:flex items-center gap-4 lg:gap-6 h-full">
              {NAV_ITEMS.map((item) => (
                <div key={item.href} className="h-full flex items-center">
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
                          {item.label}
                          <ChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                        </button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent 
                        align="center" 
                        className="w-56 bg-background/95 backdrop-blur-md border border-white/20 p-1"
                        sideOffset={8}
                      >
                        {item.dropdownItems?.map((dropdownItem, index) => (
                          <div key={dropdownItem.href}>
                            <DropdownMenuItem asChild className="p-0">
                              <Link
                                href={dropdownItem.href}
                                className={cn(
                                  "w-full cursor-pointer transition-colors px-2 py-3 text-base font-medium rounded-sm block",
                                  "hover:text-white hover:drop-shadow-[0_0_4px_rgba(255,255,255,0.3)] hover:bg-white/5",
                                  pathname === dropdownItem.href
                                    ? "text-white bg-white/10 drop-shadow-[0_0_4px_rgba(255,255,255,0.3)]"
                                    : "text-white/90"
                                )}
                              >
                                {dropdownItem.label}
                              </Link>
                            </DropdownMenuItem>
                            {index === 0 && <DropdownMenuSeparator className="bg-white/20 my-1" />}
                          </div>
                        ))}
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
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}

              {/* Commented out for later implementation
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="hover:scale-105 transition-transform">
                    <Globe className="h-5 w-5" />
                    <span className="sr-only">Select language</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {LANGUAGES.map((lang) => (
                    <DropdownMenuItem key={lang.code}>
                      {lang.label}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="hover:scale-105 transition-transform"
              >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
                <span className="sr-only">Toggle theme</span>
              </Button>
              */}
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
            "transition-all duration-200 ease-in-out",
            isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          )}
        >
          <div className="rounded-lg border border-white/20 shadow-[0_2px_8px_-1px_rgba(255,255,255,0.1)] bg-background/95 backdrop-blur-md p-4">
            <nav className="flex flex-col gap-2">
              {NAV_ITEMS.map((item) => (
                <div key={item.href}>
                  {item.hasDropdown ? (
                    <div className="space-y-2">
                      <Link
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={cn(
                          "block px-4 py-3 text-lg font-medium rounded-md",
                          "transition-all duration-200 hover:scale-105",
                          "hover:text-white hover:drop-shadow-[0_0_4px_rgba(255,255,255,0.3)]",
                          "text-center border-b border-white/10 mb-2",
                          pathname.startsWith(item.href)
                            ? "text-white bg-white/10 drop-shadow-[0_0_4px_rgba(255,255,255,0.3)]"
                            : "text-white/90"
                        )}
                      >
                        {item.label} - All Services
                      </Link>
                      <div className="pl-4 space-y-1">
                        {item.dropdownItems?.slice(1).map((dropdownItem, index) => (
                          <div key={dropdownItem.href}>
                            <Link
                              href={dropdownItem.href}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className={cn(
                                "block px-3 py-2 text-base font-medium rounded-md",
                                "transition-all duration-200",
                                "hover:text-white hover:bg-white/5 hover:drop-shadow-[0_0_4px_rgba(255,255,255,0.3)]",
                                pathname === dropdownItem.href
                                  ? "text-white bg-white/10 drop-shadow-[0_0_4px_rgba(255,255,255,0.3)]"
                                  : "text-white/80"
                              )}
                            >
                              {dropdownItem.label}
                            </Link>
                            {index < item.dropdownItems!.slice(1).length - 1 && (
                              <div className="border-b border-white/10 my-1 mx-3" />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        "px-4 py-3 text-lg font-medium rounded-md",
                        "transition-all duration-200 hover:scale-105",
                        "hover:text-white hover:drop-shadow-[0_0_4px_rgba(255,255,255,0.3)]",
                        "text-center block",
                        pathname === item.href
                          ? "text-white bg-white/10 drop-shadow-[0_0_4px_rgba(255,255,255,0.3)]"
                          : "text-white/90"
                      )}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              
              {/* Commented out for later implementation
              <hr className="my-2 border-white/10" />
              
              <Button
                variant="ghost"
                className="justify-start gap-2 hover:scale-105 transition-transform"
                onClick={() => {
                  setTheme(theme === "dark" ? "light" : "dark");
                  setIsMobileMenuOpen(false);
                }}
              >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
                Toggle theme
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="w-full justify-start gap-2">
                    <Globe className="h-5 w-5" />
                    Select Language
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {LANGUAGES.map((lang) => (
                    <DropdownMenuItem key={lang.code} onClick={() => setIsMobileMenuOpen(false)}>
                      {lang.label}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              */}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}