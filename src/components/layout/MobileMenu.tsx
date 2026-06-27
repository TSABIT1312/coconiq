import { useEffect } from 'react'
import type { ReactElement } from 'react'
import { NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { mainNavigation } from '@/data/navigation'
import { paths } from '@/routes/paths'
import { Container } from '@/components/common/Container'
import { CTAButton } from '@/components/common/CTAButton'
import { useWhatsApp } from '@/hooks/useWhatsApp'
import { siteConfig } from '@/data/siteConfig'
import { cn } from '@/lib/utils'

export interface MobileMenuProps {
  id: string
  open: boolean
  onClose: () => void
}

export function MobileMenu({ id, open, onClose }: MobileMenuProps): ReactElement {
  const { open: openWhatsApp } = useWhatsApp()

  useEffect(() => {
    if (!open) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previous
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onClose])

  const handleQuote = () => {
    openWhatsApp(`Hi ${siteConfig.name}, I'd like to request a quote.`)
    onClose()
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          id={id}
          aria-label="Mobile navigation"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="absolute inset-x-0 top-full border-b border-border bg-background shadow-card md:hidden"
        >
          <Container as="div" className="flex flex-col gap-2 py-4">
            <ul className="flex flex-col">
              {mainNavigation.map((item) => (
                <li key={item.href}>
                  <NavLink
                    to={item.href}
                    end={item.href === paths.home}
                    onClick={onClose}
                    className={({ isActive }) =>
                      cn(
                        'block rounded-md px-3 py-3 text-base font-medium transition-colors',
                        isActive
                          ? 'bg-primary/5 text-primary'
                          : 'text-foreground hover:bg-muted/30',
                      )
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <CTAButton className="mt-2 w-full" onClick={handleQuote}>
              Get a Quote
            </CTAButton>
          </Container>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
