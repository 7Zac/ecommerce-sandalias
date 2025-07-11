import ProductCard from "@/components/product-card"

export default function MulherPage() {
  const products = [
    { id: 1, name: "Sandália Feminina Clássica", price: "R$ 89,90", image: "/placeholder.svg?height=300&width=250" },
    { id: 2, name: "Chinelo Confort Plus", price: "R$ 65,90", image: "/placeholder.svg?height=300&width=250" },
    { id: 3, name: "Sandália Plataforma", price: "R$ 129,90", image: "/placeholder.svg?height=300&width=250" },
    { id: 4, name: "Rasteirinha Verão", price: "R$ 79,90", image: "/placeholder.svg?height=300&width=250" },
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Coleção Feminina</h1>
        <p className="text-xl text-gray-600">Descubra o conforto e estilo para seus pés</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            category="mulher"
          />
        ))}
      </div>
    </div>
  )
}
