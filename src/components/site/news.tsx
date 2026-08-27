"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { news } from "./data";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const monthNames = [
  "ene", "feb", "mar", "abr", "may", "jun",
  "jul", "ago", "sep", "oct", "nov", "dic",
];

function formatDate(iso: string): string {
  const d = new Date(iso + "T00:00:00");
  return `${d.getDate()} ${monthNames[d.getMonth()]} ${d.getFullYear()}`;
}

export function News() {
  const [featured, ...rest] = news;

  return (
    <section id="noticias" className="relative py-24 sm:py-32 bg-background overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#14224a]/40 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="inline-block text-xs uppercase tracking-[0.3em] text-gold mb-4">
              Sala de Prensa
            </span>
            <h2
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Últimas <span className="text-gold">noticias</span>
            </h2>
          </div>
          <p className="text-foreground/70 text-base max-w-md">
            Mantente al día con la actualidad del club: fichajes, resultados, eventos
            comunitarios y todo lo que ocurre detrás de la garra.
          </p>
        </div>

        {/* Featured + grid */}
        <div className="grid lg:grid-cols-12 gap-6">
          {/* Featured */}
          <motion.a
            href="#"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 group"
          >
            <Card className="h-full bg-card/40 backdrop-blur border-border/60 hover:border-gold/40 transition-all overflow-hidden">
              {/* Featured image - real photo with overlay */}
              <div className="relative h-64 sm:h-80 overflow-hidden">
                <img
                  src="/news-featured.jpg"
                  alt="Jugador de GARRA FC en acción durante un partido"
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                {/* Gradient overlay for legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/60 to-navy-deep/20" />
                <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/70 to-transparent" />
                {/* Grid texture */}
                <div className="absolute inset-0 bg-grid opacity-15" />

                <div className="absolute top-4 left-4">
                  <Badge className="bg-gold text-navy-deep uppercase tracking-wider font-bold">
                    Destacado
                  </Badge>
                </div>
                <div className="absolute bottom-4 right-4">
                  <Badge className="bg-navy-deep/80 backdrop-blur text-gold border-gold/30 uppercase tracking-wider">
                    {featured.category}
                  </Badge>
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-3 text-xs text-foreground/50 mb-3">
                  <span>{formatDate(featured.date)}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {featured.readTime}
                  </span>
                </div>
                <h3
                  className="font-display text-2xl sm:text-3xl font-bold text-white mb-3 leading-tight group-hover:text-gold transition-colors"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {featured.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {featured.excerpt}
                </p>
                <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold group-hover:gap-3 transition-all">
                  Leer nota completa
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </Card>
          </motion.a>

          {/* Side list */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {rest.slice(0, 4).map((item, i) => (
              <motion.a
                key={item.id}
                href="#"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group flex-1"
              >
                <Card className="h-full bg-card/40 backdrop-blur border-border/60 hover:border-gold/40 transition-all p-5 flex items-start gap-4">
                  <div className="shrink-0 w-14 h-14 rounded-lg bg-gradient-to-br from-navy-light to-navy-deep border border-gold/20 flex items-center justify-center text-2xl">
                    {item.emoji}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1.5 text-[10px] uppercase tracking-wider text-foreground/50">
                      <span className="text-gold">{item.category}</span>
                      <span>·</span>
                      <span>{formatDate(item.date)}</span>
                    </div>
                    <h4 className="font-semibold text-white text-sm leading-tight group-hover:text-gold transition-colors line-clamp-2">
                      {item.title}
                    </h4>
                  </div>
                  <ArrowRight className="h-4 w-4 text-foreground/40 group-hover:text-gold group-hover:translate-x-1 transition-all shrink-0 mt-1" />
                </Card>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
