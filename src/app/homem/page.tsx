import ProductCard from "@/components/product-card"

export default function HomemPage() {
  const products = [
    { id: 17, name: "Chinelo Masculino Clássico", price: "R$ 79,90", image: "/placeholder.svg?height=300&width=250" },
    { id: 18, name: "Sandália Esportiva", price: "R$ 95,90", image: "/placeholder.svg?height=300&width=250" },
    { id: 19, name: "Papete Adventure", price: "R$ 119,90", image: "/placeholder.svg?height=300&width=250" },
    { id: 20, name: "Chinelo Confort Masculino", price: "R$ 69,90", image: "/placeholder.svg?height=300&width=250" },
    { id: 21, name: "Sandália Couro Premium", price: "R$ 149,90", image: "/placeholder.svg?height=300&width=250" },
    { id: 22, name: "Chinelo Slide Moderno", price: "R$ 85,90", image: "/placeholder.svg?height=300&width=250" },
    { id: 23, name: "Papete Outdoor", price: "R$ 129,90", image: "/placeholder.svg?height=300&width=250" },
    { id: 24, name: "Sandália Casual", price: "R$ 89,90", image: "/placeholder.svg?height=300&width=250" },
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Coleção Masculina</h1>
        <p className="text-xl text-gray-600">Conforto e estilo para o homem moderno</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            category="homem"
          />
        ))}
      </div>
    </div>
  )
}
