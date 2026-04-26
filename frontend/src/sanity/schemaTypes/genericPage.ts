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
      title: '🏗️ Page Builder',
      description: '💡 Add sections one by one to build your page. You can drag and drop to reorder them.',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'pageHero',
          title: '🔥 Section: Large Hero',
          fields: [
            defineField({ name: 'title', title: 'Main Heading', type: 'string' }),
            defineField({ name: 'subtitle', title: 'Sub-heading', type: 'string' }),
            defineField({ name: 'image', title: 'Background Image', type: 'image', options: { hotspot: true } }),
            defineField({ name: 'showForm', title: 'Show Lead Form?', type: 'boolean', initialValue: true }),
          ]
        },
        {
          type: 'object',
          name: 'textImage',
          title: '🌓 Section: Text + Image (Split)',
          fields: [
            defineField({ name: 'heading', title: 'Heading', type: 'string' }),
            defineField({ name: 'text', title: 'Paragraph Text', type: 'text', rows: 4 }),
            defineField({ name: 'image', title: 'Section Image', type: 'image', options: { hotspot: true } }),
            defineField({ name: 'reverse', title: 'Image on Left?', type: 'boolean', initialValue: false }),
          ]
        },
        {
          type: 'object',
          name: 'richText',
          title: '📝 Section: Standard Text Block',
          fields: [
            defineField({ name: 'content', title: 'Text Content', type: 'array', of: [{ type: 'block' }] }),
          ]
        },
        {
          type: 'object',
          name: 'ctaBox',
          title: '🔘 Section: Call to Action Banner',
          fields: [
            defineField({ name: 'text', title: 'Banner Text', type: 'string' }),
            defineField({ name: 'buttonText', title: 'Button Label', type: 'string' }),
            defineField({ name: 'link', title: 'Button Link', type: 'string' }),
          ],
        },
        {
          type: 'object',
          name: 'videoSection',
          title: '🎥 Section: Video Embed',
          fields: [
            defineField({ name: 'heading', title: 'Heading', type: 'string' }),
            defineField({ name: 'url', title: 'Video URL (YouTube/Vimeo)', type: 'url' }),
            defineField({ name: 'caption', title: 'Video Caption', type: 'string' }),
          ]
        },
        {
          type: 'object',
          name: 'gallerySection',
          title: '📸 Section: Image Gallery',
          fields: [
            defineField({ name: 'heading', title: 'Heading', type: 'string' }),
            defineField({ name: 'images', title: 'Gallery Images', type: 'array', of: [{ type: 'image', options: { hotspot: true } }] }),
            defineField({ name: 'columns', title: 'Columns', type: 'number', initialValue: 3, options: { list: [2, 3, 4] } }),
          ]
        },
        {
          type: 'object',
          name: 'serviceGrid',
          title: '💉 Section: Featured Services Grid',
          fields: [
            defineField({ name: 'heading', title: 'Heading', type: 'string', initialValue: 'Our Specializations' }),
            defineField({ name: 'services', title: 'Select Services', type: 'array', of: [{ type: 'reference', to: [{ type: 'service' }] }] }),
          ]
        },
        {
          type: 'object',
          name: 'faqSection',
          title: '❓ Section: FAQ List',
          fields: [
            defineField({ name: 'heading', title: 'Section Heading', type: 'string' }),
            defineField({
              name: 'items',
              title: 'Questions',
              type: 'array',
              of: [{
                type: 'object',
                fields: [
                  defineField({ name: 'question', title: 'Question', type: 'string' }),
                  defineField({ name: 'answer', title: 'Answer', type: 'text' }),
                ]
              }]
            })
          ]
        }
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
