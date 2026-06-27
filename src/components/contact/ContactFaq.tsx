import type { ReactElement } from 'react'
import { Container } from '@/components/common/Container'
import { FaqList } from '@/components/common/FaqList'
import { SectionHeading } from '@/components/common/SectionHeading'
import { faqs } from '@/data/faqs'

export function ContactFaq(): ReactElement {
  return (
    <section aria-labelledby="contact-faq-heading" className="bg-background">
      <Container className="section-y flex flex-col gap-10 md:gap-14">
        <SectionHeading
          eyebrow="FAQ"
          title={<span id="contact-faq-heading">Common questions</span>}
          lead="Quick answers before you reach out."
          align="center"
          className="mx-auto"
        />
        <div className="mx-auto w-full max-w-3xl">
          <FaqList items={faqs} />
        </div>
      </Container>
    </section>
  )
}
