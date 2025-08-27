import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
// import { SITE } from "@/lib/constants/site-config";

// Generate static params for all supported locales
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

// // Generate metadata with translations - [27.08.2025] For now leave that aside
// export async function generateMetadata({
//   params,
// }: {
//   params: Promise<{ locale: string }>;
// }) {
//   const { locale } = await params;
//   const t = await getTranslations({ locale, namespace: "Metadata" });

//   return {
//     title: {
//       template: `%s | ${SITE.name}`,
//       default: SITE.name,
//     },
//     description: t("description"),
//     // ... other metadata properties that should be localized
//   };
// }

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Validate that the incoming locale is valid
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Fetch messages for the requested locale. This is necessary to pass translations from the RootLayout to this one
  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
