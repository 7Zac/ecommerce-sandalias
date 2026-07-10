"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Check } from "lucide-react"
import Link from "next/link"
import { useCart } from "@/contexts/cart-context"
import { useState } from "react"

interface ProductCardProps {
  id: number
  name: string
  price: string
  image: string
  category: string
}

export default function ProductCard({ id, name, price, image, category }: ProductCardProps) {
  const { addItem, items } = useCart()
  const [isAdding, setIsAdding] = useState(false)

  // Convert price string to number (remove R$ and convert comma to dot)
  const priceNumber = Number.parseFloat(price.replace("R$", "").replace(",", ".").trim())
  const formattedPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(priceNumber)

  const isInCart = items.some((item) => item.id === id)

  const handleAddToCart = async () => {
    if (isInCart || isAdding) return

    setIsAdding(true)

    addItem({
      id,
      name,
      price,
      priceNumber,
      image,
      category,
    })

    setTimeout(() => {
      setIsAdding(false)
    }, 1000)
  }

  return (
    <Card className="group overflow-hidden border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
      <CardHeader className="relative overflow-hidden bg-slate-100">
        <img
          src={image || "/placeholder.svg"}
          alt={name}
          className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-x-0 top-0 flex items-center justify-between p-3">
          <Badge className="bg-slate-900/80 text-white border border-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em]">
            {category}
          </Badge>
          {isInCart && (
            <Badge className="bg-emerald-500 text-white border border-emerald-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em]">
              <Check className="h-3 w-3 mr-1" />
              No carrinho
            </Badge>
          )}
        </div>
      </CardHeader>

      <CardContent className="p-5 space-y-4">
        <div className="space-y-2">
          <CardTitle className="text-lg font-semibold leading-tight line-clamp-2 text-slate-900">
            {name}
          </CardTitle>
          <p className="text-sm text-slate-500">Peça selecionada com cuidado para combinar conforto e estilo.</p>
        </div>

        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Preço</p>
            <p className="text-2xl font-bold text-sky-600">{formattedPrice}</p>
          </div>
          <Badge className="bg-sky-100 text-sky-700 border border-sky-200 px-2.5 py-1 text-xs font-semibold">
            Frete rápido
          </Badge>
        </div>

        <div className="flex flex-col gap-2">
          <Button
            asChild
            variant="outline"
            className="w-full rounded-full border-sky-200 bg-white px-5 py-3 text-sm font-semibold text-sky-700 shadow-sm transition duration-300 hover:bg-sky-50 hover:text-sky-800"
          >
            <Link href={`/product/${id}`}>Ver detalhes</Link>
          </Button>

          <Button
            className="w-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg transition duration-300 hover:from-cyan-600 hover:to-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
            onClick={handleAddToCart}
            disabled={isInCart || isAdding}
            aria-busy={isAdding}
          >
            {isInCart ? (
              <span className="inline-flex items-center justify-center gap-2">
                <Check className="h-4 w-4" />
                Já no carrinho
              </span>
            ) : isAdding ? (
              <span className="inline-flex items-center justify-center gap-2">
                <Check className="h-4 w-4" />
                Adicionando...
              </span>
            ) : (
              <span className="inline-flex items-center justify-center gap-2">
                <ShoppingCart className="h-4 w-4" />
                Adicionar ao carrinho
              </span>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
