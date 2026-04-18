// ─────────────────────────────────────────────────────────────
//  LOCATION PAGE SCHEMA
// ─────────────────────────────────────────────────────────────
export const locationPage = {
  name: 'locationPage',
  title: 'Location Pages',
  type: 'document',
  fields: [
    { name: 'branchName', title: 'Branch Name', type: 'string' },
    {
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: { source: 'branchName' },
      description: 'e.g. kukatpally-hyderabad',
    },
    { name: 'address', title: 'Full Address', type: 'text', rows: 3 },
    { name: 'phone', title: 'Phone Number', type: 'string' },
    { name: 'mapEmbedUrl', title: 'Google Maps Embed URL', type: 'url' },
    {
      name: 'image',
      title: 'Clinic Photo',
      type: 'image',
      options: { hotspot: true },
    },
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
