import Image from "next/image";
import background_image_darker from "@/public/images/background_image_darker.jpeg";
import kite_hero_image from "@/public/images/kite_hero_image.jpg";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ArrowLeft,
  Plane,
  Users,
  DumbbellIcon,
} from "lucide-react";
import { PAGE_METADATA } from "@/lib/constants/metadata";
import { generateContactHref } from "@/lib/utils/contact-filler";
import { Hero } from "@/components/sections/Hero";

export const metadata = PAGE_METADATA["kite/freelancer/travel-services"];

export default function TravelServicesPage() {
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
        <h1
          id="travel-services-hero"
          className="pb-1 text-4xl md:text-5xl font-bold mb-6 
           bg-gradient-to-r from-white via-gray-200 to-gray-300 
           bg-clip-text text-transparent 
           [text-shadow:0_0_8px_rgba(209,213,219,0.6)]"
        >
          Travel Services
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
            <h2 id="travel-services-section-title"
              className="text-xl sm:text-2xl md:text-3xl font-bold text-center max-w-4xl mx-auto leading-relaxed 
   bg-[linear-gradient(to_right,white,rgba(229,231,235,0.8),rgba(209,213,219,1))] 
   bg-clip-text text-transparent animate-gradient"
            >
              The world can be your playground - use it
            </h2>
            <p id="travel-services-section-subtitle" className="mt-4 text-lg sm:text-xl text-center text-white/80 max-w-3xl mx-auto leading-relaxed">
              Even though I am not a travel agent I can look up everything for
              you and put it together so you can easily decide what suites your
              booking. Here you can rely on me:
            </p>
            <div className="absolute -bottom-6 sm:-bottom-8 left-1/2 transform -translate-x-1/2 w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-500 via-teal-500 to-emerald-500 rounded-full"></div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto mb-16">
            <div className="bg-gradient-to-br from-blue-900/20 via-card/20 to-cyan-900/20 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Plane className="h-6 w-6 text-blue-400" />
                <h3
                  id="trip-organization-title"
                  className="text-lg font-semibold text-blue-200"
                >
                  Trip Organization
                </h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li id="trip-organization-list-element1">
                  • Trip planning and coordination
                </li>
                <li id="trip-organization-list-element2">
                  • Transfer arrangements
                </li>
                <li id="trip-organization-list-element3">
                  • Budget and timetable planing
                </li>
                <li id="trip-organization-list-element4">
                  • Health and insurance considerations
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-cyan-900/25 via-card/25 to-teal-900/25 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <DumbbellIcon className="h-6 w-6 text-cyan-400" />
                <h3
                  id="personal-coaching-title"
                  className="text-lg font-semibold text-cyan-200"
                >
                  Personal Coaching
                </h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li id="personal-coaching-list-element1">
                  • Kite instructor services
                </li>
                <li id="personal-coaching-list-element2">
                  • Functional fitness and HIIT coaching
                </li>
                <li id="personal-coaching-list-element3">
                  • Master of your schedule
                </li>
                <li id="personal-coaching-list-element4">
                  • Progress documentaion
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-teal-900/30 via-card/30 to-emerald-900/30 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Users className="h-6 w-6 text-teal-400" />
                <h3
                  id="travel-buddy-title"
                  className="text-lg font-semibold text-teal-200"
                >
                  Travel Buddy
                </h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li id="travel-buddy-list-element1">
                  • Have fun: I am also a human
                </li>
                <li id="travel-buddy-list-element2">• Trip documentaion</li>
                <li id="travel-buddy-list-element3">
                  • Organization of general activities
                </li>
                <li id="travel-buddy-list-element4">
                  • Sharing expenses of daily needs
                </li>
              </ul>
            </div>
            {/* 
            <div className="bg-gradient-to-br from-emerald-900/35 via-card/35 to-blue-900/35 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="h-6 w-6 text-emerald-400" />
                <h3 id="trip-planning-title" className="text-lg font-semibold text-emerald-200">
                  Trip Planning
                </h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li id="trip-planning-list-element1">• Optimal timing recommendations</li>
                <li id="trip-planning-list-element2">• Itinerary development</li>
                <li id="trip-planning-list-element3">• Budget planning and optimization</li>
                <li id="trip-planning-list-element4">• Equipment rental coordination</li>
                <li id="trip-planning-list-element5">• Travel insurance guidance</li>
              </ul>
            </div> */}

            {/* <div className="bg-gradient-to-br from-blue-900/40 via-card/40 to-cyan-900/40 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Camera className="h-6 w-6 text-blue-400" />
                <h3 id="documentation-title" className="text-lg font-semibold text-blue-200">
                  Documentation
                </h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li id="documentation-list-element1">• Professional photo sessions</li>
                <li id="documentation-list-element2">• Video documentation of progress</li>
                <li id="documentation-list-element3">• Drone footage coordination</li>
                <li id="documentation-list-element4">• Social media content creation</li>
                <li id="documentation-list-element5">• Trip memory preservation</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-cyan-900/45 via-card/45 to-teal-900/45 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Compass className="h-6 w-6 text-cyan-400" />
                <h3 id="adventure-guidance-title" className="text-lg font-semibold text-cyan-200">
                  Adventure Guidance
                </h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li id="adventure-guidance-list-element1">• Safety protocols for new locations</li>
                <li id="adventure-guidance-list-element2">• Local emergency contacts</li>
                <li id="adventure-guidance-list-element3">• Cultural sensitivity training</li>
                <li id="adventure-guidance-list-element4">• Equipment transportation tips</li>
                <li id="adventure-guidance-list-element5">• Travel logistics support</li>
              </ul>
            </div> */}
          </div>

          {/* Contact Section */}
          <div className="text-center">
            <p
              id="travel-services-contact"
              className="text-xl text-white/90 mb-8 max-w-6xl mx-auto"
            >
              Let's create an unforgettable experience together. I provide you
              what is neccessary for it. Only the booking is yours. Is anything
              missing? We find a solution. It all starts here:
            </p>
            <Link
              href={generateContactHref("/kite/freelancer/travel-services")}
              target="_blank"
            >
              <Button
                size="lg"
                className="group bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                id="contact-button"
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
