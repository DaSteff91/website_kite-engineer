import Image from "next/image";
import background_image_darker from "@/public/images/background_image_darker.jpeg";
import engineer_hero_image from "@/public/images/engineer_hero_image.jpg";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ArrowLeft,
  RefreshCw,
  FileText,
  Shield,
  GitBranch,
} from "lucide-react";

import { PAGE_METADATA } from "@/lib/constants/metadata";
import { generateContactHref } from "@/lib/utils/contact-filler";
import { Hero } from "@/components/sections/Hero";

export const metadata =
  PAGE_METADATA["engineer/process-engineering/change-management"];

export default function ChangeManagementPage() {
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
          className="pb-1 text-4xl md:text-5xl font-bold mb-6 
           bg-gradient-to-r from-white via-gray-200 to-gray-300 
           bg-clip-text text-transparent 
           [text-shadow:0_0_8px_rgba(209,213,219,0.6)]"
        >
          Change Management Services
        </h1>
      </Hero>

      {/* Content Section */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          {/* Back Navigation */}
          <div className="mb-8">
            <Link
              href="/engineer"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to All Engineering Services
            </Link>
          </div>

          <div className="relative mb-16 sm:mb-20">
            <h2
              className="text-xl sm:text-2xl md:text-3xl font-bold text-center max-w-4xl mx-auto leading-relaxed 
   bg-[linear-gradient(to_right,white,rgba(229,231,235,0.8),rgba(209,213,219,1))] 
   bg-clip-text text-transparent animate-gradient"
            >
              Professional Change Management
            </h2>
            <p className="mt-4 text-lg sm:text-xl text-center text-white/80 max-w-3xl mx-auto leading-relaxed">
              Milestone preparation, release gates, and comprehensive
              documentation for seamless transitions
            </p>
            <div className="absolute -bottom-6 sm:-bottom-8 left-1/2 transform -translate-x-1/2 w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-500 via-teal-500 to-emerald-500 rounded-full"></div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto mb-16">
            <div className="bg-gradient-to-br from-blue-900/20 via-card/20 to-cyan-900/20 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <RefreshCw className="h-6 w-6 text-blue-400" />
                <h3 id="process-change-documentation-title" className="text-lg font-semibold text-blue-200">
                  Process Change Documentation
                </h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li id="process-change-documentation-list-element1">• Change request documentation</li>
                <li id="process-change-documentation-list-element2">• Impact assessment reports</li>
                <li id="process-change-documentation-list-element3">• Risk analysis and mitigation</li>
                <li id="process-change-documentation-list-element4">• Approval workflow management</li>
                <li id="process-change-documentation-list-element5">• Change implementation tracking</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-cyan-900/25 via-card/25 to-teal-900/25 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="h-6 w-6 text-cyan-400" />
                <h3 id="release-gate-management-title" className="text-lg font-semibold text-cyan-200">
                  Release Gate Management
                </h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li id="release-gate-management-list-element1">• Gate criteria definition</li>
                <li id="release-gate-management-list-element2">• Milestone preparation</li>
                <li id="release-gate-management-list-element3">• Review and approval processes</li>
                <li id="release-gate-management-list-element4">• Quality gate implementation</li>
                <li id="release-gate-management-list-element5">• Release readiness assessment</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-teal-900/30 via-card/30 to-emerald-900/30 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <GitBranch className="h-6 w-6 text-teal-400" />
                <h3 id="traceability-systems-title" className="text-lg font-semibold text-teal-200">
                  Traceability Systems
                </h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li id="traceability-systems-list-element1">• Version control protocols</li>
                <li id="traceability-systems-list-element2">• Change history tracking</li>
                <li id="traceability-systems-list-element3">• Audit trail maintenance</li>
                <li id="traceability-systems-list-element4">• Document version management</li>
                <li id="traceability-systems-list-element5">• Compliance documentation</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-emerald-900/35 via-card/35 to-blue-900/35 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="h-6 w-6 text-emerald-400" />
                <h3 id="compliance-audit-support-title" className="text-lg font-semibold text-emerald-200">
                  Compliance & Audit Support
                </h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li id="compliance-audit-support-list-element1">• Regulatory compliance management</li>
                <li id="compliance-audit-support-list-element2">• Audit preparation and support</li>
                <li id="compliance-audit-support-list-element3">• Standard operating procedures</li>
                <li id="compliance-audit-support-list-element4">• Quality system documentation</li>
                <li id="compliance-audit-support-list-element5">• Corrective action tracking</li>
              </ul>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center">
            <p className="text-xl text-white/90 mb-8 max-w-6xl mx-auto">
              Ready to implement professional change management? Let's ensure
              your transitions are smooth and compliant.
            </p>
            <Link
              href={generateContactHref("/engineer/process-engineering/change-management")}
              target="_blank"
            >
              <Button
                size="lg"
                className="group bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl"
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