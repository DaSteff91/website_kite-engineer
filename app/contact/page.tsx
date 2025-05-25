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
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Let's Connect
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Whether it's about kiteboarding, engineering, or anything in between
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="absolute inset-0 circuit-pattern opacity-5" />
          <div className="relative max-w-lg mx-auto">
            <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}