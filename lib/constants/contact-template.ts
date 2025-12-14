export type ContactTemplateKey =
  | "/kite/freelancer/school-support"
  | "/kite/freelancer/travel-services"
  | "/kite/freelancer/consulting"
  | "/kite/courses/theory"
  | "/kite/courses/starting"
  | "/kite/courses/advanced"
  | "/engineer/process-engineering/process-control"
  | "/engineer/process-engineering/process-optimization"
  | "/engineer/process-engineering/change-management"
  | "/engineer/process-engineering/monitoring"
  | "/engineer/process-development/creativity"
  | "/engineer/process-development/process-design"
  | "/engineer/process-development/simulation-prototyping"
  | "/engineer/process-development/equipment-roadmap"
  | "/engineer/software-development/custom-solutions"
  | "/engineer/software-development/database-management"
  | "/engineer/software-development/workflow-automation"
  | "/engineer/software-development/web-development"
  | "/engineer/project-management/project-setup"
  | "/engineer/project-management/timeline-management"
  | "/engineer/project-management/deviation-management"
  | "/engineer/project-management/documentation"
  | "/engineer/technical-consulting/process-assessment"
  | "/engineer/technical-consulting/technical-research"
  | "/engineer/technical-consulting/training-knowledge-transfer"
  | "/engineer/technical-consulting/competitor-analysis";

type ContactTemplate = {
  subjectKey: string;
  messageKey: string;
};

export const CONTACT_TEMPLATES: Record<ContactTemplateKey, ContactTemplate> = {
  "/kite/freelancer/school-support": {
    subjectKey: "ContactTemplates.schoolSupport.subject",
    messageKey: "ContactTemplates.schoolSupport.message",
  },
  "/kite/freelancer/travel-services": {
    subjectKey: "ContactTemplates.travelServices.subject",
    messageKey: "ContactTemplates.travelServices.message",
  },
  "/kite/freelancer/consulting": {
    subjectKey: "ContactTemplates.consulting.subject",
    messageKey: "ContactTemplates.consulting.message",
  },
  "/kite/courses/theory": {
    subjectKey: "ContactTemplates.coursesTheory.subject",
    messageKey: "ContactTemplates.coursesTheory.message",
  },
  "/kite/courses/starting": {
    subjectKey: "ContactTemplates.coursesStarting.subject",
    messageKey: "ContactTemplates.coursesStarting.message",
  },
  "/kite/courses/advanced": {
    subjectKey: "ContactTemplates.coursesAdvanced.subject",
    messageKey: "ContactTemplates.coursesAdvanced.message",
  },
  "/engineer/process-engineering/process-control": {
    subjectKey:
      "ContactTemplates.processEngineering.processControl.subject",
    messageKey:
      "ContactTemplates.processEngineering.processControl.message",
  },
  "/engineer/process-engineering/process-optimization": {
    subjectKey:
      "ContactTemplates.processEngineering.processOptimization.subject",
    messageKey:
      "ContactTemplates.processEngineering.processOptimization.message",
  },
  "/engineer/process-engineering/change-management": {
    subjectKey:
      "ContactTemplates.processEngineering.changeManagement.subject",
    messageKey:
      "ContactTemplates.processEngineering.changeManagement.message",
  },
  "/engineer/process-engineering/monitoring": {
    subjectKey:
      "ContactTemplates.processEngineering.monitoring.subject",
    messageKey:
      "ContactTemplates.processEngineering.monitoring.message",
  },
  "/engineer/process-development/creativity": {
    subjectKey:
      "ContactTemplates.processDevelopment.creativity.subject",
    messageKey:
      "ContactTemplates.processDevelopment.creativity.message",
  },
  "/engineer/process-development/process-design": {
    subjectKey:
      "ContactTemplates.processDevelopment.processDesign.subject",
    messageKey:
      "ContactTemplates.processDevelopment.processDesign.message",
  },
  "/engineer/process-development/simulation-prototyping": {
    subjectKey:
      "ContactTemplates.processDevelopment.simulationPrototyping.subject",
    messageKey:
      "ContactTemplates.processDevelopment.simulationPrototyping.message",
  },
  "/engineer/process-development/equipment-roadmap": {
    subjectKey:
      "ContactTemplates.processDevelopment.equipmentRoadmap.subject",
    messageKey:
      "ContactTemplates.processDevelopment.equipmentRoadmap.message",
  },
  "/engineer/software-development/custom-solutions": {
    subjectKey:
      "ContactTemplates.softwareDevelopment.customSolutions.subject",
    messageKey:
      "ContactTemplates.softwareDevelopment.customSolutions.message",
  },
  "/engineer/software-development/database-management": {
    subjectKey:
      "ContactTemplates.softwareDevelopment.databaseManagement.subject",
    messageKey:
      "ContactTemplates.softwareDevelopment.databaseManagement.message",
  },
  "/engineer/software-development/workflow-automation": {
    subjectKey:
      "ContactTemplates.softwareDevelopment.workflowAutomation.subject",
    messageKey:
      "ContactTemplates.softwareDevelopment.workflowAutomation.message",
  },
  "/engineer/software-development/web-development": {
    subjectKey:
      "ContactTemplates.softwareDevelopment.webDevelopment.subject",
    messageKey:
      "ContactTemplates.softwareDevelopment.webDevelopment.message",
  },
  "/engineer/project-management/project-setup": {
    subjectKey:
      "ContactTemplates.projectManagement.projectSetup.subject",
    messageKey:
      "ContactTemplates.projectManagement.projectSetup.message",
  },
  "/engineer/project-management/timeline-management": {
    subjectKey:
      "ContactTemplates.projectManagement.timelineManagement.subject",
    messageKey:
      "ContactTemplates.projectManagement.timelineManagement.message",
  },
  "/engineer/project-management/deviation-management": {
    subjectKey:
      "ContactTemplates.projectManagement.deviationManagement.subject",
    messageKey:
      "ContactTemplates.projectManagement.deviationManagement.message",
  },
  "/engineer/project-management/documentation": {
    subjectKey:
      "ContactTemplates.projectManagement.documentation.subject",
    messageKey:
      "ContactTemplates.projectManagement.documentation.message",
  },
  "/engineer/technical-consulting/process-assessment": {
    subjectKey:
      "ContactTemplates.technicalConsulting.processAssessment.subject",
    messageKey:
      "ContactTemplates.technicalConsulting.processAssessment.message",
  },
  "/engineer/technical-consulting/technical-research": {
    subjectKey:
      "ContactTemplates.technicalConsulting.technicalResearch.subject",
    messageKey:
      "ContactTemplates.technicalConsulting.technicalResearch.message",
  },
  "/engineer/technical-consulting/training-knowledge-transfer": {
    subjectKey:
      "ContactTemplates.technicalConsulting.trainingKnowledgeTransfer.subject",
    messageKey:
      "ContactTemplates.technicalConsulting.trainingKnowledgeTransfer.message",
  },
  "/engineer/technical-consulting/competitor-analysis": {
    subjectKey:
      "ContactTemplates.technicalConsulting.competitorAnalysis.subject",
    messageKey:
      "ContactTemplates.technicalConsulting.competitorAnalysis.message",
  },
};
