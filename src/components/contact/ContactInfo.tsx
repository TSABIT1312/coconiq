import type { ReactElement } from 'react'
import { Mail, MapPin, MessageCircle } from 'lucide-react'
import { Card } from '@/components/common/Card'
import { Container } from '@/components/common/Container'
import { CTAButton } from '@/components/common/CTAButton'
import { SectionHeading } from '@/components/common/SectionHeading'
import { siteConfig } from '@/data/siteConfig'

export function ContactInfo(): ReactElement {
  const waHref = siteConfig.contact.whatsappNumber
    ? `https://wa.me/${siteConfig.contact.whatsappNumber}`
    : undefined

  return (
    <section aria-labelledby="contact-info-heading" className="bg-surface">
      <Container className="section-y flex flex-col gap-10 md:gap-14">
        <SectionHeading
          eyebrow="Get In Touch"
          title={<span id="contact-info-heading">Reach out directly</span>}
          lead="We respond to every inquiry personally. Choose the channel that works best for you."
          align="center"
          className="mx-auto"
        />
        <ul className="grid gap-4 md:grid-cols-3">
          <Card as="li" className="items-start gap-5">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary">
              <MessageCircle aria-hidden className="h-6 w-6" />
            </span>
            <div className="flex flex-1 flex-col gap-2">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                WhatsApp
              </p>
              <p className="text-base font-medium text-foreground">
                {siteConfig.contact.whatsappNumber || '—'}
              </p>
              <p className="text-sm text-muted-foreground">
                Fastest way to reach us. We reply during business hours.
              </p>
            </div>
            {waHref && (
              <CTAButton
                as="a"
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                size="sm"
                className="w-full justify-center"
              >
                Chat on WhatsApp
              </CTAButton>
            )}
          </Card>

          <Card as="li" className="items-start gap-5">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary">
              <Mail aria-hidden className="h-6 w-6" />
            </span>
            <div className="flex flex-1 flex-col gap-2">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Email
              </p>
              <p className="text-base font-medium text-foreground">
                {siteConfig.contact.email || '—'}
              </p>
              <p className="text-sm text-muted-foreground">
                For detailed inquiries, quotes, or documentation requests.
              </p>
            </div>
            {siteConfig.contact.email && (
              <CTAButton
                as="a"
                href={`mailto:${siteConfig.contact.email}`}
                variant="secondary"
                size="sm"
                className="w-full justify-center"
              >
                Send an Email
              </CTAButton>
            )}
          </Card>

          <Card as="li" className="items-start gap-5">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary">
              <MapPin aria-hidden className="h-6 w-6" />
            </span>
            <div className="flex flex-1 flex-col gap-2">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Address
              </p>
              <p className="text-base font-medium text-foreground">
                {siteConfig.contact.address || '—'}
              </p>
              <p className="text-sm text-muted-foreground">
                Processing and dispatch facility. Visits by appointment only.
              </p>
            </div>
          </Card>
        </ul>
      </Container>
    </section>
  )
}
