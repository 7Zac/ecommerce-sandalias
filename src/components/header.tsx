"use client"

import Link from "next/link"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import CartDrawer from "@/components/cart-drawer"
import NavigationHeader from "@/components/navigation-header"

export default function Header() {
  return (
    <header className="shadow-xl sticky top-0 bg-white z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-2">              
                <img src="/logo_olinda.png" alt="Olinda Logo" className="h-10 w-auto" />
            </Link>
            <div className="text-lg text-gray-600 border-l border-cyan-800 pl-4 flex flex-col items-center">
              <div className="font-semibold">Coleção</div>
              <hr className="w-full text-cyan-800"/>
              <div className="text-cyan-600 text-2xl font-[Cookie]">Inverno 2025</div>
            </div>
          </div>

          {/* Navigation */}
          <NavigationHeader />

          {/* Cart and Search */}
          <div className="flex items-center space-x-2">
            <Button
             className="hover:bg-cyan-800 text-cyan-600 hover:text-white"
             variant="ghost" size="icon">
              <Search className="h-5 w-5 " />
            </Button>
            <CartDrawer />
          </div>
        </div>
      </div>
    </header>
  )
}
