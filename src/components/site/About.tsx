import about from "@/assets/about-brand.jpg";
import { buildWhatsappGeneric } from "@/lib/whatsapp";
import { Sparkles, Cross, Gem } from "lucide-react";

export function About() {
  const cta = buildWhatsappGeneric("Olá! Quero conhecer mais sobre a SELO 925.");
  return (
    <section id="sobre" className="relative overflow-hidden border-t border-border bg-gradient-ink py-24 text-primary-foreground md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2 md:gap-20">
        {/* Imagem */}
        <div className="relative order-2 md:order-1">
          <div className="absolute -inset-4 -z-10 bg-gradient-teal opacity-60 blur-3xl" />
          <img
            src={about}
            alt="Joias SELO 925 em uso — anéis e pulseiras em prata legítima"
            width={1080}
            height={1500}
            loading="lazy"
            decoding="async"
            className="aspect-[4/5] w-full rounded-sm object-cover shadow-luxe"
          />
          <div className="absolute -right-4 -top-4 hidden rounded-sm border border-silver/30 bg-ink/80 px-5 py-3 backdrop-blur md:block">
            <div className="eyebrow text-silver">Desde a primeira peça</div>
            <div className="font-display text-lg text-primary-foreground">Feita com propósito</div>
          </div>
        </div>

        {/* Texto */}
        <div className="order-1 md:order-2">
          <div className="eyebrow text-silver">Sobre a marca</div>
          <h2 className="mt-4 font-display text-4xl leading-tight md:text-6xl">
            A essência da <em className="not-italic text-silver">SELO 925</em>
          </h2>
          <p className="mt-8 max-w-lg text-lg leading-relaxed text-primary-foreground/85">
            Mais que joias, criamos peças que <em className="not-italic text-silver">permanecem</em> — em prata 925 legítima, com design refinado para quem se veste com estilo e intenção.
          </p>

          {/* Destaque sutil — propósito cristão */}
          <div className="mt-8 flex items-start gap-4 rounded-sm border-l-2 border-silver/50 bg-primary-foreground/5 p-5">
            <Cross className="mt-1 h-5 w-5 flex-shrink-0 text-silver" />
            <p className="text-sm leading-relaxed text-primary-foreground/85">
              <span className="font-display text-base text-silver">Elegância sem tirar sua essência.</span>
              <br />
              Cada peça carrega um propósito — somos uma marca com fé, que conecta pessoas, conta histórias e contribui para a expansão do <em className="not-italic">Reino</em>.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              { i: Gem, t: "Prata 925", d: "Esterlina legítima." },
              { i: Sparkles, t: "Design refinado", d: "Curadoria autoral." },
              { i: Cross, t: "Propósito", d: "Feita com fé." },
            ].map(({ i: Icon, t, d }) => (
              <div key={t} className="rounded-sm border border-silver/15 p-4">
                <Icon className="h-4 w-4 text-silver" />
                <div className="mt-3 font-display text-lg text-silver">{t}</div>
                <p className="mt-1 text-xs text-primary-foreground/70">{d}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <a
              href={cta}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-sm bg-background px-8 text-[12px] uppercase tracking-[0.22em] text-ink shadow-luxe transition hover:bg-background/90"
            >
              Conhecer a coleção
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
