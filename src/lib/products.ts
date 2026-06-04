export interface Product {
  id: number
  name: string
  price: string
  image: string
  category: string
}

export const allProducts: Product[] = [
  // Mulher
  { id: 1, name: "Sandália Feminina Clássica", price: "R$ 89,90", image: "/placeholder.svg?height=300&width=250", category: "mulher" },
  { id: 2, name: "Chinelo Confort Plus", price: "R$ 65,90", image: "/placeholder.svg?height=300&width=250", category: "mulher" },
  { id: 3, name: "Sandália Plataforma", price: "R$ 129,90", image: "/placeholder.svg?height=300&width=250", category: "mulher" },
  { id: 4, name: "Rasteirinha Verão", price: "R$ 79,90", image: "/placeholder.svg?height=300&width=250", category: "mulher" },
  // Kids
  { id: 5, name: "Chinelo Infantil Colorido", price: "R$ 39,90", image: "/placeholder.svg?height=300&width=250", category: "kids" },
  { id: 6, name: "Sandália Kids Aventura", price: "R$ 49,90", image: "/placeholder.svg?height=300&width=250", category: "kids" },
  { id: 7, name: "Papete Esportiva", price: "R$ 59,90", image: "/placeholder.svg?height=300&width=250", category: "kids" },
  { id: 8, name: "Chinelo Personagens", price: "R$ 45,90", image: "/placeholder.svg?height=300&width=250", category: "kids" },
  // Baby
  { id: 9, name: "Chinelo Baby Soft", price: "R$ 29,90", image: "/placeholder.svg?height=300&width=250", category: "baby" },
  { id: 10, name: "Sandália Primeiros Passos", price: "R$ 35,90", image: "/placeholder.svg?height=300&width=250", category: "baby" },
  { id: 11, name: "Papete Baby Confort", price: "R$ 39,90", image: "/placeholder.svg?height=300&width=250", category: "baby" },
  { id: 12, name: "Chinelo Antiderrapante", price: "R$ 32,90", image: "/placeholder.svg?height=300&width=250", category: "baby" },
  // Licenciados
  { id: 13, name: "Chinelo Super Heróis", price: "R$ 55,90", image: "/placeholder.svg?height=300&width=250", category: "licenciados" },
  { id: 14, name: "Sandália Princesas", price: "R$ 49,90", image: "/placeholder.svg?height=300&width=250", category: "licenciados" },
  { id: 15, name: "Papete Carros", price: "R$ 59,90", image: "/placeholder.svg?height=300&width=250", category: "licenciados" },
  { id: 16, name: "Chinelo Personagens Animados", price: "R$ 52,90", image: "/placeholder.svg?height=300&width=250", category: "licenciados" },
  // Homem
  { id: 17, name: "Chinelo Masculino Clássico", price: "R$ 79,90", image: "/anatomica-preta.png", category: "homem" },
  { id: 18, name: "Sandália Esportiva", price: "R$ 95,90", image: "/anatomica-preta.png", category: "homem" },
  { id: 19, name: "Papete Adventure", price: "R$ 119,90", image: "/anatomica-preta.png", category: "homem" },
  { id: 20, name: "Chinelo Confort Masculino", price: "R$ 69,90", image: "/anatomica-preta.png", category: "homem" },
  { id: 21, name: "Sandália Couro Premium", price: "R$ 149,90", image: "/anatomica-preta.png", category: "homem" },
  { id: 22, name: "Chinelo Slide Moderno", price: "R$ 85,90", image: "/anatomica-preta.png", category: "homem" },
  { id: 23, name: "Papete Outdoor", price: "R$ 129,90", image: "/anatomica-preta.png", category: "homem" },
  { id: 24, name: "Sandália Casual", price: "R$ 89,90", image: "/anatomica-preta.png", category: "homem" },
]

export const getProductsByCategory = (category: string): Product[] => {
  return allProducts.filter(product => product.category === category)
}