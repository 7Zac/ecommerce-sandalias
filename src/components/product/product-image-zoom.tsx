"use client"

import Image from "next/image"
import { useState, type MouseEvent } from "react"

interface ProductImageZoomProps {
  src: string
  alt: string
}

export function ProductImageZoom({ src, alt }: ProductImageZoomProps) {
  const [lensPosition, setLensPosition] = useState({ x: 50, y: 50 })
  const [isActive, setIsActive] = useState(false)

  const handleMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const x = ((event.clientX - rect.left) / rect.width) * 100
    const y = ((event.clientY - rect.top) / rect.height) * 100

    setLensPosition({
      x: Math.min(100, Math.max(0, x)),
      y: Math.min(100, Math.max(0, y)),
    })
    setIsActive(true)
  }

  const safeSrc = src || "/placeholder.svg"

  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-100 shadow-sm">
      <div
        className="relative aspect-[5/5] w-full overflow-hidden"
        onMouseMove={handleMove}
        onMouseLeave={() => setIsActive(false)}
        onTouchStart={() => setIsActive(true)}
        onTouchEnd={() => setIsActive(false)}
      >
        <Image
          src={safeSrc}
          alt={alt}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 100vw"
          className="object-cover"
        />

        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div
            className="absolute h-28 w-28 rounded-full border-2 border-white bg-white/10 backdrop-blur-[1px] md:h-32 md:w-32"
            style={{
              left: `${lensPosition.x}%`,
              top: `${lensPosition.y}%`,
              transform: "translate(-50%, -50%)",
              opacity: isActive ? 1 : 0,
              transition: "opacity 180ms ease, transform 180ms ease",
            }}
          />
        </div>

        {isActive && (
          <div className="pointer-events-none absolute right-3 top-3 hidden h-[220px] w-[220px] overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl transition-all duration-200 md:block">
            <Image
              src={safeSrc}
              alt={`${alt} ampliada`}
              fill
              sizes="(max-width: 1024px) 0vw, 20vw"
              className="object-cover"
              style={{
                transform: "scale(2.8)",
                transformOrigin: `${lensPosition.x}% ${lensPosition.y}%`,
                transition: "transform 180ms ease",
              }}
            />
          </div>
        )}
      </div>

      <p className="px-3 py-2 text-center text-xs font-medium text-slate-500">
        Passe o mouse para ampliar
      </p>
    </div>
  )
}
