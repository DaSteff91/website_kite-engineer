import { ContactForm } from "@/components/sections/ContactForm";
import Image from "next/image";
import background_image_darker from "@/public/images/background_image_darker.jpeg";
import { getPageMetadata } from "@/lib/constants/metadata";
import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: { params: ContactPageProps["params"]; }): Promise<Metadata> {
  const resolvedParams = await params;
  const { locale } = resolvedParams;
  return await getPageMetadata(locale, "Contact", "/contact");
}
interface ContactPageProps {
  params: Promise<{ locale: string }>;
}

export default async function ContactPage({ params }: ContactPageProps) {
  const resolvedParams = await params;
  const { locale } = resolvedParams;
  const t = await getTranslations({
    locale,
    namespace: "ContactPage",
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

      <Hero
        route="/contact"
        objectPosition="center 45%"
        brightness={50}
        minHeight="60vh"
      >
        <h1
          id="contact-hero"
          className="pb-1 text-4xl md:text-5xl font-bold mb-6 
           bg-gradient-to-r from-white via-gray-200 to-gray-300 
           bg-clip-text text-transparent 
           [text-shadow:0_0_8px_rgba(209,213,219,0.6)]"
        >
          {t("heroTitle")}
        </h1>
      </Hero>

      {/* Contact Form Section */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="relative mb-16 sm:mb-20">
            <h2
              id="contact-section-title"
              className="text-xl sm:text-2xl md:text-3xl font-bold text-center max-w-4xl mx-auto leading-relaxed 
   bg-[linear-gradient(to_right,white,rgba(229,231,235,0.8),rgba(209,213,219,1))] 
   bg-clip-text text-transparent animate-gradient"
            >
              {t("sectionTitle")}
            </h2>
            <p
              id="contact-section-subtitle"
              className="mt-4 text-lg sm:text-xl text-center text-white/80 max-w-3xl mx-auto leading-relaxed"
            >
              {t("sectionDescription")}
            </p>
            <div className="absolute -bottom-6 sm:-bottom-8 left-1/2 transform -translate-x-1/2 w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-500 via-teal-500 to-emerald-500 rounded-full"></div>
          </div>
        </div>
        <div className="container px-4 sm:px-6 mx-auto">
          <div className="absolute inset-0 circuit-pattern opacity-5" />
          <div className="relative flex justify-center">
            <div className="w-full max-w-4xl">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
