import Image from "next/image";
import background_image_darker from "@/public/images/background_image_darker.jpeg";
import engineer_hero_image from "@/public/images/engineer_hero_image.jpg";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ArrowLeft,
  Share2,
  GitBranch,
  Users,
  FileText,
} from "lucide-react";

export default function DocumentationPage() {
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
            alt="Documentation & Sharing"
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
            Documentation & Sharing Services
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
              Create Team Synergies
            </h2>
            <p className="mt-4 text-lg sm:text-xl text-center text-white/80 max-w-3xl mx-auto leading-relaxed">
              Modern version control and data sharing to unlock your team's
              collaborative potential
            </p>
            <div className="absolute -bottom-6 sm:-bottom-8 left-1/2 transform -translate-x-1/2 w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-500 via-teal-500 to-emerald-500 rounded-full"></div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto mb-16">
            <div className="bg-gradient-to-br from-teal-900/20 via-card/20 to-emerald-900/20 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <GitBranch className="h-6 w-6 text-teal-400" />
                <h3 className="text-lg font-semibold text-teal-200">
                  Version Control
                </h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li>• Git-based version control setup</li>
                <li>• Branching strategy development</li>
                <li>• Document versioning systems</li>
                <li>• Change history tracking</li>
                <li>• Conflict resolution procedures</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-emerald-900/25 via-card/25 to-blue-900/25 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Share2 className="h-6 w-6 text-emerald-400" />
                <h3 className="text-lg font-semibold text-emerald-200">
                  Collaborative Workspace
                </h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li>• Shared workspace configuration</li>
                <li>• Cloud-based collaboration tools</li>
                <li>• Real-time editing capabilities</li>
                <li>• Access control and permissions</li>
                <li>• Cross-platform compatibility</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-900/30 via-card/30 to-cyan-900/30 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="h-6 w-6 text-blue-400" />
                <h3 className="text-lg font-semibold text-blue-200">
                  Knowledge Management
                </h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li>• Knowledge base development</li>
                <li>• Documentation standards</li>
                <li>• Information architecture design</li>
                <li>• Search and retrieval optimization</li>
                <li>• Knowledge retention strategies</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-cyan-900/35 via-card/35 to-teal-900/35 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Users className="h-6 w-6 text-cyan-400" />
                <h3 className="text-lg font-semibold text-cyan-200">
                  Team Synergy
                </h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li>• Collaboration workflow design</li>
                <li>• Communication protocol development</li>
                <li>• Team integration strategies</li>
                <li>• Cross-functional coordination</li>
                <li>• Collaborative culture building</li>
              </ul>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center">
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Ready to enhance team collaboration? Let's implement modern
              documentation and sharing systems.
            </p>
            <Link
              href="/contact?subject=Documentation & Sharing Services Inquiry&message=Hello Kite-Engineer,%0A%0AI'm interested in your documentation and sharing services. Please provide information about version control and collaborative workspaces.%0A%0AMy requirements:%0A[Please describe your current documentation challenges and team collaboration needs]%0A%0ABest regards"
              target="_blank"
            >
              <Button
                size="lg"
                className="group bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Enhance Your Collaboration
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
