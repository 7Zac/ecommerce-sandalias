"use client"
import { useMemo, useState } from "react"
import { parsePrice } from "@/lib/price-utils"

export interface Product {
  id: number
  name: string
  price: string
  image: string
}

export function useSortProducts(products: Product[]) {
  const [sortBy, setSortBy] = useState("featured")

  const sortedProducts = useMemo(() => {
    return [...products].sort((a, b) => {
      if (sortBy === "price-asc") {
        return parsePrice(a.price) - parsePrice(b.price)
      }
      if (sortBy === "price-desc") {
        return parsePrice(b.price) - parsePrice(a.price)
      }
      return a.id - b.id
    })
  }, [products, sortBy])

  return {
    sortedProducts,
    sortBy,
    setSortBy,
  }
}
