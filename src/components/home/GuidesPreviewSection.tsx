import type { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Card } from '@/components/common/Card'
import { Container } from '@/components/common/Container'
import { MediaPlaceholder } from '@/components/common/MediaPlaceholder'
import { SectionHeading } from '@/components/common/SectionHeading'
import { guides } from '@/data/guides'
import { paths } from '@/routes/paths'

export function GuidesPreviewSection(): ReactElement {
  const items = guides.slice(0, 3)

  return (
    <section aria-labelledby="guides-heading" className="bg-surface">
      <Container className="section-y flex flex-col gap-10 md:gap-14">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Guides"
            title={<span id="guides-heading">Learn about cocopeat</span>}
            lead="Practical articles for home gardeners, hydroponic growers, and commercial farmers."
          />
          <Link
            to={paths.guides}
            className="inline-flex items-center gap-1 text-sm font-medium text-primary"
          >
            Explore Guides
            <ArrowRight aria-hidden className="h-4 w-4" />
          </Link>
        </div>
        <ul className="grid gap-6 md:grid-cols-3">
          {items.map((guide) => (
            <Card key={guide.id} as="li" interactive className="overflow-hidden p-0">
              <MediaPlaceholder
                src={guide.image || undefined}
                alt={`${guide.title} cover`}
                label={`${guide.title} cover`}
                ratio="video"
                rounded="md"
                className="rounded-b-none border-0 border-b border-border"
              />
              <div className="flex flex-1 flex-col gap-3 p-6">
                <h3 className="text-lg font-semibold">{guide.title}</h3>
                <p className="text-sm text-muted-foreground">{guide.excerpt}</p>
                <Link
                  to={paths.guideDetail(guide.slug)}
                  className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-primary"
                >
                  <span aria-label={`Read article: ${guide.title}`}>Read article</span>
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
