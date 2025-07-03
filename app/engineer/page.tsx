import Image from "next/image";
import engineer_hero_image from "@/public/images/engineer_hero_image.jpg";
import background_image_darker from "@/public/images/background_image_darker.jpeg";
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
  PocketKnife,
  SlidersHorizontal,
  RefreshCw,
  WandSparkles,
  Radiation,
  MapPinPlus,
  MapPinPlusInsideIcon,
  MapIcon,
  ForkKnife,
  Database,
  MonitorCheck,
  FolderKanban,
  Clock1,
  Navigation2Off,
  Share2,
  MessageSquareCode,
  UserRoundCheck,
  Terminal,
} from "lucide-react";

export default function EngineerPage() {
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
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src={engineer_hero_image}
            alt="Engineering"
            fill
            className="object-cover object-[center_20%] brightness-50"
            priority
            placeholder="blur"
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
              Expand your possibilities
            </h2>
            <p className="mt-4 text-xl text-center text-white/80 max-w-3xl mx-auto leading-relaxed">
              Benefit from my engineering services in the fields of IT and
              semiconductors
            </p>
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 via-teal-500 to-emerald-500 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start justify-items-center">
            {/* Process Engineering Section */}
            <div className="bg-gradient-to-br from-blue-900/20 via-card/20 to-cyan-900/20 backdrop-blur-sm p-6 rounded-lg border border-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300 w-full max-w-xl h-fit">
              <h3 className="text-2xl font-bold mb-4 pb-3 border-b border-white/20 flex items-center gap-3 text-blue-200">
                <Settings className="h-7 w-7 text-blue-400" />
                Process Engineering
              </h3>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem
                  value="process-control-1"
                  className="border-white/5"
                >
                  <AccordionTrigger className="hover:text-blue-400 transition-colors text-lg text-left">
                    <div className="flex items-center gap-2">
                      <SlidersHorizontal className="h-5 w-5" />
                      Process Control
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-white/80">
                    APC (Advanced Process control), SPC (Statistical Process
                    Control) and WER (Western Electrical Rules) implementation
                    as core competence. Data analytics using Python, AI training
                    for failure detection, dashboards & KPI setup help along the
                    way.
                    {/* This below is a version with abbr tags that have only an effect on desktop version - not sure if i shall use it */}
                    {/* <abbr title="Advanced Process Control">
                      APC (Advanced Process Control)
                    </abbr>
                    ,{" "}
                    <abbr title="Statistical Process Control">
                      SPC (Statistical Process Control)
                    </abbr>{" "}
                    and{" "}
                    <abbr title="Western Electrical Rules">
                      {" "}
                      WER (Western Electrical Rules)
                    </abbr>{" "}
                    implementation as core competence. Data analytics using
                    Python, AI training for failure detection, dashboards & KPI
                    setup help along the way. */}
                    <div className="mt-4 flex flex-col gap-2">
                      <Link
                        href="/engineer/process-engineering/process-control"
                        className="text-blue-400 hover:text-blue-300 underline text-sm"
                      >
                        More
                      </Link>
                      <Link
                        href="/contact?subject=Let's Connect about your Process Control Services&message=Hello Kite-Engineer,%0A%0APlease provide me with a detailed overview of how you can help me in the area of Process Control. I am particularly interested in APC, SPC, and WER implementation.%0A%0ATherefore I provide you my requirements and specifications:%0A%0A[Please describe your current process control challenges and requirements here]%0A%0ABest regards"
                        className="text-blue-400 hover:text-blue-300 underline text-sm"
                        target="_blank"
                      >
                        Contact
                      </Link>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="process-optimization-1"
                  className="border-white/5"
                >
                  <AccordionTrigger className="hover:text-blue-400 transition-colors text-lg text-left">
                    <div className="flex items-center gap-2">
                      <Gauge className="h-5 w-5" />
                      Process Optimization
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-white/80">
                    Offering 6 sigma and lean techniques to achive the best
                    possible process outcome you want.
                    <div className="mt-4 flex flex-col gap-2">
                      <Link
                        href="/engineer/process-engineering/process-optimization"
                        className="text-blue-400 hover:text-blue-300 underline text-sm"
                      >
                        More
                      </Link>
                      <Link
                        href="/contact?subject=Let's Connect about your Process Optimization Services&message=Hello Kite-Engineer,%0A%0APlease provide me with a detailed overview of how you can help me in the area of Process Optimization. I am interested in 6 sigma and lean techniques for achieving optimal process outcomes.%0A%0ATherefore I provide you my requirements and specifications:%0A%0A[Please describe your current process optimization challenges and goals here]%0A%0ABest regards"
                        className="text-blue-400 hover:text-blue-300 underline text-sm"
                        target="_blank"
                      >
                        Contact
                      </Link>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="change-management-1"
                  className="border-white/5"
                >
                  <AccordionTrigger className="hover:text-blue-400 transition-colors text-lg text-left">
                    <div className="flex items-center gap-2">
                      <RefreshCw className="h-5 w-5" />
                      Change Management
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-white/80">
                    Preparing milestones and passing release gates. It's about
                    documentation and traceability - I do that for you
                    <div className="mt-4 flex flex-col gap-2">
                      <Link
                        href="/engineer/process-engineering/change-management"
                        className="text-blue-400 hover:text-blue-300 underline text-sm"
                      >
                        More
                      </Link>
                      <Link
                        href="/contact?subject=Let's Connect about your Change Management Services&message=Hello Kite-Engineer,%0A%0APlease provide me with a detailed overview of how you can help me in the area of Change Management. I need assistance with milestone preparation, release gates, documentation and traceability.%0A%0ATherefore I provide you my requirements and specifications:%0A%0A[Please describe your current change management challenges and project requirements here]%0A%0ABest regards"
                        className="text-blue-400 hover:text-blue-300 underline text-sm"
                        target="_blank"
                      >
                        Contact
                      </Link>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="monitoring-1" className="border-white/5">
                  <AccordionTrigger className="hover:text-blue-400 transition-colors text-lg text-left">
                    <div className="flex items-center gap-2">
                      <BarChart3 className="h-5 w-5" />
                      Monitoring
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-white/80">
                    Don't know what parameters to monitor and how? Let's define
                    a monitoring setup. And where necessary we find appropriate
                    methods to get a solution for any type of produced volume
                    <div className="mt-4 flex flex-col gap-2">
                      <Link
                        href="/engineer/process-engineering/monitoring"
                        className="text-blue-400 hover:text-blue-300 underline text-sm"
                      >
                        More
                      </Link>
                      <Link
                        href="/contact?subject=Let's Connect about your Monitoring Services&message=Hello Kite-Engineer,%0A%0APlease provide me with a detailed overview of how you can help me in the area of Monitoring. I need assistance with defining monitoring parameters and setting up appropriate monitoring solutions.%0A%0ATherefore I provide you my requirements and specifications:%0A%0A[Please describe your current monitoring challenges and production volume requirements here]%0A%0ABest regards"
                        className="text-blue-400 hover:text-blue-300 underline text-sm"
                        target="_blank"
                      >
                        Contact
                      </Link>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Process Development Section */}
            <div className="bg-gradient-to-br from-cyan-900/25 via-card/25 to-teal-900/25 backdrop-blur-sm p-6 rounded-lg border border-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300 w-full max-w-xl h-fit">
              <h3 className="text-2xl font-bold mb-4 pb-3 border-b border-white/20 flex items-center gap-3 text-cyan-200">
                <FlaskRound className="h-7 w-7 text-cyan-400" />
                Process Development
              </h3>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="research-2" className="border-white/5">
                  <AccordionTrigger className="hover:text-cyan-400 transition-colors text-lg text-left">
                    <div className="flex items-center gap-2">
                      <Lightbulb className="h-5 w-5" />
                      Creativity
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-white/80">
                    There is more then brainstorming - but you already know
                    that. Right? Reach out and let´s activate neurons you´ve not
                    yet known about
                    <div className="mt-4 flex flex-col gap-2">
                      <Link
                        href="/engineer/process-development/creativity"
                        className="text-cyan-400 hover:text-cyan-300 underline text-sm"
                      >
                        More
                      </Link>
                      <Link
                        href="/contact?subject=Let's Connect about your Creative Process Development Services&message=Hello Kite-Engineer,%0A%0APlease provide me with a detailed overview of how you can help me in the area of Creative Process Development. I am interested in innovative approaches beyond traditional brainstorming.%0A%0ATherefore I provide you my requirements and specifications:%0A%0A[Please describe your current creative challenges and development goals here]%0A%0ABest regards"
                        className="text-cyan-400 hover:text-cyan-300 underline text-sm"
                        target="_blank"
                      >
                        Contact
                      </Link>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="process-design-2"
                  className="border-white/5"
                >
                  <AccordionTrigger className="hover:text-cyan-400 transition-colors text-lg text-left">
                    <div className="flex items-center gap-2">
                      <WandSparkles className="h-5 w-5" />
                      Process Design
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-white/80">
                    You know what your process must achive but have boundries
                    locking you into an neverending development cycle? We´ll
                    break it here and now and design what needs to be done.
                    Vizualizations and structuring help a lot
                    <div className="mt-4 flex flex-col gap-2">
                      <Link
                        href="/engineer/process-development/process-design"
                        className="text-cyan-400 hover:text-cyan-300 underline text-sm"
                      >
                        More
                      </Link>
                      <Link
                        href="/contact?subject=Let's Connect about your Process Design Services&message=Hello Kite-Engineer,%0A%0APlease provide me with a detailed overview of how you can help me in the area of Process Design. I need assistance breaking through development cycle boundaries and creating effective process visualizations.%0A%0ATherefore I provide you my requirements and specifications:%0A%0A[Please describe your current process design challenges and development boundaries here]%0A%0ABest regards"
                        className="text-cyan-400 hover:text-cyan-300 underline text-sm"
                        target="_blank"
                      >
                        Contact
                      </Link>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="simulation-prototyping-2"
                  className="border-white/5"
                >
                  <AccordionTrigger className="hover:text-cyan-400 transition-colors text-lg text-left">
                    <div className="flex items-center gap-2">
                      <Radiation className="h-5 w-5" />
                      Simulation and Prototyping
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-white/80">
                    Ever considered to use an analogy model and a simulation to
                    solve a problem? What about getting a physical model printed
                    out in 3D? I prepare your project for any kind of further
                    visualisation and connect you with experts
                    <div className="mt-4 flex flex-col gap-2">
                      <Link
                        href="/engineer/process-development/simulation-prototyping"
                        className="text-cyan-400 hover:text-cyan-300 underline text-sm"
                      >
                        More
                      </Link>
                      <Link
                        href="/contact?subject=Let's Connect about your Simulation and Prototyping Services&message=Hello Kite-Engineer,%0A%0APlease provide me with a detailed overview of how you can help me in the area of Simulation and Prototyping. I am interested in analogy models, simulations, and 3D prototyping solutions.%0A%0ATherefore I provide you my requirements and specifications:%0A%0A[Please describe your current simulation and prototyping needs here]%0A%0ABest regards"
                        className="text-cyan-400 hover:text-cyan-300 underline text-sm"
                        target="_blank"
                      >
                        Contact
                      </Link>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="process-equipment-roadmap-2"
                  className="border-white/5"
                >
                  <AccordionTrigger className="hover:text-cyan-400 transition-colors text-lg text-left">
                    <div className="flex items-center gap-2">
                      <MapIcon className="h-5 w-5" />
                      Process and Equipment Roadmap
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-white/80">
                    Your competitors don´t wait for you to catch up. So better
                    be prepared of what may be necessary in the future. I help
                    you to outline what strategies of next generation technology
                    can bring and how to make it benificial for you.
                    <div className="mt-4 flex flex-col gap-2">
                      <Link
                        href="/engineer/process-development/equipment-roadmap"
                        className="text-cyan-400 hover:text-cyan-300 underline text-sm"
                      >
                        More
                      </Link>
                      <Link
                        href="/contact?subject=Let's Connect about your Process and Equipment Roadmap Services&message=Hello Kite-Engineer,%0A%0APlease provide me with a detailed overview of how you can help me in the area of Process and Equipment Roadmapping. I need assistance preparing for future technology challenges and staying competitive.%0A%0ATherefore I provide you my requirements and specifications:%0A%0A[Please describe your current technology roadmap challenges and future planning needs here]%0A%0ABest regards"
                        className="text-cyan-400 hover:text-cyan-300 underline text-sm"
                        target="_blank"
                      >
                        Contact
                      </Link>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Software Development Section */}
            <div className="bg-gradient-to-br from-teal-900/30 via-card/30 to-emerald-900/30 backdrop-blur-sm p-6 rounded-lg border border-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300 w-full max-w-xl h-fit">
              <h3 className="text-2xl font-bold mb-4 pb-3 border-b border-white/20 flex items-center gap-3 text-teal-200">
                <Terminal className="h-7 w-7 text-teal-400" />
                Software Development
              </h3>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem
                  value="custom-software-3"
                  className="border-white/5"
                >
                  <AccordionTrigger className="hover:text-teal-400 transition-colors text-lg text-left">
                    <div className="flex items-center gap-2">
                      <PocketKnife className="h-5 w-5" />
                      Customized Solutions
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-white/80">
                    Want to combine feature of software A with software B and
                    generate an output that fits your needs? No worries, its
                    just a matter of coffee and time to figure it out. From
                    customized scripts to containerization to front- and and
                    backend integration of custom projects.
                    <div className="mt-4 flex flex-col gap-2">
                      <Link
                        href="/engineer/software-development/custom-solutions"
                        className="text-teal-400 hover:text-teal-300 underline text-sm"
                      >
                        More
                      </Link>
                      <Link
                        href="/contact?subject=Let's Connect about your Customized Software Solutions&message=Hello Kite-Engineer,%0A%0APlease provide me with a detailed overview of how you can help me in the area of Customized Software Solutions. I need assistance combining different software features and creating tailored solutions.%0A%0ATherefore I provide you my requirements and specifications:%0A%0A[Please describe your current software integration challenges and custom development needs here]%0A%0ABest regards"
                        className="text-teal-400 hover:text-teal-300 underline text-sm"
                        target="_blank"
                      >
                        Contact
                      </Link>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="rdbm-3" className="border-white/5">
                  <AccordionTrigger className="hover:text-teal-400 transition-colors text-lg text-left">
                    <div className="flex items-center gap-2">
                      <Database className="h-5 w-5" />
                      Relational Database Management
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-white/80">
                    Wanna go from storing data in files like excel to a more
                    sustainable and better manageable format? Or improve your
                    already existing DB (database)? From setting up a completely
                    new RDBMS (relational database management system) to adjust
                    your DB - I figure it out what we can do.
                    <div className="mt-4 flex flex-col gap-2">
                      <Link
                        href="/engineer/software-development/database-management"
                        className="text-teal-400 hover:text-teal-300 underline text-sm"
                      >
                        More
                      </Link>
                      <Link
                        href="/contact?subject=Let's Connect about your Database Management Services&message=Hello Kite-Engineer,%0A%0APlease provide me with a detailed overview of how you can help me in the area of Relational Database Management. I need assistance transitioning from file-based storage to a proper RDBMS or improving my existing database.%0A%0ATherefore I provide you my requirements and specifications:%0A%0A[Please describe your current data storage challenges and database requirements here]%0A%0ABest regards"
                        className="text-teal-400 hover:text-teal-300 underline text-sm"
                        target="_blank"
                      >
                        Contact
                      </Link>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="workflow-automatisation-3"
                  className="border-white/5"
                >
                  <AccordionTrigger className="hover:text-teal-400 transition-colors text-lg text-left">
                    <div className="flex items-center gap-2">
                      <Network className="h-5 w-5" />
                      Workflow Automatisation
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-white/80">
                    Save time and let software do your repeating tasks. We work
                    out the concept and then implement it step by step, based on
                    your needs. I´m sure a lot of your already used software
                    already supports automatisation
                    <div className="mt-4 flex flex-col gap-2">
                      <Link
                        href="/engineer/software-development/workflow-automation"
                        className="text-teal-400 hover:text-teal-300 underline text-sm"
                      >
                        More
                      </Link>
                      <Link
                        href="/contact?subject=Let's Connect about your Workflow Automation Services&message=Hello Kite-Engineer,%0A%0APlease provide me with a detailed overview of how you can help me in the area of Workflow Automation. I need assistance automating repetitive tasks and optimizing my current workflows.%0A%0ATherefore I provide you my requirements and specifications:%0A%0A[Please describe your current repetitive tasks and automation needs here]%0A%0ABest regards"
                        className="text-teal-400 hover:text-teal-300 underline text-sm"
                        target="_blank"
                      >
                        Contact
                      </Link>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="web-development-3"
                  className="border-white/5"
                >
                  <AccordionTrigger className="hover:text-teal-400 transition-colors text-lg text-left">
                    <div className="flex items-center gap-2">
                      <MonitorCheck className="h-5 w-5" />
                      Web Development
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-white/80">
                    Server and domain related setup? Or wanna have an own
                    Nextcloud? Outsource your web administration to me. And if
                    you need a website too, bring your design and I also manage
                    that for you
                    <div className="mt-4 flex flex-col gap-2">
                      <Link
                        href="/engineer/software-development/web-development"
                        className="text-teal-400 hover:text-teal-300 underline text-sm"
                      >
                        More
                      </Link>
                      <Link
                        href="/contact?subject=Let's Connect about your Web Development Services&message=Hello Kite-Engineer,%0A%0APlease provide me with a detailed overview of how you can help me in the area of Web Development. I need assistance with server setup, domain management, or website development.%0A%0ATherefore I provide you my requirements and specifications:%0A%0A[Please describe your current web development needs and technical requirements here]%0A%0ABest regards"
                        className="text-teal-400 hover:text-teal-300 underline text-sm"
                        target="_blank"
                      >
                        Contact
                      </Link>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Project Management Section */}
            <div className="bg-gradient-to-br from-emerald-900/35 via-card/35 to-blue-900/35 backdrop-blur-sm p-6 rounded-lg border border-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300 w-full max-w-xl h-fit">
              <h3 className="text-2xl font-bold mb-4 pb-3 border-b border-white/20 flex items-center gap-3 text-emerald-200">
                <ClipboardList className="h-7 w-7 text-emerald-400" />
                Project Management
              </h3>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem
                  value="project-setup-4"
                  className="border-white/5"
                >
                  <AccordionTrigger className="hover:text-emerald-400 transition-colors text-lg text-left">
                    <div className="flex items-center gap-2">
                      <FolderKanban className="h-5 w-5" />
                      Project Setup
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-white/80">
                    Get more time for other things and let me do the "what shall
                    be delivered until when by whome and how...". Setting things
                    up properly not only gives a good feeling, it also is the
                    foundation to achive goals sustainable
                    <div className="mt-4 flex flex-col gap-2">
                      <Link
                        href="/engineer/project-management/project-setup"
                        className="text-emerald-400 hover:text-emerald-300 underline text-sm"
                      >
                        More
                      </Link>
                      <Link
                        href="/contact?subject=Let's Connect about your Project Setup Services&message=Hello Kite-Engineer,%0A%0APlease provide me with a detailed overview of how you can help me in the area of Project Setup. I need assistance with project planning, deliverable definition, and establishing sustainable project foundations.%0A%0ATherefore I provide you my requirements and specifications:%0A%0A[Please describe your current project setup challenges and planning needs here]%0A%0ABest regards"
                        className="text-emerald-400 hover:text-emerald-300 underline text-sm"
                        target="_blank"
                      >
                        Contact
                      </Link>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="timeline-management-4"
                  className="border-white/5"
                >
                  <AccordionTrigger className="hover:text-emerald-400 transition-colors text-lg text-left">
                    <div className="flex items-center gap-2">
                      <Clock1 className="h-5 w-5" />
                      Timeline Management
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-white/80">
                    It´s all about timing. Sometimes things don´t work out as
                    planed and you need to rebalance your project timelines.
                    Someone with an outside-view like me can help at that stage.
                    <div className="mt-4 flex flex-col gap-2">
                      <Link
                        href="/engineer/project-management/timeline-management"
                        className="text-emerald-400 hover:text-emerald-300 underline text-sm"
                      >
                        More
                      </Link>
                      <Link
                        href="/contact?subject=Let's Connect about your Timeline Management Services&message=Hello Kite-Engineer,%0A%0APlease provide me with a detailed overview of how you can help me in the area of Timeline Management. I need assistance rebalancing project timelines and getting an outside perspective on project timing.%0A%0ATherefore I provide you my requirements and specifications:%0A%0A[Please describe your current timeline challenges and project scheduling needs here]%0A%0ABest regards"
                        className="text-emerald-400 hover:text-emerald-300 underline text-sm"
                        target="_blank"
                      >
                        Contact
                      </Link>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="deviation-management-4"
                  className="border-white/5"
                >
                  <AccordionTrigger className="hover:text-emerald-400 transition-colors text-lg text-left">
                    <div className="flex items-center gap-2">
                      <Navigation2Off className="h-5 w-5" />
                      Deviation Management
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-white/80">
                    Especially when external parties are involved it´s not
                    always easy to communicate unexpected detours in your
                    project. Hand it over and get your back covered while you
                    have time to rework a get back into your commited shape.
                    <div className="mt-4 flex flex-col gap-2">
                      <Link
                        href="/engineer/project-management/deviation-management"
                        className="text-emerald-400 hover:text-emerald-300 underline text-sm"
                      >
                        More
                      </Link>
                      <Link
                        href="/contact?subject=Let's Connect about your Deviation Management Services&message=Hello Kite-Engineer,%0A%0APlease provide me with a detailed overview of how you can help me in the area of Deviation Management. I need assistance managing project detours and communicating with external parties during unexpected changes.%0A%0ATherefore I provide you my requirements and specifications:%0A%0A[Please describe your current deviation management challenges and external communication needs here]%0A%0ABest regards"
                        className="text-emerald-400 hover:text-emerald-300 underline text-sm"
                        target="_blank"
                      >
                        Contact
                      </Link>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="documentation-4"
                  className="border-white/5"
                >
                  <AccordionTrigger className="hover:text-emerald-400 transition-colors text-lg text-left">
                    <div className="flex items-center gap-2">
                      <Share2 className="h-5 w-5" />
                      Documentation and Sharing
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-white/80">
                    Version control and data sharing is not executed on a top
                    level if everyone works on their own devices and only shares
                    on demand. These times are long gone - let´s create
                    synergies in your team that always were there but were never
                    used
                    <div className="mt-4 flex flex-col gap-2">
                      <Link
                        href="/engineer/project-management/documentation"
                        className="text-emerald-400 hover:text-emerald-300 underline text-sm"
                      >
                        More
                      </Link>
                      <Link
                        href="/contact?subject=Let's Connect about your Documentation and Sharing Services&message=Hello Kite-Engineer,%0A%0APlease provide me with a detailed overview of how you can help me in the area of Documentation and Sharing. I need assistance with version control, data sharing, and creating team synergies.%0A%0ATherefore I provide you my requirements and specifications:%0A%0A[Please describe your current documentation challenges and team collaboration needs here]%0A%0ABest regards"
                        className="text-emerald-400 hover:text-emerald-300 underline text-sm"
                        target="_blank"
                      >
                        Contact
                      </Link>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Technical Consulting Section */}
            <div className="bg-gradient-to-br from-blue-900/40 via-card/40 to-cyan-900/40 backdrop-blur-sm p-6 rounded-lg border border-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300 w-full max-w-xl h-fit">
              <h3 className="text-2xl font-bold mb-4 pb-3 border-b border-white/20 flex items-center gap-3 text-blue-200">
                <MessageSquareCode className="h-7 w-7 text-blue-400" />
                Technical Consulting
              </h3>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem
                  value="process-assessment-5"
                  className="border-white/5"
                >
                  <AccordionTrigger className="hover:text-blue-400 transition-colors text-lg text-left">
                    <div className="flex items-center gap-2">
                      <FileSearch className="h-5 w-5" />
                      Process Assessment
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-white/80">
                    Get an outside view onto what is running at your business.
                    Detailed feedback on what shall not be changed and what
                    offers potential for improvement and what may be necessary
                    to be done for this.
                    <div className="mt-4 flex flex-col gap-2">
                      <Link
                        href="/engineer/technical-consulting/process-assessment"
                        className="text-blue-400 hover:text-blue-300 underline text-sm"
                      >
                        More
                      </Link>
                      <Link
                        href="/contact?subject=Let's Connect about your Process Assessment Services&message=Hello Kite-Engineer,%0A%0APlease provide me with a detailed overview of how you can help me in the area of Process Assessment. I need an outside perspective on my business processes and detailed feedback on improvement opportunities.%0A%0ATherefore I provide you my requirements and specifications:%0A%0A[Please describe your current business processes and assessment needs here]%0A%0ABest regards"
                        className="text-blue-400 hover:text-blue-300 underline text-sm"
                        target="_blank"
                      >
                        Contact
                      </Link>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="technology-roadmap-5"
                  className="border-white/5"
                >
                  <AccordionTrigger className="hover:text-blue-400 transition-colors text-lg text-left">
                    <div className="flex items-center gap-2">
                      <Microscope className="h-5 w-5" />
                      Topic Related Research
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-white/80">
                    You know there are a lot of things going on around you and
                    you can´t always figure out what to filter how to get to
                    know what matters for you and your business. I like reading
                    technical stuff - let me do this. Why shall we not work
                    together?
                    <div className="mt-4 flex flex-col gap-2">
                      <Link
                        href="/engineer/technical-consulting/technical-research"
                        className="text-blue-400 hover:text-blue-300 underline text-sm"
                      >
                        More
                      </Link>
                      <Link
                        href="/contact?subject=Let's Connect about your Technical Research Services&message=Hello Kite-Engineer,%0A%0APlease provide me with a detailed overview of how you can help me in the area of Technical Research. I need assistance filtering and analyzing technical information relevant to my business.%0A%0ATherefore I provide you my requirements and specifications:%0A%0A[Please describe your current research needs and technical topics of interest here]%0A%0ABest regards"
                        className="text-blue-400 hover:text-blue-300 underline text-sm"
                        target="_blank"
                      >
                        Contact
                      </Link>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="training-5" className="border-white/5">
                  <AccordionTrigger className="hover:text-blue-400 transition-colors text-lg text-left">
                    <div className="flex items-center gap-2">
                      <GraduationCap className="h-5 w-5" />
                      Training & Knowledge Transfer
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-white/80">
                    I embrace everyone to never stop learning. Thus I am more
                    then willing to share everything I know with you and your
                    business.
                    <div className="mt-4 flex flex-col gap-2">
                      <Link
                        href="/engineer/technical-consulting/training-knowledge-transfer"
                        className="text-blue-400 hover:text-blue-300 underline text-sm"
                      >
                        More
                      </Link>
                      <Link
                        href="/contact?subject=Let's Connect about your Training and Knowledge Transfer Services&message=Hello Kite-Engineer,%0A%0APlease provide me with a detailed overview of how you can help me in the area of Training and Knowledge Transfer. I am interested in continuous learning opportunities for myself and my business.%0A%0ATherefore I provide you my requirements and specifications:%0A%0A[Please describe your current training needs and knowledge transfer requirements here]%0A%0ABest regards"
                        className="text-blue-400 hover:text-blue-300 underline text-sm"
                        target="_blank"
                      >
                        Contact
                      </Link>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="competitor-analysis-5"
                  className="border-white/5"
                >
                  <AccordionTrigger className="hover:text-blue-400 transition-colors text-lg text-left">
                    <div className="flex items-center gap-2">
                      <UserRoundCheck className="h-5 w-5" />
                      Competitor Analysis
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-white/80">
                    Sure, everyone wants to know what others are up to - why not
                    getting it done professionally and save your time for your
                    business? I scout and report for you.
                    <div className="mt-4 flex flex-col gap-2">
                      <Link
                        href="/engineer/technical-consulting/competitor-analysis"
                        className="text-blue-400 hover:text-blue-300 underline text-sm"
                      >
                        More
                      </Link>
                      <Link
                        href="/contact?subject=Let's Connect about your Competitor Analysis Services&message=Hello Kite-Engineer,%0A%0APlease provide me with a detailed overview of how you can help me in the area of Competitor Analysis. I need professional scouting and reporting on my competition to save time for my core business.%0A%0ATherefore I provide you my requirements and specifications:%0A%0A[Please describe your current competitive landscape and analysis needs here]%0A%0ABest regards"
                        className="text-blue-400 hover:text-blue-300 underline text-sm"
                        target="_blank"
                      >
                        Contact
                      </Link>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          {/* Enhanced Contact Section */}
          <div className="mt-16 text-center">
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Ready to elevate your project? You always get whatever is
              necessary from my services. The provided overview is meant to be
              an orientation and only a glimps of what is possible. Reach out
              for a free consultation and let's see how we can achieve your
              goals together.
            </p>
            <Link href="/contact" target="_blank">
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
