import { useState } from 'react'
import type { ChangeEvent, FormEvent, ReactElement } from 'react'
import { MessageCircle } from 'lucide-react'
import { CTAButton } from '@/components/common/CTAButton'
import { Container } from '@/components/common/Container'
import { SectionHeading } from '@/components/common/SectionHeading'
import { siteConfig } from '@/data/siteConfig'
import { useWhatsApp } from '@/hooks/useWhatsApp'

const fieldClass =
  'block w-full rounded-md border border-border bg-background px-4 py-3 text-base text-foreground placeholder:text-muted-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'

const labelClass = 'block text-sm font-medium text-foreground'

interface FormState {
  name: string
  email: string
  phone: string
  message: string
}

const emptyForm: FormState = { name: '', email: '', phone: '', message: '' }

export function ContactForm(): ReactElement {
  const [form, setForm] = useState<FormState>(emptyForm)
  const { open: openWhatsApp } = useWhatsApp()

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const lines = [
      `Hi ${siteConfig.name}! My name is ${form.name}.`,
      ``,
      `Email: ${form.email}`,
      form.phone ? `Phone: ${form.phone}` : null,
      ``,
      `Message:`,
      form.message,
    ]
      .filter((line) => line !== null)
      .join('\n')
    openWhatsApp(lines)
  }

  return (
    <section aria-labelledby="contact-form-heading" className="bg-background">
      <Container className="section-y flex flex-col gap-10 md:gap-14">
        <SectionHeading
          eyebrow="Send a Message"
          title={<span id="contact-form-heading">Tell us what you need</span>}
          lead="Fill in your details and we'll open a WhatsApp chat with your message pre-filled — no copy-pasting required."
          align="center"
          className="mx-auto"
        />

        <form
          onSubmit={handleSubmit}
          noValidate
          aria-label="Contact form"
          className="mx-auto w-full max-w-2xl"
        >
          <div className="flex flex-col gap-5">
            <div className="grid gap-5 md:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="contact-name" className={labelClass}>
                  Name{' '}
                  <span aria-hidden className="text-primary">
                    *
                  </span>
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Your full name"
                  value={form.name}
                  onChange={handleChange}
                  className={fieldClass}
                  aria-required="true"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="contact-email" className={labelClass}>
                  Email{' '}
                  <span aria-hidden className="text-primary">
                    *
                  </span>
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange}
                  className={fieldClass}
                  aria-required="true"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="contact-phone" className={labelClass}>
                Phone{' '}
                <span className="text-sm font-normal text-muted-foreground">
                  (optional)
                </span>
              </label>
              <input
                id="contact-phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                placeholder="+62 812 3456 7890"
                value={form.phone}
                onChange={handleChange}
                className={fieldClass}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="contact-message" className={labelClass}>
                Message{' '}
                <span aria-hidden className="text-primary">
                  *
                </span>
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={5}
                placeholder="Tell us about your project, the quantity you need, or any questions you have…"
                value={form.message}
                onChange={handleChange}
                className={`${fieldClass} resize-none`}
                aria-required="true"
              />
            </div>

            <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-muted-foreground">
                <span aria-hidden className="text-primary">
                  *
                </span>{' '}
                Required fields
              </p>
              <CTAButton type="submit" size="lg" className="gap-2 sm:w-auto">
                <MessageCircle aria-hidden className="h-5 w-5" />
                Send via WhatsApp
              </CTAButton>
            </div>
          </div>
        </form>
      </Container>
    </section>
  )
}
