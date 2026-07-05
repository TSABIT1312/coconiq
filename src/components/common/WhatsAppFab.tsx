import { useState } from 'react'
import type { ReactElement } from 'react'
import { MessageCircle, X } from 'lucide-react'
import { siteConfig } from '@/data/siteConfig'
import { useWhatsApp } from '@/hooks/useWhatsApp'
import { cn } from '@/lib/utils'

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
      {/* Popup menu */}
      <div
        className={cn(
          'flex flex-col gap-2 transition-all duration-200',
          open ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none translate-y-2 opacity-0',
        )}
      >
        <button
          type="button"
          onClick={handleQuote}
          className="flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-medium text-gray-800 shadow-lg ring-1 ring-gray-200 hover:bg-gray-50 transition-colors"
        >
          💬 Request a Quote
        </button>
        <button
          type="button"
          onClick={handleChat}
          className="flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-medium text-gray-800 shadow-lg ring-1 ring-gray-200 hover:bg-gray-50 transition-colors"
        >
          🌿 Ask About Products
        </button>
      </div>

      {/* Main FAB button */}
      <button
        type="button"
        aria-label={open ? 'Close WhatsApp menu' : 'Open WhatsApp'}
        onClick={() => setOpen((v) => !v)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 active:scale-95"
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6 fill-white" />}
      </button>
    </div>
  )
}
