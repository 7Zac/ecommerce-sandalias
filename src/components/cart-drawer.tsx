"use client"

import { useState } from "react"
import { ShoppingCart, Plus, Minus, Trash2 } from "lucide-react"
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
        <Button variant="ghost" size="icon" className="relative hover:bg-blue-200">
          <ShoppingCart className="h-5 w-5 text-blue-600" />
          {itemCount > 0 && (
            <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
              {itemCount}
            </Badge>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg bg-white p-5 shadow-lg rounded-s-lg">
        <SheetHeader>
          <SheetTitle>Carrinho de Compras</SheetTitle>
          <SheetDescription>
            {itemCount === 0
              ? "Seu carrinho está vazio"
              : `${itemCount} ${itemCount === 1 ? "item" : "itens"} no carrinho`}
          </SheetDescription>
        </SheetHeader>

        <div className="flex flex-col h-full">
          {items.length === 0 ? (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <ShoppingCart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">Seu carrinho está vazio</p>
                <Button onClick={() => setIsOpen(false)} className="mt-4">
                  Continuar Comprando
                </Button>
              </div>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto py-4">
                <div className="space-y-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex items-center space-x-4 p-4 border rounded-lg">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h3 className="font-medium text-sm">{item.name}</h3>
                        <p className="text-blue-600 font-bold">{item.price}</p>
                        <p className="text-xs text-gray-500 capitalize">{item.category}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 bg-transparent"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="w-8 text-center text-sm">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 bg-transparent"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-red-500 hover:text-red-700"
                          onClick={() => removeItem(item.id)}
                        >
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t pt-4 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold">Total:</span>
                  <span className="text-2xl font-bold text-blue-600">{formatPrice(total)}</span>
                </div>

                <div className="space-y-2">
                  <Button className="w-full" size="lg">
                    Finalizar Compra
                  </Button>
                  <Button variant="outline" className="w-full bg-transparent" onClick={() => setIsOpen(false)}>
                    Continuar Comprando
                  </Button>
                  {items.length > 0 && (
                    <Button variant="ghost" className="w-full text-red-500 hover:text-red-700 mb-[90px]" onClick={clearCart}>
                      Limpar Carrinho
                    </Button>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  )
}
