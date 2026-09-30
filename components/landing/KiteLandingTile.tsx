"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";
import kite_landingpage_image from "@/public/images/kite_landingpage.jpg";
import { COACHING_URL } from "@/lib/constants/site-config";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function KiteLandingTile() {
  const t = useTranslations("LandingPage");
  const [open, setOpen] = useState(false);

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-xl sm:rounded-2xl aspect-square w-full",
        "border border-white/10 shadow-[0_2px_8px_-1px_rgba(255,255,255,0.1)]",
        "transition-all duration-300",
        "hover:shadow-[0_4px_16px_-2px_rgba(255,255,255,0.2)]",
        !open && "active:scale-95 touch-active",
      )}
    >
      <div
        className={cn(
          "absolute inset-0 bg-cover bg-center transition-all duration-500",
          "brightness-50",
          open
            ? "scale-105 brightness-[0.35]"
            : "group-hover:scale-110 group-hover:brightness-75",
        )}
      >
        <Image
          src={kite_landingpage_image}
          alt="Kiteboarding"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
          loading="eager"
          quality={85}
          placeholder="blur"
          priority
        />
      </div>

      {/* Idle: clickable surface matching Engineer tile */}
      {!open && (
        <button
          type="button"
          aria-expanded={false}
          aria-label={t("kiteChoiceTitle")}
          onClick={() => setOpen(true)}
          className="absolute inset-0 z-10 flex flex-col justify-end p-4 sm:p-6 md:p-8
            text-left transition-transform duration-500 group-hover:-translate-y-2
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60
            focus-visible:ring-inset"
        >
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 md:mb-3
              drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]"
          >
            Kite
          </h2>
        </button>
      )}

      {/* Choice: stays inside the same tile */}
      {open && (
        <div
          className="absolute inset-0 z-10 flex flex-col items-start justify-center
            p-4 sm:p-6 md:p-8 animate-in fade-in zoom-in-95 duration-300"
          role="dialog"
          aria-modal="false"
          aria-labelledby="kite-choice-prompt"
        >
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />

          <div className="relative max-w-md">
            <p
              id="kite-choice-prompt"
              className="text-lg sm:text-xl md:text-2xl font-semibold leading-snug
                bg-gradient-to-r from-white via-gray-100 to-gray-300
                bg-clip-text text-transparent
                drop-shadow-[0_1px_8px_rgba(0,0,0,0.6)]"
            >
              {t("kiteChoicePrompt")}
            </p>
            <p className="mt-2 text-sm sm:text-base text-white/75 leading-relaxed">
              {t("kiteChoiceAlternate")}
            </p>

            <div className="mt-4 sm:mt-5 flex flex-col sm:flex-row gap-2 sm:gap-3">
              <Button
                asChild
                size="lg"
                className="group/btn flex-1 bg-gradient-to-r from-blue-600 to-teal-600
                  hover:from-blue-700 hover:to-teal-700 transition-all duration-300
                  shadow-lg hover:shadow-xl"
              >
                <a
                  href={COACHING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("kiteChoiceCurrent")}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="flex-1 border-white/25 bg-white/5 text-white
                  hover:bg-white/15 hover:text-white"
              >
                <Link href="/kite">{t("kiteChoiceOriginal")}</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
