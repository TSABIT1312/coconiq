export type ApplicationCategory =
  | 'home-gardening'
  | 'hydroponics'
  | 'nursery'
  | 'agriculture'

export interface Application {
  id: string
  slug: ApplicationCategory
  name: string
  audience: string
  description: string
  benefits: string[]
  usage: string[]
  image: string
  gallery: string[]
}
