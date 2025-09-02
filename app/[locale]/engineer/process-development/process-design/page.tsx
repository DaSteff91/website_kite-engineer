import Image from "next/image";
import background_image_darker from "@/public/images/background_image_darker.jpeg";
import engineer_hero_image from "@/public/images/engineer_hero_image.jpg";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ArrowLeft,
  WandSparkles,
  Layout,
  Workflow,
  Eye,
} from "lucide-react";

import { PAGE_METADATA } from "@/lib/constants/metadata";
import { generateContactHref } from "@/lib/utils/contact-filler";
import { Hero } from "@/components/sections/Hero";

export const metadata =
  PAGE_METADATA["engineer/process-development/process-design"];

export default function ProcessDesignPage() {
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
        <h1 id="process-design-hero"
          className="pb-1 text-4xl md:text-5xl font-bold mb-6 
           bg-gradient-to-r from-white via-gray-200 to-gray-300 
           bg-clip-text text-transparent 
           [text-shadow:0_0_8px_rgba(209,213,219,0.6)]"
        >
          Process Design Services
        </h1>
      </Hero>

      {/* Content Section */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          {/* Back Navigation */}
          <div className="mb-8">
            <Link
              href="/engineer"
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to All Engineering Services
            </Link>
          </div>

          <div className="relative mb-16 sm:mb-20">
            <h2 id="process-design-section-title"
              className="text-xl sm:text-2xl md:text-3xl font-bold text-center max-w-4xl mx-auto leading-relaxed 
   bg-[linear-gradient(to_right,white,rgba(229,231,235,0.8),rgba(209,213,219,1))] 
   bg-clip-text text-transparent animate-gradient"
            >
              Everything is a process.
            </h2>
            <p id="process-design-section-subtitle" className="mt-4 text-lg sm:text-xl text-center text-white/80 max-w-3xl mx-auto leading-relaxed">
              Layouting and designing what needs to be done with visualization
              and structured approaches.
            </p>
            <div className="absolute -bottom-6 sm:-bottom-8 left-1/2 transform -translate-x-1/2 w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-500 via-teal-500 to-emerald-500 rounded-full"></div>
          </div>
          {/* Services Grid new*/}
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-6 sm:gap-8 max-w-6xl mx-auto">
              <div className="bg-gradient-to-br from-blue-900/20 via-card/20 to-cyan-900/20 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300 w-full">
                <h3 id="detailes-of-the-roadmap-services-title" className="text-xl sm:text-2xl font-bold mb-4 pb-3 border-b border-white/20 flex items-center gap-3 text-blue-200">
                  <Layout className="h-6 w-6 text-teal-400" />
                  Detailes of the Roadmap Services
                </h3>
                <p className="block text-muted-foreground mb-4 sm:mb-6 pl-5 sm:pl-6 pr-4 sm:pr-5 sm:text-base text-sm -mx-4 sm:-mx-6 w-auto">
                  {" "}
                  Ask yourself - what is it that shall be achived in what time.
                  Based on that we work out a specification and then based on
                  that the real work can beginn. And don´t forget to be
                  flexible. Your requirements may change during development. I
                  learned that first hand while working out the roadmap of a
                  chemical despensing system for a wafer separation process for
                  more than one year. In more detail I can help you with the
                  following topics:
                </p>
                <ul className="text-muted-foreground list-disc list-outside pl-4 sm:pl-5 space-y-3 sm:space-y-4 text-sm sm:text-base">
                  <li id="detailes-of-the-roadmap-services-list-element1">
                    Naming conventions: What is best to name your process flows?
                  </li>
                  <li id="detailes-of-the-roadmap-services-list-element2">Vizualisation</li>
                  <li id="detailes-of-the-roadmap-services-list-element3">Scaleablity</li>
                  <li id="detailes-of-the-roadmap-services-list-element4">
                    Documentation: Since everything is now decided, lets put it
                    into effect by applying a timeline to it and rolling it out
                    in your documentation system
                  </li>

                  <li id="detailes-of-the-roadmap-services-list-element5">
                    Review: And in case you already have a roadmap strategy: no
                    problem - I also offer you to analyze it for you and give
                    you an objective 3rd party oppinion.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Services Grid old*/}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto mb-16">
            <div className="bg-gradient-to-br from-cyan-900/20 via-card/20 to-teal-900/20 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <WandSparkles className="h-6 w-6 text-cyan-400" />
                <h3 id="process-flow-optimization-title" className="text-lg font-semibold text-cyan-200">
                  Process Flow Optimization
                </h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li id="process-flow-optimization-list-element1">• Process flow mapping and analysis</li>
                <li id="process-flow-optimization-list-element2">• Bottleneck identification and removal</li>
                <li id="process-flow-optimization-list-element3">• Workflow optimization strategies</li>
                <li id="process-flow-optimization-list-element4">• Cycle time reduction techniques</li>
                <li id="process-flow-optimization-list-element5">• Throughput maximization</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-teal-900/25 via-card/25 to-emerald-900/25 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Layout className="h-6 w-6 text-teal-400" />
                <h3 id="equipment-layout-design-title" className="text-lg font-semibold text-teal-200">
                  Equipment Layout Design
                </h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li id="equipment-layout-design-list-element1">• Equipment specification and selection</li>
                <li id="equipment-layout-design-list-element2">• Optimal layout configuration</li>
                <li id="equipment-layout-design-list-element3">• Material flow optimization</li>
                <li id="equipment-layout-design-list-element4">• Space utilization efficiency</li>
                <li id="equipment-layout-design-list-element5">• Ergonomic considerations</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-emerald-900/30 via-card/30 to-blue-900/30 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Eye className="h-6 w-6 text-emerald-400" />
                <h3 id="process-visualization-title" className="text-lg font-semibold text-emerald-200">
                  Process Visualization
                </h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li id="process-visualization-list-element1">• 3D process modeling</li>
                <li id="process-visualization-list-element2">• Interactive visualization tools</li>
                <li id="process-visualization-list-element3">• Virtual reality walkthroughs</li>
                <li id="process-visualization-list-element4">• Animation and simulation</li>
                <li id="process-visualization-list-element5">• Stakeholder communication aids</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-900/35 via-card/35 to-cyan-900/35 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Workflow className="h-6 w-6 text-blue-400" />
                <h3 id="scalability-planning-title" className="text-lg font-semibold text-blue-200">
                  Scalability Planning
                </h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li id="scalability-planning-list-element1">• Future capacity planning</li>
                <li id="scalability-planning-list-element2">• Modular design principles</li>
                <li id="scalability-planning-list-element3">• Expansion pathway definition</li>
                <li id="scalability-planning-list-element4">• Flexibility and adaptability</li>
                <li id="scalability-planning-list-element5">• Technology evolution readiness</li>
              </ul>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center">
            <p id="process-design-contact" className="text-xl text-white/90 mb-8 max-w-6xl mx-auto">
              Ready to design breakthrough processes? Let's break through
              boundaries and create what needs to be done.
            </p>
            <Link
              href={generateContactHref("/engineer/process-development/process-design")}
              target="_blank"
            >
              <Button
                size="lg"
                className="group bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-700 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl"
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