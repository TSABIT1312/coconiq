import { useEffect, useState } from 'react'

export function useScrollPosition(): number {
  const [position, setPosition] = useState(0)

  useEffect(() => {
    const onScroll = () => setPosition(window.scrollY)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return position
}
