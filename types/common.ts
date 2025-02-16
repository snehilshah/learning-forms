type Product = {
  id: number
  title: string
  price: number
  description: string
}

type JustProduct = Omit<Product, 'id'>

type User = {
  id: number
  name: string
  email: string
}

export type { User, Product, JustProduct }
