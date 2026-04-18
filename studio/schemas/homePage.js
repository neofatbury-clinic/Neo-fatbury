// ─────────────────────────────────────────────────────────────
//  HOME PAGE SCHEMA
//  Editable fields: Hero, Services, Why Us, Locations
// ─────────────────────────────────────────────────────────────
export const homePage = {
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    {
      name: 'heroHeading',
      title: 'Hero Main Heading',
      type: 'string',
      description: 'The big H1 heading in the hero section',
    },
    {
      name: 'heroSubheading',
      title: 'Hero Sub-heading',
      type: 'text',
      rows: 3,
    },
    {
      name: 'heroImage',
      title: 'Hero Background Image',
      type: 'image',
      options: { hotspot: true },
      fields: [{ name: 'alt', title: 'Alt Text', type: 'string' }],
    },
    {
      name: 'trustBadges',
      title: 'Trust Badges (3 items)',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'e.g. "10+ Years of Expertise", "US-FDA Approved"',
    },
    {
      name: 'specializations',
      title: 'Our Specializations (3 cards)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'description', title: 'Description', type: 'text', rows: 3 },
            { name: 'image', title: 'Card Image', type: 'image', options: { hotspot: true } },
            { name: 'link', title: 'Link (URL slug)', type: 'string', description: 'e.g. /skin' },
          ],
        },
      ],
    },
    {
      name: 'whyUsPoints',
      title: 'Why Choose Us (4 points)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Point Title', type: 'string' },
            { name: 'description', title: 'Description', type: 'text', rows: 2 },
          ],
        },
      ],
    },
  ],
};
