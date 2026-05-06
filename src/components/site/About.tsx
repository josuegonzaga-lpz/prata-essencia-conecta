export function About() {
  return (
    <section id="sobre" className="border-t border-border bg-gradient-ink py-28 text-primary-foreground">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <div className="eyebrow text-silver">Sobre a marca</div>
        <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">A essência da SELO 925</h2>
        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-primary-foreground/85">
          A SELO 925 traz <em className="not-italic text-silver">elegância sem tirar sua essência</em>, oferecendo peças em prata legítima com design refinado. Mais do que acessórios, entregamos propósito — cada detalhe carrega um significado.
        </p>
        <p className="mx-auto mt-4 max-w-2xl text-base text-primary-foreground/70">
          Nossa missão é conectar pessoas, contar histórias e expandir o Reino através daquilo que fazemos.
        </p>
        <div className="mx-auto mt-12 h-px w-24 bg-silver/40" />
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {[
            { t: "Prata 925", d: "Esterlina legítima em todas as peças." },
            { t: "Design refinado", d: "Curadoria com identidade própria." },
            { t: "Atendimento direto", d: "Fale com o Hikellme pelo WhatsApp." },
          ].map((b) => (
            <div key={b.t} className="rounded-sm border border-silver/15 p-6">
              <div className="font-display text-xl text-silver">{b.t}</div>
              <p className="mt-2 text-sm text-primary-foreground/70">{b.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
