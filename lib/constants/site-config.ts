export const BASE_URL = "https://www.kite-engineer.de";

export const LOCALES = ['en-US', 'de-DE', 'pt-BR'] as const;
export type Locale = typeof LOCALES[number];

export const DEFAULT_LOCALE: Locale = "en-US";

export const SITE = {
  name: "Kite-Engineer",
  url: "https://www.kite-engineer.de",
  description: "Freelancer services for Kiteboarding and Engineering",
  ogImage: "/images/og_picture.png",
  twitterCard: "summary_large_image" as const,
};

/** Build full URL for a locale + path */
export function getFullUrl(locale: Locale, path: string) {
  return `${BASE_URL}/${locale}${path}`;
}

/** Build hreflang / alternates record for a given path */
export function buildLocaleAlternates(path: string): Record<string, string> {
  const alternates: Record<string, string> = {};
  for (const loc of LOCALES) {
    alternates[loc] = getFullUrl(loc, path);
  }
  alternates["x-default"] = `${BASE_URL}${path}`;
  return alternates;
}