import type { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import { Container } from '@/components/common/Container'
import { CTAButton } from '@/components/common/CTAButton'
import { paths } from '@/routes/paths'
import { siteConfig } from '@/data/siteConfig'
import { useWhatsApp } from '@/hooks/useWhatsApp'

export function InquiryCta(): ReactElement {
  const { open: openWhatsApp } = useWhatsApp()
  const handleQuote = () =>
    openWhatsApp(
      `Hi ${siteConfig.name}, I'd like to request a quote for cocopeat.`,
    )

  return (
    <section
      aria-labelledby="product-inquiry-heading"
      className="bg-primary text-primary-foreground"
    >
      <Container
        size="content"
        className="section-y flex flex-col items-center gap-6 text-center"
      >
        <h2
          id="product-inquiry-heading"
          className="text-balance text-primary-foreground"
        >
          Ready to order cocopeat?
        </h2>
        <p className="max-w-xl text-base text-primary-foreground/80 md:text-lg">
          Request a quote and we will follow up with availability, pricing, and
          packaging options tailored to your project.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <CTAButton
            onClick={handleQuote}
            className="bg-surface text-primary shadow-card hover:bg-surface/90"
          >
            Request a Quote
          </CTAButton>
          <CTAButton
            as={Link}
            to={paths.contact}
            variant="secondary"
            className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
          >
            Contact Us
          </CTAButton>
        </div>
      </Container>
    </section>
  )
}
