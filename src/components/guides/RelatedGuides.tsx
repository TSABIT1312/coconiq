import type { ReactElement } from 'react'
import { Card } from '@/components/common/Card'
import { Container } from '@/components/common/Container'
import { SectionHeading } from '@/components/common/SectionHeading'

interface Topic {
  id: string
  title: string
  description: string
}

const topics: Topic[] = [
  {
    id: 'growing-media',
    title: 'Growing Media Basics',
    description:
      'Substrate fundamentals — how different media affect water retention, root health, and nutrition.',
  },
  {
    id: 'hydroponics',
    title: 'Hydroponic Cultivation',
    description:
      'Systems, substrates, and nutrient management for soil-less growing — from beginner kits to commercial setups.',
  },
  {
    id: 'sustainable-agriculture',
    title: 'Sustainable Agriculture',
    description:
      'Practices and inputs that reduce environmental impact while keeping farms productive.',
  },
  {
    id: 'soil-amendments',
    title: 'Soil Health & Amendments',
    description:
      'How to improve soil structure, drainage, and biology with renewable amendments like cocopeat.',
  },
  {
    id: 'plant-nutrition',
    title: 'Plant Nutrition',
    description:
      'Macro and micronutrients, EC and pH targets, and how growing media influence uptake.',
  },
  {
    id: 'container-gardening',
    title: 'Container Gardening',
    description:
      'Practical tips for pots, raised beds, and small-space growing — substrate choices and care routines.',
  },
]

export function RelatedGuides(): ReactElement {
  return (
    <section
      aria-labelledby="related-topics-heading"
      className="bg-background"
    >
      <Container className="section-y flex flex-col gap-10 md:gap-14">
        <SectionHeading
          eyebrow="Related Topics"
          title={
            <span id="related-topics-heading">Explore more growing topics</span>
          }
          lead="Subjects we will cover in upcoming guides. Have a topic you'd like us to write about? Let us know."
        />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic) => (
            <Card key={topic.id} as="li" interactive>
              <h3 className="text-lg font-semibold">{topic.title}</h3>
              <p className="text-sm text-muted-foreground">
                {topic.description}
              </p>
            </Card>
          ))}
        </ul>
      </Container>
    </section>
  )
}
