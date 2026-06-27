export const paths = {
  home: '/',
  products: '/products',
  productDetail: (slug: string) => `/products/${slug}`,
  applications: '/applications',
  applicationDetail: (slug: string) => `/applications/${slug}`,
  gallery: '/gallery',
  guides: '/guides',
  guideDetail: (slug: string) => `/guides/${slug}`,
  about: '/about',
  contact: '/contact',
} as const

export const routePatterns = {
  productDetail: '/products/:slug',
  applicationDetail: '/applications/:slug',
  guideDetail: '/guides/:slug',
} as const
