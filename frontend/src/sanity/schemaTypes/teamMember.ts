// src/sanity/schemaTypes/teamMember.ts
import { defineType, defineField } from 'sanity'

export const teamMember = defineType({
  name: 'teamMember',
  title: '👩‍⚕️ Doctors & Experts',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Doctor\'s Name', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'role', title: 'Job Title', type: 'string', description: 'e.g. "Senior Dermatologist"' }),
    defineField({ name: 'photo', title: 'Professional Portrait', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'bio', title: 'Short Bio', type: 'text', rows: 3, description: '💡 A friendly sentence about their expertise.' }),
    defineField({
      name: 'qualifications',
      title: 'Degrees / Certifications',
      type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
      description: '💡 Type each degree and press ENTER (e.g. MBBS, MD).',
    }),
    defineField({ name: 'experience', title: 'Years of Experience', type: 'number' }),
    defineField({ name: 'registrationNumber', title: 'Medical License Number', type: 'string', description: '💡 Required for clinic credibility.' }),
    defineField({ name: 'order', title: 'Display Order', type: 'number', description: '💡 Use 1 for the main doctor, 2 for the second, etc.' }),
    defineField({ name: 'isVisible', title: 'Show on website?', type: 'boolean', initialValue: true }),
  ],
  preview: { select: { title: 'name', subtitle: 'role', media: 'photo' } },
})
