import type { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.kite-engineer.de';
  const locales = ['en-US', 'de-DE', 'pt-BR'];
  const defaultLocale = 'en-US';
  
  const pages = [
    '',
    '/kite',
    '/kite/freelancer/school-support',
    '/kite/freelancer/travel-services',
    '/kite/freelancer/consulting',
    '/kite/courses/theory',
    '/kite/courses/starting',
    '/kite/courses/advanced',
    '/engineer',
    '/engineer/process-engineering/process-control',
    '/engineer/process-engineering/process-optimization',
    '/engineer/process-engineering/change-management',
    '/engineer/process-engineering/monitoring',
    '/engineer/process-development/creativity',
    '/engineer/process-development/process-design',
    '/engineer/process-development/simulation-prototyping',
    '/engineer/process-development/equipment-roadmap',
    '/engineer/software-development/custom-solutions',
    '/engineer/software-development/database-management',
    '/engineer/software-development/workflow-automation',
    '/engineer/software-development/web-development',
    '/engineer/project-management/project-setup',
    '/engineer/project-management/timeline-management',
    '/engineer/project-management/deviation-management',
    '/engineer/project-management/documentation',
    '/engineer/technical-consulting/process-assessment',
    '/engineer/technical-consulting/technical-research',
    '/engineer/technical-consulting/training-knowledge-transfer',
    '/engineer/technical-consulting/competitor-analysis',
    '/about',
    '/contact',
    '/privacy',
    '/imprint'
  ];

  return locales.flatMap(locale => 
    pages.map(page => {
      const url = `${baseUrl}/${locale}${page}`;
      const alternates: Record<string, string> = {};
      
      // Create hreflang entries for all locales
      locales.forEach(lang => {
        alternates[lang] = `${baseUrl}/${lang}${page}`;
      });
      
      // Add x-default for the default locale
      if (locale === defaultLocale) {
        alternates['x-default'] = `${baseUrl}${page}`;
      }

      return {
        url,
        lastModified: new Date(),
        alternates: {
          languages: alternates
        }
      };
    })
  );
}