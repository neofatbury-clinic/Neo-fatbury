// src/sanity/schemaTypes/teamMember.ts
import { defineType, defineField } from 'sanity'

export const teamMember = defineType({
  name: 'teamMember',
  title: '👩‍⚕️ Team Members',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Full Name', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'role', title: 'Role / Title', type: 'string', description: 'e.g. "Lead Dermatologist", "Aesthetic Therapist"' }),
    defineField({ name: 'specialization', title: 'Specialization', type: 'string', description: 'e.g. "Hair Restoration, Laser Treatments"' }),
    defineField({ name: 'photo', title: 'Photo', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'bio', title: 'Bio', type: 'text', rows: 4 }),
    defineField({
      name: 'qualifications',
      title: 'Qualifications',
      type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
      description: 'e.g. MBBS, MD Dermatology',
    }),
    defineField({ name: 'experience', title: 'Years of Experience', type: 'number' }),
    defineField({ name: 'registrationNumber', title: 'Medical Registration Number', type: 'string', description: 'Used for E-E-A-T trust signals in Google' }),
    defineField({ name: 'order', title: 'Display Order (lower = first)', type: 'number' }),
    defineField({ name: 'isVisible', title: 'Show on website?', type: 'boolean', initialValue: true }),
  ],
  preview: { select: { title: 'name', subtitle: 'role', media: 'photo' } },
})
