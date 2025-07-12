import Image from "next/image";
import background_image_darker from "@/public/images/background_image_darker.jpeg";
import engineer_hero_image from "@/public/images/engineer_hero_image.jpg";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ArrowLeft,
  SlidersHorizontal,
  BarChart3,
  TrendingUp,
  Target,
} from "lucide-react";

export default function ProcessControlPage() {
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
            alt="Process Control"
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
            Process Control Services
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
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
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
              Outsource your work
            </h2>
            <p className="mt-4 text-lg sm:text-xl text-center text-white/80 max-w-3xl mx-auto leading-relaxed">
              Invest my brainpower into your project and benefit from my
              expertise I gathered while working as a process engineer.
            </p>
            <div className="absolute -bottom-6 sm:-bottom-8 left-1/2 transform -translate-x-1/2 w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-500 via-teal-500 to-emerald-500 rounded-full"></div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 gap-6 sm:gap-8 max-w-6xl mx-auto mb-16">
            <div className="bg-gradient-to-br from-blue-900/20 via-card/20 to-cyan-900/20 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <SlidersHorizontal className="h-6 w-6 text-blue-400" />
                <h3 className="text-lg font-semibold text-blue-200">
                  Advanced Process Control
                </h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li>
                  • Software procurement and setup - You already have lots of
                  process data of your manufacturing processes available but you
                  lack a centralized software that is providing what your team
                  needs and on the same time integrates into what is already
                  setup? I help you finding APC software as well I can take over
                  all the communication with possible partner. Furthermore I
                  offer to write requirement specifications, do first sample
                  testing and support its rollout.
                </li>
                <li>
                  • User training - Are you looking forward to standardize the
                  way APC is used in your company? I provide a platform based
                  training for you or your team to make it become a solid common
                  ground of expertise for further steps. It has a step-based
                  approach and starts with general APC ideas and rises to
                  advanced approaches and specific topics that can also involve
                  the software that you are using.{" "}
                </li>
                <li>
                  • Mathematics - Not every measured signal from a sensor is
                  automatically ready to be used in an APC environment. Math can
                  be applied to create new or more reliable sources for your APC
                  landscape. As well it can be used for limit calculations and
                  violation rules like n of m. I do raw data analysis, signal
                  optimization, limit-based calculations, outlier handling and
                  apply whatever math is necessary wherever needed to get more
                  out of the control mechanism APC shall be.
                </li>
                <li>
                  • Strategic alignment - Typically APC is not used as only
                  measure of control in a modern production. It shall be part of
                  an ecosystem. But how does the APC-piece fit into that
                  ecosystem and what expectations does it have to fulfill? Is it
                  doing what it shall do? The view of an outsider on strategic
                  topics can be a blessing. That´s where I step in.
                </li>
                <li>
                  • Learning from the past - Data can tell stories, if asked
                  correctly. Analyzing it and find correlations to certain
                  events is not always straight forward and sometimes needs more
                  time. Time that is precious within your team.
                </li>
                <li>
                  • AI assistance - The buzzword of today: AI. It´s a powerful
                  tool for analyzing your data.
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-cyan-900/25 via-card/25 to-teal-900/25 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <BarChart3 className="h-6 w-6 text-cyan-400" />
                <h3 className="text-lg font-semibold text-cyan-200">
                  Statistical Process Control
                </h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li>• SPC chart implementation</li>
                <li>• Control limit calculations</li>
                <li>• Process capability studies</li>
                <li>• Variation reduction strategies</li>
                <li>• Quality metrics and KPIs</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-teal-900/30 via-card/30 to-emerald-900/30 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="h-6 w-6 text-teal-400" />
                <h3 className="text-lg font-semibold text-teal-200">
                  Data Analytics
                </h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li>• Python-based data analysis</li>
                <li>• Machine learning for process insights</li>
                <li>• Predictive analytics models</li>
                <li>• Dashboard and visualization tools</li>
                <li>• Automated reporting systems</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-emerald-900/35 via-card/35 to-blue-900/35 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Target className="h-6 w-6 text-emerald-400" />
                <h3 className="text-lg font-semibold text-emerald-200">
                  AI-Powered Solutions
                </h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li>• AI training for failure detection</li>
                <li>• Intelligent alarm systems</li>
                <li>• Predictive maintenance models</li>
                <li>• Automated anomaly detection</li>
                <li>• Smart process optimization</li>
              </ul>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center">
            <p className="text-xl text-white/90 mb-8 max-w-6xl mx-auto">
              Miss something? We´ll find a solution. Primary I focus my services
              around manufacturing, and in particular semiconductor
              manufacturing. But on an abstract level I can deal with any kind
              of manufacturing processes. Therefore I offer both short and long
              term services and I work either project or time based. As well you
              can combine any of my services to get the best result.
            </p>
            <Link
              href="/contact?subject=Process Control Services Inquiry&message=Hello Kite-Engineer,%0A%0AI'm interested in your process control services. Please provide information about APC, SPC, and AI-powered solutions for my manufacturing processes.%0A%0AMy requirements:%0A[Please describe your current process control challenges and requirements]%0A%0ABest regards"
              target="_blank"
            >
              <Button
                size="lg"
                className="group bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl"
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
