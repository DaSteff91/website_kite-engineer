import { hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { ClientLayoutWrapper } from "@/app/ClientLayoutWrapper";

// Generate static params for all supported locales
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const resolvedParams = await params;
  const { locale } = resolvedParams;

  // Validate locale
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Set request locale for server-side translations
  setRequestLocale(locale);

  // Fetch messages for this locale
  const messages = await getMessages({ locale });

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
    </NextIntlClientProvider>
  );
}
