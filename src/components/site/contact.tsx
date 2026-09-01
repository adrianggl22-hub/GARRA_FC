"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, CheckCircle2, Calendar, User, MessageSquare, Clock, Instagram, Facebook } from "lucide-react";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

const contactInfo = [
  {
    icon: MapPin,
    label: "Sede del Club",
    value: "San Pablo de Turrubares",
    sub: "Puriscal y Turrubares, Costa Rica",
  },
  {
    icon: Clock,
    label: "Horarios de Entrenamiento",
    value: "Martes y Jueves · 8:00 pm – 9:30 pm",
    sub: "Sede San Pablo de Turrubares",
  },
  {
    icon: Phone,
    label: "Teléfono / WhatsApp",
    value: "+506 6053 7767",
    sub: "Encargado: Adrián Andrés Garita González",
  },
  {
    icon: Mail,
    label: "Correo electrónico",
    value: "adrian@teamtec.se",
    sub: "Escríbenos, atendemos en menos de 24 horas",
    href: "mailto:adrian@teamtec.se",
  },
];

const tryoutBenefits = [
  "Evaluación por cuerpo técnico certificado",
  "Acceso a la escuela GARRA para menores de 12 años",
  "Oportunidades de proyección en LINAFA",
];

const socialLinks = [
  { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/share/1B82pmf1HF/", handle: "Garra FC" },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/garra_fc_2026?igsi=eG0yeHI0bmUweTFm", handle: "@garra_fc_2026" },
];

const projectLead = {
  name: "Adrián Andrés Garita González",
  role: "Encargado del Proyecto",
  initials: "AG",
};

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    category: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Construir el mailto con todos los datos del formulario
    const to = "adrian@teamtec.se";
    const subject = `Nuevo mensaje desde el sitio web GARRA FC - ${form.category || "Consulta general"}`;
    const body = `Hola, soy ${form.name}.

Categoría de interés: ${form.category || "No especificada"}
Teléfono de contacto: ${form.phone || "No proporcionado"}
Correo: ${form.email}

Mensaje:
${form.message}

---
Enviado desde el formulario de contacto del sitio web GARRA FC.`;

    const mailtoUrl = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Abrir el cliente de correo del usuario
    window.location.href = mailtoUrl;

    // Mostrar mensaje de éxito
    setSubmitted(true);
    toast.success("Abriendo tu cliente de correo...", {
      description: "Si no se abre automáticamente, escríbenos a adrian@teamtec.se",
    });
  };

  const updateField = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section
      id="contacto"
      className="relative py-24 sm:py-32 bg-gradient-to-b from-background to-navy-deep overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold/8 rounded-full blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-xs uppercase tracking-[0.3em] text-gold mb-4">
            Únete a la Familia
          </span>
          <h2
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Sé parte de <span className="text-gold">GARRA FC</span>
          </h2>
          <p className="text-foreground/70 text-lg leading-relaxed">
            Si eres futbolista, jugador(a) juvenil o padre de familia interesado en
            nuestra escuela, escríbenos. Abrimos pruebas periódicas y cupos limitados
            en cada categoría.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <Card className="bg-card/40 backdrop-blur border-border/60 p-6 sm:p-8">
              {submitted ? (
                <div className="flex flex-col items-center text-center py-16">
                  <div className="w-20 h-20 rounded-full bg-green-500/15 flex items-center justify-center mb-6">
                    <CheckCircle2 className="h-10 w-10 text-green-400" />
                  </div>
                  <h3
                    className="font-display text-2xl font-bold text-white mb-3"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    ¡Gracias por escribirnos!
                  </h3>
                  <p className="text-foreground/70 max-w-md">
                    Hemos recibido tu solicitud. Un representante del club se pondrá en
                    contacto contigo muy pronto. ¡Pura vida y goool!
                  </p>
                  <Button
                    variant="outline"
                    className="mt-6 border-gold/40 text-gold hover:bg-gold/10"
                    onClick={() => setSubmitted(false)}
                  >
                    Enviar otro mensaje
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-foreground/80 flex items-center gap-2">
                        <User className="h-3.5 w-3.5" />
                        Nombre completo
                      </Label>
                      <Input
                        id="name"
                        placeholder="Tu nombre"
                        required
                        value={form.name}
                        onChange={(e) => updateField("name", e.target.value)}
                        className="bg-navy-deep/60 border-border/60 focus:border-gold"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground/80 flex items-center gap-2">
                        <Mail className="h-3.5 w-3.5" />
                        Correo electrónico
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="tucorreo@ejemplo.com"
                        required
                        value={form.email}
                        onChange={(e) => updateField("email", e.target.value)}
                        className="bg-navy-deep/60 border-border/60 focus:border-gold"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-foreground/80 flex items-center gap-2">
                        <Phone className="h-3.5 w-3.5" />
                        Teléfono
                      </Label>
                      <Input
                        id="phone"
                        placeholder="+506 8888-8888"
                        value={form.phone}
                        onChange={(e) => updateField("phone", e.target.value)}
                        className="bg-navy-deep/60 border-border/60 focus:border-gold"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-foreground/80 flex items-center gap-2">
                        <Calendar className="h-3.5 w-3.5" />
                        Categoría de interés
                      </Label>
                      <Select
                        value={form.category}
                        onValueChange={(value) => updateField("category", value)}
                      >
                        <SelectTrigger className="bg-navy-deep/60 border-border/60 focus:border-gold">
                          <SelectValue placeholder="Selecciona una categoría" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Mayor Masculino">Mayor Masculino</SelectItem>
                          <SelectItem value="Mayor Femenino">Mayor Femenino</SelectItem>
                          <SelectItem value="Juvenil Masculino (13-17)">Juvenil Masculino (13-17)</SelectItem>
                          <SelectItem value="Juvenil Femenino (13-17)">Juvenil Femenino (13-17)</SelectItem>
                          <SelectItem value="Escuela GARRA (5-12)">Escuela GARRA (5-12)</SelectItem>
                          <SelectItem value="Otra consulta">Otra consulta</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground/80 flex items-center gap-2">
                      <MessageSquare className="h-3.5 w-3.5" />
                      Mensaje
                    </Label>
                    <Textarea
                      id="message"
                      rows={4}
                      placeholder="Cuéntanos sobre tu experiencia, edad, posición y por qué quieres unirte a GARRA FC..."
                      required
                      value={form.message}
                      onChange={(e) => updateField("message", e.target.value)}
                      className="bg-navy-deep/60 border-border/60 focus:border-gold resize-none"
                    />
                  </div>

                  <div className="flex items-center gap-3 text-xs text-foreground/60">
                    <Mail className="h-3.5 w-3.5 text-gold shrink-0" />
                    <span>
                      Tu mensaje se enviará a <span className="text-gold font-semibold">adrian@teamtec.se</span> a través de tu cliente de correo.
                    </span>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full sm:w-auto bg-gold text-navy-deep hover:bg-gold-light font-bold uppercase tracking-wider shadow-[0_0_30px_rgba(245,184,0,0.3)]"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Enviar solicitud
                  </Button>
                </form>
              )}
            </Card>
          </motion.div>

          {/* Side panel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 space-y-4"
          >
            <Card className="bg-card/40 backdrop-blur border-border/60 p-6">
              <h3
                className="font-display text-lg font-bold text-white mb-5"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Información de contacto
              </h3>
              <div className="space-y-5">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gold/15 flex items-center justify-center shrink-0">
                      <info.icon className="h-5 w-5 text-gold" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[10px] uppercase tracking-wider text-foreground/50">
                        {info.label}
                      </div>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-white font-semibold hover:text-gold transition-colors break-all"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div className="text-white font-semibold">{info.value}</div>
                      )}
                      <div className="text-xs text-foreground/60 mt-0.5">{info.sub}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Redes sociales */}
              <div className="mt-5 pt-5 border-t border-border/40">
                <div className="text-[10px] uppercase tracking-wider text-foreground/50 mb-3">
                  Síguenos en redes
                </div>
                <div className="flex gap-2">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-navy-deep/60 border border-border/40 hover:border-gold/40 hover:bg-gold/10 transition-all group"
                      title={`${social.label} · ${social.handle}`}
                    >
                      <social.icon className="h-4 w-4 text-foreground/70 group-hover:text-gold transition-colors" />
                      <span className="text-xs text-foreground/80 group-hover:text-gold transition-colors">
                        {social.handle}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </Card>

            {/* Project lead card */}
            <Card className="bg-gradient-to-br from-gold/15 to-navy-light border-gold/30 p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold to-gold-light flex items-center justify-center border border-gold/40">
                    <span
                      className="font-display text-lg font-bold text-navy-deep"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {projectLead.initials}
                    </span>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[10px] uppercase tracking-wider text-gold mb-0.5">
                    Encargado del Proyecto
                  </div>
                  <h3
                    className="font-display text-base font-bold text-white leading-tight"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {projectLead.name}
                  </h3>
                  <div className="text-xs text-foreground/70 mt-0.5">
                    {projectLead.role}
                  </div>
                </div>
              </div>
              <a
                href="https://wa.me/50660537767"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full mt-2 px-4 py-2.5 rounded-lg bg-gold text-navy-deep hover:bg-gold-light font-bold text-sm uppercase tracking-wider transition-colors"
              >
                <Phone className="h-4 w-4" />
                Contactar por WhatsApp
              </a>
            </Card>

            <Card className="bg-card/40 backdrop-blur border-border/60 p-6">
              <h3
                className="font-display text-lg font-bold text-gold mb-3"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Beneficios de las pruebas GARRA
              </h3>
              <ul className="space-y-2.5">
                {tryoutBenefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2 text-sm text-foreground/85">
                    <CheckCircle2 className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
