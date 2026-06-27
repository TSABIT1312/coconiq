import type { ReactElement } from 'react'
import { Check } from 'lucide-react'
import type { Product } from '@/types/product'
import { Container } from '@/components/common/Container'
import { MediaPlaceholder } from '@/components/common/MediaPlaceholder'
import { SectionHeading } from '@/components/common/SectionHeading'
import { products } from '@/data/products'

export interface ProductOverviewProps {
  product?: Product
}

export function ProductOverview({
  product = products[0],
}: ProductOverviewProps): ReactElement | null {
  if (!product) return null

  return (
    <section aria-labelledby="product-overview-heading" className="bg-surface">
      <Container className="section-y grid items-center gap-10 md:grid-cols-2 md:gap-14">
        <MediaPlaceholder
          src={product.image || undefined}
          label={`${product.name} photo`}
          ratio="square"
          rounded="xl"
          className="md:aspect-[4/5]"
        />
        <div className="flex flex-col gap-6">
          <SectionHeading
            eyebrow="Featured Product"
            title={<span id="product-overview-heading">{product.name}</span>}
            lead={product.tagline}
          />
          <p className="text-base text-muted-foreground md:text-lg">
            {product.description}
          </p>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              Key Benefits
            </h3>
            <ul className="mt-4 flex flex-col gap-2 text-sm text-muted-foreground md:text-base">
              {product.benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-2">
                  <Check
                    aria-hidden
                    className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                  />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}
