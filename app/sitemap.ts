import type { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.kite-engineer';

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
    },
        {
      url: `${baseUrl}/kite`,
      lastModified: new Date(),
    },
        {
      url: `${baseUrl}/engineer`,
      lastModified: new Date(),
    },
        {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
    },
        {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
    },
        {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
    },
        {
      url: `${baseUrl}/imprint`,
      lastModified: new Date(),
    },
    // Add additional static routes as needed
  ];
}