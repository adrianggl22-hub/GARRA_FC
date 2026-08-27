"use client";

import { motion } from "framer-motion";
import { Heart, Target, Users, Shield, Trophy, Flame } from "lucide-react";
import { Card } from "@/components/ui/card";

const values = [
  {
    icon: Flame,
    title: "Garra",
    description:
      "Luchamos por cada balón hasta el último segundo. La entrega es innegociable, dentro y fuera de la cancha.",
  },
  {
    icon: Heart,
    title: "Corazón",
    description:
      "Pasión por el fútbol y por nuestra camiseta. Jugamos con identidad y con orgullo por Costa Rica.",
  },
  {
    icon: Shield,
    title: "Disciplina",
    description:
      "El respeto, la constancia y la formación integral son la base de cada jugador y jugadora del club.",
  },
  {
    icon: Users,
    title: "Familia",
    description:
      "El club es una familia. Jugadores, cuerpo técnico, padres y aficionados caminamos juntos.",
  },
];

export function About() {
  return (
    <section id="club" className="relative py-24 sm:py-32 bg-background overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-1/2 -left-32 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -right-32 w-96 h-96 bg-[#14224a]/40 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="grid lg:grid-cols-12 gap-12 items-start mb-20">
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-xs uppercase tracking-[0.3em] text-gold mb-4">
                Sobre el Club
              </span>
              <h2
                className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Nacidos para
                <br />
                <span className="text-gold">competir con garra</span>
              </h2>
            </motion.div>
          </div>

          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-5 text-foreground/80 text-lg leading-relaxed"
            >
              <p>
                <span className="text-gold font-semibold">GARRA FC</span> es un club
                de fútbol costarricense fundado en el año 2024 con una visión clara:
                convertirse en una potencia deportiva en el fútbol nacional a través de
                la formación íntegra de sus atletas. Desde su nacimiento, el club ha
                construido un proyecto serio y profesional con presencia en cuatro
                grandes categorías: Mayor Masculino, Mayor Femenino, Juvenil Masculino
                y Juvenil Femenino.
              </p>
              <p>
                Ubicados en <span className="text-white font-semibold">Puriscal</span>, en
                la zona de Puriscal y Turrubares, contamos con un cuerpo técnico
                certificado por <span className="text-white font-semibold">FCRF</span>, y
                una filosofía deportiva que combina <span className="text-white font-semibold">rendimiento
                competitivo</span> con <span className="text-white font-semibold">formación
                humana</span>. Creemos que el fútbol es una herramienta transformadora
                que enseña valores, abre oportunidades y construye comunidad.
              </p>
              <p>
                Nuestro escudo, una garra de dinosaurio aferrándose a un balón, simboliza
                nuestra identidad: <span className="italic text-gold">fuerza, tenacidad y
                determinación</span>. Esa es la garra que nos define.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Mission / Vision / Goal */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {[
            {
              icon: Target,
              tag: "Misión",
              title: "Formar futbolistas y personas",
              text:
                "Desarrollar talento deportivo en un marco de valores humanos, brindando oportunidades de crecimiento integral a niños, niñas, jóvenes y adultos de Costa Rica.",
            },
            {
              icon: Trophy,
              tag: "Visión",
              title: "Líderes del fútbol nacional",
              text:
                "Ser uno de los clubes más respetados de Costa Rica, con presencia en todas las categorías de LINAFA y referente del fútbol femenino y de cantera en el país.",
            },
            {
              icon: Users,
              tag: "Compromiso",
              title: "Comunidad y oportunidades",
              text:
                "Apoyar a los jóvenes talentos mediante becas académicas, alianzas educativas y programas comunitarios que usan el fútbol como motor de cambio social.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.tag}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="h-full bg-card/60 backdrop-blur border-border/60 hover:border-gold/40 transition-colors p-6 sm:p-8">
                <div className="w-12 h-12 rounded-lg bg-gold/15 flex items-center justify-center mb-5">
                  <item.icon className="h-6 w-6 text-gold" />
                </div>
                <div className="text-xs uppercase tracking-[0.2em] text-gold/80 mb-2">
                  {item.tag}
                </div>
                <h3
                  className="font-display text-xl font-bold text-white mb-3"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {item.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed text-sm">
                  {item.text}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Values */}
        <div>
          <div className="text-center mb-12">
            <span className="inline-block text-xs uppercase tracking-[0.3em] text-gold mb-4">
              Lo que nos define
            </span>
            <h3
              className="font-display text-3xl sm:text-4xl font-bold text-white"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Nuestros valores
            </h3>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="group relative bg-gradient-to-b from-card/40 to-transparent border border-border/60 hover:border-gold/40 rounded-xl p-6 transition-all"
              >
                <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <value.icon className="h-8 w-8 text-gold mb-4" />
                <h4
                  className="font-display text-lg font-bold text-white mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {value.title}
                </h4>
                <p className="text-foreground/65 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
