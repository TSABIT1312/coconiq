import type { ReactElement } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { RootLayout } from '@/layouts/RootLayout'
import {
  AboutPage,
  ContactPage,
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
        <Route path={paths.about} element={<AboutPage />} />
        <Route path={paths.contact} element={<ContactPage />} />
        {/* Deprecated pages redirect to home for SEO safety */}
        <Route path="/applications" element={<Navigate to={paths.home} replace />} />
        <Route path="/applications/*" element={<Navigate to={paths.home} replace />} />
        <Route path="/gallery" element={<Navigate to={paths.home} replace />} />
        <Route path="/guides" element={<Navigate to={paths.home} replace />} />
        <Route path="/guides/*" element={<Navigate to={paths.home} replace />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
