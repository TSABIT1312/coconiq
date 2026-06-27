import type { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import type { Guide } from '@/types/guide'
import { MediaPlaceholder } from '@/components/common/MediaPlaceholder'
import { paths } from '@/routes/paths'
import { guideCategoryLabels } from '@/data/guides'
import { formatDate } from '@/utils/format'
import { cn } from '@/lib/utils'

export interface GuideCardProps {
  guide: Guide
  className?: string
}

export function GuideCard({ guide, className }: GuideCardProps): ReactElement {
  return (
    <article
      className={cn(
        'group relative flex flex-col overflow-hidden rounded-lg border border-border bg-surface shadow-card transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-hover',
        className,
      )}
    >
      <MediaPlaceholder
        src={guide.image || undefined}
        alt={`${guide.title} cover`}
        label={`${guide.title} cover`}
        ratio="video"
        rounded="md"
        className="rounded-b-none border-0 border-b border-border"
      />
      <div className="flex flex-1 flex-col gap-3 p-6">
        <span className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
          {guideCategoryLabels[guide.category]}
        </span>
        <h3 className="text-lg font-semibold">
          <Link
            to={paths.guideDetail(guide.slug)}
            className="transition-colors after:absolute after:inset-0 hover:text-primary"
          >
            {guide.title}
          </Link>
        </h3>
        <p className="text-sm text-muted-foreground">{guide.excerpt}</p>
        <div className="mt-auto flex items-center justify-between gap-3 pt-2 text-xs text-muted-foreground">
          <span>
            <time dateTime={guide.publishedAt}>
              {formatDate(guide.publishedAt)}
            </time>
            <span className="mx-2" aria-hidden>·</span>
            <span>{guide.readingTimeMinutes} min read</span>
          </span>
          <ArrowRight
            aria-hidden
            className="h-4 w-4 text-primary transition-transform duration-200 group-hover:translate-x-0.5"
          />
        </div>
      </div>
    </article>
  )
}
