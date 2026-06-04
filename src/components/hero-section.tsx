"use client";

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "./ui/carousel"
import { Card, CardContent } from "./ui/card"
import React from "react"
import { ChevronRight, Zap } from "lucide-react"


export default function HeroSection() {
  const banners = [
    {
      id: 1,
      image: "/banner_colecao_inverno.png",
      alt: "Mulher segurando sandálias da coleção Inverno 2025",
      title: "Coleção Inverno 2025",
      description: "Descubra o estilo perfeito para a estação",
      badge: "Até 40% OFF",
      link: "/mulher",
      highlight: "Feminino"
    },
    {
      id: 2,
      image: "/banner_colecao_inverno.png",
      alt: "Coleção Masculina",
      title: "Para Ele",
      description: "Conforto e estilo em cada detalhe",
      badge: "NOVO",
      link: "/homem",
      highlight: "Masculino"
    },
    {
      id: 3,
      image: "/banner_colecao_inverno.png",
      alt: "Coleção Kids",
      title: "Pequenos Estilos",
      description: "Sapatos confortáveis para as crianças",
      badge: "EXCLUSIVO",
      link: "/kids",
      highlight: "Infantil"
    }
  ]

  const [current, setCurrent] = React.useState(0)
  const [carouselApi, setCarouselApi] = React.useState<CarouselApi | null>(null)

  React.useEffect(() => {
    if (!carouselApi) return

    const updateCurrent = () => {
      setCurrent(carouselApi.selectedScrollSnap())
    }

    updateCurrent()
    carouselApi.on("select", updateCurrent)
    carouselApi.on("reInit", updateCurrent)

    return () => {
      carouselApi.off("select", updateCurrent)
      carouselApi.off("reInit", updateCurrent)
    }
  }, [carouselApi])

  return (
    <section className="w-full">
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        
        {/* Main Carousel with Overlay */}
        <div className="relative w-full mt-4 sm:mt-8 group">
          <Carousel className="w-full" setApi={setCarouselApi}>
            <CarouselContent>
              {banners.map((banner, index) => (
                <CarouselItem key={banner.id}>
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                    <Card className="m-px border-0 bg-transparent">
                      <CardContent className="relative flex justify-center p-0 h-[300px] sm:h-[400px] lg:h-[600px]">
                        {/* Background Image */}
                        <img
                          src={banner.image}
                          alt={banner.alt}
                          className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                        />
                        
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent rounded-2xl" />
                        
                        {/* Content Overlay */}
                        <div className="relative z-10 flex flex-col justify-between w-full h-full p-6 sm:p-8 lg:p-12">
                          {/* Top Badge */}
                          <div className="flex items-center gap-2 w-fit">
                            <div className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg">
                              <Zap size={16} />
                              {banner.badge}
                            </div>
                          </div>
                          
                          {/* Bottom Content */}
                          <div className="space-y-4 max-w-md">
                            <div>
                              <p className="text-cyan-400 text-sm font-semibold mb-2 uppercase tracking-wider">
                                {banner.highlight}
                              </p>
                              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                                {banner.title}
                              </h2>
                              <p className="text-gray-200 text-base sm:text-lg mt-3">
                                {banner.description}
                              </p>
                            </div>
                            
                            {/* CTA Button */}
                            <div>
                              <Link href={banner.link}>
                                <Button 
                                  size="lg" 
                                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group/btn"
                                >
                                  Explorar Coleção
                                  <ChevronRight className="ml-2 h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
                                </Button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Custom Navigation Buttons */}
            <div className="absolute bottom-6 sm:bottom-8 right-6 sm:right-16 z-20 flex gap-2">
              <CarouselPrevious className="relative position-static h-12 w-12 bg-white/60 hover:bg-white text-white border-0 transition-all duration-300" />
              <CarouselNext className="relative position-static h-12 w-12 bg-white/60 hover:bg-white text-white border-0 transition-all duration-300" />
            </div>
            
            {/* Slide Indicators */}
            <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8 z-20 flex justify-center gap-2">
              {banners.map((_, index) => (
                <button
                  key={index}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    current === index 
                      ? "bg-white w-8" 
                      : "bg-white/40 w-2 hover:bg-white/60"
                  }`}
                  onClick={() => {
                    setCurrent(index)
                    carouselApi?.scrollTo(index)
                  }}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  )
}
