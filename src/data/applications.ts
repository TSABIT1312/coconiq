import type { Application, ApplicationCategory } from '@/types/application'

export const applications: Application[] = [
  {
    id: 'home-gardening',
    slug: 'home-gardening',
    name: 'Home Gardening',
    audience: 'Hobby gardeners and home plant enthusiasts',
    description:
      'A clean, ready-to-use growing medium for indoor plants, containers, and raised beds.',
    benefits: [
      'Holds moisture between waterings',
      'Clean to handle indoors',
      'Mixes well with compost and perlite',
    ],
    usage: [
      'Rehydrate the block with clean water',
      'Mix with compost or potting soil as needed',
      'Use as a top layer or full substrate',
    ],
    image: '/images/application-potting-seedling.jpg',
    gallery: [],
  },
  {
    id: 'hydroponics',
    slug: 'hydroponics',
    name: 'Hydroponics',
    audience: 'Hydroponic and urban farming growers',
    description:
      'A stable, pH-balanced substrate ideal for soil-less and recirculating systems.',
    benefits: [
      'High cation exchange capacity',
      'Stable structure under irrigation',
      'Low EC out of the bag',
    ],
    usage: [
      'Pre-buffer with calcium nitrate before use',
      'Use in slabs, bags, or pots',
      'Monitor EC and pH weekly',
    ],
    image: 'https://images.unsplash.com/photo-1558449028-3d5d5b8c0fd5?auto=format&fit=crop&w=800&q=80',
    gallery: [],
  },
  {
    id: 'nursery',
    slug: 'nursery',
    name: 'Nursery & Seedling',
    audience: 'Plant nurseries and seedling businesses',
    description:
      'A reliable seedling medium with steady moisture and excellent aeration.',
    benefits: [
      'Encourages strong root development',
      'Uniform texture for tray seeding',
      'Reduces transplant shock',
    ],
    usage: [
      'Use in seed trays and starter pots',
      'Keep evenly moist during germination',
      'Transplant directly into beds or pots',
    ],
    image: '/images/application-potting-seedling.jpg',
    gallery: [],
  },
  {
    id: 'agriculture',
    slug: 'agriculture',
    name: 'Agriculture',
    audience: 'Commercial farmers and agricultural businesses',
    description:
      'Scaled supply for commercial growers seeking a sustainable soil amendment.',
    benefits: [
      'Improves soil structure',
      'Reduces irrigation needs',
      'Available in bulk packaging',
    ],
    usage: [
      'Incorporate into field beds',
      'Use as mulch for moisture retention',
      'Blend with compost for greenhouse production',
    ],
    image: '/images/packaging-bulk-facility.jpg',
    gallery: [],
  },
]

export function getApplicationBySlug(
  slug: ApplicationCategory,
): Application | undefined {
  return applications.find((application) => application.slug === slug)
}
