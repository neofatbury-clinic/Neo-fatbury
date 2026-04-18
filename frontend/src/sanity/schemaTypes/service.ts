// src/sanity/schemaTypes/service.ts
import { defineType, defineField } from 'sanity'

export const service = defineType({
  name: 'service',
  title: '💉 Services & Treatments',
  type: 'document',
  groups: [
    { name: 'settings', title: '⚙️ Basic Info' },
    { name: 'hero', title: '🖼️ Top Banner' },
    { name: 'content', title: '📝 Content Sections' },
    { name: 'seo', title: '🔍 Google/SEO' },
    { name: 'schema', title: '📊 Ads Data' },
  ],
  fields: [
    // ── BASIC ─────────────────────────────────────
    defineField({
      name: 'name',
      title: 'Service/Treatment Name',
      type: 'string',
      description: '💡 Give this treatment a clear name, e.g. "Acne Clearing" or "Laser Hair Removal"',
      validation: (r) => r.required(),
      group: 'settings',
    }),
    defineField({
      name: 'slug',
      title: 'Page Web Address (Slug)',
      type: 'slug',
      options: { source: 'name', maxLength: 96 },
      validation: (r) => r.required(),
      description: '💡 Click "Generate" to create a standard web address for this page based on the name.',
      group: 'settings',
    }),
    defineField({
      name: 'category',
      title: 'Service Category',
      type: 'string',
      options: {
        list: [
          { title: '✨ Skin Treatments', value: 'skin' },
          { title: '💇 Hair Treatments', value: 'hair' },
          { title: '⚖️ Slimming & Body', value: 'slimming' },
          { title: '🩹 Other Treatments', value: 'other' },
        ],
        layout: 'radio',
      },
      description: '💡 Select which main section this treatment belongs to.',
      group: 'settings',
    }),
    defineField({
      name: 'isFeatured',
      title: 'Show on Homepage?',
      type: 'boolean',
      initialValue: false,
      description: '💡 Turn this ON to feature this service in the grid on your homepage.',
      group: 'settings',
    }),
    defineField({
      name: 'order',
      title: 'Display Sequence Number',
      type: 'number',
      description: '💡 Optional: Use numbers like 1, 2, 3 to control the order in lists (lower numbers show first).',
      group: 'settings',
    }),

    // ── HERO SECTION ──────────────────────────────
    defineField({
      name: 'heroImage',
      title: 'Top Banner Image',
      type: 'image',
      description: '💡 This large image appears at the very top of the page. High-quality landscape photos work best.',
      options: { hotspot: true },
      group: 'hero',
    }),
    defineField({
      name: 'heroHeadline',
      title: 'Top Heading (Line 1)',
      type: 'string',
      description: '💡 The main big text, e.g. "Flawless Radiant Skin."',
      group: 'hero',
    }),
    defineField({
      name: 'heroAccentLine',
      title: 'Accent Heading (Line 2 - Orange)',
      type: 'string',
      description: '💡 Special highlighted text below Line 1, e.g. "Clinical Precision."',
      group: 'hero',
    }),
    defineField({
      name: 'heroSubtext',
      title: 'Intro Text (Below Heading)',
      type: 'text',
      rows: 3,
      description: '💡 A brief summary of why people should choose this treatment.',
      group: 'hero',
    }),
    defineField({
      name: 'heroTrustBadges',
      title: 'Feature Highlights (Icons)',
      type: 'array',
      description: '💡 Add 2-4 key features with icons (e.g. 🛡️ Safe & Proven, ✨ Immediate Glow)',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'icon', title: 'Emoji Icon', type: 'string', description: '💡 Example: ✨ ✅ 🛡️ 🔬' }),
          defineField({ name: 'label', title: 'Highlight Text', type: 'string', description: '💡 Example: "FDA APPROVED"' }),
        ],
        preview: { select: { title: 'label', subtitle: 'icon' } },
      }],
      group: 'hero',
    }),
    defineField({
      name: 'heroCtaText',
      title: 'Booking Button Text',
      type: 'string',
      initialValue: 'Book Free Consultation',
      description: '💡 What the main button at the top should say.',
      group: 'hero',
    }),

    // ── MAIN CONTENT ──────────────────────────────
    defineField({
      name: 'shortDescription',
      title: 'Menu Card Summary',
      type: 'text',
      rows: 2,
      description: '💡 A very short one-sentence summary shown on cards throughout the site menu.',
      validation: (r) => r.max(160),
      group: 'content',
    }),
    defineField({
      name: 'contentSections',
      title: 'Custom Page Layout',
      description: '💡 Build your page by adding sections! Click "Add item" to insert a text block, images, or FAQ.',
      type: 'array',
      group: 'content',
      of: [
        {
          type: 'object',
          name: 'textSection',
          title: 'Section: Text & Image',
          fields: [
            defineField({ name: 'sectionTitle', title: 'Heading for this section', type: 'string' }),
            defineField({ name: 'body', title: 'Main Text Content', type: 'array', of: [{ type: 'block' }] }),
            defineField({ name: 'image', title: 'Side Image', type: 'image', options: { hotspot: true } }),
            defineField({
              name: 'imagePosition',
              title: 'Image Placement',
              type: 'string',
              options: { list: [{title: 'Image Left, Text Right', value: 'left'}, {title: 'Text Left, Image Right', value: 'right'}], layout: 'radio' },
              initialValue: 'right',
            }),
            defineField({
              name: 'backgroundColor',
              title: 'Section Shade',
              type: 'string',
              options: { list: ['White', 'Light Grey', 'Teal Tint', 'Dark Overlay'] }
            }),
          ],
          preview: { select: { title: 'sectionTitle' }, prepare: ({ title }) => ({ title: `📄 Text/Image: ${title || 'Untitled'}` }) },
        },
        {
          type: 'object',
          name: 'faqSection',
          title: 'Section: Frequently Asked Questions',
          fields: [
            defineField({ name: 'sectionTitle', title: 'FAQ Heading', type: 'string', initialValue: 'Frequently Asked Questions' }),
            defineField({
              name: 'faqs',
              title: 'Question & Answer List',
              type: 'array',
              of: [{
                type: 'object',
                fields: [
                  defineField({ name: 'question', title: 'The Question', type: 'string' }),
                  defineField({ name: 'answer', title: 'The Answer', type: 'text', rows: 3 }),
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
          title: 'Section: Key Benefits Grid',
          fields: [
            defineField({ name: 'sectionTitle', title: 'Benefits Heading', type: 'string' }),
            defineField({
              name: 'items',
              title: 'Benefit Items',
              type: 'array',
              of: [{
                type: 'object',
                fields: [
                  defineField({ name: 'icon', title: 'Emoji Icon', type: 'string', description: '💡 e.g. 💎 ✅ 🔬' }),
                  defineField({ name: 'title', title: 'Benefit Title', type: 'string' }),
                  defineField({ name: 'description', title: 'Explain the benefit', type: 'text', rows: 2 }),
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
          title: 'Section: Result Photos',
          fields: [
            defineField({ name: 'sectionTitle', title: 'Gallery Heading', type: 'string', initialValue: 'Real Transformations' }),
            defineField({
              name: 'results',
              title: 'Photos',
              type: 'array',
              of: [{
                type: 'object',
                fields: [
                  defineField({ name: 'label', title: 'Caption', type: 'string' }),
                  defineField({ name: 'image', title: 'Comparison Photo', type: 'image', options: { hotspot: true } }),
                ],
              }],
            }),
          ],
          preview: { prepare: () => ({ title: '📸 Results Gallery' }) },
        },
        {
          type: 'object',
          name: 'ctaSection',
          title: 'Section: Big Call-to-Action',
          fields: [
            defineField({ name: 'headline', title: 'Banner Main Text', type: 'string' }),
            defineField({ name: 'subtext', title: 'Banner Supporting Text', type: 'string' }),
            defineField({ name: 'buttonText', title: 'Button Label', type: 'string', initialValue: 'Book Free Consultation' }),
          ],
          preview: { select: { title: 'headline' }, prepare: ({ title }) => ({ title: `📣 Banner: ${title || 'CTA'}` }) },
        },
      ],
    }),

    // ── SEO ───────────────────────────────────────
    defineField({
      name: 'seo',
      title: 'Google & SEO Settings',
      type: 'object',
      description: '💡 Fill this to help Google find and display this page correctly.',
      group: 'seo',
      fields: [
        defineField({ name: 'metaTitle', title: 'Google Search Title', type: 'string', description: '💡 What people see as the blue link in Google search results.' }),
        defineField({ name: 'metaDescription', title: 'Google Search Description', type: 'text', rows: 3, description: '💡 The short summary Google shows under your link.' }),
        defineField({ name: 'canonicalUrl', title: 'Canonical URL', type: 'url', description: '💡 Optional: Use this if you want search engines to point to a different preferred version of this page.' }),
        defineField({ name: 'ogImage', title: 'Social Share Image', type: 'image', description: '💡 Image shown when you share this link on WhatsApp/Facebook.' }),
      ],
    }),

    // ── AD SCHEMA ─────────────────────────────────
    defineField({
      name: 'adSchema',
      title: 'Google Ads Rich Data',
      type: 'object',
      description: '💡 Optional: Fill this to improve your ad quality scores.',
      group: 'schema',
      fields: [
        defineField({ name: 'priceFrom', title: 'Price Starts From (₹)', type: 'number' }),
        defineField({ name: 'duration', title: 'Timing/Duration', type: 'string', description: 'e.g. "30-45 mins"' }),
        defineField({ name: 'aggregateRating', title: 'Star Rating (1-5)', type: 'number' }),
        defineField({ name: 'reviewCount', title: 'Review Count', type: 'number' }),
      ],
    }),
  ],

  preview: {
    select: { title: 'name', subtitle: 'category', media: 'heroImage' },
  },
})
