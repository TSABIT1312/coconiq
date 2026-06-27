import type { ReactElement } from 'react'
import type { IconName } from '@/components/common/Icon'
import { Card } from '@/components/common/Card'
import { Container } from '@/components/common/Container'
import { Icon } from '@/components/common/Icon'
import { SectionHeading } from '@/components/common/SectionHeading'

interface Step {
  id: string
  step: number
  icon: IconName
  title: string
  description: string
}

const steps: Step[] = [
  {
    id: 'rehydrate',
    step: 1,
    icon: 'droplets',
    title: 'Rehydrate',
    description:
      'Soak the compressed cocopeat block in clean water until it expands fully — usually 15 to 30 minutes.',
  },
  {
    id: 'mix',
    step: 2,
    icon: 'flask',
    title: 'Mix',
    description:
      'Blend with compost, perlite, or other media depending on your growing system and target structure.',
  },
  {
    id: 'apply',
    step: 3,
    icon: 'sprout',
    title: 'Apply',
    description:
      'Use directly as a substrate, top off existing soil, or fill containers and hydroponic slabs.',
  },
  {
    id: 'monitor',
    step: 4,
    icon: 'shield-check',
    title: 'Monitor',
    description:
      'Check moisture and EC regularly. Adjust watering and nutrient solution to match plant needs.',
  },
]

export function HowToUse(): ReactElement {
  return (
    <section
      aria-labelledby="how-to-use-heading"
      className="bg-background"
    >
      <Container className="section-y flex flex-col gap-10 md:gap-14">
        <SectionHeading
          eyebrow="How to Use"
          title={<span id="how-to-use-heading">How to use cocopeat</span>}
          lead="Four simple steps to get the most out of premium cocopeat in any growing system."
          align="center"
          className="mx-auto"
        />
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <Card key={step.id} as="li" interactive>
              <div className="flex items-center justify-between">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <Icon name={step.icon} className="h-6 w-6" />
                </span>
                <span className="font-heading text-3xl font-bold text-primary/30">
                  0{step.step}
                </span>
              </div>
              <div>
                <h3 className="text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </Card>
          ))}
        </ol>
      </Container>
    </section>
  )
}
