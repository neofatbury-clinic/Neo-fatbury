import { defineType, defineField } from 'sanity'

export const category = defineType({
  name: 'category',
  title: '📂 Service Categories',
  type: 'document',
  groups: [
    { name: 'settings', title: '⚙️ Basic Info' },
    { name: 'hero',     title: '🖼️ Hero Banner' },
    { name: 'trust',    title: '🏆 Why Choose Us' },
    { name: 'faq',      title: '❓ FAQ' },
    { name: 'cta',      title: '📣 Final CTA' },
    { name: 'seo',      title: '🔍 SEO' },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Category Title',
      type: 'string',
      description: '💡 e.g., "Skin Treatments", "Hair Solutions"',
      validation: r => r.required(),
      group: 'settings',
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      description: '💡 This becomes the URL part, e.g. "/skin"',
      options: { source: 'title' },
      validation: r => r.required(),
      group: 'settings',
    }),
    defineField({
      name: 'icon',
      title: 'Emoji Icon',
      type: 'string',
      description: '💡 e.g., ✨ or 💇',
      group: 'settings',
    }),
    defineField({
      name: 'description',
      title: 'Short Description (Menu Cards)',
      type: 'text',
      rows: 2,
      group: 'settings',
    }),
    defineField({
      name: 'order',
      title: 'Menu Order',
      type: 'number',
      group: 'settings',
    }),

    // ── HERO ──────────────────────────────────
    defineField({
      name: 'heroImage',
      title: 'Hero Background Image',
      type: 'image',
      options: { hotspot: true },
      group: 'hero',
    }),
    defineField({ name: 'heroHeadline',   title: 'Hero Headline (Title)', type: 'string', group: 'hero' }),
    defineField({ name: 'heroAccentLine', title: 'Hero Accent (Orange Title)', type: 'string', group: 'hero' }),
    defineField({ name: 'heroSubtext',    title: 'Hero Description (Subtitle)', type: 'text', rows: 3, group: 'hero' }),

    // ── TRUST ─────────────────────────────────
    defineField({ name: 'trustHeading',    title: '"Why Choose Us" Heading', type: 'string', group: 'trust' }),
    defineField({
      name: 'trustItems', title: 'Trust Items (3-Grid)', type: 'array', group: 'trust',
      of: [{ type: 'object', fields: [
        defineField({ name: 'title', title: 'Title', type: 'string' }),
        defineField({ name: 'desc',  title: 'Description', type: 'text', rows: 2 }),
      ], preview: { select: { title: 'title' } } }],
    }),

    // ── FAQ ───────────────────────────────────
    defineField({ name: 'faqHeading', title: 'FAQ Section Heading', type: 'string', group: 'faq' }),
    defineField({
      name: 'faqItems', title: 'FAQ Questions & Answers', type: 'array', group: 'faq',
      of: [{ type: 'object', fields: [
        defineField({ name: 'question', title: 'Question', type: 'string' }),
        defineField({ name: 'answer',   title: 'Answer',   type: 'text', rows: 3 }),
      ], preview: { select: { title: 'question' } } }],
    }),

    // ── FINAL CTA ─────────────────────────────
    defineField({ name: 'finalCtaHeading', title: 'Final CTA Heading', type: 'string', group: 'cta' }),
    defineField({ name: 'finalCtaSubtext', title: 'Final CTA Subtext', type: 'string', group: 'cta' }),
    defineField({ name: 'finalCtaBtn',     title: 'Button Text',      type: 'string', group: 'cta' }),

    // ── SEO ───────────────────────────────────
    defineField({
      name: 'seo', title: 'SEO Settings', type: 'object', group: 'seo',
      fields: [
        defineField({ name: 'metaTitle',       title: 'Meta Title',       type: 'string' }),
        defineField({ name: 'metaDescription', title: 'Meta Description', type: 'text', rows: 3 }),
        defineField({ name: 'customSchema', title: 'Custom JSON-LD Schema', type: 'text', rows: 10, description: 'Paste custom JSON-LD script here (without <script> tags)' }),
      ],
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'slug.current', media: 'heroImage' },
  },
})
