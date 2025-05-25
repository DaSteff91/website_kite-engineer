import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Settings, Code2, ClipboardList, Lightbulb, Gauge, Cpu, BarChart3, Workflow, Binary, Network, Projector as ProjectorChart, Users, ShieldAlert, FileSearch, Router, GraduationCap } from "lucide-react";

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
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]">
            Combining Worlds...
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Explore - Instruct - Create - Enable - Deliver
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center text-white/90 max-w-4xl mx-auto leading-relaxed">
            Expand your project capabilities, strengthen your resource pool, and
            gain fresh insights — benefit from my engineering expertise in the
            areas of semiconductor manufacturing and software development
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
            {/* Process Engineering Section */}
            <div className="bg-gradient-to-br from-blue-900/30 via-card/30 to-purple-900/30 backdrop-blur-sm p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4 pb-3 border-b border-white/20 flex items-center gap-3 text-blue-200">
                <Settings className="h-7 w-7 text-blue-400" />
                Process Engineering
              </h3>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="process-optimization" className="border-white/10">
                  <AccordionTrigger className="hover:text-blue-400 transition-colors text-lg">
                    <div className="flex items-center gap-2">
                      <Gauge className="h-5 w-5" />
                      Process Optimization
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-white/80">
                    Comprehensive analysis and optimization of semiconductor manufacturing processes, focusing on yield improvement and efficiency gains.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="equipment-integration" className="border-white/10">
                  <AccordionTrigger className="hover:text-blue-400 transition-colors text-lg">
                    <div className="flex items-center gap-2">
                      <Cpu className="h-5 w-5" />
                      Equipment Integration
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-white/80">
                    Expert guidance in integrating new equipment into existing production lines while maintaining optimal performance.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="yield-analysis" className="border-white/10">
                  <AccordionTrigger className="hover:text-blue-400 transition-colors text-lg">
                    <div className="flex items-center gap-2">
                      <BarChart3 className="h-5 w-5" />
                      Yield Analysis
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-white/80">
                    Advanced statistical analysis and problem-solving techniques to identify and resolve yield-limiting factors.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Development Engineering Section */}
            <div className="bg-gradient-to-br from-emerald-900/30 via-card/30 to-teal-900/30 backdrop-blur-sm p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4 pb-3 border-b border-white/20 flex items-center gap-3 text-emerald-200">
                <Code2 className="h-7 w-7 text-emerald-400" />
                Development Engineering
              </h3>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="software-development" className="border-white/10">
                  <AccordionTrigger className="hover:text-emerald-400 transition-colors text-lg">
                    <div className="flex items-center gap-2">
                      <Binary className="h-5 w-5" />
                      Software Development
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-white/80">
                    Custom software solutions for manufacturing automation, data analysis, and process control systems.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="automation" className="border-white/10">
                  <AccordionTrigger className="hover:text-emerald-400 transition-colors text-lg">
                    <div className="flex items-center gap-2">
                      <Workflow className="h-5 w-5" />
                      Automation Solutions
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-white/80">
                    Development and implementation of automated systems to improve efficiency and reduce manual intervention.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="integration" className="border-white/10">
                  <AccordionTrigger className="hover:text-emerald-400 transition-colors text-lg">
                    <div className="flex items-center gap-2">
                      <Network className="h-5 w-5" />
                      System Integration
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-white/80">
                    Seamless integration of various manufacturing systems and tools for improved workflow and data management.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Project Management Section */}
            <div className="bg-gradient-to-br from-amber-900/30 via-card/30 to-orange-900/30 backdrop-blur-sm p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4 pb-3 border-b border-white/20 flex items-center gap-3 text-amber-200">
                <ClipboardList className="h-7 w-7 text-amber-400" />
                Project Management
              </h3>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="project-planning" className="border-white/10">
                  <AccordionTrigger className="hover:text-amber-400 transition-colors text-lg">
                    <div className="flex items-center gap-2">
                      <ProjectorChart className="h-5 w-5" />
                      Project Planning
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-white/80">
                    Comprehensive project planning and execution strategies tailored to semiconductor manufacturing environments.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="team-leadership" className="border-white/10">
                  <AccordionTrigger className="hover:text-amber-400 transition-colors text-lg">
                    <div className="flex items-center gap-2">
                      <Users className="h-5 w-5" />
                      Team Leadership
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-white/80">
                    Effective team management and coordination to ensure project success and timely delivery.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="risk-management" className="border-white/10">
                  <AccordionTrigger className="hover:text-amber-400 transition-colors text-lg">
                    <div className="flex items-center gap-2">
                      <ShieldAlert className="h-5 w-5" />
                      Risk Management
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-white/80">
                    Proactive identification and mitigation of project risks to ensure smooth execution.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Technical Consulting Section */}
            <div className="bg-gradient-to-br from-rose-900/30 via-card/30 to-pink-900/30 backdrop-blur-sm p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4 pb-3 border-b border-white/20 flex items-center gap-3 text-rose-200">
                <Lightbulb className="h-7 w-7 text-rose-400" />
                Technical Consulting
              </h3>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="process-assessment" className="border-white/10">
                  <AccordionTrigger className="hover:text-rose-400 transition-colors text-lg">
                    <div className="flex items-center gap-2">
                      <FileSearch className="h-5 w-5" />
                      Process Assessment
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-white/80">
                    Detailed evaluation of existing processes and recommendations for improvement opportunities.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="technology-roadmap" className="border-white/10">
                  <AccordionTrigger className="hover:text-rose-400 transition-colors text-lg">
                    <div className="flex items-center gap-2">
                      <Router className="h-5 w-5" />
                      Technology Roadmap
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-white/80">
                    Strategic planning and guidance for technology adoption and process evolution.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="training" className="border-white/10">
                  <AccordionTrigger className="hover:text-rose-400 transition-colors text-lg">
                    <div className="flex items-center gap-2">
                      <GraduationCap className="h-5 w-5" />
                      Training & Knowledge Transfer
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-white/80">
                    Customized training programs and knowledge transfer sessions for team capability enhancement.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link href="/contact">
              <Button size="lg" className="group">
                Contact Me
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}