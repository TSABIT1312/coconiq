import { useCallback, useEffect } from 'react'
import type { ReactElement } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import type { GalleryItem } from '@/types/gallery'
import { galleryCategoryLabels } from '@/data/gallery'
import { cn } from '@/lib/utils'

export interface GalleryLightboxProps {
  items: GalleryItem[]
  index: number | null
  onClose: () => void
  onNavigate: (index: number) => void
}

export function GalleryLightbox({
  items,
  index,
  onClose,
  onNavigate,
}: GalleryLightboxProps): ReactElement {
  const isOpen = index !== null && items.length > 0
  const current = isOpen ? items[index] : undefined
  const hasMultiple = items.length > 1

  const goPrev = useCallback(() => {
    if (index === null) return
    onNavigate((index - 1 + items.length) % items.length)
  }, [index, items.length, onNavigate])

  const goNext = useCallback(() => {
    if (index === null) return
    onNavigate((index + 1) % items.length)
  }, [index, items.length, onNavigate])

  useEffect(() => {
    if (!isOpen) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previous
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      } else if (event.key === 'ArrowLeft') {
        goPrev()
      } else if (event.key === 'ArrowRight') {
        goNext()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [isOpen, onClose, goPrev, goNext])

  return (
    <AnimatePresence>
      {isOpen && current && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={`Gallery preview: ${current.title}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="fixed inset-0 z-50 flex flex-col bg-foreground/90 backdrop-blur"
          onClick={onClose}
        >
          <div className="flex items-center justify-between gap-4 p-4 text-white md:px-6">
            <p className="text-xs uppercase tracking-[0.18em] text-white/70">
              {galleryCategoryLabels[current.category]}
            </p>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close preview"
              autoFocus
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
            >
              <X aria-hidden />
            </button>
          </div>

          <div
            className="relative flex flex-1 items-center justify-center px-4 pb-4 md:px-12"
            onClick={(event) => event.stopPropagation()}
          >
            {hasMultiple && (
              <button
                type="button"
                onClick={goPrev}
                aria-label="Previous image"
                className={cn(
                  'absolute left-2 top-1/2 z-10 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50',
                  'md:left-4',
                )}
              >
                <ChevronLeft aria-hidden />
              </button>
            )}

            <motion.figure
              key={current.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="flex w-full max-w-5xl flex-col items-center gap-4"
            >
              <div className="flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-lg border border-white/10 bg-white/5">
                {current.image ? (
                  <img
                    src={current.image}
                    alt={current.alt}
                    className="h-full w-full object-contain"
                  />
                ) : (
                  <span className="px-6 text-center text-sm text-white/60">
                    {current.title}
                  </span>
                )}
              </div>
              <figcaption className="flex flex-col items-center gap-1 text-center text-white">
                <span className="text-base font-semibold">{current.title}</span>
                {hasMultiple && (
                  <span className="text-xs text-white/60">
                    {index + 1} of {items.length}
                  </span>
                )}
              </figcaption>
            </motion.figure>

            {hasMultiple && (
              <button
                type="button"
                onClick={goNext}
                aria-label="Next image"
                className={cn(
                  'absolute right-2 top-1/2 z-10 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50',
                  'md:right-4',
                )}
              >
                <ChevronRight aria-hidden />
              </button>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
