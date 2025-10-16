import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import * as pagesModule from '../../../lib/constants/searchable-sites';

const _candidate = (pagesModule as any).SEARCHABLE_PAGES ?? (pagesModule as any).default ?? [];
const SEARCHABLE_PAGES: string[] = Array.isArray(_candidate)
  ? _candidate
  : Array.isArray(_candidate?.SEARCHABLE_PAGES)
    ? _candidate.SEARCHABLE_PAGES
    : [];


import { SearchDocument, MessageObject, PageMapping } from './types.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const PAGE_TO_JSON_KEY: PageMapping = {
  '/kite/freelancer/school-support': 'SchoolSupportPage',
  '/kite/freelancer/travel-services': 'TravelServicesPage',
  '/kite/freelancer/consulting': 'ConsultingPage',
  '/kite/courses/theory': 'TheoryPage',
  '/kite/courses/starting': 'StartingPage',
  '/kite/courses/advanced': 'AdvancedPage',
  '/engineer/process-engineering/process-control': 'ProcessControlPage',
  '/engineer/process-engineering/process-optimization': 'ProcessOptimizationPage',
  '/engineer/process-engineering/change-management': 'ChangeManagementPage',
  '/engineer/process-engineering/monitoring': 'MonitoringPage',
  '/engineer/process-development/creativity': 'CreativityPage',
  '/engineer/process-development/process-design': 'ProcessDesignPage',
  '/engineer/process-development/simulation-prototyping': 'SimulationPrototypingPage',
  '/engineer/process-development/equipment-roadmap': 'EquipmentRoadmapPage',
  '/engineer/software-development/custom-solutions': 'CustomSolutionsPage',
  '/engineer/software-development/database-management': 'DatabaseManagementPage',
  '/engineer/software-development/workflow-automation': 'WorkflowAutomationPage',
  '/engineer/software-development/web-development': 'WebDevelopmentPage',
  '/engineer/project-management/project-setup': 'ProjectSetupPage',
  '/engineer/project-management/timeline-management': 'TimelineManagementPage',
  '/engineer/project-management/deviation-management': 'DeviationManagementPage',
  '/engineer/project-management/documentation': 'DocumentationPage',
  '/engineer/technical-consulting/process-assessment': 'ProcessAssessmentPage',
  '/engineer/technical-consulting/technical-research': 'TechnicalResearchPage',
  '/engineer/technical-consulting/training-knowledge-transfer': 'TrainingKnowledgeTransferPage',
  '/engineer/technical-consulting/competitor-analysis': 'CompetitorAnalysisPage',
  '/about': 'AboutPage',
  '/contact': 'ContactPage'
};

function stripHtmlTags(text: string): string {
  return text.replace(/<[^>]*>/g, '');
}

// 16.10.2025: Commented out since i assume its not necessary, anymore??

// function extractPageTitle(pageContent: MessageObject, jsonKey: string): string {
//   if (typeof pageContent.heroTitle === 'string') return stripHtmlTags(pageContent.heroTitle);
//   if (typeof pageContent.title === 'string') return stripHtmlTags(pageContent.title);
//   if (typeof pageContent.sectionTitle === 'string') return stripHtmlTags(pageContent.sectionTitle);
  
//   return jsonKey.replace(/Page$/, '').replace(/([A-Z])/g, ' $1').trim();
// }

function cleanContentObject(content: MessageObject): MessageObject {
  const cleaned: MessageObject = {};
  
  for (const [key, value] of Object.entries(content)) {
    if (typeof value === 'string') {
      cleaned[key] = stripHtmlTags(value);
    }
  }
  
  return cleaned;
}

export function createSearchDocuments(): SearchDocument[] {
  const documents: SearchDocument[] = [];
  const locales = ['en-US', 'de-DE', 'pt-BR'];
  const messagesDir = path.join(__dirname, '../../../messages');
  
  // Create reverse mapping for efficient lookup
  const JSON_KEY_TO_PAGE: { [key: string]: string } = {};
  for (const [path, key] of Object.entries(PAGE_TO_JSON_KEY)) {
    JSON_KEY_TO_PAGE[key] = path;
  }
  
  for (const locale of locales) {
    const messageFile = path.join(messagesDir, `${locale}.json`);
    
    if (!fs.existsSync(messageFile)) {
      console.warn(`Message file not found: ${messageFile}`);
      continue;
    }
    
    const messages: MessageObject = JSON.parse(fs.readFileSync(messageFile, 'utf8'));
    
    for (const pageKey of SEARCHABLE_PAGES) {
      const pagePath = JSON_KEY_TO_PAGE[pageKey];
      
      if (!pagePath) {
        console.warn(`No page path found for JSON key: ${pageKey}`);
        continue;
      }
      
      const pageContent = messages[pageKey];
      
      if (!pageContent || typeof pageContent !== 'object') {
        console.warn(`JSON key ${pageKey} not found in ${locale}.json or is not an object`);
        continue;
      }
      
      const cleanedContent = cleanContentObject(pageContent);
      
      // Check if we have any content after cleaning
      const hasContent = Object.values(cleanedContent).some(value => value.trim().length > 0);
      
      if (!hasContent) {
        console.warn(`No text content found for ${pageKey} in ${locale}`);
        continue;
      }
      
      documents.push({
        id: `${locale}-${pageKey}`,
        title: pageKey,
        locale: locale,
        pagePath: pagePath,
        content: cleanedContent
      });
    }
  }
  
  return documents;
}