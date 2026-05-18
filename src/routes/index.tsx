import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Categories } from "@/components/site/Categories";
import { ProductGrid } from "@/components/site/ProductGrid";
import { Highlights } from "@/components/site/Highlights";
import { About } from "@/components/site/About";
import { Info } from "@/components/site/Info";
import { FAQ } from "@/components/site/FAQ";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { WhatsappFab } from "@/components/site/WhatsappFab";
import { Announcement } from "@/components/site/Announcement";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SELO 925 — Joias em Prata 925 | Goiânia" },
      { name: "description", content: "Joias em prata esterlina 925 com design refinado. Anéis, correntes, brincos e pulseiras. Atendimento direto via WhatsApp em Goiânia." },
      { property: "og:title", content: "SELO 925 — Elegância que permanece" },
      { property: "og:description", content: "Coleção de joias em prata 925. Compre direto pelo WhatsApp." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Announcement />
      <Header />
      <main>
        <Hero />
        <Highlights />
        <Categories />
        <ProductGrid />
        <About />
        <Info />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsappFab />
    </div>
  );
}
