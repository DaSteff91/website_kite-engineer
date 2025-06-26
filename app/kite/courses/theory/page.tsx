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
} from "lucide-react";

export default function TheoryPage() {
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
          <Image
            src={kite_hero_image}
            alt="Theory Courses"
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
            Kiteboarding Theory Courses
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
              Understanding the Science Behind the Sport
            </h2>
            <p className="mt-4 text-lg sm:text-xl text-center text-white/80 max-w-3xl mx-auto leading-relaxed">
              From wind dynamics to material technology - master the theory that
              makes you a better kiter
            </p>
            <div className="absolute -bottom-6 sm:-bottom-8 left-1/2 transform -translate-x-1/2 w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-500 via-teal-500 to-emerald-500 rounded-full"></div>
          </div>

          {/* Course Topics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto mb-16">
            <div className="bg-gradient-to-br from-cyan-900/20 via-card/20 to-teal-900/20 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Wind className="h-6 w-6 text-cyan-400" />
                <h3 className="text-lg font-semibold text-cyan-200">
                  Wind Dynamics
                </h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li>• Wind window theory and application</li>
                <li>• Apparent vs. true wind concepts</li>
                <li>• Thermal and gradient winds</li>
                <li>• Offshore vs. onshore conditions</li>
                <li>• Wind forecasting and interpretation</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-teal-900/25 via-card/25 to-emerald-900/25 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="h-6 w-6 text-teal-400" />
                <h3 className="text-lg font-semibold text-teal-200">
                  Kite Aerodynamics
                </h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li>• Lift and drag principles</li>
                <li>• Angle of attack optimization</li>
                <li>• Kite design and performance</li>
                <li>• Aspect ratio effects</li>
                <li>• Depower systems and mechanics</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-emerald-900/30 via-card/30 to-blue-900/30 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <LibraryBig className="h-6 w-6 text-emerald-400" />
                <h3 className="text-lg font-semibold text-emerald-200">
                  Material Science
                </h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li>• Kite fabric properties and durability</li>
                <li>• Line materials and characteristics</li>
                <li>• Board construction techniques</li>
                <li>• Hardware and component analysis</li>
                <li>• Maintenance and longevity factors</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-900/35 via-card/35 to-cyan-900/35 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="h-6 w-6 text-blue-400" />
                <h3 className="text-lg font-semibold text-blue-200">
                  Safety Systems
                </h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li>• Safety release mechanisms</li>
                <li>• Backup safety protocols</li>
                <li>• Risk assessment principles</li>
                <li>• Emergency procedures</li>
                <li>• Equipment inspection standards</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-cyan-900/40 via-card/40 to-teal-900/40 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Compass className="h-6 w-6 text-cyan-400" />
                <h3 className="text-lg font-semibold text-cyan-200">
                  Navigation & Rules
                </h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li>• Right of way rules</li>
                <li>• International sailing regulations</li>
                <li>• Local area restrictions</li>
                <li>• Environmental considerations</li>
                <li>• Etiquette and best practices</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-teal-900/45 via-card/45 to-emerald-900/45 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="h-6 w-6 text-teal-400" />
                <h3 className="text-lg font-semibold text-teal-200">
                  Physics of Motion
                </h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li>• Force vectors and balance</li>
                <li>• Momentum and energy transfer</li>
                <li>• Hydrodynamics and board design</li>
                <li>• Jump mechanics and trajectory</li>
                <li>• Trick physics and execution</li>
              </ul>
            </div>
          </div>

          {/* Course Formats */}
          <div className="bg-gradient-to-br from-cyan-900/15 via-card/15 to-teal-900/15 backdrop-blur-sm p-6 sm:p-8 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] max-w-4xl mx-auto mb-16">
            <h3 className="text-xl sm:text-2xl font-bold mb-6 text-center text-cyan-200">
              Course Formats Available
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-cyan-500/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <LibraryBig className="h-6 w-6 text-cyan-300" />
                </div>
                <h4 className="font-semibold text-white mb-3">
                  Interactive Workshops
                </h4>
                <p className="text-white/80 text-sm leading-relaxed">
                  Hands-on learning with visual aids, demonstrations, and
                  practical exercises to understand complex concepts.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-teal-500/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-6 w-6 text-teal-300" />
                </div>
                <h4 className="font-semibold text-white mb-3">
                  Personalized Sessions
                </h4>
                <p className="text-white/80 text-sm leading-relaxed">
                  One-on-one theory sessions tailored to your specific interests
                  and learning pace.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-emerald-500/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <Wind className="h-6 w-6 text-emerald-300" />
                </div>
                <h4 className="font-semibold text-white mb-3">
                  On-Site Analysis
                </h4>
                <p className="text-white/80 text-sm leading-relaxed">
                  Real-world application of theory at your local kite spot with
                  practical demonstrations.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center">
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Ready to deepen your understanding of kiteboarding? Let's explore
              the fascinating science behind the sport.
            </p>
            <Link href="/contact?subject=Kiteboarding Theory Course Inquiry&message=Hello Kite-Engineer,%0A%0AI'm interested in your theory courses. I'd like to learn more about:%0A%0A- Available course topics and formats%0A- Scheduling and duration options%0A- Personalized vs. group sessions%0A- Pricing and course materials%0A%0AMy background and interests:%0A[Please describe your current kiteboarding experience, specific theory topics you're interested in, and preferred learning format]%0A%0ALooking forward to expanding my knowledge!">
              <Button
                size="lg"
                className="group bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-700 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Start Learning Theory
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
