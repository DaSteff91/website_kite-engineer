// File: app/layout.tsx

import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/providers/theme-provider";
import { SITE } from "@/lib/constants/site-config";
import { routing } from "@/i18n/routing";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.kite-engineer.de";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    template: `%s | ${SITE.name}`,
    default: SITE.name,
  },
  description: SITE.description,
  authors: [{ name: "Stefan Merthan" }],
  icons: [
    {
      rel: "icon",
      media: "(prefers-color-scheme: light)",
      url: "/images/favicon_light.ico",
      type: "image/x-icon",
    },
    {
      rel: "icon",
      media: "(prefers-color-scheme: dark)",
      url: "/images/favicon_dark.ico",
      type: "image/x-icon",
    },
  ],
  keywords:
    "kiteboarding, engineering, kitesurf, engineer, consultant, representative, kitesurfing, sport, consulting, freelancer, outsourcing",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: SITE.name,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    images: [
      {
        url: SITE.ogImage,
        width: 1200,
        height: 630,
        alt: "Kite-Engineer Logo",
      },
      {
        url: "/images/og_picture_square.png",
        width: 1200,
        height: 1200,
        alt: "Kite-Engineer Logo",
      },
    ],
    // The locale here can be a default or dynamic, but metadata locale might be updated in the [locale] layout
    locale: routing.defaultLocale,
    type: "website",
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "de-DE": "/de-DE",
      "pt-BR": "/pt-BR",
    },
  },
  twitter: {
    card: SITE.twitterCard,
    title: SITE.name,
    description: SITE.description,
    images: [SITE.ogImage],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang={routing.defaultLocale}>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          forcedTheme="dark"
          enableSystem={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
