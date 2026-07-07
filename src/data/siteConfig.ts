export const siteConfig = {
  name: 'Coconiq',
  tagline: 'Premium Cocopeat for Better Growing',
  description:
    'Premium cocopeat designed to improve water retention, root development, and plant growth for gardening, hydroponics, and agriculture.',
  url: '',
  defaultOgImage: '',
  contact: {
    whatsappNumber: '6289664008880',
    email: 'coconiqindonesia@gmail.com',
    address: 'Jl. Meranti Gang Meranti VI No. 50 A RT 1 Darat Sekip, Pontianak Kota, Kota Pontianak, Kalbar, 78117 - INDONESIA',
    mapsEmbedUrl:
      'https://www.openstreetmap.org/export/embed.html?bbox=109.3291%2C-0.0337%2C109.3411%2C-0.0257&layer=mapnik&marker=-0.0296926%2C109.3350753',
  },
  social: {
    instagram: '',
    facebook: '',
    youtube: '',
  },
  businessHours: '',
} as const

export type SiteConfig = typeof siteConfig
