import { useCallback } from 'react'
import { buildWhatsAppLink } from '@/lib/whatsapp'

export function useWhatsApp() {
  const open = useCallback((message?: string) => {
    window.open(buildWhatsAppLink(message), '_blank', 'noopener,noreferrer')
  }, [])

  return { open, getLink: buildWhatsAppLink }
}
