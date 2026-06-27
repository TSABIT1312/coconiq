import type { ReactElement } from 'react'
import { MapPin } from 'lucide-react'
import { Container } from '@/components/common/Container'
import { SectionEyebrow } from '@/components/common/SectionEyebrow'
import { siteConfig } from '@/data/siteConfig'

export function MapEmbed(): ReactElement {
  return (
    <section aria-label="Location map" className="bg-surface">
      <Container className="section-y flex flex-col gap-8">
        <SectionEyebrow className="text-center">Our Location</SectionEyebrow>
        {siteConfig.contact.mapsEmbedUrl ? (
          <div className="overflow-hidden rounded-xl border border-border shadow-card">
            <iframe
              src={siteConfig.contact.mapsEmbedUrl}
              title="Coconiq location map"
              className="h-80 w-full border-0 md:h-[420px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        ) : (
          <div className="flex h-80 flex-col items-center justify-center gap-4 rounded-xl border border-dashed border-border bg-background text-muted-foreground md:h-[420px]">
            <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
              <MapPin aria-hidden className="h-8 w-8" />
            </span>
            <div className="text-center">
              <p className="text-base font-medium text-foreground">
                Map coming soon
              </p>
              <p className="mt-1 text-sm">
                {siteConfig.contact.address || 'Address will be listed here.'}
              </p>
            </div>
          </div>
        )}
      </Container>
    </section>
  )
}
