'use client';

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
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  if (pathname === "/") return null;

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) {
    return (
      <header className="fixed top-2 left-1/2 transform -translate-x-1/2 w-[95%] max-w-screen-xl z-50 rounded-t-md rounded-b-2xl overflow-hidden">
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
    <header className="fixed top-2 left-1/2 transform -translate-x-1/2 w-[95%] max-w-screen-xl z-50 rounded-t-md rounded-b-2xl overflow-hidden">
      <div className="absolute inset-0 border border-white/20 shadow-[0_2px_8px_-1px_rgba(255,255,255,0.1)] bg-background/10 backdrop-blur-md" />

      <div className="container px-4 md:px-6 h-16 relative flex items-center justify-between">
        <Link
          href="/"
          className="h-[85%] w-auto min-w-[120px] relative flex items-center aspect-auto
          transition-transform hover:scale-105 active:scale-95 duration-200"
        >
          <Image
            src="/images/logo_dark.svg"
            alt="Site Logo"
            width={120}
            height={56}
            priority
            className="object-contain object-left"
          />
        </Link>

        <div className="hidden md:flex items-center gap-6 h-full">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "h-full flex items-center px-3 text-sm font-medium",
                "transition-all duration-200 hover:scale-105 border-b-2 border-transparent",
                "hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]",
                pathname === item.href
                  ? "text-white border-white drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]"
                  : "text-white/90"
              )}
            >
              {item.label}
            </Link>
          ))}

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
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden hover:scale-105 transition-transform"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden pt-4 pb-2 bg-background/95 rounded-lg mt-2 px-4">
          <div className="flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-all duration-200",
                  "hover:scale-105 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]",
                  pathname === item.href
                    ? "text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]"
                    : "text-white/90"
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <hr className="border-white/20 my-2" />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="w-full justify-start gap-2 hover:scale-105 transition-transform">
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
              className="w-full justify-start gap-2 hover:scale-105 transition-transform"
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
    </header>
  );
}