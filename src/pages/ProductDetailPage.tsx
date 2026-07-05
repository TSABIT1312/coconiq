import type { ReactElement } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Check } from 'lucide-react'
import { usePageMeta } from '@/hooks/usePageMeta'
import { Container } from '@/components/common/Container'
import { MediaPlaceholder } from '@/components/common/MediaPlaceholder'
import { CTAButton } from '@/components/common/CTAButton'
import { SectionHeading } from '@/components/common/SectionHeading'
import { products } from '@/data/products'
import { useWhatsApp } from '@/hooks/useWhatsApp'
import { siteConfig } from '@/data/siteConfig'
import { paths } from '@/routes/paths'

export function ProductDetailPage(): ReactElement {
  const { slug } = useParams<{ slug: string }>()
  const product = products.find((p) => p.slug === slug)
  const { open: openWhatsApp } = useWhatsApp()

  usePageMeta({
    title: product ? `${product.name} | Premium Cocopeat` : 'Product Not Found',
    description: product?.description || 'Details of our premium cocopeat products.',
  })

  if (!product) {
    return (
      <Container className="section-y flex flex-col items-center justify-center gap-6 py-32 text-center">
        <h1 className="text-3xl font-bold">Product Not Found</h1>
        <p className="text-muted-foreground">The product you are looking for does not exist or has been moved.</p>
        <CTAButton as={Link} to={paths.products}>
          Back to Products
        </CTAButton>
      </Container>
    )
  }

  const handleQuote = () =>
    openWhatsApp(`Hi ${siteConfig.name}, I'd like to request a quote for ${product.name}.`)

  return (
    <section aria-labelledby="product-detail-heading" className="bg-background">
      <Container className="section-y flex flex-col gap-16 py-16 md:py-24">
        {/* Breadcrumb / Back link */}
        <div>
          <Link to={paths.products} className="text-sm font-medium text-primary hover:underline">
            &larr; Back to Products
          </Link>
        </div>

        {/* Hero split */}
        <div className="grid gap-10 md:grid-cols-2 md:gap-14">
          <MediaPlaceholder
            src={product.image}
            alt={product.name}
            ratio="square"
            rounded="xl"
            className="md:aspect-[4/5]"
          />
          <div className="flex flex-col gap-6">
            <h1 id="product-detail-heading" className="text-3xl font-bold md:text-4xl">
              {product.name}
            </h1>
            <p className="text-lg font-medium text-primary">{product.tagline}</p>
            <p className="text-base text-muted-foreground">{product.description}</p>

            <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
              {product.benefits.map((b: string) => (
                <li key={b} className="flex items-start gap-2">
                  <Check aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <CTAButton onClick={handleQuote}>Request Quote for {product.name}</CTAButton>
            </div>
          </div>
        </div>

        {/* Spec table */}
        <div className="max-w-2xl border-t border-border pt-12">
          <SectionHeading
            eyebrow="Technical Data"
            title="Product Specifications"
            className="mb-8"
          />
          <div className="overflow-hidden rounded-lg border border-border">
            <table className="min-w-full divide-y divide-border">
              <tbody className="divide-y divide-border bg-background">
                {product.specifications.map((spec: { label: string; value: string }) => (
                  <tr key={spec.label}>
                    <td className="w-1/3 px-6 py-4 text-sm font-medium text-muted-foreground">
                      {spec.label}
                    </td>
                    <td className="px-6 py-4 text-sm font-semibold text-foreground">
                      {spec.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    </section>
  )
}
