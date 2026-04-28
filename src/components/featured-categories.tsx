import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "./ui/button"

export default function FeaturedCategories() {
  const categories = [
    {
      name: "Homem",
      href: "/homem",
      image: "/anatomica-preta.png",
      description: "Conforto e estilo masculino",
    },
    {
      name: "Mulher",
      href: "/mulher",
      image: "/bicolor_fem_caribe.png",
      description: "Elegância e sofisticação",
    },
    {
      name: "Kids",
      href: "/kids",
      image: "/kids_fem_gato.png",
      description: "Diversão para os pequenos",
    },
    {
      name: "Baby",
      href: "/baby",
      image: "/baby_bee_jeans.png",
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
              <Card className="p-0 border-0 hover:bg-[#63a8b1] text-cyan-800 hover:text-white transition-all duration-300 group cursor-pointer">
                <CardContent className="p-0">
                  <div className="p-6">
                    <img
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      className="w-full hover:scale-115 hover:-translate-y-8 transition-all duration-500"
                    />
                    <div className="gap-6 flex flex-col items-center justify-center">
                      <div className="flex flex-col items-center">
                        <h3 className="text-4xl font-black uppercase">{category.name}</h3>
                        <p className="text-sm">{category.description}</p>
                      </div>

                      <div className="">
                        <Button className="cursor-pointer bg-cyan-500 hover:bg-cyan-800 text-white duration-500">Ver mais</Button>
                      </div>

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
