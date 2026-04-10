import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum — Legal notice for Marcel Hudy's website.",
};

const Impressum = () => {
  return (
    <section className="min-h-screen py-12 xl:py-24">
      <div className="container mx-auto max-w-[800px]">
        <h1 className="h1 mb-12">Impressum</h1>

        <h2 className="h2 mb-4">Angaben gem&auml;&szlig; &sect; 5 TMG</h2>
        <p className="mb-8">
          Marcel Hudy
          <br />
          {/* TODO: Add business name if applicable */}
          G&ouml;rresstr. 48
          <br />
          80797 M&uuml;nchen
        </p>

        <h2 className="h2 mb-4">Kontakt</h2>
        <p className="mb-8">
          Telefon: 017661314578
          <br />
          E-Mail: hudymarcel@gmail.com
        </p>

        {/* TODO: Add the following sections with proper legal text:
          - Umsatzsteuer-ID (if applicable)
          - Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
          - Haftungsausschluss (Disclaimer)
          - Haftung für Inhalte
          - Haftung für Links
          - Urheberrecht
        */}
      </div>
    </section>
  );
};

export default Impressum;
