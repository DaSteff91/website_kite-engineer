import Image from "next/image";
import background_image_darker from "@/public/images/background_image_darker.jpeg";
import engineer_hero_image from "@/public/images/engineer_hero_image.jpg";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ArrowLeft,
  FileSearch,
  Eye,
  BarChart3,
  Zap,
} from "lucide-react";
import { PAGE_METADATA } from "@/lib/constants/metadata";
import { generateContactHref } from "@/lib/utils/contact-filler";
import { Hero } from "@/components/sections/Hero";

export const metadata =
  PAGE_METADATA["engineer/technical-consulting/process-assessment"];

export default function ProcessAssessmentPage() {
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
        <h1 id="process-assessment-hero"
          className="pb-1 text-4xl md:text-5xl font-bold mb-6 
           bg-gradient-to-r from-white via-gray-200 to-gray-300 
           bg-clip-text text-transparent 
           [text-shadow:0_0_8px_rgba(209,213,219,0.6)]"
        >
          Process Assessment Services
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
            <h2 id="process-assessment-section-title"
              className="text-xl sm:text-2xl md:text-3xl font-bold text-center max-w-4xl mx-auto leading-relaxed 
   bg-[linear-gradient(to_right,white,rgba(229,231,235,0.8),rgba(209,213,219,1))] 
   bg-clip-text text-transparent animate-gradient"
            >
              Get an Outside Perspective
            </h2>
            <p id="process-assessment-section-subtitle" className="mt-4 text-lg sm:text-xl text-center text-white/80 max-w-3xl mx-auto leading-relaxed">
              Detailed feedback on what to preserve and what to improve in your
              business processes
            </p>
            <div className="absolute -bottom-6 sm:-bottom-8 left-1/2 transform -translate-x-1/2 w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-500 via-teal-500 to-emerald-500 rounded-full"></div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto mb-16">
            <div className="bg-gradient-to-br from-blue-900/20 via-card/20 to-cyan-900/20 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <FileSearch className="h-6 w-6 text-blue-400" />
                <h3 id="process-evaluation-title" className="text-lg font-semibold text-blue-200">
                  Process Evaluation
                </h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li id="process-evaluation-list-element1">• Comprehensive process review</li>
                <li id="process-evaluation-list-element2">• Workflow analysis</li>
                <li id="process-evaluation-list-element3">• Efficiency assessment</li>
                <li id="process-evaluation-list-element4">• Compliance evaluation</li>
                <li id="process-evaluation-list-element5">• Documentation review</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-cyan-900/25 via-card/25 to-teal-900/25 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <BarChart3 className="h-6 w-6 text-cyan-400" />
                <h3 id="bottleneck-identification-title" className="text-lg font-semibold text-cyan-200">
                  Bottleneck Identification
                </h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li id="bottleneck-identification-list-element1">• Constraint analysis</li>
                <li id="bottleneck-identification-list-element2">• Throughput assessment</li>
                <li id="bottleneck-identification-list-element3">• Cycle time evaluation</li>
                <li id="bottleneck-identification-list-element4">• Resource utilization review</li>
                <li id="bottleneck-identification-list-element5">• Capacity limitation identification</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-teal-900/30 via-card/30 to-emerald-900/30 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="h-6 w-6 text-teal-400" />
                <h3 id="improvement-opportunities-title" className="text-lg font-semibold text-teal-200">
                  Improvement Opportunities
                </h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li id="improvement-opportunities-list-element1">• Optimization recommendations</li>
                <li id="improvement-opportunities-list-element2">• Automation potential assessment</li>
                <li id="improvement-opportunities-list-element3">• Waste elimination strategies</li>
                <li id="improvement-opportunities-list-element4">• Quality enhancement opportunities</li>
                <li id="improvement-opportunities-list-element5">• Cost reduction possibilities</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-emerald-900/35 via-card/35 to-blue-900/35 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Eye className="h-6 w-6 text-emerald-400" />
                <h3 id="best-practice-benchmarking-title" className="text-lg font-semibold text-emerald-200">
                  Best Practice Benchmarking
                </h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li id="best-practice-benchmarking-list-element1">• Industry standard comparison</li>
                <li id="best-practice-benchmarking-list-element2">• Best practice identification</li>
                <li id="best-practice-benchmarking-list-element3">• Performance gap analysis</li>
                <li id="best-practice-benchmarking-list-element4">• Competitive positioning</li>
                <li id="best-practice-benchmarking-list-element5">• Adoption recommendations</li>
              </ul>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center">
            <p id="process-assessment-contact" className="text-xl text-white/90 mb-8 max-w-6xl mx-auto">
              Ready for an outside perspective? Let's assess your processes and
              identify improvement opportunities.
            </p>
            <Link
              href={generateContactHref("/engineer/technical-consulting/process-assessment")}
              target="_blank"
            >
              <Button
                size="lg"
                className="group bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl"
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