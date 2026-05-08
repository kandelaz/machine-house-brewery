import { createClient } from 'next-sanity'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? ''
export const sanityConfigured = projectId.length > 0 && projectId !== 'placeholder'

export const client = createClient({
  projectId: projectId || 'placeholder',
  dataset:   process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
})
