"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Minus, Plus } from "lucide-react"
import { useCart } from "@/contexts/cart-context"

interface Product {
  id: number
  name: string
  price: string
  image: string
  category: string
}

export default function ProductDetail({ product }: { product: Product }) {
  const { addItem, items } = useCart()
  const [quantity, setQuantity] = useState(1)
  const [isAdding, setIsAdding] = useState(false)

  const priceNumber = Number.parseFloat(product.price.replace("R$", "").replace(",", ".").trim())
  const formattedPrice = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(
    priceNumber,
  )

  const isInCart = items.some((i) => i.id === product.id)

  const handleAdd = () => {
    if (isAdding) return
    setIsAdding(true)

    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      priceNumber,
      image: product.image,
      category: product.category,
    })

    setTimeout(() => setIsAdding(false), 700)
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center">
        <div className="w-full lg:w-1/2">
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            className="w-full object-cover"
          />
        </div>

        <div className="w-full lg:w-1/2 space-y-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <h1 className="text-2xl font-bold text-slate-900">{product.name}</h1>
            <Badge className="bg-slate-900/90 text-white px-3 py-1 self-start sm:self-auto">{product.category}</Badge>
          </div>

          <p className="text-3xl font-extrabold text-sky-600">{formattedPrice}</p>

          <p className="text-sm text-slate-600">Peça selecionada a dedo: conforto e durabilidade sem abrir mão do estilo.</p>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="flex items-center justify-between rounded-lg border border-slate-200 bg-white sm:w-auto sm:justify-start">
              <button
                aria-label="Diminuir quantidade"
                className="p-3"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                <Minus className="w-4 h-4" />
              </button>
              <div className="px-4 font-semibold">{quantity}</div>
              <button aria-label="Aumentar quantidade" className="p-3" onClick={() => setQuantity(quantity + 1)}>
                <Plus className="w-4 h-4" />
              </button>
            </div>

            <Button
              className="w-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg hover:from-cyan-600 hover:to-blue-700 sm:w-auto"
              onClick={handleAdd}
              disabled={isInCart}
            >
              <span className="inline-flex items-center justify-center gap-2">
                <ShoppingCart className="w-4 h-4" />
                {isInCart ? "Já no carrinho" : isAdding ? "Adicionando..." : "Adicionar ao carrinho"}
              </span>
            </Button>
          </div>

          <div className="pt-4">
            <h3 className="text-sm font-semibold text-slate-700">Descrição</h3>
            <p className="text-sm text-slate-600 mt-2">Este produto combina materiais de qualidade com design pensado para o dia a dia. Ideal para quem busca conforto e estilo.</p>
          </div>

          <div className="pt-4">
            <h4 className="text-sm font-semibold text-slate-700">Informações adicionais</h4>
            <ul className="mt-2 text-sm text-slate-600 list-disc list-inside">
              <li>Material: Borracha e EVA</li>
              <li>Garantia: 30 dias contra defeitos de fabricação</li>
              <li>Frete rápido disponível</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
