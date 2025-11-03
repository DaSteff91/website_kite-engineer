"use client";
import { Suspense } from "react";
import { usePathname } from "@/i18n/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { DeepLinkHighlighter } from "@/components/DeepLinkHighlighter";

export function ClientLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <div className="min-h-screen flex flex-col">
      {!isHomePage && <Header />}
      <main className="flex-grow">
        <Suspense fallback={null}>
          <DeepLinkHighlighter />
        </Suspense>
        {children}
      </main>
      {!isHomePage && <Footer />}
    </div>
  );
}
