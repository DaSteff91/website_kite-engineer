import Image from "next/image";
import background_image_darker from "@/public/images/background_image_darker.jpeg";
import kite_hero_image from "@/public/images/kite_hero_image.jpg";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, School, Users, Clock, MapPin, Award, Shield } from "lucide-react";

export default function SchoolSupportPage() {
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
            alt="School Support"
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
            School Support Services
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          {/* Back Navigation */}
          <div className="mb-8">
            <Link 
              href="/kite/freelancer" 
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Freelancer Services
            </Link>
          </div>

          <div className="relative mb-16 sm:mb-20">
            <h2
              className="text-xl sm:text-2xl md:text-3xl font-bold text-center max-w-4xl mx-auto leading-relaxed 
   bg-[linear-gradient(to_right,white,rgba(229,231,235,0.8),rgba(209,213,219,1))] 
   bg-clip-text text-transparent animate-gradient"
            >
              Professional Kite School Support
            </h2>
            <p className="mt-4 text-lg sm:text-xl text-center text-white/80 max-w-3xl mx-auto leading-relaxed">
              VDWS-certified instructor ready to support your kite school operations
            </p>
            <div className="absolute -bottom-6 sm:-bottom-8 left-1/2 transform -translate-x-1/2 w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-500 via-teal-500 to-emerald-500 rounded-full"></div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto mb-16">
            <div className="bg-gradient-to-br from-blue-900/20 via-card/20 to-cyan-900/20 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <School className="h-6 w-6 text-blue-400" />
                <h3 className="text-lg font-semibold text-blue-200">Instruction Services</h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li>• VDWS certified instructor</li>
                <li>• Beginner to advanced lessons</li>
                <li>• Safety-focused teaching approach</li>
                <li>• Multi-language support (German, English, Portuguese)</li>
                <li>• Group and individual sessions</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-cyan-900/25 via-card/25 to-teal-900/25 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Users className="h-6 w-6 text-cyan-400" />
                <h3 className="text-lg font-semibold text-cyan-200">Shop Assistance</h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li>• Customer service and sales support</li>
                <li>• Equipment recommendations</li>
                <li>• Gear maintenance advice</li>
                <li>• Inventory management assistance</li>
                <li>• Product demonstrations</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-teal-900/30 via-card/30 to-emerald-900/30 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="h-6 w-6 text-teal-400" />
                <h3 className="text-lg font-semibold text-teal-200">Beach Management</h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li>• Beach setup and organization</li>
                <li>• Safety area management</li>
                <li>• Equipment handling and storage</li>
                <li>• Weather condition assessment</li>
                <li>• Emergency response protocols</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-emerald-900/35 via-card/35 to-blue-900/35 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="h-6 w-6 text-emerald-400" />
                <h3 className="text-lg font-semibold text-emerald-200">Flexible Scheduling</h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li>• Seasonal support available</li>
                <li>• Weekend and holiday coverage</li>
                <li>• Short-term and long-term contracts</li>
                <li>• Peak season reinforcement</li>
                <li>• Emergency staff replacement</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-900/40 via-card/40 to-cyan-900/40 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Award className="h-6 w-6 text-blue-400" />
                <h3 className="text-lg font-semibold text-blue-200">Certifications</h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li>• VDWS instructor certification</li>
                <li>• First aid certified</li>
                <li>• Water safety trained</li>
                <li>• Insurance coverage available</li>
                <li>• Professional liability protection</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-cyan-900/45 via-card/45 to-teal-900/45 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="h-6 w-6 text-cyan-400" />
                <h3 className="text-lg font-semibold text-cyan-200">Safety Focus</h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li>• Risk assessment and management</li>
                <li>• Safety equipment inspection</li>
                <li>• Weather monitoring and alerts</li>
                <li>• Emergency action plans</li>
                <li>• Student safety protocols</li>
              </ul>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center">
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Ready to enhance your kite school operations? Let's discuss how I can support your team.
            </p>
            <Link href="/contact?subject=School Support Services Inquiry&message=Hello Kite-Engineer,%0A%0AI'm interested in your school support services. Please provide more details about:%0A%0A- Available services and pricing%0A- Scheduling and availability%0A- Certification and insurance coverage%0A- Experience with similar operations%0A%0AMy school details:%0A[Please describe your kite school, location, typical season, and specific support needs]%0A%0ABest regards">
              <Button
                size="lg"
                className="group bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get Your Quote
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}