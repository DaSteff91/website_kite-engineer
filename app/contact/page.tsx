import { ContactForm } from "@/components/sections/ContactForm";
import Image from "next/image";
import contact_hero_image_fallback from "@/public/images/contact_hero_desktop.jpg";
import contact_hero_image_mobile from "@/public/images/contact_hero_mobile.jpg";
import contact_hero_image_tablet from "@/public/images/contact_hero_tablet.jpg";
import contact_hero_image_desktop from "@/public/images/contact_hero_desktop.jpg";
import background_image_darker from "@/public/images/background_image_darker.jpeg";

export default function ContactPage() {
  return (
    <main className="relative min-h-screen">
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
      <section className="relative h-[50vh] sm:h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          {/* Mobile (with fallback) */}
          <div className="md:hidden h-full w-full">
            <Image
              src={contact_hero_image_mobile || contact_hero_image_fallback}
              alt="Contact"
              fill
              className="object-cover object-[center_30%] brightness-50"
              priority
              placeholder="blur"
            />
          </div>

          {/* Tablet (with fallback) */}
          <div className="hidden md:block lg:hidden h-full w-full">
            <Image
              src={contact_hero_image_tablet || contact_hero_image_fallback}
              alt="Contact"
              fill
              className="object-cover object-[center_30%] brightness-50"
              priority
              placeholder="blur"
            />
          </div>

          {/* Desktop (with fallback) */}
          <div className="hidden lg:block h-full w-full">
            <Image
              src={contact_hero_image_desktop || contact_hero_image_fallback}
              alt="Contact"
              fill
              className="object-cover object-[center_30%] brightness-50"
              priority
              placeholder="blur"
            />
          </div>
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1
            className="pb-1 text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 
   bg-gradient-to-r from-white via-gray-200 to-gray-300 
   bg-clip-text text-transparent 
   [text-shadow:0_0_8px_rgba(209,213,219,0.6)]"
          >
            Combining Worlds...
          </h1>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="relative mb-16 sm:mb-20">
            <h2
              className="text-xl sm:text-2xl md:text-3xl font-bold text-center max-w-4xl mx-auto leading-relaxed 
   bg-[linear-gradient(to_right,white,rgba(229,231,235,0.8),rgba(209,213,219,1))] 
   bg-clip-text text-transparent animate-gradient"
            >
              Let´s Connect
            </h2>
            <p className="mt-4 text-lg sm:text-xl text-center text-white/80 max-w-3xl mx-auto leading-relaxed">
              Whether it's about kiteboarding, engineering, or anything in
              between.
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
    </main>
  );
}
