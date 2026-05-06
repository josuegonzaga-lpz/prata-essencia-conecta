export const WHATSAPP_NUMBER = "5562998549026";
export const SELLER_NAME = "Hikellme";
export const INSTAGRAM_URL = "https://www.instagram.com/selo.925/";
export const INSTAGRAM_HANDLE = "@selo.925";

export function formatBRL(value: number): string {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export function buildWhatsappUrl(productName: string, price: number): string {
  const msg = `Olá, tenho interesse no produto: ${productName} - ${formatBRL(price)}`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

export function buildWhatsappGeneric(text: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}
