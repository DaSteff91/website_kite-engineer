'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function AboutUs() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

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
    
    if (sectionRef.current) observer.observe(sectionRef.current);
    if (contentRef.current) observer.observe(contentRef.current);
    if (imageRef.current) observer.observe(imageRef.current);
    
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      if (contentRef.current) observer.unobserve(contentRef.current);
      if (imageRef.current) observer.unobserve(imageRef.current);
    };
  }, []);
  
  return (
    <section
      ref={sectionRef}
      className="py-24 opacity-0 translate-y-8 transition-all duration-700 ease-out"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div 
            ref={contentRef}
            className="opacity-0 translate-x-8 transition-all duration-700 ease-out"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              We're Passionate About Creating Beautiful Digital Experiences
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6">
              Founded in 2020, our company has been dedicated to helping businesses of all sizes succeed online through exceptional web design and development.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8">
              Our team of experts combines creativity with technical expertise to deliver websites that not only look stunning but also perform flawlessly across all devices.
            </p>
            
            <Button size="lg">
              Learn More About Us
            </Button>
          </div>
          
          <div 
            ref={imageRef}
            className="opacity-0 -translate-x-8 transition-all duration-700 ease-out"
          >
            <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-xl">
              <Image 
                src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg" 
                alt="Our team collaborating" 
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}