export type GuideCategory = 'educational' | 'practical' | 'comparison'

export interface Guide {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  image: string
  category: GuideCategory
  readingTimeMinutes: number
  publishedAt: string
}
