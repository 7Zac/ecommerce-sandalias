"use client"
import ProductCard from "@/components/product-card"
import ProductSortControls from "@/components/product-sort-controls"
import { getProductsByCategory } from "@/lib/products"
import { useSortProducts } from "@/hooks/useSortProducts"
import Link from "next/link"
import { useMemo } from "react"
import InfoCards from "@/components/info-cards"

export default function KidsPage() {
  const products = useMemo(() => getProductsByCategory("kids"), [])
  const { sortedProducts, sortBy, setSortBy } = useSortProducts(products)

  return (
    <main className="bg-slate-50">
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-orange-50 to-amber-200 p-8 shadow-2xl ring-1 ring-slate-200 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:items-end">
            <div className="max-w-2xl">
              <span className="inline-flex rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-amber-700">
                Coleção Kids
              </span>
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                Conforto colorido para os pequenos explorarem o dia
              </h1>
              <p className="mt-4 max-w-xl text-lg leading-8 text-slate-600">
                Modelos leves, resistentes e divertidos para brincar com estilo em qualquer aventura.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <ProductSortControls
          sortBy={sortBy}
          onSortChange={setSortBy}
          productsCount={sortedProducts.length}
          categoryLabel="Kids"
          accentColor="amber"
          filterOptions={[
            { label: "Novidade", href: "/" },
            { label: "Promoção", href: "/" },
            { label: "Mais vendidos", href: "/" },
          ]}
        />

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {sortedProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              category="kids"
            />
          ))}
        </div>

        <div className="flex max-sm:flex-col justify-around items-center p-4 w-full h-full gap-4">

          <InfoCards />

          <div className="flex flex-col max-sm:w-full gap-4">
            <Link
              href="/licenciados"
              className="rounded-3xl border border-slate-200 bg-slate-950 px-6 py-6 text-center text-white shadow-lg transition duration-200 hover:-translate-y-1 hover:bg-slate-900"
            >
              <p className="text-sm uppercase tracking-[0.3em] text-amber-300">Licenciados</p>
              <p className="mt-4 text-xl font-semibold">Estilo com personagens</p>
            </Link>
            <Link
              href="/mulher"
              className="rounded-3xl border border-slate-200 bg-gradient-to-r from-amber-200 to-amber-50 px-6 py-6 text-center shadow-sm transition duration-200 ease-linear hover:-translate-y-1 hover:to-amber-200 hover:shadow-lg"
            >
              <p className="text-sm uppercase tracking-[0.3em] text-slate-600">Feminino</p>
              <p className="mt-4 text-xl font-semibold text-slate-900">Conforto para elas</p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
