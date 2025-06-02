'use client';

import { useRef, useEffect } from 'react';
import { Lightbulb, Palette, Gauge, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const FEATURES = [
  {
    icon: Lightbulb,
    title: 'Innovative Design',
    description: 'We create unique, cutting-edge designs that stand out from the competition.'
  },
  {
    icon: Palette,
    title: 'Beautiful Aesthetics',
    description: 'Our designs focus on beauty and usability with attention to every detail.'
  },
  {
    icon: Gauge,
    title: 'Lightning Fast',
    description: 'Optimized for performance to ensure the best user experience possible.'
  },
  {
    icon: Users,
    title: 'User Centered',
    description: 'We design with your users in mind, creating intuitive interfaces they will love.'
  }
];

export function Features() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);
  
  return (
    <section
      ref={sectionRef}
      className="py-24 bg-muted/50 opacity-0 translate-y-8 transition-all duration-700 ease-out"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            What Makes Us Different
          </h2>
          <p className="text-lg text-muted-foreground">
            We combine beautiful design with powerful technology to create websites that not only look good but perform exceptionally well.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, index) => (
            <div
              key={feature.title}
              ref={(el) => (cardsRef.current[index] = el)}
              className="opacity-0 translate-y-8 transition-all duration-700 ease-out"
              style={{ transitionDelay: `${100 * index}ms` }}
            >
              <Card className="h-full border bg-card hover:shadow-md transition-all duration-300">
                <CardHeader>
                  <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}