import type { ReactElement } from 'react'
import { usePageMeta } from '@/hooks/usePageMeta'
import {
  ProductApplications,
  ProductBenefits,
  ProductGallery,
  ProductHero,
  ProductOverview,
} from '@/components/products'

export function ProductsPage(): ReactElement {
  usePageMeta({
    title: 'Cocopeat Products | Coconiq',
    description:
      'Browse Coconiq\'s premium cocopeat products — sustainably processed growing media for hydroponics, nurseries, and commercial farming.',
  })

  return (
    <>
      <ProductHero />
      <ProductOverview />
      <ProductBenefits />
      <ProductApplications />
      <ProductGallery />
    </>
  )
}
