"use client"

import { useState } from "react"
import { ShoppingCart, Plus, Minus, Trash2, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { useCart } from "@/contexts/cart-context"

export default function CartDrawer() {
  const { items, total, itemCount, updateQuantity, removeItem, clearCart } = useCart()
  const [isOpen, setIsOpen] = useState(false)

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price)
  }

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="relative rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-cyan-300 hover:text-cyan-700 hover:bg-cyan-50"
          aria-label="Abrir carrinho"
        >
          <ShoppingCart className="h-5 w-5" />
          {itemCount > 0 && (
            <Badge className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-cyan-600 text-[10px] font-semibold text-white shadow-sm">
              {itemCount}
            </Badge>
          )}
        </Button>
      </SheetTrigger>

      <SheetContent className="w-full sm:max-w-md bg-white p-6 shadow-2xl">
        <SheetHeader className="mb-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <SheetTitle className="text-2xl font-semibold text-slate-900">Seu carrinho</SheetTitle>
              <SheetDescription className="mt-1 text-sm text-slate-500">
                {itemCount === 0
                  ? "Ainda não há produtos adicionados"
                  : `${itemCount} ${itemCount === 1 ? "item" : "itens"} no carrinho`}
              </SheetDescription>
            </div>
          </div>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center rounded-3xl border border-dashed border-slate-200 p-6 text-center text-slate-500">
            <ShoppingCart className="mb-4 h-16 w-16" />
            <p className="text-sm font-medium">Seu carrinho está vazio</p>
            <p className="mt-2 text-sm text-slate-400">Adicione itens e veja-os aqui.</p>
            <Button className="mt-6 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800" onClick={() => setIsOpen(false)}>
              Continuar comprando
            </Button>
          </div>
        ) : (
          <>
            <div className="flex max-h-[58vh] flex-col gap-4 overflow-y-auto pr-1 pb-2">
              {items.map((item) => (
                <div key={item.id} className="grid grid-cols-[auto_1fr] gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-4">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    className="h-20 w-20 rounded-2xl object-cover"
                  />
                  <div className="flex flex-col justify-between">
                    <div>
                      <h3 className="text-sm font-semibold text-slate-900 line-clamp-2">{item.name}</h3>
                      <p className="mt-1 text-sm text-slate-600">{item.category}</p>
                    </div>
                    <div className="flex items-center justify-between gap-3 pt-3">
                      <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white p-1">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-slate-500 hover:bg-slate-100"
                          onClick={() => (item.quantity > 1 ? updateQuantity(item.id, item.quantity - 1) : removeItem(item.id))}
                          aria-label="Diminuir quantidade"
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="min-w-[2rem] text-center text-sm font-medium text-slate-900">{item.quantity}</span>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-slate-500 hover:bg-slate-100"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          aria-label="Aumentar quantidade"
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 rounded-full text-red-500 hover:bg-red-50"
                        onClick={() => removeItem(item.id)}
                        aria-label="Remover item"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-end text-right text-sm font-semibold text-slate-900">
                    {formatPrice(parseFloat(item.price.replace("R$", "").replace(".", "").replace(",", ".")) * item.quantity)}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 space-y-4 border-t border-slate-200 pt-5">
              <div className="flex items-center justify-between text-sm text-slate-600">
                <span>Subtotal</span>
                <span className="font-semibold text-slate-900">{formatPrice(total)}</span>
              </div>
              <p className="text-xs text-slate-400">Frete calculado no checkout. Pagamento seguro e entrega rápida.</p>

              <Button className="w-full rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800">
                Finalizar compra
              </Button>
              <Button variant="outline" className="w-full rounded-full px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100" onClick={() => setIsOpen(false)}>
                Continuar comprando
              </Button>
              {items.length > 0 && (
                <Button variant="ghost" className="w-full rounded-full px-5 py-3 text-sm font-semibold text-red-600 hover:bg-red-50" onClick={clearCart}>
                  Limpar carrinho
                </Button>
              )}
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}
