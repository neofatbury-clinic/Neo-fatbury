// sanity.config.ts (place in project ROOT)
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { media } from 'sanity-plugin-media'
import { seoPane } from 'sanity-plugin-seo-pane'
import { assist } from '@sanity/assist'
import { schemaTypes } from './src/sanity/schemaTypes'
import { structure, defaultDocumentNode } from './src/sanity/structure'

export default defineConfig({
  basePath: '/studio',
  name: 'neofatbury',
  title: 'Neofatbury Skin Clinic',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,

  plugins: [
    structureTool({ structure, defaultDocumentNode }),
    visionTool(),
    media(),
    assist(), // AI assistant for non-technical users
  ],

  schema: {
    types: schemaTypes,
  },
})
