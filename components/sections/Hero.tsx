import Image from "next/image";
import { ReactNode } from "react";

interface HeroProps {
  imageBaseName: string; // e.g., "kite_hero" or "engineer_hero"
  altText: string;
  children?: ReactNode;
  objectPosition?: string; // e.g., "center 45%"
  brightness?: number; // e.g., 50 for brightness-50
  minHeight?: string; // e.g., "60vh"
  priority?: boolean;
  className?: string;
}

export function Hero({
  imageBaseName,
  altText,
  children,
  objectPosition = "center",
  brightness = 50,
  minHeight = "60vh",
  priority = true,
  className = "",
}: HeroProps) {
  // Generate image paths based on the base name
  const imagePaths = {
    sm: `/images/${imageBaseName}_sm.jpg`,
    md: `/images/${imageBaseName}_md.jpg`,
    lg: `/images/${imageBaseName}_lg.jpg`,
    xl: `/images/${imageBaseName}_xl.jpg`,
  };

  return (
    <section
      className={`relative w-full ${minHeight} flex items-center justify-center ${className}`}
      style={{
        // Ensures container maintains aspect ratio
        aspectRatio: "16/9", // Default to 16:9, adjust if needed
      }}
    >
      {/* Background Image with responsive sources */}
      <div className="absolute inset-0">
        <picture>
          {/* Mobile first */}
          <source
            media="(max-width: 639px)"
            srcSet={imagePaths.sm}
            type="image/jpeg"
          />
          {/* Tablet */}
          <source
            media="(min-width: 640px) and (max-width: 767px)"
            srcSet={imagePaths.sm}
            type="image/jpeg"
          />
          {/* Small desktop */}
          <source
            media="(min-width: 768px) and (max-width: 1023px)"
            srcSet={imagePaths.md}
            type="image/jpeg"
          />
          {/* Desktop */}
          <source
            media="(min-width: 1024px) and (max-width: 1279px)"
            srcSet={imagePaths.lg}
            type="image/jpeg"
          />
          {/* Large desktop */}
          <source
            media="(min-width: 1280px)"
            srcSet={imagePaths.xl}
            type="image/jpeg"
          />
          {/* Fallback */}
          <Image
            src={imagePaths.lg} // Default to large size
            alt={altText}
            fill
            className={`object-cover object-${objectPosition} brightness-${brightness}`}
            priority={priority}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          />
        </picture>
      </div>

      {/* Content overlay */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        {children}
      </div>
    </section>
  );
}
