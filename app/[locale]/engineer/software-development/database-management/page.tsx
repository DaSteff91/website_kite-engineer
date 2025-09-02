import Image from "next/image";
import background_image_darker from "@/public/images/background_image_darker.jpeg";
import engineer_hero_image from "@/public/images/engineer_hero_image.jpg";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ArrowLeft,
  Database,
  FileSpreadsheet,
  Shield,
  BarChart3,
} from "lucide-react";
import { PAGE_METADATA } from "@/lib/constants/metadata";
import { generateContactHref } from "@/lib/utils/contact-filler";
import { Hero } from "@/components/sections/Hero";

export const metadata =
  PAGE_METADATA["engineer/software-development/database-management"];

export default function DatabaseManagementPage() {
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
          Database Management Services
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
              From Excel to Professional RDBMS
            </h2>
            <p className="mt-4 text-lg sm:text-xl text-center text-white/80 max-w-3xl mx-auto leading-relaxed">
              Sustainable data management solutions with advanced reporting and
              analytics
            </p>
            <div className="absolute -bottom-6 sm:-bottom-8 left-1/2 transform -translate-x-1/2 w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-500 via-teal-500 to-emerald-500 rounded-full"></div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto mb-16">
            <div className="bg-gradient-to-br from-teal-900/20 via-card/20 to-emerald-900/20 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Database className="h-6 w-6 text-teal-400" />
                <h3 id="rdbms-design-implementation-title" className="text-lg font-semibold text-teal-200">
                  RDBMS Design & Implementation
                </h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li id="rdbms-design-implementation-list-element1">• Database architecture design</li>
                <li id="rdbms-design-implementation-list-element1">• Schema optimization</li>
                <li id="rdbms-design-implementation-list-element1">• Relational model implementation</li>
                <li id="rdbms-design-implementation-list-element1">• Performance tuning</li>
                <li id="rdbms-design-implementation-list-element1">• Scalability planning</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-emerald-900/25 via-card/25 to-blue-900/25 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <FileSpreadsheet className="h-6 w-6 text-emerald-400" />
                <h3 id="data-migration-title" className="text-lg font-semibold text-emerald-200">
                  Data Migration
                </h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li id="rdbms-design-implementation-list-element1">• Excel to database migration</li>
                <li id="rdbms-design-implementation-list-element1">• File-based data conversion</li>
                <li id="rdbms-design-implementation-list-element1">• Data cleaning and validation</li>
                <li id="rdbms-design-implementation-list-element1">• Legacy system migration</li>
                <li id="rdbms-design-implementation-list-element1">• Data integrity verification</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-900/30 via-card/30 to-cyan-900/30 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="h-6 w-6 text-blue-400" />
                <h3 id="backup-recovery-title" className="text-lg font-semibold text-blue-200">
                  Backup & Recovery
                </h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li id="rdbms-design-implementation-list-element1">• Automated backup solutions</li>
                <li id="rdbms-design-implementation-list-element1">• Disaster recovery planning</li>
                <li id="rdbms-design-implementation-list-element1">• Point-in-time recovery</li>
                <li id="rdbms-design-implementation-list-element1">• Data redundancy strategies</li>
                <li id="rdbms-design-implementation-list-element1">• Recovery testing procedures</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-cyan-900/35 via-card/35 to-teal-900/35 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <BarChart3 className="h-6 w-6 text-cyan-400" />
                <h3 id="analytics-reporting-title" className="text-lg font-semibold text-cyan-200">
                  Analytics & Reporting
                </h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li id="rdbms-design-implementation-list-element1">• Advanced reporting capabilities</li>
                <li id="rdbms-design-implementation-list-element1">• Data analytics and insights</li>
                <li id="rdbms-design-implementation-list-element1">• Dashboard development</li>
                <li id="rdbms-design-implementation-list-element1">• Business intelligence tools</li>
                <li id="rdbms-design-implementation-list-element1">• Custom query optimization</li>
              </ul>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center">
            <p className="text-xl text-white/90 mb-8 max-w-6xl mx-auto">
              Ready to upgrade your data management? Let's migrate from files to
              a robust database system.
            </p>
            <Link
              href={generateContactHref("/engineer/software-development/database-management")}
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