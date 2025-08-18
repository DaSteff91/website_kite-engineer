type ContactTemplate = {
  subject: string;
  message: string;
};

export const CONTACT_TEMPLATES: Record<string, ContactTemplate> = {
  // Kite related subpages

  "/kite/freelancer/school-support": {
  subject: "School Support Inquiry [Your subject*]",
  message: `Hey Steff,

With the following I could need your help. [Your message*]

Cheers`
},

  "/kite/freelancer/travel-services": {
      subject: "Travel Services Inquiry [Your subject*]",
      message: `Hey Steff,

  Please share details about what you need help with. [Your message*]

  Cheers`
    },
    "/kite/freelancer/consulting": {
      subject: "Consulting Inquiry [Your subject*]",
      message: `Hey Steff,

  With that topic I could need help. [Your message*]

  Cheers`
    },
    "/kite/courses/theory": {
      subject: "Theory Course Inquiry [Your subject*]",
      message: `Hey Steff,

  Tell me about your theory course needs. [Your message*]

  Cheers`
    },
    "/kite/courses/starting": {
      subject: "Beginner Course Inquiry [Your subject*]",
      message: `Hey Steff,

  What kind of support are you looking for? [Your message*]

  Cheers`
    },
    "/kite/courses/advanced": {
      subject: "Advanced Course Inquiry [Your subject*]",
      message: `Hey Steff,

  What kind of support are you looking for?  [Your message*]

  Cheers`
    },

  // Engineer related subpages
    "/engineer/process-engineering/process-control": {
    subject: "Process Control Inquiry [Your subject*]",
    message: `Hello Kite-Engineer,

  Describe your process control needs. [Your message*]

  Kind regards`
    },
    "/engineer/process-engineering/process-optimization": {
      subject: "Process Optimization Inquiry [Your subject*]",
      message: `Hello Kite-Engineer,

  Describe your process optimization needs. [Your message*]

  Kind regards`
    },
    "/engineer/process-engineering/change-management": {
      subject: "Change Management Inquiry [Your subject*]",
      message: `Hello Kite-Engineer,

  Tell me about your change management challenge. [Your message*]

  Kind regards`
    },
    "/engineer/process-engineering/monitoring": {
      subject: "Process Monitoring Inquiry [Your subject*]",
      message: `Hello Kite-Engineer,

  Describe your needs for process monitoring. [Your message*]

  Kind regards`
    },

    "/engineer/process-development/creativity": {
      subject: "Creativity Support Inquiry [Your subject*]",
      message: `Hello Kite-Engineer,

  What creative challenge can I help with? [Your message*]

  Kind regards`
    },
    "/engineer/process-development/process-design": {
      subject: "Process Design Inquiry [Your subject*]",
      message: `Hello Kite-Engineer,

  What process flow needs an outside perspective? [Your message*]

  Kind regards`
    },
    "/engineer/process-development/simulation-prototyping": {
      subject: "Simulation Inquiry [Your subject*]",
      message: `Hello Kite-Engineer,

  What simulation/prototyping support do you require? [Your message*]

  Kind regards`
    },
    "/engineer/process-development/equipment-roadmap": {
      subject: "Equipment Roadmap Inquiry [Your subject*]",
      message: `Hello Kite-Engineer,

  What equipment planning assistance do you need? [Your message*]

  Kind regards`
    },
    "/engineer/software-development/custom-solutions": {
      subject: "Custom Software Inquiry [Your subject*]",
      message: `Hello Kite-Engineer,

  What custom solution are you looking for? [Your message*]

  Kind regards`
    },
    "/engineer/software-development/database-management": {
      subject: "Database Management Inquiry [Your subject*]",
      message: `Hello Kite-Engineer,

  What database support do you require? [Your message*]

  Kind regards`
    },
    "/engineer/software-development/workflow-automation": {
      subject: "Workflow Automation Inquiry [Your subject*]",
      message: `Hello Kite-Engineer,

  What workflow would you like to automate? [Your message*]

  Kind regards`
    },
    "/engineer/software-development/web-development": {
      subject: "Web Development Inquiry [Your subject*]",
      message: `Hello Kite-Engineer,

  What web development help do you need? [Your message*]

  Kind regards`
    },
    "/engineer/project-management/project-setup": {
      subject: "Project Setup Inquiry [Your subject*]",
      message: `Hello Kite-Engineer,

  What project setup assistance do you require? [Your message*]

  Kind regards`
    },
    "/engineer/project-management/timeline-management": {
      subject: "Timeline Management Inquiry [Your subject*]",
      message: `Hello Kite-Engineer,

  What timeline management help do you need? [Your message*]

  Kind regards`
    },
    "/engineer/project-management/deviation-management": {
      subject: "Deviation Management Inquiry [Your subject*]",
      message: `Hello Kite-Engineer,

  What deviation management support do you require? [Your message*]

  Kind regards`
    },
    "/engineer/project-management/documentation": {
      subject: "Project Documentation Inquiry [Your subject*]",
      message: `Hello Kite-Engineer,

  What documentation assistance do you need? [Your message*]

  Kind regards`
    },
    "/engineer/technical-consulting/process-assessment": {
      subject: "Process Assessment Inquiry [Your subject*]",
      message: `Hello Kite-Engineer,

  What process assessment help do you require? [Your message*]

  Kind regards`
    },
    "/engineer/technical-consulting/technical-research": {
      subject: "Technical Research Inquiry [Your subject*]",
      message: `Hello Kite-Engineer,

  What technical research do you need? [Your message*]

  Kind regards`
    },
    "/engineer/technical-consulting/training-knowledge-transfer": {
      subject: "Training Inquiry [Your subject*]",
      message: `Hello Kite-Engineer,

  What training/knowledge transfer do you need? [Your message*]

  Kind regards`
    },
    "/engineer/technical-consulting/competitor-analysis": {
      subject: "Competitor Analysis Inquiry [Your subject*]",
      message: `Hello Kite-Engineer,

  What competitor analysis support do you require? [Your message*]

  Kind regards`
    }
};

export type ContactTemplateKey = keyof typeof CONTACT_TEMPLATES;