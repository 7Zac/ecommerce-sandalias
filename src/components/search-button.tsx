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

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus()
    }
  }, [isOpen])

  const handleSearch = (searchTerm: string) => {
    const trimmed = searchTerm.trim()
    if (!trimmed) return

    router.push(`/search?q=${encodeURIComponent(trimmed)}`)
    setQuery('')
    setIsOpen(false)
  }

  return (
    <div className="relative flex items-center">
      <Button
        variant="ghost"
        size="icon"
        className="rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:bg-cyan-50 hover:text-cyan-700 focus-visible:ring-2 focus-visible:ring-cyan-300"
        onClick={() => setIsOpen((current) => !current)}
        aria-label={isOpen ? 'Fechar busca' : 'Abrir busca'}
        aria-expanded={isOpen}
      >
        {isOpen ? <X className="h-5 w-5" /> : <Search className="h-5 w-5" />}
      </Button>

      <div className={`relative overflow-hidden transition-all duration-300 ${isOpen ? 'ml-3 w-64 opacity-100' : 'w-0 opacity-0'}`}>
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
            className="w-full rounded-full border border-slate-200 bg-slate-50 py-2 pl-11 pr-4 text-sm text-slate-700 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
          />
        </div>
      </div>
    </div>
  )
}
