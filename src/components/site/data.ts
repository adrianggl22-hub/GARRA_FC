// GARRA FC - Site Data
// Datos del club, categorías, jugadores, cuerpo técnico, partidos y noticias.

export type Category =
  | "juvenil-masculino"
  | "juvenil-femenino"
  | "mayor-masculino"
  | "mayor-femenino";

export interface CategoryInfo {
  id: Category;
  name: string;
  shortName: string;
  gender: "Masculino" | "Femenino";
  level: "Juvenil" | "Mayor";
  ageRange: string;
  playerCount: number;
  coach: string;
  description: string;
  color: string;
}

export const categories: CategoryInfo[] = [
  {
    id: "mayor-masculino",
    name: "Mayor Masculino",
    shortName: "MAYOR M",
    gender: "Masculino",
    level: "Mayor",
    ageRange: "18+ años",
    playerCount: 26,
    coach: "Adrián Garita",
    description:
      "El equipo estandarte del club. Compite en la Segunda División de LINAFA con un plantel experimentado que combina jóvenes promesas y jugadores consolidados.",
    color: "#f5b800",
  },
  {
    id: "mayor-femenino",
    name: "Mayor Femenino",
    shortName: "MAYOR F",
    gender: "Femenino",
    level: "Mayor",
    ageRange: "18+ años",
    playerCount: 23,
    coach: "Adrián Garita",
    description:
      "Pioneras del fútbol femenino en el club. Compiten en la Primera División Femenina de LINAFA y representan el orgullo de las guerreras GARRA FC.",
    color: "#ffd24a",
  },
  {
    id: "juvenil-masculino",
    name: "Juvenil Masculino",
    shortName: "JUVENIL M",
    gender: "Masculino",
    level: "Juvenil",
    ageRange: "13 - 17 años",
    playerCount: 12,
    coach: "Diego Barrantes",
    description:
      "La cantera del club. Categorías Sub-13, Sub-15 y Sub-17 donde se forman las futuras estrellas del fútbol costarricense con metodología profesional. Estos son los 12 jugadores del plantel Sub-17 actual.",
    color: "#4a7fff",
  },
  {
    id: "juvenil-femenino",
    name: "Juvenil Femenino",
    shortName: "JUVENIL F",
    gender: "Femenino",
    level: "Juvenil",
    ageRange: "13 - 17 años",
    playerCount: 35,
    coach: "Adrián Garita",
    description:
      "Formación íntegra de las futbolistas del mañana. Tres categorías en crecimiento que apuntan a alimentar el equipo mayor femenino y la selección nacional.",
    color: "#ff6ec7",
  },
];

export interface Player {
  name: string;
  number: number;
  position: string;
  category: Category;
  age: number;
  goals: number;
  matches: number;
  nationality: string;
  isCaptain?: boolean;
}

export const players: Player[] = [
  // Mayor Masculino
  { name: "Bryan Solís", number: 1, position: "Portero", category: "mayor-masculino", age: 27, goals: 0, matches: 18, nationality: "🇨🇷" },
  { name: "Diego Mora", number: 4, position: "Defensa Central", category: "mayor-masculino", age: 24, goals: 3, matches: 19, nationality: "🇨🇷", isCaptain: true },
  { name: "Andrey Vargas", number: 8, position: "Mediocentro", category: "mayor-masculino", age: 26, goals: 5, matches: 20, nationality: "🇨🇷" },
  { name: "Kevin Navarro", number: 10, position: "Media Punta", category: "mayor-masculino", age: 23, goals: 12, matches: 18, nationality: "🇨🇷" },
  { name: "José Mario Sandoval", number: 9, position: "Delantero", category: "mayor-masculino", age: 25, goals: 17, matches: 20, nationality: "🇨🇷" },
  { name: "Esteban Chaves", number: 7, position: "Extremo Derecho", category: "mayor-masculino", age: 22, goals: 8, matches: 17, nationality: "🇨🇷" },

  // Mayor Femenino
  { name: "Valeria Méndez", number: 1, position: "Portera", category: "mayor-femenino", age: 25, goals: 0, matches: 16, nationality: "🇨🇷" },
  { name: "Carolina Picado", number: 5, position: "Defensa Central", category: "mayor-femenino", age: 28, goals: 2, matches: 17, nationality: "🇨🇷", isCaptain: true },
  { name: "Sofía Umaña", number: 8, position: "Mediocentro", category: "mayor-femenino", age: 24, goals: 6, matches: 17, nationality: "🇨🇷" },
  { name: "Mariana Viquez", number: 10, position: "Media Punta", category: "mayor-femenino", age: 22, goals: 14, matches: 16, nationality: "🇨🇷" },
  { name: "Gabriela Torres", number: 9, position: "Delantera", category: "mayor-femenino", age: 26, goals: 21, matches: 17, nationality: "🇨🇷" },
  { name: "Daniela Rojas", number: 11, position: "Extremo Izquierdo", category: "mayor-femenino", age: 23, goals: 9, matches: 15, nationality: "🇨🇷" },

  // Juvenil Masculino (Sub-17)
  { name: "Dilan Roberto Arce Arroyo", number: 1, position: "Portero", category: "juvenil-masculino", age: 17, goals: 0, matches: 15, nationality: "🇨🇷" },
  { name: "Gabriel Rodrigo Arias Gutiérrez", number: 2, position: "Lateral Derecho", category: "juvenil-masculino", age: 17, goals: 1, matches: 14, nationality: "🇨🇷" },
  { name: "Yerik Sibaja Mongr", number: 3, position: "Defensa Central", category: "juvenil-masculino", age: 16, goals: 2, matches: 15, nationality: "🇨🇷" },
  { name: "Aaron Yohel Brenes Carvajal", number: 4, position: "Defensa Central", category: "juvenil-masculino", age: 17, goals: 1, matches: 15, nationality: "🇨🇷", isCaptain: true },
  { name: "Paulo Nihat Agüero Morera", number: 5, position: "Lateral Izquierdo", category: "juvenil-masculino", age: 16, goals: 3, matches: 14, nationality: "🇨🇷" },
  { name: "Dorian Jesús Solano Zumbado", number: 6, position: "Mediocentro Defensivo", category: "juvenil-masculino", age: 17, goals: 2, matches: 15, nationality: "🇨🇷" },
  { name: "Josua Salazar González", number: 7, position: "Extremo Derecho", category: "juvenil-masculino", age: 16, goals: 5, matches: 14, nationality: "🇨🇷" },
  { name: "José Daniel Agüero Arias", number: 8, position: "Mediocentro", category: "juvenil-masculino", age: 17, goals: 4, matches: 15, nationality: "🇨🇷" },
  { name: "Edwin Andrés González Sandí", number: 9, position: "Delantero", category: "juvenil-masculino", age: 17, goals: 12, matches: 15, nationality: "🇨🇷" },
  { name: "Alexander Daniel Díaz García", number: 10, position: "Media Punta", category: "juvenil-masculino", age: 16, goals: 8, matches: 14, nationality: "🇨🇷" },
  { name: "Yeiron Fabricio Vargas Sibaja", number: 11, position: "Extremo Izquierdo", category: "juvenil-masculino", age: 17, goals: 6, matches: 15, nationality: "🇨🇷" },
  { name: "Dilan de los Ángeles Anchía Castillo", number: 12, position: "Portero Suplente", category: "juvenil-masculino", age: 16, goals: 0, matches: 8, nationality: "🇨🇷" },

  // Juvenil Femenino (Sub-17 mostradas)
  { name: "Camila Arroyo", number: 1, position: "Portera", category: "juvenil-femenino", age: 16, goals: 0, matches: 12, nationality: "🇨🇷" },
  { name: "Valentina Zúñiga", number: 4, position: "Defensa", category: "juvenil-femenino", age: 17, goals: 1, matches: 13, nationality: "🇨🇷", isCaptain: true },
  { name: "Isabella Quesada", number: 8, position: "Mediocentro", category: "juvenil-femenino", age: 16, goals: 5, matches: 13, nationality: "🇨🇷" },
  { name: "Renata Vargas", number: 10, position: "Media Punta", category: "juvenil-femenino", age: 17, goals: 13, matches: 13, nationality: "🇨🇷" },
  { name: "Antonia Calvo", number: 9, position: "Delantera", category: "juvenil-femenino", age: 17, goals: 19, matches: 13, nationality: "🇨🇷" },
  { name: "Lucía Madrigal", number: 7, position: "Extremo", category: "juvenil-femenino", age: 16, goals: 8, matches: 12, nationality: "🇨🇷" },
];

export interface Coach {
  name: string;
  role: string;
  category: string;
  initials: string;
  license?: string;
  summary?: string;
  teams?: { name: string; achievement?: string }[];
  seminars?: { name: string; instructor?: string }[];
}

export const coaches: Coach[] = [
  {
    name: "Adrián Andrés Garita González",
    role: "Director Técnico",
    category: "Mayor Masculino · Mayor Femenino · Juvenil Femenino",
    initials: "AG",
    license: "Licencia B",
    summary:
      "12 años dirigiendo diversos proyectos deportivos en Tercera División Región 8 Linafa, con experiencia en fútbol masculino, femenino y academia infantil. Encargado del proyecto GARRA FC y responsable deportivo de tres de las cuatro categorías del club.",
    teams: [
      { name: "Rodeo FC" },
      { name: "Piedras Negras FC" },
      { name: "Turrubares FC" },
      {
        name: "Garra FC",
        achievement: "Academia de fútbol infantil · Escuela Rogelio Fernández Guell",
      },
      {
        name: "Merengue FC",
        achievement: "Campeón 3° División 2019 · Linafa Región 8",
      },
      {
        name: "ADIMUP",
        achievement: "Campeón 3° División 2023 · Linafa Región 8",
      },
      {
        name: "ADIMUP Femenino",
        achievement: "Subcampeón 3° División · Torneo Unifut 2025",
      },
    ],
    seminars: [
      {
        name: "Valores en el deporte",
        instructor: "Jorge Yarce",
      },
    ],
  },
  {
    name: "Diego Barrantes Mora",
    role: "Director Técnico",
    category: "Juvenil Masculino",
    initials: "DB",
    license: "Licencia B",
    summary:
      "Encargado de la categoría Juvenil Masculino del club. Responsable de la formación, desarrollo y proyección de los jugadores Sub-13, Sub-15 y Sub-17, con foco en trabajo táctico, técnico y formativo.",
    teams: [],
    seminars: [],
  },
];

export interface Match {
  id: string;
  date: string;
  time: string;
  opponent: string;
  category: Category;
  venue: "local" | "visitante";
  stadium: string;
  status: "próximo" | "jugado";
  result?: { home: number; away: number };
  isLocal: boolean;
}

export const matches: Match[] = [
  // Próximos
  { id: "m1", date: "2026-08-30", time: "16:00", opponent: "AD Guanacasteca", category: "mayor-masculino", venue: "local", stadium: "Sede San Pablo de Turrubares", status: "próximo", isLocal: true },
  { id: "m2", date: "2026-09-03", time: "19:00", opponent: "Sporting FC Femenino", category: "mayor-femenino", venue: "visitante", stadium: "Polideportivo Aranjuez", status: "próximo", isLocal: false },
  { id: "m3", date: "2026-09-06", time: "15:00", opponent: "CS Uruguay Sub-17", category: "juvenil-masculino", venue: "local", stadium: "Sede San Pablo de Turrubares", status: "próximo", isLocal: true },
  { id: "m4", date: "2026-09-08", time: "10:00", opponent: "AD Carmelita Femenino", category: "juvenil-femenino", venue: "local", stadium: "Sede San Pablo de Turrubares", status: "próximo", isLocal: true },
  { id: "m5", date: "2026-09-13", time: "18:30", opponent: "Municipal Pérez Zeledón", category: "mayor-masculino", venue: "visitante", stadium: "Estadio Pérez Zeledón", status: "próximo", isLocal: false },

  // Jugados
  { id: "m6", date: "2026-08-22", time: "16:00", opponent: "AD Cariari", category: "mayor-masculino", venue: "local", stadium: "Sede San Pablo de Turrubares", status: "jugado", result: { home: 3, away: 1 }, isLocal: true },
  { id: "m7", date: "2026-08-18", time: "19:00", opponent: "CE Nofé Femenino", category: "mayor-femenino", venue: "visitante", stadium: "Estadio Nacional", status: "jugado", result: { home: 2, away: 2 }, isLocal: false },
  { id: "m8", date: "2026-08-15", time: "15:00", opponent: "LD Alajuelense Sub-17", category: "juvenil-masculino", venue: "local", stadium: "Sede San Pablo de Turrubares", status: "jugado", result: { home: 1, away: 0 }, isLocal: true },
  { id: "m9", date: "2026-08-11", time: "10:00", opponent: "Saprissa FF Sub-17", category: "juvenil-femenino", venue: "local", stadium: "Sede San Pablo de Turrubares", status: "jugado", result: { home: 4, away: 1 }, isLocal: true },
  { id: "m10", date: "2026-08-08", time: "18:30", opponent: "Municipal Grecia", category: "mayor-masculino", venue: "visitante", stadium: "Estadio Allen Riggioni", status: "jugado", result: { home: 2, away: 1 }, isLocal: false },
];

export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  emoji: string;
}

export const news: NewsItem[] = [
  {
    id: "n1",
    title: "GARRA FC presenta su plantilla para la temporada 2026",
    excerpt:
      "El club reveló los 26 jugadores del equipo mayor masculino, con refuerzos importantes en la zona media y ataque para competir por el ascenso a Primera División.",
    category: "Plantilla",
    date: "2026-08-20",
    readTime: "4 min",
    emoji: "⚽",
  },
  {
    id: "n2",
    title: "El equipo Mayor Femenino debutó con empate en el Nacional",
    excerpt:
      "Las guerreras GARRA sumaron un valioso punto ante CE Nofé en el Estadio Nacional en su estreno de la temporada 2026 de la Liga Femenina.",
    category: "Femenino",
    date: "2026-08-19",
    readTime: "3 min",
    emoji: "🏆",
  },
  {
    id: "n3",
    title: "Andrés Vindas goleador del Sub-17 con 16 tantos",
    excerpt:
      "La joven promesa de la cantera GARRA lidera la tabla de goleadores del torneo Sub-17 de LINAFA con 16 anotaciones en 15 partidos disputados.",
    category: "Juvenil",
    date: "2026-08-17",
    readTime: "2 min",
    emoji: "🥇",
  },
  {
    id: "n4",
    title: "Inscripciones abiertas para escuelas de fútbol GARRA",
    excerpt:
      "El club abre convocatoria para niños y niñas entre 5 y 12 años. La escuela tiene como objetivo formar futbolistas y personas con los valores GARRA: respeto, disciplina y entrega.",
    category: "Comunidad",
    date: "2026-08-12",
    readTime: "5 min",
    emoji: "📣",
  },
  {
    id: "n5",
    title: "GARRA FC firma convenio con academia local",
    excerpt:
      "El club fortalece su proyecto deportivo con un convenio para becas académicas a jugadores juveniles, garantizando formación deportiva y educativa integral.",
    category: "Institucional",
    date: "2026-08-05",
    readTime: "3 min",
    emoji: "🤝",
  },
  {
    id: "n6",
    title: "Pretemporada del Mayor Masculino en La Fortuna",
    excerpt:
      "El plantel realizó una intensa pretemporada en La Fortuna de San Carlos, combinando trabajo físico, táctico y de integración con miras al inicio del campeonato.",
    category: "Plantilla",
    date: "2026-07-28",
    readTime: "4 min",
    emoji: "🏔️",
  },
];

export const sponsors: string[] = [
  "Deportivos CR",
  "Gimnasio Tigre",
  "Pollo Mangión",
  "Lubricantes UNIÓN",
  "Bodega La Farola",
  "Constructora Sol Naciente",
  "Hotel Verde Luna",
  "Ferretería El Tornillo",
];

export interface StandingRow {
  position: number;
  team: string;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  goalsFor: number;
  goalsAgainst: number;
  points: number;
  isGarra?: boolean;
}

export const standings: StandingRow[] = [
  { position: 1, team: "AD Guanacasteca", played: 20, won: 13, drawn: 5, lost: 2, goalsFor: 38, goalsAgainst: 18, points: 44 },
  { position: 2, team: "GARRA FC", played: 20, won: 12, drawn: 6, lost: 2, goalsFor: 35, goalsAgainst: 17, points: 42, isGarra: true },
  { position: 3, team: "Municipal Grecia", played: 20, won: 11, drawn: 4, lost: 5, goalsFor: 31, goalsAgainst: 22, points: 37 },
  { position: 4, team: "AD Cariari", played: 20, won: 9, drawn: 7, lost: 4, goalsFor: 28, goalsAgainst: 21, points: 34 },
  { position: 5, team: "CS Uruguay", played: 20, won: 8, drawn: 6, lost: 6, goalsFor: 27, goalsAgainst: 24, points: 30 },
  { position: 6, team: "Municipal Pérez Zeledón", played: 20, won: 7, drawn: 5, lost: 8, goalsFor: 24, goalsAgainst: 26, points: 26 },
];

export const clubStats = [
  { label: "Año de fundación", value: "2024", suffix: "" },
  { label: "Categorías activas", value: "12", suffix: "" },
  { label: "Jugadores inscritos", value: "132", suffix: "" },
  { label: "Títulos juveniles", value: "3", suffix: "" },
];
