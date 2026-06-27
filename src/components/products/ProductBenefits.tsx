import type { ReactElement } from 'react'
import type { FeatureItem } from '@/types/feature'
import { Card } from '@/components/common/Card'
import { Container } from '@/components/common/Container'
import { Icon } from '@/components/common/Icon'
import { SectionHeading } from '@/components/common/SectionHeading'
import { benefits as defaultBenefits } from '@/data/benefits'

export interface ProductBenefitsProps {
  items?: FeatureItem[]
}

export function ProductBenefits({
  items = defaultBenefits,
}: ProductBenefitsProps): ReactElement {
  return (
    <section aria-labelledby="product-benefits-heading" className="bg-surface">
      <Container className="section-y flex flex-col gap-10 md:gap-14">
        <SectionHeading
          eyebrow="Benefits"
          title={<span id="product-benefits-heading">What makes cocopeat work</span>}
          lead="Performance characteristics that translate to healthier plants and better yields."
        />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((benefit) => (
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
