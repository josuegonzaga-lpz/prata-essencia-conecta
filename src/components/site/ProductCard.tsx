import { buildWhatsappUrl, formatBRL } from "@/lib/whatsapp";
import type { Product } from "@/data/products";
import { MessageCircle } from "lucide-react";

export function ProductCard({ p }: { p: Product }) {
  return (
    <article className="product-card group flex flex-col overflow-hidden rounded-sm border border-border bg-card shadow-card transition-all duration-500 hover:shadow-luxe">
      <div className="relative aspect-square overflow-hidden bg-secondary">
        <img src={p.imagem} alt={p.nome} loading="lazy" width={800} height={800} className="product-card-img h-full w-full object-cover" />
        {p.badge && (
          <span className="absolute left-3 top-3 rounded-sm bg-background/90 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-ink backdrop-blur">
            {p.badge === "lancamento" ? "Lançamento" : "Mais Vendido"}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg leading-tight text-ink">{p.nome}</h3>
        <div className="mt-2 text-xs uppercase tracking-[0.18em] text-silver-dark">Prata 925</div>
        <div className="mt-4 flex items-end justify-between">
          <div>
            <div className="text-[11px] text-muted-foreground">à vista no Pix</div>
            <div className="font-display text-2xl text-ink">{formatBRL(p.preco)}</div>
            <div className="text-[11px] text-muted-foreground">ou 4x sem juros</div>
          </div>
        </div>
        <a
          href={buildWhatsappUrl(p.nome, p.preco)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex h-11 items-center justify-center gap-2 rounded-sm bg-primary text-[12px] uppercase tracking-[0.22em] text-primary-foreground transition-colors hover:bg-ink"
        >
          <MessageCircle className="h-4 w-4" />
          Comprar pelo WhatsApp
        </a>
      </div>
    </article>
  );
}
