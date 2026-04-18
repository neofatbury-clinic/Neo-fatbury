// studio/schemas/teamMember.js
export const teamMember = {
  name: 'teamMember',
  title: 'Team Members',
  type: 'document',
  fields: [
    { name: 'name', title: 'Full Name', type: 'string' },
    { name: 'role', title: 'Role / Designation', type: 'string' },
    { name: 'order', title: 'Display Order', type: 'number' },
    { name: 'photo', title: 'Photo', type: 'image', options: { hotspot: true } },
    { name: 'bio', title: 'Bio', type: 'text', rows: 4 },
    {
      name: 'qualifications', title: 'Qualifications',
      type: 'array', of: [{ type: 'string' }],
      description: 'e.g. MBBS, MD (Dermatology), DNB'
    },
  ],
  preview: { select: { title: 'name', subtitle: 'role', media: 'photo' } }
}
