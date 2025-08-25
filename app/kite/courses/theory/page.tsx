import Image from "next/image";
import background_image_darker from "@/public/images/background_image_darker.jpeg";
import kite_hero_image from "@/public/images/kite_hero_image.jpg";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ArrowLeft,
  LibraryBig,
  Wind,
  Zap,
  Shield,
  Compass,
  BookOpen,
  TriangleAlert,
  PackagePlus,
  Unplug,
} from "lucide-react";

import { PAGE_METADATA } from "@/lib/constants/metadata";
import { generateContactHref } from "@/lib/utils/contact-filler";
import { Hero } from "@/components/sections/Hero";

export const metadata = PAGE_METADATA["kite/courses/theory"];

export default function TheoryPage() {
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
          Kiteboarding Theory Courses
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
              Doing it is nice! But understanding things is the key for
              sustainable progress
            </h2>
            <p className="mt-4 text-lg sm:text-xl text-center text-white/80 max-w-3xl mx-auto leading-relaxed">
              The following is a overview of categories for theory lessons I
              give that are either already part of a course or can be booked
              additionally.
            </p>
            <div className="absolute -bottom-6 sm:-bottom-8 left-1/2 transform -translate-x-1/2 w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-500 via-teal-500 to-emerald-500 rounded-full"></div>
          </div>

          {/* Course Topics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto mb-16">
            <div className="bg-gradient-to-br from-cyan-900/20 via-card/20 to-teal-900/20 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <TriangleAlert className="h-6 w-6 text-cyan-400" />
                <h3 className="text-lg font-semibold text-cyan-200">
                  Rider Essentials
                </h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li>
                  • Behaviour on and around the water: Concepts like karma and
                  the right of way
                </li>
                <li>
                  • Concepts to understand wind: Where it comes from and how you
                  can use it
                </li>
                <li>
                  • Self management and routines: Learn to educate yourself
                </li>
                <li>
                  • General (sailing and Navigation) terminology and expressions
                </li>
                <li>• Steps to become more independent</li>
                <li>• Common mistakes and how to avoid them</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-teal-900/25 via-card/25 to-emerald-900/25 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <PackagePlus className="h-6 w-6 text-teal-400" />
                <h3 className="text-lg font-semibold text-teal-200">
                  Advanced Theory
                </h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li>• What makes you ride: Concepts of forces and angels</li>
                <li>
                  • More physics: What are aerodynamics and what wind really is
                  and where it comes from
                </li>
                <li>
                  • Overview and details to used materials such boards,
                  wetsuites or kites
                </li>
                <li>• How do tricks and maneuvers work: A brake down</li>
                <li>
                  • Next steps in kiteboarding: Additional exercises, lifestyle
                  and nutrition
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-emerald-900/30 via-card/30 to-blue-900/30 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Unplug className="h-6 w-6 text-emerald-400" />
                <h3 className="text-lg font-semibold text-emerald-200">
                  Environmental Stuff
                </h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li>
                  • Environmental influences like what is weather and how you
                  can learn to use it to your advantage
                </li>
                <li>
                  • We are not alone: Learn about the ecosystems where you
                  perfom your sport. Do you know that birds can die because of
                  you?
                </li>
                <li>
                  • Kiteboarding on society level: How can you join an
                  organisation to serve a higher purpose related to kiteboarding
                </li>
                <li>
                  • Laws, regulations and good habits that must be considered
                  when leaving the comfort zone
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center">
            <p className="text-xl text-white/90 mb-8 max-w-6xl mx-auto">
              "A course is good if both, the student and the teacher, learn from
              each other". Combine my services as you please and benefit from an
              individual discount. Something is not listed? I´m always open to
              research something and bring it to you.
            </p>
            <Link
              href={generateContactHref("/kite/courses/theory")}
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