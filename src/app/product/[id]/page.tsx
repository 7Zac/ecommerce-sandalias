import React from "react"
import { allProducts } from "@/lib/products"
import ProductDetail from "@/components/product-detail"
import ProductCard from "@/components/product-card"

interface Props {
  params: Promise<{ id: number }>;
}

export default async function Page({ params }: Props) {
  const { id } = await params;
  const product = allProducts.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="py-20 px-6">
        <h2 className="text-2xl font-bold">Produto não encontrado</h2>
        <p className="mt-2 text-slate-600">O produto selecionado não existe ou foi removido.</p>
      </div>
    )
  }

  const related = allProducts.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4)

  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <nav className="text-sm text-slate-500 mb-6">Home / {product.category} / {product.name}</nav>

      <ProductDetail product={product} />

      <section className="mt-12">
        <h3 className="text-xl font-semibold mb-6">Você também pode gostar</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {related.map((p) => (
            <ProductCard key={p.id} id={p.id} name={p.name} price={p.price} image={p.image} category={p.category} />
          ))}
        </div>
      </section>
    </main>
  )
}
