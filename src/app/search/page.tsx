"use client"

import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import Link from 'next/link'
import ProductCard from '@/components/product-card'
import { allProducts } from '@/lib/products'

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