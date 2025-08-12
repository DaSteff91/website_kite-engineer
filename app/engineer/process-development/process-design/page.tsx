import Image from "next/image";
import background_image_darker from "@/public/images/background_image_darker.jpeg";
import engineer_hero_image from "@/public/images/engineer_hero_image.jpg";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ArrowLeft,
  WandSparkles,
  Layout,
  Workflow,
  Eye,
} from "lucide-react";

import { PAGE_METADATA } from "@/lib/constants/metadata";

export const metadata =
  PAGE_METADATA["engineer/process-development/process-design"];

export default function ProcessDesignPage() {
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
            alt="Process Design"
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
            Process Design Services
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
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
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
              Everything is a process.
            </h2>
            <p className="mt-4 text-lg sm:text-xl text-center text-white/80 max-w-3xl mx-auto leading-relaxed">
              Layouting and designing what needs to be done with visualization
              and structured approaches.
            </p>
            <div className="absolute -bottom-6 sm:-bottom-8 left-1/2 transform -translate-x-1/2 w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-500 via-teal-500 to-emerald-500 rounded-full"></div>
          </div>
          {/* Services Grid new*/}
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-6 sm:gap-8 max-w-6xl mx-auto">
              <div className="bg-gradient-to-br from-blue-900/20 via-card/20 to-cyan-900/20 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300 w-full">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 pb-3 border-b border-white/20 flex items-center gap-3 text-blue-200">
                  <Layout className="h-6 w-6 text-teal-400" />
                  Detailes of the Roadmap Services
                </h3>
                <p className="block text-muted-foreground mb-4 sm:mb-6 pl-5 sm:pl-6 pr-4 sm:pr-5 sm:text-base text-sm -mx-4 sm:-mx-6 w-auto">
                  {" "}
                  Ask yourself - what is it that shall be achived in what time.
                  Based on that we work out a specification and then based on
                  that the real work can beginn. And don´t forget to be
                  flexible. Your requirements may change during development. I
                  learned that first hand while working out the roadmap of a
                  chemical despensing system for a wafer separation process for
                  more than one year. In more detail I can help you with the
                  following topics:
                </p>
                <ul className="text-muted-foreground list-disc list-outside pl-4 sm:pl-5 space-y-3 sm:space-y-4 text-sm sm:text-base">
                  <li>
                    Naming conventions: What is best to name your process flows?
                  </li>
                  <li>Vizualisation</li>
                  <li>Scaleablity</li>
                  <li>
                    Documentation: Since everything is now decided, lets put it
                    into effect by applying a timeline to it and rolling it out
                    in your documentation system
                  </li>

                  <li>
                    Review: And in case you already have a roadmap strategy: no
                    problem - I also offer you to analyze it for you and give
                    you an objective 3rd party oppinion.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Services Grid old*/}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto mb-16">
            <div className="bg-gradient-to-br from-cyan-900/20 via-card/20 to-teal-900/20 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <WandSparkles className="h-6 w-6 text-cyan-400" />
                <h3 className="text-lg font-semibold text-cyan-200">
                  Process Flow Optimization
                </h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li>• Process flow mapping and analysis</li>
                <li>• Bottleneck identification and removal</li>
                <li>• Workflow optimization strategies</li>
                <li>• Cycle time reduction techniques</li>
                <li>• Throughput maximization</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-teal-900/25 via-card/25 to-emerald-900/25 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Layout className="h-6 w-6 text-teal-400" />
                <h3 className="text-lg font-semibold text-teal-200">
                  Equipment Layout Design
                </h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li>• Equipment specification and selection</li>
                <li>• Optimal layout configuration</li>
                <li>• Material flow optimization</li>
                <li>• Space utilization efficiency</li>
                <li>• Ergonomic considerations</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-emerald-900/30 via-card/30 to-blue-900/30 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Eye className="h-6 w-6 text-emerald-400" />
                <h3 className="text-lg font-semibold text-emerald-200">
                  Process Visualization
                </h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li>• 3D process modeling</li>
                <li>• Interactive visualization tools</li>
                <li>• Virtual reality walkthroughs</li>
                <li>• Animation and simulation</li>
                <li>• Stakeholder communication aids</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-900/35 via-card/35 to-cyan-900/35 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Workflow className="h-6 w-6 text-blue-400" />
                <h3 className="text-lg font-semibold text-blue-200">
                  Scalability Planning
                </h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li>• Future capacity planning</li>
                <li>• Modular design principles</li>
                <li>• Expansion pathway definition</li>
                <li>• Flexibility and adaptability</li>
                <li>• Technology evolution readiness</li>
              </ul>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center">
            <p className="text-xl text-white/90 mb-8 max-w-6xl mx-auto">
              Ready to design breakthrough processes? Let's break through
              boundaries and create what needs to be done.
            </p>
            <Link
              href="/contact?subject=Process Design Services Inquiry&message=Hello Kite-Engineer,%0A%0AI'm interested in your process design services. Please provide information about process flow optimization and visualization solutions.%0A%0AMy requirements:%0A[Please describe your current process design challenges and development boundaries]%0A%0ABest regards"
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
    </main>
  );
}
