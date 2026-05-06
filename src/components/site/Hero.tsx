import hero from "@/assets/hero-jewelry.jpg";
import banner from "@/assets/banner-hero.png";
import { buildWhatsappGeneric } from "@/lib/whatsapp";

export function Hero() {
  const cta = buildWhatsappGeneric("Olá Hikellme! Vim do site da SELO 925 e quero conhecer as joias.");
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Brand banner — primeira impressão */}
      <a href="#colecao" className="block group">
        <picture>
          <img
            src={banner}
            alt="SELO 925 — Novidades, Joias elegantes. 10% OFF na primeira compra."
            className="h-auto w-full object-cover"
            width={1580}
            height={450}
            loading="eager"
          />
        </picture>
      </a>

      <div className="mx-auto grid max-w-7xl gap-12 px-6 pb-20 pt-16 md:grid-cols-2 md:gap-16 md:pt-24">
        <div className="flex flex-col justify-center">
          <span className="eyebrow mb-6 text-teal">Joias em prata 925 — Goiânia</span>
          <h1 className="font-display text-balance text-5xl leading-[1.05] text-ink md:text-7xl">
            Elegância
            <br />
            que <em className="not-italic text-teal">permanece</em>
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
            Peças em prata esterlina 925 com design refinado. Acessórios que carregam significado — para quem se veste com estilo e propósito.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#colecao" className="inline-flex h-12 items-center justify-center rounded-sm bg-primary px-8 text-sm uppercase tracking-[0.2em] text-primary-foreground transition-all hover:bg-primary/90">
              Ver Coleção
            </a>
            <a href={cta} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center justify-center rounded-sm border border-foreground/20 px-8 text-sm uppercase tracking-[0.2em] text-foreground transition-all hover:border-foreground hover:bg-foreground hover:text-background">
              Falar no WhatsApp
            </a>
          </div>
          <div className="mt-12 flex items-center gap-10 text-xs uppercase tracking-[0.22em] text-silver-dark">
            <span>Prata 925</span>
            <span className="h-3 w-px bg-border" />
            <span>Design Exclusivo</span>
            <span className="h-3 w-px bg-border" />
            <span>Goiânia · GO</span>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 -z-10 bg-gradient-silver opacity-30 blur-3xl" />
          <img
            src={hero}
            alt="Coleção de joias em prata 925 SELO 925"
            width={1600}
            height={1200}
            className="aspect-[4/5] w-full rounded-sm object-cover shadow-luxe"
          />
          <div className="absolute -bottom-6 -left-6 hidden rounded-sm border border-border bg-card px-6 py-4 shadow-card md:block">
            <div className="eyebrow">Coleção</div>
            <div className="font-display text-xl text-ink">Outono · Inverno</div>
          </div>
        </div>
      </div>
    </section>
  );
}
