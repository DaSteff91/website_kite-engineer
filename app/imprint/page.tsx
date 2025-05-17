import React from "react";
import Link from "next/link";

const imprint = () => {
  return (
    <div className="max-w-6xl mx-auto p-2 py-36">
      <h1 className="text-3xl font-bold mb-6">Datenschutz</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          Kontaktdaten des Verantwortlichen
        </h2>
        <p className="mb-1">Kite-Engineer by Stefan Merthan</p>
        <p className="mb-1">Stefan Merthan</p>
        <p className="mb-1">Hauptstraße 6</p>
        <p className="mb-1">84107 Weihmichl</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Cookies</h2>
        <p className="mb-1">Diese Website verwendet generell keine Cookies.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Zugriffsprotokolle</h2>
        <p>
          Wenn Sie diese Website besuchen, erstellt der Webserver automatisch
          Zugriffsprotokolle. In diesen Protokollen werden die Uhrzeit, die
          anfragende IP-Adresse, der Browser (User-Agent) sowie die Seite (URL)
          und die vorherige verweisende Seite (Referrer) gespeichert. Diese
          Logfiles werden nach 14 Tagen automatisch gelöscht. (Diese Log-Daten
          werden zu administrativen Zwecken im Rahmen des berechtigten
          Interesses des Betreibers erhoben (GDPR Art. 6 Abs. 1 Satz 1 Lit. f)).
        </p>
      </section>

      <div className="max-w-6xl mx-auto py-8">
        <h1 className="text-3xl font-bold mb-6">Betroffenenrechte</h1>
        <section className="mb-8">
          <p className="mb-1">
            Ihre Rechte finden sie unter:{" "}
            <Link
              href="https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX%3A32016R0679"
              className="text-blue-500 underline"
            >
              https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX%3A32016R0679
            </Link>{" "}
          </p>
        </section>
      </div>
    </div>
  );
};

export default imprint;
