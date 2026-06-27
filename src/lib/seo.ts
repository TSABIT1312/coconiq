import type { SeoMeta } from '@/types/seo'
import { siteConfig } from '@/data/siteConfig'

export function buildPageTitle(title?: string): string {
  if (!title) return siteConfig.name
  return `${title} | ${siteConfig.name}`
}

export function withDefaults(meta: Partial<SeoMeta>): SeoMeta {
  return {
    title: buildPageTitle(meta.title),
    description: meta.description ?? siteConfig.description,
    canonical: meta.canonical,
    image: meta.image ?? siteConfig.defaultOgImage,
    type: meta.type ?? 'website',
  }
}
