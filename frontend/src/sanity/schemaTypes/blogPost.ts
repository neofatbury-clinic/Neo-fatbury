// src/sanity/schemaTypes/blogPost.ts
import { defineType, defineField } from 'sanity'

export const blogPost = defineType({
  name: 'blogPost',
  title: '📝 Blog & Articles',
  type: 'document',
  groups: [
    { name: 'content', title: '📝 Article Details' },
    { name: 'seo', title: '🔍 Search Engine Info' },
    { name: 'settings', title: '⚙️ Settings' },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Article Title',
      type: 'string',
      description: '💡 The main headline of your blog post.',
      validation: (r) => r.required(),
      group: 'content',
    }),
    defineField({
      name: 'slug',
      title: 'Web Address (URL)',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (r) => r.required(),
      description: '💡 Click "Generate" to create the link for this article.',
      group: 'settings',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Display Date',
      type: 'datetime',
      description: '💡 The date shown on the post. You can set this to the past or present.',
      initialValue: () => new Date().toISOString(),
      group: 'settings',
    }),
    defineField({
      name: 'isPublished',
      title: 'Ready for Public?',
      type: 'boolean',
      initialValue: false,
      description: '💡 Turn this ON only when you are ready for people to see this on the website.',
      group: 'settings',
    }),
    defineField({
      name: 'category',
      title: 'Blog Category',
      type: 'string',
      options: {
        list: [
          { title: '✨ Skin Care Tips', value: 'skin-care' },
          { title: '💇 Hair Care Advice', value: 'hair-care' },
          { title: '⚖️ Weight Loss Secrets', value: 'weight-loss' },
          { title: '🏥 Clinic Updates', value: 'news' },
          { title: '📝 Expert Opinions', value: 'clinical-tips' },
        ],
        layout: 'radio',
      },
      group: 'settings',
    }),
    defineField({
      name: 'author',
      title: 'Article Author',
      type: 'reference',
      to: [{ type: 'teamMember' }],
      description: '💡 Which doctor or team member should be credited for this post?',
      group: 'settings',
    }),
    defineField({
      name: 'coverImage',
      title: 'Main Article Photo',
      type: 'image',
      description: '💡 The image shown at the top of the blog and in the blog list.',
      options: { hotspot: true },
      group: 'content',
    }),
    defineField({
      name: 'excerpt',
      title: 'Short Summary',
      type: 'text',
      rows: 2,
      description: '💡 A brief preview sentence (about 15-20 words) to grab attention.',
      validation: (r) => r.max(200),
      group: 'content',
    }),
    defineField({
      name: 'body',
      title: 'Full Article Content',
      description: '💡 Type your article here! You can use bold, lists, and insert images like a Word document.',
      type: 'array',
      group: 'content',
      of: [
        {
          type: 'block',
          marks: {
            decorators: [
              { title: 'Bold', value: 'strong' },
              { title: 'Italic', value: 'em' },
            ],
          },
        },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [defineField({ name: 'caption', title: 'Image Caption', type: 'string' })]
        },
      ],
    }),
    defineField({
      name: 'seo',
      title: 'How this looks in Google',
      type: 'object',
      group: 'seo',
      fields: [
        defineField({ name: 'metaTitle', title: 'SEO Title', type: 'string' }),
        defineField({ name: 'metaDescription', title: 'SEO Description', type: 'text', rows: 2 }),
      ],
    }),
  ],

  preview: {
    select: { title: 'title', subtitle: 'category', media: 'coverImage' },
  },
})
