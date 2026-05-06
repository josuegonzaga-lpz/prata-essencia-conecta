import { buildWhatsappGeneric, INSTAGRAM_URL, INSTAGRAM_HANDLE } from "@/lib/whatsapp";
import { Phone, Clock, MapPin, MessageCircle, Instagram } from "lucide-react";

export function Contact() {
  const url = buildWhatsappGeneric("Olá Hikellme! Vim do site da SELO 925.");
  return (
    <section id="contato" className="border-t border-border bg-gradient-ink py-24 text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2">
        <div>
          <div className="eyebrow text-silver">Fale conosco</div>
          <h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl">Atendimento direto</h2>
          <p className="mt-6 max-w-md text-primary-foreground/80">
            Fale diretamente com o <strong className="text-silver">Hikellme</strong>, dono da SELO 925. Tire dúvidas, faça encomendas ou solicite atendimento personalizado.
          </p>
          <div className="mt-10 space-y-5 text-sm">
            <div className="flex items-start gap-3"><Phone className="mt-1 h-4 w-4 text-silver" /><div><div className="text-silver">WhatsApp</div><div className="text-base text-primary-foreground">(62) 99854-9026</div></div></div>
            <div className="flex items-start gap-3"><Clock className="mt-1 h-4 w-4 text-silver" /><div><div className="text-silver">Horário</div><div className="text-base">Atendimento 24 horas</div></div></div>
            <div className="flex items-start gap-3"><MapPin className="mt-1 h-4 w-4 text-silver" /><div><div className="text-silver">Localização</div><div className="text-base">Goiânia — GO</div></div></div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-center">
          <a href={url} target="_blank" rel="noopener noreferrer" className="inline-flex h-14 items-center gap-3 rounded-full bg-whatsapp px-8 text-sm uppercase tracking-[0.2em] text-white shadow-luxe transition-transform hover:scale-[1.02]">
            <MessageCircle className="h-5 w-5" />
            Chamar Hikellme no WhatsApp
          </a>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-silver">
            <Instagram className="h-4 w-4" /> {INSTAGRAM_HANDLE}
          </a>
        </div>
      </div>
    </section>
  );
}
