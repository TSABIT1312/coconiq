import type { ReactElement } from 'react'
import { Container } from '@/components/common/Container'
import { SectionEyebrow } from '@/components/common/SectionEyebrow'

export function AboutHero(): ReactElement {
  return (
    <section aria-labelledby="about-hero-heading" className="bg-background">
      <Container className="flex flex-col items-center gap-6 py-16 text-center md:py-24 lg:py-28">
        <SectionEyebrow>About Coconiq</SectionEyebrow>
        <h1 id="about-hero-heading" className="max-w-3xl">
          Growing Better, Together
        </h1>
        <p className="max-w-2xl text-base text-muted-foreground md:text-lg">
          We are a dedicated cocopeat supplier focused on quality, consistency,
          and long-term partnerships with growers across sectors — from home
          gardens to commercial farms.
        </p>
      </Container>
    </section>
  )
}
