import type { ReactElement } from 'react'
import { Card } from '@/components/common/Card'
import { Container } from '@/components/common/Container'
import { Icon } from '@/components/common/Icon'
import type { IconName } from '@/components/common/Icon'
import { SectionHeading } from '@/components/common/SectionHeading'

interface QualityPillar {
  id: string
  icon: IconName
  title: string
  description: string
}

const pillars: QualityPillar[] = [
  {
    id: 'raw-materials',
    icon: 'sprout',
    title: 'Carefully Selected Raw Materials',
    description:
      'Coconut husks are sourced from trusted regional suppliers and evaluated for fibre quality before processing begins.',
  },
  {
    id: 'low-ec',
    icon: 'flask',
    title: 'Low EC Processing',
    description:
      'Each batch is washed and buffered to achieve low electrical conductivity, preventing salt stress on roots.',
  },
  {
    id: 'consistency',
    icon: 'shield-check',
    title: 'Batch Consistency Checks',
    description:
      'Particle size, moisture content, and EC are verified before packaging so every order meets the same standard.',
  },
  {
    id: 'packaging',
    icon: 'leaf',
    title: 'Responsible Packaging',
    description:
      'Products are compressed and labelled to preserve quality during transit while minimising packaging waste.',
  },
]

export function CommitmentToQuality(): ReactElement {
  return (
    <section aria-labelledby="quality-heading" className="bg-surface">
      <Container className="section-y flex flex-col gap-10 md:gap-14">
        <SectionHeading
          eyebrow="Our Standards"
          title={<span id="quality-heading">Quality you can count on</span>}
          lead="Every step of our process is designed to protect the integrity of the product that reaches your farm or garden."
          align="center"
          className="mx-auto"
        />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => (
            <Card key={pillar.id} as="li">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary">
                <Icon name={pillar.icon} className="h-6 w-6" />
              </span>
              <div>
                <h3 className="text-lg font-semibold">{pillar.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {pillar.description}
                </p>
              </div>
            </Card>
          ))}
        </ul>
      </Container>
    </section>
  )
}
