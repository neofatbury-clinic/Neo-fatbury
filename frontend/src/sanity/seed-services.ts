// src/sanity/seed-services.ts
// Programmatic seeding of the CMS with actual service data
// This file is a CLI script — excluded from Next.js build via tsconfig
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createClient } from '@sanity/client'
import dotenv from 'dotenv'

// Load environment variables
dotenv.config({ path: '.env.local' })

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

const SERVICES = [
  {
    _type: 'service',
    _id: 'service-acne-treatment',
    title: 'Acne & Pimple Treatment',
    slug: { _type: 'slug', current: 'acne-treatment' },
    category: 'skin',
    isPopular: true,
    shortDescription: 'Clinical solutions for active acne and scar prevention.',
    description: 'Our clinical acne treatments combine advanced US-FDA technologies like Chemical Peels, Diamond Dermabrasion, and Laser Therapy to target acne-causing bacteria and reduce inflammation.',
    features: [
      { _key: 'f1', feature: 'US-FDA Approved Procedures' },
      { _key: 'f2', feature: 'Dermatologist Lead Treatment' },
      { _key: 'f3', feature: 'Zero Downtime' }
    ],
    faqs: [
      { _key: 'q1', question: 'How many sessions are needed?', answer: 'Typically 4-6 sessions are recommended for optimal results.' }
    ]
  },
  {
    _type: 'service',
    _id: 'service-laser-hair-reduction',
    title: 'Laser Hair Reduction',
    slug: { _type: 'slug', current: 'laser-hair-reduction' },
    category: 'hair',
    isPopular: true,
    shortDescription: 'Painless, permanent hair reduction for all skin types.',
    description: 'Experience silky smooth skin with our high-end Laser Hair Reduction technology. Safe for face, legs, arms, and full body.',
    features: [
      { _key: 'f1', feature: 'Tri-Beam Technology' },
      { _key: 'f2', feature: 'Virtually Painless' },
      { _key: 'f3', feature: 'Permanent Results' }
    ]
  },
  {
    _type: 'service',
    _id: 'service-coolsculpting',
    title: 'CoolSculpting (Fat Freezing)',
    slug: { _type: 'slug', current: 'fat-freezing' },
    category: 'slimming',
    isPopular: true,
    shortDescription: 'Non-surgical fat reduction using controlled cooling.',
    description: 'Freeze away stubborn fat without surgery or needles. Our CoolSculpting technology targets fat cells and eliminates them naturally.',
    features: [
      { _key: 'f1', feature: 'No Surgery Needed' },
      { _key: 'f2', feature: 'Targets Stubborn Fat' },
      { _key: 'f3', feature: 'US-FDA Cleared' }
    ]
  },
  {
    _type: 'service',
    _id: 'service-hair-transplant',
    title: 'Hair Transplantation',
    slug: { _type: 'slug', current: 'hair-transplant' },
    category: 'hair',
    isPopular: false,
    shortDescription: 'Advanced FUE hair restoration for natural density.',
    description: 'Restore your hairline with our precision FUE Transplantation. Natural-looking results with maximum graft survival rate.',
    features: [
      { _key: 'f1', feature: 'Natural Hairline Design' },
      { _key: 'f2', feature: 'FUE Precision' },
      { _key: 'f3', feature: 'Expert Graft Handling' }
    ]
  },
  {
    _type: 'service',
    _id: 'service-skin-brightening',
    title: 'Skin Brightening (Glow)',
    slug: { _type: 'slug', current: 'skin-brightening' },
    category: 'skin',
    isPopular: false,
    shortDescription: 'Hydra-Facials and Glutathione IV for radiant skin.',
    description: 'Revitalize your complexion with our signature brightening treatments that target pigmentation and uneven skin tone.',
    features: [
      { _key: 'f1', feature: 'Instant Hydration' },
      { _key: 'f2', feature: 'Deep Exfoliation' },
      { _key: 'f3', feature: 'Visible Glow' }
    ]
  }
]

async function seed() {
  console.log('🌱 Seeding services to Sanity...')
  try {
    for (const service of SERVICES) {
      await client.createOrReplace(service)
      console.log(`✅ Seeded: ${service.title}`)
    }
    console.log('🚀 All services seeded successfully!')
  } catch (err) {
    console.error('❌ Seeding failed:', err)
  }
}

seed()
