"use client";

import { motion } from "framer-motion";
import { Users, MapPin, User, ArrowRight } from "lucide-react";
import { categories, type Category } from "./data";
import { Button } from "@/components/ui/button";

const categoryMeta: Record<Category, { gradient: string }> = {
  "mayor-masculino": { gradient: "from-[#f5b800]/30 to-transparent" },
  "mayor-femenino": { gradient: "from-[#ffd24a]/30 to-transparent" },
  "juvenil-masculino": { gradient: "from-[#4a7fff]/30 to-transparent" },
  "juvenil-femenino": { gradient: "from-[#ff6ec7]/30 to-transparent" },
};

export function Categories() {
  return (
    <section
      id="categorias"
      className="relative py-24 sm:py-32 bg-gradient-to-b from-background via-navy-deep to-background overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block text-xs uppercase tracking-[0.3em] text-gold mb-4"
          >
            Estructura Deportiva
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Nuestras <span className="text-gold">categorías</span>
          </motion.h2>
          <p className="text-foreground/70 text-lg leading-relaxed">
            GARRA FC está compuesto por cuatro categorías principales: dos en la rama
            masculina y dos en la rama femenina, cada una con su identidad deportiva,
            cuerpo técnico y proyecto formativo específico.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {categories.map((cat, i) => {
            const meta = categoryMeta[cat.id];
            return (
              <motion.article
                key={cat.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card/40 backdrop-blur hover:border-gold/40 transition-all"
              >
                {/* Gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${meta.gradient} opacity-50 group-hover:opacity-100 transition-opacity`}
                />

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-bl-full" />

                <div className="relative p-6 sm:p-8">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span
                          className="px-2 py-0.5 text-[10px] uppercase tracking-wider rounded font-bold"
                          style={{
                            backgroundColor: `${cat.color}22`,
                            color: cat.color,
                          }}
                        >
                          {cat.level}
                        </span>
                        <span className="px-2 py-0.5 text-[10px] uppercase tracking-wider rounded bg-white/10 text-foreground/70">
                          {cat.gender}
                        </span>
                      </div>
                      <h3
                        className="font-display text-2xl sm:text-3xl font-bold text-white"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {cat.name}
                      </h3>
                    </div>
                    <div
                      className="font-display text-5xl font-bold opacity-20"
                      style={{ fontFamily: "var(--font-display)", color: cat.color }}
                    >
                      0{i + 1}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-foreground/75 text-sm leading-relaxed mb-6 min-h-[4.5rem]">
                    {cat.description}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    <div className="bg-navy-deep/60 border border-border/40 rounded-lg p-3 text-center">
                      <Users className="h-4 w-4 mx-auto mb-1 text-gold" />
                      <div className="font-display text-lg font-bold text-white">
                        {cat.playerCount}
                      </div>
                      <div className="text-[9px] uppercase tracking-wider text-foreground/60">
                        Jugadores
                      </div>
                    </div>
                    <div className="bg-navy-deep/60 border border-border/40 rounded-lg p-3 text-center">
                      <User className="h-4 w-4 mx-auto mb-1 text-gold" />
                      <div className="text-[10px] font-semibold text-white truncate" title={cat.coach}>
                        {cat.coach.split(" ").slice(-1)[0]}
                      </div>
                      <div className="text-[9px] uppercase tracking-wider text-foreground/60">
                        DT
                      </div>
                    </div>
                    <div className="bg-navy-deep/60 border border-border/40 rounded-lg p-3 text-center">
                      <MapPin className="h-4 w-4 mx-auto mb-1 text-gold" />
                      <div className="font-display text-sm font-bold text-white">
                        {cat.ageRange}
                      </div>
                      <div className="text-[9px] uppercase tracking-wider text-foreground/60">
                        Edad
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <Button
                    asChild
                    variant="ghost"
                    className="w-full justify-between text-foreground hover:text-gold hover:bg-gold/10 group/btn"
                  >
                    <a href="#plantilla">
                      <span className="text-sm uppercase tracking-wider">Ver plantilla</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </a>
                  </Button>
                </div>

                {/* Bottom accent */}
                <div
                  className="absolute bottom-0 inset-x-0 h-1 opacity-80"
                  style={{ backgroundColor: cat.color }}
                />
              </motion.article>
            );
          })}
        </div>

        {/* Note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-foreground/50 max-w-2xl mx-auto">
            Además contamos con la <span className="text-gold">Escuela GARRA</span> para
            niños y niñas de 5 a 12 años, semillero que alimenta las categorías juveniles.
          </p>
        </div>
      </div>
    </section>
  );
}
