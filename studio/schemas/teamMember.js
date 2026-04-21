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
    { name: 'experience', title: 'Experience (e.g. 12+ Years)', type: 'string' },
    { 
      name: 'qualifications', title: 'Degree / Qualifications', 
      type: 'string', 
      description: 'e.g. MBBS, MD (Dermatology)' 
    },
    {
      name: 'expertise', title: 'Areas of Expertise',
      type: 'array', of: [{ type: 'string' }],
      description: 'Add specific treatments they specialize in.'
    },
    { 
      name: 'clinicLocation', 
      title: 'Clinic Location', 
      type: 'string',
      options: {
        list: [
          { title: 'Kukatpally Clinic', value: 'Kukatpally Clinic' },
          { title: 'Himayatnagar Clinic', value: 'Himayatnagar Clinic' },
          { title: 'Both Clinics', value: 'Both Clinics' },
        ]
      }
    },
    { name: 'bio', title: 'Short Bio', type: 'text', rows: 4 },
  ],
  preview: { select: { title: 'name', subtitle: 'role', media: 'photo' } }
}
