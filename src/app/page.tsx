import { SiteHeader } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { About } from "@/components/site/about";
import { Categories } from "@/components/site/categories";
import { Players } from "@/components/site/players";
import { Coaches } from "@/components/site/coaches";
import { Schedule } from "@/components/site/schedule";
import { News } from "@/components/site/news";
import { Sponsors } from "@/components/site/sponsors";
import { Contact } from "@/components/site/contact";
import { Footer } from "@/components/site/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <About />
        <Categories />
        <Players />
        <Coaches />
        <Schedule />
        <Sponsors />
        <News />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
