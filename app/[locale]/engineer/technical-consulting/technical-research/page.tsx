import { getTranslations } from "next-intl/server";
import Image from "next/image";
import background_image_darker from "@/public/images/background_image_darker.jpeg";
import engineer_hero_image from "@/public/images/engineer_hero_image.jpg";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import {
  ArrowRight,
  ArrowLeft,
  Microscope,
  BookOpen,
  FileText,
  Search,
} from "lucide-react";
import { PAGE_METADATA } from "@/lib/constants/metadata";
import { generateContactHref } from "@/lib/utils/contact-filler";
import { Hero } from "@/components/sections/Hero";

export const metadata =
  PAGE_METADATA["engineer/technical-consulting/technical-research"];
interface TechnicalResearchPageProps {
  params: { locale: string };
}

export default async function TechnicalResearchPage({
  params,
}: TechnicalResearchPageProps) {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "TechnicalResearchPage",
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
          id="technical-research-hero"
          className="pb-1 text-4xl md:text-5xl font-bold mb-6 
     bg-gradient-to-r from-white via-gray-200 to-gray-300 
     bg-clip-text text-transparent 
     [text-shadow:0_0_8px_rgba(209,213,219,0.6)]"
        >
          {t("technical-research-hero")}
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
              id="technical-research-section-title"
              className="text-xl sm:text-2xl md:text-3xl font-bold text-center max-w-4xl mx-auto leading-relaxed 
   bg-[linear-gradient(to_right,white,rgba(229,231,235,0.8),rgba(209,213,219,1))] 
   bg-clip-text text-transparent animate-gradient"
            >
              {t("technical-research-section-title")}
            </h2>
            <p
              id="technical-research-section-subtitle"
              className="mt-4 text-lg sm:text-xl text-center text-white/80 max-w-3xl mx-auto leading-relaxed"
            >
              {t("technical-research-section-subtitle")}
            </p>
            <div className="absolute -bottom-6 sm:-bottom-8 left-1/2 transform -translate-x-1/2 w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-500 via-teal-500 to-emerald-500 rounded-full"></div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto mb-16">
            <div className="bg-gradient-to-br from-blue-900/20 via-card/20 to-cyan-900/20 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Microscope className="h-6 w-6 text-blue-400" />
                <h3
                  id="technology-landscape-analysis-title"
                  className="text-lg font-semibold text-blue-200"
                >
                  {t("technology-landscape-analysis-title")}
                </h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li id="technology-landscape-analysis-list-element1">
                  {t("technology-landscape-analysis-list-element1")}
                </li>
                <li id="technology-landscape-analysis-list-element2">
                  {t("technology-landscape-analysis-list-element2")}
                </li>
                <li id="technology-landscape-analysis-list-element3">
                  {t("technology-landscape-analysis-list-element3")}
                </li>
                <li id="technology-landscape-analysis-list-element4">
                  {t("technology-landscape-analysis-list-element4")}
                </li>
                <li id="technology-landscape-analysis-list-element5">
                  {t("technology-landscape-analysis-list-element5")}
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-cyan-900/25 via-card/25 to-teal-900/25 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="h-6 w-6 text-cyan-400" />
                <h3
                  id="literature-review-title"
                  className="text-lg font-semibold text-cyan-200"
                >
                  {t("literature-review-title")}
                </h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li id="literature-review-list-element1">
                  {t("literature-review-list-element1")}
                </li>
                <li id="literature-review-list-element2">
                  {t("literature-review-list-element2")}
                </li>
                <li id="literature-review-list-element3">
                  {t("literature-review-list-element3")}
                </li>
                <li id="literature-review-list-element4">
                  {t("literature-review-list-element4")}
                </li>
                <li id="literature-review-list-element5">
                  {t("literature-review-list-element5")}
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-teal-900/30 via-card/30 to-emerald-900/30 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Search className="h-6 w-6 text-teal-400" />
                <h3
                  id="patent-ip-research-title"
                  className="text-lg font-semibold text-teal-200"
                >
                  {t("patent-ip-research-title")}
                </h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li id="patent-ip-research-list-element1">
                  {t("patent-ip-research-list-element1")}
                </li>
                <li id="patent-ip-research-list-element2">
                  {t("patent-ip-research-list-element2")}
                </li>
                <li id="patent-ip-research-list-element3">
                  {t("patent-ip-research-list-element3")}
                </li>
                <li id="patent-ip-research-list-element4">
                  {t("patent-ip-research-list-element4")}
                </li>
                <li id="patent-ip-research-list-element5">
                  {t("patent-ip-research-list-element5")}
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-emerald-900/35 via-card/35 to-blue-900/35 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="h-6 w-6 text-emerald-400" />
                <h3
                  id="technical-feasibility-title"
                  className="text-lg font-semibold text-emerald-200"
                >
                  {t("technical-feasibility-title")}
                </h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li id="technical-feasibility-list-element1">
                  {t("technical-feasibility-list-element1")}
                </li>
                <li id="technical-feasibility-list-element2">
                  {t("technical-feasibility-list-element2")}
                </li>
                <li id="technical-feasibility-list-element3">
                  {t("technical-feasibility-list-element3")}
                </li>
                <li id="technical-feasibility-list-element4">
                  {t("technical-feasibility-list-element4")}
                </li>
                <li id="technical-feasibility-list-element5">
                  {t("technical-feasibility-list-element5")}
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center">
            <p
              id="technical-research-contact"
              className="text-xl text-white/90 mb-8 max-w-6xl mx-auto"
            >
              {t("technical-research-contact")}
            </p>
            <Link
              href={generateContactHref(
                "/engineer/technical-consulting/technical-research"
              )}
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
