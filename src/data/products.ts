import type { Product } from '@/types/product'

export const products: Product[] = [
  {
    id: 'loose-cocopeat',
    slug: 'loose-cocopeat',
    name: 'Loose Cocopeat',
    tagline: 'Ready-to-use premium growing medium',
    description:
      'Premium loose cocopeat is a ready-to-use growing medium made from high-quality coconut husks. It offers excellent water retention, aeration, and drainage, creating an ideal environment for healthy root development. Perfect for nurseries, home gardening, landscaping, greenhouses, and commercial agriculture.',
    image: '/images/product-loose-sacks.jpg',
    gallery: [
      '/images/product-loose-sacks.jpg',
      '/images/packaging-bulk-sacks.jpg',
      '/images/packaging-warehouse-bags.jpg',
    ],
    benefits: [
      'Ready to use — no rehydration needed',
      'Excellent water retention & drainage',
      'Supports healthy root development',
      'Low EC, safe for sensitive plants',
    ],
    specifications: [
      { label: 'Material', value: 'Coconut husk fiber' },
      { label: 'Form', value: 'Loose (bagged)' },
      { label: 'EC Level', value: '< 1.0 mS/cm' },
      { label: 'Packaging', value: 'Bulk bags / sacks' },
    ],
    applications: ['home-gardening', 'nursery', 'agriculture'],
  },
  {
    id: 'cocopeat-big-press',
    slug: 'cocopeat-big-press',
    name: 'Cocopeat Big Press',
    tagline: 'Bulk compressed block — 1,400 L when hydrated',
    description:
      'Compressed cocopeat blocks designed for efficient storage and transportation. When hydrated, each block expands into a large volume of high-quality growing medium with excellent moisture retention and root support. Ideal for hydroponics, seed germination, horticulture, and large-scale farming.',
    image: '/images/product-blocks-multiple.jpg',
    gallery: [
      '/images/product-blocks-multiple.jpg',
      '/images/production-baling-machine.jpg',
      '/images/packaging-bulk-facility.jpg',
    ],
    benefits: [
      'Massive volume — 1,400 L per block hydrated',
      'Compact for efficient shipping & storage',
      'Export-ready format for large operations',
      'Consistent quality across every batch',
    ],
    specifications: [
      { label: 'Dimensions', value: '100 × 100 × 40 cm' },
      { label: 'Expanded Volume', value: '~1,400 L' },
      { label: 'Form', value: 'Compressed block' },
      { label: 'Best for', value: 'Commercial / export' },
    ],
    applications: ['hydroponics', 'agriculture'],
  },
  {
    id: 'cocopeat-block-5kg',
    slug: 'cocopeat-block-5kg',
    name: 'Cocopeat Block 5 Kg',
    tagline: 'Mid-size compressed block — 75 L when hydrated',
    description:
      'Compressed cocopeat blocks designed for efficient storage and transportation. When hydrated, each block expands into a large volume of high-quality growing medium with excellent moisture retention and root support. Ideal for hydroponics, seed germination, horticulture, and large-scale farming.',
    image: '/images/product-block-held.jpg',
    gallery: [
      '/images/product-block-held.jpg',
      '/images/product-blocks-multiple.jpg',
    ],
    benefits: [
      'Expands to 75 L per block',
      'Balanced size for medium operations',
      'Easy handling & storage',
      'Excellent moisture retention',
    ],
    specifications: [
      { label: 'Weight', value: '5 Kg' },
      { label: 'Dimensions', value: '30 × 30 × 15 cm' },
      { label: 'Expanded Volume', value: '~75 L' },
      { label: 'Form', value: 'Compressed block' },
    ],
    applications: ['hydroponics', 'nursery', 'agriculture'],
  },
  {
    id: 'cocopeat-block-700gr',
    slug: 'cocopeat-block-700gr',
    name: 'Cocopeat Block 700 Gram',
    tagline: 'Popular retail block — 15 L when hydrated',
    description:
      'Compressed cocopeat blocks designed for efficient storage and transportation. When hydrated, each block expands into a large volume of high-quality growing medium with excellent moisture retention and root support. Ideal for hydroponics, seed germination, horticulture, and small-to-medium growing operations.',
    image: '/images/product-block-held.jpg',
    gallery: [
      '/images/product-block-held.jpg',
      '/images/product-blocks-multiple.jpg',
    ],
    benefits: [
      'Expands to 15 L per block',
      'Perfect retail-friendly size',
      'Easy to store in home & garden',
      'Consistent quality guaranteed',
    ],
    specifications: [
      { label: 'Weight', value: '700 gram' },
      { label: 'Dimensions', value: '30 × 15 × 5 cm' },
      { label: 'Expanded Volume', value: '~15 L' },
      { label: 'Form', value: 'Compressed block' },
    ],
    applications: ['home-gardening', 'nursery', 'hydroponics'],
  },
  {
    id: 'cocopeat-block-500gr',
    slug: 'cocopeat-block-500gr',
    name: 'Cocopeat Block 500 Gram',
    tagline: 'Compact block — 9 L when hydrated',
    description:
      'Compressed cocopeat blocks designed for efficient storage and transportation. When hydrated, each block expands into a large volume of high-quality growing medium with excellent moisture retention and root support. Ideal for home gardeners, seedlings, and small-scale hydroponic setups.',
    image: '/images/product-block-held.jpg',
    gallery: [
      '/images/product-block-held.jpg',
      '/images/product-blocks-multiple.jpg',
    ],
    benefits: [
      'Expands to 9 L per block',
      'Ideal for home gardening & seedlings',
      'Lightweight and easy to handle',
      'Affordable entry to premium cocopeat',
    ],
    specifications: [
      { label: 'Weight', value: '500 gram' },
      { label: 'Dimensions', value: '20 × 15 × 5 cm' },
      { label: 'Expanded Volume', value: '~9 L' },
      { label: 'Form', value: 'Compressed block' },
    ],
    applications: ['home-gardening', 'nursery'],
  },
  {
    id: 'coco-fiber',
    slug: 'coco-fiber',
    name: 'Coco Fiber',
    tagline: 'Natural durable fiber for multiple industries',
    description:
      'Premium coco fiber is a natural, durable fiber extracted from coconut husks. It is widely used for erosion control, geotextiles, mattress and upholstery filling, rope production, hanging baskets, mulching, and horticultural applications. Eco-friendly and biodegradable, coco fiber is a sustainable solution for agricultural and industrial needs.',
    image: '/images/production-coconut-husks.jpg',
    gallery: [
      '/images/production-coconut-husks.jpg',
      '/images/production-husks-workers.jpg',
    ],
    benefits: [
      'Naturally durable & long-lasting',
      '100% biodegradable',
      'Multi-industry applications',
      'Sustainable alternative to synthetic fiber',
    ],
    specifications: [
      { label: 'Material', value: 'Coconut husk fiber' },
      { label: 'Form', value: 'Natural fiber (baled)' },
      { label: 'Applications', value: 'Erosion control · mattress · rope · mulch' },
      { label: 'Packaging', value: 'Baled for export' },
    ],
    applications: ['agriculture', 'home-gardening'],
  },
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug)
}
