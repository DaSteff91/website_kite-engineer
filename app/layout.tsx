import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/providers/theme-provider";
import { ClientLayoutWrapper } from "./ClientLayoutWrapper";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

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
      url: "20250510_white_ke.ico",
      type: "image/x-icon",
    },
    {
      media: "(prefers-color-scheme: dark)",
      url: "20250510_dark_ke.ico",
      type: "image/x-icon",
    },
  ],
  keywords: "Kiteboarding, Engineering",
  openGraph: {
    title: "Kite-Engineer",
    description: "The best of two worlds",
    url: "https://www-dev.kite-engineer.de",
    siteName: "Kite-Engineer Combining Worlds",
    images: [
      {
        url: "/images/logo_dark.svg",
        width: 800,
        height: 600,
      },
    ],
    locale: "de_DE",
    type: "website",
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
