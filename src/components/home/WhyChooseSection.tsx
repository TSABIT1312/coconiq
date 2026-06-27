import type { ReactElement } from 'react'
import { Card } from '@/components/common/Card'
import { Container } from '@/components/common/Container'
import { Icon } from '@/components/common/Icon'
import { SectionHeading } from '@/components/common/SectionHeading'
import { whyChooseReasons } from '@/data/whyChoose'

export function WhyChooseSection(): ReactElement {
  return (
    <section aria-labelledby="why-heading" className="bg-surface">
      <Container className="section-y flex flex-col gap-10 md:gap-14">
        <SectionHeading
          eyebrow="Why Coconiq"
          title={<span id="why-heading">Reliable cocopeat, every order</span>}
          lead="Quality raw materials, sustainable production, and direct support — built around long-term partnerships."
          align="center"
          className="mx-auto"
        />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseReasons.map((reason) => (
            <Card key={reason.id} as="li" interactive>
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-secondary/10 text-secondary">
                <Icon name={reason.icon} className="h-6 w-6" />
              </span>
              <div>
                <h3 className="text-lg font-semibold">{reason.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {reason.description}
                </p>
              </div>
            </Card>
          ))}
        </ul>
      </Container>
    </section>
  )
}
