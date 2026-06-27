import type { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import type { Guide } from '@/types/guide'
import { Container } from '@/components/common/Container'
import { MediaPlaceholder } from '@/components/common/MediaPlaceholder'
import { SectionEyebrow } from '@/components/common/SectionEyebrow'
import { paths } from '@/routes/paths'
import { guideCategoryLabels, getFeaturedGuide } from '@/data/guides'
import { formatDate } from '@/utils/format'

export interface FeaturedArticleProps {
  guide?: Guide
}

export function FeaturedArticle({
  guide = getFeaturedGuide(),
}: FeaturedArticleProps): ReactElement | null {
  if (!guide) return null

  return (
    <section
      aria-labelledby="featured-article-heading"
      className="bg-surface"
    >
      <Container className="section-y grid items-center gap-10 md:grid-cols-2 md:gap-14">
        <MediaPlaceholder
          src={guide.image || undefined}
          alt={`${guide.title} cover`}
          label={`${guide.title} cover`}
          ratio="video"
          rounded="xl"
          className="md:aspect-[4/3]"
        />
        <article className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <SectionEyebrow>Featured</SectionEyebrow>
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
              {guideCategoryLabels[guide.category]}
            </span>
            <h2 id="featured-article-heading">{guide.title}</h2>
          </div>
          <p className="text-base text-muted-foreground md:text-lg">
            {guide.excerpt}
          </p>
          <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            <time dateTime={guide.publishedAt}>
              {formatDate(guide.publishedAt)}
            </time>
            <span aria-hidden>·</span>
            <span>{guide.readingTimeMinutes} min read</span>
          </div>
          <div>
            <Link
              to={paths.guideDetail(guide.slug)}
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
            >
              <span aria-label={`Read article: ${guide.title}`}>Read article</span>
              <ArrowRight aria-hidden className="h-4 w-4" />
            </Link>
          </div>
        </article>
      </Container>
    </section>
  )
}
