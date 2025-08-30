import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/providers/theme-provider";
import { ClientLayoutWrapper } from "./ClientLayoutWrapper";
import { SITE } from "@/lib/constants/site-config";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
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
  metadataBase: new URL("https://kite-engineer.de"),
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
    locale: "en_EN",
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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // 1. Hardcode the default locale for the initial client-side context.
  // This ensures the Header/LocaleSwitcher have valid data to render immediately.
  // The middleware and [locale] layout will handle the correct locale for the main content.
  const locale = routing.defaultLocale; // 'en-US'

  // 2. Fetch the messages for the hardcoded default locale.
  // This provides the initial translations for client components.
  const messages = await getMessages();

  return (
    <html suppressHydrationWarning lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider
            attribute="class"
            forcedTheme="dark"
            enableSystem={false}
          >
            <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
