import type { ReactElement } from 'react'
import { Container } from '@/components/common/Container'
import { SectionHeading } from '@/components/common/SectionHeading'

interface ProcessStep {
  step: number
  title: string
  description: string
}

const steps: ProcessStep[] = [
  {
    step: 1,
    title: 'Raw Material Selection',
    description: 'We carefully select high-quality coconut husks to ensure premium product performance.'
  },
  {
    step: 2,
    title: 'Cleaning',
    description: 'The husks are thoroughly cleaned to remove impurities and unwanted materials.'
  },
  {
    step: 3,
    title: 'Fiber Extraction',
    description: 'The coconut husks are processed to separate the coco fiber from the coco peat.'
  },
  {
    step: 4,
    title: 'Washing - EC Reduction Process',
    description: 'Cocopeat is carefully washed to reduce excess salts and tannins, resulting in a low-EC, high-quality growing medium suitable for healthy plant growth.'
  },
  {
    step: 5,
    title: 'Drying',
    description: 'Both coco peat and coco fiber are naturally sun-dried or mechanically dried to achieve the desired moisture level.'
  },
  {
    step: 6,
    title: 'Screening',
    description: 'Coco peat is screened to obtain a uniform particle size and remove excess fibers and dust.'
  },
  {
    step: 7,
    title: 'Compression & Packaging',
    description: 'Depending on customer requirements, the products are compressed into blocks, packed as loose cocopeat, or baled as coco fiber for efficient storage and export.'
  },
  {
    step: 8,
    title: 'Quality Control',
    description: 'Every batch undergoes strict quality inspections to ensure consistent quality, cleanliness, and compliance with international standards before shipment.'
  }
]

export function ProductionProcess(): ReactElement {
  return (
    <section aria-labelledby="production-heading" className="bg-background">
      <Container className="section-y flex flex-col gap-10 md:gap-14">
        <SectionHeading
          eyebrow="Our Workflow"
          title={<span id="production-heading">Production Process</span>}
          lead="Every batch of Coconiq is processed with strict quality control from raw material to final container loading."
          align="center"
          className="mx-auto"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div
              key={s.step}
              className="flex flex-col gap-3 rounded-lg border border-border bg-surface p-6"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-primary">Step {s.step}</span>
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                  0{s.step}
                </span>
              </div>
              <h3 className="text-base font-semibold">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
