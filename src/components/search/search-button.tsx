"use client"

import { useEffect, useRef, useState } from 'react'
import { Search, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

export default function SearchButton() {
  const [query, setQuery] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const inputRef = useRef<HTMLInputElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus()
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return

    const handleClickOutside = (event: MouseEvent) => {
      if (!wrapperRef.current?.contains(event.target as Node)) {
        setIsOpen(false)
        setQuery('')
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  const handleSearch = (searchTerm: string) => {
    const trimmed = searchTerm.trim()
    if (!trimmed) return

    router.push(`/search?q=${encodeURIComponent(trimmed)}`)
    setQuery('')
    setIsOpen(false)
  }

  const containerClass = isOpen
    ? 'fixed left-4 right-4 z-50 transition-all duration-300 opacity-100 md:static md:left-auto md:right-auto md:top-auto md:z-auto md:ml-3 md:w-64'
    : 'w-0 opacity-0 transition-all duration-300 md:w-0'

  return (
    <div ref={wrapperRef} className="relative flex w-full items-center">
      {!isOpen && (
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:bg-cyan-50 hover:text-cyan-700 focus-visible:ring-2 focus-visible:ring-cyan-300"
          onClick={() => setIsOpen(true)}
          aria-label="Abrir busca"
          aria-expanded={isOpen}
        >
          <Search className="h-5 w-5" />
        </Button>
      )}

      <div className={`overflow-hidden ${containerClass}`}>
        <div className="relative">
          <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
            <Search className="h-4 w-4" />
          </span>
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                handleSearch(query)
              }
            }}
            placeholder="Buscar por nome..."
            className={`w-full rounded-full border border-slate-200 bg-slate-50 py-2 pl-11 pr-12 text-sm text-slate-700 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100 ${isOpen ? 'shadow-lg' : ''}`}
          />

          {isOpen && (
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-700 transition hover:text-cyan-700"
              onClick={() => {
                setIsOpen(false)
                setQuery('')
              }}
              aria-label="Fechar busca"
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
