import { getTranslations } from "next-intl/server";
import Image from "next/image";
import background_image_darker from "@/public/images/background_image_darker.jpeg";
import engineer_hero_image from "@/public/images/engineer_hero_image.jpg";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import {
  ArrowRight,
  ArrowLeft,
  Radiation,
  Cpu,
  Box,
  Users,
} from "lucide-react";

import { PAGE_METADATA } from "@/lib/constants/metadata";
import { generateContactHref } from "@/lib/utils/contact-filler";
import { Hero } from "@/components/sections/Hero";

export const metadata =
  PAGE_METADATA["engineer/process-development/simulation-prototyping"];
interface SimulationPrototypingPageProps {
  params: { locale: string };
}


export default async function SimulationPrototypingPage({ params }: SimulationPrototypingPageProps) {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "SimulationPrototypingPage",
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
          id="simulation-prototyping-hero"
          className="pb-1 text-4xl md:text-5xl font-bold mb-6 
     bg-gradient-to-r from-white via-gray-200 to-gray-300 
     bg-clip-text text-transparent 
     [text-shadow:0_0_8px_rgba(209,213,219,0.6)]"
        >
          {t("simulation-prototyping-hero")}
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
            <h2
              id="simulation-prototyping-section-title"
              className="text-xl sm:text-2xl md:text-3xl font-bold text-center max-w-4xl mx-auto leading-relaxed 
   bg-[linear-gradient(to_right,white,rgba(229,231,235,0.8),rgba(209,213,219,1))] 
   bg-clip-text text-transparent animate-gradient"
            >
              {t("simulation-prototyping-section-title")}
            </h2>
            <p
              id="simulation-prototyping-section-subtitle"
              className="mt-4 text-lg sm:text-xl text-center text-white/80 max-w-3xl mx-auto leading-relaxed"
            >
              {t("simulation-prototyping-section-subtitle")}
            </p>
            <div className="absolute -bottom-6 sm:-bottom-8 left-1/2 transform -translate-x-1/2 w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-500 via-teal-500 to-emerald-500 rounded-full"></div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto mb-16">
            <div className="bg-gradient-to-br from-cyan-900/20 via-card/20 to-teal-900/20 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Radiation className="h-6 w-6 text-cyan-400" />
                <h3
                  id="advanced-simulation-title"
                  className="text-lg font-semibold text-cyan-200"
                >
                  {t("advanced-simulation-title")}
                </h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li id="advanced-simulation-list-element1">
                  {t("advanced-simulation-list-element1")}
                </li>
                <li id="advanced-simulation-list-element2">
                  {t("advanced-simulation-list-element2")}
                </li>
                <li id="advanced-simulation-list-element3">
                  {t("advanced-simulation-list-element3")}
                </li>
                <li id="advanced-simulation-list-element4">
                  {t("advanced-simulation-list-element4")}
                </li>
                <li id="advanced-simulation-list-element5">
                  {t("advanced-simulation-list-element5")}
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-teal-900/25 via-card/25 to-emerald-900/25 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Box className="h-6 w-6 text-teal-400" />
                <h3
                  id="3d-prototyping-title"
                  className="text-lg font-semibold text-teal-200"
                >
                  {t("3d-prototyping-title")}
                </h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li id="3d-prototyping-list-element1">
                  {t("3d-prototyping-list-element1")}
                </li>
                <li id="3d-prototyping-list-element2">
                  {t("3d-prototyping-list-element2")}
                </li>
                <li id="3d-prototyping-list-element3">
                  {t("3d-prototyping-list-element3")}
                </li>
                <li id="3d-prototyping-list-element4">
                  {t("3d-prototyping-list-element4")}
                </li>
                <li id="3d-prototyping-list-element5">
                  {t("3d-prototyping-list-element5")}
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-emerald-900/30 via-card/30 to-blue-900/30 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Cpu className="h-6 w-6 text-emerald-400" />
                <h3
                  id="analogy-models-title"
                  className="text-lg font-semibold text-emerald-200"
                >
                  {t("analogy-models-title")}
                </h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li id="analogy-models-list-element1">
                  {t("analogy-models-list-element1")}
                </li>
                <li id="analogy-models-list-element2">
                  {t("analogy-models-list-element2")}
                </li>
                <li id="analogy-models-list-element3">
                  {t("analogy-models-list-element3")}
                </li>
                <li id="analogy-models-list-element4">
                  {t("analogy-models-list-element4")}
                </li>
                <li id="analogy-models-list-element5">
                  {t("analogy-models-list-element5")}
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-900/35 via-card/35 to-cyan-900/35 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Users className="h-6 w-6 text-blue-400" />
                <h3
                  id="expert-network-title"
                  className="text-lg font-semibold text-blue-200"
                >
                  {t("expert-network-title")}
                </h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li id="expert-network-list-element1">
                  {t("expert-network-list-element1")}
                </li>
                <li id="expert-network-list-element2">
                  {t("expert-network-list-element2")}
                </li>
                <li id="expert-network-list-element3">
                  {t("expert-network-list-element3")}
                </li>
                <li id="expert-network-list-element4">
                  {t("expert-network-list-element4")}
                </li>
                <li id="expert-network-list-element5">
                  {t("expert-network-list-element5")}
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center">
            <p
              id="simulation-prototyping-contact"
              className="text-xl text-white/90 mb-8 max-w-6xl mx-auto"
            >
              {t("simulation-prototyping-contact")}
            </p>
            <Link
              href={generateContactHref(
                "/engineer/process-development/simulation-prototyping"
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
