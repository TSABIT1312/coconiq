import type { ReactElement } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Check } from 'lucide-react'
import { usePageMeta } from '@/hooks/usePageMeta'
import { Container } from '@/components/common/Container'
import { CTAButton } from '@/components/common/CTAButton'
import { MediaPlaceholder } from '@/components/common/MediaPlaceholder'
import { SectionHeading } from '@/components/common/SectionHeading'
import { getProductBySlug } from '@/data/products'
import { applications as allApplications } from '@/data/applications'
import { paths } from '@/routes/paths'
import { NotFoundPage } from './NotFoundPage'

export function ProductDetailPage(): ReactElement {
  const { slug } = useParams<{ slug: string }>()
  const product = slug ? getProductBySlug(slug) : undefined

  usePageMeta({
    title: product ? `${product.name} | Coconiq` : 'Product | Coconiq',
    description: product?.description ?? 'Coconiq premium cocopeat product.',
  })

  if (!product) return <NotFoundPage />

  const productApplications = allApplications.filter((a) =>
    product.applications.includes(a.slug),
  )

  return (
    <section className="bg-surface">
      <Container className="section-y flex flex-col gap-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-muted-foreground">
          <Link to={paths.products} className="hover:text-primary">
            Products
          </Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{product.name}</span>
        </nav>

        {/* Hero: image + info */}
        <div className="grid items-start gap-10 md:grid-cols-2 md:gap-14">
          <MediaPlaceholder
            src={product.image || undefined}
            label={`${product.name} photo`}
            ratio="square"
            rounded="xl"
            className="md:aspect-[4/5]"
          />
          <div className="flex flex-col gap-6">
            <SectionHeading
              eyebrow="Product"
              title={product.name}
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
                {product.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <Check
                      aria-hidden
                      className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                    />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <CTAButton as={Link} to={paths.contact}>
                Request a Quote
              </CTAButton>
            </div>
          </div>
        </div>

        {/* Specifications + applications */}
        <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
          <div className="rounded-lg border border-border bg-background p-6 shadow-card lg:col-span-2">
            <h3 className="text-base font-semibold">Specifications</h3>
            <dl className="mt-5 grid gap-x-8 gap-y-4 sm:grid-cols-2">
              {product.specifications.map((spec) => (
                <div key={spec.label} className="flex flex-col gap-1">
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
          <div className="rounded-lg border border-border bg-background p-6 shadow-card">
            <h3 className="text-base font-semibold">Applications</h3>
            <ul className="mt-5 flex flex-wrap gap-2">
              {productApplications.map((a) => (
                <li
                  key={a.id}
                  className="rounded-md border border-border bg-surface px-3 py-1.5 text-sm text-foreground"
                >
                  {a.name}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <Link
            to={paths.products}
            className="text-sm font-semibold text-primary hover:underline"
          >
            ← Back to all products
          </Link>
        </div>
      </Container>
    </section>
  )
}
