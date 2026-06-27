import type { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import { Container } from '@/components/common/Container'
import { CTAButton } from '@/components/common/CTAButton'
import { paths } from '@/routes/paths'
import { siteConfig } from '@/data/siteConfig'
import { useWhatsApp } from '@/hooks/useWhatsApp'

export function ApplicationCta(): ReactElement {
  const { open: openWhatsApp } = useWhatsApp()
  const handleQuote = () =>
    openWhatsApp(
      `Hi ${siteConfig.name}, I'd like to discuss cocopeat for my growing system.`,
    )

  return (
    <section
      aria-labelledby="application-cta-heading"
      className="bg-primary text-primary-foreground"
    >
      <Container
        size="content"
        className="section-y flex flex-col items-center gap-6 text-center"
      >
        <h2
          id="application-cta-heading"
          className="text-balance text-primary-foreground"
        >
          Have a growing system in mind?
        </h2>
        <p className="max-w-xl text-base text-primary-foreground/80 md:text-lg">
          Tell us about your application and we will help you choose the right
          blend, packaging, and quantity for your project.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <CTAButton
            onClick={handleQuote}
            className="bg-surface text-primary shadow-card hover:bg-surface/90"
          >
            Talk to Us
          </CTAButton>
          <CTAButton
            as={Link}
            to={paths.contact}
            variant="secondary"
            className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
          >
            Contact Form
          </CTAButton>
        </div>
      </Container>
    </section>
  )
}
