"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import background_image_darker from "@/public/images/background_image_darker.jpeg";
import { Hero } from "@/components/sections/Hero";
import { useState } from "react";
import { PAGE_METADATA } from "@/lib/constants/metadata";

// export const metadata = PAGE_METADATA.engineer;
interface ImprintProps {
  params: Promise<{ locale: string }>;
}

type SectionProps = {
  title: string;
  children: React.ReactNode;
  ariaLabel?: string;
};

const Section = ({ title, children, ariaLabel }: SectionProps) => (
  <section aria-labelledby={`section-${title}`} className="mb-6 sm:mb-8">
    <h2
      id={`section-${title}`}
      className=" text-lg sm:text-xl font-semibold mb-2"
    >
      {title}
    </h2>
    <div aria-label={ariaLabel}>{children}</div>
  </section>
);

const ContactInfoLine = ({
  label,
  value,
  isEmail = false,
}: {
  label?: string;
  value: string;
  isEmail?: boolean;
}) => (
  <p id="imprint-section-subtitle" className=" mb-1 text-sm sm:text-base">
    {label && `${label}: `}
    {isEmail ? (
      <Link
        href={`mailto:${value}`}
        className="text-blue-500 hover:text-blue-400 transition-colors underline"
        aria-label={`Contact via email: ${value}`}
      >
        {value}
      </Link>
    ) : (
      value
    )}
  </p>
);

export default async function Imprint({ params }: ImprintProps) {
  const { locale } = await params;
  const contactData = [
    { value: "Kite-Engineer by Stefan Merthan" },
    { value: "Stefan Merthan" },
    { value: "Hauptstraße 6" },
    { value: "84107 Weihmichl" },
  ];

  const odrLink =
    "https://ec.europa.eu/consumers/odr/main/?event=main.consumer.rights#inline-nav-2";

  return (
    <div className="relative min-h-screen" aria-label="Imprint page">
      {/* Background Image with priority loading */}
      <div className="fixed inset-0 -z-10" aria-hidden="true">
        <Image
          src={background_image_darker}
          alt="Decorative background"
          fill
          className="brightness-50 object-cover object-top"
          priority
          placeholder="blur"
          quality={80}
        />
      </div>

      {/* Hero Section */}
      <Hero
        route="/imprint"
        objectPosition="center 45%"
        brightness={50}
        minHeight="60vh"
      >
        <h1
          id="imprint-hero"
          className="pb-1 text-4xl md:text-5xl font-bold mb-6 
           bg-gradient-to-r from-white via-gray-200 to-gray-300 
           bg-clip-text text-transparent 
           [text-shadow:0_0_8px_rgba(209,213,219,0.6)]"
        >
          Imprint
        </h1>
      </Hero>

      {/* Content Container */}
      <div className="container mx-auto px-4 max-w-6xl p-4 sm:p-6 py-12 sm:py-8">
        <article className="max-w-6xl mx-auto my-4">
          <div className="bg-gradient-to-br from-blue-900/20 via-card/20 to-cyan-900/20 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] w-full">
            <h1 className="text-2xl font-bold mb-4 pb-3 border-b border-white/20 flex items-center gap-3 ">
              Impressum
            </h1>

            <Section
              title="Angaben gemäß § 5 TMG"
              ariaLabel="Legal information according to German law"
            >
              {contactData.map((item, index) => (
                <ContactInfoLine key={`contact-${index}`} value={item.value} />
              ))}
            </Section>

            <Section title="Kontakt" ariaLabel="Contact information">
              <ContactInfoLine
                label="E-Mail"
                value="stefan@kite-engineer.de"
                isEmail
              />
              <div className="mb-1 text-sm sm:text-base ">
                <PhoneNumberReveal />
              </div>
            </Section>

            <Section
              title="Instrumente für die Streitbeilegung"
              ariaLabel="Dispute resolution instruments"
            >
              <p className=" mb-1 text-sm sm:text-base leading-relaxed">
                Verbraucher haben die Möglichkeit, sich über die Instrumente für
                die Streitbeilegung auf der Streitbeilegungsplattform der
                Europäischen Kommission unter:{" "}
                <Link
                  href={odrLink}
                  className="text-blue-500 underline break-all hover:text-blue-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="European Commission Online Dispute Resolution platform"
                >
                  {odrLink}
                </Link>{" "}
                zu informieren. Die dafür notwendigen Kontaktdaten finden Sie
                oberhalb in meinem Impressum. Ich möchten Sie jedoch darauf
                hinweisen, dass ich nicht bereit oder verpflichtet bin, an
                Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </Section>
          </div>
        </article>
      </div>
    </div>
  );
}

function PhoneNumberReveal() {
  const [revealed, setRevealed] = useState(false);
  const [copied, setCopied] = useState(false);
  const phoneNumber = "+491719501856";
  const telNumber = phoneNumber.replace(/[^\d+]/g, "");

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(telNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      {revealed ? (
        <span className="inline-flex items-center gap-1">
          <a
            href={`tel:${telNumber}`}
            className="hover:text-primary text-sm sm:text-base"
            onClick={(e) => e.stopPropagation()}
          >
            Phone: {phoneNumber}
          </a>
          <button onClick={handleCopy} className="text-xs hover:text-primary">
            {copied ? "(Copied!)" : "(Copy)"}
          </button>
        </span>
      ) : (
        <span
          onClick={() => setRevealed(true)}
          className="cursor-pointer text-sm sm:text-base underline"
        >
          Reveal phone number
        </span>
      )}
    </>
  );
}
