import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Settings,
  Code2,
  ClipboardList,
  Lightbulb,
  Gauge,
  Cpu,
  BarChart3,
  Workflow,
  Binary,
  Network,
  Projector as ProjectorChart,
  Users,
  ShieldAlert,
  FileSearch,
  Router,
  GraduationCap,
  ArrowRight,
  FlaskRound,
  Microscope,
  LineChart,
  Braces,
} from "lucide-react";

export default function KitePage() {
  return (
    <main className="relative min-h-screen">
      {/* Background Image*/}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/images/background_image_darker.png"
          alt="Background"
          fill
          className="brightness-50 object-cover object-top"
          priority
        />
      </div>

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/kite_landingpage.png"
            alt="Kiteboarding"
            fill
            className="object-cover object-center brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1
            className="pb-1 text-4xl md:text-5xl font-bold mb-6 
   bg-gradient-to-r from-white via-gray-200 to-gray-300 
   bg-clip-text text-transparent 
   [text-shadow:0_0_8px_rgba(209,213,219,0.6)]"
          >
            Combining Worlds...
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Envison - Enable - Execute
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="relative mb-20">
            <h2
              className="text-2xl md:text-3xl font-bold text-center max-w-4xl mx-auto leading-relaxed 
   bg-[linear-gradient(to_right,white,rgba(229,231,235,0.8),rgba(209,213,219,1))] 
   bg-clip-text text-transparent animate-gradient"
            >
              Whether you're running a kite school or looking to advance your
              own skills — progress doesn´t grow on trees
            </h2>
            <p className="mt-4 text-xl text-center text-white/80 max-w-3xl mx-auto leading-relaxed">
              Explore tailored coaching and flexible support designed to help
              you progress with confidence
            </p>
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 via-teal-500 to-emerald-500 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr justify-items-center">
            {/* Process Engineering Section */}
            <div className="bg-gradient-to-br from-blue-900/20 via-card/20 to-cyan-900/20 backdrop-blur-sm p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300 w-full max-w-xl">
              <h3 className="text-2xl font-bold mb-4 pb-3 border-b border-white/20 flex items-center gap-3 text-blue-200">
                <Settings className="h-7 w-7 text-blue-400" />
                Freelancer Services
              </h3>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem
                  value="process-optimization"
                  className="border-white/10"
                >
                  <AccordionTrigger className="hover:text-blue-400 transition-colors text-lg">
                    <div className="flex items-center gap-2">
                      <Gauge className="h-5 w-5" />
                      School Support
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-white/80">
                    In times of short stuff it could be a game changer for you
                    to offer flexibility to your customers. No matter if you
                    need an VDWS certified instructor, support for your shop or
                    someone behind the bar. You can rely on me
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="equipment-integration"
                  className="border-white/10"
                >
                  <AccordionTrigger className="hover:text-blue-400 transition-colors text-lg">
                    <div className="flex items-center gap-2">
                      <Cpu className="h-5 w-5" />
                      Travel Services
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-white/80">
                    Looking for someone how organizes your kite trip? Or even
                    accompanies you as a personal coach? No problem, you get
                    well served
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="yield-analysis"
                  className="border-white/10"
                >
                  <AccordionTrigger className="hover:text-blue-400 transition-colors text-lg">
                    <div className="flex items-center gap-2">
                      <BarChart3 className="h-5 w-5" />
                      Teaching and Communication
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-white/80">
                    Placeholder
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Process Development Section */}
            <div className="bg-gradient-to-br from-cyan-900/25 via-card/25 to-teal-900/25 backdrop-blur-sm p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300 w-full max-w-xl">
              <h3 className="text-2xl font-bold mb-4 pb-3 border-b border-white/20 flex items-center gap-3 text-cyan-200">
                <FlaskRound className="h-7 w-7 text-cyan-400" />
                Courses
              </h3>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="research" className="border-white/10">
                  <AccordionTrigger className="hover:text-cyan-400 transition-colors text-lg">
                    <div className="flex items-center gap-2">
                      <Microscope className="h-5 w-5" />
                      Theory
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-white/80">
                    Development of new manufacturing processes and techniques to
                    improve efficiency and product quality.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="process-design"
                  className="border-white/10"
                >
                  <AccordionTrigger className="hover:text-cyan-400 transition-colors text-lg">
                    <div className="flex items-center gap-2">
                      <Braces className="h-5 w-5" />
                      Starting
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-white/80">
                    Creation and optimization of new manufacturing processes
                    from concept to implementation.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="performance-analysis"
                  className="border-white/10"
                >
                  <AccordionTrigger className="hover:text-cyan-400 transition-colors text-lg">
                    <div className="flex items-center gap-2">
                      <LineChart className="h-5 w-5" />
                      Advanced
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-white/80">
                    Detailed analysis and optimization of process performance
                    metrics and quality indicators.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Technical Consulting Section */}
            <div className="bg-gradient-to-br from-blue-900/40 via-card/40 to-cyan-900/40 backdrop-blur-sm p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300 w-full max-w-xl">
              <h3 className="text-2xl font-bold mb-4 pb-3 border-b border-white/20 flex items-center gap-3 text-blue-200">
                <Lightbulb className="h-7 w-7 text-blue-400" />
                Freelancer Services
              </h3>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem
                  value="process-assessment"
                  className="border-white/10"
                >
                  <AccordionTrigger className="hover:text-blue-400 transition-colors text-lg">
                    <div className="flex items-center gap-2">
                      <FileSearch className="h-5 w-5" />
                      Process Assessment
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-white/80">
                    Detailed evaluation of existing processes and
                    recommendations for improvement opportunities.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="technology-roadmap"
                  className="border-white/10"
                >
                  <AccordionTrigger className="hover:text-blue-400 transition-colors text-lg">
                    <div className="flex items-center gap-2">
                      <Router className="h-5 w-5" />
                      Technology Roadmap
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-white/80">
                    Strategic planning and guidance for technology adoption and
                    process evolution.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="training" className="border-white/10">
                  <AccordionTrigger className="hover:text-blue-400 transition-colors text-lg">
                    <div className="flex items-center gap-2">
                      <GraduationCap className="h-5 w-5" />
                      Training & Knowledge Transfer
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-white/80">
                    Customized training programs and knowledge transfer sessions
                    for team capability enhancement.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          {/* Enhanced Contact Section */}
          <div className="mt-16 text-center">
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              What is holding you back? Get in touch to book my services or to
              learn how I can support your kiteboarding journey on and off the
              water
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="group bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get Your Free Quote
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
