// src/sanity/schemaTypes/service.ts
// Full schema — mirrors every editable field on every service page
import { defineType, defineField } from 'sanity'

export const service = defineType({
  name: 'service',
  title: '💉 Services & Treatments',
  type: 'document',
  groups: [
    { name: 'settings',     title: '⚙️ Basic Info' },
    { name: 'hero',         title: '🖼️ Hero Banner' },
    { name: 'problem',      title: '❗ Problem Section' },
    { name: 'whatis',       title: '📖 What Is Section' },
    { name: 'before_after', title: '📸 Before & After' },
    { name: 'benefits',     title: '✅ Benefits Grid' },
    { name: 'process',      title: '🔄 How It Works' },
    { name: 'technology',   title: '🔬 Technology Section' },
    { name: 'trust',        title: '🏆 Why Choose Us' },
    { name: 'faq',          title: '❓ FAQ' },
    { name: 'cta',          title: '📣 Final CTA' },
    { name: 'extras',       title: '➕ Extra Sections' },
    { name: 'seo',          title: '🔍 SEO' },
    { name: 'schema',       title: '📊 Ads Data' },
  ],
  fields: [

    // ── BASIC ─────────────────────────────────────────────────────────────────
    defineField({
      name: 'name', title: 'Service / Treatment Name', type: 'string',
      validation: r => r.required(), group: 'settings',
    }),
    defineField({
      name: 'slug', title: 'Page URL Slug', type: 'slug',
      options: { source: 'name', maxLength: 96 },
      validation: r => r.required(), group: 'settings',
    }),
    defineField({
      name: 'category', 
      title: 'Service Category', 
      type: 'reference',
      to: [{ type: 'category' }],
      description: '💡 Select the category (Skin, Hair, Slimming, etc.). You can add new ones in the Categories menu.',
      group: 'settings',
    }),
    defineField({ name: 'isFeatured', title: 'Show on Homepage?', type: 'boolean', initialValue: false, group: 'settings' }),
    defineField({ name: 'order', title: 'Display Order', type: 'number', group: 'settings' }),
    defineField({ name: 'shortDescription', title: 'Short Description (Menu Cards)', type: 'text', rows: 2, group: 'settings' }),

    // ── HERO ─────────────────────────────────────────────────────────────────
    defineField({
      name: 'heroImage', title: 'Hero Background Image', type: 'image',
      description: '💡 The large background image shown behind the hero section. Upload the image from /public/images/ here.',
      options: { hotspot: true }, group: 'hero',
    }),
    defineField({ name: 'heroHeadline',   title: 'Hero Headline (Line 1)', type: 'string', group: 'hero' }),
    defineField({ name: 'heroAccentLine', title: 'Hero Accent (Line 2 — Orange)', type: 'string', group: 'hero' }),
    defineField({ name: 'heroSubtext',    title: 'Hero Description', type: 'text', rows: 3, group: 'hero' }),
    defineField({
      name: 'heroTrustBadges', title: 'Hero Trust Badges', type: 'array', group: 'hero',
      of: [{ type: 'object', fields: [
        defineField({ name: 'icon',  title: 'Emoji', type: 'string' }),
        defineField({ name: 'label', title: 'Badge Text', type: 'string' }),
      ], preview: { select: { title: 'label', subtitle: 'icon' } } }],
    }),
    defineField({ name: 'heroCtaText', title: 'Hero CTA Button Text', type: 'string', initialValue: 'Book Free Consultation', group: 'hero' }),

    // ── PROBLEM SECTION ───────────────────────────────────────────────────────
    defineField({ name: 'problemHeading',     title: 'Problem Section Heading', type: 'string', group: 'problem' }),
    defineField({ name: 'problemAccentText',  title: 'Problem Heading Accent (Orange Part)', type: 'string', group: 'problem' }),
    defineField({
      name: 'problemCards', title: 'Problem Cards (4-Grid)', type: 'array', group: 'problem',
      of: [{ type: 'object', fields: [
        defineField({ name: 'icon',  title: 'Emoji Icon', type: 'string' }),
        defineField({ name: 'title', title: 'Card Title', type: 'string' }),
        defineField({ name: 'desc',  title: 'Card Description', type: 'text', rows: 2 }),
      ], preview: { select: { title: 'title', subtitle: 'icon' } } }],
    }),
    defineField({ name: 'problemBottomText',   title: 'Problem Section Bottom Text', type: 'string', group: 'problem' }),
    defineField({ name: 'problemBottomAccent', title: 'Bottom Text Accent (Orange)', type: 'string', group: 'problem' }),

    // ── WHAT IS SECTION ───────────────────────────────────────────────────────
    defineField({ name: 'whatIsLabel',        title: 'Section Label (Small Uppercase)', type: 'string', group: 'whatis' }),
    defineField({ name: 'whatIsHeading',      title: 'What Is — Heading', type: 'string', group: 'whatis' }),
    defineField({ name: 'whatIsAccentWord',   title: 'What Is — Accent Part (Orange)', type: 'string', group: 'whatis' }),
    defineField({ name: 'whatIsBody',         title: 'Description Paragraph', type: 'text', rows: 4, group: 'whatis' }),
    defineField({ name: 'whatIsListHeading',  title: '"Our Treatments Include" Sub-Heading', type: 'string', group: 'whatis' }),
    defineField({
      name: 'whatIsPoints', title: 'Treatment/Feature List', type: 'array', group: 'whatis',
      of: [{ type: 'object', fields: [
        defineField({ name: 'icon', title: 'Emoji', type: 'string' }),
        defineField({ name: 'text', title: 'Point Text', type: 'string' }),
      ], preview: { select: { title: 'text', subtitle: 'icon' } } }],
    }),
    defineField({
      name: 'whatIsImage', title: 'What Is — Side Image', type: 'image',
      options: { hotspot: true }, group: 'whatis',
    }),
    defineField({ name: 'whatIsImageBadge', title: 'Image Badge Text (e.g. NEOFATBURY LASER STANDARD)', type: 'string', group: 'whatis' }),
    defineField({
      name: 'whatIsAuthorityNote', title: 'Clinical Authority Note (Highlighted Box) — Optional', type: 'object', group: 'whatis',
      fields: [
        defineField({ name: 'label', title: 'Note Label', type: 'string' }),
        defineField({ name: 'text',  title: 'Note Text',  type: 'text', rows: 2 }),
      ],
    }),

    // ── BEFORE & AFTER ────────────────────────────────────────────────────────
    defineField({ name: 'baHeading',    title: 'Before/After Heading',       type: 'string', group: 'before_after' }),
    defineField({ name: 'baAccentWord', title: 'Before/After Accent (Orange)', type: 'string', group: 'before_after' }),
    defineField({ name: 'baSubtext',    title: 'Before/After Subtext',       type: 'string', group: 'before_after' }),
    defineField({
      name: 'baImage', title: 'Before & After Photo', type: 'image',
      options: { hotspot: true }, group: 'before_after',
      description: '16:6 aspect ratio recommended',
    }),
    defineField({ name: 'baCtaText', title: 'Bottom Call-to-Action Text', type: 'string', group: 'before_after' }),
    defineField({ name: 'baCtaBtnText', title: 'Button Text', type: 'string', group: 'before_after' }),

    // ── BENEFITS GRID ─────────────────────────────────────────────────────────
    defineField({ name: 'benefitsHeading',    title: 'Benefits Section Heading', type: 'string', group: 'benefits' }),
    defineField({ name: 'benefitsAccentWord', title: 'Benefits Heading Accent (Orange)', type: 'string', group: 'benefits' }),
    defineField({
      name: 'benefitItems', title: 'Benefit Items (5-Grid)', type: 'array', group: 'benefits',
      of: [{ type: 'object', fields: [
        defineField({ name: 'icon', title: 'Emoji', type: 'string' }),
        defineField({ name: 'text', title: 'Benefit Text', type: 'string' }),
      ], preview: { select: { title: 'text', subtitle: 'icon' } } }],
    }),

    // ── HOW IT WORKS / PROCESS ────────────────────────────────────────────────
    defineField({ name: 'processHeading',    title: 'Process Section Heading', type: 'string', group: 'process' }),
    defineField({ name: 'processAccentWord', title: 'Process Heading Accent (Orange)', type: 'string', group: 'process' }),
    defineField({
      name: 'processSteps', title: 'Process Steps (4-Grid)', type: 'array', group: 'process',
      of: [{ type: 'object', fields: [
        defineField({ name: 'icon',  title: 'Step Emoji/Number', type: 'string' }),
        defineField({ name: 'title', title: 'Step Title', type: 'string' }),
        defineField({ name: 'desc',  title: 'Step Description', type: 'text', rows: 2 }),
      ], preview: { select: { title: 'title', subtitle: 'icon' } } }],
    }),

    // ── TECHNOLOGY SECTION ────────────────────────────────────────────────────
    defineField({ name: 'techHeading',    title: 'Technology Section Heading', type: 'string', group: 'technology' }),
    defineField({ name: 'techAccentWord', title: 'Technology Heading Accent (Orange)', type: 'string', group: 'technology' }),
    defineField({ name: 'techBody',       title: 'Technology Description', type: 'text', rows: 3, group: 'technology' }),
    defineField({
      name: 'techFeatures', title: 'Technology Feature Points', type: 'array', group: 'technology',
      of: [{ type: 'object', fields: [
        defineField({ name: 'icon', title: 'Emoji', type: 'string' }),
        defineField({ name: 'text', title: 'Feature Text', type: 'string' }),
      ], preview: { select: { title: 'text', subtitle: 'icon' } } }],
    }),
    defineField({
      name: 'techImage', title: 'Technology Section Image', type: 'image',
      options: { hotspot: true }, group: 'technology',
    }),

    // ── EXTRA SECTIONS (page-specific) ───────────────────────────────────────
    defineField({
      name: 'causesSection', title: 'Causes Grid (Hair Loss page)', type: 'object', group: 'extras',
      fields: [
        defineField({ name: 'heading',    title: 'Heading',       type: 'string' }),
        defineField({ name: 'accentWord', title: 'Accent (Orange)', type: 'string' }),
        defineField({
          name: 'items', title: 'Cause Items', type: 'array',
          of: [{ type: 'object', fields: [
            defineField({ name: 'icon',  title: 'Emoji', type: 'string' }),
            defineField({ name: 'title', title: 'Title', type: 'string' }),
          ], preview: { select: { title: 'title', subtitle: 'icon' } } }],
        }),
      ],
    }),
    defineField({
      name: 'whoIsItFor', title: '"Who Can Benefit?" Chips', type: 'object', group: 'extras',
      fields: [
        defineField({ name: 'heading',    title: 'Heading',       type: 'string' }),
        defineField({ name: 'accentWord', title: 'Accent (Orange)', type: 'string' }),
        defineField({
          name: 'items', title: 'Audience Items', type: 'array',
          of: [{ type: 'object', fields: [
            defineField({ name: 'icon', title: 'Emoji', type: 'string' }),
            defineField({ name: 'text', title: 'Text',  type: 'string' }),
          ], preview: { select: { title: 'text', subtitle: 'icon' } } }],
        }),
      ],
    }),
    defineField({
      name: 'targetAreas', title: '"Target Areas" Chips (CoolSculpting)', type: 'object', group: 'extras',
      fields: [
        defineField({ name: 'heading',    title: 'Heading',       type: 'string' }),
        defineField({ name: 'accentWord', title: 'Accent (Orange)', type: 'string' }),
        defineField({
          name: 'items', title: 'Area Items', type: 'array',
          of: [{ type: 'object', fields: [
            defineField({ name: 'icon', title: 'Emoji', type: 'string' }),
            defineField({ name: 'text', title: 'Area Name', type: 'string' }),
          ], preview: { select: { title: 'text', subtitle: 'icon' } } }],
        }),
      ],
    }),

    // ── MISSING FIELDS (to resolve 'Unknown fields' error) ───────────────────────
    defineField({ name: 'treatHeading', title: 'Treat Section Heading', type: 'string', group: 'extras' }),
    defineField({
      name: 'treatItems', title: 'Treat Section Items', type: 'array', group: 'extras',
      of: [{ type: 'object', fields: [
        defineField({ name: 'icon', title: 'Emoji Icon', type: 'string' }),
        defineField({ name: 'text', title: 'Item Text', type: 'string' }),
      ], preview: { select: { title: 'text', subtitle: 'icon' } } }],
    }),
    defineField({ name: 'whoHeading', title: 'Who Section Heading', type: 'string', group: 'extras' }),
    defineField({
      name: 'whoItems', title: 'Who Section Items', type: 'array', group: 'extras',
      of: [{ type: 'object', fields: [
        defineField({ name: 'icon', title: 'Emoji Icon', type: 'string' }),
        defineField({ name: 'text', title: 'Item Text', type: 'string' }),
      ], preview: { select: { title: 'text', subtitle: 'icon' } } }],
    }),

    // ── TRUST / WHY CHOOSE US ─────────────────────────────────────────────────
    defineField({ name: 'trustHeading',    title: '"Why Choose Us" Heading', type: 'string', group: 'trust' }),
    defineField({ name: 'trustAccentWord', title: '"Why Choose Us" Accent (Orange)', type: 'string', group: 'trust' }),
    defineField({
      name: 'trustItems', title: 'Trust Items (4-Grid)', type: 'array', group: 'trust',
      of: [{ type: 'object', fields: [
        defineField({ name: 'icon', title: 'Emoji', type: 'string' }),
        defineField({ name: 'text', title: 'Item Text', type: 'string' }),
      ], preview: { select: { title: 'text', subtitle: 'icon' } } }],
    }),

    // ── FAQ ───────────────────────────────────────────────────────────────────
    defineField({ name: 'faqHeading', title: 'FAQ Section Heading', type: 'string', group: 'faq' }),
    defineField({
      name: 'faqItems', title: 'FAQ Questions & Answers', type: 'array', group: 'faq',
      of: [{ type: 'object', fields: [
        defineField({ name: 'question', title: 'Question', type: 'string' }),
        defineField({ name: 'answer',   title: 'Answer',   type: 'text', rows: 3 }),
      ], preview: { select: { title: 'question' } } }],
    }),

    // ── FINAL CTA ─────────────────────────────────────────────────────────────
    defineField({ name: 'finalCtaHeading',      title: 'Final CTA Heading',     type: 'string', group: 'cta' }),
    defineField({ name: 'finalCtaSubtext',       title: 'Final CTA Subtext',     type: 'string', group: 'cta' }),
    defineField({ name: 'finalCtaPrimaryBtn',    title: 'Primary Button Text',   type: 'string', initialValue: 'Book Appointment', group: 'cta' }),
    defineField({ name: 'finalCtaSecondaryBtn',  title: 'Secondary Button Text', type: 'string', initialValue: 'Get Free Consultation', group: 'cta' }),

    // ── SEO ───────────────────────────────────────────────────────────────────
    defineField({
      name: 'seo', title: 'SEO Settings', type: 'object', group: 'seo',
      fields: [
        defineField({ name: 'metaTitle',       title: 'Meta Title',       type: 'string' }),
        defineField({ name: 'metaDescription', title: 'Meta Description', type: 'text', rows: 3 }),
        defineField({ name: 'canonicalUrl',    title: 'Canonical URL',    type: 'url' }),
        defineField({ name: 'ogImage',         title: 'Social Share Image', type: 'image' }),
        defineField({ name: 'customSchema',    title: 'Custom JSON-LD Schema', type: 'text', rows: 10, description: 'Paste custom JSON-LD script here (without <script> tags)' }),
      ],
    }),

    // ── AD SCHEMA ─────────────────────────────────────────────────────────────
    defineField({
      name: 'adSchema', title: 'Ads Rich Data', type: 'object', group: 'schema',
      fields: [
        defineField({ name: 'priceFrom',        title: 'Price From (₹)',    type: 'number' }),
        defineField({ name: 'duration',         title: 'Session Duration',  type: 'string' }),
        defineField({ name: 'aggregateRating',  title: 'Star Rating (1-5)', type: 'number' }),
        defineField({ name: 'reviewCount',      title: 'Review Count',      type: 'number' }),
      ],
    }),
  ],

  preview: {
    select: { title: 'name', subtitle: 'category.title', media: 'heroImage' },
  },
})
