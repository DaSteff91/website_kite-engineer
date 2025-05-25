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

export default function EngineerPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/1.jpg"
            alt="Engineering"
            fill
            className="object-cover object-[center_20%] brightness-50"
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
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="relative mb-20">
            <h2
              className="text-2xl md:text-3xl font-bold text-center max-w-4xl mx-auto leading-relaxed 
   bg-[linear-gradient(to_right,white,rgba(229,231,235,0.8),rgba(209,213,219,1))] 
   bg-clip-text text-transparent animate-gradient"
            >
              Expand your project capabilities, strengthen your resource pool,
              and gain fresh insights
            </h2>
            <p className="mt-4 text-xl text-center text-white/80 max-w-3xl mx-auto leading-relaxed">
              Benefit from my engineering expertise in the areas of
              semiconductor manufacturing and software development
            </p>
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 via-teal-500 to-emerald-500 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr justify-items-center">
            {/* Process Engineering Section */}
            <div className="bg-gradient-to-br from-blue-900/20 via-card/20 to-cyan-900/20 backdrop-blur-sm p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300 w-full max-w-xl">
              <h3 className="text-2xl font-bold mb-4 pb-3 border-b border-white/20 flex items-center gap-3 text-blue-200">
                <Settings className="h-7 w-7 text-blue-400" />
                Process Engineering
              </h3>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem
                  value="process-optimization"
                  className="border-white/10"
                >
                  <AccordionTrigger className="hover:text-blue-400 transition-colors text-lg">
                    <div className="flex items-center gap-2">
                      <Gauge className="h-5 w-5" />
                      Process Optimization
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-white/80">
                    Comprehensive analysis and optimization of semiconductor
                    manufacturing processes, focusing on yield improvement and
                    efficiency gains.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="equipment-integration"
                  className="border-white/10"
                >
                  <AccordionTrigger className="hover:text-blue-400 transition-colors text-lg">
                    <div className="flex items-center gap-2">
                      <Cpu className="h-5 w-5" />
                      Equipment Integration
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-white/80">
                    Expert guidance in integrating new equipment into existing
                    production lines while maintaining optimal performance.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="yield-analysis"
                  className="border-white/10"
                >
                  <AccordionTrigger className="hover:text-blue-400 transition-colors text-lg">
                    <div className="flex items-center gap-2">
                      <BarChart3 className="h-5 w-5" />
                      Yield Analysis
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-white/80">
                    Advanced statistical analysis and problem-solving techniques
                    to identify and resolve yield-limiting factors.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Process Development Section */}
            <div className="bg-gradient-to-br from-cyan-900/25 via-card/25 to-teal-900/25 backdrop-blur-sm p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300 w-full max-w-xl">
              <h3 className="text-2xl font-bold mb-4 pb-3 border-b border-white/20 flex items-center gap-3 text-cyan-200">
                <FlaskRound className="h-7 w-7 text-cyan-400" />
                Process Development
              </h3>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="research" className="border-white/10">
                  <AccordionTrigger className="hover:text-cyan-400 transition-colors text-lg">
                    <div className="flex items-center gap-2">
                      <Microscope className="h-5 w-5" />
                      Research & Innovation
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
                      Process Design
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
                      Performance Analysis
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-white/80">
                    Detailed analysis and optimization of process performance
                    metrics and quality indicators.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Software Development Section */}
            <div className="bg-gradient-to-br from-teal-900/30 via-card/30 to-emerald-900/30 backdrop-blur-sm p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300 w-full max-w-xl">
              <h3 className="text-2xl font-bold mb-4 pb-3 border-b border-white/20 flex items-center gap-3 text-teal-200">
                <Code2 className="h-7 w-7 text-teal-400" />
                Software Development
              </h3>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem
                  value="software-development"
                  className="border-white/10"
                >
                  <AccordionTrigger className="hover:text-teal-400 transition-colors text-lg">
                    <div className="flex items-center gap-2">
                      <Binary className="h-5 w-5" />
                      Custom Solutions
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-white/80">
                    Custom software solutions for manufacturing automation, data
                    analysis, and process control systems.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="automation" className="border-white/10">
                  <AccordionTrigger className="hover:text-teal-400 transition-colors text-lg">
                    <div className="flex items-center gap-2">
                      <Workflow className="h-5 w-5" />
                      Automation Solutions
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-white/80">
                    Development and implementation of automated systems to
                    improve efficiency and reduce manual intervention.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="integration" className="border-white/10">
                  <AccordionTrigger className="hover:text-teal-400 transition-colors text-lg">
                    <div className="flex items-center gap-2">
                      <Network className="h-5 w-5" />
                      System Integration
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-white/80">
                    Seamless integration of various manufacturing systems and
                    tools for improved workflow and data management.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Project Management Section */}
            <div className="bg-gradient-to-br from-emerald-900/35 via-card/35 to-blue-900/35 backdrop-blur-sm p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300 w-full max-w-xl">
              <h3 className="text-2xl font-bold mb-4 pb-3 border-b border-white/20 flex items-center gap-3 text-emerald-200">
                <ClipboardList className="h-7 w-7 text-emerald-400" />
                Project Management
              </h3>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem
                  value="project-planning"
                  className="border-white/10"
                >
                  <AccordionTrigger className="hover:text-emerald-400 transition-colors text-lg">
                    <div className="flex items-center gap-2">
                      <ProjectorChart className="h-5 w-5" />
                      Project Planning
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-white/80">
                    Comprehensive project planning and execution strategies
                    tailored to semiconductor manufacturing environments.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="team-leadership"
                  className="border-white/10"
                >
                  <AccordionTrigger className="hover:text-emerald-400 transition-colors text-lg">
                    <div className="flex items-center gap-2">
                      <Users className="h-5 w-5" />
                      Team Leadership
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-white/80">
                    Effective team management and coordination to ensure project
                    success and timely delivery.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="risk-management"
                  className="border-white/10"
                >
                  <AccordionTrigger className="hover:text-emerald-400 transition-colors text-lg">
                    <div className="flex items-center gap-2">
                      <ShieldAlert className="h-5 w-5" />
                      Risk Management
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-white/80">
                    Proactive identification and mitigation of project risks to
                    ensure smooth execution.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Technical Consulting Section */}
            <div className="bg-gradient-to-br from-blue-900/40 via-card/40 to-cyan-900/40 backdrop-blur-sm p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300 w-full max-w-xl">
              <h3 className="text-2xl font-bold mb-4 pb-3 border-b border-white/20 flex items-center gap-3 text-blue-200">
                <Lightbulb className="h-7 w-7 text-blue-400" />
                Technical Consulting
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
              Ready to elevate your project? Reach out for a free consultation
              and let's discuss how we can achieve your goals together.
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
