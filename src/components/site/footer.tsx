"use client";

import { Instagram, Facebook, MapPin, Phone, Clock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const socials = [
  { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/share/1B82pmf1HF/", handle: "Garra FC" },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/garra_fc_2026?igsi=eG0yeHI0bmUweTFm", handle: "@garra_fc_2026" },
];

const quickLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "El Club", href: "#club" },
  { label: "Categorías", href: "#categorias" },
  { label: "Plantilla", href: "#plantilla" },
  { label: "Calendario", href: "#calendario" },
  { label: "Noticias", href: "#noticias" },
];

const categoryLinks = [
  { label: "Mayor Masculino", href: "#categorias" },
  { label: "Mayor Femenino", href: "#categorias" },
  { label: "Juvenil Masculino", href: "#categorias" },
  { label: "Juvenil Femenino", href: "#categorias" },
  { label: "Escuela GARRA (5-12)", href: "#contacto" },
];

export function Footer() {
  return (
    <footer className="relative bg-navy-deep border-t border-gold/20 overflow-hidden">
      {/* Top accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold to-transparent" />

      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gold/5 rounded-full blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-12 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-5">
              <img
                src="/garra-fc-logo.png"
                alt="GARRA FC"
                className="h-14 w-auto object-contain"
              />
              <div>
                <div
                  className="font-display text-2xl font-bold text-white tracking-wider"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  GARRA FC
                </div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-gold/80">
                  Costa Rica · Est. 2024
                </div>
              </div>
            </div>
            <p className="text-foreground/65 text-sm leading-relaxed mb-6 max-w-md">
              Club de fútbol costarricense con sede en San Pablo de Turrubares.
              Comprometidos con la formación integral de futbolistas en categorías
              juveniles y mayores, en ambas ramas. <span className="text-gold">Garra,
              corazón y respeto en cada partido.</span>
            </p>
            <div className="flex flex-wrap gap-2">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="group flex items-center gap-2 px-3 py-2 rounded-lg bg-card/40 border border-border/40 hover:border-gold/40 hover:bg-gold/10 transition-all"
                  title={`${social.label} · ${social.handle}`}
                >
                  <social.icon className="h-4 w-4 text-foreground/70 group-hover:text-gold transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-2">
            <h4
              className="font-display text-sm font-bold text-white uppercase tracking-wider mb-5"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Navegación
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-foreground/65 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div className="lg:col-span-3">
            <h4
              className="font-display text-sm font-bold text-white uppercase tracking-wider mb-5"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Categorías
            </h4>
            <ul className="space-y-3">
              {categoryLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-foreground/65 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div className="lg:col-span-3">
            <h4
              className="font-display text-sm font-bold text-white uppercase tracking-wider mb-5"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Contacto
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-gold mt-0.5 shrink-0" />
                <span className="text-sm text-foreground/70 leading-relaxed">
                  San Pablo de Turrubares<br />
                  Puriscal y Turrubares, Costa Rica
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-4 w-4 text-gold mt-0.5 shrink-0" />
                <span className="text-sm text-foreground/70 leading-relaxed">
                  Entrenamientos<br />
                  Martes y Jueves · 8:00 pm – 9:30 pm
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-gold shrink-0" />
                <a
                  href="https://wa.me/50660537767"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-foreground/70 hover:text-gold transition-colors"
                >
                  +506 6053 7767
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-gold shrink-0" />
                <a
                  href="mailto:adrian@teamtec.co.cr"
                  className="text-sm text-foreground/70 hover:text-gold transition-colors break-all"
                >
                  adrian@teamtec.co.cr
                </a>
              </li>
            </ul>

            <Button
              asChild
              className="mt-6 w-full bg-gold text-navy-deep hover:bg-gold-light font-bold uppercase tracking-wider"
            >
              <a href="#contacto">Únete al Club</a>
            </Button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-foreground/50 text-center sm:text-left">
            © {new Date().getFullYear()} GARRA FC. Todos los derechos reservados.
            Encargado del proyecto: <span className="text-gold">Adrián Andrés Garita González</span>.
          </p>
          <div className="flex items-center gap-4 text-xs text-foreground/50">
            <a href="#" className="hover:text-gold transition-colors">Política de Privacidad</a>
            <span className="opacity-30">·</span>
            <a href="#" className="hover:text-gold transition-colors">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
