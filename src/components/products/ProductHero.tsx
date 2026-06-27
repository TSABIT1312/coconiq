import type { ReactElement } from 'react'
import { Container } from '@/components/common/Container'
import { CTAButton } from '@/components/common/CTAButton'
import { MediaPlaceholder } from '@/components/common/MediaPlaceholder'
import { SectionEyebrow } from '@/components/common/SectionEyebrow'
import { useWhatsApp } from '@/hooks/useWhatsApp'
import { siteConfig } from '@/data/siteConfig'

export function ProductHero(): ReactElement {
  const { open: openWhatsApp } = useWhatsApp()
  const handleQuote = () =>
    openWhatsApp(`Hi ${siteConfig.name}, I'd like to request a quote for cocopeat.`)

  return (
    <section aria-labelledby="products-hero-heading" className="bg-background">
      <Container className="grid items-center gap-10 py-16 md:grid-cols-2 md:gap-12 md:py-24 lg:py-28">
        <div className="flex flex-col gap-6">
          <SectionEyebrow>Products</SectionEyebrow>
          <h1 id="products-hero-heading">Premium Cocopeat for Better Growing</h1>
          <p className="max-w-xl text-base text-muted-foreground md:text-lg">
            Sustainably sourced cocopeat designed for hydroponics, gardening,
            nurseries, and modern agriculture — graded for consistent quality
            and built for long-term partnerships.
          </p>
          <div>
            <CTAButton onClick={handleQuote}>Get a Quote</CTAButton>
          </div>
        </div>
        <MediaPlaceholder
          src="/images/product-block-held.jpg"
          alt="Coconiq Premium Cocopeat Block — sustainable growing medium"
          ratio="square"
          rounded="xl"
          className="md:aspect-[4/5]"
        />
      </Container>
    </section>
  )
}
