import type { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import { Check } from 'lucide-react'
import { Container } from '@/components/common/Container'
import { MediaPlaceholder } from '@/components/common/MediaPlaceholder'
import { SectionHeading } from '@/components/common/SectionHeading'
import { products } from '@/data/products'
import { paths } from '@/routes/paths'

export function ProductOverview(): ReactElement {
  return (
    <section aria-labelledby="product-overview-heading" className="bg-surface">
      <Container className="section-y flex flex-col gap-10 md:gap-14">
        <SectionHeading
          eyebrow="Our Products"
          title={
            <span id="product-overview-heading">
              Premium cocopeat & coco fiber lineup
            </span>
          }
          lead="Six products crafted from carefully selected coconut husks — sized for home growers up to full export operations."
          align="center"
          className="mx-auto"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Link
              key={product.id}
              to={paths.productDetail(product.slug)}
              className="group flex flex-col overflow-hidden rounded-xl border border-border bg-background transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
            >
              <MediaPlaceholder
                src={product.image || undefined}
                label={`${product.name} photo`}
                ratio="video"
                className="aspect-[4/3] w-full"
              />
              <div className="flex flex-1 flex-col gap-4 p-6">
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {product.tagline}
                  </p>
                </div>

                <ul className="flex flex-col gap-1.5 text-sm text-muted-foreground">
                  {product.benefits.slice(0, 3).map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <Check
                        aria-hidden
                        className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex flex-wrap gap-2 pt-2">
                  {product.specifications.slice(0, 2).map((s) => (
                    <span
                      key={s.label}
                      className="inline-flex items-center rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted-foreground"
                    >
                      <span className="font-medium text-foreground">
                        {s.label}:
                      </span>
                      <span className="ml-1">{s.value}</span>
                    </span>
                  ))}
                </div>

                <span className="text-sm font-semibold text-primary group-hover:underline">
                  View details →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  )
}
