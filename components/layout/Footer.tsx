"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

const SOCIAL_LINKS = [
  // { icon: Facebook, href: "#", label: "Facebook" },
  // { icon: Twitter, href: "#", label: "Twitter" },
  {
    icon: Instagram,
    href: "https://www.instagram.com/steffkiteengineer/",
    label: "Instagram",
  },
  {
    icon: Linkedin,
    href: "www.linkedin.com/in/stefan-merthan-09a264158",
    label: "LinkedIn",
  },
  { icon: Github, href: "https://github.com/DaSteff91", label: "GitHub" },
];

export function Footer() {
  const pathname = usePathname();
  if (pathname === "/") return null;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-3 text-center sm:text-left">
            <h3 className="text-lg font-semibold">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:stefan@kite-engineer.de"
                  className="hover:text-primary text-sm block break-all text-muted-foreground "
                >
                  stefan@kite-engineer.de
                </a>
              </li>
              <li>
                <PhoneNumberReveal />
              </li>
            </ul>
          </div>

          <div className="space-y-3 text-center sm:text-left">
            <h3 className="text-lg font-semibold" id="footer-quick-links">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/kite"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  id="footer-text-kite"
                >
                  Kite
                </Link>
              </li>
              <li>
                <Link
                  href="/engineer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  id="footer-text-engineer"
                >
                  Engineer
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  id="footer-text-about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  id="footer-text-contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3 text-center sm:text-left">
            <h3 className="text-lg font-semibold">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/privacy"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  id="footer-text-privacy"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/imprint"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  id="footer-text-imprint"
                >
                  Imprint
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3 text-center sm:text-left">
            <h3 className="text-lg font-semibold">Follow Me</h3>
            <div className="flex justify-center sm:justify-start gap-4 flex-wrap">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-muted-foreground hover:text-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="h-5 w-5" />
                  <span className="sr-only">{social.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p className="break-words" id="break-words">
            © {currentYear} Kite-Engineer by Stefan Merthan. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function PhoneNumberReveal() {
  const [revealed, setRevealed] = useState(false);
  const [copied, setCopied] = useState(false);
  const phoneNumber = "+491719501856";
  const telNumber = phoneNumber.replace(/[^\d+]/g, "");

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(telNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      onClick={() => !revealed && setRevealed(true)}
      className={`${!revealed ? "cursor-pointer" : ""} w-full`}
    >
      {revealed ? (
        <div className="flex flex-col sm:flex-row sm:items-center justify-center sm:justify-start gap-1">
          <a
            href={`tel:${telNumber}`}
            className="hover:text-primary text-sm text-muted-foreground text-center sm:text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {phoneNumber}
          </a>
          <button
            onClick={handleCopy}
            className="text-xs text-muted-foreground hover:text-primary text-center sm:text-left"
          >
            {copied ? "(Copied!)" : "(Copy)"}
          </button>
        </div>
      ) : (
        <span
          className="text-sm text-muted-foreground text-center sm:text-left block"
          id="phone-number-reveal-text"
        >
          Click to reveal phone number
        </span>
      )}
    </div>
  );
}
