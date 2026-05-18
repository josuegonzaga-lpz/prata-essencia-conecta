import { useMemo, useState } from "react";
import { PRODUCTS } from "@/data/products";
import { ProductCard } from "./ProductCard";

type Tab = "estoque" | "em_breve";

export function ProductGrid() {
  const [tab, setTab] = useState<Tab>("estoque");

  const items = useMemo(
    () => PRODUCTS.filter((p) => p.categoria === tab),
    [tab],
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

        <div id={tab === "estoque" ? "estoque" : "em-breve"} className="mb-10 flex justify-center">
          <div className="inline-flex rounded-sm border border-border bg-card p-1">
            <Chip active={tab === "estoque"} onClick={() => setTab("estoque")}>Em Estoque</Chip>
            <Chip active={tab === "em_breve"} onClick={() => setTab("em_breve")}>Em Breve</Chip>
          </div>
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

function Chip({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-sm px-6 py-2.5 text-[11px] uppercase tracking-[0.22em] transition-all ${
        active
          ? "bg-ink text-background"
          : "bg-transparent text-foreground/70 hover:text-foreground"
      }`}
    >
      {children}
    </button>
  );
}
