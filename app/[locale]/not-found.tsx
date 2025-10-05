import { getTranslations, getLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import background_image_darker from "@/public/images/background_image_darker.jpeg";
import { PAGE_METADATA } from "@/lib/constants/metadata";
import { Hero } from "@/components/sections/Hero";

export const metadata = PAGE_METADATA.notFound;

export default async function NotFound() {
  const locale = await getLocale();
  const t = await getTranslations({
    locale,
    namespace: "NotFound",
  });

  return (
    <div className="min-h-screen flex items-center justify-center p-2 sm:p-4 relative">
      {/* Background Image*/}
      <div className="absolute inset-0 -z-10">
        <Image
          src={background_image_darker}
          alt="Background"
          fill
          sizes="100vw"
          className="brightness-50 object-cover object-top"
          loading="eager"
          quality={85}
          placeholder="blur"
        />
      </div>

      {/* Hero Section */}
      {/* <Hero
        route="/about"
        objectPosition="center 45%"
        brightness={50}
        minHeight="60vh"
      ></Hero>
       */}

      {/* Content Section */}
      <div className="relative z-10 text-center">
        {" "}
        <h1 className="text-4xl font-bold mb-4">{t("title")}</h1>
        <p className="text-xl text-gray-600 mb-8">{t("description")}</p>
        <Link
          href="/"
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          {t("backHome")}
        </Link>
      </div>
    </div>
  );
}
