"use client";

import { motion } from "framer-motion";
import { Megaphone, GraduationCap, Activity } from "lucide-react";
import { coaches } from "./data";
import { Card } from "@/components/ui/card";

const roleIcon = (role: string) => {
  if (/técnico|coordinador/i.test(role)) return Megaphone;
  if (/médico|físico/i.test(role)) return Activity;
  return GraduationCap;
};

export function Coaches() {
  return (
    <section className="relative py-24 sm:py-32 bg-background overflow-hidden">
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

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
            Profesionales certificados, con experiencia comprobada en LINAFA, CONCACAF
            y en la formación de futbolistas de todas las edades. Líderes dentro y fuera
            de la cancha.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {coaches.map((coach, i) => {
            const Icon = roleIcon(coach.role);
            return (
              <motion.div
                key={coach.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
              >
                <Card className="group relative bg-card/40 backdrop-blur border-border/60 hover:border-gold/40 transition-all p-6 h-full overflow-hidden">
                  {/* Number watermark */}
                  <div
                    className="absolute -top-4 -right-2 font-display text-7xl font-bold opacity-[0.06] select-none"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    0{i + 1}
                  </div>

                  <div className="relative flex items-start gap-4">
                    {/* Avatar */}
                    <div className="relative shrink-0">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-gold/30 to-navy-light border border-gold/30 flex items-center justify-center">
                        <span
                          className="font-display text-lg font-bold text-gold"
                          style={{ fontFamily: "var(--font-display)" }}
                        >
                          {coach.initials}
                        </span>
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-7 h-7 rounded-full bg-gold flex items-center justify-center">
                        <Icon className="h-3.5 w-3.5 text-navy-deep" />
                      </div>
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <h3
                        className="font-display text-lg font-bold text-white leading-tight"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {coach.name}
                      </h3>
                      <div className="text-xs text-gold uppercase tracking-wider mt-1">
                        {coach.role}
                      </div>
                      <div className="text-[11px] text-foreground/60 mt-1">
                        {coach.category}
                      </div>
                    </div>
                  </div>

                  <p className="relative text-sm text-foreground/70 leading-relaxed mt-4 pt-4 border-t border-border/40">
                    {coach.experience}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
