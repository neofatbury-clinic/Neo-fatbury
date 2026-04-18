// src/sanity/schemaTypes/blogPost.ts
// FULL BLOG POST SCHEMA — Rich content, SEO, categories, author
import { defineType, defineField } from 'sanity'

export const blogPost = defineType({
  name: 'blogPost',
  title: '📝 Blog & Articles',
  type: 'document',
  groups: [
    { name: 'content', title: '📝 Content' },
    { name: 'seo', title: '🔍 SEO & Meta' },
    { name: 'settings', title: '⚙️ Settings' },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Article Title',
      type: 'string',
      validation: (r) => r.required(),
      group: 'content',
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (r) => r.required(),
      description: 'Auto-generated from title. This is the page URL.',
      group: 'settings',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Publish Date',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      group: 'settings',
    }),
    defineField({
      name: 'isPublished',
      title: 'Published (visible on website)',
      type: 'boolean',
      initialValue: false,
      description: 'Toggle this ON to make the blog post visible to visitors',
      group: 'settings',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Skin Care', value: 'skin-care' },
          { title: 'Hair Care', value: 'hair-care' },
          { title: 'Weight Loss', value: 'weight-loss' },
          { title: 'Clinical Tips', value: 'clinical-tips' },
          { title: 'Patient Stories', value: 'patient-stories' },
          { title: 'News & Updates', value: 'news' },
        ],
        layout: 'radio',
      },
      group: 'settings',
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: 'teamMember' }],
      description: 'Select the doctor or team member who wrote this',
      group: 'settings',
    }),
    defineField({
      name: 'relatedService',
      title: 'Related Treatment',
      type: 'reference',
      to: [{ type: 'service' }],
      description: 'Link to a service page (optional)',
      group: 'settings',
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: { hotspot: true },
      group: 'content',
    }),
    defineField({
      name: 'excerpt',
      title: 'Short Summary (shown on blog list)',
      type: 'text',
      rows: 3,
      description: 'Keep under 200 characters',
      validation: (r) => r.max(200),
      group: 'content',
    }),
    defineField({
      name: 'body',
      title: 'Article Content',
      description: 'Use this like a Word document — add text, images, bullet lists, headings',
      type: 'array',
      group: 'content',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'Heading 1', value: 'h1' },
            { title: 'Heading 2', value: 'h2' },
            { title: 'Heading 3', value: 'h3' },
            { title: 'Quote', value: 'blockquote' },
          ],
          marks: {
            decorators: [
              { title: 'Bold', value: 'strong' },
              { title: 'Italic', value: 'em' },
              { title: 'Underline', value: 'underline' },
            ],
          },
        },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            defineField({ name: 'caption', title: 'Image Caption', type: 'string' }),
            defineField({ name: 'alt', title: 'Alt Text (for SEO)', type: 'string' }),
          ],
        },
        {
          type: 'object',
          name: 'callout',
          title: 'Callout Box',
          fields: [
            defineField({ name: 'type', title: 'Type', type: 'string', options: { list: ['info', 'tip', 'warning', 'success'], layout: 'radio' } }),
            defineField({ name: 'text', title: 'Callout Text', type: 'text', rows: 2 }),
          ],
          preview: { select: { title: 'text', subtitle: 'type' } },
        },
      ],
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
      description: 'Press Enter after each tag',
      group: 'settings',
    }),

    // ── SEO ───────────────────────────────────────
    defineField({
      name: 'seo',
      title: 'SEO & Meta Tags',
      type: 'object',
      group: 'seo',
      fields: [
        defineField({ name: 'metaTitle', title: 'Google Title', type: 'string', description: 'Keep under 60 chars (leave empty to use article title)', validation: (r) => r.max(60) }),
        defineField({ name: 'metaDescription', title: 'Google Description', type: 'text', rows: 2, description: 'Keep under 155 chars', validation: (r) => r.max(155) }),
        defineField({ name: 'ogImage', title: 'Social Share Image', type: 'image', description: 'Shown on WhatsApp/Facebook (leave empty to use cover image)', options: { hotspot: true } }),
        defineField({ name: 'canonicalUrl', title: 'Canonical URL', type: 'url', description: 'Only fill if this content exists elsewhere' }),
      ],
    }),
  ],

  preview: {
    select: { title: 'title', subtitle: 'publishedAt', media: 'coverImage' },
    prepare({ title, subtitle, media }) {
      return {
        title,
        subtitle: subtitle ? new Date(subtitle).toLocaleDateString('en-IN') : 'Draft',
        media,
      }
    },
  },

  orderings: [
    { title: 'Newest First', name: 'publishedAtDesc', by: [{ field: 'publishedAt', direction: 'desc' }] },
    { title: 'Category', name: 'categoryAsc', by: [{ field: 'category', direction: 'asc' }] },
  ],
})
