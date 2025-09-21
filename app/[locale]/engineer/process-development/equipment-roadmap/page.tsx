import { getTranslations } from "next-intl/server";
import Image from "next/image";
import background_image_darker from "@/public/images/background_image_darker.jpeg";
import engineer_hero_image from "@/public/images/engineer_hero_image.jpg";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import {
  ArrowRight,
  ArrowLeft,
  MapIcon,
  TrendingUp,
  Shield,
  Target,
} from "lucide-react";

import { PAGE_METADATA } from "@/lib/constants/metadata";
import { generateContactHref } from "@/lib/utils/contact-filler";
import { Hero } from "@/components/sections/Hero";

export const metadata =
  PAGE_METADATA["engineer/process-development/equipment-roadmap"];
interface EquipmentRoadmapPageProps {
  params: Promise<{ locale: string }>;
}

export default async function EquipmentRoadmapPage({
  params,
}: EquipmentRoadmapPageProps) {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "EquipmentRoadmapPage",
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
          id="equipment-roadmap-hero"
          className="pb-1 text-4xl md:text-5xl font-bold mb-6 
     bg-gradient-to-r from-white via-gray-200 to-gray-300 
     bg-clip-text text-transparent 
     [text-shadow:0_0_8px_rgba(209,213,219,0.6)]"
        >
          {t("equipment-roadmap-hero")}
        </h1>
      </Hero>
      {/* Content Section */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          {/* Back Navigation */}
          <div className="mb-8">
            <Link
              href="/engineer"
              id="back-to-engineer-services-nav"
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              {t("back-to-engineer-services-nav")}
            </Link>
          </div>

          <div className="relative mb-16 sm:mb-20">
            <h2
              id="equipment-roadmap-section-title"
              className="text-xl sm:text-2xl md:text-3xl font-bold text-center max-w-4xl mx-auto leading-relaxed 
   bg-[linear-gradient(to_right,white,rgba(229,231,235,0.8),rgba(209,213,219,1))] 
   bg-clip-text text-transparent animate-gradient"
            >
              {t("equipment-roadmap-section-title")}
            </h2>
            <p
              id="equipment-roadmap-section-subtitle"
              className="mt-4 text-lg sm:text-xl text-center text-white/80 max-w-3xl mx-auto leading-relaxed"
            >
              {t("equipment-roadmap-section-subtitle")}
            </p>
            <div className="absolute -bottom-6 sm:-bottom-8 left-1/2 transform -translate-x-1/2 w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-500 via-teal-500 to-emerald-500 rounded-full"></div>
          </div>

          {/* Services Grid new*/}
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-6 sm:gap-8 max-w-6xl mx-auto">
              <div className="bg-gradient-to-br from-blue-900/20 via-card/20 to-cyan-900/20 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300 w-full">
                <h3
                  id="details-of-the-roadmap-services-title"
                  className="text-xl sm:text-2xl font-bold mb-4 pb-3 border-b border-white/20 flex items-center gap-3 text-blue-200"
                >
                  {t("details-of-the-roadmap-services-title")}
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
                  <li id="details-of-the-roadmap-services-list-element1">
                    {t("details-of-the-roadmap-services-list-element1")}
                  </li>
                  <li id="details-of-the-roadmap-services-list-element2">
                    {t("details-of-the-roadmap-services-list-element2")}
                  </li>
                  <li id="details-of-the-roadmap-services-list-element3">
                    {t("details-of-the-roadmap-services-list-element3")}
                  </li>
                  <li id="details-of-the-roadmap-services-list-element4">
                    {t("details-of-the-roadmap-services-list-element4")}
                  </li>

                  <li id="details-of-the-roadmap-services-list-element5">
                    {t("details-of-the-roadmap-services-list-element5")}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Services Grid old*/}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto mb-16">
            <div className="bg-gradient-to-br from-cyan-900/20 via-card/20 to-teal-900/20 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <MapIcon className="h-6 w-6 text-cyan-400" />
                <h3
                  id="technology-assessment-title"
                  className="text-lg font-semibold text-cyan-200"
                >
                  {t("technology-assessment-title")}
                </h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li id="technology-assessment-list-element1">
                  {t("technology-assessment-list-element1")}
                </li>
                <li id="technology-assessment-list-element2">
                  {t("technology-assessment-list-element2")}
                </li>
                <li id="technology-assessment-list-element3">
                  {t("technology-assessment-list-element3")}
                </li>
                <li id="technology-assessment-list-element4">
                  {t("technology-assessment-list-element4")}
                </li>
                <li id="technology-assessment-list-element5">
                  {t("technology-assessment-list-element5")}
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-teal-900/25 via-card/25 to-emerald-900/25 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="h-6 w-6 text-teal-400" />
                <h3
                  id="equipment-evolution-planning-title"
                  className="text-lg font-semibold text-teal-200"
                >
                  {t("equipment-evolution-planning-title")}
                </h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li id="equipment-evolution-planning-list-element1">
                  {t("equipment-evolution-planning-list-element1")}
                </li>
                <li id="equipment-evolution-planning-list-element2">
                  {t("equipment-evolution-planning-list-element2")}
                </li>
                <li id="equipment-evolution-planning-list-element3">
                  {t("equipment-evolution-planning-list-element3")}
                </li>
                <li id="equipment-evolution-planning-list-element4">
                  {t("equipment-evolution-planning-list-element4")}
                </li>
                <li id="equipment-evolution-planning-list-element5">
                  {t("equipment-evolution-planning-list-element5")}
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-emerald-900/30 via-card/30 to-blue-900/30 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="h-6 w-6 text-emerald-400" />
                <h3
                  id="risk-mitigation-title"
                  className="text-lg font-semibold text-emerald-200"
                >
                  {t("risk-mitigation-title")}
                </h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li id="risk-mitigation-list-element1">
                  {t("risk-mitigation-list-element1")}
                </li>
                <li id="risk-mitigation-list-element2">
                  {t("risk-mitigation-list-element2")}
                </li>
                <li id="risk-mitigation-list-element3">
                  {t("risk-mitigation-list-element3")}
                </li>
                <li id="risk-mitigation-list-element4">
                  {t("risk-mitigation-list-element4")}
                </li>
                <li id="risk-mitigation-list-element5">
                  {t("risk-mitigation-list-element5")}
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-900/35 via-card/35 to-cyan-900/35 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Target className="h-6 w-6 text-blue-400" />
                <h3
                  id="investment-prioritization-title"
                  className="text-lg font-semibold text-blue-200"
                >
                  {t("investment-prioritization-title")}
                </h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li id="investment-prioritization-list-element1">
                  {t("investment-prioritization-list-element1")}
                </li>
                <li id="investment-prioritization-list-element2">
                  {t("investment-prioritization-list-element2")}
                </li>
                <li id="investment-prioritization-list-element3">
                  {t("investment-prioritization-list-element3")}
                </li>
                <li id="investment-prioritization-list-element4">
                  {t("investment-prioritization-list-element4")}
                </li>
                <li id="investment-prioritization-list-element5">
                  {t("investment-prioritization-list-element5")}
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center">
            <p
              id="equipment-roadmap-contact"
              className="text-xl text-white/90 mb-8 max-w-6xl mx-auto"
            >
              {t("equipment-roadmap-contact")}
            </p>
            <Link
              href={generateContactHref(
                "/engineer/process-development/equipment-roadmap"
              )}
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
