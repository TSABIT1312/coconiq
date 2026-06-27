import type { ReactElement } from 'react'
import type { Guide } from '@/types/guide'
import { Container } from '@/components/common/Container'
import { SectionHeading } from '@/components/common/SectionHeading'
import { GuideCard } from './GuideCard'

export interface GuideListProps {
  items: Guide[]
  eyebrow?: string
  title?: string
  lead?: string
  background?: 'background' | 'surface'
}

export function GuideList({
  items,
  eyebrow = 'Articles',
  title = 'All articles',
  lead,
  background = 'background',
}: GuideListProps): ReactElement {
  return (
    <section
      aria-labelledby="guide-list-heading"
      className={background === 'surface' ? 'bg-surface' : 'bg-background'}
    >
      <Container className="section-y flex flex-col gap-10 md:gap-14">
        <SectionHeading
          eyebrow={eyebrow}
          title={<span id="guide-list-heading">{title}</span>}
          lead={lead}
        />
        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((guide) => (
            <li key={guide.id}>
              <GuideCard guide={guide} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
