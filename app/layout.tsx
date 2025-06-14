import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/providers/theme-provider";
import { ClientLayoutWrapper } from "./ClientLayoutWrapper";

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
  title: "Kite-Engineer",
  description: "The best of two worlds",
  authors: [{ name: "Stefan Merthan" }],
  icons: [
    {
      media: "(prefers-color-scheme: light)",
      url: "favicon_light.ico",
      type: "image/x-icon",
    },
    {
      media: "(prefers-color-scheme: dark)",
      url: "favicon_dark.ico",
      type: "image/x-icon",
    },
  ],
  keywords: "kiteboarding, engineering, kitesurf, engineer",
  openGraph: {
    title: "Kite-Engineer",
    description: "The best of two worlds",
    url: "${siteUrl}",
    siteName: "Kite-Engineer Combining Worlds",
    images: [
      {
        url: "${siteUrl}/images/favicon_dark.ico",
        width: 800,
        height: 600,
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
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Kite-Engineer",
    description:
      "Combinging worlds by offering kiteboarding related services as well as engineering services",
    images: ["${siteUrl}/images/favicon_dark.ico"],
  },
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { slug: string };
}) {
  const isHomePage = params?.slug === undefined;

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ClientLayoutWrapper>
            <div className="min-h-screen flex flex-col">
              <main className="flex-grow">{children}</main>
            </div>
          </ClientLayoutWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
