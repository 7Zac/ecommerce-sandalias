import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="bg-gray-200 h-[600px] relative overflow-hidden">
    <div className="w-full h-full flex items-center justify-center relative">
            <Image
              src="/banner_colecao_inverno.png"
              alt="Mulher segurando sandálias da coleção Inverno 2025"
              width={1920}
              height={600}
              className="w-[944px] h-auto rounded-2xl shadow-lg"
              priority
            />
          
          {/* Right side - Content */}
            <div className=" absolute z-10 flex justify-center items-start w-full h-full mt-243 ml-90">
            <div className="">
              <Link href="/homem">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-cyan-800 hover:text-white font-semibold shadow-lg transition-colors duration-300">
                  Explorar Coleção
                </Button>
              </Link>
            </div>
          </div>           
        </div>
        <div className="absolute z-0 w-full h-full flex items-center justify-center">
            <hr className="w-300 border-1 border-cyan-800 mt-150" />
        </div> 
    </section>
    
  )
}
