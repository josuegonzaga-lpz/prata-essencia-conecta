import { buildWhatsappGeneric } from "@/lib/whatsapp";
import { MessageCircle } from "lucide-react";

export function WhatsappFab() {
  const url = buildWhatsappGeneric("Olá Hikellme! Vim do site da SELO 925.");
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-luxe transition-transform hover:scale-110"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
