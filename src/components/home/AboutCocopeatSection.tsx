import type { ReactElement } from 'react'
import { Container } from '@/components/common/Container'
import { MediaPlaceholder } from '@/components/common/MediaPlaceholder'
import { SectionHeading } from '@/components/common/SectionHeading'

export function AboutCocopeatSection(): ReactElement {
  return (
    <section aria-labelledby="about-heading" className="bg-surface">
      <Container className="section-y grid gap-8 md:grid-cols-2 md:items-center md:gap-14">
        <div className="grid grid-cols-2 gap-3 md:gap-4">
          <MediaPlaceholder
            src="/images/product-blocks-multiple.jpg"
            alt="Coconiq branded cocopeat blocks in multiple sizes"
            ratio="square"
            rounded="lg"
            className="shadow-card"
          />
          <MediaPlaceholder
            src="/images/product-loose-sacks.jpg"
            alt="Loose cocopeat material in sacks"
            ratio="square"
            rounded="lg"
            className="mt-4 shadow-card md:mt-8"
          />
        </div>
        <SectionHeading
          eyebrow="What is Cocopeat?"
          title={<span id="about-heading">Natural growing media from coconut</span>}
          lead="Cocopeat is a renewable growing medium made from coconut husk fibers. It retains moisture, supports strong root development, and offers a sustainable alternative to peat for modern agriculture."
        />
      </Container>
    </section>
  )
}
