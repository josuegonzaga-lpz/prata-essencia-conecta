import { buildWhatsappUrl, formatBRL, type PaymentMethod } from "@/lib/whatsapp";
import type { Product } from "@/data/products";
import { MessageCircle, QrCode, CreditCard, FileText, Lock } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";

function PaymentIcons({ size = "sm" }: { size?: "sm" | "md" }) {
  const cls = size === "sm" ? "h-3.5 w-3.5" : "h-4 w-4";
  const txt = size === "sm" ? "text-[10px]" : "text-[11px]";
  return (
    <div className={`flex items-center gap-3 ${txt} uppercase tracking-[0.18em] text-silver-dark`}>
      <span className="inline-flex items-center gap-1"><QrCode className={cls} /> Pix</span>
      <span className="inline-flex items-center gap-1"><CreditCard className={cls} /> Cartão</span>
      <span className="inline-flex items-center gap-1"><FileText className={cls} /> Boleto</span>
    </div>
  );
}

function StatusBadge({ p }: { p: Product }) {
  if (p.status === "em_breve")
    return (
      <span className="absolute left-3 top-3 rounded-sm border border-white/40 bg-ink/70 px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-background backdrop-blur-md">
        Em Breve
      </span>
    );
  if (p.status === "esgotado")
    return (
      <span className="absolute left-3 top-3 rounded-sm bg-destructive/90 px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-destructive-foreground backdrop-blur">
        Esgotado
      </span>
    );
  if (p.estoque && p.estoque <= 3)
    return (
      <span className="absolute left-3 top-3 rounded-sm bg-background/90 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-ink backdrop-blur">
        Últimas {p.estoque} unidades
      </span>
    );
  return null;
}

export function ProductCard({ p }: { p: Product }) {
  const [open, setOpen] = useState(false);
  const comingSoon = p.status === "em_breve";
  const soldOut = p.status === "esgotado";
  const available = p.status === "disponivel";

  return (
    <>
      <article
        className={`product-card group flex flex-col overflow-hidden rounded-sm border border-border bg-card shadow-card transition-all duration-500 ${
          comingSoon ? "opacity-80" : "hover:shadow-luxe"
        }`}
      >
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label={`Ver detalhes de ${p.nome}`}
          className="relative aspect-square overflow-hidden bg-secondary text-left"
        >
          <img
            src={p.imagem}
            alt={p.nome}
            loading="lazy"
            width={800}
            height={800}
            className={`product-card-img h-full w-full object-cover ${comingSoon ? "opacity-60 saturate-50" : ""}`}
          />
          <StatusBadge p={p} />
          {p.destaque && (
            <span className="absolute right-3 top-3 rounded-sm bg-ink/85 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-background backdrop-blur">
              {p.destaque}
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
          <div className="mt-1 flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-silver-dark">
            <span>Prata 925</span>
            {p.codigo && <><span>•</span><span>cód. {p.codigo}</span></>}
          </div>

          <div className="mt-4 flex items-end justify-between">
            <div>
              {available || soldOut ? (
                <>
                  <div className="text-[11px] text-muted-foreground">à vista no Pix</div>
                  <div className="font-display text-2xl text-ink">{formatBRL(p.preco)}</div>
                  <div className="text-[11px] text-muted-foreground">ou 4x sem juros</div>
                </>
              ) : (
                <div className="font-display text-base italic text-silver-dark">Em breve disponível</div>
              )}
            </div>
          </div>

          {available && (
            <>
              <div className="mt-4">
                <PaymentIcons />
              </div>
              <a
                href={buildWhatsappUrl(p.nome, p.preco, "pix", p.codigo)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex h-11 items-center justify-center gap-2 rounded-sm bg-primary text-[12px] uppercase tracking-[0.22em] text-primary-foreground transition-colors hover:bg-ink"
              >
                <MessageCircle className="h-4 w-4" />
                Comprar agora
              </a>
            </>
          )}

          {soldOut && (
            <button
              type="button"
              disabled
              className="mt-5 inline-flex h-11 cursor-not-allowed items-center justify-center gap-2 rounded-sm border border-border bg-muted text-[12px] uppercase tracking-[0.22em] text-muted-foreground"
            >
              <Lock className="h-4 w-4" /> Esgotado
            </button>
          )}

          {comingSoon && (
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="mt-5 inline-flex h-11 items-center justify-center gap-2 rounded-sm border border-ink/30 bg-transparent text-[12px] uppercase tracking-[0.22em] text-ink/70 transition-colors hover:border-ink hover:text-ink"
            >
              Avise-me quando chegar
            </button>
          )}
        </div>
      </article>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-3xl overflow-hidden border-border bg-card p-0 sm:rounded-sm">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative aspect-square overflow-hidden bg-secondary">
              <img
                src={p.imagem}
                alt={p.nome}
                className={`h-full w-full object-cover ${comingSoon ? "opacity-70 saturate-50" : ""}`}
              />
              <StatusBadge p={p} />
              {p.destaque && (
                <span className="absolute right-4 top-4 rounded-sm bg-ink/85 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-background backdrop-blur">
                  {p.destaque}
                </span>
              )}
            </div>
            <div className="flex flex-col justify-between gap-6 p-8">
              <div>
                <div className="eyebrow text-teal">{p.destaque ?? "SELO 925"}</div>
                <DialogTitle className="mt-3 font-display text-3xl leading-tight text-ink">
                  {p.nome}
                </DialogTitle>
                {p.codigo && (
                  <div className="mt-1 text-[11px] uppercase tracking-[0.22em] text-silver-dark">
                    Código: {p.codigo}
                  </div>
                )}
                <DialogDescription className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {p.destaque === "Saint-Germain"
                    ? "Relógio Saint-Germain selecionado pela SELO 925 — design refinado e mecanismo confiável, com atendimento personalizado e entrega para todo o Brasil."
                    : "Joia em prata esterlina 925 — peça selecionada com acabamento premium. Entrega para todo o Brasil e atendimento personalizado pelo WhatsApp."}
                </DialogDescription>
                <ul className="mt-5 space-y-2 text-sm text-foreground/80">
                  {p.destaque === "Saint-Germain" ? (
                    <>
                      <li>• Relógio Saint-Germain original</li>
                      <li>• Garantia da marca</li>
                      <li>• Embalagem premium para presente</li>
                    </>
                  ) : (
                    <>
                      <li>• Prata esterlina 925 com selo de garantia</li>
                      <li>• Embalagem premium para presente</li>
                      <li>• Garantia e suporte direto com a marca</li>
                    </>
                  )}
                  {p.estoque && available && <li>• Apenas {p.estoque} unidade(s) em estoque</li>}
                </ul>
              </div>

              {available && (
                <div className="border-t border-border pt-5">
                  <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">à vista no Pix</div>
                  <div className="font-display text-4xl text-ink">{formatBRL(p.preco)}</div>
                  <div className="text-[11px] text-muted-foreground">ou 4x sem juros no cartão</div>

                  <div className="mt-4">
                    <div className="mb-2 text-[10px] uppercase tracking-[0.22em] text-silver-dark">
                      Formas de pagamento aceitas
                    </div>
                    <PaymentIcons size="md" />
                  </div>

                  <div className="mt-5 grid grid-cols-3 gap-2">
                    {(["pix", "cartao", "boleto"] as PaymentMethod[]).map((m) => (
                      <a
                        key={m}
                        href={buildWhatsappUrl(p.nome, p.preco, m, p.codigo)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-10 items-center justify-center rounded-sm border border-border bg-background text-[11px] uppercase tracking-[0.18em] text-ink transition-colors hover:border-ink hover:bg-ink hover:text-background"
                      >
                        {m === "pix" ? "Pix" : m === "cartao" ? "Cartão" : "Boleto"}
                      </a>
                    ))}
                  </div>

                  <a
                    href={buildWhatsappUrl(p.nome, p.preco, "pix", p.codigo)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex h-12 w-full items-center justify-center gap-2 rounded-sm bg-primary text-[12px] uppercase tracking-[0.22em] text-primary-foreground transition-colors hover:bg-ink"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Comprar agora pelo WhatsApp
                  </a>
                </div>
              )}

              {soldOut && (
                <div className="border-t border-border pt-5">
                  <div className="font-display text-2xl text-ink">{formatBRL(p.preco)}</div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Esta peça está temporariamente esgotada. Fale conosco para entrar na lista de espera.
                  </p>
                  <a
                    href={buildWhatsappUrl(`Lista de espera — ${p.nome}`, p.preco, undefined, p.codigo)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex h-11 w-full items-center justify-center gap-2 rounded-sm border border-ink bg-transparent text-[12px] uppercase tracking-[0.22em] text-ink hover:bg-ink hover:text-background"
                  >
                    Entrar na lista de espera
                  </a>
                </div>
              )}

              {comingSoon && (
                <div className="border-t border-border pt-5">
                  <p className="text-sm text-muted-foreground">
                    Esta peça chega em breve à SELO 925. Avise-nos pelo WhatsApp e reserve a sua antes de todos.
                  </p>
                  <a
                    href={buildWhatsappUrl(`Quero reservar (Em breve) — ${p.nome}`, 0, undefined, p.codigo)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex h-11 w-full items-center justify-center gap-2 rounded-sm border border-ink bg-transparent text-[12px] uppercase tracking-[0.22em] text-ink hover:bg-ink hover:text-background"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Quero ser avisado
                  </a>
                </div>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
