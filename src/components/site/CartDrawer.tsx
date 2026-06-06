import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { useCart } from "@/contexts/CartContext";
import { buildCartWhatsappUrl, formatBRL } from "@/lib/whatsapp";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2 } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

export function CartDrawer() {
  const { isCartOpen, setIsCartOpen, items, updateQuantity, removeFromCart, totalPrice } = useCart();

  const handleCheckout = () => {
    const url = buildCartWhatsappUrl(
      items.map((item) => ({
        name: item.product.nome,
        quantity: item.quantity,
        price: item.product.preco,
        code: item.product.codigo,
      })),
      totalPrice
    );
    window.open(url, "_blank");
  };

  return (
    <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
      <SheetContent className="flex flex-col w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle>Seu Carrinho</SheetTitle>
          <SheetDescription>
            Confira os itens selecionados antes de enviar o pedido pelo WhatsApp.
          </SheetDescription>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center space-y-4">
            <p className="text-muted-foreground">Seu carrinho está vazio.</p>
            <Button variant="outline" onClick={() => setIsCartOpen(false)}>
              Continuar Comprando
            </Button>
          </div>
        ) : (
          <>
            <ScrollArea className="flex-1 -mx-6 px-6">
              <div className="space-y-4 py-4">
                {items.map((item) => (
                  <div key={item.product.id} className="flex gap-4">
                    <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-border">
                      <img
                        src={item.product.imagem}
                        alt={item.product.nome}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>

                    <div className="flex flex-1 flex-col">
                      <div>
                        <div className="flex justify-between text-base font-medium text-foreground">
                          <h3 className="line-clamp-2 text-sm">{item.product.nome}</h3>
                          <p className="ml-4 text-sm">{formatBRL(item.product.preco * item.quantity)}</p>
                        </div>
                        {item.product.codigo && (
                          <p className="mt-1 text-xs text-muted-foreground">Cód: {item.product.codigo}</p>
                        )}
                      </div>
                      <div className="flex flex-1 items-end justify-between text-sm">
                        <div className="flex items-center rounded-md border">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 rounded-none"
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-8 text-center text-xs font-medium">{item.quantity}</span>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 rounded-none"
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>

                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 px-2 text-destructive hover:text-destructive/90"
                          onClick={() => removeFromCart(item.product.id)}
                        >
                          <Trash2 className="h-4 w-4 mr-1" />
                          Remover
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            <div className="border-t pt-4 space-y-4">
              <div className="flex justify-between text-base font-medium text-foreground">
                <p>Subtotal</p>
                <p>{formatBRL(totalPrice)}</p>
              </div>
              <p className="text-xs text-muted-foreground">
                O pagamento será combinado diretamente com o vendedor pelo WhatsApp.
              </p>
              <Button className="w-full" size="lg" onClick={handleCheckout}>
                Finalizar pelo WhatsApp
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
