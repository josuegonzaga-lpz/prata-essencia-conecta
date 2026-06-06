export const WHATSAPP_NUMBER = "5562998549026";
export const SELLER_NAME = "SELO 925";
export const INSTAGRAM_URL = "https://www.instagram.com/selo.925/";
export const INSTAGRAM_HANDLE = "@selo.925";

export function formatBRL(value: number): string {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export type PaymentMethod = "pix" | "cartao" | "boleto";

const PAYMENT_LABEL: Record<PaymentMethod, string> = {
  pix: "PIX",
  cartao: "Cartão de Crédito",
  boleto: "Boleto Bancário",
};

export function buildWhatsappUrl(
  productName: string,
  price: number,
  payment?: PaymentMethod,
  codigo?: string,
): string {
  const cod = codigo ? ` (cód. ${codigo})` : "";
  const pay = payment ? `\nForma de pagamento: ${PAYMENT_LABEL[payment]}` : "";
  const msg = `Olá! Tenho interesse no produto:\n${productName}${cod}\nValor: ${formatBRL(price)}${pay}\n\nPoderia me ajudar a finalizar a compra?`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

export function buildCartWhatsappUrl(items: { name: string; quantity: number; price: number; code?: string }[], total: number): string {
  let msg = `Olá! Gostaria de finalizar o seguinte pedido:\n\n`;
  
  items.forEach(item => {
    const cod = item.code ? ` (cód. ${item.code})` : "";
    msg += `${item.quantity}x ${item.name}${cod} - ${formatBRL(item.price * item.quantity)}\n`;
  });
  
  msg += `\n*Total: ${formatBRL(total)}*\n\nPoderia me enviar o link de pagamento?`;
  
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

export function buildWhatsappGeneric(text: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}
