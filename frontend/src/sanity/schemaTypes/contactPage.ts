// src/sanity/schemaTypes/contactPage.ts
import { defineType, defineField } from 'sanity'

export const contactPage = defineType({
  name: 'contactPage',
  title: '📬 NEW Contact Us Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      initialValue: 'Contact NeoFatbury Clinic',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle/Tagline',
      type: 'string',
      initialValue: 'Two premium clinics — conveniently located to serve you better.',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Background Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'leadFormTitle',
      title: 'Contact Form Heading',
      type: 'string',
      initialValue: 'Drop us a Message',
    }),
    defineField({
      name: 'leadFormDescription',
      title: 'Contact Form Description',
      type: 'text',
      rows: 2,
      initialValue: 'Our clinical experts will get back to you within 24 hours.',
    }),
    defineField({
      name: 'email',
      title: 'General Contact Email',
      type: 'string',
      initialValue: 'info@neofatbury.com',
    }),
    defineField({
      name: 'businessHours',
      title: 'Working Hours',
      type: 'string',
      initialValue: 'Mon - Sat: 10:00 AM - 08:00 PM, Sun: Closed',
    }),
    defineField({
      name: 'emergencyContact',
      title: 'Emergency/Direct Number',
      type: 'string',
      placeholder: '+91 97006 41000'
    })
  ]
})
