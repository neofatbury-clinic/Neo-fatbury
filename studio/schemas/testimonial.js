// studio/schemas/testimonial.js
export const testimonial = {
  name: 'testimonial',
  title: 'Testimonials',
  type: 'document',
  fields: [
    { name: 'clientName', title: 'Client Name', type: 'string' },
    {
      name: 'treatment', title: 'Treatment Taken', type: 'string',
      description: 'e.g. Laser Hair Reduction, CoolSculpting'
    },
    {
      name: 'rating', title: 'Rating (1–5)', type: 'number',
      validation: (Rule: any) => Rule.min(1).max(5)
    },
    { name: 'review', title: 'Review Text', type: 'text', rows: 4 },
    { name: 'clientPhoto', title: 'Client Photo (optional)', type: 'image', options: { hotspot: true } },
    { name: 'isFeatured', title: 'Show on Homepage?', type: 'boolean' },
  ],
  preview: { select: { title: 'clientName', subtitle: 'treatment' } }
}
