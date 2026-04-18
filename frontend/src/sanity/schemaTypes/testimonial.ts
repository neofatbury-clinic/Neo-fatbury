// src/sanity/schemaTypes/testimonial.ts
import { defineType, defineField } from 'sanity'

export const testimonial = defineType({
  name: 'testimonial',
  title: '⭐ Testimonials',
  type: 'document',
  fields: [
    defineField({
      name: 'clientName',
      title: 'Client Name',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'treatment',
      title: 'Treatment Received',
      type: 'string',
      description: 'e.g. "Hydrafacial", "PRP Hair Treatment"',
    }),
    defineField({
      name: 'rating',
      title: 'Rating (1-5)',
      type: 'number',
      options: {
        list: [
          { title: '⭐⭐⭐⭐⭐ 5 stars', value: 5 },
          { title: '⭐⭐⭐⭐ 4 stars', value: 4 },
          { title: '⭐⭐⭐ 3 stars', value: 3 },
        ],
        layout: 'radio',
      },
      initialValue: 5,
    }),
    defineField({
      name: 'review',
      title: 'Review Text',
      type: 'text',
      rows: 4,
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'clientPhoto',
      title: 'Client Photo (optional)',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'isFeatured',
      title: 'Show on Homepage?',
      type: 'boolean',
      initialValue: false,
    }),
  ],

  preview: {
    select: { title: 'clientName', subtitle: 'treatment', media: 'clientPhoto' },
  },
})
