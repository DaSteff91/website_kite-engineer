import Image from "next/image";
import background_image_darker from "@/public/images/background_image_darker.jpeg";
import engineer_hero_image from "@/public/images/engineer_hero_image.jpg";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ArrowLeft,
  PocketKnife,
  Code,
  Layers,
  Zap,
} from "lucide-react";
import { PAGE_METADATA } from "@/lib/constants/metadata";
import { generateContactHref } from "@/lib/utils/contact-filler";
import { Hero } from "@/components/sections/Hero";

export const metadata =
  PAGE_METADATA["engineer/software-development/custom-solutions"];

export default function CustomSolutionsPage() {
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
          Custom Software Solutions
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
            <h2
              className="text-xl sm:text-2xl md:text-3xl font-bold text-center max-w-4xl mx-auto leading-relaxed 
   bg-[linear-gradient(to_right,white,rgba(229,231,235,0.8),rgba(209,213,219,1))] 
   bg-clip-text text-transparent animate-gradient"
            >
              Combine Features, Create Solutions
            </h2>
            <p className="mt-4 text-lg sm:text-xl text-center text-white/80 max-w-3xl mx-auto leading-relaxed">
              From custom scripts to full-stack applications - tailored software
              that fits your exact needs
            </p>
            <div className="absolute -bottom-6 sm:-bottom-8 left-1/2 transform -translate-x-1/2 w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-500 via-teal-500 to-emerald-500 rounded-full"></div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto mb-16">
            <div className="bg-gradient-to-br from-teal-900/20 via-card/20 to-emerald-900/20 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <PocketKnife className="h-6 w-6 text-teal-400" />
                <h3 id="tailored-applications-title" className="text-lg font-semibold text-teal-200">
                  Tailored Applications
                </h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li id="tailored-applications-list-element1">• Custom software development</li>
                <li id="tailored-applications-list-element2">• Feature integration and combination</li>
                <li id="tailored-applications-list-element3">• Business-specific solutions</li>
                <li id="tailored-applications-list-element4">• Legacy system modernization</li>
                <li id="tailored-applications-list-element5">• Bespoke functionality implementation</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-emerald-900/25 via-card/25 to-blue-900/25 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Code className="h-6 w-6 text-emerald-400" />
                <h3 id="custom-scripts-tools-title" className="text-lg font-semibold text-emerald-200">
                  Custom Scripts & Tools
                </h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li id="custom-scripts-tools-list-element1">• Automation script development</li>
                <li id="custom-scripts-tools-list-element2">• Data processing tools</li>
                <li id="custom-scripts-tools-list-element3">• Custom utilities and helpers</li>
                <li id="custom-scripts-tools-list-element4">• Integration scripts</li>
                <li id="custom-scripts-tools-list-element5">• Performance optimization tools</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-900/30 via-card/30 to-cyan-900/30 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Layers className="h-6 w-6 text-blue-400" />
                <h3 id="system-integration-title" className="text-lg font-semibold text-blue-200">
                  System Integration
                </h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li id="system-integration-list-element1">• API development and integration</li>
                <li id="system-integration-list-element2">• Third-party service connections</li>
                <li id="system-integration-list-element3">• Data synchronization solutions</li>
                <li id="system-integration-list-element4">• Middleware development</li>
                <li id="system-integration-list-element5">• Cross-platform compatibility</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-cyan-900/35 via-card/35 to-teal-900/35 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="h-6 w-6 text-cyan-400" />
                <h3 id="containerization-title" className="text-lg font-semibold text-cyan-200">
                  Containerization
                </h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li id="containerization-list-element1">• Docker containerization</li>
                <li id="containerization-list-element2">• Microservices architecture</li>
                <li id="containerization-list-element3">• Container orchestration</li>
                <li id="containerization-list-element4">• Deployment automation</li>
                <li id="containerization-list-element5">• Scalable infrastructure setup</li>
              </ul>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center">
            <p className="text-xl text-white/90 mb-8 max-w-6xl mx-auto">
              Ready to build your custom solution? Let's combine the features
              you need into the perfect software.
            </p>
            <Link
              href={generateContactHref("/engineer/software-development/custom-solutions")}
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