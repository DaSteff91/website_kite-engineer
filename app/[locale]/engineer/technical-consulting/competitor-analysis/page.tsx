import { getTranslations } from "next-intl/server";
import Image from "next/image";
import background_image_darker from "@/public/images/background_image_darker.jpeg";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import {
  ArrowRight,
  ArrowLeft,
  UserRoundCheck,
  Search,
  BarChart3,
  Target,
} from "lucide-react";
import { PAGE_METADATA } from "@/lib/constants/metadata";
import { hrefForTemplateWithTranslator } from "@/lib/utils/contact-i18n-helper";
import { Hero } from "@/components/sections/Hero";

export const metadata =
  PAGE_METADATA["engineer/technical-consulting/competitor-analysis"];
interface CompetitorAnalysisPageProps {
  params: Promise<{ locale: string }>;
}

export default async function CompetitorAnalysisPage({
  params,
}: CompetitorAnalysisPageProps) {
  const resolvedParams = await params;
  const { locale } = resolvedParams;
  const t = await getTranslations({
    locale,
    namespace: "CompetitorAnalysisPage",
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
          id="competitor-analysis-hero"
          className="pb-1 text-4xl md:text-5xl font-bold mb-6 
     bg-gradient-to-r from-white via-gray-200 to-gray-300 
     bg-clip-text text-transparent 
     [text-shadow:0_0_8px_rgba(209,213,219,0.6)]"
        >
          {t("competitor-analysis-hero")}
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
              id="competitor-analysis-section-title"
              className="text-xl sm:text-2xl md:text-3xl font-bold text-center max-w-4xl mx-auto leading-relaxed 
   bg-[linear-gradient(to_right,white,rgba(229,231,235,0.8),rgba(209,213,219,1))] 
   bg-clip-text text-transparent animate-gradient"
            >
              {t("competitor-analysis-section-title")}
            </h2>
            <p
              id="competitor-analysis-section-subtitle"
              className="mt-4 text-lg sm:text-xl text-center text-white/80 max-w-3xl mx-auto leading-relaxed"
            >
              {t("competitor-analysis-section-subtitle")}
            </p>
            <div className="absolute -bottom-6 sm:-bottom-8 left-1/2 transform -translate-x-1/2 w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-500 via-teal-500 to-emerald-500 rounded-full"></div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto mb-16">
            <div className="bg-gradient-to-br from-blue-900/20 via-card/20 to-cyan-900/20 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <UserRoundCheck className="h-6 w-6 text-blue-400" />
                <h3
                  id="competitor-technology-analysis-title"
                  className="text-xl sm:text-xl md:text-2xl font-semibold text-blue-200"
                >
                  {t("competitor-technology-analysis-title")}
                </h3>
              </div>
              <ul className="text-white/80 space-y-2 text-md list-none pl-0">
                <li
                  id="competitor-technology-analysis-list-element1"
                  className="pl-3 -indent-3"
                >
                  {t("competitor-technology-analysis-list-element1")}
                </li>
                <li
                  id="competitor-technology-analysis-list-element2"
                  className="pl-3 -indent-3"
                >
                  {t("competitor-technology-analysis-list-element2")}
                </li>
                <li
                  id="competitor-technology-analysis-list-element3"
                  className="pl-3 -indent-3"
                >
                  {t("competitor-technology-analysis-list-element3")}
                </li>
                <li
                  id="competitor-technology-analysis-list-element4"
                  className="pl-3 -indent-3"
                >
                  {t("competitor-technology-analysis-list-element4")}
                </li>
                <li
                  id="competitor-technology-analysis-list-element5"
                  className="pl-3 -indent-3"
                >
                  {t("competitor-technology-analysis-list-element5")}
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-cyan-900/25 via-card/25 to-teal-900/25 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <BarChart3 className="h-6 w-6 text-cyan-400" />
                <h3
                  id="market-positioning-title"
                  className="text-xl sm:text-xl md:text-2xl font-semibold text-cyan-200"
                >
                  {t("market-positioning-title")}
                </h3>
              </div>
              <ul className="text-white/80 space-y-2 text-md list-none pl-0">
                <li
                  id="market-positioning-list-element1"
                  className="pl-3 -indent-3"
                >
                  {t("market-positioning-list-element1")}
                </li>
                <li
                  id="market-positioning-list-element2"
                  className="pl-3 -indent-3"
                >
                  {t("market-positioning-list-element2")}
                </li>
                <li
                  id="market-positioning-list-element3"
                  className="pl-3 -indent-3"
                >
                  {t("market-positioning-list-element3")}
                </li>
                <li
                  id="market-positioning-list-element4"
                  className="pl-3 -indent-3"
                >
                  {t("market-positioning-list-element4")}
                </li>
                <li
                  id="market-positioning-list-element5"
                  className="pl-3 -indent-3"
                >
                  {t("market-positioning-list-element5")}
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-teal-900/30 via-card/30 to-emerald-900/30 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Search className="h-6 w-6 text-teal-400" />
                <h3
                  id="strategic-intelligence-title"
                  className="text-xl sm:text-xl md:text-2xl font-semibold text-teal-200"
                >
                  {t("strategic-intelligence-title")}
                </h3>
              </div>
              <ul className="text-white/80 space-y-2 text-md list-none pl-0">
                <li
                  id="strategic-intelligence-list-element1"
                  className="pl-3 -indent-3"
                >
                  {t("strategic-intelligence-list-element1")}
                </li>
                <li
                  id="strategic-intelligence-list-element2"
                  className="pl-3 -indent-3"
                >
                  {t("strategic-intelligence-list-element2")}
                </li>
                <li
                  id="strategic-intelligence-list-element3"
                  className="pl-3 -indent-3"
                >
                  {t("strategic-intelligence-list-element3")}
                </li>
                <li
                  id="strategic-intelligence-list-element4"
                  className="pl-3 -indent-3"
                >
                  {t("strategic-intelligence-list-element4")}
                </li>
                <li
                  id="strategic-intelligence-list-element5"
                  className="pl-3 -indent-3"
                >
                  {t("strategic-intelligence-list-element5")}
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-emerald-900/35 via-card/35 to-blue-900/35 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Target className="h-6 w-6 text-emerald-400" />
                <h3
                  id="competitive-advantage-title"
                  className="text-xl sm:text-xl md:text-2xl font-semibold text-emerald-200"
                >
                  {t("competitive-advantage-title")}
                </h3>
              </div>
              <ul className="text-white/80 space-y-2 text-md list-none pl-0">
                <li
                  id="competitive-advantage-list-element1"
                  className="pl-3 -indent-3"
                >
                  {t("competitive-advantage-list-element1")}
                </li>
                <li
                  id="competitive-advantage-list-element2"
                  className="pl-3 -indent-3"
                >
                  {t("competitive-advantage-list-element2")}
                </li>
                <li
                  id="competitive-advantage-list-element3"
                  className="pl-3 -indent-3"
                >
                  {t("competitive-advantage-list-element3")}
                </li>
                <li
                  id="competitive-advantage-list-element4"
                  className="pl-3 -indent-3"
                >
                  {t("competitive-advantage-list-element4")}
                </li>
                <li
                  id="competitive-advantage-list-element5"
                  className="pl-3 -indent-3"
                >
                  {t("competitive-advantage-list-element5")}
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center">
            <p
              id="competitor-analysis-contact"
              className="text-xl text-white/90 mb-8 max-w-6xl mx-auto"
            >
              {t("competitor-analysis-contact")}
            </p>
            <Link
              href={hrefForTemplateWithTranslator(contactT, "/engineer/technical-consulting/competitor-analysis")}
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
