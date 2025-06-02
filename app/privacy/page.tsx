import React from "react";
import Link from "next/link";
import Image from "next/image";
import background_image_darker from "@/public/images/background_image_darker.jpeg";

export default function Privacy() {
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
        <h1 className="text-3xl font-bold mb-6">Datenschutzbestimmung</h1>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">
            Kontaktdaten des Verantwortlichen
          </h2>
          <p className="mb-1">Kite-Engineer by Stefan Merthan</p>
          <p className="mb-1">Stefan Merthan</p>
          <p className="mb-1">Hauptstraße 6</p>
          <p className="mb-1">84107 Weihmichl</p>
          <p className="mb-1">stefan@kite-engineer.de</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Cookies</h2>
          <p className="mb-1">Diese Website verwendet generell keine Cookies</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Zugriffsprotokolle</h2>
          <p className="mb-1">
            Wenn Sie diese Website besuchen werden keine nutzerbezogenen Daten
            oder Zugriffsprotokolle erstellt, die mit der Nutzung in Verbindung
            stehen.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">
            Datenschutzhinweise für Kontaktformulare
          </h2>
          <p className="mb-1">
            Das auf der Website verwendete Kontaktformular erzeugt eine E-Mail,
            die an mich versandt und als solche im Folgenden auch weiter
            behandelt wird. Somit findet die Erhebung und Speicherung Ihrer
            E-Mail-Adresse und der versendeten Nachricht (und deren Inhalt) aus
            technisch notwendigen Gründen und aus berechtigtem Interesse heraus
            statt. Der Inhalt wird nur in Form der erzeugten E-Mail in meinem
            Postfach gespeichert (siehe auch weiter unten). Ich gebe Ihre
            Mailadresse und sonstige von Ihnen angegebene Daten nicht ohne Ihre
            Erlaubnis an Dritte weiter
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">
            Datenschutzhinweise für Kommunikation per E-Mail
          </h2>
          <p className="mb-1">
            Die auf der Website bereitgestelle E-Mail-Adresse dient zur
            Kontaktaufnahme mit mir. Somit findet hier eine Erhebung und
            Speicherung Ihrer E-Mail-Adresse und der versendeten Nachricht (und
            deren Inhalt) aus technisch notwendigen Gründen und aus berechtigtem
            Interesse heraus statt. Ich gebe Ihre Mailadresse und sonstige von
            Ihnen angegebene Daten nicht ohne Ihre Erlaubnis an Dritte weiter
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Betroffenenrechte</h2>
          <p className="mb-1">
            Ihre Rechte finden Sie unter:{" "}
            <Link
              href="https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX%3A32016R0679"
              className="text-blue-500 underline"
            >
              https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX%3A32016R0679
            </Link>{" "}
          </p>
        </section>
      </div>
    </main>
  );
}
