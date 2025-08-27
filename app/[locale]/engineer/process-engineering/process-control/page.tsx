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
  BaggageClaim,
} from "lucide-react";
import { PAGE_METADATA } from "@/lib/constants/metadata";
import { generateContactHref } from "@/lib/utils/contact-filler";
import { Hero } from "@/components/sections/Hero";

export const metadata =
  PAGE_METADATA["engineer/process-engineering/process-control"];

export default function ProcessControlPage() {
  return (
    <div className="relative min-h-screen">
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
            <Hero
        route="/engineer"
        objectPosition="center 45%"
        brightness={50}
        minHeight="60vh"
      >
        <h1
          className="pb-1 text-4xl md:text-5xl font-bold mb-6 
           bg-gradient-to-r from-white via-gray-200 to-gray-300 
           bg-clip-text text-transparent 
           [text-shadow:0_0_8px_rgba(209,213,219,0.6)]"
        >
          Process Control Services
        </h1>
      </Hero>

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
                  • <strong>Software procurement and setup</strong> - You
                  already have lots of process data of your manufacturing
                  processes available but you lack a centralized software that
                  is providing what your team needs and at the same time
                  integrates into what is already setup? I help you finding your{" "}
                  <abbr title="advanced process control">APC</abbr> software as
                  well I can take over all the communication with possible
                  partner. Furthermore I offer to write requirement
                  specifications, do first sample testing and support its
                  rollout.
                </li>
                <li>
                  • <strong>User training</strong> - Are you looking forward to
                  standardize the way{" "}
                  <abbr title="advanced process control">APC</abbr> is used in
                  your company? I provide a platform based training for you or
                  your team to make it become a solid common ground of expertise
                  for further steps. It has a step-based approach and starts
                  with general <abbr title="advanced process control">APC</abbr>{" "}
                  ideas and rises to advanced approaches and specific topics
                  that can also involve the software that you are using.{" "}
                </li>
                <li>
                  • <strong>Mathematics</strong> - Not every measured signal
                  from a sensor is automatically ready to be used in an{" "}
                  <abbr title="advanced process control">APC</abbr> environment.
                  Math can be applied to create new or more reliable sources for
                  your <abbr title="advanced process control">APC</abbr>{" "}
                  landscape. As well it can be used for limit calculations and
                  violation rules like n of m. I do raw data analysis, signal
                  optimization, limit-based calculations, outlier handling and
                  apply whatever math is necessary wherever needed to get more
                  out of the control mechanism{" "}
                  <abbr title="advanced process control">APC</abbr> shall be.
                </li>
                <li>
                  • <strong>Strategic alignment</strong> - Typically{" "}
                  <abbr title="advanced process control">APC</abbr> is not used
                  as only measure of control in a modern production. It shall be
                  part of an ecosystem. But how does the{" "}
                  <abbr title="advanced process control">APC</abbr>-piece fit
                  into that ecosystem and what expectations does it have to
                  fulfill? Is it doing what it shall do? The view of an outsider
                  on strategic topics can be a blessing. That´s where I step in.
                </li>
                <li>
                  • <strong>Learning from the past</strong> - Data can tell
                  stories, if asked correctly. Analyzing it and find
                  correlations to certain events is not always straight forward
                  and sometimes needs more time. Time that is precious within
                  your team. Hand this topic over to me and get answer to the
                  your questions.
                </li>
                <li>
                  •{" "}
                  <strong>
                    <abbr title="artificial intelligence">AI</abbr> assistance
                  </strong>{" "}
                  - The buzzword of today:{" "}
                  <abbr title="artificial intelligence">AI</abbr>. It´s a
                  powerful tool for analyzing your data. I can help you finding
                  the correct model for doing the job, run tests and help
                  implementing a solution that fits your needs including all the
                  communication and procurement procedure upfront.
                </li>
                <li>
                  • <strong>New setup</strong> - Are you about to make the first
                  steps into the world of{" "}
                  <abbr title="advanced process control">APC</abbr>? Or are you
                  planing to increase the coverage of your already existing{" "}
                  <abbr title="advanced process control">APC</abbr> setup?
                  Together we can evaluate a bunch of strategies and then decide
                  the way to go to fit your house and processes. I also help you
                  searching for adequate measurement systems, sensors and where
                  to place them in order to monitor as good as possible whats of
                  interest.
                </li>
                <li>
                  • <strong>External software utilization</strong> - For reasons
                  it may sometimes makes sense that you analyze gathered data
                  with external tools. One of these tools could be one of the
                  vast Python libraries like Pandas, Matplotlib, Numpy or SciPy.
                  With them I can help you while you don´t have to bother with
                  freeing up resources in order to learn something new for just
                  one project. And if its not related to Python we´ll also
                  figure out what to do.
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
                <li>
                  • <strong>Software procurement and setup</strong> - You
                  already have lots of measurement data of your manufacturing
                  processes available but you lack a centralized software that
                  is providing what your team needs and at the same time
                  integrates into what is already setup? I help you finding your{" "}
                  <abbr title="statistical process control">SPC</abbr> software
                  as well I can take over all the communication with possible
                  partner. Furthermore I offer to write requirement
                  specifications, do first sample testing and support its
                  rollout.
                </li>
                <li>
                  • <strong>User training</strong> - Are you looking forward to
                  standardize the way{" "}
                  <abbr title="statistical process control">SPC</abbr> is used
                  in your company? I provide a platform based training for you
                  or your team to make it become a solid common ground of
                  expertise for further steps. It has a step-based approach and
                  starts with general{" "}
                  <abbr title="statistical process control">SPC</abbr> concepts
                  and rises to advanced approaches and specific topics that can
                  also involve the software that you are using.
                </li>
                <li>
                  • <strong>WER implementation</strong> - I´d consider the{" "}
                  <abbr title="western electric rules">WER</abbr> a backbone of{" "}
                  <abbr title="statistical process control">SPC</abbr>. Rolling
                  out <abbr title="statistical process control">SPC</abbr> on
                  millions of data channels can not be overseen and managed by
                  hand, that´s for sure. If you plan to do so and need expertise
                  about setting limits: I can help you here.
                </li>
                <li>
                  • <strong>Strategic alignment</strong> - Typically{" "}
                  <abbr title="advanced process control">APC</abbr> is not used
                  as only measure of control in a modern production. It shall be
                  part of an ecosystem. But how does the{" "}
                  <abbr title="advanced process control">APC</abbr>-piece fit
                  into that ecosystem and what expectations does it have to
                  fulfill? Is it doing what it shall do? The view of an outsider
                  on strategic topics can be a blessing. That´s where I step in.
                </li>
                <li>
                  • <strong>Learning from the past</strong> - Data can tell
                  stories, if asked correctly. Analyzing it and find
                  correlations to certain events is not always straight forward
                  and sometimes needs more time. Time that is precious within
                  your team. Hand this topic over to me and get answer to the
                  your questions.
                </li>
                <li>
                  • <strong>AI assistance</strong> - The buzzword of today: AI.
                  It´s a powerful tool for analyzing your data. I can help you
                  finding the correct model for doing the job, run tests and
                  help implementing a solution that fits your needs including
                  all the communication and procurement procedure upfront.
                </li>
                <li>
                  • <strong>New setup</strong> - Are you about to make the first
                  steps into the world of{" "}
                  <abbr title="advanced process control">APC</abbr>? Or are you
                  planing to increase the coverage of your already existing{" "}
                  <abbr title="advanced process control">APC</abbr> setup?
                  Together we can evaluate a bunch of strategies and then decide
                  the way to go to fit your house and processes. I also help you
                  searching for adequate measurement systems, sensors and where
                  to place them in order to monitor as good as possible whats of
                  interest.
                </li>
                <li>
                  • <strong>External software utilization</strong> - For reasons
                  it may sometimes makes sense that you analyze gathered data
                  with external tools. One of these tools could be one of the
                  vast Python libraries like Pandas, Matplotlib, Numpy or SciPy.
                  With them I can help you while you don´t have to bother with
                  freeing up resources in order to learn something new for just
                  one project. And if its not related to Python I´m ready to
                  delve into other environments as well, just let me know.
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-teal-900/30 via-card/30 to-emerald-900/30 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <BaggageClaim className="h-6 w-6 text-teal-400" />
                <h3 className="text-lg font-semibold text-teal-200">
                  Custom Solutions
                </h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li>
                  • <strong>Python-based data analysis</strong> - Libraries like
                  Pandas, Matplotlib, Numpy or SciPy are well established in the
                  realm of data science. This service is especially meant to
                  support where not much samples are collected to have APC or
                  SPC with day to day samples. Or the analysis requirements
                  differ from the established procedure.
                </li>
                <li>
                  • <strong>Data classification</strong> - Are you dealing with
                  a new data type or quality and do not yet know how to make it
                  fit your established catalog of classifications? Or did you
                  just update your failure catalog and need someone to perform a
                  re-classification of existing data? Even though I won´t do
                  this by myself I help you search qualified 3rd parties to do
                  the job.
                </li>
                <li>
                  • <strong>Data creation and prototyping</strong> - You need a
                  demo or sample of data prepared in a one-time manner? It shall
                  be connected within an highly integrated process landscape
                  where lots of things depend on one another in feedback loops?
                  Something needs to be responsive in almost real-time? This is
                  where engineering can shine and you can save your resources
                  and let me do that for you. I
                </li>
                <li>
                  • <strong>Maintenance and review</strong> - The process
                  control tools you use are historically grown and need a review
                  or a restructuring? You use manual manpower to maintain these
                  tools? Whatever it is, outsource it and let an experienced
                  helping hand do that for you.
                </li>
              </ul>
            </div>

            {/* <div className="bg-gradient-to-br from-emerald-900/35 via-card/35 to-blue-900/35 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
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
            </div> */}
          </div>

          {/* Contact Section */}
          <div className="text-center">
            <p className="text-xl text-white/90 mb-8 max-w-6xl mx-auto">
              Miss something? We´ll find a solution. Primary I offer my services
              for manufacturing processes, and in particular semiconductor
              manufacturing. But I am absolutely open for new topics. My
              services can be booked in both ways: short and long term. And I
              work either project or time based. As well you can combine any of
              my services to get the best result.
            </p>
            <Link
              href={generateContactHref("/engineer/process-engineering/process-control")}
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
    </div>
  );
}