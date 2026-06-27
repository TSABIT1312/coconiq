export interface ProductSpecification {
  label: string
  value: string
}

export interface Product {
  id: string
  slug: string
  name: string
  tagline: string
  description: string
  image: string
  gallery: string[]
  benefits: string[]
  specifications: ProductSpecification[]
  applications: string[]
}
