import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz",
  description:
    "Datenschutzerkl&auml;rung — Privacy policy for Marcel Hudy's website.",
};

const Datenschutz = () => {
  return (
    <section className="min-h-screen py-12 xl:py-24">
      <div className="container mx-auto max-w-[800px]">
        <h1 className="h1 mb-12">Datenschutzerkl&auml;rung</h1>

        <h2 className="h2 mb-4">1. Datenschutz auf einen Blick</h2>
        <h3 className="text-xl font-semibold mb-2">Allgemeine Hinweise</h3>
        <p className="mb-8 text-muted-foreground">
          Die folgenden Hinweise geben einen einfachen &Uuml;berblick
          dar&uuml;ber, was mit Ihren personenbezogenen Daten passiert, wenn Sie
          diese Website besuchen.
        </p>

        <h2 className="h2 mb-4">2. Hosting</h2>
        <p className="mb-8 text-muted-foreground">
          {/* TODO: Add hosting provider information (e.g., Vercel) */}
          Diese Website wird bei [Hosting-Anbieter] gehostet.
        </p>

        <h2 className="h2 mb-4">
          3. Allgemeine Hinweise und Pflichtinformationen
        </h2>
        <h3 className="text-xl font-semibold mb-2">Datenschutz</h3>
        <p className="mb-4 text-muted-foreground">
          Die Betreiber dieser Seiten nehmen den Schutz Ihrer pers&ouml;nlichen
          Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten
          vertraulich und entsprechend der gesetzlichen
          Datenschutzvorschriften sowie dieser Datenschutzerkl&auml;rung.
        </p>
        <h3 className="text-xl font-semibold mb-2">
          Verantwortliche Stelle
        </h3>
        <p className="mb-8 text-muted-foreground">
          Marcel Hudy
          <br />
          G&ouml;rresstr. 48
          <br />
          80797 M&uuml;nchen
          <br />
          E-Mail: hudymarcel@gmail.com
        </p>

        <h2 className="h2 mb-4">4. Datenerfassung auf dieser Website</h2>
        <h3 className="text-xl font-semibold mb-2">Kontaktformular</h3>
        <p className="mb-4 text-muted-foreground">
          Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden
          Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort
          angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und f&uuml;r
          den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben
          wir nicht ohne Ihre Einwilligung weiter.
        </p>
        <h3 className="text-xl font-semibold mb-2">Speicherdauer</h3>
        <p className="mb-8 text-muted-foreground">
          Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei
          uns, bis Sie uns zur L&ouml;schung auffordern, Ihre Einwilligung zur
          Speicherung widerrufen oder der Zweck f&uuml;r die Datenspeicherung
          entf&auml;llt. Zwingende gesetzliche Bestimmungen &ndash;
          insbesondere Aufbewahrungsfristen &ndash; bleiben unber&uuml;hrt.
        </p>

        {/* TODO: Add remaining sections with legal review:
          - Server-Log-Dateien
          - Cookies (currently: no cookies used, only localStorage for theme preference)
          - SSL/TLS encryption
          - Right of access, correction, deletion
          - Right to data portability
          - Right to object
          - Complaint to supervisory authority
        */}
      </div>
    </section>
  );
};

export default Datenschutz;
