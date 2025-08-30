import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';
 
export default createMiddleware({
  // A list of all locales that are supported
  locales: routing.locales,
  // The default locale to use when no locale is specified
  defaultLocale: routing.defaultLocale,
  // Only add a locale prefix for paths that are NOT the root
  localePrefix: 'as-needed',
  // Define a custom pathname mapping to skip the root path
  pathnames: {
    // Explicitly map the root path to use no locale prefix
    '/': '/',
    // All other paths will use the default handling (with locale prefix)
  }
});
 
export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: '/((?!api|_next|.*\\..*).*)'
};