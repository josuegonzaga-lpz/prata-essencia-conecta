import { buildWhatsappUrl, formatBRL } from "@/lib/whatsapp";
import type { Product } from "@/data/products";
import { MessageCircle } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";

export function ProductCard({ p }: { p: Product }) {
  const [open, setOpen] = useState(false);
  return (
    <>
    <article className="product-card group flex flex-col overflow-hidden rounded-sm border border-border bg-card shadow-card transition-all duration-500 hover:shadow-luxe">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Ver detalhes de ${p.nome}`}
        className="relative aspect-square overflow-hidden bg-secondary text-left"
      >
        <img src={p.imagem} alt={p.nome} loading="lazy" width={800} height={800} className="product-card-img h-full w-full object-cover" />
        {p.badge && (
          <span className="absolute left-3 top-3 rounded-sm bg-background/90 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-ink backdrop-blur">
            {p.badge === "lancamento" ? "Lançamento" : "Mais Vendido"}
          </span>
        )}
      </button>
      <div className="flex flex-1 flex-col p-5">
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="text-left font-display text-lg leading-tight text-ink transition-colors hover:text-teal"
        >
          {p.nome}
        </button>
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

    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-3xl overflow-hidden border-border bg-card p-0 sm:rounded-sm">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative aspect-square overflow-hidden bg-secondary">
            <img src={p.imagem} alt={p.nome} className="h-full w-full object-cover" />
            {p.badge && (
              <span className="absolute left-4 top-4 rounded-sm bg-background/90 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-ink backdrop-blur">
                {p.badge === "lancamento" ? "Lançamento" : "Mais Vendido"}
              </span>
            )}
          </div>
          <div className="flex flex-col justify-between gap-6 p-8">
            <div>
              <div className="eyebrow text-teal">SELO 925</div>
              <DialogTitle className="mt-3 font-display text-3xl leading-tight text-ink">
                {p.nome}
              </DialogTitle>
              <DialogDescription className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Joia em prata esterlina 925 — peça selecionada com acabamento premium.
                Entrega para todo o Brasil e atendimento personalizado pelo WhatsApp.
              </DialogDescription>
              <ul className="mt-5 space-y-2 text-sm text-foreground/80">
                <li>• Prata esterlina 925 com selo de garantia</li>
                <li>• Embalagem premium para presente</li>
                <li>• Garantia e suporte direto com a marca</li>
              </ul>
            </div>
            <div className="border-t border-border pt-5">
              <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">à vista no Pix</div>
              <div className="font-display text-4xl text-ink">{formatBRL(p.preco)}</div>
              <div className="text-[11px] text-muted-foreground">ou 4x sem juros no cartão</div>
              <a
                href={buildWhatsappUrl(p.nome, p.preco)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex h-12 w-full items-center justify-center gap-2 rounded-sm bg-primary text-[12px] uppercase tracking-[0.22em] text-primary-foreground transition-colors hover:bg-ink"
              >
                <MessageCircle className="h-4 w-4" />
                Comprar pelo WhatsApp
              </a>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
    </>
  );
}
