import { getTranslations } from "next-intl/server";
import Image from "next/image";
import background_image_darker from "@/public/images/background_image_darker.jpeg";
import engineer_hero_image from "@/public/images/engineer_hero_image.jpg";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import {
  ArrowRight,
  ArrowLeft,
  Share2,
  GitBranch,
  Users,
  FileText,
} from "lucide-react";

import { PAGE_METADATA } from "@/lib/constants/metadata";
import { generateContactHref } from "@/lib/utils/contact-filler";
import { Hero } from "@/components/sections/Hero";

export const metadata =
  PAGE_METADATA["engineer/project-management/documentation"];
interface DocumentationPageProps {
  params: { locale: string };
}

export default async function DocumentationPage({
  params,
}: DocumentationPageProps) {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "DocumentationPage",
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
          id="documentation-hero"
          className="pb-1 text-4xl md:text-5xl font-bold mb-6 
           bg-gradient-to-r from-white via-gray-200 to-gray-300 
           bg-clip-text text-transparent 
           [text-shadow:0_0_8px_rgba(209,213,219,0.6)]"
        >
          {t("documentation-hero")}
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
              className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              {t("back-to-engineer-services-nav")}
            </Link>
          </div>

          <div className="relative mb-16 sm:mb-20">
            <h2
              id="documentation-section-title"
              className="text-xl sm:text-2xl md:text-3xl font-bold text-center max-w-4xl mx-auto leading-relaxed 
   bg-[linear-gradient(to_right,white,rgba(229,231,235,0.8),rgba(209,213,219,1))] 
   bg-clip-text text-transparent animate-gradient"
            >
              {t("documentation-section-title")}
            </h2>
            <p
              id="documentation-section-subtitle"
              className="mt-4 text-lg sm:text-xl text-center text-white/80 max-w-3xl mx-auto leading-relaxed"
            >
              {t("documentation-section-subtitle")}
            </p>
            <div className="absolute -bottom-6 sm:-bottom-8 left-1/2 transform -translate-x-1/2 w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-500 via-teal-500 to-emerald-500 rounded-full"></div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto mb-16">
            <div className="bg-gradient-to-br from-teal-900/20 via-card/20 to-emerald-900/20 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <GitBranch className="h-6 w-6 text-teal-400" />
                <h3
                  id="version-control-title"
                  className="text-lg font-semibold text-teal-200"
                >
                  {t("version-control-title")}
                </h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li id="version-control-list-element1">
                  {t("version-control-list-element1")}
                </li>
                <li id="version-control-list-element2">
                  {t("version-control-list-element2")}
                </li>
                <li id="version-control-list-element3">
                  {t("version-control-list-element3")}
                </li>
                <li id="version-control-list-element4">
                  {t("version-control-list-element4")}
                </li>
                <li id="version-control-list-element5">
                  {t("version-control-list-element5")}
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-emerald-900/25 via-card/25 to-blue-900/25 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Share2 className="h-6 w-6 text-emerald-400" />
                <h3
                  id="collaborative-workspace-title"
                  className="text-lg font-semibold text-emerald-200"
                >
                  {t("collaborative-workspace-title")}
                </h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li id="collaborative-workspace-list-element1">
                  {t("collaborative-workspace-list-element1")}
                </li>
                <li id="collaborative-workspace-list-element2">
                  {t("collaborative-workspace-list-element2")}
                </li>
                <li id="collaborative-workspace-list-element3">
                  {t("collaborative-workspace-list-element3")}
                </li>
                <li id="collaborative-workspace-list-element4">
                  {t("collaborative-workspace-list-element4")}
                </li>
                <li id="collaborative-workspace-list-element5">
                  {t("collaborative-workspace-list-element5")}
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-900/30 via-card/30 to-cyan-900/30 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="h-6 w-6 text-blue-400" />
                <h3
                  id="knowledge-management-title"
                  className="text-lg font-semibold text-blue-200"
                >
                  {t("knowledge-management-title")}
                </h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li id="knowledge-management-list-element1">
                  {t("knowledge-management-list-element1")}
                </li>
                <li id="knowledge-management-list-element2">
                  {t("knowledge-management-list-element2")}
                </li>
                <li id="knowledge-management-list-element3">
                  {t("knowledge-management-list-element3")}
                </li>
                <li id="knowledge-management-list-element4">
                  {t("knowledge-management-list-element4")}
                </li>
                <li id="knowledge-management-list-element5">
                  {t("knowledge-management-list-element5")}
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-cyan-900/35 via-card/35 to-teal-900/35 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Users className="h-6 w-6 text-cyan-400" />
                <h3
                  id="team-synergy-title"
                  className="text-lg font-semibold text-cyan-200"
                >
                  {t("team-synergy-title")}
                </h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li id="team-synergy-list-element1">
                  {t("team-synergy-list-element1")}
                </li>
                <li id="team-synergy-list-element2">
                  {t("team-synergy-list-element2")}
                </li>
                <li id="team-synergy-list-element3">
                  {t("team-synergy-list-element3")}
                </li>
                <li id="team-synergy-list-element4">
                  {t("team-synergy-list-element4")}
                </li>
                <li id="team-synergy-list-element5">
                  {t("team-synergy-list-element5")}
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center">
            <p
              id="documentation-contact"
              className="text-xl text-white/90 mb-8 max-w-6xl mx-auto"
            >
              {t("documentation-contact")}
            </p>
            <Link
              href={generateContactHref(
                "/engineer/project-management/documentation"
              )}
              target="_blank"
            >
              <Button
                size="lg"
                className="group bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
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
