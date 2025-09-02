import { Link } from "@/i18n/navigation";
import Image from "next/image";
import background_image_darker from "@/public/images/background_image_darker.jpeg";
import { Hero } from "@/components/sections/Hero";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArrowRight,
  School,
  Plane,
  HandPlatter,
  List,
  LibraryBig,
  CirclePlay,
  ArrowBigUpDash,
  MessageSquareText,
  ExternalLink,
} from "lucide-react";
import { generateContactHref } from "@/lib/utils/contact-filler";
import { PAGE_METADATA } from "@/lib/constants/metadata";
import { useTranslations } from "next-intl";

export const metadata = PAGE_METADATA.kite;

export default function KitePage() {
  const t = useTranslations("KitePage");

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
        <h1 id="kite-hero"
          className="pb-1 text-4xl md:text-5xl font-bold mb-6 
           bg-gradient-to-r from-white via-gray-200 to-gray-300 
           bg-clip-text text-transparent 
           [text-shadow:0_0_8px_rgba(209,213,219,0.6)]"
        >
          {t("heroTitle")}
        </h1>
      </Hero>

      {/* Content Section */}
      <section className="py-16" id="content-section">
        <div className="container mx-auto px-4">
          <div className="relative mb-20">
            <h2 id="kite-section-title"
              className="text-2xl md:text-3xl font-bold text-center max-w-4xl mx-auto leading-relaxed 
   bg-[linear-gradient(to_right,white,rgba(229,231,235,0.8),rgba(209,213,219,1))] 
   bg-clip-text text-transparent animate-gradient"
            >
              {t("sectionTitle")}
            </h2>
            <p id="kite-section-subtitle" className="mt-4 text-xl text-center text-white/80 max-w-3xl mx-auto leading-relaxed">
              {t("sectionSubtitle")}
            </p>
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 via-teal-500 to-emerald-500 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 items-start justify-items-center">
            {/* Freelancer Section */}
            <div className="bg-gradient-to-br from-blue-900/20 via-card/20 to-cyan-900/20 backdrop-blur-sm p-6 rounded-lg border border-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300 w-full max-w-xl h-fit">
              <h3 className="text-2xl font-bold mb-4 pb-3 border-b border-white/20 flex items-center gap-3 text-blue-200" id="freelancer-section">
                <HandPlatter className="h-7 w-7 text-blue-400" />
                {t("freelancerTitle")}
              </h3>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem
                  value="school-support-1"
                  className="border-white/5"
                >
                  <AccordionTrigger className="hover:text-blue-400 transition-colors text-lg text-left">
                    <div
                      className="flex items-center gap-2"
                      id="school-support-title"
                    >
                      <School className="h-5 w-5" />
                      {t("freelancerSchoolSupportTitle")}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent
                    className="text-white/80"
                    id="school-support-description"
                  >
                    {t("freelancerSchoolSupportDescription")}
                    <div className="mt-4 flex flex-col gap-2">
                      <Link
                        href="/kite/freelancer/school-support"
                        className="text-blue-400 hover:text-blue-300 underline text-sm flex items-center gap-2"
                      >
                        <ExternalLink className="h-3 w-3" />
                        {t("moreLink")}
                      </Link>
                      <Link
                        href={generateContactHref(
                          "/kite/freelancer/school-support"
                        )}
                        className="text-blue-400 hover:text-blue-300 underline text-sm flex items-center gap-2"
                        target="_blank"
                      >
                        <ExternalLink className="h-3 w-3" />
                        {t("contactLink")}
                      </Link>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="travel-service-1"
                  className="border-white/5"
                >
                  <AccordionTrigger className="hover:text-blue-400 transition-colors text-lg text-left">
                    <div id="travel-service-title" className="flex items-center gap-2">
                      <Plane className="h-5 w-5" />
                      {t("freelancerTravelServicesTitle")}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent id="travel-service-description" className="text-white/80">
                    {t("freelancerTravelServicesDescription")}
                    <div className="mt-4 flex flex-col gap-2">
                      <Link
                        href="/kite/freelancer/travel-services"
                        className="text-blue-400 hover:text-blue-300 underline text-sm flex items-center gap-2"
                      >
                        <ExternalLink className="h-3 w-3" />
                        {t("moreLink")}
                      </Link>
                      <Link
                        href={generateContactHref(
                          "/kite/freelancer/travel-services"
                        )}
                        className="text-blue-400 hover:text-blue-300 underline text-sm flex items-center gap-2"
                        target="_blank"
                      >
                        <ExternalLink className="h-3 w-3" />
                        {t("contactLink")}
                      </Link>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="consulting-1" className="border-white/5">
                  <AccordionTrigger className="hover:text-blue-400 transition-colors text-lg text-left">
                    <div id="consulting-title" className="flex items-center gap-2">
                      <MessageSquareText className="h-5 w-5" />
                      {t("freelancerConsultingTitle")}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent id="consulting-description" className="text-white/80">
                    {t("freelancerConsultingDescription")}
                    <div className="mt-4 flex flex-col gap-2">
                      <Link
                        href="/kite/freelancer/consulting"
                        className="text-blue-400 hover:text-blue-300 underline text-sm flex items-center gap-2"
                      >
                        <ExternalLink className="h-3 w-3" />
                        {t("moreLink")}
                      </Link>
                      <Link
                        href={generateContactHref(
                          "/kite/freelancer/consulting"
                        )}
                        className="text-blue-400 hover:text-blue-300 underline text-sm flex items-center gap-2"
                        target="_blank"
                      >
                        <ExternalLink className="h-3 w-3" />
                        {t("contactLink")}
                      </Link>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Courses Section */}
            <div className="bg-gradient-to-br from-cyan-900/25 via-card/25 to-teal-900/25 backdrop-blur-sm p-6 rounded-lg border border-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300 w-full max-w-xl h-fit">
              <h3 className="text-2xl font-bold mb-4 pb-3 border-b border-white/20 flex items-center gap-3 text-cyan-200" id="courses-section">
                <List className="h-7 w-7 text-cyan-400" />
                {t("coursesTitle")}
              </h3>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="theory-2" className="border-white/5">
                  <AccordionTrigger className="hover:text-cyan-400 transition-colors text-lg text-left">
                    <div id="theory-title" className="flex items-center gap-2">
                      <LibraryBig className="h-5 w-5" />
                      {t("coursesTheoryTitle")}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent id="theory-description" className="text-white/80">
                    {t("coursesTheoryDescription")}
                    <div className="mt-4 flex flex-col gap-2">
                      <Link
                        href="/kite/courses/theory"
                        className="text-cyan-400 hover:text-cyan-300 underline text-sm flex items-center gap-2"
                      >
                        <ExternalLink className="h-3 w-3" />
                        {t("moreLink")}
                      </Link>
                      <Link
                        href={generateContactHref("/kite/courses/theory")}
                        className="text-cyan-400 hover:text-cyan-300 underline text-sm flex items-center gap-2"
                        target="_blank"
                      >
                        <ExternalLink className="h-3 w-3" />
                        {t("contactLink")}
                      </Link>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="starting-2" className="border-white/5">
                  <AccordionTrigger className="hover:text-cyan-400 transition-colors text-lg text-left">
                    <div id="starting-title" className="flex items-center gap-2">
                      <CirclePlay className="h-5 w-5" />
                      {t("coursesStartingTitle")}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent id="starting-description" className="text-white/80">
                    {t("coursesStartingDescription")}
                    <div className="mt-4 flex flex-col gap-2">
                      <Link
                        href="/kite/courses/starting"
                        className="text-cyan-400 hover:text-cyan-300 underline text-sm flex items-center gap-2"
                      >
                        <ExternalLink className="h-3 w-3" />
                        {t("moreLink")}
                      </Link>
                      <Link
                        href={generateContactHref("/kite/courses/starting")}
                        className="text-cyan-400 hover:text-cyan-300 underline text-sm flex items-center gap-2"
                        target="_blank"
                      >
                        <ExternalLink className="h-3 w-3" />
                        {t("contactLink")}
                      </Link>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="advanced-2" className="border-white/5">
                  <AccordionTrigger className="hover:text-cyan-400 transition-colors text-lg text-left">
                    <div id="advanced-title" className="flex items-center gap-2">
                      <ArrowBigUpDash className="h-5 w-5" />
                      {t("coursesAdvancedTitle")}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent id="advanced-description" className="text-white/80">
                    {t("coursesAdvancedDescription")}
                    <div className="mt-4 flex flex-col gap-2">
                      <Link
                        href="/kite/courses/advanced"
                        className="text-cyan-400 hover:text-cyan-300 underline text-sm flex items-center gap-2"
                      >
                        <ExternalLink className="h-3 w-3" />
                        {t("moreLink")}
                      </Link>
                      <Link
                        href={generateContactHref("/kite/courses/advanced")}
                        className="text-cyan-400 hover:text-cyan-300 underline text-sm flex items-center gap-2"
                        target="_blank"
                      >
                        <ExternalLink className="h-3 w-3" />
                        {t("contactLink")}
                      </Link>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          {/* Enhanced Contact Section */}
          <div className="mt-16 text-center">
            <p className="text-xl text-white/90 mb-8 max-w-6xl mx-auto">
              {t("contactSectionText")}
            </p>
            <Link href="/contact" target="_blank">
              <Button
                size="lg"
                className="group bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                {t("contactButton")}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
