// src/sanity/schemaTypes/gallery.ts
import { defineType, defineField } from 'sanity'

export const gallery = defineType({
  name: 'gallery',
  title: '📸 Before & After Hub',
  type: 'document',
  fields: [
    defineField({ name: 'treatment', title: 'Treatment Shown', type: 'string', description: '💡 e.g. "Acne Transformation"', validation: (r) => r.required() }),
    defineField({ name: 'relatedService', title: 'Link to Service Page', type: 'reference', to: [{ type: 'service' }] }),
    defineField({ name: 'beforeImage', title: 'Start (Before Image)', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'afterImage', title: 'Result (After Image)', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'combinedImage', title: 'Side-by-Side Photo (Optional)', type: 'image', options: { hotspot: true }, description: '💡 Only upload if you already have a single photo showing both Before and After.' }),
    defineField({ name: 'patientQuote', title: 'Small Testimonial', type: 'text', rows: 2, description: '💡 A short quote from this specific patient (optional).' }),
    defineField({ name: 'isFeatured', title: 'Show on Homepage?', type: 'boolean', initialValue: false }),
    defineField({ name: 'order', title: 'Sequence Order', type: 'number' }),
  ],
  preview: { select: { title: 'treatment', media: 'afterImage' } },
})
