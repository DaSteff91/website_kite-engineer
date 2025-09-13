import Image from "next/image";
import background_image_darker from "@/public/images/background_image_darker.jpeg";
import about_content_image from "@/public/images/about_content.jpg";
import { PAGE_METADATA } from "@/lib/constants/metadata";
import { Hero } from "@/components/sections/Hero";
import { getTranslations } from "next-intl/server";

export const metadata = PAGE_METADATA.about;
interface AboutPageProps {
  params: { locale: string };
}

export default async function AboutPage({ params }: AboutPageProps) {
  const t = await getTranslations({
    locale: params.locale,
    namespace: "AboutPage",
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
        route="/about"
        objectPosition="center 45%"
        brightness={50}
        minHeight="60vh"
      >
        <h1
          id="about-hero"
          className="pb-1 text-4xl md:text-5xl font-bold mb-6 
           bg-gradient-to-r from-white via-gray-200 to-gray-300 
           bg-clip-text text-transparent 
           [text-shadow:0_0_8px_rgba(209,213,219,0.6)]"
        >
          {t("heroTitle")}
        </h1>
      </Hero>

      {/* Content Section */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="relative mb-16 sm:mb-20">
            <h2
              id="about-section-title"
              className="text-xl sm:text-2xl md:text-3xl font-bold text-center max-w-4xl mx-auto leading-relaxed 
   bg-[linear-gradient(to_right,white,rgba(229,231,235,0.8),rgba(209,213,219,1))] 
   bg-clip-text text-transparent animate-gradient"
            >
              {t("sectionTitle")}
            </h2>
            <p
              id="about-section-subtitle"
              className="mt-4 text-lg sm:text-xl text-center text-white/80 max-w-3xl mx-auto leading-relaxed"
            >
              {t("sectionQuote")}
            </p>
            <div className="absolute -bottom-6 sm:-bottom-8 left-1/2 transform -translate-x-1/2 w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-500 via-teal-500 to-emerald-500 rounded-full"></div>
          </div>
        </div>

        {/* Box Section */}
        <div className="container mx-auto px-4">
          <div className=" max-w-6xl mx-auto my-4">
            <div className="bg-gradient-to-br from-blue-900/20 via-card/20 to-cyan-900/20 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300 w-full">
              <h3
                id="introduction-title"
                className="text-2xl font-bold mb-4 pb-3 border-b border-white/20 flex items-center gap-3 text-teal-200"
              >
                {t("introductionTitle")}
              </h3>
              <p className="text-muted-foreground leading-6 sm:leading-7 text-sm sm:text-base">
                {t("introductionText1")}
              </p>
              <p className="text-muted-foreground leading-6 sm:leading-7 text-sm sm:text-base">
                {t.rich("introductionText2", {
                  strong: (chunks) => <strong>{chunks}</strong>,
                })}
              </p>
              <p className="text-muted-foreground leading-6 sm:leading-7 text-sm sm:text-base">
                {t.rich("introductionText3", {
                  strong: (chunks) => <strong>{chunks}</strong>,
                })}
              </p>
              <ul className="text-muted-foreground leading-6 sm:leading-7 text-sm sm:text-base my-2">
                <li id="t-introductiontitle-list-element1">
                  {t("introductionListItem1")}
                </li>
                <li id="t-introductiontitle-list-element2">
                  {t("introductionListItem2")}
                </li>
              </ul>
              <p className="text-muted-foreground leading-6 sm:leading-7 text-sm sm:text-base">
                {t("introductionText4")}
              </p>
              <p className="text-muted-foreground leading-6 sm:leading-7 text-sm sm:text-base">
                {t("introductionText5")}
              </p>
              <br />
              <Image
                src={about_content_image}
                alt="Content image"
                className="object-cover object-top"
                priority
                placeholder="blur"
                width={1102}
                height={827}
              ></Image>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-blue-900/20 via-card/20 to-cyan-900/20 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300 w-full">
              <h3
                id="professional-title"
                className="text-xl sm:text-2xl font-bold mb-4 pb-3 border-b border-white/20 flex items-center gap-3 text-blue-200"
              >
                {t("professionalTitle")}
              </h3>
              <ul className="text-muted-foreground list-disc list-outside pl-4 sm:pl-5 space-y-3 sm:space-y-4 text-sm sm:text-base">
                {t.rich("professionalItems", {
                  li: (chunks) => (
                    <li id="t-professionaltitle-list-element1">{chunks}</li>
                  ),
                })}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-cyan-900/25 via-card/25 to-teal-900/25 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300 w-full">
              <h3
                id="personal-title"
                className="text-xl sm:text-2xl font-bold mb-4 pb-3 border-b border-white/20 flex items-center gap-3 text-cyan-200"
              >
                {t("personalTitle")}
              </h3>
              <ul className="text-muted-foreground list-disc list-outside pl-4 sm:pl-5 space-y-3 sm:space-y-4 text-sm sm:text-base">
                {t.rich("personalItems", {
                  li: (chunks) => (
                    <li id="t-personaltitle-list-element1">{chunks}</li>
                  ),
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
