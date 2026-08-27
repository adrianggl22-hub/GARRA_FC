"use client";

import { motion } from "framer-motion";
import { Trophy, BookOpen, Award, Briefcase } from "lucide-react";
import { coaches } from "./data";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Coaches() {
  return (
    <section className="relative py-24 sm:py-32 bg-background overflow-hidden">
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#14224a]/40 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-xs uppercase tracking-[0.3em] text-gold mb-4">
            Cuerpo Técnico
          </span>
          <h2
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            El banquillo <span className="text-gold">GARRA</span>
          </h2>
          <p className="text-foreground/70 text-lg leading-relaxed">
            Profesionales con licencia y experiencia comprobada en el fútbol
            costarricense. Liderazgo deportivo y formación humana dentro y fuera
            de la cancha.
          </p>
        </div>

        {/* Grid - 2 columns with richer cards */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {coaches.map((coach, i) => (
            <motion.div
              key={coach.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <Card className="group relative bg-card/40 backdrop-blur border-border/60 hover:border-gold/40 transition-all p-6 sm:p-8 h-full overflow-hidden">
                {/* Number watermark */}
                <div
                  className="absolute -top-4 -right-2 font-display text-7xl font-bold opacity-[0.06] select-none"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  0{i + 1}
                </div>

                {/* Header */}
                <div className="relative flex items-start gap-4 mb-6">
                  {/* Avatar */}
                  <div className="relative shrink-0">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-gradient-to-br from-gold/30 to-navy-light border border-gold/30 flex items-center justify-center">
                      <span
                        className="font-display text-xl sm:text-2xl font-bold text-gold"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {coach.initials}
                      </span>
                    </div>
                    {coach.license && (
                      <div className="absolute -bottom-2 -right-2 px-2 py-1 rounded-md bg-gold text-navy-deep text-[9px] font-bold uppercase tracking-wider flex items-center gap-1 shadow-lg">
                        <Award className="h-3 w-3" />
                        Lic. B
                      </div>
                    )}
                  </div>

                  {/* Name + role */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] sm:text-xs text-gold uppercase tracking-[0.2em] font-semibold">
                        {coach.role}
                      </span>
                    </div>
                    <h3
                      className="font-display text-xl sm:text-2xl font-bold text-white leading-tight"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {coach.name}
                    </h3>
                    <div className="text-xs text-foreground/60 mt-1.5 flex items-center gap-1.5">
                      <Briefcase className="h-3 w-3" />
                      {coach.category}
                    </div>
                  </div>
                </div>

                {/* Summary */}
                {coach.summary && (
                  <p className="relative text-sm text-foreground/80 leading-relaxed mb-6 pb-6 border-b border-border/40">
                    {coach.summary}
                  </p>
                )}

                {/* Teams / Trayectoria */}
                {coach.teams && coach.teams.length > 0 && (
                  <div className="relative mb-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Trophy className="h-4 w-4 text-gold" />
                      <h4
                        className="font-display text-sm font-bold text-white uppercase tracking-wider"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        Trayectoria · 12 años
                      </h4>
                      <span className="text-[10px] text-foreground/50 ml-auto uppercase tracking-wider">
                        Tercera División · Linafa Región 8
                      </span>
                    </div>
                    <ul className="space-y-2.5">
                      {coach.teams.map((team, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 p-2.5 rounded-lg bg-navy-deep/40 border border-border/30 hover:border-gold/30 transition-colors"
                        >
                          <Trophy className="h-3.5 w-3.5 text-gold/60 mt-0.5 shrink-0" />
                          <div className="flex-1 min-w-0">
                            <span className="text-sm font-semibold text-white">
                              {team.name}
                            </span>
                            {team.achievement && (
                              <span className="block text-xs text-gold/80 mt-0.5 leading-relaxed">
                                {team.achievement}
                              </span>
                            )}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Seminars */}
                {coach.seminars && coach.seminars.length > 0 && (
                  <div className="relative">
                    <div className="flex items-center gap-2 mb-3">
                      <BookOpen className="h-4 w-4 text-gold" />
                      <h4
                        className="font-display text-sm font-bold text-white uppercase tracking-wider"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        Seminarios
                      </h4>
                    </div>
                    <ul className="space-y-2">
                      {coach.seminars.map((sem, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 p-2.5 rounded-lg bg-navy-deep/40 border border-border/30"
                        >
                          <BookOpen className="h-3.5 w-3.5 text-gold/60 mt-0.5 shrink-0" />
                          <div className="flex-1 min-w-0">
                            <span className="text-sm text-foreground/90 font-medium">
                              {sem.name}
                            </span>
                            {sem.instructor && (
                              <span className="block text-xs text-foreground/60 mt-0.5">
                                Impartido por <span className="text-gold/80 font-medium">{sem.instructor}</span>
                              </span>
                            )}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Empty state for DT Diego (no teams yet) */}
                {(!coach.teams || coach.teams.length === 0) && (
                  <div className="relative flex items-center gap-3 p-4 rounded-lg bg-navy-deep/30 border border-dashed border-border/40">
                    <Trophy className="h-5 w-5 text-gold/40" />
                    <p className="text-xs text-foreground/60 leading-relaxed">
                      En formación con el equipo Juvenil Masculino del club. Próximamente
                      con más trayectoria deportiva en GARRA FC.
                    </p>
                  </div>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
