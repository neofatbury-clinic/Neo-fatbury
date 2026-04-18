// src/sanity/schemaTypes/gallery.ts
import { defineType, defineField } from 'sanity'

export const gallery = defineType({
  name: 'gallery',
  title: '📸 Before & After Gallery',
  type: 'document',
  fields: [
    defineField({ name: 'treatment', title: 'Treatment Name', type: 'string', description: 'e.g. "Acne Scar Treatment"', validation: (r) => r.required() }),
    defineField({ name: 'relatedService', title: 'Related Service', type: 'reference', to: [{ type: 'service' }] }),
    defineField({ name: 'beforeImage', title: 'Before Image', type: 'image', options: { hotspot: true }, validation: (r) => r.required() }),
    defineField({ name: 'afterImage', title: 'After Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'combinedImage', title: 'Combined Before/After Image', type: 'image', options: { hotspot: true }, description: 'If you have one image showing both before and after, upload here' }),
    defineField({ name: 'patientQuote', title: 'Patient Testimonial / Quote', type: 'text', rows: 2 }),
    defineField({ name: 'description', title: 'Short Description', type: 'text', rows: 2 }),
    defineField({ name: 'isFeatured', title: 'Show on Homepage?', type: 'boolean', initialValue: false }),
    defineField({ name: 'order', title: 'Display Order (lower = first)', type: 'number' }),
  ],
  preview: {
    select: { title: 'treatment', media: 'afterImage' },
    prepare({ title, media }) { return { title, subtitle: 'Before & After', media } },
  },
})
