import Image from "next/image";
import { ReactNode } from "react";

interface HeroProps {
  children?: ReactNode;
  objectPosition?: string;
  brightness?: number;
  minHeight?: string;
  priority?: boolean;
  className?: string;
  route?: string;
  customImageBase?: string; // Optional override for custom image names
}

export function Hero({
  children,
  objectPosition = "center",
  brightness = 50,
  // minHeight = "60vh",
  priority = true,
  className = "",
  route = "",
  customImageBase, // Allow manual override if needed
}: HeroProps) {
  // Generate image base name from route or use custom override
  const getImageBaseName = (): string => {
    if (customImageBase) {
      return customImageBase;
    }

    // Get the route path and convert to image name format
    let baseName = route || "";

    // Remove leading/trailing slashes
    baseName = baseName.replace(/^\/|\/$/g, "");

    // Handle root path
    if (baseName === "") {
      return "home_hero"; // Default for homepage
    }

    // Handle nested routes (e.g., /kite/freelancer -> kite_freelancer_hero)
    const pathParts = baseName.split("/");

    // Support for up to 3 levels of nesting
    if (pathParts.length >= 3) {
      // For deeply nested routes: /kite/freelancer/school-support -> kite_freelancer_school-support_hero
      return `${pathParts.join("_")}_hero`;
    } else if (pathParts.length === 2) {
      // For 2-level routes: /kite/freelancer -> kite_freelancer_hero
      return `${pathParts.join("_")}_hero`;
    }

    // For single-level routes: about -> about_hero
    return `${baseName}_hero`;
  };

  const imageBaseName = getImageBaseName();

  // Regular image paths
  const imagePaths = {
    sm: `/images/${imageBaseName}_sm.jpg`,
    md: `/images/${imageBaseName}_md.jpg`,
    lg: `/images/${imageBaseName}_lg.jpg`,
    xl: `/images/${imageBaseName}_xl.jpg`,
  };

  // Generate alt text based on page name
  const generateAltText = (): string => {
    const base = imageBaseName.replace("_hero", "");
    const formattedName = base
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    return `${formattedName} Hero Image`;
  };

  const altText = generateAltText();

  return (
    <section
      className={`relative w-full min-h-[60vh] sm:min-h-[70vh] md:min-h-[75vh] flex items-center justify-center ${className}`}
      id="hero_section"
    >
      <div className="absolute inset-0 h-full w-full">
        {/* Hero Image */}
        <picture>
          {/* Mobile */}
          <source
            media="(max-width: 639px)"
            srcSet={imagePaths.sm}
            type="image/jpeg"
          />
          {/* Small tablets */}
          <source
            media="(min-width: 640px) and (max-width: 767px)"
            srcSet={imagePaths.sm}
            type="image/jpeg"
          />
          {/* Tablets */}
          <source
            media="(min-width: 768px) and (max-width: 1023px)"
            srcSet={imagePaths.md}
            type="image/jpeg"
          />
          {/* Laptops */}
          <source
            media="(min-width: 1024px) and (max-width: 1279px)"
            srcSet={imagePaths.lg}
            type="image/jpeg"
          />
          {/* Large screens */}
          <source
            media="(min-width: 1280px)"
            srcSet={imagePaths.xl}
            type="image/jpeg"
          />
          {/* Fallback */}
          <Image
            src={imagePaths.lg}
            alt={altText}
            fill
            className={`object-cover object-${objectPosition.replace(
              " ",
              "-"
            )} brightness-${brightness}`}
            priority={priority}
            sizes="100vw"
            quality={90}
            style={{
              objectFit: "cover",
            }}
          />
        </picture>
      </div>

      {/* Fallback for JavaScript-disabled browsers */}
      <noscript>
        <Image
          src={imagePaths.lg}
          alt={altText}
          fill
          className={`object-cover object-${objectPosition.replace(
            " ",
            "-"
          )} brightness-${brightness}`}
          priority={priority}
          sizes="100vw"
        />
      </noscript>

      {/* Content overlay */}
      <div className="relative z-10 container mx-auto px-4 text-center w-full">
        {children}
      </div>
    </section>
  );
}
