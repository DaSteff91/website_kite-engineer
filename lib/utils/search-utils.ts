// using the already existing navigation titles as search result titles

import { PAGE_TO_NAV_KEY } from "../constants/search-mappings";

export function stripHtmlTags(text: string): string {
    return text.replace(/<[^>]*>/g, '');
}

export function cleanContentObject(content: Record<string, string>): Record<string, string> {
    const cleaned: Record<string, string> = {};

    for (const [key, value] of Object.entries(content)) {
        if (typeof value === 'string') {
            cleaned[key] = stripHtmlTags(value);
        }
    }
    return cleaned
}

export function getNavigationTitle(
    pageKey: string,
    messages: Record<string, any>,
    locale: string,
) : string {
    const navKey = PAGE_TO_NAV_KEY[pageKey as keyof typeof PAGE_TO_NAV_KEY]

    if (!navKey) {
        console.warn(`No navigation key found for page: ${pageKey}`);
        return generateFallbackTitle(pageKey);
    }

    const navigationMenu = messages.NavigationMenu;
    if (navigationMenu && navigationMenu[navKey]) {
        return navigationMenu[navKey]
    }
    return generateFallbackTitle(pageKey);
}

function generateFallbackTitle(pageKey: string): string {
  return pageKey
    .replace(/Page$/, '')
    .replace(/([A-Z])/g, ' $1')
    .trim();
}