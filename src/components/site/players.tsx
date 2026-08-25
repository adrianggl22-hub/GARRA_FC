"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { players, categories, type Category } from "./data";
import { Card } from "@/components/ui/card";

const tabs: { id: Category; label: string; short: string }[] = [
  { id: "mayor-masculino", label: "Mayor Masculino", short: "MAYOR M" },
  { id: "mayor-femenino", label: "Mayor Femenino", short: "MAYOR F" },
  { id: "juvenil-masculino", label: "Juvenil Masculino", short: "JUVENIL M" },
  { id: "juvenil-femenino", label: "Juvenil Femenino", short: "JUVENIL F" },
];

// Generate stable avatar color from name
function avatarColors(name: string): [string, string] {
  const palette: [string, string][] = [
    ["#f5b800", "#14224a"],
    ["#4a7fff", "#0a1530"],
    ["#ff6ec7", "#0a1530"],
    ["#ffd24a", "#14224a"],
    ["#6ad19a", "#0a1530"],
  ];
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = (hash * 31 + name.charCodeAt(i)) | 0;
  return palette[Math.abs(hash) % palette.length];
}

function initials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export function Players() {
  const [active, setActive] = useState<Category>("mayor-masculino");

  const filtered = players.filter((p) => p.category === active);
  const currentCategory = categories.find((c) => c.id === active)!;

  return (
    <section id="plantilla" className="relative py-24 sm:py-32 bg-background overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-xs uppercase tracking-[0.3em] text-gold mb-4">
            Nuestros Atletas
          </span>
          <h2
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            La <span className="text-gold">plantilla</span> GARRA
          </h2>
          <p className="text-foreground/70 text-lg leading-relaxed">
            Conoce a los futbolistas que defienden nuestros colores en cada categoría.
            Cada uno representa la garra, el talento y la pasión por la camiseta.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => {
            const isActive = active === tab.id;
            const cat = categories.find((c) => c.id === tab.id)!;
            return (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                className={`relative px-4 sm:px-6 py-3 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all ${
                  isActive
                    ? "text-navy-deep"
                    : "text-foreground/70 hover:text-white bg-card/40 border border-border/60"
                }`}
                style={
                  isActive
                    ? { backgroundColor: cat.color }
                    : undefined
                }
              >
                <span className="hidden sm:inline">{tab.label}</span>
                <span className="sm:hidden">{tab.short}</span>
              </button>
            );
          })}
        </div>

        {/* Player grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 sm:gap-5"
          >
            {filtered.map((player, i) => {
              const [bg, fg] = avatarColors(player.name);
              return (
                <motion.div
                  key={player.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  whileHover={{ y: -4 }}
                >
                  <Card className="group relative bg-card/50 backdrop-blur border-border/60 hover:border-gold/40 transition-all overflow-hidden">
                    {/* Number watermark */}
                    <div
                      className="absolute -top-4 -right-2 font-display text-8xl font-bold opacity-[0.07] select-none"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {player.number}
                    </div>

                    <div className="relative p-5">
                      {/* Captain badge */}
                      {player.isCaptain && (
                        <div className="absolute top-3 right-3 px-2 py-0.5 bg-gold text-navy-deep text-[9px] font-bold uppercase rounded">
                          C
                        </div>
                      )}

                      {/* Avatar */}
                      <div
                        className="relative w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 ring-2 ring-border/60 group-hover:ring-gold/40 transition-all"
                        style={{
                          background: `linear-gradient(135deg, ${bg}, ${fg})`,
                        }}
                      >
                        <span
                          className="font-display text-2xl font-bold text-white"
                          style={{ fontFamily: "var(--font-display)" }}
                        >
                          {initials(player.name)}
                        </span>
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-navy-deep border-2 border-card flex items-center justify-center text-xs">
                          {player.nationality}
                        </div>
                      </div>

                      {/* Name + number */}
                      <div className="text-center">
                        <div
                          className="font-display text-3xl font-bold text-gold leading-none mb-1"
                          style={{ fontFamily: "var(--font-display)" }}
                        >
                          {player.number}
                        </div>
                        <h4 className="font-semibold text-white text-sm leading-tight">
                          {player.name}
                        </h4>
                        <p className="text-[11px] text-foreground/60 mt-1 uppercase tracking-wider">
                          {player.position}
                        </p>
                      </div>

                      {/* Stats */}
                      <div className="mt-4 pt-4 border-t border-border/40 grid grid-cols-3 gap-1 text-center">
                        <div>
                          <div className="text-xs font-bold text-white">
                            {player.age}
                          </div>
                          <div className="text-[8px] uppercase tracking-wider text-foreground/50">
                            Edad
                          </div>
                        </div>
                        <div>
                          <div className="text-xs font-bold text-gold">
                            {player.goals}
                          </div>
                          <div className="text-[8px] uppercase tracking-wider text-foreground/50">
                            Goles
                          </div>
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white">
                            {player.matches}
                          </div>
                          <div className="text-[8px] uppercase tracking-wider text-foreground/50">
                            PJ
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom accent */}
                    <div
                      className="absolute bottom-0 inset-x-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ backgroundColor: currentCategory.color }}
                    />
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Coach mention */}
        <div className="mt-12 flex items-center justify-center gap-3 text-sm text-foreground/60">
          <span className="h-px w-12 bg-border/60" />
          <span>
            Cuerpo técnico: <span className="text-gold font-semibold">{currentCategory.coach}</span>
            {" · "}
            {filtered.length} jugadores registrados
          </span>
          <span className="h-px w-12 bg-border/60" />
        </div>
      </div>
    </section>
  );
}
