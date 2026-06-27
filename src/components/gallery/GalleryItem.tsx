import { forwardRef } from 'react'
import type { GalleryItem as GalleryItemType } from '@/types/gallery'
import { cn } from '@/lib/utils'

export interface GalleryItemProps {
  item: GalleryItemType
  onClick: () => void
  className?: string
}

export const GalleryItem = forwardRef<HTMLButtonElement, GalleryItemProps>(
  function GalleryItem({ item, onClick, className }, ref) {
    return (
      <button
        ref={ref}
        type="button"
        onClick={onClick}
        aria-label={`Open larger view: ${item.title}`}
        className={cn(
          'group relative block aspect-square w-full overflow-hidden rounded-lg border border-border bg-muted/40',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
          className,
        )}
      >
        {item.image ? (
          <img
            src={item.image}
            alt={item.alt}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center transition-transform duration-500 ease-out group-hover:scale-[1.04]">
            <span className="px-3 text-center text-xs text-muted-foreground">
              {item.title}
            </span>
          </div>
        )}
        <div className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-foreground/80 via-foreground/0 to-foreground/0 p-3 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          <span className="text-xs font-medium text-white">{item.title}</span>
        </div>
      </button>
    )
  },
)
