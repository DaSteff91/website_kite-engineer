import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import kite_landingpage_image from "@/public/images/kite_landingpage.jpg";
import engineer_landingpage_image from "@/public/images/engineer_hero_image.jpg";
import background_image_darker from "@/public/images/background_image_darker.jpeg";
import { PAGE_METADATA } from "@/lib/constants/metadata";
import LocaleSwitcher from "@/components/ui/localeSwitcher";

export const metadata = PAGE_METADATA.home;
interface LandingPageProps {
  params: { locale: string };
}

export default async function Home({ params }: LandingPageProps) {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "LandingPage",
  });
  return (
    <div className="min-h-screen flex items-center justify-center p-2 sm:p-4 relative">
      <div className="z-50">
        <LocaleSwitcher />
      </div>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6 w-full max-w-[90rem] mx-auto relative z-10">
        <Link
          href="/kite"
          className="group relative overflow-hidden rounded-xl sm:rounded-2xl aspect-square 
            border border-white/10 shadow-[0_2px_8px_-1px_rgba(255,255,255,0.1)]
            transition-all duration-300 active:scale-95 touch-active
            hover:shadow-[0_4px_16px_-2px_rgba(255,255,255,0.2)]"
        >
          <div className="absolute inset-0 bg-cover bg-center transition-all duration-500 group-hover:scale-110 brightness-50 group-hover:brightness-75">
            <Image
              src={kite_landingpage_image}
              alt="Kiteboarding"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              loading="eager"
              quality={85}
              placeholder="blur"
              priority
            />
          </div>
          <div className="relative h-full flex flex-col justify-end p-4 sm:p-6 md:p-8 transition-transform duration-500 group-hover:-translate-y-2">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 md:mb-3 
   drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]"
            >
              Kite
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/80">
              {t("kite-subtitle-landing-page")}
            </p>
          </div>
        </Link>

        <Link
          href="/engineer"
          className="group relative overflow-hidden rounded-xl sm:rounded-2xl aspect-square 
            border border-white/10 shadow-[0_2px_8px_-1px_rgba(255,255,255,0.1)]
            transition-all duration-300 active:scale-95 touch-active
            hover:shadow-[0_4px_16px_-2px_rgba(255,255,255,0.2)]"
        >
          <div className="absolute inset-0 bg-cover bg-center transition-all duration-500 group-hover:scale-110 brightness-50 group-hover:brightness-75">
            <Image
              src={engineer_landingpage_image}
              alt="Engineering"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              loading="eager"
              quality={85}
              placeholder="blur"
              priority
            />
          </div>
          <div className="relative h-full flex flex-col justify-end p-4 sm:p-6 md:p-8 transition-transform duration-500 group-hover:-translate-y-2">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 md:mb-3 
   drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]"
            >
              Engineer
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/80">
              {t("engineer-subtitle-landing-page")}
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
