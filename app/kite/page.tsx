import Image from "next/image";
import background_image_darker from "@/public/images/background_image_darker.jpeg";
import kite_hero_image from "@/public/images/kite_hero_image.jpg";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Projector as ProjectorChart,
  ArrowRight,
  School,
  Plane,
  HandPlatter,
  List,
  Library,
  LibraryBig,
  CirclePlay,
  ArrowBigUpDash,
  Anvil,
  MessageSquareText,
} from "lucide-react";

export default function KitePage() {
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
            src={kite_hero_image}
            alt="Kiteboarding"
            fill
            className="object-cover object-[center_45%] brightness-50"
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
              Progress doesn´t grow on trees
            </h2>
            <p className="mt-4 text-xl text-center text-white/80 max-w-3xl mx-auto leading-relaxed">
              My kiteboarding related services help you to achieve your goals
            </p>
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 via-teal-500 to-emerald-500 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 auto-rows-fr justify-items-center">
            {/* Freelancer Section */}
            <div className="bg-gradient-to-br from-blue-900/20 via-card/20 to-cyan-900/20 backdrop-blur-sm p-6 rounded-lg border border-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300 w-full max-w-xl">
              <h3 className="text-2xl font-bold mb-4 pb-3 border-b border-white/20 flex items-center gap-3 text-blue-200">
                <HandPlatter className="h-7 w-7 text-blue-400" />
                Freelancer
              </h3>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem
                  value="school-support"
                  className="border-white/5"
                >
                  <AccordionTrigger className="hover:text-blue-400 transition-colors text-lg text-left">
                    <div className="flex items-center gap-2">
                      <School className="h-5 w-5" />
                      School Support
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-white/80">
                    Whether you need a VDWS-certified instructor, shop
                    assistance, or someone to manage the bar, I've got you
                    covered. Flexibility is my strength.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="travel-service"
                  className="border-white/5"
                >
                  <AccordionTrigger className="hover:text-blue-400 transition-colors text-lg text-left">
                    <div className="flex items-center gap-2">
                      <Plane className="h-5 w-5" />
                      Travel Services
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-white/80">
                    Looking for someone how organizes your kite trip? Or even
                    accompanies you as a personal coach? No problem, you get
                    well served
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="consulting" className="border-white/5">
                  <AccordionTrigger className="hover:text-blue-400 transition-colors text-lg text-left">
                    <div className="flex items-center gap-2">
                      <MessageSquareText className="h-5 w-5" />
                      Consulting
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-white/80">
                    Overwhelmed by gear choices? Let me guide you through
                    selecting the right kiteboarding equipment. Need someone to
                    represent the sport? I like talking in front of people and
                    deliver a message to others
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Courses Section */}
            <div className="bg-gradient-to-br from-cyan-900/25 via-card/25 to-teal-900/25 backdrop-blur-sm p-6 rounded-lg border border-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-300 w-full max-w-xl">
              <h3 className="text-2xl font-bold mb-4 pb-3 border-b border-white/20 flex items-center gap-3 text-cyan-200">
                <List className="h-7 w-7 text-cyan-400" />
                Courses
              </h3>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="theory" className="border-white/5">
                  <AccordionTrigger className="hover:text-cyan-400 transition-colors text-lg text-left">
                    <div className="flex items-center gap-2">
                      <LibraryBig className="h-5 w-5" />
                      Theory
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-white/80">
                    Why not pulling the bar? Let's break down the "science"
                    behind the sport—from wind dynamics to material technology.
                    Choose your topic and pace; I'll make it clear and engaging.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="starting" className="border-white/5">
                  <AccordionTrigger className="hover:text-cyan-400 transition-colors text-lg text-left">
                    <div className="flex items-center gap-2">
                      <CirclePlay className="h-5 w-5" />
                      (Re-)Starting
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-white/80">
                    Whether you're beginning a new kite journey or returning
                    after a break, I'll help you (re-)gain confidence on the
                    water.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="advanced" className="border-white/5">
                  <AccordionTrigger className="hover:text-cyan-400 transition-colors text-lg text-left">
                    <div className="flex items-center gap-2">
                      <ArrowBigUpDash className="h-5 w-5" />
                      Advanced
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-white/80">
                    Ready to push limits? From your first toeside ride to
                    nailing loops, let's tackle challenges together. Prefer
                    supervised sessions? No problem!
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          {/* Enhanced Contact Section */}
          <div className="mt-16 text-center">
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              What´s holding you back? Let´s get in touch
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