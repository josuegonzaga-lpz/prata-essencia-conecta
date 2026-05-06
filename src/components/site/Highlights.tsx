import { PRODUCTS } from "@/data/products";
import { ProductCard } from "./ProductCard";

export function Highlights() {
  const best = PRODUCTS.filter((p) => p.badge === "mais-vendido").slice(0, 4);
  const launches = PRODUCTS.filter((p) => p.badge === "lancamento").slice(0, 4);
  return (
    <>
      <section id="mais-vendidos" className="border-t border-border bg-secondary/40 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <div className="eyebrow">Favoritos da casa</div>
              <h2 className="mt-2 font-display text-3xl text-ink md:text-4xl">Mais vendidos</h2>
            </div>
            <a href="#colecao" className="hidden text-xs uppercase tracking-[0.22em] text-foreground/70 hover:text-foreground md:inline">Ver tudo →</a>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {best.map((p) => <ProductCard key={p.id} p={p} />)}
          </div>
        </div>
      </section>
      <section id="lancamentos" className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <div className="eyebrow">Recém-chegadas</div>
              <h2 className="mt-2 font-display text-3xl text-ink md:text-4xl">Lançamentos</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {launches.map((p) => <ProductCard key={p.id} p={p} />)}
          </div>
        </div>
      </section>
    </>
  );
}
