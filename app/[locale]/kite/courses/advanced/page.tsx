import Image from "next/image";
import background_image_darker from "@/public/images/background_image_darker.jpeg";
import kite_hero_image from "@/public/images/kite_hero_image.jpg";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ArrowLeft,
  Clock,
  ListCheck,
  UserRoundSearch,
} from "lucide-react";
import { generateContactHref } from "@/lib/utils/contact-filler";
import { PAGE_METADATA } from "@/lib/constants/metadata";
import { Hero } from "@/components/sections/Hero";

export const metadata = PAGE_METADATA["kite/courses/advanced"];

export default function AdvancedPage() {
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
        <h1 id="advanced-hero"
          className="pb-1 text-4xl md:text-5xl font-bold mb-6 
           bg-gradient-to-r from-white via-gray-200 to-gray-300 
           bg-clip-text text-transparent 
           [text-shadow:0_0_8px_rgba(209,213,219,0.6)]"
        >
          Advanced Kiteboarding Courses
        </h1>
      </Hero>

      {/* Content Section */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Link
              href="/kite"
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
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
              After the first step comes the next. And then the next...
            </h2>
            <p className="mt-4 text-lg sm:text-xl text-center text-white/80 max-w-3xl mx-auto leading-relaxed">
              Why does that look so easy what they are doing on the water? There
              is plenty to learn and my services are meant to support along the
              way:
            </p>
            <div className="absolute -bottom-6 sm:-bottom-8 left-1/2 transform -translate-x-1/2 w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-500 via-teal-500 to-emerald-500 rounded-full"></div>
          </div>

          {/* Course Topics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto mb-16">
            <div className="bg-gradient-to-br from-cyan-900/20 via-card/20 to-teal-900/20 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <UserRoundSearch className="h-6 w-6 text-cyan-400" />
                <h3 id="who-title" className="text-lg font-semibold text-cyan-200">Who?</h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li id="who-list-element1">• Individuals or groups</li>
                <li id="who-list-element2">• Schools or private</li>
                <li id="who-list-element3">• Courses in German, English and Portugues</li>
                <li id="who-list-element4">• Practical lessons: max. 4 people</li>
                <li id="who-list-element5">• Theory lessons: max. 30 people</li>
                <li id="who-list-element6">• No age limits but more then 30kg of weight</li>
                <li id="who-list-element7">
                  • Must be able to swim securely for more then a few minutes
                </li>
                <li id="who-list-element8">
                  • Advanced = You are confidently and reproducible riding after
                  the waterstart
                </li>
                <li id="who-list-element9">
                  • Sorry, I can´t make someone a "King Of The Air" athlete. But
                  I teach some cool tricks, sure
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-teal-900/25 via-card/25 to-emerald-900/25 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <ListCheck className="h-6 w-6 text-teal-400" />
                <h3 id="possible-content-title" className="text-lg font-semibold text-teal-200">
                  Possible Content
                </h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li id="possible-content-list-element1">• Develop routines to support your training</li>
                <li id="possible-content-list-element2">
                  • Material modifications like changing board stances or
                  testing different line setups
                </li>
                <li id="possible-content-list-element3">• Learning new tricks in a save and guided environment</li>
                <li id="possible-content-list-element4">• Individualize your own style and get filmed</li>
                <li id="possible-content-list-element5">• Feedback and optimizations on current riding</li>
                <li id="possible-content-list-element6">• How to be a kite-buddy for less experienced</li>
                <li id="possible-content-list-element7">• Advanced theory that goes beyond the wind window</li>
                <li id="possible-content-list-element8">• Practising accident scenarios and self rescue</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-emerald-900/30 via-card/30 to-blue-900/30 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="h-6 w-6 text-emerald-400" />
                <h3 id="structure-title" className="text-lg font-semibold text-emerald-200">
                  Structure
                </h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li id="structure-list-element1">• Up to 5 days intensive programs</li>
                <li id="structure-list-element2">
                  • Flexible scheduling options, based on environmental and
                  personal conditions
                </li>
                <li id="structure-list-element3">• Buddy system: 2 people per Kite</li>
                <li id="structure-list-element4">• Individual: 1 person, 1 Kite</li>
                <li id="structure-list-element5">• Supervision-only format possible</li>
                <li id="structure-list-element6">• If available: Headset and video support</li>
                <li id="structure-list-element7">• Progress tracking and VDWS certification</li>
                <li id="structure-list-element8">
                  • No-wind alternatives: Simulations, wakeboarding,
                  landboarding, SUP, exercising,....
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center">
            <p id="advanced-contact" className="text-xl text-white/90 mb-8 max-w-6xl mx-auto">
              There are many things to consider when giving courses but nothing
              that can´t be arranged. Drop me a message and we´ll organize all
              the details.
            </p>
            <Link
              href={generateContactHref("/kite/courses/advanced")}
              target="_blank"
            >
              <Button
                size="lg"
                className="group bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-700 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl"
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
