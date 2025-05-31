import Link from "next/link";
import Image from "next/image";
import kite_landingpage_image from "@/public/images/kite_landingpage.jpg";
import engineer_landingpage_image from "@/public/images/engineer_hero_image.jpg";
import background_image_darker from "@/public/images/background_image_darker.jpeg";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative">
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full max-w-[90rem] mx-auto relative z-10">
        <Link
          href="/kite"
          className="group relative overflow-hidden rounded-2xl aspect-square 
            border border-white/10 shadow-[0_2px_8px_-1px_rgba(255,255,255,0.1)]
            transition-all duration-300 active:scale-95 touch-active"
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
          <div className="relative h-full flex flex-col justify-end p-4 md:p-6 transition-transform duration-500 group-hover:-translate-y-2">
            <h2
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 md:mb-3 
   drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]"
            >
              Kite
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-white/80">
              Curious? Let´s work together
            </p>
          </div>
        </Link>

        <Link
          href="/engineer"
          className="group relative overflow-hidden rounded-2xl aspect-square 
            border border-white/10 shadow-[0_2px_8px_-1px_rgba(255,255,255,0.1)]
            transition-all duration-300 active:scale-95 touch-active"
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
          <div className="relative h-full flex flex-col justify-end p-4 md:p-6 transition-transform duration-500 group-hover:-translate-y-2">
            <h2
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 md:mb-3 
   drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]"
            >
              Engineer
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-white/80">
              Ambitious? It´s about solutions
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
