import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQS = [
  { q: "Como saber se a prata é verdadeira?", a: "Todas as nossas peças possuem o selo 925, que comprova que são feitas em prata esterlina legítima — composta por 92,5% de prata pura." },
  { q: "Vocês entregam em qual região?", a: "Em Goiânia entregamos no mesmo dia via motoboy. Para todo o Brasil enviamos via Correios, PAC, Jadlog e transportadoras." },
  { q: "Como cuidar das minhas joias de prata?", a: "Evite contato com perfumes, cremes e cloro. Guarde em local seco e, se necessário, limpe com flanela macia para manter o brilho." },
  { q: "Como fazer um pedido?", a: "Basta clicar no botão 'Comprar pelo WhatsApp' do produto desejado. Você será direcionado direto para uma conversa com o Hikellme com a mensagem pronta." },
  { q: "Quais formas de pagamento?", a: "Aceitamos cartão em até 4x sem juros, PIX e dinheiro." },
];

export function FAQ() {
  return (
    <section className="border-t border-border py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-12 text-center">
          <div className="eyebrow">Dúvidas frequentes</div>
          <h2 className="mt-3 font-display text-4xl text-ink md:text-5xl">Perguntas frequentes</h2>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {FAQS.map((f, i) => (
            <AccordionItem key={i} value={`i${i}`}>
              <AccordionTrigger className="text-left text-base font-normal text-ink">{f.q}</AccordionTrigger>
              <AccordionContent className="text-foreground/75">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
