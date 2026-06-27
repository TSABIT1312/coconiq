import { useEffect, useState } from 'react'
import type { ReactElement } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { mainNavigation } from '@/data/navigation'
import { paths } from '@/routes/paths'
import { siteConfig } from '@/data/siteConfig'
import { Container } from '@/components/common/Container'
import { CTAButton } from '@/components/common/CTAButton'
import { MobileMenu } from '@/components/layout/MobileMenu'
import { useScrollPosition } from '@/hooks/useScrollPosition'
import { useWhatsApp } from '@/hooks/useWhatsApp'
import { cn } from '@/lib/utils'

const MOBILE_MENU_ID = 'mobile-menu'

export function Navbar(): ReactElement {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const scrollY = useScrollPosition()
  const location = useLocation()
  const { open: openWhatsApp } = useWhatsApp()

  const isScrolled = scrollY > 8

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname])

  const handleQuote = () => {
    openWhatsApp(`Hi ${siteConfig.name}, I'd like to request a quote.`)
  }

  return (
    <header
      className={cn(
        'sticky top-0 z-40 border-b transition-colors duration-200',
        isScrolled
          ? 'border-border bg-background/95 shadow-card backdrop-blur'
          : 'border-transparent bg-background/80 backdrop-blur-sm',
      )}
    >
      <Container as="nav" aria-label="Main navigation" className="flex h-16 items-center justify-between md:h-20">
        <Link to={paths.home} className="flex items-center">
          <img
            src="/logo.svg"
            alt={siteConfig.name}
            className="h-8 w-auto md:h-10 object-contain"
          />
        </Link>

        <ul className="hidden items-center gap-6 lg:gap-8 md:flex">
          {mainNavigation.map((item) => (
            <li key={item.href}>
              <NavLink
                to={item.href}
                end={item.href === paths.home}
                className={({ isActive }) =>
                  cn(
                    'text-sm font-medium transition-colors hover:text-primary',
                    isActive ? 'text-primary' : 'text-muted-foreground',
                  )
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex">
          <CTAButton size="sm" onClick={handleQuote}>
            Get a Quote
          </CTAButton>
        </div>

        <button
          type="button"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          aria-controls={MOBILE_MENU_ID}
          onClick={() => setIsMenuOpen((value) => !value)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground transition-colors hover:bg-muted/40 md:hidden"
        >
          {isMenuOpen ? <X aria-hidden /> : <Menu aria-hidden />}
        </button>
      </Container>

      <MobileMenu
        id={MOBILE_MENU_ID}
        open={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
    </header>
  )
}
