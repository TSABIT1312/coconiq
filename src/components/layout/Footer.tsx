import type { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import { Mail, MapPin, MessageCircle } from 'lucide-react'
import { footerNavigation } from '@/data/navigation'
import { siteConfig } from '@/data/siteConfig'
import { Container } from '@/components/common/Container'
import { buildWhatsAppLink } from '@/lib/whatsapp'

export function Footer(): ReactElement {
  const year = new Date().getFullYear()
  const { contact, social } = siteConfig
  const socialLinks = Object.entries(social).filter(([, url]) => url.length > 0)

  return (
    <footer className="border-t border-border bg-surface">
      <Container as="div" className="grid gap-10 py-12 md:grid-cols-12 md:py-16">
        <div className="md:col-span-4">
          <p className="font-heading text-lg font-semibold text-primary">
            {siteConfig.name}
          </p>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            {siteConfig.tagline}
          </p>
        </div>

        {footerNavigation.map((group) => (
          <nav
            key={group.title}
            aria-label={group.title}
            className="md:col-span-2"
          >
            <p className="text-sm font-semibold text-foreground">
              {group.title}
            </p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {group.items.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <section
          aria-label="Contact"
          className="md:col-span-4"
        >
          <p className="text-sm font-semibold text-foreground">Contact</p>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            {contact.whatsappNumber && (
              <li className="flex items-start gap-2">
                <MessageCircle aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a
                  href={buildWhatsAppLink()}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="transition-colors hover:text-primary"
                >
                  WhatsApp
                </a>
              </li>
            )}
            {contact.email && (
              <li className="flex items-start gap-2">
                <Mail aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a
                  href={`mailto:${contact.email}`}
                  className="transition-colors hover:text-primary"
                >
                  {contact.email}
                </a>
              </li>
            )}
            {contact.address && (
              <li className="flex items-start gap-2">
                <MapPin aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>{contact.address}</span>
              </li>
            )}
          </ul>

          {socialLinks.length > 0 && (
            <ul className="mt-6 flex flex-wrap gap-4 text-sm text-muted-foreground">
              {socialLinks.map(([name, url]) => (
                <li key={name}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="capitalize transition-colors hover:text-primary"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </section>
      </Container>

      <div className="border-t border-border">
        <Container as="div" className="py-6 text-xs text-muted-foreground">
          <p>&copy; {year} {siteConfig.name}. All rights reserved.</p>
        </Container>
      </div>
    </footer>
  )
}
