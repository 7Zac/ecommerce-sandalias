import ProductCard from "@/components/product-card"
import { getProductsByCategory } from "@/lib/products"

export default function KidsPage() {
  const products = getProductsByCategory("kids")

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
