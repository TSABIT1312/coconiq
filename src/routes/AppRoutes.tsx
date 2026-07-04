import type { ReactElement } from 'react'
import { Route, Routes } from 'react-router-dom'
import { RootLayout } from '@/layouts/RootLayout'
import {
  AboutPage,
  ApplicationsPage,
  ContactPage,
  GalleryPage,
  GuidesPage,
  HomePage,
  NotFoundPage,
  ProductsPage,
} from '@/pages'
import { ProductDetailPage } from '@/pages/ProductDetailPage'
import { paths, routePatterns } from './paths'

export function AppRoutes(): ReactElement {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path={paths.home} element={<HomePage />} />
        <Route path={paths.products} element={<ProductsPage />} />
        <Route path={routePatterns.productDetail} element={<ProductDetailPage />} />
        <Route path={paths.applications} element={<ApplicationsPage />} />
        <Route path={paths.gallery} element={<GalleryPage />} />
        <Route path={paths.guides} element={<GuidesPage />} />
        <Route path={paths.about} element={<AboutPage />} />
        <Route path={paths.contact} element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
