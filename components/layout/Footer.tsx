"use client";

import Link from "next/link";
// import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";
import { usePathname } from "next/navigation";

// const SOCIAL_LINKS = [
//   { icon: Facebook, href: "#", label: "Facebook" },
//   { icon: Twitter, href: "#", label: "Twitter" },
//   { icon: Instagram, href: "#", label: "Instagram" },
//   { icon: Linkedin, href: "#", label: "LinkedIn" },
//   { icon: Github, href: "#", label: "GitHub" },
// ];

export function Footer() {
  const pathname = usePathname();
  if (pathname === "/") return null;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Contact</h3>
            {/* <address className="not-italic text-sm text-muted-foreground">
              123 Main Street
              <br />
              City, Country 12345
              <br /> */}
            <a href="mailto:contact@example.com" className="hover:text-primary">
              stefan@kite-engineer.de
            </a>
            <br />
            {/* <a href="tel:+1234567890" className="hover:text-primary">
              +1 (234) 567-890
            </a> */}
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/kite"
                  className="text-muted-foreground hover:text-primary"
                >
                  Kite
                </Link>
              </li>
              <li>
                <Link
                  href="/engineer"
                  className="text-muted-foreground hover:text-primary"
                >
                  Engineer
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-primary"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Legal/ Rechtliches</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/privacy"
                  className="text-muted-foreground hover:text-primary"
                >
                  Privacy Policy/ Datenschutz
                </Link>
              </li>
              <li>
                <Link
                  href="/imprint"
                  className="text-muted-foreground hover:text-primary"
                >
                  Imprint/ Impressum
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            {/* <h3 className="text-lg font-semibold">Follow Me</h3> */}
            {/* <div className="flex gap-4">
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
            </div> */}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>
            © {currentYear} Kite-Engineer by Stefan Merthan. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
