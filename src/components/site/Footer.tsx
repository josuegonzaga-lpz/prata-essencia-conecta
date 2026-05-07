import { Instagram } from "lucide-react";
import { INSTAGRAM_URL } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
        <div>
          <div className="font-display text-2xl tracking-[0.18em] text-ink">SELO 925</div>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Joias em prata 925 com design refinado. Elegância e sofisticação para todos os momentos.
          </p>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram @selo.925" className="mt-6 inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground/70 transition-colors hover:border-foreground hover:text-foreground">
            <Instagram className="h-4 w-4" />
          </a>
        </div>
        <FooterCol title="Institucional" items={[["Quem Somos","#sobre"],["FAQ","#"],["Fale Conosco","#contato"]]} />
        <FooterCol title="Ajuda & Suporte" items={[["Entrega em Goiânia","#"],["Como Pedir","#"],["Como Cuidar","#"],["Fale Conosco","#contato"]]} />
        <FooterCol title="Categorias" items={[["Anéis","#colecao"],["Correntes","#colecao"],["Brincos","#colecao"],["Pulseiras","#colecao"],["Pingentes","#colecao"]]} />
      </div>
      <div className="border-t border-border py-6 text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">
        © {new Date().getFullYear()} SELO 925 — Joias em Prata
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: [string,string][] }) {
  return (
    <div>
      <div className="text-xs uppercase tracking-[0.22em] text-ink">{title}</div>
      <ul className="mt-5 space-y-3 text-sm">
        {items.map(([l,h]) => <li key={l}><a href={h} className="text-muted-foreground hover:text-foreground">{l}</a></li>)}
      </ul>
    </div>
  );
}
