"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/homem", label: "Homem" },
  { href: "/mulher", label: "Mulher" },
  { href: "/kids", label: "Kids" },
  { href: "/baby", label: "Baby" },
  { href: "/licenciados", label: "Licenciados" },
]

export default function MobileNavigation() {
  const pathname = usePathname()

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:bg-cyan-50 hover:text-cyan-700 focus-visible:ring-2 focus-visible:ring-cyan-300"
          aria-label="Abrir menu"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>

      <SheetContent side="left" className="bg-white">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>

        <div className="flex flex-col gap-2 px-4 pb-6">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-xl border px-4 py-3 text-base font-medium transition-colors duration-200",
                  isActive
                    ? "border-cyan-600 bg-cyan-50 text-slate-900"
                    : "border-transparent text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                )}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
              </Link>
            )
          })}
        </div>
      </SheetContent>
    </Sheet>
  )
}
