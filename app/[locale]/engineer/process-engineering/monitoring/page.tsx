import Image from "next/image";
import background_image_darker from "@/public/images/background_image_darker.jpeg";
import engineer_hero_image from "@/public/images/engineer_hero_image.jpg";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ArrowLeft,
  Target,
  TrendingUp,
  Bell,
  BarChart3,
} from "lucide-react";

import { PAGE_METADATA } from "@/lib/constants/metadata";
import { generateContactHref } from "@/lib/utils/contact-filler";
import { Hero } from "@/components/sections/Hero";

export const metadata =
  PAGE_METADATA["engineer/process-engineering/monitoring"];

export default function MonitoringPage() {
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
          id="monitoring-hero"
          className="pb-1 text-4xl md:text-5xl font-bold mb-6 
           bg-gradient-to-r from-white via-gray-200 to-gray-300 
           bg-clip-text text-transparent 
           [text-shadow:0_0_8px_rgba(209,213,219,0.6)]"
        >
          Process Monitoring Services
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
            <h2 id="monitoring-section-title"
              className="text-xl sm:text-2xl md:text-3xl font-bold text-center max-w-4xl mx-auto leading-relaxed 
   bg-[linear-gradient(to_right,white,rgba(229,231,235,0.8),rgba(209,213,219,1))] 
   bg-clip-text text-transparent animate-gradient"
            >
              Comprehensive Process Monitoring
            </h2>
            <p id="monitoring-section-subtitle" className="mt-4 text-lg sm:text-xl text-center text-white/80 max-w-3xl mx-auto leading-relaxed">
              Define monitoring parameters and implement solutions for any
              production volume
            </p>
            <div className="absolute -bottom-6 sm:-bottom-8 left-1/2 transform -translate-x-1/2 w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-500 via-teal-500 to-emerald-500 rounded-full"></div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto mb-16">
            <div className="bg-gradient-to-br from-blue-900/20 via-card/20 to-cyan-900/20 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Target className="h-6 w-6 text-blue-400" />
                <h3
                  id="parameter-selection-title"
                  className="text-lg font-semibold text-blue-200"
                >
                  Parameter Selection
                </h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li id="parameter-selection-list-element1">
                  • Critical parameter identification
                </li>
                <li id="parameter-selection-list-element2">
                  • Monitoring strategy development
                </li>
                <li id="parameter-selection-list-element3">
                  • Sensor placement optimization
                </li>
                <li id="parameter-selection-list-element4">
                  • Data collection frequency
                </li>
                <li id="parameter-selection-list-element5">
                  • Measurement system analysis
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-cyan-900/25 via-card/25 to-teal-900/25 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Bell className="h-6 w-6 text-cyan-400" />
                <h3
                  id="alarm-notification-systems-title"
                  className="text-lg font-semibold text-cyan-200"
                >
                  Alarm & Notification Systems
                </h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li id="alarm-notification-systems-list-element1">
                  • Real-time alarm configuration
                </li>
                <li id="alarm-notification-systems-list-element2">
                  • Multi-level notification systems
                </li>
                <li id="alarm-notification-systems-list-element3">
                  • Escalation procedures
                </li>
                <li id="alarm-notification-systems-list-element4">
                  • Mobile alert integration
                </li>
                <li id="alarm-notification-systems-list-element5">
                  • Alarm rationalization
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-teal-900/30 via-card/30 to-emerald-900/30 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="h-6 w-6 text-teal-400" />
                <h3
                  id="trend-analysis-title"
                  className="text-lg font-semibold text-teal-200"
                >
                  Trend Analysis
                </h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li id="trend-analysis-list-element1">
                  • Historical data analysis
                </li>
                <li id="trend-analysis-list-element2">
                  • Trend identification and reporting
                </li>
                <li id="trend-analysis-list-element3">
                  • Predictive trend modeling
                </li>
                <li id="trend-analysis-list-element4">
                  • Performance drift detection
                </li>
                <li id="trend-analysis-list-element5">
                  • Long-term stability assessment
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-emerald-900/35 via-card/35 to-blue-900/35 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <BarChart3 className="h-6 w-6 text-emerald-400" />
                <h3
                  id="performance-benchmarking-title"
                  className="text-lg font-semibold text-emerald-200"
                >
                  Performance Benchmarking
                </h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li id="performance-benchmarking-list-element1">
                  • Baseline establishment
                </li>
                <li id="performance-benchmarking-list-element2">
                  • Performance metrics definition
                </li>
                <li id="performance-benchmarking-list-element3">
                  • Comparative analysis
                </li>
                <li id="performance-benchmarking-list-element4">
                  • Industry benchmarking
                </li>
                <li id="performance-benchmarking-list-element5">
                  • Continuous improvement tracking
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center">
            <p
              id="monitoring-contact"
              className="text-xl text-white/90 mb-8 max-w-6xl mx-auto"
            >
              Ready to implement comprehensive monitoring? Let's define the
              right parameters and methods for your production needs.
            </p>
            <Link
              href={generateContactHref(
                "/engineer/process-engineering/monitoring"
              )}
              target="_blank"
            >
              <Button
                size="lg"
                className="group bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                id="contact-button"
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
