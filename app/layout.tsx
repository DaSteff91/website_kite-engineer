import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/providers/theme-provider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "John Doe | Kiteboarder & Software Engineer",
  description:
    "Personal website of John Doe - Where kiteboarding meets software engineering",
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { slug: string };
}) {
  const isHomePage = params?.slug === undefined;

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
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen flex flex-col">
            <Header /> {/* Always show header */}
            <main className="flex-grow">{children}</main>
            <Footer /> {/* Always show footer */}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
