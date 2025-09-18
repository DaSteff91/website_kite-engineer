import Image from "next/image";
import background_image_darker from "@/public/images/background_image_darker.jpeg";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Settings,
  ClipboardList,
  Lightbulb,
  Gauge,
  BarChart3,
  Network,
  FileSearch,
  GraduationCap,
  ArrowRight,
  FlaskRound,
  Microscope,
  PocketKnife,
  SlidersHorizontal,
  RefreshCw,
  WandSparkles,
  Radiation,
  MapIcon,
  Database,
  MonitorCheck,
  FolderKanban,
  Clock1,
  Navigation2Off,
  Share2,
  MessageSquareCode,
  UserRoundCheck,
  Terminal,
  ExternalLink,
} from "lucide-react";
import { generateContactHref } from "@/lib/utils/contact-filler";
import { PAGE_METADATA } from "@/lib/constants/metadata";
import { Hero } from "@/components/sections/Hero";
import { getTranslations } from "next-intl/server";

export const metadata = PAGE_METADATA.engineer;
interface EngineerPageProps {
  params: { locale: string };
}

export default async function EngineerPage({ params }: EngineerPageProps) {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "EngineerPage",
  });

  return (
    <div className="relative min-h-screen">
      {/* Background Image*/}
      <div className="fixed inset-0 -z-10">
        <Image
          src={background_image_darker}
          alt="Background"
          fill
          className="brightness-50 object-cover object-top"
          priority
          placeholder="blur"
        />
      </div>

      {/* Hero Section */}
      <Hero
        route="/engineer"
        objectPosition="center 45%"
        brightness={50}
        minHeight="60vh"
      >
        <h1
          id="engineer-hero"
          className="pb-1 text-4xl md:text-5xl font-bold mb-6 
           bg-gradient-to-r from-white via-gray-200 to-gray-300 
           bg-clip-text text-transparent 
           [text-shadow:0_0_8px_rgba(209,213,219,0.6)]"
        >
          {t("heroTitle")}
        </h1>
      </Hero>

      {/* Content Section */}
      <section className="py-16" id="content-section">
        <div className="container mx-auto px-4">
          <div className="relative mb-20">
            <h2
              id="engineer-section-title"
              className="text-2xl md:text-3xl font-bold text-center max-w-4xl mx-auto leading-relaxed 
   bg-[linear-gradient(to_right,white,rgba(229,231,235,0.8),rgba(209,213,219,1))] 
   bg-clip-text text-transparent animate-gradient"
            >
              {t("sectionTitle")}
            </h2>
            <p
              id="engineer-section-subtitle"
              className="mt-4 text-xl text-center text-white/80 max-w-3xl mx-auto leading-relaxed"
            >
              {t("sectionDescription")}
            </p>
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 via-teal-500 to-emerald-500 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start justify-items-center">
            {/* Process Engineering Section */}
            <div className="bg-gradient-to-br from-blue-900/20 via-card/20 to-cyan-900/20 backdrop-blur-sm p-6 rounded-lg border border-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300 w-full max-w-xl h-fit">
              <h3
                className="text-2xl font-bold mb-4 pb-3 border-b border-white/20 flex items-center gap-3 text-blue-200"
                id="process-engineering-section"
              >
                <Settings className="h-7 w-7 text-blue-400" />
                {t("processEngineering.title")}
              </h3>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem
                  value="process-control-1"
                  className="border-white/5"
                >
                  <AccordionTrigger className="hover:text-blue-400 transition-colors text-lg text-left">
                    <div
                      id="process-control-title"
                      className="flex items-center gap-2"
                    >
                      <SlidersHorizontal className="h-5 w-5" />
                      {t("processEngineering.processControl.title")}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent
                    id="process-control-description"
                    className="text-white/80"
                  >
                    {t("processEngineering.processControl.description")}
                    {/* This below is a version with abbr tags that have only an effect on desktop version - not sure if i shall use it */}
                    {/* <abbr title="Advanced Process Control">
                      APC (Advanced Process Control)
                    </abbr>
                    ,{" "}
                    <abbr title="Statistical Process Control">
                      SPC (Statistical Process Control)
                    </abbr>{" "}
                    and{" "}
                    <abbr title="Western Electrical Rules">
                      {" "}
                      WER (Western Electrical Rules)
                    </abbr>{" "}
                    implementation as core competence. Data analytics using
                    Python, AI training for failure detection, dashboards & KPI
                    setup help along the way. */}
                    <div className="mt-4 flex flex-col gap-2">
                      {/* <Link
                        href="/engineer/process-engineering/process-control"
                        className="text-blue-400 hover:text-blue-300 flex items-center gap-2"
                      >
                        <ExternalLink className="h-3 w-3" />
                        More
                      </Link> */}
                      <Link
                        href={generateContactHref(
                          "/engineer/process-engineering/process-control"
                        )}
                        className="text-blue-400 hover:text-blue-300 flex items-center gap-2"
                        target="_blank"
                      >
                        <ExternalLink className="h-3 w-3" />
                        {t("contactButton")}
                      </Link>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="process-optimization-1"
                  className="border-white/5"
                >
                  <AccordionTrigger className="hover:text-blue-400 transition-colors text-lg text-left">
                    <div
                      id="process-optimization-title"
                      className="flex items-center gap-2"
                    >
                      <Gauge className="h-5 w-5" />
                      {t("processEngineering.processOptimization.title")}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent
                    id="process-optimization-description"
                    className="text-white/80"
                  >
                    {t("processEngineering.processOptimization.description")}
                    <div className="mt-4 flex flex-col gap-2">
                      {/* <Link
                        href="/engineer/process-engineering/process-optimization"
                        className="text-blue-400 hover:text-blue-300 flex items-center gap-2"
                      >
                        <ExternalLink className="h-3 w-3" />
                        More
                      </Link> */}
                      <Link
                        href={generateContactHref(
                          "/engineer/process-engineering/process-optimization"
                        )}
                        className="text-blue-400 hover:text-blue-300 flex items-center gap-2"
                        target="_blank"
                      >
                        <ExternalLink className="h-3 w-3" />
                        {t("contactButton")}
                      </Link>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="change-management-1"
                  className="border-white/5"
                >
                  <AccordionTrigger className="hover:text-blue-400 transition-colors text-lg text-left">
                    <div
                      id="change-management-title"
                      className="flex items-center gap-2"
                    >
                      <RefreshCw className="h-5 w-5" />
                      {t("processEngineering.changeManagement.title")}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent
                    id="change-management-description"
                    className="text-white/80"
                  >
                    {t("processEngineering.changeManagement.description")}
                    <div className="mt-4 flex flex-col gap-2">
                      {/* <Link
                        href="/engineer/process-engineering/change-management"
                        className="text-blue-400 hover:text-blue-300 flex items-center gap-2"
                      >
                        <ExternalLink className="h-3 w-3" />
                        More
                      </Link> */}
                      <Link
                        href={generateContactHref(
                          "/engineer/process-engineering/change-management"
                        )}
                        className="text-blue-400 hover:text-blue-300 flex items-center gap-2"
                        target="_blank"
                      >
                        <ExternalLink className="h-3 w-3" />
                        {t("contactButton")}
                      </Link>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="monitoring-1" className="border-white/5">
                  <AccordionTrigger className="hover:text-blue-400 transition-colors text-lg text-left">
                    <div
                      id="monitoring-title"
                      className="flex items-center gap-2"
                    >
                      <BarChart3 className="h-5 w-5" />
                      {t("processEngineering.monitoring.title")}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent
                    id="monitoring-description"
                    className="text-white/80"
                  >
                    {t("processEngineering.monitoring.description")}
                    <div className="mt-4 flex flex-col gap-2">
                      {/* <Link
                        href="/engineer/process-engineering/monitoring"
                        className="text-blue-400 hover:text-blue-300 flex items-center gap-2"
                      >
                        <ExternalLink className="h-3 w-3" />
                        More
                      </Link> */}
                      <Link
                        href={generateContactHref(
                          "/engineer/process-engineering/monitoring"
                        )}
                        className="text-blue-400 hover:text-blue-300 flex items-center gap-2"
                        target="_blank"
                      >
                        <ExternalLink className="h-3 w-3" />
                        {t("contactButton")}
                      </Link>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Process Development Section */}
            <div className="bg-gradient-to-br from-cyan-900/25 via-card/25 to-teal-900/25 backdrop-blur-sm p-6 rounded-lg border border-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300 w-full max-w-xl h-fit">
              <h3
                className="text-2xl font-bold mb-4 pb-3 border-b border-white/20 flex items-center gap-3 text-cyan-200"
                id="process-development-section"
              >
                <FlaskRound className="h-7 w-7 text-cyan-400" />
                {t("processDevelopment.title")}
              </h3>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="creativity" className="border-white/5">
                  <AccordionTrigger className="hover:text-cyan-400 transition-colors text-lg text-left">
                    <div
                      id="creativity-title"
                      className="flex items-center gap-2"
                    >
                      <Lightbulb className="h-5 w-5" />
                      {t("processDevelopment.creativity.title")}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent
                    id="creativity-description"
                    className="text-white/80"
                  >
                    {t("processDevelopment.creativity.description")}
                    <div className="mt-4 flex flex-col gap-2">
                      {/* <Link
                        href="/engineer/process-development/creativity"
                        className="text-cyan-400 hover:text-cyan-300 flex items-center gap-2"
                      >
                        <ExternalLink className="h-3 w-3" />
                        More
                      </Link> */}
                      <Link
                        href={generateContactHref(
                          "/engineer/process-development/creativity"
                        )}
                        className="text-cyan-400 hover:text-cyan-300 flex items-center gap-2"
                        target="_blank"
                      >
                        <ExternalLink className="h-3 w-3" />
                        {t("contactButton")}
                      </Link>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="process-design-2"
                  className="border-white/5"
                >
                  <AccordionTrigger className="hover:text-cyan-400 transition-colors text-lg text-left">
                    <div
                      id="process-design-title"
                      className="flex items-center gap-2"
                    >
                      <WandSparkles className="h-5 w-5" />
                      {t("processDevelopment.processDesign.title")}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent
                    id="process-design-description"
                    className="text-white/80"
                  >
                    {t("processDevelopment.processDesign.description")}
                    <div className="mt-4 flex flex-col gap-2">
                      {/* <Link
                        href="/engineer/process-development/process-design"
                        className="text-cyan-400 hover:text-cyan-300 flex items-center gap-2"
                      >
                        <ExternalLink className="h-3 w-3" />
                        More
                      </Link> */}
                      <Link
                        href={generateContactHref(
                          "/engineer/process-development/process-design"
                        )}
                        className="text-cyan-400 hover:text-cyan-300 flex items-center gap-2"
                        target="_blank"
                      >
                        <ExternalLink className="h-3 w-3" />
                        {t("contactButton")}
                      </Link>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="simulation-prototyping-2"
                  className="border-white/5"
                >
                  <AccordionTrigger className="hover:text-cyan-400 transition-colors text-lg text-left">
                    <div
                      id="simulation-prototyping-title"
                      className="flex items-center gap-2"
                    >
                      <Radiation className="h-5 w-5" />
                      {t("processDevelopment.simulationPrototyping.title")}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent
                    id="simulation-prototyping-description"
                    className="text-white/80"
                  >
                    {t("processDevelopment.simulationPrototyping.description")}
                    <div className="mt-4 flex flex-col gap-2">
                      {/* <Link
                        href="/engineer/process-development/simulation-prototyping"
                        className="text-cyan-400 hover:text-cyan-300 flex items-center gap-2"
                      >
                        <ExternalLink className="h-3 w-3" />
                        More
                      </Link> */}
                      <Link
                        href={generateContactHref(
                          "/engineer/process-development/simulation-prototyping"
                        )}
                        className="text-cyan-400 hover:text-cyan-300 flex items-center gap-2"
                        target="_blank"
                      >
                        <ExternalLink className="h-3 w-3" />
                        {t("contactButton")}
                      </Link>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="process-equipment-roadmap-2"
                  className="border-white/5"
                >
                  <AccordionTrigger className="hover:text-cyan-400 transition-colors text-lg text-left">
                    <div
                      id="process-equipment-roadmap-title"
                      className="flex items-center gap-2"
                    >
                      <MapIcon className="h-5 w-5" />
                      {t("processDevelopment.processEquipmentRoadmap.title")}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent
                    id="process-equipment-roadmap-description"
                    className="text-white/80"
                  >
                    {t(
                      "processDevelopment.processEquipmentRoadmap.description"
                    )}
                    <div className="mt-4 flex flex-col gap-2">
                      {/* <Link
                        href="/engineer/process-development/equipment-roadmap"
                        className="text-cyan-400 hover:text-cyan-300 flex items-center gap-2"
                      >
                        <ExternalLink className="h-3 w-3" />
                        More
                      </Link> */}
                      <Link
                        href={generateContactHref(
                          "/engineer/process-development/equipment-roadmap"
                        )}
                        className="text-cyan-400 hover:text-cyan-300 flex items-center gap-2"
                        target="_blank"
                      >
                        <ExternalLink className="h-3 w-3" />
                        {t("contactButton")}
                      </Link>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Software Development Section */}
            <div className="bg-gradient-to-br from-teal-900/30 via-card/30 to-emerald-900/30 backdrop-blur-sm p-6 rounded-lg border border-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300 w-full max-w-xl h-fit">
              <h3
                className="text-2xl font-bold mb-4 pb-3 border-b border-white/20 flex items-center gap-3 text-teal-200"
                id="software-development-section"
              >
                <Terminal className="h-7 w-7 text-teal-400" />
                {t("softwareDevelopment.title")}
              </h3>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem
                  value="custom-software-3"
                  className="border-white/5"
                >
                  <AccordionTrigger className="hover:text-teal-400 transition-colors text-lg text-left">
                    <div
                      id="custom-software-title"
                      className="flex items-center gap-2"
                    >
                      <PocketKnife className="h-5 w-5" />
                      {t("softwareDevelopment.customizedSolutions.title")}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent
                    id="custom-software-description"
                    className="text-white/80"
                  >
                    {t("softwareDevelopment.customizedSolutions.description")}
                    <div className="mt-4 flex flex-col gap-2">
                      {/* <Link
                        href="/engineer/software-development/custom-solutions"
                        className="text-teal-400 hover:text-teal-300 flex items-center gap-2"
                      >
                        <ExternalLink className="h-3 w-3" />
                        More
                      </Link> */}
                      <Link
                        href={generateContactHref(
                          "/engineer/software-development/custom-solutions"
                        )}
                        className="text-teal-400 hover:text-teal-300 flex items-center gap-2"
                        target="_blank"
                      >
                        <ExternalLink className="h-3 w-3" />
                        {t("contactButton")}
                      </Link>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="rdbm-3" className="border-white/5">
                  <AccordionTrigger className="hover:text-teal-400 transition-colors text-lg text-left">
                    <div id="rdbm-title" className="flex items-center gap-2">
                      <Database className="h-5 w-5" />
                      {t("softwareDevelopment.databaseManagement.title")}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent
                    id="rdbm-description"
                    className="text-white/80"
                  >
                    {t("softwareDevelopment.databaseManagement.description")}
                    <div className="mt-4 flex flex-col gap-2">
                      {/* <Link
                        href="/engineer/software-development/database-management"
                        className="text-teal-400 hover:text-teal-300 flex items-center gap-2"
                      >
                        <ExternalLink className="h-3 w-3" />
                        More
                      </Link> */}
                      <Link
                        href={generateContactHref(
                          "/engineer/software-development/database-management"
                        )}
                        className="text-teal-400 hover:text-teal-300 flex items-center gap-2"
                        target="_blank"
                      >
                        <ExternalLink className="h-3 w-3" />
                        {t("contactButton")}
                      </Link>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="workflow-automatization-3"
                  className="border-white/5"
                >
                  <AccordionTrigger className="hover:text-teal-400 transition-colors text-lg text-left">
                    <div
                      id="workflow-automatization-title"
                      className="flex items-center gap-2"
                    >
                      <Network className="h-5 w-5" />
                      {t("softwareDevelopment.workflowAutomation.title")}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent
                    id="workflow-automatization-description"
                    className="text-white/80"
                  >
                    {t("softwareDevelopment.workflowAutomation.description")}
                    <div className="mt-4 flex flex-col gap-2">
                      {/* <Link
                        href="/engineer/software-development/workflow-automation"
                        className="text-teal-400 hover:text-teal-300 flex items-center gap-2"
                      >
                        <ExternalLink className="h-3 w-3" />
                        More
                      </Link> */}
                      <Link
                        href={generateContactHref(
                          "/engineer/software-development/workflow-automation"
                        )}
                        className="text-teal-400 hover:text-teal-300 flex items-center gap-2"
                        target="_blank"
                      >
                        <ExternalLink className="h-3 w-3" />
                        {t("contactButton")}
                      </Link>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="web-development-3"
                  className="border-white/5"
                >
                  <AccordionTrigger className="hover:text-teal-400 transition-colors text-lg text-left">
                    <div
                      id="web-development-title"
                      className="flex items-center gap-2"
                    >
                      <MonitorCheck className="h-5 w-5" />
                      {t("softwareDevelopment.webDevelopment.title")}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent
                    id="web-development-description"
                    className="text-white/80"
                  >
                    {t("softwareDevelopment.webDevelopment.description")}
                    <div className="mt-4 flex flex-col gap-2">
                      {/* <Link
                        href="/engineer/software-development/web-development"
                        className="text-teal-400 hover:text-teal-300 flex items-center gap-2"
                      >
                        <ExternalLink className="h-3 w-3" />
                        More
                      </Link> */}
                      <Link
                        href={generateContactHref(
                          "/engineer/software-development/web-development"
                        )}
                        className="text-teal-400 hover:text-teal-300 flex items-center gap-2"
                        target="_blank"
                      >
                        <ExternalLink className="h-3 w-3" />
                        {t("contactButton")}
                      </Link>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Project Management Section */}
            <div className="bg-gradient-to-br from-emerald-900/35 via-card/35 to-blue-900/35 backdrop-blur-sm p-6 rounded-lg border border-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300 w-full max-w-xl h-fit">
              <h3
                className="text-2xl font-bold mb-4 pb-3 border-b border-white/20 flex items-center gap-3 text-emerald-200"
                id="project-management-section"
              >
                <ClipboardList className="h-7 w-7 text-emerald-400" />
                {t("projectManagement.title")}
              </h3>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem
                  value="project-setup-4"
                  className="border-white/5"
                >
                  <AccordionTrigger className="hover:text-emerald-400 transition-colors text-lg text-left">
                    <div
                      id="project-setup-title"
                      className="flex items-center gap-2"
                    >
                      <FolderKanban className="h-5 w-5" />
                      {t("projectManagement.projectSetup.title")}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent
                    id="project-setup-description"
                    className="text-white/80"
                  >
                    {t("projectManagement.projectSetup.description")}
                    <div className="mt-4 flex flex-col gap-2">
                      {/* <Link
                        href="/engineer/project-management/project-setup"
                        className="text-emerald-400 hover:text-emerald-300 flex items-center gap-2"
                      >
                        <ExternalLink className="h-3 w-3" />
                        More
                      </Link> */}
                      <Link
                        href={generateContactHref(
                          "/engineer/project-management/project-setup"
                        )}
                        className="text-emerald-400 hover:text-emerald-300 flex items-center gap-2"
                        target="_blank"
                      >
                        <ExternalLink className="h-3 w-3" />
                        {t("contactButton")}
                      </Link>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="timeline-management-4"
                  className="border-white/5"
                >
                  <AccordionTrigger className="hover:text-emerald-400 transition-colors text-lg text-left">
                    <div
                      id="timeline-management-title"
                      className="flex items-center gap-2"
                    >
                      <Clock1 className="h-5 w-5" />
                      {t("projectManagement.timelineManagement.title")}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent
                    id="timeline-management-description"
                    className="text-white/80"
                  >
                    {t("projectManagement.timelineManagement.description")}
                    <div className="mt-4 flex flex-col gap-2">
                      {/* <Link
                        href="/engineer/project-management/timeline-management"
                        className="text-emerald-400 hover:text-emerald-300 flex items-center gap-2"
                      >
                        <ExternalLink className="h-3 w-3" />
                        More
                      </Link> */}
                      <Link
                        href={generateContactHref(
                          "/engineer/project-management/timeline-management"
                        )}
                        className="text-emerald-400 hover:text-emerald-300 flex items-center gap-2"
                        target="_blank"
                      >
                        <ExternalLink className="h-3 w-3" />
                        {t("contactButton")}
                      </Link>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="deviation-management-4"
                  className="border-white/5"
                >
                  <AccordionTrigger className="hover:text-emerald-400 transition-colors text-lg text-left">
                    <div
                      id="deviation-management-title"
                      className="flex items-center gap-2"
                    >
                      <Navigation2Off className="h-5 w-5" />
                      {t("projectManagement.deviationManagement.title")}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent
                    id="deviation-management-description"
                    className="text-white/80"
                  >
                    {t("projectManagement.deviationManagement.description")}
                    <div className="mt-4 flex flex-col gap-2">
                      {/* <Link
                        href="/engineer/project-management/deviation-management"
                        className="text-emerald-400 hover:text-emerald-300 flex items-center gap-2"
                      >
                        <ExternalLink className="h-3 w-3" />
                        More
                      </Link> */}
                      <Link
                        href={generateContactHref(
                          "/engineer/project-management/deviation-management"
                        )}
                        className="text-emerald-400 hover:text-emerald-300 flex items-center gap-2"
                        target="_blank"
                      >
                        <ExternalLink className="h-3 w-3" />
                        {t("contactButton")}
                      </Link>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="documentation-4"
                  className="border-white/5"
                >
                  <AccordionTrigger className="hover:text-emerald-400 transition-colors text-lg text-left">
                    <div
                      id="documentation-title"
                      className="flex items-center gap-2"
                    >
                      <Share2 className="h-5 w-5" />
                      {t("projectManagement.documentationSharing.title")}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent
                    id="documentation-description"
                    className="text-white/80"
                  >
                    {t("projectManagement.documentationSharing.description")}
                    <div className="mt-4 flex flex-col gap-2">
                      {/* <Link
                        href="/engineer/project-management/documentation"
                        className="text-emerald-400 hover:text-emerald-300 flex items-center gap-2"
                      >
                        <ExternalLink className="h-3 w-3" />
                        More
                      </Link> */}
                      <Link
                        href={generateContactHref(
                          "/engineer/project-management/documentation"
                        )}
                        className="text-emerald-400 hover:text-emerald-300 flex items-center gap-2"
                        target="_blank"
                      >
                        <ExternalLink className="h-3 w-3" />
                        {t("contactButton")}
                      </Link>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Technical Consulting Section */}
            <div className="bg-gradient-to-br from-blue-900/40 via-card/40 to-cyan-900/40 backdrop-blur-sm p-6 rounded-lg border border-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300 w-full max-w-xl h-fit">
              <h3
                className="text-2xl font-bold mb-4 pb-3 border-b border-white/20 flex items-center gap-3 text-blue-200"
                id="technical-consulting-section"
              >
                <MessageSquareCode className="h-7 w-7 text-blue-400" />
                {t("technicalConsulting.title")}
              </h3>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem
                  value="process-assessment-5"
                  className="border-white/5"
                >
                  <AccordionTrigger className="hover:text-blue-400 transition-colors text-lg text-left">
                    <div
                      id="process-assessment-title"
                      className="flex items-center gap-2"
                    >
                      <FileSearch className="h-5 w-5" />
                      {t("technicalConsulting.processAssessment.title")}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent
                    id="process-assessment-description"
                    className="text-white/80"
                  >
                    {t("technicalConsulting.processAssessment.description")}
                    <div className="mt-4 flex flex-col gap-2">
                      {/* <Link
                        href="/engineer/technical-consulting/process-assessment"
                        className="text-blue-400 hover:text-blue-300 flex items-center gap-2"
                      >
                        <ExternalLink className="h-3 w-3" />
                        More
                      </Link> */}
                      <Link
                        href={generateContactHref(
                          "/engineer/technical-consulting/process-assessment"
                        )}
                        className="text-blue-400 hover:text-blue-300 flex items-center gap-2"
                        target="_blank"
                      >
                        <ExternalLink className="h-3 w-3" />
                        {t("contactButton")}
                      </Link>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="technology-roadmap-5"
                  className="border-white/5"
                >
                  <AccordionTrigger className="hover:text-blue-400 transition-colors text-lg text-left">
                    <div
                      id="technology-roadmap-title"
                      className="flex items-center gap-2"
                    >
                      <Microscope className="h-5 w-5" />
                      {t("technicalConsulting.technicalResearch.title")}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent
                    id="technology-roadmap-description"
                    className="text-white/80"
                  >
                    {t("technicalConsulting.technicalResearch.description")}
                    <div className="mt-4 flex flex-col gap-2">
                      {/* <Link
                        href="/engineer/technical-consulting/technical-research"
                        className="text-blue-400 hover:text-blue-300 flex items-center gap-2"
                      >
                        <ExternalLink className="h-3 w-3" />
                        More
                      </Link> */}
                      <Link
                        href={generateContactHref(
                          "/engineer/technical-consulting/technical-research"
                        )}
                        className="text-blue-400 hover:text-blue-300 flex items-center gap-2"
                        target="_blank"
                      >
                        <ExternalLink className="h-3 w-3" />
                        {t("contactButton")}
                      </Link>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="training-5" className="border-white/5">
                  <AccordionTrigger className="hover:text-blue-400 transition-colors text-lg text-left">
                    <div
                      id="training-title"
                      className="flex items-center gap-2"
                    >
                      <GraduationCap className="h-5 w-5" />
                      {t("technicalConsulting.trainingKnowledgeTransfer.title")}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent
                    id="training-description"
                    className="text-white/80"
                  >
                    {t(
                      "technicalConsulting.trainingKnowledgeTransfer.description"
                    )}
                    <div className="mt-4 flex flex-col gap-2">
                      {/* <Link
                        href="/engineer/technical-consulting/training-knowledge-transfer"
                        className="text-blue-400 hover:text-blue-300 flex items-center gap-2"
                      >
                        <ExternalLink className="h-3 w-3" />
                        More
                      </Link> */}
                      <Link
                        href={generateContactHref(
                          "/engineer/technical-consulting/training-knowledge-transfer"
                        )}
                        className="text-blue-400 hover:text-blue-300 flex items-center gap-2"
                        target="_blank"
                      >
                        <ExternalLink className="h-3 w-3" />
                        {t("contactButton")}
                      </Link>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="competitor-analysis-5"
                  className="border-white/5"
                >
                  <AccordionTrigger className="hover:text-blue-400 transition-colors text-lg text-left">
                    <div
                      id="competitor-analysis-title"
                      className="flex items-center gap-2"
                    >
                      <UserRoundCheck className="h-5 w-5" />
                      {t("technicalConsulting.competitorAnalysis.title")}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent
                    id="competitor-analysis-description"
                    className="text-white/80"
                  >
                    {t("technicalConsulting.competitorAnalysis.description")}
                    <div className="mt-4 flex flex-col gap-2">
                      {/* <Link
                        href="/engineer/technical-consulting/competitor-analysis"
                        className="text-blue-400 hover:text-blue-300 flex items-center gap-2"
                      >
                        <ExternalLink className="h-3 w-3" />
                        More
                      </Link> */}
                      <Link
                        href={generateContactHref(
                          "/engineer/technical-consulting/competitor-analysis"
                        )}
                        className="text-blue-400 hover:text-blue-300 flex items-center gap-2"
                        target="_blank"
                      >
                        <ExternalLink className="h-3 w-3" />
                        {t("contactButton")}
                      </Link>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          {/* Enhanced Contact Section */}
          <div className="mt-16 text-center">
            <p className="text-xl text-white/90 mb-8 max-w-6xl mx-auto">
              {t("contactSection.description")}
            </p>
            <Link href="/contact" target="_blank">
              <Button
                size="lg"
                className="group bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                {t("contactSection.buttonText")}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
