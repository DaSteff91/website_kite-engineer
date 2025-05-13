import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/providers/theme-provider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ClientLayoutWrapper } from "./ClientLayoutWrapper";

const inter = Inter({ subsets: ["latin"] });

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
  keywords: "Kiteboarding, Engineering",
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { slug: string };
}) {
  const isHomePage = params?.slug === undefined;

  // THIS WAS THE ORIGINAL VERSION
  // return (
  //   <html lang="en" suppressHydrationWarning>
  //     <body className={inter.className}>
  //       <ThemeProvider
  //         attribute="class"
  //         defaultTheme="system"
  //         enableSystem
  //         disableTransitionOnChange
  //       >
  //         <div className="min-h-screen flex flex-col">
  //           {!isHomePage && <Header />}
  //           <main className="flex-grow">{children}</main>
  //           {!isHomePage && <Footer />}
  //         </div>
  //       </ThemeProvider>
  //     </body>
  //   </html>
  // );

  // THIS VERSION SHOWS HEADER AND FOOTER ALL THE TIME
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
