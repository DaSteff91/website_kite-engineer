"use client";

import { Link, usePathname } from "@/i18n/navigation";
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";

const SOCIAL_LINKS = [
  {
    icon: Instagram,
    href: "https://www.instagram.com/steffkiteengineer/",
    labelKey: "footer-social-instagram",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/stefan-merthan-09a264158",
    labelKey: "footer-social-linkedin",
  },
  {
    icon: Github,
    href: "https://github.com/DaSteff91",
    labelKey: "footer-social-github",
  },
];

export function Footer() {
  const pathname = usePathname();
  if (pathname === "/") return null;

  const t = useTranslations("Footer");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact */}
          <div className="space-y-3 text-center sm:text-left">
            <h3 className="text-lg font-semibold" id="footer-contact">
              {t("footer-contact")}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={`mailto:${t("footer-contact-email")}`}
                  className="hover:text-primary text-sm block break-all text-muted-foreground "
                  id="footer-contact-email"
                >
                  {t("footer-contact-email")}
                </a>
              </li>
              <li>
                <PhoneNumberReveal />
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 text-center sm:text-left">
            <h3 className="text-lg font-semibold" id="footer-quick-links">
              {t("footer-quick-links")}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/kite"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  id="footer-text-kite"
                >
                  {t("footer-text-kite")}
                </Link>
              </li>
              <li>
                <Link
                  href="/engineer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  id="footer-text-engineer"
                >
                  {t("footer-text-engineer")}
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  id="footer-text-about"
                >
                  {t("footer-text-about")}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  id="footer-text-contact"
                >
                  {t("footer-text-contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-3 text-center sm:text-left">
            <h3 className="text-lg font-semibold" id="footer-legal">
              {t("footer-legal")}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/privacy"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  id="footer-text-privacy"
                >
                  {t("footer-text-privacy")}
                </Link>
              </li>
              <li>
                <Link
                  href="/imprint"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  id="footer-text-imprint"
                >
                  {t("footer-text-imprint")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Follow Me */}
          <div className="space-y-3 text-center sm:text-left">
            <h3 className="text-lg font-semibold" id="footer-follow-me">
              {t("footer-follow-me")}
            </h3>
            <div className="flex justify-center sm:justify-start gap-4 flex-wrap">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.labelKey}
                  href={social.href}
                  className="text-muted-foreground hover:text-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="h-5 w-5" />
                  <span className="sr-only">{t(social.labelKey)}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p className="break-words" id="footer-copyright">
            {t("footer-copyright", { year: currentYear })}
          </p>
        </div>
      </div>
    </footer>
  );
}

function PhoneNumberReveal() {
  const t = useTranslations("Footer");
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
            {copied ? t("footer-copied") : t("footer-copy")}
          </button>
        </div>
      ) : (
        <span
          className="text-sm text-muted-foreground text-center sm:text-left block"
          id="phone-number-reveal-text"
        >
          {t("phone-number-reveal-text")}
        </span>
      )}
    </div>
  );
}
