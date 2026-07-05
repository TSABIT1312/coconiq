import type { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import { Container } from '@/components/common/Container'
import { CTAButton } from '@/components/common/CTAButton'
import { paths } from '@/routes/paths'

export function FinalCtaSection(): ReactElement {
  return (
    <section aria-labelledby="final-cta-heading" className="bg-primary text-primary-foreground">
      <Container size="content" className="section-y flex flex-col items-center gap-6 text-center">
        <h2 id="final-cta-heading" className="text-balance text-primary-foreground">
          Ready to grow better with cocopeat?
        </h2>
        <p className="max-w-xl text-base text-primary-foreground/80 md:text-lg">
          Reach out for product details, pricing, and packaging options.
        </p>
        <CTAButton as={Link} to={paths.contact} className="bg-surface text-primary shadow-card hover:bg-surface/90">
          Contact Us
        </CTAButton>
      </Container>
    </section>
  )
}
