import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-selo925.jpeg";

const NAV = [
  { label: "Relógios", href: "#relogios" },
  { label: "Em Estoque", href: "#colecao" },
  { label: "Em Breve", href: "#colecao" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="#top" className="group flex items-center gap-3">
          <span className="inline-flex h-10 w-10 overflow-hidden rounded-full ring-1 ring-border">
            <img src={logo} alt="SELO 925" className="h-full w-full object-cover" />
          </span>
          <span className="flex items-baseline gap-2">
            <span className="font-display text-2xl tracking-[0.18em] text-ink">SELO</span>
            <span className="font-display text-2xl tracking-[0.18em] text-teal">925</span>
          </span>
        </a>
        <nav className="hidden items-center gap-9 md:flex">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="text-[13px] uppercase tracking-[0.18em] text-foreground/75 transition-colors hover:text-foreground">
              {n.label}
            </a>
          ))}
        </nav>
        <button onClick={() => setOpen((o) => !o)} aria-label="Menu" className="md:hidden">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="flex flex-col px-6 py-4">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="py-3 text-sm uppercase tracking-[0.18em] text-foreground/80">
                {n.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
