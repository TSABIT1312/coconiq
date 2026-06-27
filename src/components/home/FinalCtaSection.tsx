import type { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import { Container } from '@/components/common/Container'
import { CTAButton } from '@/components/common/CTAButton'
import { paths } from '@/routes/paths'
import { siteConfig } from '@/data/siteConfig'
import { useWhatsApp } from '@/hooks/useWhatsApp'

export function FinalCtaSection(): ReactElement {
  const { open: openWhatsApp } = useWhatsApp()
  const handleWhatsApp = () =>
    openWhatsApp(`Hi ${siteConfig.name}, I'd like to learn more about your products.`)

  return (
    <section aria-labelledby="final-cta-heading" className="bg-primary text-primary-foreground">
      <Container size="content" className="section-y flex flex-col items-center gap-6 text-center">
        <h2 id="final-cta-heading" className="text-balance text-primary-foreground">
          Ready to grow better with cocopeat?
        </h2>
        <p className="max-w-xl text-base text-primary-foreground/80 md:text-lg">
          Reach out for product details, pricing, and packaging options. We are
          here to help you get started.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <CTAButton
            as={Link}
            to={paths.contact}
            className="bg-surface text-primary shadow-card hover:bg-surface/90"
          >
            Contact Us
          </CTAButton>
          <CTAButton
            variant="secondary"
            onClick={handleWhatsApp}
            className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
          >
            WhatsApp Us
          </CTAButton>
        </div>
      </Container>
    </section>
  )
}
