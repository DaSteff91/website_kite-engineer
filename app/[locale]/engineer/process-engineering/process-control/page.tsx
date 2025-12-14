import { getTranslations } from "next-intl/server";
import Image from "next/image";
import background_image_darker from "@/public/images/background_image_darker.jpeg";
import { Link } from "@/i18n/navigation";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  SlidersHorizontal,
  BarChart3,
  BaggageClaim,
} from "lucide-react";
import { getPageMetadata } from "@/lib/constants/metadata";
import type { Metadata } from "next";
import { hrefForTemplateWithTranslator } from "@/lib/utils/contact-i18n-helper";
import { Hero } from "@/components/sections/Hero";

export async function generateMetadata({
  params,
}: {
  params: ProcessControlPageProps["params"];
}): Promise<Metadata> {
  const resolvedParams = await params;
  const { locale } = resolvedParams;
  return await getPageMetadata(
    locale,
    "EngineerSubpages.ProcessEngineering.ProcessControl",
    "/engineer/process-engineering/process-control"
  );
}

interface ProcessControlPageProps {
  params: Promise<{ locale: string }>;
}

const richTextHandlers = {
  strong: (chunks: React.ReactNode) => <strong>{chunks}</strong>,
  em: (chunks: React.ReactNode) => <em>{chunks}</em>,
  abbr: (chunks: React.ReactNode) => {
    if (Array.isArray(chunks) && chunks.length > 1) {
      const text = chunks[0];
      const titleElement = chunks[1] as any;
      const title = titleElement?.props?.children || "";
      return <abbr title={title}>{text}</abbr>;
    }
    return <abbr>{chunks}</abbr>;
  },
  "0": (chunks: React.ReactNode) => chunks,
  u: (chunks: React.ReactNode) => <u>{chunks}</u>,
  s: (chunks: React.ReactNode) => <s>{chunks}</s>,
};

export default async function ProcessControlPage({
  params,
}: ProcessControlPageProps) {
  const resolvedParams = await params;
  const { locale } = resolvedParams;
  const t = await getTranslations({
    locale,
    namespace: "ProcessControlPage",
  });
  const contactT = await getTranslations({
    locale,
    namespace: "ContactTemplates",
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
          id="process-control-hero"
          className="pb-1 text-4xl md:text-5xl font-bold mb-6 
           bg-gradient-to-r from-white via-gray-200 to-gray-300 
           bg-clip-text text-transparent 
           [text-shadow:0_0_8px_rgba(209,213,219,0.6)]"
        >
          {t("process-control-hero")}
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
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              {t("back-to-engineer-services-nav")}
            </Link>
          </div>

          <div className="relative mb-16 sm:mb-20">
            <h2
              id="process-control-section-title"
              className="text-xl sm:text-2xl md:text-3xl font-bold text-center max-w-4xl mx-auto leading-relaxed 
   bg-[linear-gradient(to_right,white,rgba(229,231,235,0.8),rgba(209,213,219,1))] 
   bg-clip-text text-transparent animate-gradient"
            >
              {t("process-control-section-title")}
            </h2>
            <p
              id="process-control-section-subtitle"
              className="mt-4 text-lg sm:text-xl text-center text-white/80 max-w-3xl mx-auto leading-relaxed"
            >
              {t("process-control-section-subtitle")}
            </p>
            <div className="absolute -bottom-6 sm:-bottom-8 left-1/2 transform -translate-x-1/2 w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-500 via-teal-500 to-emerald-500 rounded-full"></div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 gap-6 sm:gap-8 max-w-6xl mx-auto mb-16">
            <div className="bg-gradient-to-br from-blue-900/20 via-card/20 to-cyan-900/20 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <SlidersHorizontal className="h-6 w-6 text-blue-400" />
                <h3
                  id="advanced-process-control-title"
                  className="text-xl sm:text-xl md:text-2xl font-semibold text-blue-200"
                >
                  {t("advanced-process-control-title")}
                </h3>
              </div>
              <ul className="text-white/80 space-y-2 text-md list-none pl-0">
                <li
                  id="advanced-process-control-list-element1"
                  className="pl-3 -indent-3"
                >
                  {t("advanced-process-control-list-element1")}
                </li>
                <li
                  id="advanced-process-control-list-element2"
                  className="pl-3 -indent-3"
                >
                  {t("advanced-process-control-list-element2")}
                </li>
                <li
                  id="advanced-process-control-list-element3"
                  className="pl-3 -indent-3"
                >
                  {t("advanced-process-control-list-element3")}
                </li>
                <li
                  id="advanced-process-control-list-element4"
                  className="pl-3 -indent-3"
                >
                  {t("advanced-process-control-list-element4")}
                </li>
                <li
                  id="advanced-process-control-list-element5"
                  className="pl-3 -indent-3"
                >
                  {t("advanced-process-control-list-element5")}
                </li>
                <li
                  id="advanced-process-control-list-element6"
                  className="pl-3 -indent-3"
                >
                  {t("advanced-process-control-list-element6")}
                </li>
                <li
                  id="advanced-process-control-list-element7"
                  className="pl-3 -indent-3"
                >
                  {t("advanced-process-control-list-element7")}
                </li>
                <li
                  id="advanced-process-control-list-element8"
                  className="pl-3 -indent-3"
                >
                  {t("advanced-process-control-list-element8")}
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-cyan-900/25 via-card/25 to-teal-900/25 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <BarChart3 className="h-6 w-6 text-cyan-400" />
                <h3
                  id="statistical-process-control-title"
                  className="text-xl sm:text-xl md:text-2xl font-semibold text-cyan-200"
                >
                  {t("statistical-process-control-title")}
                </h3>
              </div>
              <ul className="text-white/80 space-y-2 text-md list-none pl-0">
                <li
                  id="statistical-process-control-list-element1"
                  className="pl-3 -indent-3"
                >
                  {t("statistical-process-control-list-element1")}
                </li>
                <li
                  id="statistical-process-control-list-element2"
                  className="pl-3 -indent-3"
                >
                  {t("statistical-process-control-list-element2")}
                </li>
                <li
                  id="statistical-process-control-list-element3"
                  className="pl-3 -indent-3"
                >
                  {t("statistical-process-control-list-element3")}
                </li>
                <li
                  id="statistical-process-control-list-element4"
                  className="pl-3 -indent-3"
                >
                  {t("statistical-process-control-list-element4")}
                </li>
                <li
                  id="statistical-process-control-list-element5"
                  className="pl-3 -indent-3"
                >
                  {t("statistical-process-control-list-element5")}
                </li>
                <li
                  id="statistical-process-control-list-element6"
                  className="pl-3 -indent-3"
                >
                  {t("statistical-process-control-list-element6")}
                </li>
                <li
                  id="statistical-process-control-list-element7"
                  className="pl-3 -indent-3"
                >
                  {t("statistical-process-control-list-element7")}
                </li>
                <li
                  id="statistical-process-control-list-element8"
                  className="pl-3 -indent-3"
                >
                  {t("statistical-process-control-list-element8")}
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-teal-900/30 via-card/30 to-emerald-900/30 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <BaggageClaim className="h-6 w-6 text-teal-400" />
                <h3
                  id="custom-solutions-title"
                  className="text-xl sm:text-xl md:text-2xl font-semibold text-teal-200"
                >
                  {t("custom-solutions-title")}
                </h3>
              </div>
              <ul className="text-white/80 space-y-2 text-md list-none pl-0">
                <li
                  id="custom-solutions-list-element1"
                  className="pl-3 -indent-3"
                >
                  {t("custom-solutions-list-element1")}
                </li>
                <li
                  id="custom-solutions-list-element2"
                  className="pl-3 -indent-3"
                >
                  {t("custom-solutions-list-element2")}
                </li>
                <li
                  id="custom-solutions-list-element3"
                  className="pl-3 -indent-3"
                >
                  {t("custom-solutions-list-element3")}
                </li>
                <li
                  id="custom-solutions-list-element4"
                  className="pl-3 -indent-3"
                >
                  {t("custom-solutions-list-element4")}
                </li>
              </ul>
            </div>

            {/* <div className="bg-gradient-to-br from-emerald-900/35 via-card/35 to-blue-900/35 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Target className="h-6 w-6 text-emerald-400" />
                <h3 id="ai-powered-solutions-title" className="text-xl sm:text-xl md:text-2xl font-semibold text-emerald-200">
                  AI-Powered Solutions
                </h3>
              </div>
              <ul className="text-white/80 space-y-2 text-md list-none pl-0">
                <li id="ai-powered-solutions-list-element1" className="pl-3 -indent-3">• AI training for failure detection</li>
                <li id="ai-powered-solutions-list-element2" className="pl-3 -indent-3">• Intelligent alarm systems</li>
                <li id="ai-powered-solutions-list-element3" className="pl-3 -indent-3">• Predictive maintenance models</li>
                <li id="ai-powered-solutions-list-element4" className="pl-3 -indent-3">• Automated anomaly detection</li>
                <li id="ai-powered-solutions-list-element5" className="pl-3 -indent-3">• Smart process optimization</li>
              </ul>
            </div> */}
          </div>

          {/* Contact Section */}
          <div className="text-center">
            <p
              id="process-control-contact"
              className="text-xl text-white/90 mb-8 max-w-6xl mx-auto"
            >
              {t("process-control-contact")}
            </p>
            <Link
              href={hrefForTemplateWithTranslator(
                contactT,
                "/engineer/process-engineering/process-control"
              )}
              target="_blank"
            >
              <Button
                size="lg"
                className="group bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                id="contact-button"
              >
                {t("contact-button")}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
