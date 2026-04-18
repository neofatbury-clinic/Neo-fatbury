// src/sanity/schemaTypes/homepage.ts
// HOMEPAGE CMS — Every section on the home page is editable here
import { defineType, defineField } from 'sanity'

export const homepage = defineType({
  name: 'homepage',
  title: '🏠 Homepage',
  type: 'document',
  groups: [
    { name: 'hero', title: '🖼️ Hero Section' },
    { name: 'treatments', title: '💉 Treatments Grid' },
    { name: 'whyus', title: '⭐ Why Choose Us' },
    { name: 'results', title: '📸 Results Gallery' },
    { name: 'doctors', title: '👩‍⚕️ Doctors Section' },
    { name: 'seo', title: '🔍 SEO' },
  ],
  fields: [
    // ── HERO ──────────────────────────────────────
    defineField({ name: 'heroHeadline', title: 'Hero Main Headline', type: 'string', group: 'hero' }),
    defineField({ name: 'heroAccentLine', title: 'Hero Accent Line (orange)', type: 'string', group: 'hero' }),
    defineField({ name: 'heroSubtext', title: 'Hero Description', type: 'text', rows: 3, group: 'hero' }),
    defineField({ name: 'heroImage', title: 'Hero Background Image', type: 'image', options: { hotspot: true }, group: 'hero' }),
    defineField({ name: 'heroCtaText', title: 'CTA Button Text', type: 'string', initialValue: 'Book Free Consultation', group: 'hero' }),
    defineField({
      name: 'heroStats',
      title: 'Hero Stats (shown in hero)',
      type: 'array',
      group: 'hero',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'number', title: 'Number/Value', type: 'string', description: 'e.g. "10,000+"' }),
          defineField({ name: 'label', title: 'Label', type: 'string', description: 'e.g. "Happy Patients"' }),
        ],
        preview: { select: { title: 'number', subtitle: 'label' } },
      }],
    }),

    // ── TREATMENTS ────────────────────────────────
    defineField({ name: 'treatmentsSectionTitle', title: 'Treatments Section Title', type: 'string', group: 'treatments' }),
    defineField({ name: 'treatmentsSectionSubtitle', title: 'Treatments Section Subtitle', type: 'string', group: 'treatments' }),
    defineField({
      name: 'featuredTreatments',
      title: 'Featured Treatments (shown on homepage)',
      type: 'array',
      description: 'Select which treatments to show. Order them by dragging.',
      group: 'treatments',
      of: [{ type: 'reference', to: [{ type: 'service' }] }],
    }),
    defineField({
      name: 'treatmentsGridLayout',
      title: 'Treatments Grid Columns',
      type: 'string',
      options: { list: ['2 columns', '3 columns', '4 columns'], layout: 'radio' },
      initialValue: '3 columns',
      group: 'treatments',
    }),

    // ── WHY US ────────────────────────────────────
    defineField({ name: 'whyUsTitle', title: '"Why Choose Us" Section Title', type: 'string', group: 'whyus' }),
    defineField({
      name: 'whyUsPoints',
      title: 'Reasons to Choose NeoFatbury',
      type: 'array',
      group: 'whyus',
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

    // ── RESULTS ───────────────────────────────────
    defineField({ name: 'resultsSectionTitle', title: 'Results Section Title', type: 'string', group: 'results' }),
    defineField({
      name: 'resultsSlider',
      title: 'Before/After Images Slider',
      type: 'array',
      group: 'results',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'label', title: 'Treatment Label', type: 'string' }),
          defineField({ name: 'image', title: 'Before/After Image', type: 'image', options: { hotspot: true } }),
          defineField({ name: 'quote', title: 'Patient Quote (optional)', type: 'string' }),
        ],
        preview: { select: { title: 'label', media: 'image' } },
      }],
    }),

    // ── DOCTORS ───────────────────────────────────
    defineField({ name: 'doctorsSectionTitle', title: 'Doctors Section Title', type: 'string', group: 'doctors' }),
    defineField({
      name: 'featuredDoctors',
      title: 'Doctors to Show',
      type: 'array',
      group: 'doctors',
      of: [{ type: 'reference', to: [{ type: 'teamMember' }] }],
    }),

    // ── SEO ───────────────────────────────────────
    defineField({
      name: 'seo',
      title: 'Homepage SEO',
      type: 'object',
      group: 'seo',
      fields: [
        defineField({ name: 'metaTitle', title: 'Page Title', type: 'string' }),
        defineField({ name: 'metaDescription', title: 'Meta Description', type: 'text', rows: 3 }),
        defineField({ name: 'ogImage', title: 'Social Share Image', type: 'image', options: { hotspot: true } }),
      ],
    }),
  ],
  preview: { prepare: () => ({ title: '🏠 Homepage Content' }) },
})
