import type { ReactElement } from 'react'
import { Check } from 'lucide-react'
import type { Application } from '@/types/application'
import { Container } from '@/components/common/Container'
import { MediaPlaceholder } from '@/components/common/MediaPlaceholder'
import { SectionEyebrow } from '@/components/common/SectionEyebrow'
import { cn } from '@/lib/utils'

export interface ApplicationDetailSectionProps {
  application: Application
  reverse?: boolean
  background?: 'background' | 'surface'
}

export function ApplicationDetailSection({
  application,
  reverse = false,
  background = 'background',
}: ApplicationDetailSectionProps): ReactElement {
  const headingId = `${application.slug}-heading`

  return (
    <section
      id={application.slug}
      aria-labelledby={headingId}
      className={background === 'surface' ? 'bg-surface' : 'bg-background'}
    >
      <Container className="section-y grid items-start gap-10 md:grid-cols-2 md:items-center md:gap-14">
        <MediaPlaceholder
          src={application.image || undefined}
          alt={`${application.name} example`}
          label={`${application.name} example`}
          ratio="square"
          rounded="xl"
          className={cn('md:aspect-[4/5]', reverse && 'md:order-last')}
        />
        <div className="flex flex-col gap-6">
          <div>
            <SectionEyebrow>Application</SectionEyebrow>
            <h2 id={headingId} className="mt-3">
              {application.name}
            </h2>
            <p className="mt-2 text-xs uppercase tracking-[0.14em] text-muted-foreground">
              {application.audience}
            </p>
          </div>
          <p className="text-base text-muted-foreground md:text-lg">
            {application.description}
          </p>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              Benefits
            </h3>
            <ul className="mt-4 flex flex-col gap-2 text-sm text-muted-foreground md:text-base">
              {application.benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-2">
                  <Check
                    aria-hidden
                    className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                  />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-border bg-surface p-5 shadow-card">
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              Tips
            </h3>
            <ol className="mt-4 flex flex-col gap-3 text-sm text-foreground">
              {application.usage.map((tip, index) => (
                <li key={tip} className="flex items-start gap-3">
                  <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                    {index + 1}
                  </span>
                  <span>{tip}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Container>
    </section>
  )
}
