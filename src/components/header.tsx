"use client"

import Link from "next/link"
import CartDrawer from "@/components/cart-drawer"
import NavigationHeader from "@/components/navigation-header"
import SearchButton from "@/components/search-button"

export default function Header() {
  return (
    <header className="shadow-xl sticky bg-white z-50">
      <div className="container mx-auto py-2 px-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-2">              
                <img src="/logo_olinda.png" alt="Olinda Logo" className="h-10 w-auto" />
            </Link>
            <div className="text-lg text-gray-600 border-l border-cyan-600 pl-4 flex flex-col items-center">
              <div className="font-semibold">Coleção</div>
              <hr className="w-full text-cyan-600"/>
              <div className="text-cyan-600 text-2xl font-[Cookie]">Inverno 2025</div>
            </div>
          </div>

          {/* Navigation */}
          <NavigationHeader />

          {/* Cart and Search */}
          <div className="flex items-center space-x-2">
            <SearchButton />
            <CartDrawer />
          </div>
        </div>
      </div>
    </header>
  )
}
