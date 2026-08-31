"use client";

import { motion } from "framer-motion";
import { Handshake } from "lucide-react";

const sponsors = [
  {
    name: "NEXUM",
    logo: "/sponsor-nexum.png",
    description: "Soporte técnico, desarrollo web, ciberseguridad y más",
    href: "https://marvelous-fudge-323f27.netlify.app/#",
  },
  {
    name: "TEAMTEC",
    logo: "/sponsor-teamtec.png",
    description: "Soporte técnico, desarrollo web, ciberseguridad y más",
    href: "https://teamtec.se/",
  },
];

export function Sponsors() {
  return (
    <section className="relative py-16 sm:py-20 bg-navy-deep border-y border-gold/15 overflow-hidden">
      {/* Decorative grid */}
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-gold/5 rounded-full blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-gold/80 mb-3">
            <Handshake className="h-4 w-4" />
            Apoyan al Club
          </div>
          <h3
            className="font-display text-2xl sm:text-3xl font-bold text-white"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Nuestros patrocinadores oficiales
          </h3>
          <p className="mt-3 text-sm text-foreground/60 max-w-xl mx-auto">
            Empresas que creen en el fútbol, la juventud y la comunidad de
            Puriscal y Turrubares.
          </p>
        </div>

        {/* Sponsors grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {sponsors.map((sponsor, i) => (
            <motion.a
              key={sponsor.name}
              href={sponsor.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="group relative flex flex-col items-center justify-center gap-4 px-8 py-10 rounded-2xl bg-card/40 backdrop-blur border border-border/60 hover:border-gold/40 transition-all overflow-hidden"
            >
              {/* Decorative glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Logo */}
              <div className="relative w-full h-24 sm:h-28 flex items-center justify-center">
                <img
                  src={sponsor.logo}
                  alt={`Logo de ${sponsor.name}`}
                  className="max-h-full max-w-full object-contain transition-transform group-hover:scale-105"
                />
              </div>

              {/* Info */}
              <div className="relative text-center">
                <div
                  className="font-display text-lg font-bold text-white tracking-wider"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {sponsor.name}
                </div>
                <div className="text-xs text-foreground/60 mt-1">
                  {sponsor.description}
                </div>
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.a>
          ))}
        </div>

        {/* CTA for new sponsors */}
        <div className="mt-12 text-center">
          <p className="text-sm text-foreground/50 max-w-xl mx-auto">
            ¿Quieres sumar tu marca al proyecto GARRA FC?{" "}
            <a
              href="#contacto"
              className="text-gold hover:text-gold-light font-semibold underline underline-offset-4 transition-colors"
            >
              Conversemos
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
