"use client";

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel"
import { Card, CardContent } from "./ui/card"
import React from "react"


export default function HeroSection() {
  function CarouselDApiDemo() {
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)

    return (
      <section className="mx-auto w-full max-w-[944px]">
        <div className="relative w-full">
          <Carousel className="w-full">
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index}>
                  <Card className="m-px">
                    <CardContent className="flex justify-center p-6">
                      <img
                        src="/banner_colecao_inverno.png"
                        alt="Mulher segurando sandálias da coleção Inverno 2025"
                        className="mx-auto rounded-2xl shadow-lg"
                      />
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>

          <div className="relative flex justify-center">
            <Link href="/homem">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-cyan-800 hover:text-white font-semibold shadow-lg transition-colors duration-300">
                Explorar Coleção
              </Button>
            </Link>
          </div>
        </div>
      </section>
    )
  }

  return <CarouselDApiDemo />
}
