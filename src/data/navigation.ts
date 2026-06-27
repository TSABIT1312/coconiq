import type { FooterLinkGroup, NavItem } from '@/types/navigation'
import { paths } from '@/routes/paths'

export const mainNavigation: NavItem[] = [
  { label: 'Home', href: paths.home },
  { label: 'Products', href: paths.products },
  { label: 'Applications', href: paths.applications },
  { label: 'Gallery', href: paths.gallery },
  { label: 'Guides', href: paths.guides },
  { label: 'About', href: paths.about },
  { label: 'Contact', href: paths.contact },
]

export const footerNavigation: FooterLinkGroup[] = [
  {
    title: 'Quick Links',
    items: [
      { label: 'Home', href: paths.home },
      { label: 'Products', href: paths.products },
      { label: 'Applications', href: paths.applications },
      { label: 'Guides', href: paths.guides },
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
