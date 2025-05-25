import { ContactForm } from "@/components/sections/ContactForm";
import Image from "next/image";

export default function ContactPage() {
  return (
    <main className="relative min-h-screen">
      {/* Background Image - now covering the entire page behind everything */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/images/background_image_darker.png"
          alt="Background"
          fill
          className="brightness-50 object-cover object-top"
          priority
        />
      </div>

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/contact_page.jpg"
            alt="Contact"
            fill
            className="object-cover object-center brightness-50"
            priority
          />
        </div>
        {/* <div className="relative z-10 container mx-auto px-4 text-center">
          <h1
            className="pb-1 text-4xl md:text-5xl font-bold mb-6 
   bg-gradient-to-r from-white via-gray-200 to-gray-300 
   bg-clip-text text-transparent 
   [text-shadow:0_0_8px_rgba(209,213,219,0.6)]"
          >
            Let´s Connect
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Whether it's about kiteboarding, engineering, or anything in between
          </p>
        </div> */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1
            className="pb-1 text-4xl md:text-5xl font-bold mb-6 
   bg-gradient-to-r from-white via-gray-200 to-gray-300 
   bg-clip-text text-transparent 
   [text-shadow:0_0_8px_rgba(209,213,219,0.6)]"
          >
            Combining Worlds...
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Envison - Enable - Execute
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="relative py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="relative mb-20">
            <h2
              className="text-2xl md:text-3xl font-bold text-center max-w-4xl mx-auto leading-relaxed 
   bg-[linear-gradient(to_right,white,rgba(229,231,235,0.8),rgba(209,213,219,1))] 
   bg-clip-text text-transparent animate-gradient"
            >
              Let´s Connect
            </h2>
            <p className="mt-4 text-xl text-center text-white/80 max-w-3xl mx-auto leading-relaxed">
              Whether it's about kiteboarding, engineering, or anything in
              between
            </p>
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 via-teal-500 to-emerald-500 rounded-full"></div>
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
