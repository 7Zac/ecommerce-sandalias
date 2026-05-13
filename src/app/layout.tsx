import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { CartProvider } from "@/contexts/cart-context"
import { Cookie } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

const cookie = Cookie({ subsets: ["latin"], weight: "400"  })

export const metadata: Metadata = {
  title: "Olinda - Sandálias Inverno 2025",
  description: "Confira já a nova coleção Inverno 2025 da Olinda",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <CartProvider>
          <Header />
          <main>{children}</main>
        </CartProvider>
        <Footer />
      </body>
    </html>
  )
}
