import type { ReactElement } from 'react'
import { usePageMeta } from '@/hooks/usePageMeta'
import {
  ContactFaq,
  ContactForm,
  ContactHero,
  ContactInfo,
  MapEmbed,
  WhatsAppCta,
} from '@/components/contact'

export function ContactPage(): ReactElement {
  usePageMeta({
    title: 'Contact | Coconiq',
    description:
      'Get in touch with Coconiq. Ask about product availability, pricing, and packaging options via WhatsApp, email, or our contact form.',
  })

  return (
    <>
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <MapEmbed />
      <ContactFaq />
      <WhatsAppCta />
    </>
  )
}
