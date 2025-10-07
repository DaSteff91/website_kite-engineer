import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import {SEARCHABLE_PAGES} from './../../../lib/constants/searchable-sites';
import { SearchDocument, MessageObject, PageMapping } from './types.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const PAGE_TO_JSON_KEY = {
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

function extractTextFromFlatStructure(obj: MessageObject): string[] {
  const content: string[] = [];
  
  for (const value of Object.values(obj)) {
    if (typeof value === 'string') {
      content.push(stripHtmlTags(value));
    }
  }
  
  return content;
}

export function createSearchDocuments(): SearchDocument[] {
  const documents: SearchDocument[] = [];
  const locales = ['en-US', 'de-DE', 'pt-BR'];
  const messagesDir = path.join(__dirname, '../../../messages');
  
  for (const locale of locales) {
    const messageFile = path.join(messagesDir, `${locale}.json`);
    
    if (!fs.existsSync(messageFile)) {
      console.warn(`Message file not found: ${messageFile}`);
      continue;
    }
    
    const messages: MessageObject = JSON.parse(fs.readFileSync(messageFile, 'utf8'));
    
    // Only process pages from SEARCHABLE_PAGES constant
    for (const pageKey of SEARCHABLE_PAGES) {
      const pagePaths = Object.entries(PAGE_TO_JSON_KEY)
        .filter(([_, jsonKey]) => jsonKey === pageKey)
        .map(([path]) => path);
      
      // Skip if page key not found in mapping
      if (pagePaths.length === 0) {
        console.warn(`No page path found for JSON key: ${pageKey}`);
        continue;
      }
      
      const pageContent = messages[pageKey];
      
      // Skip if page content doesn't exist or isn't an object
      if (!pageContent || typeof pageContent !== 'object') {
        console.warn(`JSON key ${pageKey} not found in ${locale}.json or is not an object`);
        continue;
      }
      
      // Extract text from flat structure
      const allTextContent = extractTextFromFlatStructure(pageContent);
      const fullText = allTextContent.join(' ').trim();
      
      if (!fullText) {
        console.warn(`No text content found for ${pageKey} in ${locale}`);
        continue;
      }
      
      // Create one document per page path
      for (const pagePath of pagePaths) {
        documents.push({
          id: `${locale}-${pageKey}-${pagePath.replace(/\//g, '-')}`,
          locale: locale,
          pageKey: pageKey,
          pagePath: pagePath,
          pageTitle: extractPageTitle(pageContent, pageKey),
          content: fullText,
          sections: allTextContent,
          lastIndexed: new Date().toISOString()
        });
      }
    }
  }
  
  return documents;
}

// extractPageTitle function remains the same
function extractPageTitle(pageContent: MessageObject, jsonKey: string): string {
  if (typeof pageContent.heroTitle === 'string') return stripHtmlTags(pageContent.heroTitle);
  if (typeof pageContent.title === 'string') return stripHtmlTags(pageContent.title);
  if (typeof pageContent.sectionTitle === 'string') return stripHtmlTags(pageContent.sectionTitle);
  
  return jsonKey.replace(/Page$/, '').replace(/([A-Z])/g, ' $1').trim();
}