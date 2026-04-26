// src/sanity/schemaTypes/aboutPage.ts
import { defineType, defineField } from 'sanity'

export const aboutPage = defineType({
  name: 'aboutPage',
  title: '🏢 About Us Page',
  type: 'document',
  fields: [
    defineField({
      name: 'mainHeading',
      title: 'Main Heading',
      type: 'string',
      description: 'e.g. "Welcome to NeoFatbury Clinic!"',
    }),
    defineField({
      name: 'subHeading',
      title: 'Sub Heading',
      type: 'string',
      description: 'e.g. "Celebrating the science of transformation!"',
    }),
    defineField({
      name: 'floatingImage',
      title: 'Beside Text Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'aboutTextTop',
      title: 'About Text (Top Section)',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'highlightText',
      title: 'Blue Highlight Box Text',
      type: 'string',
      description: 'e.g. "Hyderabad\'s No. 1 Dermatology, Skin & Hair Clinic"',
    }),
    defineField({
      name: 'aboutTextBottom',
      title: 'About Text (Bottom Section)',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'visionText',
      title: 'Our Vision Text',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'missionText',
      title: 'Our Mission Text',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'stats',
      title: 'Our Milestones (Statistics)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', type: 'string', title: 'Label (e.g. Happy Clients)' },
            { name: 'value', type: 'string', title: 'Value (e.g. 10,000+)' },
          ]
        }
      ]
    }),
    defineField({
      name: 'ctaTitle',
      title: 'Contact Section Title',
      type: 'string',
    }),
    defineField({
      name: 'ctaSubtitle',
      title: 'Contact Section Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'ctaButton',
      title: 'Contact Button Text',
      type: 'string',
    }),
    defineField({
      name: 'pageBuilder',
      title: '🏗️ Extra Sections (Drag & Drop)',
      description: '💡 Add more sections to the bottom of the About page.',
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
    })
  ]
})
