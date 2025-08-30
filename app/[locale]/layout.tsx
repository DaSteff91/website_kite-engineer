import { hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

// Generate static params for all supported locales
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Validate that the incoming locale is valid
  // This prevents users from accessing /invalid-locale URLs
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // !!! CRUCIAL !!!
  // This enables static rendering and tells next-intl's server-side functions
  // (like `getTranslations`, `getFormatter`) which locale to use for this request.
  // This must be called in a layout or page that receives the `params.locale`.
  setRequestLocale(locale);

  return <>{children}</>;
}
