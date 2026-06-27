export const siteConfig = {
  name: 'Coconiq',
  tagline: 'Premium Cocopeat for Better Growing',
  description:
    'Premium cocopeat designed to improve water retention, root development, and plant growth for gardening, hydroponics, and agriculture.',
  url: '',
  defaultOgImage: '',
  contact: {
    whatsappNumber: '6289664008880',
    email: '',
    address: '',
    mapsEmbedUrl: '',
  },
  social: {
    instagram: '',
    facebook: '',
    youtube: '',
  },
  businessHours: '',
} as const

export type SiteConfig = typeof siteConfig
