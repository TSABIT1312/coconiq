import type { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import { Container } from '@/components/common/Container'
import { CTAButton } from '@/components/common/CTAButton'
import { paths } from '@/routes/paths'
import { siteConfig } from '@/data/siteConfig'
import { useWhatsApp } from '@/hooks/useWhatsApp'

export function AboutCta(): ReactElement {
  const { open: openWhatsApp } = useWhatsApp()
  const handleInquire = () =>
    openWhatsApp(
      `Hi ${siteConfig.name}, I'd like to learn more about your cocopeat products.`,
    )

  return (
    <section
      aria-labelledby="about-cta-heading"
      className="bg-primary text-primary-foreground"
    >
      <Container
        size="content"
        className="section-y flex flex-col items-center gap-6 text-center"
      >
        <h2
          id="about-cta-heading"
          className="text-balance text-primary-foreground"
        >
          Ready to partner with Coconiq?
        </h2>
        <p className="max-w-xl text-base text-primary-foreground/80 md:text-lg">
          Whether you need a trial order or a long-term supply arrangement, we
          are ready to talk. Reach out and let us find the right solution for
          your growing operation.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <CTAButton
            onClick={handleInquire}
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
