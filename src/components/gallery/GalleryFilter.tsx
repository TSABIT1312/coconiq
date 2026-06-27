import type { ReactElement } from 'react'
import type { GalleryCategory } from '@/types/gallery'
import { galleryCategoryLabels, galleryCategoryOrder } from '@/data/gallery'
import { cn } from '@/lib/utils'

export type GalleryFilterValue = GalleryCategory | 'all'

export interface GalleryFilterProps {
  value: GalleryFilterValue
  onChange: (value: GalleryFilterValue) => void
  counts?: Record<GalleryFilterValue, number>
  className?: string
}

export function GalleryFilter({
  value,
  onChange,
  counts,
  className,
}: GalleryFilterProps): ReactElement {
  const options: { value: GalleryFilterValue; label: string }[] = [
    { value: 'all', label: 'All' },
    ...galleryCategoryOrder.map((category) => ({
      value: category as GalleryFilterValue,
      label: galleryCategoryLabels[category],
    })),
  ]

  return (
    <div
      role="tablist"
      aria-label="Gallery categories"
      className={cn(
        '-mx-4 flex gap-2 overflow-x-auto px-4 pb-2 md:mx-0 md:flex-wrap md:overflow-visible md:px-0 md:pb-0',
        className,
      )}
    >
      {options.map((option) => {
        const isActive = option.value === value
        const count = counts?.[option.value]
        return (
          <button
            key={option.value}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(option.value)}
            className={cn(
              'inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-200',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
              isActive
                ? 'border-primary bg-primary text-primary-foreground shadow-card'
                : 'border-border bg-surface text-muted-foreground hover:border-primary/40 hover:text-primary',
            )}
          >
            <span>{option.label}</span>
            {count !== undefined && (
              <span
                className={cn(
                  'rounded-full px-2 py-0.5 text-xs',
                  isActive
                    ? 'bg-primary-foreground/20 text-primary-foreground'
                    : 'bg-muted/60 text-muted-foreground',
                )}
              >
                {count}
              </span>
            )}
          </button>
        )
      })}
    </div>
  )
}
