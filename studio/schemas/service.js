// studio/schemas/service.js
export const service = {
  name: 'service',
  title: 'Services',
  type: 'document',
  fields: [
    { name: 'name', title: 'Service Name', type: 'string' },
    { name: 'slug', title: 'URL Slug', type: 'slug', options: { source: 'name' } },
    {
      name: 'category', title: 'Category', type: 'string',
      options: { list: ['skin', 'hair', 'slimming'], layout: 'radio' }
    },
    { name: 'order', title: 'Display Order', type: 'number' },
    { name: 'isFeatured', title: 'Featured on Homepage?', type: 'boolean' },
    { name: 'shortDescription', title: 'Short Description', type: 'text', rows: 2 },
    { name: 'fullDescription', title: 'Full Description', type: 'array', of: [{ type: 'block' }] },
    { name: 'mainImage', title: 'Main Image', type: 'image', options: { hotspot: true } },
    { name: 'price', title: 'Starting Price (₹)', type: 'string' },
    { name: 'duration', title: 'Session Duration', type: 'string' },
    {
      name: 'seo', title: 'SEO', type: 'object',
      fields: [
        { name: 'metaTitle', title: 'Meta Title', type: 'string' },
        { name: 'metaDescription', title: 'Meta Description', type: 'text', rows: 3 },
      ]
    },
  ],
  preview: { select: { title: 'name', subtitle: 'category', media: 'mainImage' } }
}
