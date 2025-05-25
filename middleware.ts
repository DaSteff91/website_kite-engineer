import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  locales: ['en', 'de', 'pt'],
  defaultLocale: 'de',
  localePrefix: 'always'
});
 
export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};