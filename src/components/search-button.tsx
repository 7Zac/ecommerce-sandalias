"use client"

import { useState } from 'react'
import { Search } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function SearchButton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="flex items-center">
      <Button
        className="hover:bg-cyan-800 text-cyan-600 hover:text-white flex-shrink-0"
        variant="ghost" size="icon"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Search className="h-5 w-5" />
      </Button>
      <input
        type="text"
        placeholder="Pesquisar por nome..."
        className={`ml-2 px-2 py-1 border border-gray-300 rounded-md outline-none transition-all duration-300 ease-in-out ${
          isOpen ? 'w-48 opacity-100' : 'w-0 opacity-0 overflow-hidden'
        }`}
        onBlur={() => setIsOpen(false)}
      />
    </div>
  )
}