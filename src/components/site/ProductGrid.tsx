import { useMemo, useState } from "react";
import { CATEGORIES, PRODUCTS, type Category } from "@/data/products";
import { ProductCard } from "./ProductCard";

export function ProductGrid() {
  const [filter, setFilter] = useState<Category | "all">("all");
  const items = useMemo(
    () => (filter === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.categoria === filter)),
    [filter],
  );
  return (
    <section id="colecao" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <div className="eyebrow">Nossa Coleção</div>
          <h2 className="mt-3 font-display text-4xl text-ink md:text-5xl">Peças selecionadas</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Cada joia em prata esterlina 925 — escolhida com cuidado para acompanhar quem você é.
          </p>
        </div>

        <div className="mb-10 flex flex-wrap justify-center gap-2">
          <FilterChip active={filter === "all"} onClick={() => setFilter("all")}>Todos</FilterChip>
          {CATEGORIES.map((c) => (
            <FilterChip key={c.slug} active={filter === c.slug} onClick={() => setFilter(c.slug)}>
              {c.label}
            </FilterChip>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {items.map((p) => <ProductCard key={p.id} p={p} />)}
        </div>
        {items.length === 0 && (
          <p className="py-16 text-center text-muted-foreground">Em breve novas peças nesta categoria.</p>
        )}
      </div>
    </section>
  );
}

function FilterChip({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full border px-4 py-2 text-[11px] uppercase tracking-[0.18em] transition-all ${
        active
          ? "border-foreground bg-foreground text-background"
          : "border-border bg-card text-foreground/70 hover:border-foreground/40 hover:text-foreground"
      }`}
    >
      {children}
    </button>
  );
}
