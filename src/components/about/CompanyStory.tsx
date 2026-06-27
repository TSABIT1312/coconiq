import type { ReactElement } from 'react'
import { Container } from '@/components/common/Container'
import { MediaPlaceholder } from '@/components/common/MediaPlaceholder'
import { SectionEyebrow } from '@/components/common/SectionEyebrow'

export function CompanyStory(): ReactElement {
  return (
    <section aria-labelledby="story-heading" className="bg-surface">
      <Container className="section-y grid items-center gap-10 md:grid-cols-2 md:gap-14">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <SectionEyebrow>Our Story</SectionEyebrow>
            <h2 id="story-heading">
              From coconut husks to trusted growing media
            </h2>
          </div>
          <div className="flex flex-col gap-4 text-base text-muted-foreground md:text-lg">
            <p>
              Coconiq was built around a simple observation: cocopeat is one of
              the most versatile growing substrates available, yet finding a
              reliable supplier with consistent quality is harder than it should
              be. We set out to change that — starting with careful raw material
              selection and a processing approach that prioritises plant health
              over volume.
            </p>
            <p>
              Today we supply cocopeat to home gardeners, hydroponic
              cultivators, nurseries, and commercial farms. Every order is
              backed by the same commitment to quality that shaped us from the
              start: low EC, clean fibre, and support you can actually reach.
            </p>
          </div>
        </div>
        <MediaPlaceholder
          src="/images/production-husks-workers.jpg"
          alt="Coconiq production facility with workers sorting coconut husks"
          ratio="video"
          rounded="xl"
          className="md:aspect-[4/3]"
        />
      </Container>
    </section>
  )
}
