import Image from "next/image";
import background_image_darker from "@/public/images/background_image_darker.jpeg";
import engineer_hero_image from "@/public/images/engineer_hero_image.jpg";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ArrowLeft,
  Navigation2Off,
  FileText,
  Users,
  AlertTriangle,
} from "lucide-react";

export default function DeviationManagementPage() {
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
            src={engineer_hero_image}
            alt="Deviation Management"
            fill
            className="object-cover object-[center_20%] brightness-50"
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
            Deviation Management Services
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          {/* Back Navigation */}
          <div className="mb-8">
            <Link
              href="/engineer"
              className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to All Engineering Services
            </Link>
          </div>

          <div className="relative mb-16 sm:mb-20">
            <h2
              className="text-xl sm:text-2xl md:text-3xl font-bold text-center max-w-4xl mx-auto leading-relaxed 
   bg-[linear-gradient(to_right,white,rgba(229,231,235,0.8),rgba(209,213,219,1))] 
   bg-clip-text text-transparent animate-gradient"
            >
              Navigate Unexpected Detours
            </h2>
            <p className="mt-4 text-lg sm:text-xl text-center text-white/80 max-w-3xl mx-auto leading-relaxed">
              Professional communication and management of project deviations
              with external parties
            </p>
            <div className="absolute -bottom-6 sm:-bottom-8 left-1/2 transform -translate-x-1/2 w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-500 via-teal-500 to-emerald-500 rounded-full"></div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto mb-16">
            <div className="bg-gradient-to-br from-emerald-900/20 via-card/20 to-blue-900/20 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Navigation2Off className="h-6 w-6 text-emerald-400" />
                <h3 className="text-lg font-semibold text-emerald-200">
                  Change Request Management
                </h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li>• Deviation documentation</li>
                <li>• Impact assessment</li>
                <li>• Change request preparation</li>
                <li>• Approval workflow management</li>
                <li>• Implementation tracking</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-900/25 via-card/25 to-cyan-900/25 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Users className="h-6 w-6 text-blue-400" />
                <h3 className="text-lg font-semibold text-blue-200">
                  Stakeholder Communication
                </h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li>• Expectation management</li>
                <li>• Communication strategy development</li>
                <li>• External party negotiations</li>
                <li>• Presentation preparation</li>
                <li>• Stakeholder alignment</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-cyan-900/30 via-card/30 to-teal-900/30 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="h-6 w-6 text-cyan-400" />
                <h3 className="text-lg font-semibold text-cyan-200">
                  Recovery Planning
                </h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li>• Recovery strategy development</li>
                <li>• Action plan creation</li>
                <li>• Resource reallocation</li>
                <li>• Timeline adjustment</li>
                <li>• Progress monitoring</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-teal-900/35 via-card/35 to-emerald-900/35 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="h-6 w-6 text-teal-400" />
                <h3 className="text-lg font-semibold text-teal-200">
                  Lessons Learned
                </h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li>• Root cause analysis</li>
                <li>• Deviation documentation</li>
                <li>• Process improvement recommendations</li>
                <li>• Knowledge capture and sharing</li>
                <li>• Preventive measure development</li>
              </ul>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center">
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Ready to manage project deviations? Let's handle unexpected
              changes and get your project back on track.
            </p>
            <Link
              href="/contact?subject=Deviation Management Services Inquiry&message=Hello Kite-Engineer,%0A%0AI'm interested in your deviation management services. Please provide information about change request management and stakeholder communication.%0A%0AMy requirements:%0A[Please describe your current deviation management challenges and external communication needs]%0A%0ABest regards"
              target="_blank"
            >
              <Button
                size="lg"
                className="group bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Connect with me
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
