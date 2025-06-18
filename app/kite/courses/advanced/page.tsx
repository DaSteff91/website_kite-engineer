import Image from "next/image";
import background_image_darker from "@/public/images/background_image_darker.jpeg";
import kite_hero_image from "@/public/images/kite_hero_image.jpg";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, ArrowBigUpDash, Zap, Trophy, Camera, Wind, Target } from "lucide-react";

export default function AdvancedPage() {
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
            alt="Advanced Courses"
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
            Advanced Kiteboarding Courses
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          {/* Back Navigation */}
          <div className="mb-8">
            <Link 
              href="/kite/courses" 
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Courses
            </Link>
          </div>

          <div className="relative mb-16 sm:mb-20">
            <h2
              className="text-xl sm:text-2xl md:text-3xl font-bold text-center max-w-4xl mx-auto leading-relaxed 
   bg-[linear-gradient(to_right,white,rgba(229,231,235,0.8),rgba(209,213,219,1))] 
   bg-clip-text text-transparent animate-gradient"
            >
              Push Your Limits Safely
            </h2>
            <p className="mt-4 text-lg sm:text-xl text-center text-white/80 max-w-3xl mx-auto leading-relaxed">
              From first toeside rides to nailing loops - take your skills to the next level
            </p>
            <div className="absolute -bottom-6 sm:-bottom-8 left-1/2 transform -translate-x-1/2 w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-500 via-teal-500 to-emerald-500 rounded-full"></div>
          </div>

          {/* Advanced Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto mb-16">
            <div className="bg-gradient-to-br from-cyan-900/20 via-card/20 to-teal-900/20 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <ArrowBigUpDash className="h-6 w-6 text-cyan-400" />
                <h3 className="text-lg font-semibold text-cyan-200">Jumping & Airtime</h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li>• Controlled jumping techniques</li>
                <li>• Landing optimization</li>
                <li>• Airtime extension methods</li>
                <li>• Boost and send techniques</li>
                <li>• Safety in high jumps</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-teal-900/25 via-card/25 to-emerald-900/25 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="h-6 w-6 text-teal-400" />
                <h3 className="text-lg font-semibold text-teal-200">Freestyle Tricks</h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li>• Basic unhooked riding</li>
                <li>• Handle passes and rotations</li>
                <li>• Kiteloops and megaloop progression</li>
                <li>• Wakestyle fundamentals</li>
                <li>• Advanced trick combinations</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-emerald-900/30 via-card/30 to-blue-900/30 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Wind className="h-6 w-6 text-emerald-400" />
                <h3 className="text-lg font-semibold text-emerald-200">Toeside Mastery</h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li>• Toeside riding fundamentals</li>
                <li>• Transition techniques</li>
                <li>• Toeside jumping progression</li>
                <li>• Switch stance development</li>
                <li>• Blind and wrapped riding</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-900/35 via-card/35 to-cyan-900/35 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Trophy className="h-6 w-6 text-blue-400" />
                <h3 className="text-lg font-semibold text-blue-200">Competition Prep</h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li>• Contest strategy and tactics</li>
                <li>• Judging criteria understanding</li>
                <li>• Performance optimization</li>
                <li>• Mental preparation techniques</li>
                <li>• Equipment tuning for competition</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-cyan-900/40 via-card/40 to-teal-900/40 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Camera className="h-6 w-6 text-cyan-400" />
                <h3 className="text-lg font-semibold text-cyan-200">Video Analysis</h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li>• Professional video documentation</li>
                <li>• Slow-motion technique analysis</li>
                <li>• Progress tracking and comparison</li>
                <li>• Drone footage sessions</li>
                <li>• Social media content creation</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-teal-900/45 via-card/45 to-emerald-900/45 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Target className="h-6 w-6 text-teal-400" />
                <h3 className="text-lg font-semibold text-teal-200">Supervised Sessions</h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li>• Safety-focused progression</li>
                <li>• Real-time coaching and feedback</li>
                <li>• Risk management guidance</li>
                <li>• Confidence building approach</li>
                <li>• Personalized skill development</li>
              </ul>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center">
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Ready to push your limits and master advanced kiteboarding skills? Let's take your riding to the next level safely.
            </p>
            <Link href="/contact?subject=Advanced Kiteboarding Course Inquiry&message=Hello Kite-Engineer,%0A%0AI'm interested in your advanced courses. Please provide information about:%0A%0A- Available advanced skills and progression levels%0A- Coaching methods and safety protocols%0A- Video documentation options%0A- Scheduling and pricing%0A%0AMy current level and goals:%0A[Please describe your current kiteboarding skills, specific tricks or techniques you want to learn, competition interests, and any particular goals or challenges]%0A%0AReady to send it safely!">
              <Button
                size="lg"
                className="group bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-700 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Push Your Limits
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}