import type { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import { Check } from 'lucide-react'
import { Container } from '@/components/common/Container'
import { CTAButton } from '@/components/common/CTAButton'
import { MediaPlaceholder } from '@/components/common/MediaPlaceholder'
import { SectionHeading } from '@/components/common/SectionHeading'
import { products } from '@/data/products'
import { paths } from '@/routes/paths'

export function FeaturedProductSection(): ReactElement | null {
  const product = products[0]
  if (!product) return null

  return (
    <section aria-labelledby="featured-product-heading" className="bg-background">
      <Container className="section-y grid items-center gap-10 md:grid-cols-2 md:gap-14">
        <MediaPlaceholder
          src="/images/pdf-big-press.jpg"
          label="Coconiq cocopeat blocks in multiple sizes"
          ratio="square"
          rounded="xl"
          className="md:aspect-[4/5]"
        />
        <div className="flex flex-col gap-6">
          <SectionHeading
            eyebrow="Featured Product"
            title={<span id="featured-product-heading">{product.name}</span>}
            lead={product.description}
          />
          <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
            {product.benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-2">
                <Check aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
          <div>
            <CTAButton as={Link} to={paths.productDetail(product.slug)}>
              View Product Details
            </CTAButton>
          </div>
        </div>
      </Container>
    </section>
  )
}
