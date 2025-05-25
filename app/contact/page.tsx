import { ContactForm } from "@/components/sections/ContactForm";
import Image from "next/image";

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/contact_page.jpg"
            alt="Contact"
            fill
            className="object-cover object-[center_10%] brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]">
            Let's Connect
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Whether it's about kiteboarding, engineering, or anything in between
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 sm:py-16 bg-background">
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