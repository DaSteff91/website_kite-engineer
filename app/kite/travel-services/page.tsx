import Image from "next/image";
import background_image_darker from "@/public/images/background_image_darker.jpeg";
import kite_hero_image from "@/public/images/kite_hero_image.jpg";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, Plane, MapPin, Calendar, Users, Camera, Compass } from "lucide-react";

export default function TravelServicesPage() {
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
            alt="Travel Services"
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
            Kite Travel Services
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
              Your Perfect Kite Adventure Awaits
            </h2>
            <p className="mt-4 text-lg sm:text-xl text-center text-white/80 max-w-3xl mx-auto leading-relaxed">
              From trip planning to personal coaching - let's create unforgettable kite experiences
            </p>
            <div className="absolute -bottom-6 sm:-bottom-8 left-1/2 transform -translate-x-1/2 w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-500 via-teal-500 to-emerald-500 rounded-full"></div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto mb-16">
            <div className="bg-gradient-to-br from-blue-900/20 via-card/20 to-cyan-900/20 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Plane className="h-6 w-6 text-blue-400" />
                <h3 className="text-lg font-semibold text-blue-200">Trip Organization</h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li>• Complete trip planning and coordination</li>
                <li>• Destination research and selection</li>
                <li>• Accommodation booking</li>
                <li>• Transportation arrangements</li>
                <li>• Local kite school partnerships</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-cyan-900/25 via-card/25 to-teal-900/25 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Users className="h-6 w-6 text-cyan-400" />
                <h3 className="text-lg font-semibold text-cyan-200">Personal Coaching</h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li>• One-on-one instruction during travel</li>
                <li>• Skill development and progression</li>
                <li>• Safety guidance in new locations</li>
                <li>• Equipment setup and maintenance</li>
                <li>• Local spot knowledge sharing</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-teal-900/30 via-card/30 to-emerald-900/30 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="h-6 w-6 text-teal-400" />
                <h3 className="text-lg font-semibold text-teal-200">Destination Expertise</h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li>• Best kite spots worldwide</li>
                <li>• Seasonal wind condition analysis</li>
                <li>• Local culture and customs guidance</li>
                <li>• Hidden gems and secret spots</li>
                <li>• Weather pattern insights</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-emerald-900/35 via-card/35 to-blue-900/35 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="h-6 w-6 text-emerald-400" />
                <h3 className="text-lg font-semibold text-emerald-200">Trip Planning</h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li>• Optimal timing recommendations</li>
                <li>• Itinerary development</li>
                <li>• Budget planning and optimization</li>
                <li>• Equipment rental coordination</li>
                <li>• Travel insurance guidance</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-900/40 via-card/40 to-cyan-900/40 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Camera className="h-6 w-6 text-blue-400" />
                <h3 className="text-lg font-semibold text-blue-200">Documentation</h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li>• Professional photo sessions</li>
                <li>• Video documentation of progress</li>
                <li>• Drone footage coordination</li>
                <li>• Social media content creation</li>
                <li>• Trip memory preservation</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-cyan-900/45 via-card/45 to-teal-900/45 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Compass className="h-6 w-6 text-cyan-400" />
                <h3 className="text-lg font-semibold text-cyan-200">Adventure Guidance</h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li>• Safety protocols for new locations</li>
                <li>• Local emergency contacts</li>
                <li>• Cultural sensitivity training</li>
                <li>• Equipment transportation tips</li>
                <li>• Travel logistics support</li>
              </ul>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center">
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Ready to plan your next kite adventure? Let's create an unforgettable experience together.
            </p>
            <Link href="/contact?subject=Kite Travel Services Inquiry&message=Hello Kite-Engineer,%0A%0AI'm interested in your travel services for an upcoming kite trip. Please provide information about:%0A%0A- Available destinations and timing%0A- Personal coaching options%0A- Trip planning services%0A- Pricing and packages%0A%0AMy travel details:%0A[Please describe your skill level, preferred destinations, travel dates, group size, and specific interests]%0A%0ALooking forward to an amazing adventure!">
              <Button
                size="lg"
                className="group bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Plan Your Adventure
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}