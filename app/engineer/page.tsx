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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr justify-items-center">
            {/* Process Engineering Section */}
            <div className="bg-gradient-to-br from-blue-900/20 via-card/20 to-cyan-900/20 backdrop-blur-sm p-6 rounded-lg border border-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300 w-full max-w-xl">
              <h3 className="text-2xl font-bold mb-4 pb-3 border-b border-white/20 flex items-center gap-3 text-blue-200">
                <Settings className="h-7 w-7 text-blue-400" />
                Process Engineering
              </h3>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem
                  value="process-control"
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
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="process-optimization"
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
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="change-management"
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
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="monitoring" className="border-white/5">
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
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Process Development Section */}
            <div className="bg-gradient-to-br from-cyan-900/25 via-card/25 to-teal-900/25 backdrop-blur-sm p-6 rounded-lg border border-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300 w-full max-w-xl">
              <h3 className="text-2xl font-bold mb-4 pb-3 border-b border-white/20 flex items-center gap-3 text-cyan-200">
                <FlaskRound className="h-7 w-7 text-cyan-400" />
                Process Development
              </h3>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="research" className="border-white/5">
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
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="process-design"
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
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="simulation-prototyping"
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
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="process-equipment-roadmap"
                  className="border-white/5"
                >
                  <AccordionTrigger className="hover:text-cyan-400 transition-colors text-lg text-left">
                    <div className="flex items-center gap-2">
                      <MapIcon className="h-5 w-5" />
                      Process and Equipment Roadmap
                    </div>
                    {/* <div className="flex items-center">
                      <MapIcon className="h-5 w-5" />
                    </div>
                    <div className="flex items-start gap-2">
                      Process and Equipment Roadmap
                    </div> */}
                  </AccordionTrigger>
                  <AccordionContent className="text-white/80">
                    Your competitors don´t wait for you to catch up. Be prepared
                    of what may be necessary in the future. I help you to
                    outline possible challenges for the next generation of
                    technology you wanna choose and how to tackle them.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Software Development Section */}
            <div className="bg-gradient-to-br from-teal-900/30 via-card/30 to-emerald-900/30 backdrop-blur-sm p-6 rounded-lg border border-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300 w-full max-w-xl">
              <h3 className="text-2xl font-bold mb-4 pb-3 border-b border-white/20 flex items-center gap-3 text-teal-200">
                <Terminal className="h-7 w-7 text-teal-400" />
                Software Development
              </h3>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem
                  value="custom-software"
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
                    just a matter of coffee and time to figure it. From
                    customized scripts to containerization to front- and and
                    backend integration of custom projects.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="rdbm" className="border-white/5">
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
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="workflow-automatisation"
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
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="web-development"
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
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Project Management Section */}
            <div className="bg-gradient-to-br from-emerald-900/35 via-card/35 to-blue-900/35 backdrop-blur-sm p-6 rounded-lg border border-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300 w-full max-w-xl">
              <h3 className="text-2xl font-bold mb-4 pb-3 border-b border-white/20 flex items-center gap-3 text-emerald-200">
                <ClipboardList className="h-7 w-7 text-emerald-400" />
                Project Management
              </h3>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="project-setup" className="border-white/5">
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
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="timeline-management"
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
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="deviation-management"
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
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="documentation" className="border-white/5">
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
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Technical Consulting Section */}
            <div className="bg-gradient-to-br from-blue-900/40 via-card/40 to-cyan-900/40 backdrop-blur-sm p-6 rounded-lg border border-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300 w-full max-w-xl">
              <h3 className="text-2xl font-bold mb-4 pb-3 border-b border-white/20 flex items-center gap-3 text-blue-200">
                <MessageSquareCode className="h-7 w-7 text-blue-400" />
                Technical Consulting
              </h3>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem
                  value="process-assessment"
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
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="technology-roadmap"
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
                    technical suff - let me do this. Why shall we not work
                    together?
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="training" className="border-white/5">
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
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="competitor-analysis"
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
