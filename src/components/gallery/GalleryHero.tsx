import type { ReactElement } from 'react'
import { Container } from '@/components/common/Container'
import { SectionEyebrow } from '@/components/common/SectionEyebrow'

export function GalleryHero(): ReactElement {
  return (
    <section aria-labelledby="gallery-hero-heading" className="bg-background">
      <Container className="flex flex-col items-center gap-6 py-16 text-center md:py-24 lg:py-28">
        <SectionEyebrow>Gallery</SectionEyebrow>
        <h1 id="gallery-hero-heading" className="max-w-3xl">
          See cocopeat at work
        </h1>
        <p className="max-w-2xl text-base text-muted-foreground md:text-lg">
          Real photos from our production, packaging, and customer applications
          — visual proof of how Coconiq cocopeat performs across growing
          systems.
        </p>
      </Container>
    </section>
  )
}
