import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

export type AspectRatio = 'square' | 'video' | 'portrait' | 'wide' | 'auto'

const ratioClasses: Record<AspectRatio, string> = {
  square: 'aspect-square',
  video: 'aspect-video',
  portrait: 'aspect-[3/4]',
  wide: 'aspect-[16/9]',
  auto: '',
}

export interface MediaPlaceholderProps {
  label?: ReactNode
  ratio?: AspectRatio
  rounded?: 'md' | 'lg' | 'xl'
  className?: string
  src?: string
  alt?: string
}

const roundedClasses = {
  md: 'rounded-md',
  lg: 'rounded-lg',
  xl: 'rounded-xl',
}

export function MediaPlaceholder({
  label = 'Image placeholder',
  ratio = 'square',
  rounded = 'lg',
  className,
  src,
  alt,
}: MediaPlaceholderProps) {
  if (src) {
    return (
      <div
        className={cn(
          'overflow-hidden',
          ratioClasses[ratio],
          roundedClasses[rounded],
          className,
        )}
      >
        <img
          src={src}
          alt={alt ?? (typeof label === 'string' ? label : 'Image')}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>
    )
  }

  return (
    <div
      role="img"
      aria-label={typeof label === 'string' ? label : 'Image placeholder'}
      className={cn(
        'flex w-full items-center justify-center overflow-hidden border border-border bg-muted/40 text-xs text-muted-foreground',
        ratioClasses[ratio],
        roundedClasses[rounded],
        className,
      )}
    >
      <span className="px-3 text-center">{label}</span>
    </div>
  )
}
