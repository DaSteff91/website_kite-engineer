import Image from "next/image";
import background_image_darker from "@/public/images/background_image_darker.jpeg";
import kite_hero_image from "@/public/images/kite_hero_image.jpg";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ArrowLeft,
  CirclePlay,
  Heart,
  RotateCcw,
  Target,
  Users,
  Clock,
  ListCheck,
  UserRoundSearch,
} from "lucide-react";
import { PAGE_METADATA } from "@/lib/constants/metadata";
import { generateContactHref } from "@/lib/utils/contact-filler";
import { Hero } from "@/components/sections/Hero";

export const metadata = PAGE_METADATA["kite/courses/starting"];

export default function StartingPage() {
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
          className="pb-1 text-4xl md:text-5xl font-bold mb-6 
           bg-gradient-to-r from-white via-gray-200 to-gray-300 
           bg-clip-text text-transparent 
           [text-shadow:0_0_8px_rgba(209,213,219,0.6)]"
        >
          (Re-)Starter Courses
        </h1>
      </Hero>

      {/* Content Section */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          {/* Back Navigation */}
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
              Everything is starting somewhen. Or starting again?
            </h2>
            <p className="mt-4 text-lg sm:text-xl text-center text-white/80 max-w-3xl mx-auto leading-relaxed">
              It´s about committing oneself to make the necessary steps:
              Deciding to (re-)start something and not just dreaming about is
              the first. For the ones to come I have the following flexible
              course service available:
            </p>
            <div className="absolute -bottom-6 sm:-bottom-8 left-1/2 transform -translate-x-1/2 w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-500 via-teal-500 to-emerald-500 rounded-full"></div>
          </div>

          {/* Course Topics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto mb-16">
            <div className="bg-gradient-to-br from-cyan-900/20 via-card/20 to-teal-900/20 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <UserRoundSearch className="h-6 w-6 text-cyan-400" />
                <h3 className="text-lg font-semibold text-cyan-200">Who?</h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li>• Individuals or groups</li>
                <li>• Schools or private</li>
                <li>• Courses in German, English and Portugues</li>
                <li>• Practical lessons: max. 4 people</li>
                <li>• Theory lessons: max. 30 people</li>
                <li>• No age limits but more then 30kg of weight</li>
                <li>
                  • Must be able to swim securely for more then a few minutes
                </li>
                <li>• Starter = You never used a kite before in your life</li>
                <li>• Restarter = You used a kite before in your life</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-teal-900/25 via-card/25 to-emerald-900/25 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <ListCheck className="h-6 w-6 text-teal-400" />
                <h3 className="text-lg font-semibold text-teal-200">Content</h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li>• Introduction and safety basics</li>
                <li>• Equipment familiarization and setup</li>
                <li>• Basic kite control witout board</li>
                <li>• Body dragging techniques</li>
                <li>• Advanced kite steering techniques</li>
                <li>• Water start fundamentals and first few meters</li>
                <li>• Theory lessons when necessary</li>
                <li>• Orientation on the water and dangers</li>
                <li>
                  • Student can safely practise water starts on their own after
                  the course
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-emerald-900/30 via-card/30 to-blue-900/30 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="h-6 w-6 text-emerald-400" />
                <h3 className="text-lg font-semibold text-emerald-200">
                  Structure
                </h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li>• Up to 5 days intensive programs</li>
                <li>
                  • Flexible scheduling options, based on environmental and
                  personal conditions
                </li>
                <li>• Buddy system: 2 people per Kite</li>
                <li>• Individual: 1 person, 1 Kite</li>
                <li>• Supervision-only format possible</li>
                <li>• If available: Headset and video support</li>
                <li>• Progress tracking and VDWS certification</li>
                <li>
                  • No-wind alternatives: Simulations, wakeboarding,
                  landboarding, SUP, exercising,....
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center">
            <p className="text-xl text-white/90 mb-8 max-w-6xl mx-auto">
              There are many things to consider when giving courses but nothing
              that can´t be arranged. Drop me a message and we´ll organize all
              the details.
            </p>
            <Link
              href={generateContactHref("/kite/courses/starting")}
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