// src/sanity/schemaTypes/aboutPage.ts
import { defineType, defineField } from 'sanity'

export const aboutPage = defineType({
  name: 'aboutPage',
  title: '🏢 About Us Page',
  type: 'document',
  fields: [
    defineField({
      name: 'mainHeading',
      title: 'Main Heading',
      type: 'string',
      description: 'e.g. "Welcome to NeoFatbury Clinic!"',
    }),
    defineField({
      name: 'subHeading',
      title: 'Sub Heading',
      type: 'string',
      description: 'e.g. "Celebrating the science of transformation!"',
    }),
    defineField({
      name: 'floatingImage',
      title: 'Beside Text Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'aboutTextTop',
      title: 'About Text (Top Section)',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'highlightText',
      title: 'Blue Highlight Box Text',
      type: 'string',
      description: 'e.g. "Hyderabad\'s No. 1 Dermatology, Skin & Hair Clinic"',
    }),
    defineField({
      name: 'aboutTextBottom',
      title: 'About Text (Bottom Section)',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'visionText',
      title: 'Our Vision Text',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'missionText',
      title: 'Our Mission Text',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'stats',
      title: 'Our Milestones (Statistics)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', type: 'string', title: 'Label (e.g. Happy Clients)' },
            { name: 'value', type: 'string', title: 'Value (e.g. 10,000+)' },
          ]
        }
      ]
    }),
    defineField({
      name: 'ctaTitle',
      title: 'Contact Section Title',
      type: 'string',
    }),
    defineField({
      name: 'ctaSubtitle',
      title: 'Contact Section Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'ctaButton',
      title: 'Contact Button Text',
      type: 'string',
    })
  ]
})
