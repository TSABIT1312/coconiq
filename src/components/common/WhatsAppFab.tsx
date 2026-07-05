import { useState } from 'react'
import type { ReactElement } from 'react'
import { X } from 'lucide-react'
import { siteConfig } from '@/data/siteConfig'
import { useWhatsApp } from '@/hooks/useWhatsApp'
import { cn } from '@/lib/utils'

function WhatsAppIcon(): ReactElement {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className="h-6 w-6 fill-current">
      <path d="M19.11 17.41c-.27-.14-1.58-.78-1.82-.87-.24-.09-.42-.14-.6.14-.18.27-.69.87-.85 1.05-.15.18-.31.2-.58.07-.27-.14-1.13-.42-2.16-1.33-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.42.12-.56.12-.12.27-.31.4-.47.13-.16.18-.27.27-.45.09-.18.05-.34-.02-.47-.07-.14-.6-1.45-.82-1.99-.22-.52-.44-.45-.6-.46h-.51c-.18 0-.47.07-.71.34-.24.27-.93.91-.93 2.22 0 1.31.95 2.58 1.09 2.76.13.18 1.87 2.85 4.52 3.99.63.27 1.12.43 1.5.55.63.2 1.21.17 1.67.1.51-.08 1.58-.65 1.8-1.28.22-.63.22-1.17.15-1.28-.07-.11-.24-.18-.51-.32Z" />
      <path d="M16.02 3.2c-7.07 0-12.8 5.71-12.8 12.76 0 2.25.59 4.45 1.7 6.39L3.14 28.8l6.62-1.74a12.82 12.82 0 0 0 6.26 1.61h.01c7.06 0 12.79-5.71 12.79-12.76 0-3.42-1.33-6.64-3.76-9.05A12.74 12.74 0 0 0 16.02 3.2Zm0 23.32h-.01a10.64 10.64 0 0 1-5.42-1.48l-.39-.23-3.93 1.03 1.05-3.83-.25-.39a10.54 10.54 0 0 1-1.63-5.62c0-5.85 4.76-10.6 10.61-10.6 2.82 0 5.47 1.09 7.46 3.08a10.52 10.52 0 0 1 3.11 7.51c0 5.85-4.76 10.61-10.6 10.61Z" />
    </svg>
  )
}

export function WhatsAppFab(): ReactElement {
  const [open, setOpen] = useState(false)
  const { open: openWhatsApp } = useWhatsApp()

  const handleChat = () => {
    openWhatsApp(`Hi ${siteConfig.name}, I'd like to learn more about your cocopeat products.`)
    setOpen(false)
  }

  const handleQuote = () => {
    openWhatsApp(`Hi ${siteConfig.name}, I'd like to request a price quote.`)
    setOpen(false)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <div
        className={cn(
          'flex flex-col gap-2 transition-all duration-200',
          open
            ? 'pointer-events-auto translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-2 opacity-0',
        )}
      >
        <button
          type="button"
          onClick={handleQuote}
          className="flex items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground shadow-lg ring-1 ring-primary/20 transition-colors hover:bg-primary/90"
        >
          <WhatsAppIcon />
          Request a Quote
        </button>
        <button
          type="button"
          onClick={handleChat}
          className="flex items-center gap-2 rounded-full bg-background px-4 py-2.5 text-sm font-medium text-foreground shadow-lg ring-1 ring-border transition-colors hover:bg-muted/40"
        >
          <WhatsAppIcon />
          Ask About Products
        </button>
      </div>

      <button
        type="button"
        aria-label={open ? 'Close WhatsApp menu' : 'Open WhatsApp'}
        onClick={() => setOpen((v) => !v)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-110 hover:bg-primary/90 active:scale-95"
      >
        {open ? <X className="h-6 w-6" /> : <WhatsAppIcon />}
      </button>
    </div>
  )
}
