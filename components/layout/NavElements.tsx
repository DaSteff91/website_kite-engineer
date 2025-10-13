import React from "react";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

type NavElementProps = {
  as?: React.ElementType; // e.g. Link, "a", "button", "div"
  href?: string;
  onClick?: (e?: any) => void;
  ariaLabel?: string;
  isActive?: boolean;
  children: React.ReactNode;
};

export default function NavElement({
  as: Component = "div",
  href,
  onClick,
  ariaLabel,
  isActive = false,
  children,
  ...rest
}: NavElementProps) {
  const base = cn(
    "h-full flex items-center px-2 lg:px-3 text-base lg:text-[1.2rem] font-medium",
    "transition-all duration-200 hover:scale-105 border-b-2 border-transparent",
    "hover:text-white hover:drop-shadow-[0_0_4px_rgba(255,255,255,0.3)]",
    isActive
      ? "text-white border-white drop-shadow-[0_0_4px_rgba(255,255,255,0.3)]"
      : "text-white/90"
  );

  // If the chosen element is the Link wrapper, forward className & href.
  const props: any = {
    className: base,
    "aria-label": ariaLabel,
    onClick,
    ...rest,
  };
  if (href) props.href = href;

  // Render the requested element type (Link, button, div, etc.)
  return <Component {...props}>{children}</Component>;
}
