import type { ReactElement } from 'react'
import { Container } from '@/components/common/Container'
import { MediaPlaceholder } from '@/components/common/MediaPlaceholder'
import { SectionEyebrow } from '@/components/common/SectionEyebrow'

export function ApplicationHero(): ReactElement {
  return (
    <section
      aria-labelledby="applications-hero-heading"
      className="bg-background"
    >
      <Container className="grid items-center gap-10 py-16 md:grid-cols-2 md:gap-12 md:py-24 lg:py-28">
        <div className="flex flex-col gap-6">
          <SectionEyebrow>Applications</SectionEyebrow>
          <h1 id="applications-hero-heading">Real-world uses of cocopeat</h1>
          <p className="max-w-xl text-base text-muted-foreground md:text-lg">
            From hobby gardens to commercial farms, cocopeat adapts to a wide
            range of growing systems. Learn how each category benefits from
            premium cocopeat — and how to use it well.
          </p>
        </div>
        <MediaPlaceholder
          src="/images/application-potting-seedling.jpg"
          alt="Potting seedlings using Coconiq cocopeat as growing medium"
          ratio="square"
          rounded="xl"
          className="md:aspect-[4/5]"
        />
      </Container>
    </section>
  )
}
