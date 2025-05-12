import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";
import type { Viewport } from "next";

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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1, // Sets the initial zoom level to 1 (default size, no zoom)
  maximumScale: 1, // Prevents users from zooming in beyond the original size
  userScalable: false, // Disables user zooming (pinch-to-zoom or double-tap zoom) on mobile devices
};
