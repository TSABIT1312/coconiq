import type { Product } from '@/types/product'

export const products: Product[] = [
  {
    id: 'cocopeat',
    slug: 'cocopeat',
    name: 'Coconiq Premium Cocopeat',
    tagline: 'Sustainable growing media for modern agriculture',
    description:
      'Premium cocopeat sustainably sourced and graded for consistent quality. Suitable for hydroponics, nurseries, home gardening, and field agriculture.',
    image: '/images/product-block-held.jpg',
    gallery: [
      '/images/product-block-held.jpg',
      '/images/product-blocks-multiple.jpg',
      '/images/product-loose-sacks.jpg',
    ],
    benefits: [
      'High water retention',
      'Excellent aeration for root health',
      'Renewable and eco-friendly',
      'Lightweight and easy to handle',
    ],
    specifications: [
      { label: 'Material', value: 'Coconut husk fiber' },
      { label: 'Moisture Level', value: '15–20%' },
      { label: 'EC Level', value: '< 1.0 mS/cm' },
      { label: 'Packaging', value: '5 kg blocks · bulk bags' },
    ],
    applications: ['home-gardening', 'hydroponics', 'nursery', 'agriculture'],
  },
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug)
}
