import type { ReactElement } from 'react'
import { ArrowRight } from 'lucide-react'
import type { Application } from '@/types/application'
import { Card } from '@/components/common/Card'
import { MediaPlaceholder } from '@/components/common/MediaPlaceholder'

export interface ApplicationCardProps {
  application: Application
  href?: string
}

export function ApplicationCard({
  application,
  href = `#${application.slug}`,
}: ApplicationCardProps): ReactElement {
  return (
    <Card as="li" interactive className="overflow-hidden p-0">
      <MediaPlaceholder
        src={application.image || undefined}
        label={`${application.name} photo`}
        ratio="wide"
        rounded="md"
        className="rounded-b-none border-0 border-b border-border"
      />
      <div className="flex flex-1 flex-col gap-3 p-6">
        <div>
          <h3 className="text-xl font-semibold">{application.name}</h3>
          <p className="mt-1 text-xs uppercase tracking-[0.14em] text-muted-foreground">
            {application.audience}
          </p>
        </div>
        <p className="text-sm text-muted-foreground">{application.description}</p>
        <a
          href={href}
          className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-primary"
        >
          <span aria-label={`Learn more about ${application.name}`}>Learn more</span>
          <ArrowRight aria-hidden className="h-4 w-4" />
        </a>
      </div>
    </Card>
  )
}
