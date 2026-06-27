import type { ReactElement } from 'react'
import { ChevronDown } from 'lucide-react'
import type { Faq } from '@/types/faq'
import { cn } from '@/lib/utils'

export interface FaqListProps {
  items: Faq[]
  className?: string
}

export function FaqList({ items, className }: FaqListProps): ReactElement {
  return (
    <ul className={cn('flex flex-col gap-3', className)}>
      {items.map((faq) => (
        <li key={faq.id}>
          <details className="group rounded-lg border border-border bg-surface p-5 shadow-card">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-foreground">
              {faq.question}
              <ChevronDown
                aria-hidden
                className="h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180"
              />
            </summary>
            <p className="mt-3 text-sm text-muted-foreground">{faq.answer}</p>
          </details>
        </li>
      ))}
    </ul>
  )
}
