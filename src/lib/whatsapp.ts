import { siteConfig } from '@/data/siteConfig'

export function buildWhatsAppLink(message?: string): string {
  const base = `https://wa.me/${siteConfig.contact.whatsappNumber}`
  if (!message) return base
  return `${base}?text=${encodeURIComponent(message)}`
}
