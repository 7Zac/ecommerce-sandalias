"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Check } from "lucide-react"
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

  const isInCart = items.some((item) => item.id === id)

  const handleAddToCart = async () => {
    setIsAdding(true)

    addItem({
      id,
      name,
      price,
      priceNumber,
      image,
      category,
    })

    // Show feedback for a moment
    setTimeout(() => {
      setIsAdding(false)
    }, 1000)
  }

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
      <CardHeader className="p-0 relative">
        <img
          src={image || "/placeholder.svg"}
          alt={name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {isInCart && (
          <Badge className="absolute top-2 right-2 bg-green-500">
            <Check className="h-3 w-3 mr-1" />
            No Carrinho
          </Badge>
        )}
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="text-lg mb-2 line-clamp-2">{name}</CardTitle>
        <p className="text-2xl font-bold text-blue-600 mb-4">{price}</p>
        <Button className="w-full" onClick={handleAddToCart} disabled={isAdding}>
          {isAdding ? (
            <>
              <Check className="h-4 w-4 mr-2" />
              Adicionado!
            </>
          ) : (
            <>
              <ShoppingCart className="h-4 w-4 mr-2" />
              Adicionar ao Carrinho
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  )
}
