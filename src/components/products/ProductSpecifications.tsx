import type { ReactElement } from 'react'
import type { Product } from '@/types/product'
import { Container } from '@/components/common/Container'
import { SectionHeading } from '@/components/common/SectionHeading'
import { products } from '@/data/products'
import { applications as allApplications } from '@/data/applications'

export interface ProductSpecificationsProps {
  product?: Product
}

export function ProductSpecifications({
  product = products[0],
}: ProductSpecificationsProps): ReactElement | null {
  if (!product) return null

  const productApplications = allApplications.filter((application) =>
    product.applications.includes(application.slug),
  )

  return (
    <section aria-labelledby="product-specs-heading" className="bg-background">
      <Container className="section-y flex flex-col gap-10 md:gap-14">
        <SectionHeading
          eyebrow="Specifications"
          title={<span id="product-specs-heading">Built for consistent quality</span>}
          lead="Detailed product specifications and supported applications."
        />
        <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
          <div className="rounded-lg border border-border bg-surface p-6 shadow-card lg:col-span-2">
            <h3 className="text-base font-semibold">Product Details</h3>
            <dl className="mt-5 grid divide-y divide-border sm:grid-cols-2 sm:divide-y-0 sm:divide-x">
              {product.specifications.map((spec) => (
                <div
                  key={spec.label}
                  className="flex flex-col gap-1 py-4 first:pt-0 sm:px-6 sm:py-2 sm:first:pl-0"
                >
                  <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                    {spec.label}
                  </dt>
                  <dd className="text-base font-medium text-foreground">
                    {spec.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="rounded-lg border border-border bg-surface p-6 shadow-card">
            <h3 className="text-base font-semibold">Supported Applications</h3>
            <ul className="mt-5 flex flex-wrap gap-2">
              {productApplications.map((application) => (
                <li
                  key={application.id}
                  className="rounded-md border border-border bg-background px-3 py-1.5 text-sm text-foreground"
                >
                  {application.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}
