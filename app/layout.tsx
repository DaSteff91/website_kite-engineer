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
    // Fallback icon
    {
      rel: "icon",
      url: "favicon_dark.ico",
      type: "image/x-icon",
    },
  ],
  keywords: "kiteboarding, engineering, kitesurf, engineer",
  metadataBase: new URL("https://kite-engineer.de"),
  openGraph: {
    title: "Kite-Engineer",
    description: "The best of two worlds",
    url: "/",
    siteName: "Kite-Engineer Combining Worlds",
    images: [
      {
        url: "$/images/og_picture.png",
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
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Kite-Engineer",
    description:
      "Combinging worlds by offering kiteboarding related services as well as engineering services",
    images: ["/images/og_picture.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          forcedTheme="dark"
          enableSystem={false}
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
