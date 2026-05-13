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
            "text-cyan-600 hover:text-cyan-800 hover:border-b-cyan-600 hover:border-b transition-all duration-100",
            pathname === item.href && "text-cyan-600 font-medium border-b-2 border-cyan-800 pb-1",
          )}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  )
}
