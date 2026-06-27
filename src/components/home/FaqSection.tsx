import type { ReactElement } from 'react'
import { Container } from '@/components/common/Container'
import { FaqList } from '@/components/common/FaqList'
import { SectionHeading } from '@/components/common/SectionHeading'
import { faqs } from '@/data/faqs'

export function FaqSection(): ReactElement {
  return (
    <section aria-labelledby="faq-heading" className="bg-background">
      <Container size="content" className="section-y flex flex-col gap-10">
        <SectionHeading
          eyebrow="FAQ"
          title={<span id="faq-heading">Common questions</span>}
          lead="Answers to questions we hear most from new customers."
          align="center"
          className="mx-auto"
        />
        <FaqList items={faqs} />
      </Container>
    </section>
  )
}
