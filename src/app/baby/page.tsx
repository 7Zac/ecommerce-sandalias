import ProductCard from "@/components/product-card"

export default function BabyPage() {
  const products = [
    { id: 9, name: "Chinelo Baby Soft", price: "R$ 29,90", image: "/placeholder.svg?height=300&width=250" },
    { id: 10, name: "Sandália Primeiros Passos", price: "R$ 35,90", image: "/placeholder.svg?height=300&width=250" },
    { id: 11, name: "Papete Baby Confort", price: "R$ 39,90", image: "/placeholder.svg?height=300&width=250" },
    { id: 12, name: "Chinelo Antiderrapante", price: "R$ 32,90", image: "/placeholder.svg?height=300&width=250" },
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Coleção Baby</h1>
        <p className="text-xl text-gray-600">Cuidado especial para os primeiros passos</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            category="baby"
          />
        ))}
      </div>
    </div>
  )
}
