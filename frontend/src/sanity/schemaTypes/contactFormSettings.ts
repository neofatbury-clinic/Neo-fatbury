import { defineType, defineField } from 'sanity'

export const contactFormSettings = defineType({
  name: 'contactFormSettings',
  title: '📝 Lead Form Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'formTitle',
      title: 'Form Heading',
      type: 'string',
      initialValue: 'Book Your Free Consultation',
      description: '💡 The main title shown at the top of the form.'
    }),
    defineField({
      name: 'formSubtitle',
      title: 'Form Subheading',
      type: 'string',
      initialValue: 'Get expert care tailored to your needs.',
      description: '💡 The smaller text below the heading.'
    }),
    defineField({
      name: 'clinics',
      title: 'Clinic Locations',
      description: '💡 Add the clinics that clients can select in the form.',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'id', title: 'ID (Unique ID)', type: 'string', description: '💡 e.g., "kukatpally"' }),
          defineField({ name: 'label', title: 'Label', type: 'string', description: '💡 e.g., "Kukatpally Clinic"' }),
          defineField({ name: 'color', title: 'Button Color (Hex)', type: 'string', initialValue: '#00acb1' }),
        ]
      }]
    }),
    defineField({
      name: 'placeholders',
      title: 'Input Field Placeholders',
      type: 'object',
      fields: [
        defineField({ name: 'name', title: 'Name Field', type: 'string', initialValue: 'Your Name' }),
        defineField({ name: 'phone', title: 'Phone Field', type: 'string', initialValue: 'Mobile Number' }),
      ]
    }),
    defineField({
      name: 'buttonText',
      title: 'Submit Button Label',
      type: 'string',
      initialValue: 'Get Free Consultation'
    }),
    defineField({
      name: 'successMessage',
      title: 'Success Message',
      type: 'string',
      initialValue: 'Thank you! We have received your request.',
      description: '💡 What the user sees after submitting.'
    })
  ],
  preview: { prepare: () => ({ title: '📝 Lead Form Settings' }) },
})
