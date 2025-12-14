import {defineRouting} from 'next-intl/routing';
 
export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en-US', 'de-DE', 'pt-BR'],
  defaultLocale: 'en-US',
//   localePrefix: "as-needed" // can be used in case you want the default language to be omitted in the displayed link in the browser
});