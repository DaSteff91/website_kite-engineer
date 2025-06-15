import React from "react";
import Link from "next/link";
import Image from "next/image";
import background_image_darker from "@/public/images/background_image_darker.jpeg";

export default function Imprint() {
  return (
    <main>
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

      <div className="max-w-4xl mx-auto p-4 sm:p-6 py-24 sm:py-36">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6">Impressum</h1>

        <section className="mb-6 sm:mb-8">
          <h2 className="text-lg sm:text-xl font-semibold mb-2">Angaben gemäß § 5 TMG</h2>
          <p className="mb-1 text-sm sm:text-base">Kite-Engineer by Stefan Merthan</p>
          <p className="mb-1 text-sm sm:text-base">Stefan Merthan</p>
          <p className="mb-1 text-sm sm:text-base">Hauptstraße 6</p>
          <p className="mb-1 text-sm sm:text-base">84107 Weihmichl</p>
        </section>

        <section className="mb-6 sm:mb-8">
          <h2 className="text-lg sm:text-xl font-semibold mb-2">Kontakt</h2>
          <p className="mb-1 text-sm sm:text-base break-all">E-Mail: stefan@kite-engineer.de</p>
        </section>

        <section className="mb-6 sm:mb-8">
          <h2 className="text-lg sm:text-xl font-semibold mb-2">Umsatzsteuer-ID</h2>
          <p className="mb-1 text-sm sm:text-base">
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
          </p>
          <p className="text-sm sm:text-base">DE452689906</p>
        </section>

        <section className="mb-6 sm:mb-8">
          <h2 className="text-lg sm:text-xl font-semibold mb-2">
            Instrumente für die Streitbeilegung
          </h2>
          <p className="mb-1 text-sm sm:text-base leading-relaxed">
            Verbraucher haben die Möglichkeit, sich über die Instrumente für die
            Streitbeilegung auf der Streitbeilegungsplattform der Europäischen
            Kommission unter:{" "}
            <Link
              href="https://ec.europa.eu/consumers/odr/main/?event=main.consumer.rights#inline-nav-2"
              className="text-blue-500 underline break-all hover:text-blue-400 transition-colors"
            >
              https://ec.europa.eu/consumers/odr/main/?event=main.consumer.rights#inline-nav-2
            </Link>{" "}
            zu informieren. Die dafür notwendigen Kontaktdaten finden Sie
            oberhalb in meinem Impressum. Ich möchten Sie jedoch darauf
            hinweisen, dass ich nicht bereit oder verpflichtet bin, an
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen.
          </p>
        </section>
      </div>
    </main>
  );
}