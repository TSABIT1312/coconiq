import type { GalleryCategory, GalleryItem } from '@/types/gallery'

export const galleryCategoryLabels: Record<GalleryCategory, string> = {
  products: 'Products',
  production: 'Production',
  packaging: 'Packaging',
  applications: 'Applications',
}

export const galleryCategoryOrder: GalleryCategory[] = [
  'products',
  'production',
  'packaging',
  'applications',
]

export const galleryItems: GalleryItem[] = [
  { id: 'p1', title: 'Coconiq Premium Cocopeat Block', image: '/images/product-block-held.jpg', alt: 'Coconiq branded premium cocopeat block 700g', category: 'products' },
  { id: 'p2', title: 'Cocopeat block variants', image: '/images/product-blocks-multiple.jpg', alt: 'Coconiq cocopeat blocks in 9L and 15L sizes', category: 'products' },
  { id: 'p3', title: 'Loose cocopeat in sacks', image: '/images/product-loose-sacks.jpg', alt: 'Loose cocopeat material in open sacks', category: 'products' },

  { id: 'pr1', title: 'Raw coconut husks', image: '/images/production-coconut-husks.jpg', alt: 'Large pile of raw coconut husks as production raw material', category: 'production' },
  { id: 'pr2', title: 'Sorting facility', image: '/images/production-husks-workers.jpg', alt: 'Workers sorting coconut husks at the Coconiq production facility', category: 'production' },
  { id: 'pr3', title: 'Baling machine', image: '/images/production-baling-machine.jpg', alt: 'Coconiq baling machine used to compress cocopeat into export-ready blocks', category: 'production' },
  { id: 'pr4', title: 'Quality moisture check', image: '/images/production-moisture-test.jpg', alt: 'Moisture meter being used to test cocopeat quality', category: 'production' },
  { id: 'pr5', title: 'Facility exterior', image: '/images/production-facility-exterior.jpg', alt: 'Coconiq production facility exterior with packed bags', category: 'production' },
  { id: 'pr6', title: 'Production quality control', image: '/images/production-quality-check.jpg', alt: 'Cocopeat samples in buckets for quality inspection', category: 'production' },

  { id: 'pk1', title: 'Warehouse stock', image: '/images/packaging-warehouse-bags.jpg', alt: 'Rows of filled cocopeat sacks at Coconiq warehouse', category: 'packaging' },
  { id: 'pk2', title: 'Bulk bags ready to ship', image: '/images/packaging-sacks-stacked.jpg', alt: 'Large quantity of packed cocopeat sacks prepared for shipment', category: 'packaging' },
  { id: 'pk3', title: 'Bulk sack storage', image: '/images/packaging-bulk-sacks.jpg', alt: 'Stacked cocopeat sacks in bulk storage ready for distribution', category: 'packaging' },

  { id: 'a1', title: 'Seedling potting', image: '/images/application-potting-seedling.jpg', alt: 'Person potting a seedling using Coconiq cocopeat as growing medium', category: 'applications' },
]

export function getGalleryByCategory(category: GalleryCategory): GalleryItem[] {
  return galleryItems.filter((item) => item.category === category)
}
