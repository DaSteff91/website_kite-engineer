import Image from "next/image";
import background_image_darker from "@/public/images/background_image_darker.jpeg";
import engineer_hero_image from "@/public/images/engineer_hero_image.jpg";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, Terminal, PocketKnife, Database, Network, MonitorCheck, Code, Server, Cloud } from "lucide-react";

export default function SoftwareDevelopmentPage() {
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
            alt="Software Development"
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
            Software Development Services
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
              className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-colors"
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
              Custom Software Solutions for Your Business
            </h2>
            <p className="mt-4 text-lg sm:text-xl text-center text-white/80 max-w-3xl mx-auto leading-relaxed">
              From automation scripts to full-stack applications - tailored software development that fits your needs
            </p>
            <div className="absolute -bottom-6 sm:-bottom-8 left-1/2 transform -translate-x-1/2 w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-500 via-teal-500 to-emerald-500 rounded-full"></div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto mb-16">
            <div className="bg-gradient-to-br from-teal-900/20 via-card/20 to-emerald-900/20 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <PocketKnife className="h-6 w-6 text-teal-400" />
                <h3 className="text-lg font-semibold text-teal-200">Custom Solutions</h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li>• Tailored software applications</li>
                <li>• Integration between existing systems</li>
                <li>• Custom scripts and automation tools</li>
                <li>• API development and integration</li>
                <li>• Legacy system modernization</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-emerald-900/25 via-card/25 to-blue-900/25 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Database className="h-6 w-6 text-emerald-400" />
                <h3 className="text-lg font-semibold text-emerald-200">Database Management</h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li>• RDBMS design and implementation</li>
                <li>• Data migration from Excel/files</li>
                <li>• Database optimization and tuning</li>
                <li>• Backup and recovery solutions</li>
                <li>• Data analytics and reporting</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-900/30 via-card/30 to-cyan-900/30 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Network className="h-6 w-6 text-blue-400" />
                <h3 className="text-lg font-semibold text-blue-200">Workflow Automation</h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li>• Process automation solutions</li>
                <li>• Repetitive task elimination</li>
                <li>• Workflow orchestration</li>
                <li>• Integration with existing tools</li>
                <li>• Monitoring and alerting systems</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-cyan-900/35 via-card/35 to-teal-900/35 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <MonitorCheck className="h-6 w-6 text-cyan-400" />
                <h3 className="text-lg font-semibold text-cyan-200">Web Development</h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li>• Full-stack web applications</li>
                <li>• Server setup and administration</li>
                <li>• Domain management and DNS</li>
                <li>• Cloud infrastructure deployment</li>
                <li>• Self-hosted solutions (Nextcloud, etc.)</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-teal-900/40 via-card/40 to-emerald-900/40 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Server className="h-6 w-6 text-teal-400" />
                <h3 className="text-lg font-semibold text-teal-200">Infrastructure</h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li>• Containerization with Docker</li>
                <li>• CI/CD pipeline setup</li>
                <li>• Server monitoring and maintenance</li>
                <li>• Security implementation</li>
                <li>• Performance optimization</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-emerald-900/45 via-card/45 to-blue-900/45 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Code className="h-6 w-6 text-emerald-400" />
                <h3 className="text-lg font-semibold text-emerald-200">Frontend & Backend</h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li>• Modern frontend frameworks (React, Next.js)</li>
                <li>• Backend API development (Node.js, Python)</li>
                <li>• Mobile-responsive design</li>
                <li>• Real-time applications</li>
                <li>• Progressive web apps (PWA)</li>
              </ul>
            </div>
          </div>

          {/* Technology Stack */}
          <div className="bg-gradient-to-br from-teal-900/15 via-card/15 to-emerald-900/15 backdrop-blur-sm p-6 sm:p-8 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] max-w-4xl mx-auto mb-16">
            <h3 className="text-xl sm:text-2xl font-bold mb-6 text-center text-teal-200">Technology Stack & Expertise</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-white mb-3">Programming Languages</h4>
                <ul className="text-white/80 text-sm space-y-1">
                  <li>• Python - Data analysis, automation, AI/ML</li>
                  <li>• JavaScript/TypeScript - Full-stack development</li>
                  <li>• SQL - Database design and optimization</li>
                  <li>• Bash/Shell - System automation</li>
                  <li>• HTML/CSS - Frontend development</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-3">Frameworks & Libraries</h4>
                <ul className="text-white/80 text-sm space-y-1">
                  <li>• React/Next.js - Modern web applications</li>
                  <li>• Node.js/Express - Backend services</li>
                  <li>• FastAPI/Flask - Python web frameworks</li>
                  <li>• Pandas/NumPy - Data processing</li>
                  <li>• TailwindCSS - Responsive design</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-3">Databases & Storage</h4>
                <ul className="text-white/80 text-sm space-y-1">
                  <li>• PostgreSQL - Relational database</li>
                  <li>• MySQL/MariaDB - Web applications</li>
                  <li>• SQLite - Lightweight solutions</li>
                  <li>• Redis - Caching and sessions</li>
                  <li>• File-based storage optimization</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-3">DevOps & Infrastructure</h4>
                <ul className="text-white/80 text-sm space-y-1">
                  <li>• Docker - Containerization</li>
                  <li>• Linux server administration</li>
                  <li>• Nginx - Web server and proxy</li>
                  <li>• Git - Version control</li>
                  <li>• Cloud platforms (AWS, DigitalOcean)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Development Process */}
          <div className="bg-gradient-to-br from-emerald-900/15 via-card/15 to-blue-900/15 backdrop-blur-sm p-6 sm:p-8 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] max-w-4xl mx-auto mb-16">
            <h3 className="text-xl sm:text-2xl font-bold mb-6 text-center text-emerald-200">Development Process</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-teal-500/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <span className="text-teal-300 font-bold text-lg">1</span>
                </div>
                <h4 className="font-semibold text-white mb-3">Analysis</h4>
                <p className="text-white/80 text-sm leading-relaxed">
                  Understanding your requirements, current systems, and desired outcomes.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-emerald-500/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <span className="text-emerald-300 font-bold text-lg">2</span>
                </div>
                <h4 className="font-semibold text-white mb-3">Design</h4>
                <p className="text-white/80 text-sm leading-relaxed">
                  Architecture planning, technology selection, and solution design.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-500/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-300 font-bold text-lg">3</span>
                </div>
                <h4 className="font-semibold text-white mb-3">Development</h4>
                <p className="text-white/80 text-sm leading-relaxed">
                  Iterative development with regular feedback and testing.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-cyan-500/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <span className="text-cyan-300 font-bold text-lg">4</span>
                </div>
                <h4 className="font-semibold text-white mb-3">Deployment</h4>
                <p className="text-white/80 text-sm leading-relaxed">
                  Production deployment, training, and ongoing support.
                </p>
              </div>
            </div>
          </div>

          {/* Project Examples */}
          <div className="bg-gradient-to-br from-blue-900/15 via-card/15 to-cyan-900/15 backdrop-blur-sm p-6 sm:p-8 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] max-w-4xl mx-auto mb-16">
            <h3 className="text-xl sm:text-2xl font-bold mb-6 text-center text-blue-200">Project Examples</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-white mb-3">Manufacturing Integration</h4>
                <p className="text-white/80 text-sm leading-relaxed">
                  Custom software connecting production equipment with quality management systems, 
                  automating data collection and generating real-time dashboards for process monitoring.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-3">Data Migration Platform</h4>
                <p className="text-white/80 text-sm leading-relaxed">
                  Complete migration from Excel-based data management to a robust PostgreSQL database 
                  with web interface, automated backups, and advanced reporting capabilities.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-3">Workflow Automation</h4>
                <p className="text-white/80 text-sm leading-relaxed">
                  Automated document processing system that eliminates manual data entry, 
                  integrates with existing software, and provides audit trails for compliance.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-3">Self-Hosted Solutions</h4>
                <p className="text-white/80 text-sm leading-relaxed">
                  Complete server setup with Nextcloud, email server, and custom applications, 
                  providing full control over data and reducing dependency on external services.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center">
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Ready to streamline your operations with custom software? Let's build solutions that perfectly fit your business needs.
            </p>
            <Link href="/contact?subject=Software Development Services Inquiry&message=Hello Kite-Engineer,%0A%0AI'm interested in your software development services. Please provide information about:%0A%0A- Custom software solutions and integrations%0A- Database design and migration services%0A- Workflow automation capabilities%0A- Web development and infrastructure%0A%0AMy project requirements:%0A[Please describe your current software challenges, existing systems, desired functionality, and technical requirements]%0A%0ALooking forward to building great software together!">
              <Button
                size="lg"
                className="group bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Build Your Solution
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}