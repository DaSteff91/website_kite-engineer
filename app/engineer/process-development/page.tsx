import Image from "next/image";
import background_image_darker from "@/public/images/background_image_darker.jpeg";
import engineer_hero_image from "@/public/images/engineer_hero_image.jpg";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, FlaskRound, Lightbulb, WandSparkles, Radiation, MapIcon, Beaker, Cpu, Layers } from "lucide-react";

export default function ProcessDevelopmentPage() {
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
            alt="Process Development"
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
            Process Development Services
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
              Back to Engineering Services
            </Link>
          </div>

          <div className="relative mb-16 sm:mb-20">
            <h2
              className="text-xl sm:text-2xl md:text-3xl font-bold text-center max-w-4xl mx-auto leading-relaxed 
   bg-[linear-gradient(to_right,white,rgba(229,231,235,0.8),rgba(209,213,219,1))] 
   bg-clip-text text-transparent animate-gradient"
            >
              Innovate and Design Tomorrow's Processes
            </h2>
            <p className="mt-4 text-lg sm:text-xl text-center text-white/80 max-w-3xl mx-auto leading-relaxed">
              From creative brainstorming to advanced simulations - develop breakthrough manufacturing solutions
            </p>
            <div className="absolute -bottom-6 sm:-bottom-8 left-1/2 transform -translate-x-1/2 w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-500 via-teal-500 to-emerald-500 rounded-full"></div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto mb-16">
            <div className="bg-gradient-to-br from-cyan-900/20 via-card/20 to-teal-900/20 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Lightbulb className="h-6 w-6 text-cyan-400" />
                <h3 className="text-lg font-semibold text-cyan-200">Creative Innovation</h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li>• Advanced brainstorming techniques</li>
                <li>• TRIZ methodology application</li>
                <li>• Design thinking workshops</li>
                <li>• Cross-functional ideation sessions</li>
                <li>• Innovation pipeline development</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-teal-900/25 via-card/25 to-emerald-900/25 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <WandSparkles className="h-6 w-6 text-teal-400" />
                <h3 className="text-lg font-semibold text-teal-200">Process Design</h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li>• Process flow optimization</li>
                <li>• Equipment specification and layout</li>
                <li>• Process visualization and modeling</li>
                <li>• Constraint analysis and resolution</li>
                <li>• Scalability planning</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-emerald-900/30 via-card/30 to-blue-900/30 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Radiation className="h-6 w-6 text-emerald-400" />
                <h3 className="text-lg font-semibold text-emerald-200">Simulation & Modeling</h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li>• Process simulation software</li>
                <li>• Computational fluid dynamics (CFD)</li>
                <li>• Finite element analysis (FEA)</li>
                <li>• Monte Carlo simulations</li>
                <li>• Digital twin development</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-900/35 via-card/35 to-cyan-900/35 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Beaker className="h-6 w-6 text-blue-400" />
                <h3 className="text-lg font-semibold text-blue-200">Prototyping Solutions</h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li>• 3D printing and rapid prototyping</li>
                <li>• Physical model development</li>
                <li>• Proof-of-concept validation</li>
                <li>• Scale model testing</li>
                <li>• Expert network connections</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-cyan-900/40 via-card/40 to-teal-900/40 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <MapIcon className="h-6 w-6 text-cyan-400" />
                <h3 className="text-lg font-semibold text-cyan-200">Technology Roadmapping</h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li>• Future technology assessment</li>
                <li>• Competitive landscape analysis</li>
                <li>• Equipment evolution planning</li>
                <li>• Risk mitigation strategies</li>
                <li>• Investment prioritization</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-teal-900/45 via-card/45 to-emerald-900/45 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Layers className="h-6 w-6 text-teal-400" />
                <h3 className="text-lg font-semibold text-teal-200">Process Integration</h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li>• Multi-step process optimization</li>
                <li>• Interface design and control</li>
                <li>• Material flow optimization</li>
                <li>• Quality gate implementation</li>
                <li>• System-level validation</li>
              </ul>
            </div>
          </div>

          {/* Development Methodology */}
          <div className="bg-gradient-to-br from-cyan-900/15 via-card/15 to-teal-900/15 backdrop-blur-sm p-6 sm:p-8 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] max-w-4xl mx-auto mb-16">
            <h3 className="text-xl sm:text-2xl font-bold mb-6 text-center text-cyan-200">Our Development Methodology</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-cyan-500/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <span className="text-cyan-300 font-bold text-lg">1</span>
                </div>
                <h4 className="font-semibold text-white mb-3">Ideation</h4>
                <p className="text-white/80 text-sm leading-relaxed">
                  Creative brainstorming and systematic innovation techniques to generate breakthrough concepts.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-teal-500/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <span className="text-teal-300 font-bold text-lg">2</span>
                </div>
                <h4 className="font-semibold text-white mb-3">Design</h4>
                <p className="text-white/80 text-sm leading-relaxed">
                  Detailed process design with visualization, modeling, and constraint analysis.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-emerald-500/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <span className="text-emerald-300 font-bold text-lg">3</span>
                </div>
                <h4 className="font-semibold text-white mb-3">Simulation</h4>
                <p className="text-white/80 text-sm leading-relaxed">
                  Advanced modeling and simulation to validate concepts before physical implementation.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-500/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-300 font-bold text-lg">4</span>
                </div>
                <h4 className="font-semibold text-white mb-3">Validation</h4>
                <p className="text-white/80 text-sm leading-relaxed">
                  Prototyping, testing, and validation to ensure process viability and performance.
                </p>
              </div>
            </div>
          </div>

          {/* Innovation Techniques */}
          <div className="bg-gradient-to-br from-teal-900/15 via-card/15 to-emerald-900/15 backdrop-blur-sm p-6 sm:p-8 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] max-w-4xl mx-auto mb-16">
            <h3 className="text-xl sm:text-2xl font-bold mb-6 text-center text-teal-200">Innovation Techniques & Tools</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-white mb-3">Creative Methods</h4>
                <ul className="text-white/80 text-sm space-y-1">
                  <li>• TRIZ (Theory of Inventive Problem Solving)</li>
                  <li>• Design thinking methodologies</li>
                  <li>• Biomimicry and nature-inspired solutions</li>
                  <li>• Lateral thinking techniques</li>
                  <li>• Cross-industry innovation transfer</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-3">Simulation Tools</h4>
                <ul className="text-white/80 text-sm space-y-1">
                  <li>• ANSYS for multiphysics simulation</li>
                  <li>• COMSOL for process modeling</li>
                  <li>• MATLAB/Simulink for system design</li>
                  <li>• Python for custom simulations</li>
                  <li>• CAD integration and visualization</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-3">Prototyping Capabilities</h4>
                <ul className="text-white/80 text-sm space-y-1">
                  <li>• 3D printing and additive manufacturing</li>
                  <li>• Rapid prototyping techniques</li>
                  <li>• Scale model development</li>
                  <li>• Virtual reality visualization</li>
                  <li>• Expert fabrication networks</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-3">Analysis Methods</h4>
                <ul className="text-white/80 text-sm space-y-1">
                  <li>• Failure mode and effects analysis (FMEA)</li>
                  <li>• Design for manufacturability (DFM)</li>
                  <li>• Cost-benefit analysis</li>
                  <li>• Technology readiness assessment</li>
                  <li>• Intellectual property landscape analysis</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Application Areas */}
          <div className="bg-gradient-to-br from-emerald-900/15 via-card/15 to-blue-900/15 backdrop-blur-sm p-6 sm:p-8 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] max-w-4xl mx-auto mb-16">
            <h3 className="text-xl sm:text-2xl font-bold mb-6 text-center text-emerald-200">Development Focus Areas</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-white mb-3">Semiconductor Processes</h4>
                <p className="text-white/80 text-sm leading-relaxed">
                  Next-generation semiconductor manufacturing processes, including advanced lithography, 
                  etching, deposition, and packaging technologies for future technology nodes.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-3">Sustainable Manufacturing</h4>
                <p className="text-white/80 text-sm leading-relaxed">
                  Environmentally conscious process development focusing on energy efficiency, 
                  waste reduction, and sustainable material usage in manufacturing operations.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-3">Advanced Materials</h4>
                <p className="text-white/80 text-sm leading-relaxed">
                  Process development for novel materials including nanomaterials, composites, 
                  and smart materials with unique properties and applications.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-3">Industry 4.0 Integration</h4>
                <p className="text-white/80 text-sm leading-relaxed">
                  Smart manufacturing processes incorporating IoT, AI, and automation technologies 
                  for enhanced efficiency, quality, and adaptability.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center">
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Ready to develop breakthrough processes? Let's innovate together and create the manufacturing solutions of tomorrow.
            </p>
            <Link href="/contact?subject=Process Development Services Inquiry&message=Hello Kite-Engineer,%0A%0AI'm interested in your process development services. Please provide information about:%0A%0A- Creative innovation and design thinking%0A- Process simulation and modeling capabilities%0A- Prototyping and validation services%0A- Technology roadmapping support%0A%0AMy development needs:%0A[Please describe your current development challenges, target applications, technology constraints, and innovation goals]%0A%0AExcited to innovate together!">
              <Button
                size="lg"
                className="group bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-700 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Start Innovating
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}