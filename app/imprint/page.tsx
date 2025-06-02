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

      <div className="max-w-6xl mx-auto p-2 py-36">
        <h1 className="text-3xl font-bold mb-6">Impressum</h1>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Angaben gemäß § 5 TMG</h2>
          <p className="mb-1">Kite-Engineer by Stefan Merthan</p>
          <p className="mb-1">Stefan Merthan</p>
          <p className="mb-1">Hauptstraße 6</p>
          <p className="mb-1">84107 Weihmichl</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Kontakt</h2>
          <p className="mb-1">E-Mail: stefan@kite-engineer.de</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Umsatzsteuer-ID</h2>
          <p className="mb-1">
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
          </p>
          <p>DE452689906</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">
            Instrumente für die Streitbeilegung
          </h2>
          <p className="mb-1">
            Verbraucher haben die Möglichkeit, sich über die Instrumente für die
            Streitbeilegung auf der Streitbeilegungsplattform der Europäischen
            Kommission unter:{" "}
            <Link
              href="https://ec.europa.eu/consumers/odr/main/?event=main.consumer.rights#inline-nav-2"
              className="text-blue-500 underline"
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
