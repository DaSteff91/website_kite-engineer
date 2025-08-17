import Image from "next/image";
import background_image_darker from "@/public/images/background_image_darker.jpeg";
import kite_hero_image from "@/public/images/kite_hero_image.jpg";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ArrowLeft,
  ShoppingCart,
  Presentation,
} from "lucide-react";
import { PAGE_METADATA } from "@/lib/constants/metadata";

export const metadata = PAGE_METADATA["kite/freelancer/consulting"];

export default function ConsultingPage() {
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
      <section className="relative h-[50vh] sm:h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src={kite_hero_image}
            alt="Consulting Services"
            fill
            className="object-cover object-[center_45%] brightness-50"
            priority
            placeholder="blur"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1
            className="pb-1 text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 
   bg-gradient-to-r from-white via-gray-200 to-gray-300 
   bg-clip-text text-transparent 
   [text-shadow:0_0_8px_rgba(209,213,219,0.6)]"
          >
            Kite Consulting Services
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          {/* Back Navigation */}
          <div className="mb-8">
            <Link
              href="/kite"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to All Kite Services
            </Link>
          </div>

          <div className="relative mb-16 sm:mb-20">
            <h2
              className="text-xl sm:text-2xl md:text-3xl font-bold text-center max-w-4xl mx-auto leading-relaxed 
   bg-[linear-gradient(to_right,white,rgba(229,231,235,0.8),rgba(209,213,219,1))] 
   bg-clip-text text-transparent animate-gradient"
            >
              There is a lot to ask
            </h2>
            <p className="mt-4 text-lg sm:text-xl text-center text-white/80 max-w-3xl mx-auto leading-relaxed">
              Guidance and knowledge exchange is the key: Someone knows
              something and someone wants to learn it. Here I combine my role as
              a kitesurfer and -instructor with being part of society.
            </p>
            <div className="absolute -bottom-6 sm:-bottom-8 left-1/2 transform -translate-x-1/2 w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-500 via-teal-500 to-emerald-500 rounded-full"></div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto mb-16">
            <div className="bg-gradient-to-br from-blue-900/20 via-card/20 to-cyan-900/20 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <ShoppingCart className="h-6 w-6 text-blue-400" />
                <h3 className="text-lg font-semibold text-blue-200">
                  General Consulting
                </h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li>• Individual equipment recommendations</li>
                <li>• Transportation, maintenance and logistics</li>
                <li>• Equipment review and demo testings</li>
                <li>• Quote review</li>
                <li>• Karma: Influence on society and the environment</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-emerald-900/35 via-card/35 to-blue-900/35 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Presentation className="h-6 w-6 text-emerald-400" />
                <h3 className="text-lg font-semibold text-emerald-200">
                  Sport Representation
                </h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li>
                  • Public speaking and presentations about sport related topics
                </li>
                <li>• Educational workshops for almost all ages</li>
                <li>• Media interviews and content, also for B2B</li>
                <li>• Community outreach programs</li>
                <li>• Sport promotion initiatives</li>
              </ul>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center">
            <p className="text-xl text-white/90 mb-8 max-w-6xl mx-auto">
              This section revolves around anything that is somehow connected to
              the sport as well to the environment in which it´s carried out.
              Find out how we can work together:
            </p>
            <Link
              href="/contact?subject=Kite Consulting Services Inquiry&message=Hello Kite-Engineer,%0A%0AI'm interested in your consulting services. I need guidance with:%0A%0A- Equipment selection and recommendations%0A- Skill development and progression planning%0A- Local conditions and spot advice%0A- Sport representation and presentations%0A%0AMy current situation:%0A[Please describe your skill level, current equipment, local conditions, specific challenges, and goals]%0A%0ALooking forward to your expert advice!"
              target="_blank"
            >
              <Button
                size="lg"
                className="group bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Connect with me
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
