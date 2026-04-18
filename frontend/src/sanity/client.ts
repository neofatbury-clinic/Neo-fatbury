// src/sanity/client.ts
import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

// NeoFatbury Sanity Project — Connected
const PROJECT_ID = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? 'r7sey3wq'
const DATASET    = process.env.NEXT_PUBLIC_SANITY_DATASET    ?? 'production'
const API_VERSION = process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? '2024-01-01'

export const client = createClient({
  projectId:  PROJECT_ID,
  dataset:    DATASET,
  apiVersion: API_VERSION,
  useCdn: true,
})

const builder = imageUrlBuilder(client)

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function urlFor(source: any) {
  return builder.image(source)
}

export const isSanityConfigured = true
