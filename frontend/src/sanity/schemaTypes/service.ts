// src/sanity/schemaTypes/service.ts
// COMPLETE SERVICE/TREATMENT PAGE SCHEMA
// Every field here = one thing a non-technical person can edit in Sanity Studio
import { defineType, defineField } from 'sanity'

export const service = defineType({
  name: 'service',
  title: '💉 Services & Treatments',
  type: 'document',
  groups: [
    { name: 'hero', title: '🖼️ Hero Section' },
    { name: 'content', title: '📝 Page Content' },
    { name: 'seo', title: '🔍 SEO & Meta Tags' },
    { name: 'schema', title: '📊 Ad Schema (Google/Meta)' },
    { name: 'settings', title: '⚙️ Settings' },
  ],
  fields: [
    // ── BASIC ─────────────────────────────────────
    defineField({
      name: 'name',
      title: 'Service Name',
      type: 'string',
      description: 'e.g. "Laser Hair Reduction", "Acne Treatment"',
      validation: (r) => r.required(),
      group: 'settings',
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug (auto-generated)',
      type: 'slug',
      options: { source: 'name', maxLength: 96 },
      validation: (r) => r.required(),
      description: 'This determines the page URL. Auto-generated from name.',
      group: 'settings',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Skin Treatments', value: 'skin' },
          { title: 'Hair Treatments', value: 'hair' },
          { title: 'Slimming & Body', value: 'slimming' },
          { title: 'Other', value: 'other' },
        ],
        layout: 'radio',
      },
      group: 'settings',
    }),
    defineField({
      name: 'isFeatured',
      title: 'Show on Homepage?',
      type: 'boolean',
      initialValue: false,
      group: 'settings',
    }),
    defineField({
      name: 'order',
      title: 'Display Order (lower = first)',
      type: 'number',
      group: 'settings',
    }),

    // ── HERO SECTION ──────────────────────────────
    defineField({
      name: 'heroImage',
      title: 'Hero Background Image',
      type: 'image',
      description: '⚠️ Upload the clinical/doctor photo here. This becomes the hero background.',
      options: { hotspot: true },
      group: 'hero',
    }),
    defineField({
      name: 'heroHeadline',
      title: 'Hero Main Headline (Line 1)',
      type: 'string',
      description: 'e.g. "Smooth Skin."',
      group: 'hero',
    }),
    defineField({
      name: 'heroAccentLine',
      title: 'Hero Accent Headline (Line 2 — shown in orange)',
      type: 'string',
      description: 'e.g. "Laser Precision."',
      group: 'hero',
    }),
    defineField({
      name: 'heroSubtext',
      title: 'Hero Description',
      type: 'text',
      rows: 3,
      description: 'Short description below the headline',
      group: 'hero',
    }),
    defineField({
      name: 'heroTrustBadges',
      title: 'Trust Badges (shown below description)',
      type: 'array',
      description: 'Add up to 4 trust badges (e.g. "FDA APPROVED", "ZERO DOWNTIME")',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'icon', title: 'Emoji Icon', type: 'string', description: 'e.g. 🛡️ 💎 ❄️' }),
          defineField({ name: 'label', title: 'Badge Text', type: 'string', description: 'e.g. "FDA APPROVED"' }),
        ],
        preview: { select: { title: 'label', subtitle: 'icon' } },
      }],
      group: 'hero',
    }),
    defineField({
      name: 'heroCtaText',
      title: 'Hero CTA Button Text',
      type: 'string',
      initialValue: 'Book Free Consultation',
      group: 'hero',
    }),

    // ── MAIN CONTENT ──────────────────────────────
    defineField({
      name: 'shortDescription',
      title: 'Short Description (shown on service cards)',
      type: 'text',
      rows: 2,
      validation: (r) => r.max(160),
      group: 'content',
    }),
    defineField({
      name: 'contentSections',
      title: 'Page Content Sections',
      description: 'Add/remove/reorder content blocks — each block is a section on the page.',
      type: 'array',
      group: 'content',
      of: [
        {
          type: 'object',
          name: 'textSection',
          title: 'Text + Image Section',
          fields: [
            defineField({ name: 'sectionTitle', title: 'Section Title', type: 'string' }),
            defineField({ name: 'body', title: 'Content', type: 'array', of: [{ type: 'block' }] }),
            defineField({ name: 'image', title: 'Image (optional)', type: 'image', options: { hotspot: true } }),
            defineField({
              name: 'imagePosition',
              title: 'Image Position',
              type: 'string',
              options: { list: ['left', 'right'], layout: 'radio' },
              initialValue: 'right',
            }),
            defineField({
              name: 'columns',
              title: 'Grid Columns',
              type: 'string',
              options: { list: ['1 column', '2 columns', '3 columns', '4 columns'], layout: 'radio' },
              initialValue: '2 columns',
            }),
            defineField({ name: 'backgroundColor', title: 'Background Color', type: 'string',
              options: { list: ['White', 'Light Grey', 'Teal Tint', 'Dark'] }
            }),
          ],
          preview: { select: { title: 'sectionTitle' }, prepare: ({ title }) => ({ title: `📄 ${title || 'Text Section'}` }) },
        },
        {
          type: 'object',
          name: 'faqSection',
          title: 'FAQ Section',
          fields: [
            defineField({ name: 'sectionTitle', title: 'Section Title', type: 'string', initialValue: 'Frequently Asked Questions' }),
            defineField({
              name: 'faqs',
              title: 'FAQ Items',
              type: 'array',
              of: [{
                type: 'object',
                fields: [
                  defineField({ name: 'question', title: 'Question', type: 'string', validation: (r) => r.required() }),
                  defineField({ name: 'answer', title: 'Answer', type: 'text', rows: 3, validation: (r) => r.required() }),
                ],
                preview: { select: { title: 'question' } },
              }],
            }),
          ],
          preview: { prepare: () => ({ title: '❓ FAQ Section' }) },
        },
        {
          type: 'object',
          name: 'benefitsSection',
          title: 'Benefits / Features Grid',
          fields: [
            defineField({ name: 'sectionTitle', title: 'Section Title', type: 'string' }),
            defineField({
              name: 'columns',
              title: 'Grid Columns',
              type: 'string',
              options: { list: ['2 columns', '3 columns', '4 columns'], layout: 'radio' },
              initialValue: '3 columns',
            }),
            defineField({
              name: 'items',
              title: 'Benefit Items',
              type: 'array',
              of: [{
                type: 'object',
                fields: [
                  defineField({ name: 'icon', title: 'Emoji Icon', type: 'string' }),
                  defineField({ name: 'title', title: 'Title', type: 'string' }),
                  defineField({ name: 'description', title: 'Description', type: 'text', rows: 2 }),
                ],
                preview: { select: { title: 'title', subtitle: 'icon' } },
              }],
            }),
          ],
          preview: { prepare: () => ({ title: '✨ Benefits Grid' }) },
        },
        {
          type: 'object',
          name: 'gallerySection',
          title: 'Before/After Results Gallery',
          fields: [
            defineField({ name: 'sectionTitle', title: 'Section Title', type: 'string', initialValue: 'Clinical Transformations' }),
            defineField({
              name: 'results',
              title: 'Before/After Images',
              type: 'array',
              of: [{
                type: 'object',
                fields: [
                  defineField({ name: 'label', title: 'Label', type: 'string', description: 'e.g. "Laser Hair Reduction"' }),
                  defineField({ name: 'image', title: 'Before/After Image', type: 'image', options: { hotspot: true } }),
                  defineField({ name: 'testimonial', title: 'Patient Quote (optional)', type: 'text', rows: 2 }),
                ],
                preview: { select: { title: 'label', media: 'image' } },
              }],
            }),
          ],
          preview: { prepare: () => ({ title: '📸 Before/After Gallery' }) },
        },
        {
          type: 'object',
          name: 'processSection',
          title: 'Treatment Process Steps',
          fields: [
            defineField({ name: 'sectionTitle', title: 'Section Title', type: 'string' }),
            defineField({
              name: 'steps',
              title: 'Steps',
              type: 'array',
              of: [{
                type: 'object',
                fields: [
                  defineField({ name: 'stepNumber', title: 'Step Number', type: 'number' }),
                  defineField({ name: 'title', title: 'Step Title', type: 'string' }),
                  defineField({ name: 'description', title: 'Description', type: 'text', rows: 2 }),
                ],
                preview: { select: { title: 'title', subtitle: 'stepNumber' } },
              }],
            }),
          ],
          preview: { prepare: () => ({ title: '🪜 Process Steps' }) },
        },
        {
          type: 'object',
          name: 'ctaSection',
          title: 'Call-to-Action Banner',
          fields: [
            defineField({ name: 'headline', title: 'CTA Headline', type: 'string' }),
            defineField({ name: 'subtext', title: 'CTA Subtext', type: 'string' }),
            defineField({ name: 'buttonText', title: 'Button Text', type: 'string', initialValue: 'Book Free Consultation' }),
          ],
          preview: { select: { title: 'headline' }, prepare: ({ title }) => ({ title: `📣 CTA: ${title || ''}` }) },
        },
      ],
    }),

    // ── SEO ───────────────────────────────────────
    defineField({
      name: 'seo',
      title: 'SEO & Meta Tags',
      type: 'object',
      description: '✅ Fill this for every page — this is what Google shows in search results',
      group: 'seo',
      fields: [
        defineField({ name: 'metaTitle', title: 'Page Title (shown in Google)', type: 'string', description: 'Keep under 60 characters', validation: (r) => r.max(60) }),
        defineField({ name: 'metaDescription', title: 'Meta Description (shown in Google)', type: 'text', rows: 3, description: 'Keep under 155 characters', validation: (r) => r.max(155) }),
        defineField({ name: 'ogImage', title: 'Social Share Image (OG Image)', type: 'image', description: 'Image shown when page is shared on WhatsApp/Facebook', options: { hotspot: true } }),
        defineField({ name: 'keywords', title: 'Keywords', type: 'array', of: [{ type: 'string' }], options: { layout: 'tags' } }),
        defineField({ name: 'noIndex', title: 'Hide from Google (noindex)', type: 'boolean', initialValue: false }),
      ],
    }),

    // ── AD SCHEMA ─────────────────────────────────
    defineField({
      name: 'adSchema',
      title: 'Ad Schema Settings',
      type: 'object',
      description: '✅ Fill this to improve Google Ads quality score and get rich results',
      group: 'schema',
      fields: [
        defineField({ name: 'serviceType', title: 'Service Type for Schema', type: 'string', description: 'e.g. "Laser Hair Removal", "Acne Treatment"' }),
        defineField({ name: 'priceFrom', title: 'Starting Price (₹)', type: 'number', description: 'Used in Google rich results' }),
        defineField({ name: 'priceTo', title: 'Max Price (₹)', type: 'number' }),
        defineField({ name: 'duration', title: 'Treatment Duration', type: 'string', description: 'e.g. "45 minutes"' }),
        defineField({ name: 'aggregateRating', title: 'Star Rating (1-5)', type: 'number', validation: (r) => r.min(1).max(5) }),
        defineField({ name: 'reviewCount', title: 'Number of Reviews', type: 'number' }),
      ],
    }),
  ],

  preview: {
    select: { title: 'name', subtitle: 'category', media: 'heroImage' },
  },

  orderings: [
    { title: 'Display Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] },
    { title: 'Category', name: 'categoryAsc', by: [{ field: 'category', direction: 'asc' }] },
  ],
})
