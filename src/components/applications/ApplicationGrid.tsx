import type { ReactElement } from 'react'
import type { Application } from '@/types/application'
import { Container } from '@/components/common/Container'
import { SectionHeading } from '@/components/common/SectionHeading'
import { applications as defaultApplications } from '@/data/applications'
import { ApplicationCard } from './ApplicationCard'

export interface ApplicationGridProps {
  items?: Application[]
}

export function ApplicationGrid({
  items = defaultApplications,
}: ApplicationGridProps): ReactElement {
  return (
    <section
      aria-labelledby="applications-grid-heading"
      className="bg-surface"
    >
      <Container className="section-y flex flex-col gap-10 md:gap-14">
        <SectionHeading
          eyebrow="Categories"
          title={
            <span id="applications-grid-heading">
              Four ways growers use cocopeat
            </span>
          }
          lead="An overview of where cocopeat fits — choose a category to learn more."
        />
        <ul className="grid gap-6 sm:grid-cols-2">
          {items.map((application) => (
            <ApplicationCard
              key={application.id}
              application={application}
            />
          ))}
        </ul>
      </Container>
    </section>
  )
}
