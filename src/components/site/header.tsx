"use client";

import { useEffect, useState } from "react";
import { Menu, X, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { href: "#inicio", label: "Inicio" },
  { href: "#club", label: "El Club" },
  { href: "#categorias", label: "Categorías" },
  { href: "#plantilla", label: "Plantilla" },
  { href: "#calendario", label: "Calendario" },
  { href: "#noticias", label: "Noticias" },
  { href: "#contacto", label: "Únete" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050b1f]/95 backdrop-blur-xl border-b border-gold/20 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-3 group">
            <img
              src="/garra-fc-logo.png"
              alt="GARRA FC"
              className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105"
            />
            <div className="hidden sm:block leading-none">
              <div
                className="font-display font-700 text-xl tracking-wider text-white"
                style={{ fontFamily: "var(--font-display)" }}
              >
                GARRA FC
              </div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-gold/80 mt-1">
                Costa Rica · Est. 2024
              </div>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-gold transition-colors relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-4 right-4 h-px bg-gold scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              asChild
              size="sm"
              className="bg-gold text-navy-deep hover:bg-gold-light font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(245,184,0,0.3)]"
            >
              <a href="#contacto">
                <Trophy className="h-4 w-4 mr-2" />
                Únete al Club
              </a>
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Abrir menú"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#050b1f]/98 backdrop-blur-xl border-t border-gold/20">
          <nav className="mx-auto max-w-7xl px-4 py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3 text-sm font-medium text-foreground/90 hover:text-gold hover:bg-white/5 rounded-lg transition-colors"
              >
                {item.label}
              </a>
            ))}
            <Button
              asChild
              className="mt-3 bg-gold text-navy-deep hover:bg-gold-light font-bold"
            >
              <a href="#contacto" onClick={() => setMobileOpen(false)}>
                <Trophy className="h-4 w-4 mr-2" />
                Únete al Club
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
