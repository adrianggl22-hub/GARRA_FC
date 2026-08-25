import type { Metadata } from "next";
import { Geist, Geist_Mono, Oswald } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "GARRA FC | Club de Fútbol de Costa Rica",
  description:
    "GARRA FC - Club de fútbol costarricense con categorías juveniles y mayores, femenino y masculino. Garra, corazón y fútbol en cada partido.",
  keywords: [
    "GARRA FC",
    "fútbol Costa Rica",
    "club de fútbol",
    "fútbol juvenil",
    "fútbol femenino",
    "fútbol masculino",
    "categorías mayores",
  ],
  authors: [{ name: "GARRA FC" }],
  icons: {
    icon: "/garra-fc-logo.png",
  },
  openGraph: {
    title: "GARRA FC | Club de Fútbol de Costa Rica",
    description:
      "Garra, corazón y fútbol. Categorías juveniles y mayores, femenino y masculino.",
    siteName: "GARRA FC",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GARRA FC | Club de Fútbol de Costa Rica",
    description: "Garra, corazón y fútbol en Costa Rica.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${oswald.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
