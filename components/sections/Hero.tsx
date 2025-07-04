// 2025-07-04: The Hero.tsx is currently not used.
// It may be used for creating reactive hero image sections that react to different viewport sizes

"use client";

import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="min-h-[90vh] flex items-center pt-16 relative overflow-hidden opacity-0 translate-y-8 transition-all duration-700 ease-out"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10 z-0" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
            Creating Beautiful Digital Experiences That Inspire
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            We craft elegant websites with modern technology and beautiful
            design to help your business thrive in the digital world.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Button size="lg" className="group">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-foreground flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-foreground rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
