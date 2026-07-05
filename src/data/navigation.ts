import type { FooterLinkGroup, NavItem } from '@/types/navigation'
import { paths } from '@/routes/paths'

export const mainNavigation: NavItem[] = [
  { label: 'Home', href: paths.home },
  { label: 'Products', href: paths.products },
  { label: 'About', href: paths.about },
  { label: 'Contact', href: paths.contact },
]

export const footerNavigation: FooterLinkGroup[] = [
  {
    title: 'Quick Links',
    items: [
      { label: 'Home', href: paths.home },
      { label: 'Products', href: paths.products },
    ],
  },
  {
    title: 'Company',
    items: [
      { label: 'About', href: paths.about },
      { label: 'Contact', href: paths.contact },
    ],
  },
]
