import type { ReactElement } from 'react'
import { Card } from '@/components/common/Card'
import { Container } from '@/components/common/Container'
import { Icon } from '@/components/common/Icon'
import { SectionHeading } from '@/components/common/SectionHeading'
import { benefits } from '@/data/benefits'

export function BenefitsSection(): ReactElement {
  return (
    <section aria-labelledby="benefits-heading" className="bg-background">
      <Container className="section-y flex flex-col gap-10 md:gap-14">
        <SectionHeading
          eyebrow="Benefits"
          title={<span id="benefits-heading">Why cocopeat works</span>}
          lead="A growing medium that holds moisture, supports healthy roots, and reduces environmental impact."
        />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <Card key={benefit.id} as="li" interactive>
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary">
                <Icon name={benefit.icon} className="h-6 w-6" />
              </span>
              <div>
                <h3 className="text-lg font-semibold">{benefit.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            </Card>
          ))}
        </ul>
      </Container>
    </section>
  )
}
