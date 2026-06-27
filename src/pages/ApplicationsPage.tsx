import type { ReactElement } from 'react'
import { usePageMeta } from '@/hooks/usePageMeta'
import {
  ApplicationCta,
  ApplicationDetailSection,
  ApplicationFaq,
  ApplicationGrid,
  ApplicationHero,
  HowToUse,
} from '@/components/applications'
import { applications } from '@/data/applications'

export function ApplicationsPage(): ReactElement {
  usePageMeta({
    title: 'Cocopeat Applications | Coconiq',
    description:
      'Discover how cocopeat is used in home gardening, hydroponics, nurseries, and commercial agriculture. Educational guides from Coconiq.',
  })

  return (
    <>
      <ApplicationHero />
      <ApplicationGrid />
      {applications.map((application, index) => (
        <ApplicationDetailSection
          key={application.id}
          application={application}
          reverse={index % 2 === 1}
          background={index % 2 === 0 ? 'background' : 'surface'}
        />
      ))}
      <HowToUse />
      <ApplicationFaq />
      <ApplicationCta />
    </>
  )
}
