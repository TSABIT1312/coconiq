import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

export interface SectionEyebrowProps {
  children: ReactNode
  className?: string
}

export function SectionEyebrow({ children, className }: SectionEyebrowProps) {
  return (
    <span
      className={cn(
        'inline-block text-xs font-semibold uppercase tracking-[0.18em] text-primary',
        className,
      )}
    >
      {children}
    </span>
  )
}
