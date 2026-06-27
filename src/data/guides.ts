import type { Guide, GuideCategory } from '@/types/guide'

export const guideCategoryLabels: Record<GuideCategory, string> = {
  educational: 'Educational',
  practical: 'Practical',
  comparison: 'Comparison',
}

export const guides: Guide[] = [
  {
    id: 'what-is-cocopeat',
    slug: 'what-is-cocopeat',
    title: 'What is Cocopeat?',
    excerpt:
      'A short introduction to cocopeat: where it comes from, how it is made, and why growers use it as a sustainable growing medium.',
    content: '',
    image: '/images/product-blocks-multiple.jpg',
    category: 'educational',
    readingTimeMinutes: 5,
    publishedAt: '2026-01-15',
  },
  {
    id: 'benefits-of-cocopeat',
    slug: 'benefits-of-cocopeat',
    title: 'Benefits of Cocopeat for Plant Growth',
    excerpt:
      'How cocopeat supports healthier roots, better water retention, and stronger plant growth across home gardens and commercial farms.',
    content: '',
    image: '/images/application-potting-seedling.jpg',
    category: 'educational',
    readingTimeMinutes: 6,
    publishedAt: '2026-02-04',
  },
  {
    id: 'cocopeat-for-hydroponics',
    slug: 'cocopeat-for-hydroponics',
    title: 'Cocopeat for Hydroponics',
    excerpt:
      'Why cocopeat is a reliable substrate for hydroponic systems — pH balance, EC management, and practical setup tips.',
    content: '',
    image: 'https://images.unsplash.com/photo-1558449028-3d5d5b8c0fd5?auto=format&fit=crop&w=800&q=80',
    category: 'practical',
    readingTimeMinutes: 8,
    publishedAt: '2026-02-22',
  },
  {
    id: 'cocopeat-vs-soil',
    slug: 'cocopeat-vs-soil',
    title: 'Cocopeat vs Traditional Soil',
    excerpt:
      'How cocopeat compares to traditional soil across water retention, aeration, sustainability, and cost.',
    content: '',
    image: '/images/product-loose-sacks.jpg',
    category: 'comparison',
    readingTimeMinutes: 7,
    publishedAt: '2026-03-12',
  },
  {
    id: 'planting-guide',
    slug: 'planting-guide',
    title: 'Planting Guide: Getting Started with Cocopeat',
    excerpt:
      'A step-by-step planting guide for first-time cocopeat users — rehydration, mixing, and best practices for healthy plants.',
    content: '',
    image: '/images/application-potting-seedling.jpg',
    category: 'practical',
    readingTimeMinutes: 9,
    publishedAt: '2026-04-08',
  },
]

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find((guide) => guide.slug === slug)
}

export function getFeaturedGuide(): Guide | undefined {
  return guides[0]
}
