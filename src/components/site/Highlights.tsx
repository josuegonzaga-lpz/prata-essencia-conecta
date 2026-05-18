import { PRODUCTS } from "@/data/products";
import { ProductCard } from "./ProductCard";

export function Highlights() {
  const watches = PRODUCTS.filter((p) => p.categoria === "relogios");
  return (
    <section id="relogios" className="border-t border-border bg-gradient-to-b from-secondary/50 to-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <div className="eyebrow text-teal">Coleção Saint-Germain</div>
            <h2 className="mt-2 font-display text-3xl text-ink md:text-4xl">Relógios Saint-Germain</h2>
            <p className="mt-2 max-w-md text-sm text-muted-foreground">
              Peças exclusivas selecionadas pela SELO 925. Estoque limitado.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {watches.map((p) => <ProductCard key={p.id} p={p} />)}
        </div>
      </div>
    </section>
  );
}
