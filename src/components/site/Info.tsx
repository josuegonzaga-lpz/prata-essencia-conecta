import { Truck, MapPin, CreditCard, Banknote } from "lucide-react";

export function Info() {
  return (
    <section className="border-t border-border py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div>
            <div className="eyebrow">Entregas</div>
            <h3 className="mt-3 font-display text-3xl text-ink">Recebimento</h3>
            <ul className="mt-6 space-y-4 text-foreground/80">
              <li className="flex gap-3"><MapPin className="mt-1 h-4 w-4 text-silver-dark" /><span><strong className="text-ink">Goiânia · GO</strong> — entrega no mesmo dia via motoboy.</span></li>
              <li className="flex gap-3"><Truck className="mt-1 h-4 w-4 text-silver-dark" /><span><strong className="text-ink">Brasil</strong> — Correios, PAC, Jadlog e transportadoras.</span></li>
            </ul>
          </div>
          <div>
            <div className="eyebrow">Pagamento</div>
            <h3 className="mt-3 font-display text-3xl text-ink">Formas que aceitamos</h3>
            <ul className="mt-6 space-y-4 text-foreground/80">
              <li className="flex gap-3"><CreditCard className="mt-1 h-4 w-4 text-silver-dark" /><span>Cartão em até <strong className="text-ink">4x sem juros</strong>.</span></li>
              <li className="flex gap-3"><Banknote className="mt-1 h-4 w-4 text-silver-dark" /><span>PIX e dinheiro.</span></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
