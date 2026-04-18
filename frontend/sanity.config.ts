// sanity.config.ts (place in project ROOT)
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { media } from 'sanity-plugin-media'
import { assist } from '@sanity/assist'
import { schemaTypes } from './src/sanity/schemaTypes'
import { structure } from './src/sanity/structure'

export default defineConfig({
  basePath: '/studio',
  name: 'neofatbury',
  title: 'Neofatbury Skin Clinic',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,

  plugins: [
    structureTool({ structure }),
    visionTool(), 
    media(),
    assist(), // AI Assistant - This is your "Claude" connection for the Studio
  ],

  schema: {
    types: schemaTypes,
  },
})
