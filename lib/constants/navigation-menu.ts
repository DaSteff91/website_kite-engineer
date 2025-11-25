import { House } from "lucide-react";

export interface NavItem {
  href: string;
  key: string;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  hasDropdown?: boolean;
  dropdownItems?: (NavItem | NavSubmenu)[];
}

export interface NavSubmenu {
  key: string;
  isSubmenu: true;
  items: NavItem[];
}

export type NavigationItem = NavItem | NavSubmenu;

export const NAV_ITEMS: NavItem[] = [
  {
    href: "/",
    key: "home",
    icon: House,
  },
  {
    href: "/kite",
    key: "kite",
    hasDropdown: true,
    dropdownItems: [
      {
        href: "/kite",
        key: "allKiteServices",
      },
      {
        key: "freelancer",
        isSubmenu: true,
        items: [
          {
            href: "/kite/freelancer/school-support",
            key: "schoolSupport",
          },
          {
            href: "/kite/freelancer/travel-services",
            key: "travelServices",
          },
          {
            href: "/kite/freelancer/consulting",
            key: "consulting",
          },
        ],
      },
      {
        key: "courses",
        isSubmenu: true,
        items: [
          {
            href: "/kite/courses/theory",
            key: "theory",
          },
          {
            href: "/kite/courses/starting",
            key: "starting",
          },
          {
            href: "/kite/courses/advanced",
            key: "advanced",
          },
        ],
      },
    ],
  },
  {
    href: "/engineer",
    key: "engineer",
    hasDropdown: true,
    dropdownItems: [
      {
        href: "/engineer",
        key: "allEngineeringServices",
      },
      {
        key: "processEngineering",
        isSubmenu: true,
        items: [
          {
            href: "/engineer/process-engineering/process-control",
            key: "processControl",
          },
          {
            href: "/engineer/process-engineering/process-optimization",
            key: "processOptimization",
          },
          {
            href: "/engineer/process-engineering/change-management",
            key: "changeManagement",
          },
          {
            href: "/engineer/process-engineering/monitoring",
            key: "monitoring",
          },
        ],
      },
      {
        key: "processDevelopment",
        isSubmenu: true,
        items: [
          {
            href: "/engineer/process-development/creativity",
            key: "creativity",
          },
          {
            href: "/engineer/process-development/process-design",
            key: "processDesign",
          },
          {
            href: "/engineer/process-development/simulation-prototyping",
            key: "simulationPrototyping",
          },
          {
            href: "/engineer/process-development/equipment-roadmap",
            key: "equipmentRoadmap",
          },
        ],
      },
      {
        key: "softwareDevelopment",
        isSubmenu: true,
        items: [
          {
            href: "/engineer/software-development/custom-solutions",
            key: "customSolutions",
          },
          {
            href: "/engineer/software-development/database-management",
            key: "databaseManagement",
          },
          {
            href: "/engineer/software-development/workflow-automation",
            key: "workflowAutomation",
          },
          {
            href: "/engineer/software-development/web-development",
            key: "webDevelopment",
          },
        ],
      },
      {
        key: "projectManagement",
        isSubmenu: true,
        items: [
          {
            href: "/engineer/project-management/project-setup",
            key: "projectSetup",
          },
          {
            href: "/engineer/project-management/timeline-management",
            key: "timelineManagement",
          },
          {
            href: "/engineer/project-management/deviation-management",
            key: "deviationManagement",
          },
          {
            href: "/engineer/project-management/documentation",
            key: "documentation",
          },
        ],
      },
      {
        key: "technicalConsulting",
        isSubmenu: true,
        items: [
          {
            href: "/engineer/technical-consulting/process-assessment",
            key: "processAssessment",
          },
          {
            href: "/engineer/technical-consulting/technical-research",
            key: "technicalResearch",
          },
          {
            href: "/engineer/technical-consulting/training-knowledge-transfer",
            key: "trainingKnowledgeTransfer",
          },
          {
            href: "/engineer/technical-consulting/competitor-analysis",
            key: "competitorAnalysis",
          },
        ],
      },
    ],
  },
  {
    href: "/about",
    key: "about",
  },
  {
    href: "/contact",
    key: "contact",
  },
];
