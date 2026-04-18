// ─────────────────────────────────────────────────────────────
//  SERVICE PAGE SCHEMA  (e.g. Laser Hair Removal, CoolSculpting)
//  Every section of the service page is editable here
// ─────────────────────────────────────────────────────────────
export const servicePage = {
  name: 'servicePage',
  title: 'Service Pages',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Page Title',
      type: 'string',
      description: 'Internal name (e.g. Laser Hair Reduction)',
    },
    {
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      description: 'Auto-generated from title. e.g. laser-hair-reduction',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Skin', value: 'skin' },
          { title: 'Hair', value: 'hair' },
          { title: 'Slimming', value: 'slimming' },
        ],
      },
    },

    // HERO
    { name: 'heroHeading', title: 'Hero Heading', type: 'string' },
    { name: 'heroSubHeading', title: 'Hero Sub-heading', type: 'text', rows: 2 },
    {
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: { hotspot: true },
      fields: [{ name: 'alt', title: 'Alt Text', type: 'string' }],
    },
    {
      name: 'trustBadges',
      title: 'Trust Badges',
      type: 'array',
      of: [{ type: 'string' }],
    },

    // PROBLEM SECTION
    { name: 'problemHeading', title: 'Problem Section Heading', type: 'string' },
    {
      name: 'problemPoints',
      title: 'Problem Points',
      type: 'array',
      of: [{ type: 'string' }],
    },

    // WHAT IS
    { name: 'whatIsHeading', title: '"What Is" Section Heading', type: 'string' },
    { name: 'whatIsContent', title: '"What Is" Content', type: 'text', rows: 4 },
    {
      name: 'suitableFor',
      title: 'Suitable For (tags)',
      type: 'array',
      of: [{ type: 'string' }],
    },

    // BEFORE / AFTER IMAGES
    {
      name: 'beforeAfterImages',
      title: 'Before / After Images',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'beforeImage', title: 'Before Image', type: 'image', options: { hotspot: true } },
            { name: 'afterImage', title: 'After Image', type: 'image', options: { hotspot: true } },
            { name: 'label', title: 'Label (e.g. Laser Hair Reduction)', type: 'string' },
          ],
        },
      ],
    },

    // BENEFITS
    { name: 'benefitsHeading', title: 'Benefits Heading', type: 'string' },
    {
      name: 'benefits',
      title: 'Benefits (tick points)',
      type: 'array',
      of: [{ type: 'string' }],
    },

    // PROCESS STEPS
    {
      name: 'processSteps',
      title: 'How It Works (Steps)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'step', title: 'Step Number', type: 'string' },
            { name: 'title', title: 'Step Title', type: 'string' },
            { name: 'description', title: 'Step Description', type: 'text', rows: 2 },
          ],
        },
      ],
    },

    // FAQ
    {
      name: 'faqItems',
      title: 'FAQ Questions & Answers',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'question', title: 'Question', type: 'string' },
            { name: 'answer', title: 'Answer', type: 'text', rows: 3 },
          ],
        },
      ],
    },

    // FINAL CTA
    { name: 'finalCtaHeading', title: 'Final CTA Heading', type: 'string' },
    { name: 'finalCtaSubtext', title: 'Final CTA Sub-text', type: 'text', rows: 2 },

    // SEO
    {
      name: 'seo',
      title: 'SEO Settings',
      type: 'object',
      fields: [
        { name: 'metaTitle', title: 'Meta Title', type: 'string' },
        { name: 'metaDescription', title: 'Meta Description', type: 'text', rows: 3 },
      ],
    },
  ],
};
