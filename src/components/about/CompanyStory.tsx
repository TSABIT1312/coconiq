import type { ReactElement } from 'react'
import { Container } from '@/components/common/Container'
import { MediaPlaceholder } from '@/components/common/MediaPlaceholder'
import { SectionEyebrow } from '@/components/common/SectionEyebrow'

const stats = [
  { value: '2 Ha', label: 'Production Area' },
  { value: '400 m²', label: 'Warehouse' },
  { value: '20+', label: 'Professionals' },
  { value: '4 Containers', label: 'Monthly Capacity' },
]

export function CompanyStory(): ReactElement {
  return (
    <section aria-labelledby="story-heading" className="bg-surface">
      <Container className="section-y grid items-center gap-10 md:grid-cols-2 md:gap-14">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <SectionEyebrow>Our Story</SectionEyebrow>
            <h2 id="story-heading">
              Growing Better with Sustainable Coconut Solutions
            </h2>
          </div>
          <div className="flex flex-col gap-4 text-base text-muted-foreground md:text-lg">
            <p>
              Established in 2026, Coconiq is an Indonesian manufacturer of
              premium coconut growing media located in Pontianak, West
              Kalimantan. We transform carefully selected coconut husks into
              high-quality cocopeat and coco fiber for horticulture,
              hydroponics, nurseries, commercial agriculture, and industrial
              applications.
            </p>
            <p>
              Today, Coconiq serves the Indonesian market while actively
              developing partnerships with international buyers who seek
              reliable, sustainable, and export-ready coconut growing media.
            </p>
          </div>

          {/* Stats grid */}
          <ul className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <li
                key={s.label}
                className="flex flex-col gap-1 rounded-lg border border-border bg-background p-4"
              >
                <span className="text-2xl font-bold text-primary">
                  {s.value}
                </span>
                <span className="text-sm text-muted-foreground">{s.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <MediaPlaceholder
          src="/images/production-facility-husks.jpg"
          alt="Coconiq production facility with stored coconut husks"
          ratio="video"
          rounded="xl"
          className="md:aspect-[4/3]"
        />
      </Container>
    </section>
  )
}
