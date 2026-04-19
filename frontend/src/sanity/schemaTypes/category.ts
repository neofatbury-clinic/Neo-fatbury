import { defineType, defineField } from 'sanity'

export const category = defineType({
  name: 'category',
  title: '📂 Service Categories',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Category Title',
      type: 'string',
      description: '💡 e.g., "Skin Treatments", "Hair Solutions"',
      validation: r => r.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      description: '💡 This becomes the URL part, e.g. "/skin"',
      options: { source: 'title' },
      validation: r => r.required(),
    }),
    defineField({
      name: 'icon',
      title: 'Emoji Icon',
      type: 'string',
      description: '💡 e.g., ✨ or 💇',
    }),
    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'order',
      title: 'Menu Order',
      type: 'number',
    })
  ],
  preview: {
    select: { title: 'title', subtitle: 'slug.current' },
  },
})
