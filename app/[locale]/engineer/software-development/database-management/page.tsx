import { getTranslations } from "next-intl/server";
import Image from "next/image";
import background_image_darker from "@/public/images/background_image_darker.jpeg";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
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
interface DatabaseManagementPageProps {
  params: Promise<{ locale: string }>;
}

export default async function DatabaseManagementPage({
  params,
}: DatabaseManagementPageProps) {
  const resolvedParams = await params;
  const { locale } = resolvedParams;
  const t = await getTranslations({
    locale,
    namespace: "DatabaseManagementPage",
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
          id="database-management-hero"
          className="pb-1 text-4xl md:text-5xl font-bold mb-6 
     bg-gradient-to-r from-white via-gray-200 to-gray-300 
     bg-clip-text text-transparent 
     [text-shadow:0_0_8px_rgba(209,213,219,0.6)]"
        >
          {t("database-management-hero")}
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
              className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              {t("back-to-engineer-services-nav")}
            </Link>
          </div>

          <div className="relative mb-16 sm:mb-20">
            <h2
              id="database-management-section-title"
              className="text-xl sm:text-2xl md:text-3xl font-bold text-center max-w-4xl mx-auto leading-relaxed 
   bg-[linear-gradient(to_right,white,rgba(229,231,235,0.8),rgba(209,213,219,1))] 
   bg-clip-text text-transparent animate-gradient"
            >
              {t("database-management-section-title")}
            </h2>
            <p
              id="database-management-section-subtitle"
              className="mt-4 text-lg sm:text-xl text-center text-white/80 max-w-3xl mx-auto leading-relaxed"
            >
              {t("database-management-section-subtitle")}
            </p>
            <div className="absolute -bottom-6 sm:-bottom-8 left-1/2 transform -translate-x-1/2 w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-500 via-teal-500 to-emerald-500 rounded-full"></div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto mb-16">
            <div className="bg-gradient-to-br from-teal-900/20 via-card/20 to-emerald-900/20 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Database className="h-6 w-6 text-teal-400" />
                <h3
                  id="rdbms-design-implementation-title"
                  className="text-xl sm:text-xl md:text-2xl font-semibold text-teal-200"
                >
                  {t("rdbms-design-implementation-title")}
                </h3>
              </div>
              <ul className="text-white/80 space-y-2 text-md list-none pl-0">
                <li
                  id="rdbms-design-implementation-list-element1"
                  className="pl-3 -indent-3"
                >
                  {t("rdbms-design-implementation-list-element1")}
                </li>
                <li
                  id="rdbms-design-implementation-list-element2"
                  className="pl-3 -indent-3"
                >
                  {t("rdbms-design-implementation-list-element2")}
                </li>
                <li
                  id="rdbms-design-implementation-list-element3"
                  className="pl-3 -indent-3"
                >
                  {t("rdbms-design-implementation-list-element3")}
                </li>
                <li
                  id="rdbms-design-implementation-list-element4"
                  className="pl-3 -indent-3"
                >
                  {t("rdbms-design-implementation-list-element4")}
                </li>
                <li
                  id="rdbms-design-implementation-list-element5"
                  className="pl-3 -indent-3"
                >
                  {t("rdbms-design-implementation-list-element5")}
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-emerald-900/25 via-card/25 to-blue-900/25 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <FileSpreadsheet className="h-6 w-6 text-emerald-400" />
                <h3
                  id="data-migration-title"
                  className="text-xl sm:text-xl md:text-2xl font-semibold text-emerald-200"
                >
                  {t("data-migration-title")}
                </h3>
              </div>
              <ul className="text-white/80 space-y-2 text-md list-none pl-0">
                <li
                  id="data-migration-list-element1"
                  className="pl-3 -indent-3"
                >
                  {t("data-migration-list-element1")}
                </li>
                <li
                  id="data-migration-list-element2"
                  className="pl-3 -indent-3"
                >
                  {t("data-migration-list-element2")}
                </li>
                <li
                  id="data-migration-list-element3"
                  className="pl-3 -indent-3"
                >
                  {t("data-migration-list-element3")}
                </li>
                <li
                  id="data-migration-list-element4"
                  className="pl-3 -indent-3"
                >
                  {t("data-migration-list-element4")}
                </li>
                <li
                  id="data-migration-list-element5"
                  className="pl-3 -indent-3"
                >
                  {t("data-migration-list-element5")}
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-900/30 via-card/30 to-cyan-900/30 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="h-6 w-6 text-blue-400" />
                <h3
                  id="backup-recovery-title"
                  className="text-xl sm:text-xl md:text-2xl font-semibold text-blue-200"
                >
                  {t("backup-recovery-title")}
                </h3>
              </div>
              <ul className="text-white/80 space-y-2 text-md list-none pl-0">
                <li
                  id="backup-recovery-list-element1"
                  className="pl-3 -indent-3"
                >
                  {t("backup-recovery-list-element1")}
                </li>
                <li
                  id="backup-recovery-list-element2"
                  className="pl-3 -indent-3"
                >
                  {t("backup-recovery-list-element2")}
                </li>
                <li
                  id="backup-recovery-list-element3"
                  className="pl-3 -indent-3"
                >
                  {t("backup-recovery-list-element3")}
                </li>
                <li
                  id="backup-recovery-list-element4"
                  className="pl-3 -indent-3"
                >
                  {t("backup-recovery-list-element4")}
                </li>
                <li
                  id="backup-recovery-list-element5"
                  className="pl-3 -indent-3"
                >
                  {t("backup-recovery-list-element5")}
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-cyan-900/35 via-card/35 to-teal-900/35 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <BarChart3 className="h-6 w-6 text-cyan-400" />
                <h3
                  id="analytics-reporting-title"
                  className="text-xl sm:text-xl md:text-2xl font-semibold text-cyan-200"
                >
                  {t("analytics-reporting-title")}
                </h3>
              </div>
              <ul className="text-white/80 space-y-2 text-md list-none pl-0">
                <li
                  id="analytics-reporting-list-element1"
                  className="pl-3 -indent-3"
                >
                  {t("analytics-reporting-list-element1")}
                </li>
                <li
                  id="analytics-reporting-list-element2"
                  className="pl-3 -indent-3"
                >
                  {t("analytics-reporting-list-element2")}
                </li>
                <li
                  id="analytics-reporting-list-element3"
                  className="pl-3 -indent-3"
                >
                  {t("analytics-reporting-list-element3")}
                </li>
                <li
                  id="analytics-reporting-list-element4"
                  className="pl-3 -indent-3"
                >
                  {t("analytics-reporting-list-element4")}
                </li>
                <li
                  id="analytics-reporting-list-element5"
                  className="pl-3 -indent-3"
                >
                  {t("analytics-reporting-list-element5")}
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center">
            <p
              id="database-management-contact"
              className="text-xl text-white/90 mb-8 max-w-6xl mx-auto"
            >
              {t("database-management-contact")}
            </p>
            <Link
              href={generateContactHref(
                "/engineer/software-development/database-management"
              )}
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
