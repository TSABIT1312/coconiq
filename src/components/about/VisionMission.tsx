import type { ReactElement } from 'react'
import { Container } from '@/components/common/Container'
import { SectionHeading } from '@/components/common/SectionHeading'

const missionItems = [
  'Produce high-quality cocopeat and coco fiber with consistent standards.',
  'Build long-term partnerships through reliable service and transparent communication.',
  'Promote sustainable utilization of coconut resources.',
  'Continuously improve production efficiency and product innovation.',
]

export function VisionMission(): ReactElement {
  return (
    <section aria-labelledby="vision-mission-heading" className="bg-background">
      <Container className="section-y flex flex-col gap-10 md:gap-14">
        <SectionHeading
          eyebrow="Our Direction"
          title={
            <span id="vision-mission-heading">Vision &amp; Mission</span>
          }
          align="center"
          className="mx-auto"
        />
        <div className="grid gap-6 md:grid-cols-2">
          {/* Vision */}
          <div className="flex flex-col gap-4 rounded-lg border border-primary/20 bg-primary/5 p-8">
            <span className="inline-block h-2 w-8 rounded-full bg-primary" />
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Vision
            </p>
            <p className="text-xl font-semibold leading-snug text-foreground md:text-2xl">
              To become a trusted Indonesian manufacturer of sustainable coconut
              growing media, delivering consistent quality and reliable
              partnerships for growers worldwide.
            </p>
          </div>

          {/* Mission */}
          <div className="flex flex-col gap-4 rounded-lg border border-secondary/20 bg-secondary/5 p-8">
            <span className="inline-block h-2 w-8 rounded-full bg-secondary" />
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
              Mission
            </p>
            <ul className="flex flex-col gap-3">
              {missionItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                  <p className="text-base text-muted-foreground">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}
