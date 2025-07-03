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
} from "lucide-react";

export default function StartingPage() {
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
            alt="Starting Courses"
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
            (Re-)Starting Your Kite Journey
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
              Begin or Rediscover Your Passion
            </h2>
            <p className="mt-4 text-lg sm:text-xl text-center text-white/80 max-w-3xl mx-auto leading-relaxed">
              Whether you're taking your first steps or returning after a break
              - build confidence on the water
            </p>
            <div className="absolute -bottom-6 sm:-bottom-8 left-1/2 transform -translate-x-1/2 w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-500 via-teal-500 to-emerald-500 rounded-full"></div>
          </div>

          {/* Course Types Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            {/* Beginner Courses */}
            <div className="bg-gradient-to-br from-cyan-900/20 via-card/20 to-teal-900/20 backdrop-blur-sm p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <CirclePlay className="h-7 w-7 text-cyan-400" />
                <h3 className="text-xl font-bold text-cyan-200">
                  Complete Beginner Courses
                </h3>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                    <Target className="h-5 w-5 text-cyan-400" />
                    Foundation Skills
                  </h4>
                  <ul className="text-white/80 space-y-2 text-sm">
                    <li>• Wind theory and safety basics</li>
                    <li>• Equipment familiarization</li>
                    <li>• Kite control on land</li>
                    <li>• Body dragging techniques</li>
                    <li>• Water start fundamentals</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                    <Clock className="h-5 w-5 text-cyan-400" />
                    Course Structure
                  </h4>
                  <ul className="text-white/80 space-y-2 text-sm">
                    <li>• 3-5 day intensive programs</li>
                    <li>• Flexible scheduling options</li>
                    <li>• Small group or individual lessons</li>
                    <li>• All equipment included</li>
                    <li>• Progress tracking and certification</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Restart Courses */}
            <div className="bg-gradient-to-br from-teal-900/25 via-card/25 to-emerald-900/25 backdrop-blur-sm p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <RotateCcw className="h-7 w-7 text-teal-400" />
                <h3 className="text-xl font-bold text-teal-200">
                  Restart Programs
                </h3>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                    <Heart className="h-5 w-5 text-teal-400" />
                    Confidence Building
                  </h4>
                  <ul className="text-white/80 space-y-2 text-sm">
                    <li>• Skills assessment and refresher</li>
                    <li>• Updated safety protocols</li>
                    <li>• Modern equipment introduction</li>
                    <li>• Technique refinement</li>
                    <li>• Gradual progression planning</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                    <Users className="h-5 w-5 text-teal-400" />
                    Personalized Approach
                  </h4>
                  <ul className="text-white/80 space-y-2 text-sm">
                    <li>• Individual skill evaluation</li>
                    <li>• Customized lesson plans</li>
                    <li>• Addressing specific concerns</li>
                    <li>• Mental barriers support</li>
                    <li>• Goal-oriented progression</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center">
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Ready to start or restart your kiteboarding journey? Let's build
              your confidence and skills on the water.
            </p>
            <Link
              href="/contact?subject=Starting/Restarting Kiteboarding Course Inquiry&message=Hello Kite-Engineer,%0A%0AI'm interested in your starting/restarting courses. Please provide information about:%0A%0A- Course options and scheduling%0A- Pricing and duration%0A- Equipment and safety measures%0A- Location and conditions%0A%0AMy situation:%0A[Please describe if you're a complete beginner or returning after a break, your previous experience, physical fitness level, and any specific concerns or goals]%0A%0AExcited to get started!"
              target="_blank"
            >
              <Button
                size="lg"
                className="group bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-700 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
