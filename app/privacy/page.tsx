import React from "react";
import Link from "next/link";

const imprint = () => {
  return (
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

      <div className="max-w-6xl mx-auto py-8">
        <h1 className="text-3xl font-bold mb-6">EU-Streitschlichtung</h1>
        <section className="mb-8">
          <p className="mb-1">
            Gemäß Verordnung über Online-Streitbeilegung in
            Verbraucherangelegenheiten (ODR-Verordnung) möchten wir Sie über die
            Online-Streitbeilegungsplattform (OS-Plattform) informieren.
            Verbraucher haben die Möglichkeit, Beschwerden an die Online
            Streitbeilegungsplattform der Europäischen Kommission unter:{" "}
            <Link
              href="http://ec.europa.eu/odr?tid=321289339"
              className="text-blue-500 underline"
            >
              http://ec.europa.eu/odr?tid=321289339
            </Link>{" "}
            zu richten. Die dafür notwendigen Kontaktdaten finden Sie oberhalb
            in unserem Impressum. Wir möchten Sie jedoch darauf hinweisen, dass
            wir nicht bereit oder verpflichtet sind, an
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen.
          </p>
        </section>
      </div>
    </div>
  );
};

export default imprint;
