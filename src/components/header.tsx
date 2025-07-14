"use client"

import Link from "next/link"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import CartDrawer from "@/components/cart-drawer"
import NavigationHeader from "@/components/navigation-header"

export default function Header() {
  return (
    <header className="shadow-lg sticky top-0 z-50 backdrop-blur bg-white/70 web-kit-backdrop-filter">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-2">              
                <img src="/logo_olinda.png" alt="Olinda Logo" className="h-10 w-auto" />
            </Link>
            <div className="text-sm text-gray-600 border-l pl-4">
              <div className="font-semibold">Sandálias</div>
              <div className="text-blue-600">Inverno 2025</div>
            </div>
          </div>

          {/* Navigation */}
          <NavigationHeader />

          {/* Cart and Search */}
          <div className="flex items-center space-x-2">
            <Button
             className="hover:bg-blue-200"
             variant="ghost" size="icon">
              <Search className="h-5 w-5 text-blue-600" />
            </Button>
            <CartDrawer />
          </div>
        </div>
      </div>
    </header>
  )
}
