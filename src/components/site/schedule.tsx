"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, Trophy } from "lucide-react";
import { matches, categories, standings, type Match } from "./data";
import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const monthNames = [
  "Ene", "Feb", "Mar", "Abr", "May", "Jun",
  "Jul", "Ago", "Sep", "Oct", "Nov", "Dic",
];

function formatDate(iso: string) {
  const d = new Date(iso + "T00:00:00");
  return {
    day: d.getDate().toString().padStart(2, "0"),
    month: monthNames[d.getMonth()].toUpperCase(),
    weekday: ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"][d.getDay()].toUpperCase(),
  };
}

function MatchCard({ match }: { match: Match }) {
  const cat = categories.find((c) => c.id === match.category)!;
  const date = formatDate(match.date);
  const isPlayed = match.status === "jugado";
  const won = match.result && match.isLocal && match.result.home > match.result.away;
  const lost = match.result && match.isLocal && match.result.home < match.result.away;
  const drew = match.result && match.result.home === match.result.away;

  return (
    <Card className="group relative bg-card/40 backdrop-blur border-border/60 hover:border-gold/40 transition-all overflow-hidden">
      <div className="flex items-stretch">
        {/* Date column */}
        <div className="flex flex-col items-center justify-center w-16 sm:w-20 bg-navy-deep/60 border-r border-border/40 py-4 px-2">
          <div className="text-[9px] uppercase tracking-wider text-foreground/60">
            {date.weekday}
          </div>
          <div
            className="font-display text-2xl sm:text-3xl font-bold text-gold leading-none my-1"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {date.day}
          </div>
          <div className="text-[9px] uppercase tracking-wider text-foreground/60">
            {date.month}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-4 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-2">
            <div className="flex items-center gap-2 min-w-0">
              <Badge
                variant="outline"
                className="text-[9px] uppercase tracking-wider px-1.5 py-0.5 border-border/60 text-foreground/70 shrink-0"
              >
                {cat.shortName}
              </Badge>
              <span className="text-[10px] text-foreground/50 shrink-0">
                {match.isLocal ? "🏠 Local" : "✈️ Visitante"}
              </span>
            </div>
            {isPlayed && (
              <div
                className={`text-[9px] uppercase tracking-wider px-2 py-0.5 rounded font-bold ${
                  won
                    ? "bg-green-500/15 text-green-400"
                    : lost
                    ? "bg-red-500/15 text-red-400"
                    : "bg-yellow-500/15 text-yellow-400"
                }`}
              >
                {won ? "Ganó" : lost ? "Perdió" : "Empató"}
              </div>
            )}
          </div>

          {/* Teams / Score */}
          <div className="flex items-center justify-between gap-3">
            <div className="flex-1 min-w-0">
              <div className="font-semibold text-white text-sm truncate">
                {match.isLocal ? "GARRA FC" : match.opponent}
              </div>
            </div>
            {isPlayed && match.result ? (
              <div
                className="font-display text-xl font-bold px-3 py-1 rounded bg-navy-deep/80 border border-gold/20"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {match.isLocal
                  ? `${match.result.home} - ${match.result.away}`
                  : `${match.result.home} - ${match.result.away}`}
              </div>
            ) : (
              <div className="text-gold font-display font-bold text-sm" style={{ fontFamily: "var(--font-display)" }}>
                VS
              </div>
            )}
            <div className="flex-1 min-w-0 text-right">
              <div className="font-semibold text-white text-sm truncate">
                {match.isLocal ? match.opponent : "GARRA FC"}
              </div>
            </div>
          </div>

          {/* Meta */}
          <div className="mt-3 flex items-center gap-4 text-[10px] text-foreground/55">
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {match.time}
            </span>
            <span className="flex items-center gap-1 truncate">
              <MapPin className="h-3 w-3 shrink-0" />
              <span className="truncate">{match.stadium}</span>
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
}

export function Schedule() {
  const upcoming = matches.filter((m) => m.status === "próximo");
  const recent = matches.filter((m) => m.status === "jugado");

  return (
    <section
      id="calendario"
      className="relative py-24 sm:py-32 bg-gradient-to-b from-background via-navy-deep to-background overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid opacity-15" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-xs uppercase tracking-[0.3em] text-gold mb-4">
            Temporada 2026
          </span>
          <h2
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Calendario y <span className="text-gold">resultados</span>
          </h2>
          <p className="text-foreground/70 text-lg leading-relaxed">
            Cada fin de semana hay fútbol GARRA. Mantente al tanto de los próximos
            partidos y revisa los resultados recientes de nuestras cuatro categorías.
          </p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="proximos" className="w-full">
          <TabsList className="mx-auto flex w-fit bg-card/40 border border-border/60">
            <TabsTrigger
              value="proximos"
              className="data-[state=active]:bg-gold data-[state=active]:text-navy-deep"
            >
              <Calendar className="h-4 w-4 mr-2" />
              Próximos ({upcoming.length})
            </TabsTrigger>
            <TabsTrigger
              value="jugados"
              className="data-[state=active]:bg-gold data-[state=active]:text-navy-deep"
            >
              <Trophy className="h-4 w-4 mr-2" />
              Resultados ({recent.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="proximos" className="mt-8">
            <div className="grid md:grid-cols-2 gap-4">
              {upcoming.map((match, i) => (
                <motion.div
                  key={match.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <MatchCard match={match} />
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="jugados" className="mt-8">
            <div className="grid md:grid-cols-2 gap-4">
              {recent.map((match, i) => (
                <motion.div
                  key={match.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <MatchCard match={match} />
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Standings preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <Card className="bg-card/40 backdrop-blur border-border/60 overflow-hidden">
            <div className="flex items-center justify-between p-6 border-b border-border/40">
              <div>
                <h3
                  className="font-display text-xl font-bold text-white"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Tabla de Posiciones · Segunda División
                </h3>
                <p className="text-xs text-foreground/60 mt-1">
                  Torneo Clausura 2026 · Mayor Masculino
                </p>
              </div>
              <Trophy className="h-6 w-6 text-gold" />
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-[10px] uppercase tracking-wider text-foreground/50">
                    <th className="text-center font-medium px-3 py-3">#</th>
                    <th className="text-left font-medium px-3 py-3">Equipo</th>
                    <th className="text-center font-medium px-3 py-3">PJ</th>
                    <th className="text-center font-medium px-3 py-3 hidden sm:table-cell">G</th>
                    <th className="text-center font-medium px-3 py-3 hidden sm:table-cell">E</th>
                    <th className="text-center font-medium px-3 py-3 hidden sm:table-cell">P</th>
                    <th className="text-center font-medium px-3 py-3 hidden md:table-cell">GF</th>
                    <th className="text-center font-medium px-3 py-3 hidden md:table-cell">GC</th>
                    <th className="text-center font-medium px-3 py-3">DIF</th>
                    <th className="text-center font-medium px-3 py-3">PTS</th>
                  </tr>
                </thead>
                <tbody>
                  {standings.map((row) => (
                    <tr
                      key={row.team}
                      className={`border-t border-border/30 hover:bg-white/[0.03] transition-colors ${
                        row.isGarra ? "bg-gold/5 border-l-4 border-l-gold" : ""
                      }`}
                    >
                      <td className="text-center px-3 py-3">
                        <span
                          className={`font-display font-bold ${
                            row.position <= 2 ? "text-gold" : "text-foreground/60"
                          }`}
                          style={{ fontFamily: "var(--font-display)" }}
                        >
                          {row.position}
                        </span>
                      </td>
                      <td className="px-3 py-3 font-semibold text-white">
                        {row.team}
                        {row.isGarra && (
                          <Badge className="ml-2 bg-gold/15 text-gold border-gold/30 text-[9px]">
                            GARRA FC
                          </Badge>
                        )}
                      </td>
                      <td className="text-center px-3 py-3 text-foreground/70">{row.played}</td>
                      <td className="text-center px-3 py-3 text-green-400 hidden sm:table-cell">{row.won}</td>
                      <td className="text-center px-3 py-3 text-yellow-400 hidden sm:table-cell">{row.drawn}</td>
                      <td className="text-center px-3 py-3 text-red-400 hidden sm:table-cell">{row.lost}</td>
                      <td className="text-center px-3 py-3 text-foreground/70 hidden md:table-cell">{row.goalsFor}</td>
                      <td className="text-center px-3 py-3 text-foreground/70 hidden md:table-cell">{row.goalsAgainst}</td>
                      <td className="text-center px-3 py-3 text-foreground/60">
                        {row.goalsFor - row.goalsAgainst > 0 ? "+" : ""}
                        {row.goalsFor - row.goalsAgainst}
                      </td>
                      <td className="text-center px-3 py-3">
                        <span
                          className="font-display text-base font-bold text-white"
                          style={{ fontFamily: "var(--font-display)" }}
                        >
                          {row.points}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
