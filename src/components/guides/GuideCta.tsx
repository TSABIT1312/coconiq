import type { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import { Container } from '@/components/common/Container'
import { CTAButton } from '@/components/common/CTAButton'
import { paths } from '@/routes/paths'
import { siteConfig } from '@/data/siteConfig'
import { useWhatsApp } from '@/hooks/useWhatsApp'

export function GuideCta(): ReactElement {
  const { open: openWhatsApp } = useWhatsApp()
  const handleAsk = () =>
    openWhatsApp(
      `Hi ${siteConfig.name}, I have a question about using cocopeat.`,
    )

  return (
    <section
      aria-labelledby="guide-cta-heading"
      className="bg-primary text-primary-foreground"
    >
      <Container
        size="content"
        className="section-y flex flex-col items-center gap-6 text-center"
      >
        <h2
          id="guide-cta-heading"
          className="text-balance text-primary-foreground"
        >
          Still have questions about cocopeat?
        </h2>
        <p className="max-w-xl text-base text-primary-foreground/80 md:text-lg">
          Reach out and we will help you choose the right product, blend, and
          quantity for your specific growing system.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <CTAButton
            onClick={handleAsk}
            className="bg-surface text-primary shadow-card hover:bg-surface/90"
          >
            Ask on WhatsApp
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
