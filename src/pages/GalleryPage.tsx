import { useMemo, useState } from 'react'
import type { ReactElement } from 'react'
import { usePageMeta } from '@/hooks/usePageMeta'
import { Container } from '@/components/common/Container'
import {
  GalleryCta,
  GalleryFilter,
  GalleryGrid,
  GalleryHero,
  GalleryLightbox,
} from '@/components/gallery'
import type { GalleryFilterValue } from '@/components/gallery'
import { galleryCategoryOrder, galleryItems } from '@/data/gallery'

export function GalleryPage(): ReactElement {
  usePageMeta({
    title: 'Gallery | Coconiq',
    description:
      'See Coconiq cocopeat in action — product photos, production shots, and real growing results across sectors.',
  })

  const [filter, setFilter] = useState<GalleryFilterValue>('all')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const filteredItems = useMemo(() => {
    if (filter === 'all') return galleryItems
    return galleryItems.filter((item) => item.category === filter)
  }, [filter])

  const counts = useMemo(() => {
    const byCategory: Record<GalleryFilterValue, number> = {
      all: galleryItems.length,
      products: 0,
      production: 0,
      packaging: 0,
      applications: 0,
    }
    for (const category of galleryCategoryOrder) {
      byCategory[category] = galleryItems.filter(
        (item) => item.category === category,
      ).length
    }
    return byCategory
  }, [])

  const handleFilterChange = (next: GalleryFilterValue) => {
    setFilter(next)
    setLightboxIndex(null)
  }

  return (
    <>
      <GalleryHero />
      <section aria-labelledby="gallery-section-heading" className="bg-surface">
        <Container className="section-y flex flex-col gap-8">
          <h2 id="gallery-section-heading" className="sr-only">
            Gallery photos
          </h2>
          <GalleryFilter
            value={filter}
            onChange={handleFilterChange}
            counts={counts}
          />
          <GalleryGrid
            items={filteredItems}
            onItemClick={(index) => setLightboxIndex(index)}
          />
        </Container>
      </section>
      <GalleryCta />
      <GalleryLightbox
        items={filteredItems}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />
    </>
  )
}
