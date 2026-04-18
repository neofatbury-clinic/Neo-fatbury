// studio/schemas/gallery.js
export const gallery = {
  name: 'gallery',
  title: 'Before & After Gallery',
  type: 'document',
  fields: [
    {
      name: 'treatment', title: 'Treatment', type: 'string',
      description: 'e.g. Laser Hair Reduction, Acne Scar Treatment'
    },
    {
      name: 'beforeImage', title: 'Before Image', type: 'image',
      options: { hotspot: true }
    },
    {
      name: 'afterImage', title: 'After Image', type: 'image',
      options: { hotspot: true }
    },
    { name: 'description', title: 'Result Description (optional)', type: 'text', rows: 2 },
  ],
  preview: {
    select: { title: 'treatment', media: 'afterImage' }
  }
}
