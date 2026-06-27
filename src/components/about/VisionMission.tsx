import type { ReactElement } from 'react'
import { Container } from '@/components/common/Container'
import { SectionHeading } from '@/components/common/SectionHeading'

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
          <div className="flex flex-col gap-4 rounded-lg border border-primary/20 bg-primary/5 p-8">
            <span className="inline-block h-2 w-8 rounded-full bg-primary" />
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Vision
            </p>
            <p className="text-xl font-semibold leading-snug text-foreground md:text-2xl">
              To be the most trusted source of premium cocopeat for growers
              across Southeast Asia.
            </p>
          </div>
          <div className="flex flex-col gap-4 rounded-lg border border-secondary/20 bg-secondary/5 p-8">
            <span className="inline-block h-2 w-8 rounded-full bg-secondary" />
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
              Mission
            </p>
            <p className="text-xl font-semibold leading-snug text-foreground md:text-2xl">
              To deliver consistently high-quality cocopeat that helps growers
              achieve better results — backed by reliable supply, sustainable
              practices, and direct support.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
