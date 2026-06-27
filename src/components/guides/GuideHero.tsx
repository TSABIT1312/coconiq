import type { ReactElement } from 'react'
import { Container } from '@/components/common/Container'
import { SectionEyebrow } from '@/components/common/SectionEyebrow'

export function GuideHero(): ReactElement {
  return (
    <section aria-labelledby="guides-hero-heading" className="bg-background">
      <Container className="flex flex-col items-center gap-6 py-16 text-center md:py-24 lg:py-28">
        <SectionEyebrow>Guides</SectionEyebrow>
        <h1 id="guides-hero-heading" className="max-w-3xl">
          Learn about cocopeat
        </h1>
        <p className="max-w-2xl text-base text-muted-foreground md:text-lg">
          Practical articles and educational guides for home gardeners,
          hydroponic growers, and commercial farmers — written to help you get
          the most out of every grow.
        </p>
      </Container>
    </section>
  )
}
