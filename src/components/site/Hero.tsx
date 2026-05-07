import { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import hero from "@/assets/hero-jewelry.jpg";
import bannerLancamentos from "@/assets/banner-hero.png";
import bannerBestsellers from "@/assets/banner-bestsellers.jpg";
import bannerPrata from "@/assets/banner-prata925.jpg";
import { buildWhatsappGeneric } from "@/lib/whatsapp";
import { ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";

type Slide = {
  img: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  message: string;
};

const SLIDES: Slide[] = [
  {
    img: bannerLancamentos,
    eyebrow: "Lançamentos",
    title: "Novas joias acabaram de chegar",
    subtitle: "10% OFF na primeira compra",
    message: "Olá! Quero conhecer os lançamentos da SELO 925.",
  },
  {
    img: bannerBestsellers,
    eyebrow: "Mais Vendidos",
    title: "As preferidas das nossas clientes",
    subtitle: "Peças que não saem de moda",
    message: "Olá! Quero ver os mais vendidos da SELO 925.",
  },
  {
    img: bannerPrata,
    eyebrow: "Prata 925 Legítima",
    title: "Esterlina, com selo de garantia",
    subtitle: "Brilho que permanece",
    message: "Olá! Quero saber mais sobre as peças em Prata 925.",
  },
];

export function Hero() {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true });
  const [selected, setSelected] = useState(0);
  const cta = buildWhatsappGeneric("Olá! Vim do site da SELO 925 e quero conhecer as joias.");

  const scrollTo = useCallback((i: number) => embla?.scrollTo(i), [embla]);

  useEffect(() => {
    if (!embla) return;
    const onSelect = () => setSelected(embla.selectedScrollSnap());
    embla.on("select", onSelect);
    onSelect();
    const id = setInterval(() => embla.scrollNext(), 5500);
    return () => {
      clearInterval(id);
      embla.off("select", onSelect);
    };
  }, [embla]);

  return (
    <section id="top" className="relative overflow-hidden">
      {/* Carrossel topo */}
      <div className="relative">
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex">
            {SLIDES.map((s, i) => (
              <div key={s.eyebrow} className="relative min-w-0 flex-[0_0_100%]">
                <img
                  src={s.img}
                  alt={`${s.eyebrow} — ${s.title}`}
                  width={1600}
                  height={900}
                  loading={i === 0 ? "eager" : "lazy"}
                  fetchPriority={i === 0 ? "high" : "auto"}
                  decoding="async"
                  className="h-[44vw] max-h-[560px] min-h-[260px] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-ink/60 via-ink/20 to-transparent md:from-ink/55" />
                <div className="absolute inset-0 flex items-center">
                  <div className="mx-auto flex w-full max-w-7xl px-6">
                    <div className="max-w-xl text-primary-foreground">
                      <span className="eyebrow text-silver">{s.eyebrow}</span>
                      <h2 className="mt-3 font-display text-3xl leading-tight md:text-5xl">{s.title}</h2>
                      <p className="mt-3 text-sm text-primary-foreground/85 md:text-base">{s.subtitle}</p>
                      <div className="mt-6 flex flex-wrap gap-3">
                        <a
                          href="#colecao"
                          onClick={() => {
                            // abre WhatsApp em nova aba quando clicar em "Ver coleção"
                            window.open(buildWhatsappGeneric(s.message), "_blank", "noopener,noreferrer");
                          }}
                          className="inline-flex h-11 items-center gap-2 rounded-sm bg-background px-6 text-[12px] uppercase tracking-[0.22em] text-ink shadow-luxe transition hover:bg-background/90"
                        >
                          Ver coleção
                        </a>
                        <a
                          href={buildWhatsappGeneric(s.message)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex h-11 items-center gap-2 rounded-sm border border-primary-foreground/40 px-6 text-[12px] uppercase tracking-[0.22em] text-primary-foreground hover:bg-primary-foreground hover:text-ink"
                        >
                          <MessageCircle className="h-4 w-4" /> Comprar no WhatsApp
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Controles */}
        <button
          aria-label="Anterior"
          onClick={() => embla?.scrollPrev()}
          className="absolute left-3 top-1/2 hidden -translate-y-1/2 rounded-full bg-background/80 p-2 text-ink shadow-card backdrop-blur transition hover:bg-background md:block"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          aria-label="Próximo"
          onClick={() => embla?.scrollNext()}
          className="absolute right-3 top-1/2 hidden -translate-y-1/2 rounded-full bg-background/80 p-2 text-ink shadow-card backdrop-blur transition hover:bg-background md:block"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              aria-label={`Slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${selected === i ? "w-8 bg-background" : "w-3 bg-background/50"}`}
            />
          ))}
        </div>
      </div>

      {/* Bloco principal */}
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
            width={1200}
            height={1500}
            loading="lazy"
            decoding="async"
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
