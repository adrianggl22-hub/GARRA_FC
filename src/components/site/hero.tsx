"use client";

import { motion } from "framer-motion";
import { ChevronDown, Play, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { clubStats } from "./data";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen w-full overflow-hidden flex items-center bg-carbon"
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-50" />

      {/* Radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gold/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#14224a]/40 rounded-full blur-[100px] pointer-events-none" />

      {/* Diagonal stripes accent */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #f5b800 0px, #f5b800 1px, transparent 1px, transparent 32px)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Left: Branding */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/5 backdrop-blur mb-6"
            >
              <Sparkles className="h-3.5 w-3.5 text-gold" />
              <span className="text-xs uppercase tracking-[0.2em] text-gold-light">
                Club de Fútbol · Costa Rica
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display font-700 text-6xl sm:text-7xl lg:text-8xl xl:text-9xl leading-[0.85] tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              <span className="block text-white">GARRA</span>
              <span className="block text-gold text-glow-gold">FC</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-6 text-lg sm:text-xl text-foreground/80 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Más que un club, una familia futbolística costarricense.
              Fomentamos el talento juvenil y mayor, en ambas ramas,
              con <span className="text-gold font-semibold">garra, corazón y respeto</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <Button
                asChild
                size="lg"
                className="bg-gold text-navy-deep hover:bg-gold-light font-bold uppercase tracking-wider shadow-[0_0_30px_rgba(245,184,0,0.4)] h-12 px-8"
              >
                <a href="#categorias">
                  <Play className="h-5 w-5 mr-2" />
                  Ver Categorías
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-gold/40 text-gold hover:bg-gold/10 font-semibold uppercase tracking-wider h-12 px-8"
              >
                <a href="#club">Conoce el Club</a>
              </Button>
            </motion.div>
          </div>

          {/* Right: Logo display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full bg-gold/20 blur-3xl scale-110 animate-pulse-glow" />

              {/* Rotating ring */}
              <div
                className="absolute -inset-4 rounded-full border border-gold/20"
                style={{ animation: "spin 30s linear infinite" }}
              />

              <img
                src="/garra-fc-logo.png"
                alt="Escudo oficial de GARRA FC - garra de dinosaurio sobre balón azul y dorado"
                className="relative w-72 sm:w-80 lg:w-96 h-auto object-contain drop-shadow-[0_25px_60px_rgba(245,184,0,0.35)]"
              />

              {/* Floating badges */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -left-6 top-1/4 hidden sm:flex flex-col items-center bg-navy-deep/90 backdrop-blur border border-gold/30 rounded-lg px-3 py-2 shadow-xl"
              >
                <span className="font-display text-2xl font-bold text-gold">04</span>
                <span className="text-[10px] uppercase tracking-wider text-foreground/70">
                  Categorías
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute -right-6 bottom-1/4 hidden sm:flex flex-col items-center bg-navy-deep/90 backdrop-blur border border-gold/30 rounded-lg px-3 py-2 shadow-xl"
              >
                <span className="font-display text-2xl font-bold text-gold">2</span>
                <span className="text-[10px] uppercase tracking-wider text-foreground/70">
                  Ramas
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-px bg-gold/15 rounded-2xl overflow-hidden border border-gold/20"
        >
          {clubStats.map((stat) => (
            <div
              key={stat.label}
              className="bg-navy-deep/60 backdrop-blur px-4 py-6 text-center sm:py-8 hover:bg-navy-deep/80 transition-colors"
            >
              <div
                className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gold"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {stat.value}
                {stat.suffix && <span className="text-2xl ml-1">{stat.suffix}</span>}
              </div>
              <div className="mt-1 text-[10px] sm:text-xs uppercase tracking-[0.15em] text-foreground/60">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center text-gold/70">
        <span className="text-[10px] uppercase tracking-[0.2em] mb-2">Scroll</span>
        <ChevronDown className="h-5 w-5 animate-bounce" />
      </div>

      {/* Marquee */}
      <div className="absolute bottom-0 inset-x-0 bg-gold text-navy-deep py-2 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {Array(4)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="flex items-center">
                <span className="mx-6 text-sm font-bold uppercase tracking-wider">
                  ⚽ Próximo partido: GARRA FC vs AD Guanacasteca · 30 Ago · 4:00pm
                </span>
                <span className="mx-2 text-navy/40">★</span>
                <span className="mx-6 text-sm font-bold uppercase tracking-wider">
                  🏆 Temporada 2026 · En juego
                </span>
                <span className="mx-2 text-navy/40">★</span>
                <span className="mx-6 text-sm font-bold uppercase tracking-wider">
                  📍 Estadio GARRA · San José, Costa Rica
                </span>
                <span className="mx-2 text-navy/40">★</span>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
