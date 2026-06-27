export type GalleryCategory =
  | 'products'
  | 'production'
  | 'packaging'
  | 'applications'

export interface GalleryItem {
  id: string
  title: string
  image: string
  alt: string
  category: GalleryCategory
}
