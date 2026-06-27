import { useEffect } from 'react'

interface PageMeta {
  title: string
  description: string
}

export function usePageMeta({ title, description }: PageMeta): void {
  useEffect(() => {
    document.title = title

    let el = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    if (!el) {
      el = document.createElement('meta')
      el.name = 'description'
      document.head.appendChild(el)
    }
    el.content = description
  }, [title, description])
}
