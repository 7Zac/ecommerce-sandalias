"use client"

import Link from "next/link"
import CartDrawer from "@/components/cart-drawer"
import NavigationHeader from "@/components/navigation-header"
import SearchButton from "@/components/search-button"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex justify-around max-w-7xl gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3">
            <img src="/logo_olinda.png" alt="Olinda Logo" className="h-10 w-auto" />
          </Link>

          <span className="rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-700 shadow-sm">
            Inverno 2025
          </span>

        </div>

        <div className="hidden lg:flex items-center justify-between">
          <NavigationHeader />
        </div>
          <div className="flex items-center gap-2">
            <SearchButton />
            <CartDrawer />
          </div>
      </div>
    </header>
  )
}
