import type { ReactElement } from 'react'
import { usePageMeta } from '@/hooks/usePageMeta'
import {
  FeaturedArticle,
  GuideCta,
  GuideHero,
  GuideList,
  RelatedGuides,
} from '@/components/guides'
import { getFeaturedGuide, guides } from '@/data/guides'

export function GuidesPage(): ReactElement {
  usePageMeta({
    title: 'Cocopeat Guides | Coconiq',
    description:
      'Practical guides and articles about cocopeat for home gardeners, hydroponic growers, and commercial farmers.',
  })

  const featured = getFeaturedGuide()
  const rest = featured
    ? guides.filter((guide) => guide.id !== featured.id)
    : guides

  return (
    <>
      <GuideHero />
      <FeaturedArticle guide={featured} />
      <GuideList
        items={rest}
        eyebrow="Articles"
        title="All articles"
        lead="A growing library of educational, practical, and comparison guides."
        background="background"
      />
      <RelatedGuides />
      <GuideCta />
    </>
  )
}
