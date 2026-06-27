import type { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import { Container } from '@/components/common/Container'
import { CTAButton } from '@/components/common/CTAButton'
import { paths } from '@/routes/paths'
import { siteConfig } from '@/data/siteConfig'
import { useWhatsApp } from '@/hooks/useWhatsApp'

export function WhatsAppCta(): ReactElement {
  const { open: openWhatsApp } = useWhatsApp()
  const handleOrder = () =>
    openWhatsApp(
      `Hi ${siteConfig.name}, I'd like to inquire about placing an order for cocopeat.`,
    )

  return (
    <section
      aria-labelledby="contact-cta-heading"
      className="bg-primary text-primary-foreground"
    >
      <Container
        size="content"
        className="section-y flex flex-col items-center gap-6 text-center"
      >
        <h2
          id="contact-cta-heading"
          className="text-balance text-primary-foreground"
        >
          Ready to place an order?
        </h2>
        <p className="max-w-xl text-base text-primary-foreground/80 md:text-lg">
          Skip the form and talk to us directly. We'll help you choose the right
          product, quantity, and packaging for your operation.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <CTAButton
            onClick={handleOrder}
            className="bg-surface text-primary shadow-card hover:bg-surface/90"
          >
            Order via WhatsApp
          </CTAButton>
          <CTAButton
            as={Link}
            to={paths.products}
            variant="secondary"
            className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
          >
            Browse Products
          </CTAButton>
        </div>
      </Container>
    </section>
  )
}
