import Image from "next/image";
import background_image_darker from "@/public/images/background_image_darker.jpeg";
import kite_hero_image from "@/public/images/kite_hero_image.jpg";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ArrowLeft,
  School,
  Users,
  Clock,
  MapPin,
  Award,
  Shield,
  Drama,
} from "lucide-react";
import { PAGE_METADATA } from "@/lib/constants/metadata";
import { generateContactHref } from "@/lib/utils/contact-filler";
import { Hero } from "@/components/sections/Hero";

export const metadata = PAGE_METADATA["kite/freelancer/school-support"];

export default function SchoolSupportPage() {
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
            <Hero
        route="/kite"
        objectPosition="center 45%"
        brightness={50}
        minHeight="60vh"
      >
        <h1 id="school-support-hero"
          className="pb-1 text-4xl md:text-5xl font-bold mb-6 
           bg-gradient-to-r from-white via-gray-200 to-gray-300 
           bg-clip-text text-transparent 
           [text-shadow:0_0_8px_rgba(209,213,219,0.6)]"
        >
          School Support Services
        </h1>
      </Hero>

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
              Have An Extra Employee At Hand
            </h2>
            <p className="mt-4 text-lg sm:text-xl text-center text-white/80 max-w-3xl mx-auto leading-relaxed">
              I´m ready to support your school. Consider me as the one guy you
              literally can put anywhere: Flexibility is my strength. Just tell
              me up front what you need:
            </p>
            <div className="absolute -bottom-6 sm:-bottom-8 left-1/2 transform -translate-x-1/2 w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-500 via-teal-500 to-emerald-500 rounded-full"></div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto mb-16">
            <div className="bg-gradient-to-br from-blue-900/20 via-card/20 to-cyan-900/20 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Drama className="h-6 w-6 text-blue-400" />
                <h3 id="instructor-services-title" className="text-lg font-semibold text-blue-200">
                  Instructor Services
                </h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li id="instructor-services-list-element1">• VDWS certified instructor since 2023</li>
                <li id="instructor-services-list-element2">• Beginner to advanced lessons</li>
                <li id="instructor-services-list-element3">• Landboarding lessons</li>
                <li id="instructor-services-list-element4">• Multi-language support (German, English, Portuguese)</li>
                <li id="instructor-services-list-element5">• Group and individual sessions</li>
                <li id="instructor-services-list-element6">• Supervision and filming</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-cyan-900/25 via-card/25 to-teal-900/25 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Users className="h-6 w-6 text-cyan-400" />
                <h3 id="general-assistance-title" className="text-lg font-semibold text-cyan-200">
                  General Assistance
                </h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li id="general-assistance-list-element1">• Office and administration</li>
                <li id="general-assistance-list-element2">• Customer service and sales support</li>
                <li id="general-assistance-list-element3">• Equipment recommendations</li>
                <li id="general-assistance-list-element4">• Gear maintenance and repairs</li>
                <li id="general-assistance-list-element5">• Inventory management and logistics</li>
                <li id="general-assistance-list-element6">• Product demonstrations</li>
                <li id="general-assistance-list-element7">• Helping hand in day to day tasks</li>
              </ul>
            </div>

            {/* <div className="bg-gradient-to-br from-teal-900/30 via-card/30 to-emerald-900/30 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="h-6 w-6 text-teal-400" />
                <h3 id="beach-management-title" className="text-lg font-semibold text-teal-200">
                  Beach Management
                </h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li id="beach-management-list-element1">• Beach setup and organization</li>
                <li id="beach-management-list-element2">• Safety area management</li>
                <li id="beach-management-list-element3">• Equipment handling and storage</li>
                <li id="beach-management-list-element4">• Weather condition assessment</li>
                <li id="beach-management-list-element5">• Emergency response protocols</li>
              </ul>
            </div> */}

            <div className="bg-gradient-to-br from-emerald-900/35 via-card/35 to-blue-900/35 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="h-6 w-6 text-emerald-400" />
                <h3 id="flexible-scheduling-title" className="text-lg font-semibold text-emerald-200">
                  Flexible Scheduling
                </h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li id="flexible-scheduling-list-element1">• Short-term and long-term contracts</li>
                <li id="flexible-scheduling-list-element2">• The more you book, the better the price</li>
                <li id="flexible-scheduling-list-element3">• Seasonal support available</li>
                <li id="flexible-scheduling-list-element4">• Weekend and holiday coverage</li>
                <li id="flexible-scheduling-list-element5">
                  • Providing support to multi-location schools and open to
                  commuting between sites.
                </li>
                <li id="flexible-scheduling-list-element6">• Driver’s license covering both car and motorcycle.</li>
              </ul>
            </div>

            {/* <div className="bg-gradient-to-br from-blue-900/40 via-card/40 to-cyan-900/40 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Award className="h-6 w-6 text-blue-400" />
                <h3 id="certifications-title" className="text-lg font-semibold text-blue-200">
                  Certifications
                </h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li id="certifications-list-element1">• VDWS instructor certification</li>
                <li id="certifications-list-element2">• First aid certified</li>
                <li id="certifications-list-element3">• Water safety trained</li>
                <li id="certifications-list-element4">• Insurance coverage available</li>
                <li id="certifications-list-element5">• Professional liability protection</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-cyan-900/45 via-card/45 to-teal-900/45 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="h-6 w-6 text-cyan-400" />
                <h3 id="safety-focus-title" className="text-lg font-semibold text-cyan-200">
                  Safety Focus
                </h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li id="safety-focus-list-element1">• Risk assessment and management</li>
                <li id="safety-focus-list-element2">• Safety equipment inspection</li>
                <li id="safety-focus-list-element3">• Weather monitoring and alerts</li>
                <li id="safety-focus-list-element4">• Emergency action plans</li>
                <li id="safety-focus-list-element5">• Student safety protocols</li>
              </ul>
            </div> */}
          </div>

          {/* Contact Section */}
          <div className="text-center">
            <p id="school-support-contact" className="text-xl text-white/90 mb-8 max-w-6xl mx-auto">
              Let's see how I can support your team. Combine my services as you
              wish, there are almost no restrictions. Is anything missing? We
              find a solution. It all starts here:
            </p>
            <Link
              href={generateContactHref("/kite/freelancer/school-support")}
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