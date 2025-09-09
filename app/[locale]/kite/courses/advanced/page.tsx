import { useTranslations } from "next-intl";
import Image from "next/image";
import background_image_darker from "@/public/images/background_image_darker.jpeg";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ArrowLeft,
  Clock,
  ListCheck,
  UserRoundSearch,
} from "lucide-react";
import { generateContactHref } from "@/lib/utils/contact-filler";
import { PAGE_METADATA } from "@/lib/constants/metadata";
import { Hero } from "@/components/sections/Hero";

export const metadata = PAGE_METADATA["kite/courses/advanced"];

export default function AdvancedPage() {
  const t = useTranslations("AdvancedPage");

  const richTextHandlers = {
    strong: (chunks: React.ReactNode) => <strong>{chunks}</strong>,
    em: (chunks: React.ReactNode) => <em>{chunks}</em>,
    abbr: (chunks: React.ReactNode) => {
      // chunks will be an array: [text, <0>title</0>]
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
          id="advanced-hero"
          className="pb-1 text-4xl md:text-5xl font-bold mb-6 
           bg-gradient-to-r from-white via-gray-200 to-gray-300 
           bg-clip-text text-transparent 
           [text-shadow:0_0_8px_rgba(209,213,219,0.6)]"
        >
          {t("advanced-hero")}
        </h1>
      </Hero>
      {/* Content Section */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Link
              href="/kite"
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to All Kite Services
            </Link>
          </div>

          <div className="relative mb-16 sm:mb-20">
            <h2
              id="advanced-section-title"
              className="text-xl sm:text-2xl md:text-3xl font-bold text-center max-w-4xl mx-auto leading-relaxed 
   bg-[linear-gradient(to_right,white,rgba(229,231,235,0.8),rgba(209,213,219,1))] 
   bg-clip-text text-transparent animate-gradient"
            >
              {t("advanced-section-title")}
            </h2>
            <p
              id="advanced-section-subtitle"
              className="mt-4 text-lg sm:text-xl text-center text-white/80 max-w-3xl mx-auto leading-relaxed"
            >
              {t("advanced-section-subtitle")}
            </p>
            <div className="absolute -bottom-6 sm:-bottom-8 left-1/2 transform -translate-x-1/2 w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-500 via-teal-500 to-emerald-500 rounded-full"></div>
          </div>

          {/* Course Topics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto mb-16">
            <div className="bg-gradient-to-br from-cyan-900/20 via-card/20 to-teal-900/20 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <UserRoundSearch className="h-6 w-6 text-cyan-400" />
                <h3
                  id="who-title"
                  className="text-lg font-semibold text-cyan-200"
                >
                  {t("who-title")}
                </h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li id="who-list-element1">{t("who-list-element1")}</li>
                <li id="who-list-element2">{t("who-list-element2")}</li>
                <li id="who-list-element3">{t("who-list-element3")}</li>
                <li id="who-list-element4">{t("who-list-element4")}</li>
                <li id="who-list-element5">{t("who-list-element5")}</li>
                <li id="who-list-element6">{t("who-list-element6")}</li>
                <li id="who-list-element7">{t("who-list-element7")}</li>
                <li id="who-list-element8">{t("who-list-element8")}</li>
                <li id="who-list-element9">{t("who-list-element9")}</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-teal-900/25 via-card/25 to-emerald-900/25 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <ListCheck className="h-6 w-6 text-teal-400" />
                <h3
                  id="possible-content-title"
                  className="text-lg font-semibold text-teal-200"
                >
                  {t("possible-content-title")}
                </h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li id="possible-content-list-element1">
                  {t("possible-content-list-element1")}
                </li>
                <li id="possible-content-list-element2">
                  {t("possible-content-list-element2")}
                </li>
                <li id="possible-content-list-element3">
                  {t("possible-content-list-element3")}
                </li>
                <li id="possible-content-list-element4">
                  {t("possible-content-list-element4")}
                </li>
                <li id="possible-content-list-element5">
                  {t("possible-content-list-element5")}
                </li>
                <li id="possible-content-list-element6">
                  {t("possible-content-list-element6")}
                </li>
                <li id="possible-content-list-element7">
                  {t("possible-content-list-element7")}
                </li>
                <li id="possible-content-list-element8">
                  {t("possible-content-list-element8")}
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-emerald-900/30 via-card/30 to-blue-900/30 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="h-6 w-6 text-emerald-400" />
                <h3
                  id="structure-title"
                  className="text-lg font-semibold text-emerald-200"
                >
                  {t("structure-title")}
                </h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li id="structure-list-element1">
                  {t("structure-list-element1")}
                </li>
                <li id="structure-list-element2">
                  {t("structure-list-element2")}
                </li>
                <li id="structure-list-element3">
                  {t("structure-list-element3")}
                </li>
                <li id="structure-list-element4">
                  {t("structure-list-element4")}
                </li>
                <li id="structure-list-element5">
                  {t("structure-list-element5")}
                </li>
                <li id="structure-list-element6">
                  {t("structure-list-element6")}
                </li>
                <li id="structure-list-element7">
                  {t("structure-list-element7")}
                </li>
                <li id="structure-list-element8">
                  {t("structure-list-element8")}
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center">
            <p
              id="advanced-contact"
              className="text-xl text-white/90 mb-8 max-w-6xl mx-auto"
            >
              {t("advanced-contact")}
            </p>
            <Link
              href={generateContactHref("/kite/courses/advanced")}
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
