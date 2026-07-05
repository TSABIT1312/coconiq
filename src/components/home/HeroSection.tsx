import type { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import { Container } from '@/components/common/Container'
import { CTAButton } from '@/components/common/CTAButton'
import { MediaPlaceholder } from '@/components/common/MediaPlaceholder'
import { SectionEyebrow } from '@/components/common/SectionEyebrow'
import { paths } from '@/routes/paths'
import { useWhatsApp } from '@/hooks/useWhatsApp'
import { siteConfig } from '@/data/siteConfig'

export function HeroSection(): ReactElement {
  const { open: openWhatsApp } = useWhatsApp()
  const handleQuote = () =>
    openWhatsApp(`Hi ${siteConfig.name}, I'd like to request a quote.`)

  return (
    <section aria-labelledby="hero-heading" className="bg-background">
      <Container className="grid items-center gap-8 py-14 md:grid-cols-2 md:gap-12 md:py-24 lg:py-28">
        <div className="flex flex-col gap-5 md:gap-6">
          <SectionEyebrow>Premium Cocopeat</SectionEyebrow>
          <h1 id="hero-heading" className="max-w-xl text-[2.4rem] leading-tight md:text-6xl">
            Grow Better with Premium Cocopeat
          </h1>
          <p className="max-w-xl text-[0.98rem] leading-relaxed text-muted-foreground md:text-lg">
            Sustainable growing media designed for better water retention, root
            development, and plant growth — for gardening, hydroponics, and
            modern agriculture.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <CTAButton className="w-full sm:w-auto" onClick={handleQuote}>Get a Quote</CTAButton>
            <CTAButton className="w-full sm:w-auto" as={Link} to={paths.applications} variant="secondary">
              Explore Applications
            </CTAButton>
          </div>
        </div>
        <MediaPlaceholder
          src="/images/product-block-held.jpg"
          alt="Coconiq Premium Cocopeat Block held by hand"
          ratio="square"
          rounded="xl"
          priority
          className="mx-auto w-full max-w-md md:aspect-[4/5]"
        />
      </Container>
    </section>
  )
}
