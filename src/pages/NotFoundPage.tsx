import type { ReactElement } from 'react'
import { Container } from '@/components/common/Container'

export function NotFoundPage(): ReactElement {
  return (
    <Container as="section" className="section-y">
      <h1>Page Not Found</h1>
    </Container>
  )
}
