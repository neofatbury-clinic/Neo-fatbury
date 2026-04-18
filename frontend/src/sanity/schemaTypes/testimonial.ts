// src/sanity/schemaTypes/testimonial.ts
import { defineType, defineField } from 'sanity'

export const testimonial = defineType({
  name: 'testimonial',
  title: '⭐ Patient Reviews',
  type: 'document',
  fields: [
    defineField({ name: 'clientName', title: 'Patient Name', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'treatment', title: 'Treatment Given', type: 'string', description: 'e.g. "Hair Transplant" or "Skin Glow"' }),
    defineField({
      name: 'rating',
      title: 'Star Rating',
      type: 'number',
      options: {
        list: [
          { title: '⭐⭐⭐⭐⭐ 5 stars', value: 5 },
          { title: '⭐⭐⭐⭐ 4 stars', value: 4 },
        ],
        layout: 'radio',
      },
      initialValue: 5,
    }),
    defineField({ name: 'review', title: 'What they said (Review)', type: 'text', rows: 4, validation: (r) => r.required() }),
    defineField({ name: 'clientPhoto', title: 'Patient Photo (Optional)', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'isFeatured', title: 'Show on Front Page?', type: 'boolean', initialValue: false }),
  ],
  preview: { select: { title: 'clientName', subtitle: 'treatment', media: 'clientPhoto' } },
})
