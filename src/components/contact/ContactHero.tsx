import type { ReactElement } from 'react'
import { Container } from '@/components/common/Container'
import { SectionEyebrow } from '@/components/common/SectionEyebrow'

export function ContactHero(): ReactElement {
  return (
    <section aria-labelledby="contact-hero-heading" className="bg-background">
      <Container className="flex flex-col items-center gap-6 py-16 text-center md:py-24 lg:py-28">
        <SectionEyebrow>Contact</SectionEyebrow>
        <h1 id="contact-hero-heading" className="max-w-3xl">
          Let's talk cocopeat
        </h1>
        <p className="max-w-2xl text-base text-muted-foreground md:text-lg">
          Have a question about our products, pricing, or availability? Reach
          out directly — we're happy to help you find the right solution for
          your growing needs.
        </p>
      </Container>
    </section>
  )
}
