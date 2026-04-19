// src/sanity/schemaTypes/aboutPage.ts
import { defineType, defineField } from 'sanity'

export const aboutPage = defineType({
  name: 'aboutPage',
  title: '🏢 About Us Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Hero Title',
      type: 'string',
      description: '💡 e.g. "Clinical Excellence in Skin, Hair & Slimming"',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Banner Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'storyTitle',
      title: 'Story Section Title',
      type: 'string',
    }),
    defineField({
      name: 'storyText',
      title: 'Story Content',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'stats',
      title: 'Clinic Statistics',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', type: 'string', title: 'Label (e.g. Patients Served)' },
            { name: 'value', type: 'string', title: 'Value (e.g. 10k+)' },
          ]
        }
      ]
    }),
    defineField({
      name: 'pillars',
      title: 'Mission & Vision Boxes',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', type: 'string' },
            { name: 'description', type: 'text' },
          ]
        }
      ]
    }),
    defineField({
      name: 'ctaTitle',
      title: 'CTA Title',
      type: 'string',
    }),
    defineField({
      name: 'ctaSubtitle',
      title: 'CTA Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'ctaButton',
      title: 'CTA Button Text',
      type: 'string',
    })
  ]
})
