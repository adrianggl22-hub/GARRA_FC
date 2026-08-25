"use client";

import { motion } from "framer-motion";
import { Handshake } from "lucide-react";
import { sponsors } from "./data";

export function Sponsors() {
  // Duplicate for marquee effect
  const list = [...sponsors, ...sponsors];

  return (
    <section className="relative py-16 sm:py-20 bg-navy-deep border-y border-gold/15 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-10">
        <div className="text-center">
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
        </div>
      </div>

      {/* Marquee */}
      <div className="relative overflow-hidden">
        {/* Edge fade */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-navy-deep to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-navy-deep to-transparent z-10 pointer-events-none" />

        <div className="flex whitespace-nowrap animate-marquee">
          {list.map((sponsor, i) => (
            <motion.div
              key={`${sponsor}-${i}`}
              className="mx-3 sm:mx-4"
              whileHover={{ y: -2 }}
            >
              <div className="flex items-center gap-2 px-6 py-3 rounded-xl bg-card/40 border border-border/40 hover:border-gold/40 transition-colors">
                <div className="w-7 h-7 rounded-md bg-gradient-to-br from-gold to-gold-light flex items-center justify-center">
                  <span
                    className="font-display text-xs font-bold text-navy-deep"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {sponsor.charAt(0)}
                  </span>
                </div>
                <span className="text-sm font-semibold text-white whitespace-nowrap">
                  {sponsor}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
