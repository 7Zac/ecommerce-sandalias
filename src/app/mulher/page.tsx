"use client"
import ProductCard from "@/components/product-card"
import { getProductsByCategory } from "@/lib/products"
import Link from "next/link"
import { useMemo, useState } from "react"

function parsePrice(value: string) {
  return Number.parseFloat(value.replace("R$", "").replace(".", "").replace(",", ".").trim())
}

export default function MulherPage() {
  const [sortBy, setSortBy] = useState("featured")
  const products = useMemo(() => getProductsByCategory("mulher"), [])

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

  return (
    <main className="bg-slate-50">
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-pink-50 to-rose-200 p-8 shadow-2xl ring-1 ring-slate-200 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:items-end">
            <div className="max-w-2xl">
              <span className="inline-flex rounded-full bg-rose-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-rose-700">
                Coleção Feminina
              </span>
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                O melhor do conforto feminino para todos os dias
              </h1>
              <p className="mt-4 max-w-xl text-lg leading-8 text-slate-600">
                Descubra chinelos e sandálias com acabamento premium, design leve e versatilidade para qualquer look.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 rounded-3xl bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-rose-700">Mulher</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900">Navegue pelos melhores modelos</h2>
            <p className="mt-2 text-sm text-slate-500">{sortedProducts.length} opções disponíveis com estilo, conforto e durabilidade.</p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="inline-flex rounded-full bg-slate-100 p-2 text-sm text-slate-600 shadow-inner">
              <span className="font-semibold text-slate-900 p-2">Ordenar por:</span>
              <select
                value={sortBy}
                onChange={(event) => setSortBy(event.target.value)}
                className="ml-3 rounded-full border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 outline-none transition focus:border-rose-500 focus:ring-2 focus:ring-rose-100"
              >
                <option value="featured">Mais relevantes</option>
                <option value="price-asc">Preço: menor primeiro</option>
                <option value="price-desc">Preço: maior primeiro</option>
              </select>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                { label: "Novidade", href: "/" },
                { label: "Promoção", href: "/" },
                { label: "Mais vendidos", href: "/" },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-rose-300 hover:bg-rose-50"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {sortedProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              category="mulher"
            />
          ))}
        </div>

        <div className="flex justify-around items-center p-4 w-full h-full mt-10">
          <div className="mt-8 flex flex-col gap-4">
            <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-pink-50 to-pink-100 p-5 shadow-sm transition-all duration-300 hover:shadow-lg hover:from-pink-100 hover:to-pink-200 hover:-translate-y-1">
              <p className="text-sm font-semibold text-pink-900">Frete Rápido</p>
              <p className="mt-2 text-sm text-pink-600">Entrega em até 3 dias úteis para todo o Brasil.</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-emerald-50 to-emerald-100 p-5 shadow-sm transition-all duration-300 hover:shadow-lg hover:from-emerald-100 hover:to-emerald-200 hover:-translate-y-1">
              <p className="text-sm font-semibold text-emerald-900">Troca Fácil</p>
              <p className="mt-2 text-sm text-emerald-600">Você troca em até 30 dias com toda tranquilidade.</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-purple-50 to-purple-100 p-5 shadow-sm transition-all duration-300 hover:shadow-lg hover:from-purple-100 hover:to-purple-200 hover:-translate-y-1">
              <p className="text-sm font-semibold text-purple-900">Produtos Selecionados</p>
              <p className="mt-2 text-sm text-purple-600">Cada item passa por um controle de qualidade rigoroso.</p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <Link
              href="/licenciados"
              className="rounded-3xl border border-slate-200 bg-slate-950 px-6 py-6 text-center text-white shadow-lg transition duration-200 hover:-translate-y-1 hover:bg-slate-900"
            >
              <p className="text-sm uppercase tracking-[0.3em] text-rose-300">Licenciados</p>
              <p className="mt-4 text-xl font-semibold">Estilo com personagens</p>
            </Link>
            <Link
              href="/kids"
              className="rounded-3xl border border-slate-200 bg-gradient-to-r from-rose-500 to-rose-200 px-6 py-6 text-center shadow-sm transition duration-200 ease-linear hover:-translate-y-1 hover:to-rose-500 hover:shadow-lg"
            >
              <p className="text-sm uppercase tracking-[0.3em] text-slate-600">Infantil</p>
              <p className="mt-4 text-xl font-semibold text-slate-900">Conforto para elas e eles</p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
