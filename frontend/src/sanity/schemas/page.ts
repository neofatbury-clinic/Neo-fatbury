export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    { name: 'title', title: 'Page Title', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } },
    {
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        { name: 'headline', type: 'string' },
        { name: 'subheadline', type: 'text' },
        { name: 'image', title: 'Hero Background', type: 'image', options: { hotspot: true } },
      ]
    },
    {
      name: 'seo',
      title: 'SEO Settings',
      type: 'object',
      fields: [
        { name: 'metaTitle', type: 'string' },
        { name: 'metaDescription', type: 'text' },
        { name: 'gtags', title: 'G-Tags / Scripts', type: 'text' },
      ]
    }
  ]
}
