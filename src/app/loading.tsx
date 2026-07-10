'use client'

import { Loader2 } from 'lucide-react'

export default function Loading() {
  return (
    <div className="min-h-screen w-full bg-background">
      {/* Loading Spinner Container */}
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="flex flex-col items-center gap-4">
          {/* Spinner Icon */}
          <div className="relative w-16 h-16">
            <Loader2 
              className="w-16 h-16 text-primary animate-spin" 
              strokeWidth={1.5}
            />
          </div>
          
          {/* Loading Text */}
          <div className="text-center">
            <p className="text-foreground text-sm font-medium">
              Carregando...
            </p>
            <p className="text-muted-foreground text-xs mt-1">
              Aguarde um momento
            </p>
          </div>
        </div>
      </div>

      {/* Skeleton Cards - para contexto visual */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[...Array(4)].map((_, i) => (
            <div 
              key={i}
              className="space-y-4 animate-pulse"
            >
              {/* Image Skeleton */}
              <div className="w-full aspect-square bg-muted rounded-lg" />
              
              {/* Title Skeleton */}
              <div className="h-4 bg-muted rounded w-3/4" />
              
              {/* Description Skeleton */}
              <div className="space-y-2">
                <div className="h-3 bg-muted rounded w-full" />
                <div className="h-3 bg-muted rounded w-5/6" />
              </div>
              
              {/* Price Skeleton */}
              <div className="h-4 bg-muted rounded w-1/2" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
