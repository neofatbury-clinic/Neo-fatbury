// src/sanity/schemaTypes/genericPage.ts
import { defineType, defineField } from 'sanity'

export const genericPage = defineType({
  name: 'genericPage',
  title: '📄 Custom Pages (Bonus)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      description: '💡 e.g., "Privacy Policy" or "Disclaimer"',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Web Address (URL)',
      type: 'slug',
      options: { source: 'title' },
      description: '💡 Click "Generate" to set the link.',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'content',
      title: 'Page Content',
      type: 'array',
      of: [
        { type: 'block' },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            defineField({ name: 'alt', title: 'Alt Text (SEO)', type: 'string', description: '💡 Describe what is in the image for Google.' }),
          ],
        },
        {
          type: 'object',
          name: 'ctaBox',
          title: 'Section: CTA Box',
          fields: [
            defineField({ name: 'text', title: 'Banner Text', type: 'string' }),
            defineField({ name: 'buttonText', title: 'Button Label', type: 'string' }),
            defineField({ name: 'link', title: 'Button Link', type: 'string' }),
          ],
        },
      ],
    }),
    defineField({
      name: 'seo',
      title: '🔍 Google Settings',
      type: 'object',
      fields: [
        defineField({ name: 'metaTitle', title: 'Google Title', type: 'string' }),
        defineField({ name: 'metaDescription', title: 'Google Description', type: 'text', rows: 2 }),
        defineField({ name: 'customSchema', title: 'Custom JSON-LD Schema', type: 'text', rows: 10, description: 'Paste custom JSON-LD script here (without <script> tags)' }),
      ],
    }),
  ],
})
