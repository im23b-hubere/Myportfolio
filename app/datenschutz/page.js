"use client";
import AnimatedSection from "../components/AnimatedSection";
import { useState } from "react";

const texts = {
  de: {
    title: "Datenschutzerklärung",
    content: (
      <div className="space-y-6 text-gray-300 text-base leading-relaxed">
        <p><span className="font-semibold">1. Verantwortlicher</span><br/>
          Eric Huber<br/>
          Sonnenhofstrasse 38<br/>
          8132 Egg bei Zürich<br/>
          E-Mail: eric.huber.ch@gmail.com
        </p>
        <p><span className="font-semibold">2. Erhebung und Speicherung personenbezogener Daten</span><br/>
          Beim Besuch dieser Website werden automatisch Informationen (z.B. IP-Adresse, Browsertyp) erhoben. Wenn Sie das Kontaktformular nutzen, werden die von Ihnen eingegebenen Daten gespeichert.
        </p>
        <p><span className="font-semibold">3. Zweck der Datenverarbeitung</span><br/>
          Die Daten werden zur Bereitstellung der Website und zur Bearbeitung Ihrer Anfrage verwendet.
        </p>
        <p><span className="font-semibold">4. Weitergabe an Dritte</span><br/>
          Eine Weitergabe an Dritte erfolgt nur, soweit dies zur Erfüllung des Zwecks erforderlich ist (z.B. Hosting-Provider).
        </p>
        <p><span className="font-semibold">5. Rechte der Nutzer</span><br/>
          Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung Ihrer Daten.
        </p>
        <p><span className="font-semibold">6. Kontakt</span><br/>
          Bei Fragen zum Datenschutz wenden Sie sich bitte an die oben genannte E-Mail-Adresse.
        </p>
      </div>
    )
  },
  en: {
    title: "Privacy Policy",
    content: (
      <div className="space-y-6 text-gray-300 text-base leading-relaxed">
        <p><span className="font-semibold">1. Controller</span><br/>
        Eric Huber<br/>
          Sonnenhofstrasse 38<br/>
          8132 Egg bei Zürich<br/>
          E-Mail: eric.huber.ch@gmail.com
        </p>
        <p><span className="font-semibold">2. Collection and storage of personal data</span><br/>
          When visiting this website, information (e.g. IP address, browser type) is automatically collected. If you use the contact form, the data you enter will be stored.
        </p>
        <p><span className="font-semibold">3. Purpose of data processing</span><br/>
          The data is used to provide the website and to process your request.
        </p>
        <p><span className="font-semibold">4. Disclosure to third parties</span><br/>
          Data will only be passed on to third parties if this is necessary to fulfill the purpose (e.g. hosting provider).
        </p>
        <p><span className="font-semibold">5. User rights</span><br/>
          You have the right to information, correction, deletion and restriction of the processing of your data.
        </p>
        <p><span className="font-semibold">6. Contact</span><br/>
          If you have any questions about data protection, please contact the e-mail address above.
        </p>
      </div>
    )
  }
};

export default function Datenschutz() {
  const [lang, setLang] = useState("de");
  return (
    <div className="min-h-screen flex items-center justify-center py-16 px-4">
      {/* Zurück-Pfeil */}
      <button
        onClick={() => window.history.back()}
        aria-label="Zurück"
        className="fixed top-6 left-6 z-50 p-2 rounded-full bg-black/40 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white transition-all shadow-lg group"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-7 h-7 text-white group-hover:-translate-x-1 group-active:scale-95 transition-transform"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>
      {/* Box */}
      <div className="max-w-2xl w-full mx-auto rounded-3xl shadow-xl p-8 md:p-12 border border-zinc-800/60 backdrop-blur-md bg-black/40">
        <AnimatedSection>
          <div className="flex flex-col items-center mb-6">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-2">{texts[lang].title}</h1>
            <button
              onClick={() => setLang(lang === "de" ? "en" : "de")}
              className="px-4 py-1 rounded-full bg-zinc-800/70 hover:bg-zinc-700 text-xs font-semibold text-gray-200 border border-zinc-700 shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-400 mb-2"
              aria-label={lang === "de" ? "Switch to English" : "Wechsel zu Deutsch"}
            >
              {lang === "de" ? "English" : "Deutsch"}
            </button>
          </div>
          {texts[lang].content}
        </AnimatedSection>
      </div>
    </div>
  );
} 