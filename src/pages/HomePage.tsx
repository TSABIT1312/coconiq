import type { ReactElement } from 'react'
import { usePageMeta } from '@/hooks/usePageMeta'
import {
  AboutCocopeatSection,
  ApplicationsPreviewSection,
  BenefitsSection,
  FaqSection,
  FeaturedProductSection,
  FinalCtaSection,
  GalleryPreviewSection,
  GuidesPreviewSection,
  HeroSection,
  WhyChooseSection,
} from '@/components/home'

export function HomePage(): ReactElement {
  usePageMeta({
    title: 'Coconiq | Premium Cocopeat Supplier',
    description:
      'Premium cocopeat designed to improve water retention, root development, and plant growth — for home gardening, hydroponics, and commercial agriculture.',
  })

  return (
    <>
      <HeroSection />
      <AboutCocopeatSection />
      <BenefitsSection />
      <ApplicationsPreviewSection />
      <FeaturedProductSection />
      <WhyChooseSection />
      <GalleryPreviewSection />
      <GuidesPreviewSection />
      <FaqSection />
      <FinalCtaSection />
    </>
  )
}
