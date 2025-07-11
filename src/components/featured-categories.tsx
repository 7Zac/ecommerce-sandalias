import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

export default function FeaturedCategories() {
  const categories = [
    {
      name: "Homem",
      href: "/homem",
      image: "/PREMIUM_PRETO.jpg",
      description: "Conforto e estilo masculino",
    },
    {
      name: "Mulher",
      href: "/mulher",
      image: "/ESTRELAR_CLASSIC.jpg",
      description: "Elegância e sofisticação",
    },
    {
      name: "Kids",
      href: "/kids",
      image: "/KIDS_DOG.jpg",
      description: "Diversão para os pequenos",
    },
    {
      name: "Baby",
      href: "/baby",
      image: "/BABY_AVIAO.jpg",
      description: "Cuidado especial para bebês",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Explore Nossas Categorias</h2>
          <p className="text-xl text-gray-600">Encontre o calçado perfeito para cada momento</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link key={category.name} href={category.href}>
              <Card className=" p-0 overflow-hidden hover:shadow-lg transition-all duration-300 group cursor-pointer">
                <CardContent className="p-0">
                  <div className="relative">
                    <img
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      className="w-full h-78 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-xl font-bold">{category.name}</h3>
                      <p className="text-sm opacity-90">{category.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
