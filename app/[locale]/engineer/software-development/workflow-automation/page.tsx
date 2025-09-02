import Image from "next/image";
import background_image_darker from "@/public/images/background_image_darker.jpeg";
import engineer_hero_image from "@/public/images/engineer_hero_image.jpg";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ArrowLeft,
  Network,
  Zap,
  Clock,
  Workflow,
} from "lucide-react";
import { PAGE_METADATA } from "@/lib/constants/metadata";
import { generateContactHref } from "@/lib/utils/contact-filler";
import { Hero } from "@/components/sections/Hero";

export const metadata =
  PAGE_METADATA["engineer/software-development/workflow-automation"];

export default function WorkflowAutomationPage() {
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
        <h1 id="workflow-automation-hero"
          className="pb-1 text-4xl md:text-5xl font-bold mb-6 
           bg-gradient-to-r from-white via-gray-200 to-gray-300 
           bg-clip-text text-transparent 
           [text-shadow:0_0_8px_rgba(209,213,219,0.6)]"
        >
          Workflow Automation Services
        </h1>
      </Hero>

      {/* Content Section */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          {/* Back Navigation */}
          <div className="mb-8">
            <Link
              href="/engineer"
              className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to All Engineering Services
            </Link>
          </div>

          <div className="relative mb-16 sm:mb-20">
            <h2 id="workflow-automation-section-title"
              className="text-xl sm:text-2xl md:text-3xl font-bold text-center max-w-4xl mx-auto leading-relaxed 
   bg-[linear-gradient(to_right,white,rgba(229,231,235,0.8),rgba(209,213,219,1))] 
   bg-clip-text text-transparent animate-gradient"
            >
              Save Time, Let Software Work
            </h2>
            <p id="workflow-automation-section-subtitle" className="mt-4 text-lg sm:text-xl text-center text-white/80 max-w-3xl mx-auto leading-relaxed">
              Eliminate repetitive tasks and optimize workflows with intelligent
              automation
            </p>
            <div className="absolute -bottom-6 sm:-bottom-8 left-1/2 transform -translate-x-1/2 w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-500 via-teal-500 to-emerald-500 rounded-full"></div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto mb-16">
            <div className="bg-gradient-to-br from-teal-900/20 via-card/20 to-emerald-900/20 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Network className="h-6 w-6 text-teal-400" />
                <h3 id="process-automation-title" className="text-lg font-semibold text-teal-200">
                  Process Automation
                </h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li id="process-automation-list-element1">• Repetitive task elimination</li>
                <li id="process-automation-list-element2">• Business process automation</li>
                <li id="process-automation-list-element3">• Document processing workflows</li>
                <li id="process-automation-list-element4">• Data entry automation</li>
                <li id="process-automation-list-element5">• Report generation automation</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-emerald-900/25 via-card/25 to-blue-900/25 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Workflow className="h-6 w-6 text-emerald-400" />
                <h3 id="workflow-orchestration-title" className="text-lg font-semibold text-emerald-200">
                  Workflow Orchestration
                </h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li id="workflow-orchestration-list-element1">• Multi-step workflow design</li>
                <li id="workflow-orchestration-list-element2">• Conditional logic implementation</li>
                <li id="workflow-orchestration-list-element3">• Error handling and recovery</li>
                <li id="workflow-orchestration-list-element4">• Workflow monitoring and logging</li>
                <li id="workflow-orchestration-list-element5">• Performance optimization</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-900/30 via-card/30 to-cyan-900/30 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="h-6 w-6 text-blue-400" />
                <h3 id="integration-solutions-title" className="text-lg font-semibold text-blue-200">
                  Integration Solutions
                </h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li id="integration-solutions-list-element1">• Existing software integration</li>
                <li id="integration-solutions-list-element2">• API connectivity and automation</li>
                <li id="integration-solutions-list-element3">• Data synchronization</li>
                <li id="integration-solutions-list-element4">• Third-party service integration</li>
                <li id="integration-solutions-list-element5">• Legacy system connectivity</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-cyan-900/35 via-card/35 to-teal-900/35 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="h-6 w-6 text-cyan-400" />
                <h3 id="monitoring-alerting-title" className="text-lg font-semibold text-cyan-200">
                  Monitoring & Alerting
                </h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li id="monitoring-alerting-list-element1">• Real-time workflow monitoring</li>
                <li id="monitoring-alerting-list-element2">• Automated alert systems</li>
                <li id="monitoring-alerting-list-element3">• Performance metrics tracking</li>
                <li id="monitoring-alerting-list-element4">• Failure detection and notification</li>
                <li id="monitoring-alerting-list-element5">• Audit trail and compliance</li>
              </ul>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center">
            <p id="workflow-automation-contact" className="text-xl text-white/90 mb-8 max-w-6xl mx-auto">
              Ready to automate your workflows? Let's eliminate repetitive tasks
              and optimize your processes.
            </p>
            <Link
              href={generateContactHref("/engineer/software-development/workflow-automation")}
              target="_blank"
            >
              <Button
                size="lg"
                className="group bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Connect with me
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}