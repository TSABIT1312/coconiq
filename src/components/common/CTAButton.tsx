import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'
import { cn } from '@/lib/utils'

export type CTAVariant = 'primary' | 'secondary'
export type CTASize = 'sm' | 'default' | 'lg'

const variantClasses: Record<CTAVariant, string> = {
  primary:
    'bg-primary text-primary-foreground shadow-card hover:bg-primary/90 hover:shadow-hover',
  secondary:
    'border border-primary text-primary hover:bg-primary/5',
}

const sizeClasses: Record<CTASize, string> = {
  sm: 'h-10 px-4 text-sm',
  default: 'h-12 px-6 text-base',
  lg: 'h-14 px-8 text-base',
}

const baseClasses =
  'inline-flex items-center justify-center gap-2 rounded-md font-medium ' +
  'transition-all duration-200 ease-out ' +
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ' +
  'disabled:pointer-events-none disabled:opacity-50'

type CTAOwnProps<T extends ElementType> = {
  as?: T
  variant?: CTAVariant
  size?: CTASize
  className?: string
  children?: ReactNode
}

export type CTAButtonProps<T extends ElementType = 'button'> =
  CTAOwnProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof CTAOwnProps<T>>

export function CTAButton<T extends ElementType = 'button'>({
  as,
  variant = 'primary',
  size = 'default',
  className,
  children,
  ...rest
}: CTAButtonProps<T>) {
  const Tag = (as ?? 'button') as ElementType
  return (
    <Tag
      className={cn(baseClasses, variantClasses[variant], sizeClasses[size], className)}
      {...rest}
    >
      {children}
    </Tag>
  )
}
