import { CATEGORIES } from "@/data/products";

export function Categories() {
  return (
    <section className="border-t border-border bg-secondary/40 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <div className="eyebrow">Explore</div>
          <h2 className="mt-3 font-display text-4xl text-ink md:text-5xl">Encontre a joia perfeita</h2>
        </div>
        <div className="grid grid-cols-3 gap-x-4 gap-y-8 md:grid-cols-6">
          {CATEGORIES.slice(0, 6).map((c) => (
            <a key={c.slug} href="#colecao" className="group flex flex-col items-center gap-3">
              <div className="aspect-square w-full overflow-hidden rounded-full border border-border bg-card shadow-card">
                <img src={c.image} alt={c.label} loading="lazy" width={400} height={400} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <span className="text-center text-[11px] uppercase tracking-[0.2em] text-foreground/80">{c.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
