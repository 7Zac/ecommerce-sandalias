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
    <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
      {navItems.map((item) => {
        const isActive = pathname === item.href

        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "transition-colors duration-200",
              "border-b-2 pb-1",
              isActive
                ? "border-cyan-600 text-slate-900"
                : "border-transparent text-slate-600 hover:border-cyan-300 hover:text-slate-900"
            )}
            aria-current={isActive ? "page" : undefined}
          >
            {item.label}
          </Link>
        )
      })}
    </nav>
  )
}
