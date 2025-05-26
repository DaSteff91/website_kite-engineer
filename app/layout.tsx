import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/providers/theme-provider";
import { ClientLayoutWrapper } from "./ClientLayoutWrapper";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Kite-Engineer",
  description: "The best of two worlds",
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
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  keywords: "Kiteboarding, Engineering, test",
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