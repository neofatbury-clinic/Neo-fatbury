// src/sanity/schemaTypes/homepage.ts
import { defineType, defineField } from 'sanity'

export const homepage = defineType({
  name: 'homepage',
  title: '🏠 Homepage Content',
  type: 'document',
  groups: [
    { name: 'hero', title: '🖼️ Top Banner' },
    { name: 'treatments', title: '💉 Featured Services' },
    { name: 'whyus', title: '⭐ Why Choose Us' },
    { name: 'results', title: '📸 Results Gallery' },
    { name: 'doctors', title: '👩‍⚕️ Doctors Section' },
    { name: 'seo', title: '🔍 Search Engine Info' },
  ],
  fields: [
    // ── HERO ──────────────────────────────────────
    defineField({ name: 'heroHeadline', title: 'Big Main Headline', type: 'string', description: '💡 The first thing people see. Use powerful words.', group: 'hero' }),
    defineField({ name: 'heroAccentLine', title: 'Highlighted Text (Orange)', type: 'string', description: '💡 Special text that stands out in orange.', group: 'hero' }),
    defineField({ name: 'heroSubtext', title: 'Intro Text / Description', type: 'text', rows: 3, description: '💡 Short paragraph below the headline.', group: 'hero' }),
    defineField({ 
      name: 'heroImage', 
      title: 'Banner Background Image', 
      type: 'image', 
      options: { hotspot: true }, 
      description: '💡 Large image behind the top text. Recommended: Doctors or Clinic Interior.', 
      group: 'hero',
      fields: [
        { name: 'alt', title: 'Alt Text (SEO)', type: 'string', description: '💡 Describe the image for Google.' }
      ],
    }),
    defineField({ name: 'heroCtaText', title: 'Main Button Label', type: 'string', initialValue: 'Book Free Consultation', group: 'hero' }),
    defineField({
      name: 'heroZoom',
      title: 'Hero Image Zoom (1.0 = Zoom Out, 1.3+ = Zoom In)',
      type: 'number',
      initialValue: 1.05,
      description: '💡 Adjust this to prevent text cutting on the homepage banner. 1.0 = Full Width (Zoom Out).',
      validation: r => r.min(0.5).max(3),
      group: 'hero'
    }),
    defineField({
      name: 'heroStats',
      title: 'Trust Numbers (e.g. 10k+ Happy Patients)',
      type: 'array',
      group: 'hero',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'number', title: 'Large Number', type: 'string', description: 'e.g. "10,000+"' }),
          defineField({ name: 'label', title: 'Label', type: 'string', description: 'e.g. "Happy Patients"' }),
        ],
        preview: { select: { title: 'number', subtitle: 'label' } },
      }],
    }),

    // ── TREATMENTS ────────────────────────────────
    defineField({ name: 'treatmentsSectionTitle', title: 'Services Grid Title', type: 'string', initialValue: 'Our Premier Treatments', group: 'treatments' }),
    defineField({ name: 'treatmentsSectionSubtitle', title: 'Services Grid Subtitle', type: 'string', group: 'treatments' }),
    defineField({
      name: 'featuredTreatments',
      title: 'Select Services to Highlight',
      type: 'array',
      description: '💡 Choose which services appear on the home page. Drag to change their order.',
      group: 'treatments',
      of: [{ type: 'reference', to: [{ type: 'service' }] }],
    }),

    // ── WHY US ────────────────────────────────────
    defineField({ name: 'whyUsTitle', title: '"Why Choose Us" Headline', type: 'string', initialValue: 'Why Choose NeoFatbury Clinic?', group: 'whyus' }),
    defineField({
      name: 'whyUsPoints',
      title: 'Success Factors / Key Features',
      type: 'array',
      group: 'whyus',
      description: '💡 Add 3-4 reasons why clients should visit you.',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'icon', title: 'Emoji Icon', type: 'string', description: '💡 e.g. 🔬 🏆 🛡️ ✨' }),
          defineField({ name: 'title', title: 'Short Title', type: 'string' }),
          defineField({ name: 'description', title: 'Detail description', type: 'text', rows: 2 }),
        ],
        preview: { select: { title: 'title', subtitle: 'icon' } },
      }],
    }),

    // ── RESULTS ───────────────────────────────────
    defineField({ name: 'resultsSectionTitle', title: 'Results Preview Title', type: 'string', initialValue: 'Before & After Results', group: 'results' }),
    defineField({
      name: 'resultsSlider',
      title: 'Patient Results Slider',
      type: 'array',
      group: 'results',
      description: '💡 Add before/after comparisons here.',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'label', title: 'Treatment Type', type: 'string' }),
          defineField({ name: 'image', title: 'Comparison Photo', type: 'image', options: { hotspot: true } }),
          defineField({ name: 'quote', title: 'Patient Testimonial (optional)', type: 'string' }),
        ],
        preview: { select: { title: 'label', media: 'image' } },
      }],
    }),

    // ── DOCTORS ───────────────────────────────────
    defineField({ name: 'doctorsSectionTitle', title: 'Doctors Row Title', type: 'string', initialValue: 'Meet Our Experts', group: 'doctors' }),
    defineField({
      name: 'featuredDoctors',
      title: 'Select Doctors to Show',
      type: 'array',
      group: 'doctors',
      of: [{ type: 'reference', to: [{ type: 'teamMember' }] }],
    }),

    // ── SEO ───────────────────────────────────────
    defineField({
      name: 'pageBuilder',
      title: '🏗️ Extra Sections (Drag & Drop)',
      description: '💡 Add more sections to the bottom of the Home page.',
      group: 'hero', // Putting it in hero group so it's visible, or create a new group
      type: 'array',
      of: [
        { type: 'object', name: 'textImage', title: '🌓 Section: Text + Image', fields: [
          defineField({ name: 'heading', type: 'string' }),
          defineField({ name: 'text', type: 'text', rows: 4 }),
          defineField({ name: 'image', type: 'image', options: { hotspot: true } }),
          defineField({ name: 'reverse', title: 'Image on Left?', type: 'boolean' }),
        ]},
        { type: 'object', name: 'richText', title: '📝 Section: Text Block', fields: [
          defineField({ name: 'content', type: 'array', of: [{ type: 'block' }] }),
        ]},
        { type: 'object', name: 'videoSection', title: '🎥 Section: Video', fields: [
          defineField({ name: 'url', type: 'url' }),
        ]},
        { type: 'object', name: 'faqSection', title: '❓ Section: FAQ', fields: [
          defineField({ name: 'heading', type: 'string' }),
          defineField({ name: 'items', type: 'array', of: [{ type: 'object', fields: [
            defineField({ name: 'question', type: 'string' }),
            defineField({ name: 'answer', type: 'text' }),
          ]}] }),
        ]},
        { type: 'object', name: 'ctaBox', title: '🔘 Section: CTA Banner', fields: [
          defineField({ name: 'text', type: 'string' }),
          defineField({ name: 'buttonText', type: 'string' }),
          defineField({ name: 'link', type: 'string' }),
        ]},
      ]
    }),
    defineField({
      name: 'seo',
      title: 'Google & Homepage SEO',
      type: 'object',
      group: 'seo',
      description: '💡 How the homepage looks in Google results.',
      fields: [
        defineField({ name: 'metaTitle', title: 'Homepage Google Title', type: 'string' }),
        defineField({ name: 'metaDescription', title: 'Homepage Meta Description', type: 'text', rows: 3 }),
        defineField({ name: 'canonicalUrl', title: 'Canonical URL', type: 'url', description: '💡 Optional: Only fill this if this homepage is a duplicate of another website.' }),
        defineField({ name: 'ogImage', title: 'Social Share Image', type: 'image', options: { hotspot: true } }),
        defineField({ name: 'customSchema', title: 'Custom JSON-LD Schema', type: 'text', rows: 10, description: 'Paste custom JSON-LD script here (without <script> tags)' }),
      ],
    }),
  ],
  preview: { prepare: () => ({ title: '🏠 Homepage Content' }) },
})
