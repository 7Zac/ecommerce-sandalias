"use client"

import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import Link from 'next/link'
import ProductCard from '@/components/product-card'

// Combined product data from all categories
const allProducts = [
  // Mulher
  { id: 1, name: "Sandália Feminina Clássica", price: "R$ 89,90", image: "/placeholder.svg?height=300&width=250", category: "mulher" },
  { id: 2, name: "Chinelo Confort Plus", price: "R$ 65,90", image: "/placeholder.svg?height=300&width=250", category: "mulher" },
  { id: 3, name: "Sandália Plataforma", price: "R$ 129,90", image: "/placeholder.svg?height=300&width=250", category: "mulher" },
  { id: 4, name: "Rasteirinha Verão", price: "R$ 79,90", image: "/placeholder.svg?height=300&width=250", category: "mulher" },
  // Kids
  { id: 5, name: "Chinelo Infantil Colorido", price: "R$ 39,90", image: "/placeholder.svg?height=300&width=250", category: "kids" },
  { id: 6, name: "Sandália Kids Aventura", price: "R$ 49,90", image: "/placeholder.svg?height=300&width=250", category: "kids" },
  { id: 7, name: "Papete Esportiva", price: "R$ 59,90", image: "/placeholder.svg?height=300&width=250", category: "kids" },
  { id: 8, name: "Chinelo Personagens", price: "R$ 45,90", image: "/placeholder.svg?height=300&width=250", category: "kids" },
  // Baby
  { id: 9, name: "Chinelo Baby Soft", price: "R$ 29,90", image: "/placeholder.svg?height=300&width=250", category: "baby" },
  { id: 10, name: "Sandália Primeiros Passos", price: "R$ 35,90", image: "/placeholder.svg?height=300&width=250", category: "baby" },
  { id: 11, name: "Papete Baby Confort", price: "R$ 39,90", image: "/placeholder.svg?height=300&width=250", category: "baby" },
  { id: 12, name: "Chinelo Antiderrapante", price: "R$ 32,90", image: "/placeholder.svg?height=300&width=250", category: "baby" },
  // Licenciados
  { id: 13, name: "Chinelo Super Heróis", price: "R$ 55,90", image: "/placeholder.svg?height=300&width=250", category: "licenciados" },
  { id: 14, name: "Sandália Princesas", price: "R$ 49,90", image: "/placeholder.svg?height=300&width=250", category: "licenciados" },
  { id: 15, name: "Papete Carros", price: "R$ 59,90", image: "/placeholder.svg?height=300&width=250", category: "licenciados" },
  { id: 16, name: "Chinelo Personagens Animados", price: "R$ 52,90", image: "/placeholder.svg?height=300&width=250", category: "licenciados" },
  // Homem
  { id: 17, name: "Chinelo Masculino Clássico", price: "R$ 79,90", image: "/placeholder.svg?height=300&width=250", category: "homem" },
  { id: 18, name: "Sandália Esportiva", price: "R$ 95,90", image: "/placeholder.svg?height=300&width=250", category: "homem" },
  { id: 19, name: "Papete Adventure", price: "R$ 119,90", image: "/placeholder.svg?height=300&width=250", category: "homem" },
  { id: 20, name: "Chinelo Confort Masculino", price: "R$ 69,90", image: "/placeholder.svg?height=300&width=250", category: "homem" },
  { id: 21, name: "Sandália Couro Premium", price: "R$ 149,90", image: "/placeholder.svg?height=300&width=250", category: "homem" },
  { id: 22, name: "Chinelo Slide Moderno", price: "R$ 85,90", image: "/placeholder.svg?height=300&width=250", category: "homem" },
  { id: 23, name: "Papete Outdoor", price: "R$ 129,90", image: "/placeholder.svg?height=300&width=250", category: "homem" },
  { id: 24, name: "Sandália Casual", price: "R$ 89,90", image: "/placeholder.svg?height=300&width=250", category: "homem" },
]

function SearchResults() {
  const searchParams = useSearchParams()
  const query = searchParams.get('q') || ''

  const filteredProducts = allProducts.filter(product =>
    product.name.toLowerCase().includes(query.toLowerCase()) ||
    product.id.toString().includes(query)
  )

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Resultados da Pesquisa</h1>
      <p className="mb-6">Busca por: "{query}"</p>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              category={product.category}
            />
          ))}
        </div>
      ) : (
        <p>Nenhum produto encontrado para "{query}".</p>
      )}

      <div className="mt-8">
        <Link href="/" className="text-cyan-600 hover:underline">
          ← Voltar ao início
        </Link>
      </div>
    </div>
  )
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="container mx-auto px-4 py-8">Carregando...</div>}>
      <SearchResults />
    </Suspense>
  )
}