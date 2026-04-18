// studio/sanity.config.js
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'

// Import all schemas
import { homePage }   from './schemas/homePage'
import { service }    from './schemas/service'
import { blogPost }   from './schemas/blogPost'
import { teamMember } from './schemas/teamMember'
import { testimonial } from './schemas/testimonial'
import { gallery }    from './schemas/gallery'
import { siteSettings } from './schemas/siteSettings'
import { locationPage } from './schemas/locationPage'

export default defineConfig({
  name: 'neofatbury-studio',
  title: 'NeoFatbury CMS',

  projectId: process.env.SANITY_STUDIO_PROJECT_ID || 'p8ddtj8e',
  dataset:   process.env.SANITY_STUDIO_DATASET    || 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('NeoFatbury Content')
          .items([
            S.listItem().title('🏠 Homepage').child(
              S.document().schemaType('homePage').documentId('homepage')
            ),
            S.listItem().title('⚙️ Site Settings').child(
              S.document().schemaType('siteSettings').documentId('siteSettings')
            ),
            S.divider(),
            S.listItem().title('💆 Services').schemaType('service').child(
              S.documentTypeList('service')
            ),
            S.listItem().title('📝 Blog Posts').schemaType('blogPost').child(
              S.documentTypeList('blogPost')
            ),
            S.listItem().title('👩‍⚕️ Team Members').schemaType('teamMember').child(
              S.documentTypeList('teamMember')
            ),
            S.listItem().title('⭐ Testimonials').schemaType('testimonial').child(
              S.documentTypeList('testimonial')
            ),
            S.listItem().title('🖼️ Gallery (Before/After)').schemaType('gallery').child(
              S.documentTypeList('gallery')
            ),
            S.listItem().title('📍 Location Pages').schemaType('locationPage').child(
              S.documentTypeList('locationPage')
            ),
          ])
    }),
    visionTool(),
  ],

  schema: {
    types: [
      homePage,
      service,
      blogPost,
      teamMember,
      testimonial,
      gallery,
      siteSettings,
      locationPage,
    ],
  },
})
