import ProductCard from "@/components/product-card"

export default function LicenciadosPage() {
  const products = [
    { id: 13, name: "Chinelo Super Heróis", price: "R$ 55,90", image: "/placeholder.svg?height=300&width=250" },
    { id: 14, name: "Sandália Princesas", price: "R$ 49,90", image: "/placeholder.svg?height=300&width=250" },
    { id: 15, name: "Papete Carros", price: "R$ 59,90", image: "/placeholder.svg?height=300&width=250" },
    { id: 16, name: "Chinelo Personagens Animados", price: "R$ 52,90", image: "/placeholder.svg?height=300&width=250" },
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Produtos Licenciados</h1>
        <p className="text-xl text-gray-600">Seus personagens favoritos nos seus pés</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            category="licenciados"
          />
        ))}
      </div>
    </div>
  )
}
