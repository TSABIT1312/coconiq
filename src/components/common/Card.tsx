import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'
import { cn } from '@/lib/utils'

type CardOwnProps<T extends ElementType> = {
  as?: T
  interactive?: boolean
  className?: string
  children?: ReactNode
}

export type CardProps<T extends ElementType = 'div'> =
  CardOwnProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof CardOwnProps<T>>

export function Card<T extends ElementType = 'div'>({
  as,
  interactive = false,
  className,
  children,
  ...rest
}: CardProps<T>) {
  const Tag = (as ?? 'div') as ElementType
  return (
    <Tag
      className={cn(
        'flex flex-col gap-4 rounded-lg border border-border bg-surface p-6 shadow-card',
        interactive &&
          'transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-hover',
        className,
      )}
      {...rest}
    >
      {children}
    </Tag>
  )
}
