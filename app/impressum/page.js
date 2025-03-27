export default function Impressum() {
    return (
        <div className="pt-20">
            {/* Impressum Section */}
            <section className="py-20 px-4 bg-gradient-to-b from-black to-zinc-900">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold mb-16">Impressum</h1>

                    <div className="card p-8 space-y-8">
                        <div>
                            <h2 className="text-2xl font-semibold mb-4">Angaben gemäß § 5 TMG</h2>
                            <p className="text-zinc-300">
                                Eric Huber
                                <br />
                                Musterstraße 123
                                <br />
                                12345 Berlin
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-4">Kontakt</h2>
                            <p className="text-zinc-300">
                                Telefon: +49 123 456 7890
                                <br />
                                E-Mail: contact@erichuber.com
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-4">Umsatzsteuer-ID</h2>
                            <p className="text-zinc-300">
                                Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
                                <br />
                                DE123456789
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
                            <p className="text-zinc-300">
                                Eric Huber
                                <br />
                                Musterstraße 123
                                <br />
                                12345 Berlin
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-4">Streitschlichtung</h2>
                            <p className="text-zinc-300">
                                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
                                <a
                                    href="https://ec.europa.eu/consumers/odr/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-emerald-500 hover:underline ml-1"
                                >
                                    https://ec.europa.eu/consumers/odr/
                                </a>
                                .<br />
                                Unsere E-Mail-Adresse finden Sie oben im Impressum.
                            </p>
                            <p className="text-zinc-300 mt-4">
                                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                                Verbraucherschlichtungsstelle teilzunehmen.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

