"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export default function NavigationHeader() {
  const pathname = usePathname()

  const navItems = [
    { href: "/homem", label: "Homem" },
    { href: "/mulher", label: "Mulher" },
    { href: "/kids", label: "Kids" },
    { href: "/baby", label: "Baby" },
    { href: "/licenciados", label: "Licenciados" },
  ]

  return (
    <nav className="hidden md:flex items-center space-x-8">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "text-gray-600 hover:text-blue-600 transition-colors",
            pathname === item.href && "text-blue-600 font-medium border-b-2 border-blue-600 pb-1",
          )}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  )
}
