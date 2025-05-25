import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 w-full max-w-[120rem] mx-auto">
        <Link
          href="/kite"
          className="group relative overflow-hidden rounded-2xl aspect-square 
            shadow-[0_0_15px_rgba(64,224,208,0.3)] hover:shadow-[0_0_25px_rgba(64,224,208,0.5)]
            transition-all duration-300 active:scale-95 touch-active"
        >
          <div className="absolute inset-0 bg-cover bg-center transition-all duration-500 group-hover:scale-110 brightness-50 group-hover:brightness-75">
            <Image
              src="/images/kite_landingpage.png"
              alt="Kiteboarding"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
          <div className="relative h-full flex flex-col justify-end p-4 md:p-8 transition-transform duration-500 group-hover:-translate-y-2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 md:mb-4">Kite</h2>
            <p className="text-base md:text-lg lg:text-xl text-white/80">Explore my kiteboarding services</p>
          </div>
        </Link>

        <Link
          href="/engineer"
          className="group relative overflow-hidden rounded-2xl aspect-square 
            shadow-[0_0_15px_rgba(64,224,208,0.3)] hover:shadow-[0_0_25px_rgba(64,224,208,0.5)]
            transition-all duration-300 active:scale-95 touch-active"
        >
          <div className="absolute inset-0 bg-cover bg-center transition-all duration-500 group-hover:scale-110 brightness-50 group-hover:brightness-75">
            <Image
              src="/images/1.jpg"
              alt="Engineering"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
          <div className="relative h-full flex flex-col justify-end p-4 md:p-8 transition-transform duration-500 group-hover:-translate-y-2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 md:mb-4">Engineer</h2>
            <p className="text-base md:text-lg lg:text-xl text-white/80">Discover my engineering expertise</p>
          </div>
        </Link>
      </div>
    </div>
  );
}