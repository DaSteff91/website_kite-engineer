import Image from "next/image";
import background_image_darker from "@/public/images/background_image_darker.jpeg";
import engineer_hero_image from "@/public/images/engineer_hero_image.jpg";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, Settings, SlidersHorizontal, Gauge, RefreshCw, BarChart3, TrendingUp, Target } from "lucide-react";

export default function ProcessEngineeringPage() {
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
            alt="Process Engineering"
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
            Process Engineering Services
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
              Back to Engineering Services
            </Link>
          </div>

          <div className="relative mb-16 sm:mb-20">
            <h2
              className="text-xl sm:text-2xl md:text-3xl font-bold text-center max-w-4xl mx-auto leading-relaxed 
   bg-[linear-gradient(to_right,white,rgba(229,231,235,0.8),rgba(209,213,219,1))] 
   bg-clip-text text-transparent animate-gradient"
            >
              Optimize Your Manufacturing Processes
            </h2>
            <p className="mt-4 text-lg sm:text-xl text-center text-white/80 max-w-3xl mx-auto leading-relaxed">
              Advanced process control, optimization, and monitoring solutions for semiconductor and manufacturing industries
            </p>
            <div className="absolute -bottom-6 sm:-bottom-8 left-1/2 transform -translate-x-1/2 w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-500 via-teal-500 to-emerald-500 rounded-full"></div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto mb-16">
            <div className="bg-gradient-to-br from-blue-900/20 via-card/20 to-cyan-900/20 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <SlidersHorizontal className="h-6 w-6 text-blue-400" />
                <h3 className="text-lg font-semibold text-blue-200">Advanced Process Control</h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li>• APC implementation and optimization</li>
                <li>• Real-time process monitoring</li>
                <li>• Feedback and feedforward control</li>
                <li>• Model predictive control (MPC)</li>
                <li>• Control loop tuning and validation</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-cyan-900/25 via-card/25 to-teal-900/25 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <BarChart3 className="h-6 w-6 text-cyan-400" />
                <h3 className="text-lg font-semibold text-cyan-200">Statistical Process Control</h3>
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
                <Gauge className="h-6 w-6 text-teal-400" />
                <h3 className="text-lg font-semibold text-teal-200">Process Optimization</h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li>• Six Sigma methodologies</li>
                <li>• Lean manufacturing principles</li>
                <li>• Design of Experiments (DOE)</li>
                <li>• Process efficiency improvements</li>
                <li>• Yield enhancement strategies</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-emerald-900/35 via-card/35 to-blue-900/35 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <RefreshCw className="h-6 w-6 text-emerald-400" />
                <h3 className="text-lg font-semibold text-emerald-200">Change Management</h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li>• Process change documentation</li>
                <li>• Release gate management</li>
                <li>• Traceability systems</li>
                <li>• Version control protocols</li>
                <li>• Compliance and audit support</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-900/40 via-card/40 to-cyan-900/40 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="h-6 w-6 text-blue-400" />
                <h3 className="text-lg font-semibold text-blue-200">Data Analytics</h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li>• Python-based data analysis</li>
                <li>• Machine learning for process insights</li>
                <li>• Predictive analytics models</li>
                <li>• Dashboard and visualization tools</li>
                <li>• Automated reporting systems</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-cyan-900/45 via-card/45 to-teal-900/45 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Target className="h-6 w-6 text-cyan-400" />
                <h3 className="text-lg font-semibold text-cyan-200">Monitoring Solutions</h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li>• Real-time monitoring systems</li>
                <li>• Alarm and notification setup</li>
                <li>• Parameter selection and optimization</li>
                <li>• Trend analysis and reporting</li>
                <li>• Performance benchmarking</li>
              </ul>
            </div>
          </div>

          {/* Methodologies */}
          <div className="bg-gradient-to-br from-blue-900/15 via-card/15 to-cyan-900/15 backdrop-blur-sm p-6 sm:p-8 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] max-w-4xl mx-auto mb-16">
            <h3 className="text-xl sm:text-2xl font-bold mb-6 text-center text-blue-200">Our Process Engineering Approach</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-blue-500/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-300 font-bold text-lg">1</span>
                </div>
                <h4 className="font-semibold text-white mb-3">Assessment & Analysis</h4>
                <p className="text-white/80 text-sm leading-relaxed">
                  Comprehensive evaluation of current processes, identification of bottlenecks, and analysis of improvement opportunities.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-cyan-500/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <span className="text-cyan-300 font-bold text-lg">2</span>
                </div>
                <h4 className="font-semibold text-white mb-3">Implementation & Optimization</h4>
                <p className="text-white/80 text-sm leading-relaxed">
                  Deploy advanced control strategies, implement monitoring systems, and optimize process parameters for maximum efficiency.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-teal-500/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <span className="text-teal-300 font-bold text-lg">3</span>
                </div>
                <h4 className="font-semibold text-white mb-3">Monitoring & Maintenance</h4>
                <p className="text-white/80 text-sm leading-relaxed">
                  Continuous monitoring, performance tracking, and ongoing optimization to ensure sustained improvements.
                </p>
              </div>
            </div>
          </div>

          {/* Technologies & Tools */}
          <div className="bg-gradient-to-br from-cyan-900/15 via-card/15 to-teal-900/15 backdrop-blur-sm p-6 sm:p-8 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] max-w-4xl mx-auto mb-16">
            <h3 className="text-xl sm:text-2xl font-bold mb-6 text-center text-cyan-200">Technologies & Expertise</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-white mb-3">Control Systems</h4>
                <ul className="text-white/80 text-sm space-y-1">
                  <li>• Advanced Process Control (APC)</li>
                  <li>• Statistical Process Control (SPC)</li>
                  <li>• Western Electrical Rules (WER)</li>
                  <li>• Model Predictive Control (MPC)</li>
                  <li>• Feedback/Feedforward Control</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-3">Data Analytics</h4>
                <ul className="text-white/80 text-sm space-y-1">
                  <li>• Python for data analysis</li>
                  <li>• Machine learning algorithms</li>
                  <li>• AI-based failure detection</li>
                  <li>• Predictive analytics</li>
                  <li>• Statistical modeling</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-3">Quality Methodologies</h4>
                <ul className="text-white/80 text-sm space-y-1">
                  <li>• Six Sigma Green Belt certified</li>
                  <li>• Lean manufacturing principles</li>
                  <li>• Design of Experiments (DOE)</li>
                  <li>• Process capability studies</li>
                  <li>• Root cause analysis</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-3">Visualization & Reporting</h4>
                <ul className="text-white/80 text-sm space-y-1">
                  <li>• Dashboard development</li>
                  <li>• KPI tracking systems</li>
                  <li>• Real-time monitoring displays</li>
                  <li>• Automated reporting</li>
                  <li>• Trend analysis tools</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Industry Applications */}
          <div className="bg-gradient-to-br from-teal-900/15 via-card/15 to-emerald-900/15 backdrop-blur-sm p-6 sm:p-8 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] max-w-4xl mx-auto mb-16">
            <h3 className="text-xl sm:text-2xl font-bold mb-6 text-center text-teal-200">Industry Applications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-white mb-3">Semiconductor Manufacturing</h4>
                <p className="text-white/80 text-sm leading-relaxed">
                  Specialized expertise in semiconductor process control, yield optimization, 
                  and advanced manufacturing techniques for wafer fabrication and assembly processes.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-3">General Manufacturing</h4>
                <p className="text-white/80 text-sm leading-relaxed">
                  Process optimization and control solutions applicable across various manufacturing 
                  industries, from automotive to pharmaceuticals and beyond.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-3">Quality Assurance</h4>
                <p className="text-white/80 text-sm leading-relaxed">
                  Implementation of robust quality control systems, statistical process monitoring, 
                  and continuous improvement methodologies to ensure consistent product quality.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-3">Process Development</h4>
                <p className="text-white/80 text-sm leading-relaxed">
                  Support for new process development, technology transfer, and scaling from 
                  laboratory to production environments with proper control strategies.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center">
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Ready to optimize your manufacturing processes? Let's implement advanced control strategies that drive efficiency and quality.
            </p>
            <Link href="/contact?subject=Process Engineering Services Inquiry&message=Hello Kite-Engineer,%0A%0AI'm interested in your process engineering services. Please provide information about:%0A%0A- Advanced process control implementation%0A- Statistical process control and monitoring%0A- Process optimization methodologies%0A- Data analytics and AI solutions%0A%0AMy current challenges:%0A[Please describe your current process challenges, manufacturing environment, and specific goals for improvement]%0A%0ALooking forward to optimizing our processes!">
              <Button
                size="lg"
                className="group bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Optimize Your Processes
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}