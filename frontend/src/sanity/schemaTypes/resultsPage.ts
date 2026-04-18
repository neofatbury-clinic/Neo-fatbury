// src/sanity/schemaTypes/resultsPage.ts
import { defineType, defineField } from 'sanity'

export const resultsPage = defineType({
  name: 'resultsPage',
  title: '📊 Results Page Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      initialValue: 'Our Clinical Transformations',
    }),
    defineField({
      name: 'subtitle',
      title: 'Page Subtitle',
      type: 'string',
      initialValue: 'Real patients. Real clinical outcomes. Your journey starts here.',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Background Image',
      type: 'image',
      options: { hotspot: true },
    })
  ]
})
