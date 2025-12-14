import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { getFullUrl, buildLocaleAlternates, SITE } from './site-config';

type PageKey =
  // Main pages
  | 'notFound' | 'Home' | 'Kite' | 'Engineer' | 'About' | 'Contact' | 'Privacy' | 'Imprint'
  // Kite subpages
  | 'KiteSubpages.Freelancer.SchoolSupport'
  | 'KiteSubpages.Freelancer.TravelServices'
  | 'KiteSubpages.Freelancer.Consulting'
  | 'KiteSubpages.Courses.Theory'
  | 'KiteSubpages.Courses.Starting'
  | 'KiteSubpages.Courses.Advanced'
  // Engineer subpages
  | 'EngineerSubpages.ProcessEngineering.ProcessControl'
  | 'EngineerSubpages.ProcessEngineering.ProcessOptimization'
  | 'EngineerSubpages.ProcessEngineering.ChangeManagement'
  | 'EngineerSubpages.ProcessEngineering.Monitoring'
  | 'EngineerSubpages.ProcessDevelopment.Creativity'
  | 'EngineerSubpages.ProcessDevelopment.ProcessDesign'
  | 'EngineerSubpages.ProcessDevelopment.SimulationPrototyping'
  | 'EngineerSubpages.ProcessDevelopment.EquipmentRoadmap'
  | 'EngineerSubpages.SoftwareDevelopment.CustomSolutions'
  | 'EngineerSubpages.SoftwareDevelopment.DatabaseManagement'
  | 'EngineerSubpages.SoftwareDevelopment.WorkflowAutomation'
  | 'EngineerSubpages.SoftwareDevelopment.WebDevelopment'
  | 'EngineerSubpages.ProjectManagement.ProjectSetup'
  | 'EngineerSubpages.ProjectManagement.TimelineManagement'
  | 'EngineerSubpages.ProjectManagement.DeviationManagement'
  | 'EngineerSubpages.ProjectManagement.Documentation'
  | 'EngineerSubpages.TechnicalConsulting.ProcessAssessment'
  | 'EngineerSubpages.TechnicalConsulting.TechnicalResearch'
  | 'EngineerSubpages.TechnicalConsulting.TrainingKnowledgeTransfer'
  | 'EngineerSubpages.TechnicalConsulting.CompetitorAnalysis';

export async function getPageMetadata(locale: string, pageKey: PageKey, path: string): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'MetaData' });

  const title = t(`${pageKey}.title`);
  const description = t(`${pageKey}.description`);

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: getFullUrl(locale as any, path),
      images: [SITE.ogImage],
    },
    alternates: {
      canonical: path,  
      languages: buildLocaleAlternates(path),
    }
  };
}
