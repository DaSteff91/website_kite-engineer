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
      url: `${baseUrl}/kite/freelancer/school-support`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/kite/freelancer/travel-services`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/kite/freelancer/consulting`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/kite/courses/theory`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/kite/courses/starting`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/kite/courses/advanced`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/engineer`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/engineer/process-engineering/process-control`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/engineer/process-engineering/process-optimization`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/engineer/process-engineering/change-management`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/engineer/process-engineering/monitoring`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/engineer/process-development/creativity`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/engineer/process-development/process-design`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/engineer/process-development/simulation-prototyping`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/engineer/process-development/equipment-roadmap`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/engineer/software-development/custom-solutions`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/engineer/software-development/database-management`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/engineer/software-development/workflow-automation`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/engineer/software-development/web-development`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/engineer/project-management/project-setup`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/engineer/project-management/timeline-management`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/engineer/project-management/deviation-management`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/engineer/project-management/documentation`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/engineer/technical-consulting/process-assessment`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/engineer/technical-consulting/technical-research`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/engineer/technical-consulting/training-knowledge-transfer`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/engineer/technical-consulting/competitor-analysis`,
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
  ];
}