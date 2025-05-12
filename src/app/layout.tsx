import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";

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

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <body>{children}</body>
    </html>
  );
}
