import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { SectionEyebrow } from './SectionEyebrow'

export type SectionAlign = 'left' | 'center'

export interface SectionHeadingProps {
  eyebrow?: ReactNode
  title: ReactNode
  lead?: ReactNode
  align?: SectionAlign
  className?: string
  as?: 'h1' | 'h2' | 'h3'
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = 'left',
  className,
  as = 'h2',
}: SectionHeadingProps) {
  const Tag = as
  return (
    <div
      className={cn(
        'flex flex-col gap-3',
        align === 'center' && 'items-center text-center',
        className,
      )}
    >
      {eyebrow && <SectionEyebrow>{eyebrow}</SectionEyebrow>}
      <Tag className="max-w-3xl">{title}</Tag>
      {lead && (
        <p className={cn('max-w-2xl text-base text-muted-foreground md:text-lg')}>
          {lead}
        </p>
      )}
    </div>
  )
}
