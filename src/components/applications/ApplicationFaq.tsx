import type { ReactElement } from 'react'
import { Container } from '@/components/common/Container'
import { FaqList } from '@/components/common/FaqList'
import { SectionHeading } from '@/components/common/SectionHeading'
import { faqs } from '@/data/faqs'

export function ApplicationFaq(): ReactElement {
  return (
    <section
      aria-labelledby="application-faq-heading"
      className="bg-surface"
    >
      <Container size="content" className="section-y flex flex-col gap-10">
        <SectionHeading
          eyebrow="FAQ"
          title={
            <span id="application-faq-heading">
              Questions about using cocopeat
            </span>
          }
          lead="Practical answers about applying cocopeat across home gardens, hydroponics, nurseries, and field agriculture."
          align="center"
          className="mx-auto"
        />
        <FaqList items={faqs} />
      </Container>
    </section>
  )
}
