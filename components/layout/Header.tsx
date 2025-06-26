"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Sun,
  Moon,
  Globe,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
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

type LinkItem = {
  type: "link";
  label: string;
  href: string;
};

type SubmenuItem = {
  type: "submenu";
  label: string;
  items: LinkItem[];
};

type DropdownItem = LinkItem | SubmenuItem;

export type NavItem = {
  label: string;
  href?: string;
  dropdownItems?: DropdownItem[];
};

const NAV_ITEMS = [
  {
    href: "/kite",
    label: "Kite",
    hasDropdown: true,
    dropdownItems: [
      { href: "/kite", label: "All Kite Services" },
      {
        label: "Freelancer Services",
        isSubmenu: true,
        items: [
          { href: "/kite/freelancer/school-support", label: "School Support" },
          {
            href: "/kite/freelancer/travel-services",
            label: "Travel Services",
          },
          { href: "/kite/freelancer/consulting", label: "Consulting" },
        ],
      },
      {
        label: "Courses",
        isSubmenu: true,
        items: [
          { href: "/kite/courses/theory", label: "Theory Courses" },
          { href: "/kite/courses/starting", label: "Starting Courses" },
          { href: "/kite/courses/advanced", label: "Advanced Courses" },
        ],
      },
    ],
  },
  {
    href: "/engineer",
    label: "Engineer",
    hasDropdown: true,
    dropdownItems: [
      { href: "/engineer", label: "All Engineering Services" },
      {
        label: "Process Engineering",
        isSubmenu: true,
        items: [
          {
            href: "/engineer/process-engineering/process-control",
            label: "Process Control",
          },
          {
            href: "/engineer/process-engineering/process-optimization",
            label: "Process Optimization",
          },
          {
            href: "/engineer/process-engineering/change-management",
            label: "Change Management",
          },
          {
            href: "/engineer/process-engineering/monitoring",
            label: "Monitoring",
          },
        ],
      },
      {
        label: "Process Development",
        isSubmenu: true,
        items: [
          {
            href: "/engineer/process-development/creativity",
            label: "Creativity",
          },
          {
            href: "/engineer/process-development/process-design",
            label: "Process Design",
          },
          {
            href: "/engineer/process-development/simulation-prototyping",
            label: "Simulation & Prototyping",
          },
          {
            href: "/engineer/process-development/equipment-roadmap",
            label: "Equipment Roadmap",
          },
        ],
      },
      {
        label: "Software Development",
        isSubmenu: true,
        items: [
          {
            href: "/engineer/software-development/custom-solutions",
            label: "Custom Solutions",
          },
          {
            href: "/engineer/software-development/database-management",
            label: "Database Management",
          },
          {
            href: "/engineer/software-development/workflow-automation",
            label: "Workflow Automation",
          },
          {
            href: "/engineer/software-development/web-development",
            label: "Web Development",
          },
        ],
      },
      {
        label: "Project Management",
        isSubmenu: true,
        items: [
          {
            href: "/engineer/project-management/project-setup",
            label: "Project Setup",
          },
          {
            href: "/engineer/project-management/timeline-management",
            label: "Timeline Management",
          },
          {
            href: "/engineer/project-management/deviation-management",
            label: "Deviation Management",
          },
          {
            href: "/engineer/project-management/documentation",
            label: "Documentation",
          },
        ],
      },
      {
        label: "Technical Consulting",
        isSubmenu: true,
        items: [
          {
            href: "/engineer/technical-consulting/process-assessment",
            label: "Process Assessment",
          },
          {
            href: "/engineer/technical-consulting/technical-research",
            label: "Technical Research",
          },
          {
            href: "/engineer/technical-consulting/training-knowledge-transfer",
            label: "Training & Knowledge Transfer",
          },
          {
            href: "/engineer/technical-consulting/competitor-analysis",
            label: "Competitor Analysis",
          },
        ],
      },
    ],
  },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
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
        setExpandedMobileItem(null);
        setExpandedMobileSubmenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setExpandedMobileItem(null);
    setExpandedMobileSubmenu(null);
  }, [pathname]);

  const handleMobileItemClick = (itemLabel: string) => {
    if (expandedMobileItem === itemLabel) {
      setExpandedMobileItem(null);
      setExpandedMobileSubmenu(null);
    } else {
      setExpandedMobileItem(itemLabel);
      setExpandedMobileSubmenu(null);
    }
  };

  const handleMobileSubmenuClick = (submenuLabel: string) => {
    if (expandedMobileSubmenu === submenuLabel) {
      setExpandedMobileSubmenu(null);
    } else {
      setExpandedMobileSubmenu(submenuLabel);
    }
  };

  const handleDesktopSubmenuClick = (submenuLabel: string) => {
    if (expandedDesktopSubmenu === submenuLabel) {
      setExpandedDesktopSubmenu(null);
    } else {
      setExpandedDesktopSubmenu(submenuLabel);
    }
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
                        align="start"
                        className="w-72 bg-background/95 backdrop-blur-md border border-white/20 p-1"
                        sideOffset={8}
                      >
                        {/* All Services Link */}
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
                            All {item.label} Services
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator className="bg-white/20 my-1" />

                        {/* Direct Service Links */}
                        {item.dropdownItems?.map((dropdownItem, index) => {
                          if (dropdownItem.isSubmenu) {
                            return (
                              <div
                                key={dropdownItem.label}
                                className="space-y-1"
                              >
                                {/* Submenu Header - Full Line Clickable */}
                                <button
                                  onClick={() =>
                                    handleDesktopSubmenuClick(
                                      dropdownItem.label
                                    )
                                  }
                                  className="w-full flex items-center justify-between px-3 py-2 hover:bg-white/5 rounded-sm text-left transition-colors"
                                >
                                  <span className="text-sm font-medium text-white/80 hover:text-white">
                                    {dropdownItem.label}
                                  </span>
                                  <ChevronRight
                                    className={cn(
                                      "h-4 w-4 transition-transform duration-200 text-white/60",
                                      expandedDesktopSubmenu ===
                                        dropdownItem.label && "rotate-90"
                                    )}
                                  />
                                </button>

                                {/* Expanded Items */}
                                {expandedDesktopSubmenu ===
                                  dropdownItem.label && (
                                  <div className="pl-4 space-y-1">
                                    {dropdownItem.items?.map(
                                      (subItem, index) => {
                                        // Submenu header (no href)
                                        if (!("href" in subItem)) {
                                          return (
                                            <div
                                              key={`header-${index}`}
                                              className="px-3 py-2 text-sm font-semibold text-white/60 uppercase tracking-wide"
                                            >
                                              {subItem.label}
                                            </div>
                                          );
                                        }

                                        // Real link item
                                        return (
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
                                              {subItem.label}
                                            </Link>
                                          </DropdownMenuItem>
                                        );
                                      }
                                    )}
                                  </div>
                                )}

                                <DropdownMenuSeparator className="bg-white/10 my-1" />
                              </div>
                            );
                          } else if (!dropdownItem.isSubmenu && index > 0) {
                            return (
                              <DropdownMenuItem
                                key={dropdownItem.href}
                                asChild
                                className="p-0"
                              >
                                <Link
                                  href={dropdownItem.href}
                                  className={cn(
                                    "w-full cursor-pointer transition-colors px-3 py-2 text-sm font-medium rounded-sm block text-left",
                                    "hover:text-white hover:drop-shadow-[0_0_4px_rgba(255,255,255,0.3)] hover:bg-white/5",
                                    pathname === dropdownItem.href
                                      ? "text-white bg-white/10 drop-shadow-[0_0_4px_rgba(255,255,255,0.3)]"
                                      : "text-white/90"
                                  )}
                                >
                                  {dropdownItem.label}
                                </Link>
                              </DropdownMenuItem>
                            );
                          }
                          return null;
                        })}
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
          <div className="rounded-lg border border-white/20 shadow-[0_2px_8px_-1px_rgba(255,255,255,0.1)] bg-background/95 backdrop-blur-md p-4">
            <nav className="flex flex-col gap-2">
              {NAV_ITEMS.map((item) => (
                <div key={item.href}>
                  {item.hasDropdown ? (
                    <div className="space-y-2">
                      {/* Main Item with Expand/Collapse - Full Line Clickable */}
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
                          All {item.label} Services
                        </Link>
                        <button
                          onClick={() => handleMobileItemClick(item.label)}
                          className="p-2 text-white/80 hover:text-white transition-colors"
                        >
                          <ChevronRight
                            className={cn(
                              "h-5 w-5 transition-transform duration-200",
                              expandedMobileItem === item.label && "rotate-90"
                            )}
                          />
                        </button>
                      </div>

                      {/* Expanded Items */}
                      {expandedMobileItem === item.label && (
                        <div className="pl-4 space-y-2 border-l border-white/20 ml-4">
                          {item.dropdownItems
                            ?.filter(
                              (item) =>
                                !item.isSubmenu &&
                                item.href !== "/kite" &&
                                item.href !== "/engineer"
                            )
                            .map((dropdownItem) => (
                              <Link
                                key={dropdownItem.href}
                                href={dropdownItem.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={cn(
                                  "block px-3 py-2 text-base font-medium rounded-md text-left",
                                  "transition-all duration-200",
                                  "hover:text-white hover:bg-white/5 hover:drop-shadow-[0_0_4px_rgba(255,255,255,0.3)]",
                                  pathname === dropdownItem.href
                                    ? "text-white bg-white/10 drop-shadow-[0_0_4px_rgba(255,255,255,0.3)]"
                                    : "text-white/80"
                                )}
                              >
                                {dropdownItem.label}
                              </Link>
                            ))}

                          {/* Submenu Items */}
                          {item.dropdownItems
                            ?.filter((item) => item.isSubmenu)
                            .map((submenu) => (
                              <div key={submenu.label} className="space-y-1">
                                {/* Submenu Header - Full Line Clickable */}
                                <button
                                  onClick={() =>
                                    handleMobileSubmenuClick(submenu.label)
                                  }
                                  className="w-full flex items-center justify-between px-3 py-2 text-left hover:bg-white/5 rounded-sm transition-colors"
                                >
                                  <span className="text-base font-medium text-white/80">
                                    {submenu.label}
                                  </span>
                                  <ChevronRight
                                    className={cn(
                                      "h-4 w-4 transition-transform duration-200 text-white/60",
                                      expandedMobileSubmenu === submenu.label &&
                                        "rotate-90"
                                    )}
                                  />
                                </button>

                                {/* Submenu Items */}
                                {expandedMobileSubmenu === submenu.label && (
                                  <div className="pl-3 space-y-1">
                                    {submenu.items?.map((subItem) => (
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
                                        {subItem.label}
                                      </Link>
                                    ))}
                                  </div>
                                )}
                              </div>
                            ))}
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
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
