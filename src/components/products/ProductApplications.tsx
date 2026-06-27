import type { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import type { Application } from '@/types/application'
import { Card } from '@/components/common/Card'
import { Container } from '@/components/common/Container'
import { MediaPlaceholder } from '@/components/common/MediaPlaceholder'
import { SectionHeading } from '@/components/common/SectionHeading'
import { applications as defaultApplications } from '@/data/applications'
import { paths } from '@/routes/paths'

export interface ProductApplicationsProps {
  items?: Application[]
}

export function ProductApplications({
  items = defaultApplications,
}: ProductApplicationsProps): ReactElement {
  return (
    <section aria-labelledby="product-applications-heading" className="bg-background">
      <Container className="section-y flex flex-col gap-10 md:gap-14">
        <SectionHeading
          eyebrow="Applications"
          title={<span id="product-applications-heading">Where it works</span>}
          lead="From home pots to commercial fields — one product, many use cases."
        />
        <ul className="grid gap-6 sm:grid-cols-2">
          {items.map((application) => (
            <Card
              key={application.id}
              as="li"
              interactive
              className="overflow-hidden p-0"
            >
              <MediaPlaceholder
                src={application.image || undefined}
                alt={`${application.name} photo`}
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
