"use client";
import { usePathname } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

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
      <main className="flex-grow">{children}</main> {!isHomePage && <Footer />}
    </div>
  );
}
