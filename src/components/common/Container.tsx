import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'
import { cn } from '@/lib/utils'

export type ContainerSize = 'default' | 'content' | 'narrow'

const sizeClasses: Record<ContainerSize, string> = {
  default: 'max-w-7xl',  /* 1280px — page content */
  content: 'max-w-3xl',  /* 768px  — long-form articles, guides */
  narrow: 'max-w-xl',    /* 576px  — forms, focused blocks */
}

type ContainerOwnProps<T extends ElementType> = {
  as?: T
  size?: ContainerSize
  className?: string
  children?: ReactNode
}

export type ContainerProps<T extends ElementType = 'div'> =
  ContainerOwnProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof ContainerOwnProps<T>>

export function Container<T extends ElementType = 'div'>({
  as,
  size = 'default',
  className,
  children,
  ...rest
}: ContainerProps<T>) {
  const Tag = (as ?? 'div') as ElementType
  return (
    <Tag
      className={cn(
        'mx-auto w-full px-4 md:px-6 lg:px-8',
        sizeClasses[size],
        className,
      )}
      {...rest}
    >
      {children}
    </Tag>
  )
}
