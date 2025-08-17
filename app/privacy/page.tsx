import React from "react";
import Link from "next/link";
import Image from "next/image";
import background_image_darker from "@/public/images/background_image_darker.jpeg";
import { PAGE_METADATA } from "@/lib/constants/metadata";

export const metadata = PAGE_METADATA.privacy;

type SectionProps = {
  title: string;
  children: React.ReactNode;
  ariaLabel?: string;
};

const Section = ({ title, children, ariaLabel }: SectionProps) => (
  <section aria-labelledby={`section-${title}`} className="mb-6 sm:mb-8">
    <h2
      id={`section-${title}`}
      className="text-lg sm:text-xl font-semibold mb-2"
    >
      {title}
    </h2>
    <div aria-label={ariaLabel}>{children}</div>
  </section>
);

const TextLine = ({
  text,
  isEmail = false,
}: {
  text: string;
  isEmail?: boolean;
}) => (
  <p className="mb-1 text-sm sm:text-base">
    {isEmail ? (
      <Link
        href={`mailto:${text}`}
        className="text-blue-500 hover:text-blue-400 transition-colors underline break-all"
        aria-label={`Contact via email: ${text}`}
      >
        {text}
      </Link>
    ) : (
      text
    )}
  </p>
);

export default function Privacy() {
  const contactData = [
    "Kite-Engineer by Stefan Merthan",
    "Stefan Merthan",
    "Hauptstraße 6",
    "84107 Weihmichl",
    "stefan@kite-engineer.de",
  ];

  const gdprLink =
    "https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX%3A32016R0679";

  return (
    <main className="relative min-h-screen" aria-label="Privacy policy page">
      {/* Background Image */}
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

      {/* Content Section */}
      <div className="container mx-auto px-4 max-w-6xl p-4 sm:p-6 py-24 sm:py-36">
        <div className="max-w-6xl mx-auto my-4">
          <div className="bg-gradient-to-br from-blue-900/20 via-card/20 to-cyan-900/20 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] w-full">
            <header>
              <h1 className="text-2xl sm:text-3xl font-bold mb-6 pb-3 border-b border-white/20">
                Datenschutzbestimmung
              </h1>
            </header>

            <Section
              title="Kontaktdaten des Verantwortlichen"
              ariaLabel="Controller contact details"
            >
              {contactData.map((info, index) => (
                <TextLine
                  key={`contact-${index}`}
                  text={info}
                  isEmail={info.includes("@")}
                />
              ))}
            </Section>

            <Section title="Cookies" ariaLabel="Cookie usage information">
              <p className="mb-1 text-sm sm:text-base">
                Diese Website verwendet generell keine Cookies.
              </p>
            </Section>

            <Section
              title="Zugriffsprotokolle"
              ariaLabel="Access logging information"
            >
              <p className="mb-1 text-sm sm:text-base leading-relaxed">
                Wenn Sie diese Website besuchen werden keine nutzerbezogenen
                Daten oder Zugriffsprotokolle erstellt, die mit der Nutzung in
                Verbindung stehen.
              </p>
            </Section>

            <Section
              title="Datenschutzhinweise für Kontaktformulare"
              ariaLabel="Contact form privacy information"
            >
              <p className="mb-1 text-sm sm:text-base leading-relaxed">
                Das auf der Website verwendete Kontaktformular erzeugt eine
                E-Mail, die an mich versandt und als solche im Folgenden auch
                weiter behandelt wird. Somit findet die Erhebung und Speicherung
                Ihrer E-Mail-Adresse und der versendeten Nachricht (und deren
                Inhalt) aus technisch notwendigen Gründen und aus berechtigtem
                Interesse heraus statt. Der Inhalt wird nur in Form der
                erzeugten E-Mail in meinem Postfach gespeichert (siehe auch
                weiter unten). Ich gebe Ihre Mailadresse und sonstige von Ihnen
                angegebene Daten nicht ohne Ihre Erlaubnis an Dritte weiter.
              </p>
            </Section>

            <Section
              title="Datenschutzhinweise für Kommunikation per E-Mail"
              ariaLabel="Email communication privacy information"
            >
              <p className="mb-1 text-sm sm:text-base leading-relaxed">
                Die auf der Website bereitgestelle E-Mail-Adresse dient zur
                Kontaktaufnahme mit mir. Somit findet hier eine Erhebung und
                Speicherung Ihrer E-Mail-Adresse und der versendeten Nachricht
                (und deren Inhalt) aus technisch notwendigen Gründen und aus
                berechtigtem Interesse heraus statt. Ich gebe Ihre Mailadresse
                und sonstige von Ihnen angegebene Daten nicht ohne Ihre
                Erlaubnis an Dritte weiter.
              </p>
            </Section>

            <Section title="Betroffenenrechte" ariaLabel="Data subject rights">
              <p className="mb-1 text-sm sm:text-base leading-relaxed">
                Ihre Rechte finden Sie unter:{" "}
                <Link
                  href={gdprLink}
                  className="text-blue-500 underline break-all hover:text-blue-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="General Data Protection Regulation (GDPR) legal text"
                >
                  {gdprLink}
                </Link>
              </p>
            </Section>
          </div>
        </div>
      </div>
    </main>
  );
}
