import { getTranslations } from "next-intl/server";
import { hrefForTemplateWithTranslator } from "@/lib/utils/contact-i18n-helper";
import Image from "next/image";
import background_image_darker from "@/public/images/background_image_darker.jpeg";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Users, Clock, Drama } from "lucide-react";
import { PAGE_METADATA } from "@/lib/constants/metadata";
import { Hero } from "@/components/sections/Hero";

export const metadata = PAGE_METADATA["kite/freelancer/school-support"];
interface SchoolSupportPageProps {
  params: Promise<{ locale: string }>;
}

export default async function SchoolSupportPage({
  params,
}: SchoolSupportPageProps) {
  const resolvedParams = await params;
  const { locale } = resolvedParams;
  const t = await getTranslations({
    locale,
    namespace: "SchoolSupportPage",
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
        route="/kite"
        objectPosition="center 45%"
        brightness={50}
        minHeight="60vh"
      >
        <h1
          id="school-support-hero"
          className="pb-1 text-4xl md:text-5xl font-bold mb-6 
           bg-gradient-to-r from-white via-gray-200 to-gray-300 
           bg-clip-text text-transparent 
           [text-shadow:0_0_8px_rgba(209,213,219,0.6)]"
        >
          {t("school-support-hero")}
        </h1>
      </Hero>
      {/* Content Section */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          {/* Back Navigation */}
          <div className="mb-8">
            <Link
              href="/kite"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
              id="back-to-kite-services-nav"
            >
              <ArrowLeft className="h-4 w-4" />
              {t("back-to-kite-services-nav")}
            </Link>
          </div>

          <div className="relative mb-16 sm:mb-20">
            <h2
              id="school-support-section-title"
              className="text-xl sm:text-2xl md:text-3xl font-bold text-center max-w-4xl mx-auto leading-relaxed 
   bg-[linear-gradient(to_right,white,rgba(229,231,235,0.8),rgba(209,213,219,1))] 
   bg-clip-text text-transparent animate-gradient"
            >
              {t("school-support-section-title")}
            </h2>
            <p
              id="school-support-section-subtitle"
              className="mt-4 text-lg sm:text-xl text-center text-white/80 max-w-3xl mx-auto leading-relaxed"
            >
              {t("school-support-section-subtitle")}
            </p>
            <div className="absolute -bottom-6 sm:-bottom-8 left-1/2 transform -translate-x-1/2 w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-500 via-teal-500 to-emerald-500 rounded-full"></div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto mb-16">
            <div className="bg-gradient-to-br from-blue-900/20 via-card/20 to-cyan-900/20 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Drama className="h-6 w-6 text-blue-400" />
                <h3
                  id="instructor-services-title"
                  className="text-xl sm:text-xl md:text-2xl font-semibold text-blue-200"
                >
                  {t("instructor-services-title")}
                </h3>
              </div>
              <ul className="text-white/80 space-y-2 text-md list-none pl-0">
                <li
                  id="instructor-services-list-element1"
                  className="pl-3 -indent-3"
                >
                  {t("instructor-services-list-element1")}
                </li>
                <li
                  id="instructor-services-list-element2"
                  className="pl-3 -indent-3"
                >
                  {t("instructor-services-list-element2")}
                </li>
                <li
                  id="instructor-services-list-element3"
                  className="pl-3 -indent-3"
                >
                  {t("instructor-services-list-element3")}
                </li>
                <li
                  id="instructor-services-list-element4"
                  className="pl-3 -indent-3"
                >
                  {t("instructor-services-list-element4")}
                </li>
                <li
                  id="instructor-services-list-element5"
                  className="pl-3 -indent-3"
                >
                  {t("instructor-services-list-element5")}
                </li>
                <li
                  id="instructor-services-list-element6"
                  className="pl-3 -indent-3"
                >
                  {t("instructor-services-list-element6")}
                </li>
                <li
                  id="instructor-services-list-element7"
                  className="pl-3 -indent-3"
                >
                  {t("instructor-services-list-element7")}
                </li>
                <li
                  id="instructor-services-list-element8"
                  className="pl-3 -indent-3"
                >
                  {t("instructor-services-list-element8")}
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-cyan-900/25 via-card/25 to-teal-900/25 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Users className="h-6 w-6 text-cyan-400" />
                <h3
                  id="general-assistance-title"
                  className="text-xl sm:text-xl md:text-2xl font-semibold text-cyan-200"
                >
                  {t("general-assistance-title")}
                </h3>
              </div>
              <ul className="text-white/80 space-y-2 text-md list-none pl-0">
                <li
                  id="general-assistance-list-element1"
                  className="pl-3 -indent-3"
                >
                  {t("general-assistance-list-element1")}
                </li>
                <li
                  id="general-assistance-list-element2"
                  className="pl-3 -indent-3"
                >
                  {t("general-assistance-list-element2")}
                </li>
                <li
                  id="general-assistance-list-element3"
                  className="pl-3 -indent-3"
                >
                  {t("general-assistance-list-element3")}
                </li>
                <li
                  id="general-assistance-list-element4"
                  className="pl-3 -indent-3"
                >
                  {t("general-assistance-list-element4")}
                </li>
                <li
                  id="general-assistance-list-element5"
                  className="pl-3 -indent-3"
                >
                  {t("general-assistance-list-element5")}
                </li>
                <li
                  id="general-assistance-list-element6"
                  className="pl-3 -indent-3"
                >
                  {t("general-assistance-list-element6")}
                </li>
                <li
                  id="general-assistance-list-element7"
                  className="pl-3 -indent-3"
                >
                  {t("general-assistance-list-element7")}
                </li>
                <li
                  id="general-assistance-list-element8"
                  className="pl-3 -indent-3"
                >
                  {t("general-assistance-list-element8")}
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-emerald-900/35 via-card/35 to-blue-900/35 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="h-6 w-6 text-emerald-400" />
                <h3
                  id="flexible-scheduling-title"
                  className="text-xl sm:text-xl md:text-2xl font-semibold text-emerald-200"
                >
                  {t("flexible-scheduling-title")}
                </h3>
              </div>
              <ul className="text-white/80 space-y-2 text-md list-none pl-0">
                <li
                  id="flexible-scheduling-list-element1"
                  className="pl-3 -indent-3"
                >
                  {t("flexible-scheduling-list-element1")}
                </li>
                <li
                  id="flexible-scheduling-list-element2"
                  className="pl-3 -indent-3"
                >
                  {t("flexible-scheduling-list-element2")}
                </li>
                <li
                  id="flexible-scheduling-list-element3"
                  className="pl-3 -indent-3"
                >
                  {t("flexible-scheduling-list-element3")}
                </li>
                <li
                  id="flexible-scheduling-list-element4"
                  className="pl-3 -indent-3"
                >
                  {t("flexible-scheduling-list-element4")}
                </li>
                <li
                  id="flexible-scheduling-list-element5"
                  className="pl-3 -indent-3"
                >
                  {t("flexible-scheduling-list-element5")}
                </li>
                <li
                  id="flexible-scheduling-list-element6"
                  className="pl-3 -indent-3"
                >
                  {t("flexible-scheduling-list-element6")}
                </li>
                <li
                  id="flexible-scheduling-list-element7"
                  className="pl-3 -indent-3"
                >
                  {t("flexible-scheduling-list-element7")}
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center">
            <p
              id="school-support-contact"
              className="text-xl text-white/90 mb-8 max-w-6xl mx-auto"
            >
              {t("school-support-contact")}
            </p>
            <Link
              href={hrefForTemplateWithTranslator(
                contactT,
                "/kite/freelancer/school-support"
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
