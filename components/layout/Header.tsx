"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Sun, Moon, Globe } from "lucide-react";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const LANGUAGES = [
  { code: "en", label: "English" },
  { code: "pt-BR", label: "Português (Brasil)" },
  { code: "de", label: "Deutsch" },
];

const NAV_ITEMS = [
  { href: "/kite", label: "Kite" },
  { href: "/engineer", label: "Engineer" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  if (pathname === "/") return null;

  // Could be used when something shall appear different after the app has been scrolled through
  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) {
    return (
      <header className="h-16 fixed top-0 left-0 right-0 z-50 bg-[#40e0d0]/80 backdrop-blur-md">
        <div className="container mx-auto px-4 md:px-6 h-full">
          <div className="flex items-center justify-between h-full">
            <div className="h-[3.5rem] w-[120px] relative">
              <Image
                src="/images/logo_dark.svg"
                alt="Site Logo"
                width={120}
                height={56}
                priority
                className="object-contain object-left"
              />
            </div>
            <div className="w-9 h-9" /> {/* Spacer maintains layout */}
          </div>
        </div>
      </header>
    );
  }
  return (
    <header className="h-16 fixed top-0 left-0 right-0 z-50">
      {/* Glass background layer (unchanged from your original) */}
      <div
        className={cn(
          "absolute inset-0 border-b border-white/30 shadow-[0_4px_12px_rgba(100,210,255,0.2)]",
          isScrolled
            ? "bg-[#40e0d0]/80 backdrop-blur-md"
            : "bg-[#40e0d0]/80 backdrop-blur-md"
        )}
      />

      {/* Content layer with explicit sizing */}
      <div className="container mx-auto px-4 md:px-6 h-full relative">
        <nav className="flex items-center justify-between h-full">
          {/* Logo - Now with stable sizing */}
          <Link
            href="/"
            className="h-[3.5rem] w-auto min-w-[120px] relative flex items-center"
            // This maintains exact height matching header
          >
            <Image
              src="/images/logo_dark.svg"
              alt="Site Logo"
              width={120} // Fixed dimensions prevent layout shifts
              height={56} // h-16 (4rem) - some padding
              priority
              className="object-contain object-left" // Better image control
            />
          </Link>

          {/* Desktop Nav - Stable version */}
          <div className="hidden md:flex items-center gap-6 h-full">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "h-full flex items-center px-3 text-sm font-medium",
                  "transition-colors hover:text-primary border-b-2 border-transparent",
                  pathname === item.href
                    ? "text-primary border-primary"
                    : "text-white/90 hover:text-white"
                )}
              >
                {item.label}
              </Link>
            ))}

            {/* Language and theme buttons*/}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
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

            {/* Mobile button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </nav>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden pt-4 pb-2 bg-background/95 rounded-lg mt-2">
            <div className="flex flex-col gap-4">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    pathname === item.href
                      ? "text-primary"
                      : "text-muted-foreground"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <hr className="border-border my-2" />
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="w-full justify-start gap-2"
                  >
                    <Globe className="h-5 w-5" />
                    Select Language
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {LANGUAGES.map((lang) => (
                    <DropdownMenuItem key={lang.code}>
                      {lang.label}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              <Button
                variant="ghost"
                className="w-full justify-start gap-2"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
                Toggle theme
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
