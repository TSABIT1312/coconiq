import type { ReactElement } from 'react'
import { usePageMeta } from '@/hooks/usePageMeta'
import {
  AboutCta,
  AboutHero,
  AboutWhyChoose,
  CommitmentToQuality,
  CompanyStory,
  VisionMission,
  ProductionProcess,
} from '@/components/about'

export function AboutPage(): ReactElement {
  usePageMeta({
    title: 'About Us | Coconiq',
    description:
      'Learn about Coconiq — a dedicated cocopeat supplier committed to quality, consistent supply, and sustainable growing media.',
  })

  return (
    <>
      <AboutHero />
      <CompanyStory />
      <VisionMission />
      <ProductionProcess />
      <CommitmentToQuality />
      <AboutWhyChoose />
      <AboutCta />
    </>
  )
}
