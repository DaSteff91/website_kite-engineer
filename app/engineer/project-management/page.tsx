import Image from "next/image";
import background_image_darker from "@/public/images/background_image_darker.jpeg";
import engineer_hero_image from "@/public/images/engineer_hero_image.jpg";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, ClipboardList, FolderKanban, Clock1, Navigation2Off, Share2, Users, Target, Calendar } from "lucide-react";

export default function ProjectManagementPage() {
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
            alt="Project Management"
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
            Project Management Services
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
              Back to Engineering Services
            </Link>
          </div>

          <div className="relative mb-16 sm:mb-20">
            <h2
              className="text-xl sm:text-2xl md:text-3xl font-bold text-center max-w-4xl mx-auto leading-relaxed 
   bg-[linear-gradient(to_right,white,rgba(229,231,235,0.8),rgba(209,213,219,1))] 
   bg-clip-text text-transparent animate-gradient"
            >
              Deliver Projects Successfully, On Time
            </h2>
            <p className="mt-4 text-lg sm:text-xl text-center text-white/80 max-w-3xl mx-auto leading-relaxed">
              Professional project management services to ensure your goals are achieved sustainably and efficiently
            </p>
            <div className="absolute -bottom-6 sm:-bottom-8 left-1/2 transform -translate-x-1/2 w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-500 via-teal-500 to-emerald-500 rounded-full"></div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto mb-16">
            <div className="bg-gradient-to-br from-emerald-900/20 via-card/20 to-blue-900/20 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <FolderKanban className="h-6 w-6 text-emerald-400" />
                <h3 className="text-lg font-semibold text-emerald-200">Project Setup & Planning</h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li>• Project scope definition and planning</li>
                <li>• Work breakdown structure (WBS)</li>
                <li>• Resource allocation and scheduling</li>
                <li>• Risk assessment and mitigation</li>
                <li>• Stakeholder identification and management</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-900/25 via-card/25 to-cyan-900/25 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Clock1 className="h-6 w-6 text-blue-400" />
                <h3 className="text-lg font-semibold text-blue-200">Timeline Management</h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li>• Critical path analysis</li>
                <li>• Schedule optimization and rebalancing</li>
                <li>• Milestone tracking and reporting</li>
                <li>• Dependency management</li>
                <li>• Timeline recovery strategies</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-cyan-900/30 via-card/30 to-teal-900/30 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Navigation2Off className="h-6 w-6 text-cyan-400" />
                <h3 className="text-lg font-semibold text-cyan-200">Deviation Management</h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li>• Change request management</li>
                <li>• Impact assessment and communication</li>
                <li>• Stakeholder expectation management</li>
                <li>• Recovery planning and execution</li>
                <li>• Lessons learned documentation</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-teal-900/35 via-card/35 to-emerald-900/35 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Share2 className="h-6 w-6 text-teal-400" />
                <h3 className="text-lg font-semibold text-teal-200">Documentation & Sharing</h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li>• Version control implementation</li>
                <li>• Collaborative workspace setup</li>
                <li>• Knowledge management systems</li>
                <li>• Team synergy optimization</li>
                <li>• Information architecture design</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-emerald-900/40 via-card/40 to-blue-900/40 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Users className="h-6 w-6 text-emerald-400" />
                <h3 className="text-lg font-semibold text-emerald-200">Team Coordination</h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li>• Cross-functional team management</li>
                <li>• Communication protocol establishment</li>
                <li>• Conflict resolution and mediation</li>
                <li>• Performance tracking and optimization</li>
                <li>• Team building and motivation</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-900/45 via-card/45 to-cyan-900/45 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Target className="h-6 w-6 text-blue-400" />
                <h3 className="text-lg font-semibold text-blue-200">Quality Assurance</h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li>• Quality gate implementation</li>
                <li>• Deliverable review processes</li>
                <li>• Continuous improvement integration</li>
                <li>• Standards compliance monitoring</li>
                <li>• Customer satisfaction tracking</li>
              </ul>
            </div>
          </div>

          {/* Project Management Methodology */}
          <div className="bg-gradient-to-br from-emerald-900/15 via-card/15 to-blue-900/15 backdrop-blur-sm p-6 sm:p-8 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] max-w-4xl mx-auto mb-16">
            <h3 className="text-xl sm:text-2xl font-bold mb-6 text-center text-emerald-200">Project Management Approach</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-emerald-500/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <span className="text-emerald-300 font-bold text-lg">1</span>
                </div>
                <h4 className="font-semibold text-white mb-3">Initiation</h4>
                <p className="text-white/80 text-sm leading-relaxed">
                  Project charter, stakeholder analysis, and initial planning with clear objectives and success criteria.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-500/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-300 font-bold text-lg">2</span>
                </div>
                <h4 className="font-semibold text-white mb-3">Planning</h4>
                <p className="text-white/80 text-sm leading-relaxed">
                  Detailed project planning, resource allocation, risk assessment, and communication strategy development.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-cyan-500/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <span className="text-cyan-300 font-bold text-lg">3</span>
                </div>
                <h4 className="font-semibold text-white mb-3">Execution</h4>
                <p className="text-white/80 text-sm leading-relaxed">
                  Active project management, team coordination, progress monitoring, and continuous communication.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-teal-500/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <span className="text-teal-300 font-bold text-lg">4</span>
                </div>
                <h4 className="font-semibold text-white mb-3">Closure</h4>
                <p className="text-white/80 text-sm leading-relaxed">
                  Project completion, deliverable handover, lessons learned, and stakeholder satisfaction assessment.
                </p>
              </div>
            </div>
          </div>

          {/* Tools & Methodologies */}
          <div className="bg-gradient-to-br from-blue-900/15 via-card/15 to-cyan-900/15 backdrop-blur-sm p-6 sm:p-8 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] max-w-4xl mx-auto mb-16">
            <h3 className="text-xl sm:text-2xl font-bold mb-6 text-center text-blue-200">Tools & Methodologies</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-white mb-3">Project Management Tools</h4>
                <ul className="text-white/80 text-sm space-y-1">
                  <li>• Microsoft Project for scheduling</li>
                  <li>• Jira for agile project management</li>
                  <li>• Trello/Asana for task management</li>
                  <li>• Gantt charts and timeline visualization</li>
                  <li>• Custom dashboard development</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-3">Collaboration Platforms</h4>
                <ul className="text-white/80 text-sm space-y-1">
                  <li>• SharePoint for document management</li>
                  <li>• Confluence for knowledge sharing</li>
                  <li>• Slack/Teams for communication</li>
                  <li>• Git for version control</li>
                  <li>• Cloud storage and synchronization</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-3">Methodologies</h4>
                <ul className="text-white/80 text-sm space-y-1">
                  <li>• Traditional waterfall approach</li>
                  <li>• Agile and Scrum methodologies</li>
                  <li>• Hybrid project management</li>
                  <li>• Lean project management</li>
                  <li>• Risk-based project planning</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-3">Quality & Compliance</h4>
                <ul className="text-white/80 text-sm space-y-1">
                  <li>• ISO 9001 quality management</li>
                  <li>• PMI best practices</li>
                  <li>• Change control procedures</li>
                  <li>• Audit trail maintenance</li>
                  <li>• Regulatory compliance support</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Project Types */}
          <div className="bg-gradient-to-br from-cyan-900/15 via-card/15 to-teal-900/15 backdrop-blur-sm p-6 sm:p-8 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] max-w-4xl mx-auto mb-16">
            <h3 className="text-xl sm:text-2xl font-bold mb-6 text-center text-cyan-200">Project Types & Industries</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-white mb-3">Engineering Projects</h4>
                <p className="text-white/80 text-sm leading-relaxed">
                  Process development, equipment installation, technology transfer, and manufacturing 
                  optimization projects in semiconductor and general manufacturing industries.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-3">Software Development</h4>
                <p className="text-white/80 text-sm leading-relaxed">
                  Custom software development, system integration, database migration, and 
                  automation projects with technical and business stakeholders.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-3">Process Improvement</h4>
                <p className="text-white/80 text-sm leading-relaxed">
                  Lean Six Sigma projects, process optimization initiatives, quality improvement 
                  programs, and operational excellence transformations.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-3">Cross-Functional Initiatives</h4>
                <p className="text-white/80 text-sm leading-relaxed">
                  Multi-departmental projects involving engineering, IT, operations, and management 
                  teams with complex stakeholder requirements and dependencies.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center">
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Ready to ensure your project success? Let's establish the foundation for sustainable goal achievement.
            </p>
            <Link href="/contact?subject=Project Management Services Inquiry&message=Hello Kite-Engineer,%0A%0AI'm interested in your project management services. Please provide information about:%0A%0A- Project setup and planning methodologies%0A- Timeline and deviation management%0A- Team coordination and collaboration tools%0A- Documentation and quality assurance%0A%0AMy project details:%0A[Please describe your project scope, timeline, team size, stakeholder complexity, and specific management challenges]%0A%0ALooking forward to successful project delivery!">
              <Button
                size="lg"
                className="group bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Manage Your Project
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}