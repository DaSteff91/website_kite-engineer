type ContactTemplate = {
  subject: string;
  message: string;
};

export const CONTACT_TEMPLATES: Record<string, ContactTemplate> = {
  // Kite related subpages
  "kite/freelancer/travel-services": {
    subject: "Travel Services Inquiry",
    message: "I'm interested in your travel services for kiteboarding."
  },
  "kite/freelancer/consulting": {
    subject: "Consulting Inquiry",
    message: "I'd like to learn more about your kiteboarding consulting services."
  },
  "kite/courses/theory": {
    subject: "Theory Course Inquiry",
    message: "Please send information about your theory kite courses."
  },
  "kite/courses/starting": {
    subject: "Beginner Course Inquiry",
    message: "I'm interested in your beginner kiteboarding courses."
  },
  "kite/courses/advanced": {
    subject: "Advanced Course Inquiry",
    message: "I'd like information about your advanced kiteboarding courses."
  },

  // Engineer related subpages
  "engineer/process-engineering/process-control": {
    subject: "Process Control Inquiry",
    message: "I need information about your process control services."
  },
  "engineer/process-engineering/process-optimization": {
    subject: "Process Optimization Inquiry",
    message: "Please share details about your process optimization services."
  },
  "engineer/process-engineering/change-management": {
    subject: "Change Management Inquiry",
    message: "I'm interested in your change management services."
  },
  "engineer/process-engineering/monitoring": {
    subject: "Process Monitoring Inquiry",
    message: "Tell me more about your process monitoring services."
  },
  "engineer/process-development/creativity": {
    subject: "Creativity Support Inquiry",
    message: "I'd like information about your creativity support services."
  },
  "engineer/process-development/process-design": {
    subject: "Process Design Inquiry",
    message: "Please send details about your process design services."
  },
  "engineer/process-development/simulation-prototyping": {
    subject: "Simulation Inquiry",
    message: "I need information about your simulation and prototyping services."
  },
  "engineer/process-development/equipment-roadmap": {
    subject: "Equipment Roadmap Inquiry",
    message: "Tell me more about your equipment roadmap services."
  },
  "engineer/software-development/custom-solutions": {
    subject: "Custom Software Inquiry",
    message: "I'm interested in your custom software solutions."
  },
  "engineer/software-development/database-management": {
    subject: "Database Management Inquiry",
    message: "Please share information about your database management services."
  },
  "engineer/software-development/workflow-automation": {
    subject: "Workflow Automation Inquiry",
    message: "I'd like details about your workflow automation services."
  },
  "engineer/software-development/web-development": {
    subject: "Web Development Inquiry",
    message: "Tell me more about your web development services."
  },
  "engineer/project-management/project-setup": {
    subject: "Project Setup Inquiry",
    message: "I need information about your project setup services."
  },
  "engineer/project-management/timeline-management": {
    subject: "Timeline Management Inquiry",
    message: "Please share details about your timeline management services."
  },
  "engineer/project-management/deviation-management": {
    subject: "Deviation Management Inquiry",
    message: "I'm interested in your deviation management services."
  },
  "engineer/project-management/documentation": {
    subject: "Project Documentation Inquiry",
    message: "Tell me more about your project documentation services."
  },
  "engineer/technical-consulting/process-assessment": {
    subject: "Process Assessment Inquiry",
    message: "I'd like information about your process assessment services."
  },
  "engineer/technical-consulting/technical-research": {
    subject: "Technical Research Inquiry",
    message: "Please send details about your technical research services."
  },
  "engineer/technical-consulting/training-knowledge-transfer": {
    subject: "Training Inquiry",
    message: "I'm interested in your training and knowledge transfer services."
  },
  "engineer/technical-consulting/competitor-analysis": {
    subject: "Competitor Analysis Inquiry",
    message: "Tell me more about your competitor analysis services."
  }
};

export type ContactTemplateKey = keyof typeof CONTACT_TEMPLATES;