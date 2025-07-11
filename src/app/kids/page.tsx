import ProductCard from "@/components/product-card"

export default function KidsPage() {
  const products = [
    { id: 5, name: "Chinelo Infantil Colorido", price: "R$ 39,90", image: "/placeholder.svg?height=300&width=250" },
    { id: 6, name: "Sandália Kids Aventura", price: "R$ 49,90", image: "/placeholder.svg?height=300&width=250" },
    { id: 7, name: "Papete Esportiva", price: "R$ 59,90", image: "/placeholder.svg?height=300&width=250" },
    { id: 8, name: "Chinelo Personagens", price: "R$ 45,90", image: "/placeholder.svg?height=300&width=250" },
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Coleção Kids</h1>
        <p className="text-xl text-gray-600">Diversão e conforto para os pequenos</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            category="kids"
          />
        ))}
      </div>
    </div>
  )
}
