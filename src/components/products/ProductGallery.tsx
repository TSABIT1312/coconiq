import type { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import type { GalleryItem } from '@/types/gallery'
import { Container } from '@/components/common/Container'
import { MediaPlaceholder } from '@/components/common/MediaPlaceholder'
import { SectionHeading } from '@/components/common/SectionHeading'
import { galleryItems } from '@/data/gallery'
import { paths } from '@/routes/paths'

export interface ProductGalleryProps {
  items?: GalleryItem[]
}

export function ProductGallery({
  items = galleryItems,
}: ProductGalleryProps): ReactElement {
  return (
    <section aria-labelledby="product-gallery-heading" className="bg-surface">
      <Container className="section-y flex flex-col gap-10 md:gap-14">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Gallery"
            title={<span id="product-gallery-heading">Product, production, and use</span>}
            lead="Documentation across the product lifecycle — from raw material to field application."
          />
          <Link
            to={paths.gallery}
            className="inline-flex items-center gap-1 text-sm font-medium text-primary"
          >
            View Full Gallery
            <ArrowRight aria-hidden className="h-4 w-4" />
          </Link>
        </div>
        <ul className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {items.map((item) => (
            <li key={item.id}>
              <MediaPlaceholder
                src={item.image || undefined}
                alt={item.alt}
                label={item.title}
                ratio="square"
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
