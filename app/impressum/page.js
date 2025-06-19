"use client";
import AnimatedSection from "../components/AnimatedSection";
import { useState } from "react";

const texts = {
  de: {
    title: "Impressum",
    content: (
      <div className="space-y-4 text-gray-300 text-base leading-relaxed">
        <p><span className="font-semibold">Angaben gemäß § 5 TMG:</span><br/>
          Eric Huber<br/>
          Sonnenhofstrasse 38<br/>
          8132 Egg bei Zürich<br/>
          Schweiz
        </p>
        <p>
          <span className="font-semibold">Kontakt:</span><br/>
          E-Mail: eric.huber.ch@gmail.com<br/>
          Phone: +41 76 544 25 87
        </p>
        <p>
          <span className="font-semibold">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</span><br/>
          Eric huber, Adresse wie oben
        </p>
      </div>
    )
  },
  en: {
    title: "Imprint",
    content: (
      <div className="space-y-4 text-gray-300 text-base leading-relaxed">
        <p><span className="font-semibold">Information according to § 5 TMG:</span><br/>
        Eric Huber<br/>
          Sonnenhofstrasse 38<br/>
          8132 Egg bei Zürich<br/>
          Switzerland
        </p>
        <p>
          <span className="font-semibold">Contact:</span><br/>
          E-Mail: eric.huber.ch@gmail.com<br/>
          Phone: +41 76 544 25 87
        </p>
        <p>
          <span className="font-semibold">Responsible for content according to § 55 Abs. 2 RStV:</span><br/>
          Eric Huber, address as above
        </p>
      </div>
    )
  }
};

export default function Impressum() {
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