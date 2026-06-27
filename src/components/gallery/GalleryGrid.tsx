import type { ReactElement } from 'react'
import type { GalleryItem as GalleryItemType } from '@/types/gallery'
import { GalleryItem } from './GalleryItem'
import { cn } from '@/lib/utils'

export interface GalleryGridProps {
  items: GalleryItemType[]
  onItemClick: (index: number) => void
  emptyLabel?: string
  className?: string
}

export function GalleryGrid({
  items,
  onItemClick,
  emptyLabel = 'No photos in this category yet.',
  className,
}: GalleryGridProps): ReactElement {
  if (items.length === 0) {
    return (
      <p className="rounded-lg border border-dashed border-border bg-surface p-8 text-center text-sm text-muted-foreground">
        {emptyLabel}
      </p>
    )
  }

  return (
    <ul
      className={cn(
        'grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 lg:gap-4',
        className,
      )}
    >
      {items.map((item, index) => (
        <li key={item.id}>
          <GalleryItem item={item} onClick={() => onItemClick(index)} />
        </li>
      ))}
    </ul>
  )
}
