import type { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Card } from '@/components/common/Card'
import { Container } from '@/components/common/Container'
import { MediaPlaceholder } from '@/components/common/MediaPlaceholder'
import { SectionHeading } from '@/components/common/SectionHeading'
import { applications } from '@/data/applications'
import { paths } from '@/routes/paths'

export function ApplicationsPreviewSection(): ReactElement {
  return (
    <section aria-labelledby="applications-heading" className="bg-surface">
      <Container className="section-y flex flex-col gap-10 md:gap-14">
        <SectionHeading
          eyebrow="Applications"
          title={<span id="applications-heading">Built for every grower</span>}
          lead="From hobby gardens to commercial farms, cocopeat adapts to a wide range of growing systems."
        />
        <ul className="grid gap-6 sm:grid-cols-2">
          {applications.map((application) => (
            <Card key={application.id} as="li" interactive className="overflow-hidden p-0">
              <MediaPlaceholder
                src={application.image || undefined}
                label={`${application.name} photo`}
                ratio="wide"
                rounded="md"
                className="rounded-b-none border-0 border-b border-border"
              />
              <div className="flex flex-1 flex-col gap-3 p-6">
                <h3 className="text-xl font-semibold">{application.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {application.description}
                </p>
                <Link
                  to={paths.applicationDetail(application.slug)}
                  className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-primary"
                >
                  <span aria-label={`Explore ${application.name} applications`}>Learn more</span>
                  <ArrowRight aria-hidden className="h-4 w-4" />
                </Link>
              </div>
            </Card>
          ))}
        </ul>
      </Container>
    </section>
  )
}
