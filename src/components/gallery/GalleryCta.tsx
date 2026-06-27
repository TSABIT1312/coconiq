import type { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import { Container } from '@/components/common/Container'
import { CTAButton } from '@/components/common/CTAButton'
import { paths } from '@/routes/paths'
import { siteConfig } from '@/data/siteConfig'
import { useWhatsApp } from '@/hooks/useWhatsApp'

export function GalleryCta(): ReactElement {
  const { open: openWhatsApp } = useWhatsApp()
  const handleVisit = () =>
    openWhatsApp(
      `Hi ${siteConfig.name}, I'd like to learn more about your production and visit if possible.`,
    )

  return (
    <section
      aria-labelledby="gallery-cta-heading"
      className="bg-primary text-primary-foreground"
    >
      <Container
        size="content"
        className="section-y flex flex-col items-center gap-6 text-center"
      >
        <h2
          id="gallery-cta-heading"
          className="text-balance text-primary-foreground"
        >
          See our process up close
        </h2>
        <p className="max-w-xl text-base text-primary-foreground/80 md:text-lg">
          Want more photos, references, or to schedule a visit? Reach out and
          we will share documentation tailored to your project.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <CTAButton
            onClick={handleVisit}
            className="bg-surface text-primary shadow-card hover:bg-surface/90"
          >
            Request More Photos
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
