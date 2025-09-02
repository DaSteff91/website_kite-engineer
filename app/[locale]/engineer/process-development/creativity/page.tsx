import Image from "next/image";
import background_image_darker from "@/public/images/background_image_darker.jpeg";
import engineer_hero_image from "@/public/images/engineer_hero_image.jpg";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ArrowLeft,
  Lightbulb,
  Brain,
  Zap,
  Target,
} from "lucide-react";

import { PAGE_METADATA } from "@/lib/constants/metadata";
import { generateContactHref } from "@/lib/utils/contact-filler";
import { Hero } from "@/components/sections/Hero";

export const metadata =
  PAGE_METADATA["engineer/process-development/creativity"];

export default function CreativityPage() {
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
          Creative Innovation Services
        </h1>
      </Hero>

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
              Back to All Engineering Services
            </Link>
          </div>

          <div className="relative mb-16 sm:mb-20">
            <h2
              className="text-xl sm:text-2xl md:text-3xl font-bold text-center max-w-4xl mx-auto leading-relaxed 
   bg-[linear-gradient(to_right,white,rgba(229,231,235,0.8),rgba(209,213,219,1))] 
   bg-clip-text text-transparent animate-gradient"
            >
              Activate Neurons You've Never Known About
            </h2>
            <p className="mt-4 text-lg sm:text-xl text-center text-white/80 max-w-3xl mx-auto leading-relaxed">
              Beyond brainstorming - systematic innovation techniques for
              breakthrough solutions
            </p>
            <div className="absolute -bottom-6 sm:-bottom-8 left-1/2 transform -translate-x-1/2 w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-500 via-teal-500 to-emerald-500 rounded-full"></div>
          </div>

          {/* Services Grid new*/}
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-6 sm:gap-8 max-w-6xl mx-auto">
              <div className="bg-gradient-to-br from-blue-900/20 via-card/20 to-cyan-900/20 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300 w-full">
                <h3 id="creativity-techniques-and-problem-solving-title" className="text-xl sm:text-2xl font-bold mb-4 pb-3 border-b border-white/20 flex items-center gap-3 text-blue-200">
                  <Brain className="h-6 w-6 text-teal-400" />
                  Creativity Techniques and Problem-Solving
                </h3>
                <p className="block text-muted-foreground mb-4 sm:mb-6 pl-5 sm:pl-6 pr-4 sm:pr-5 sm:text-base text-sm -mx-4 sm:-mx-6 w-auto">
                  While becomming and working as a green belt I learned to host
                  sessions and workshops to solve technical problems or to find
                  solutions for overcomming obstacles that arise during the
                  development of new processes using techniques that are well
                  established in the industry. This is what I can offer you in
                  any kind of format - live, remote, in a singel session or a
                  complete workshop combining it with other services:
                </p>
                <ul className="text-muted-foreground list-disc list-outside pl-4 sm:pl-5 space-y-3 sm:space-y-4 text-sm sm:text-base">
                  <li id="creativity-techniques-and-problem-solving-list-element1">TRIZ - theory of inventive problem solving.</li>
                  <li id="creativity-techniques-and-problem-solving-list-element2">
                    Idea Generation Techniques - brain storming or brain
                    writing.
                  </li>
                  <li id="creativity-techniques-and-problem-solving-list-element3">Six Thinking Hats.</li>
                  <li id="creativity-techniques-and-problem-solving-list-element4">Lateral Thinking Process.</li>
                  <li id="creativity-techniques-and-problem-solving-list-element5">Random-word, image, sound, or article technique.</li>
                </ul>
              </div>
            </div>
          </div>
          {/* Services Grid old*/}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto mb-16">
            <div className="bg-gradient-to-br from-cyan-900/20 via-card/20 to-teal-900/20 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Lightbulb className="h-6 w-6 text-cyan-400" />
                <h3 id="advanced-brainstorming-title" className="text-lg font-semibold text-cyan-200">
                  Advanced Brainstorming
                </h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li id="advanced-brainstorming-list-element1">• TRIZ methodology application</li>
                <li id="advanced-brainstorming-list-element2">• Systematic inventive thinking</li>
                <li id="advanced-brainstorming-list-element3">• Contradiction resolution techniques</li>
                <li id="advanced-brainstorming-list-element4">• Pattern-based innovation</li>
                <li id="advanced-brainstorming-list-element5">• Cross-industry solution transfer</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-teal-900/25 via-card/25 to-emerald-900/25 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Brain className="h-6 w-6 text-teal-400" />
                <h3 id="design-thinking-workshops-title" className="text-lg font-semibold text-teal-200">
                  Design Thinking Workshops
                </h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li id="design-thinking-workshops-list-element1">• Human-centered design approach</li>
                <li id="design-thinking-workshops-list-element2">• Empathy mapping and user journey</li>
                <li id="design-thinking-workshops-list-element3">• Ideation and prototyping sessions</li>
                <li id="design-thinking-workshops-list-element4">• Cross-functional team facilitation</li>
                <li id="design-thinking-workshops-list-element5">• Rapid iteration and testing</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-emerald-900/30 via-card/30 to-blue-900/30 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="h-6 w-6 text-emerald-400" />
                <h3 id="innovation-pipeline-title" className="text-lg font-semibold text-emerald-200">
                  Innovation Pipeline
                </h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li id="innovation-pipeline-list-element1">• Idea generation frameworks</li>
                <li id="innovation-pipeline-list-element2">• Innovation funnel management</li>
                <li id="innovation-pipeline-list-element3">• Concept evaluation criteria</li>
                <li id="innovation-pipeline-list-element4">• Portfolio optimization</li>
                <li id="innovation-pipeline-list-element5">• Innovation metrics and KPIs</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-900/35 via-card/35 to-cyan-900/35 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Target className="h-6 w-6 text-blue-400" />
                <h3 id="breakthrough-solutions-title" className="text-lg font-semibold text-blue-200">
                  Breakthrough Solutions
                </h3>
              </div>
              <ul className="text-white/80 space-y-2 text-sm">
                <li id="breakthrough-solutions-list-element1">• Lateral thinking techniques</li>
                <li id="breakthrough-solutions-list-element2">• Biomimicry and nature-inspired solutions</li>
                <li id="breakthrough-solutions-list-element3">• Analogical problem solving</li>
                <li id="breakthrough-solutions-list-element4">• Constraint removal strategies</li>
                <li id="breakthrough-solutions-list-element5">• Paradigm shift identification</li>
              </ul>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center">
            <p className="text-xl text-white/90 mb-8 max-w-6xl mx-auto">
              Ready to unlock your creative potential? Let's activate those
              neurons and generate breakthrough innovations.
            </p>
            <Link
              href={generateContactHref("/engineer/process-development/creativity")}
              target="_blank"
            >
              <Button
                size="lg"
                className="group bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-700 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl"
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