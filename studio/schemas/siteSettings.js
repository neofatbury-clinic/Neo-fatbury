// studio/schemas/siteSettings.js
export const siteSettings = {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    { name: 'clinicName', title: 'Clinic Name', type: 'string' },
    { name: 'tagline', title: 'Tagline', type: 'string' },
    { name: 'logo', title: 'Logo', type: 'image', options: { hotspot: true } },
    { name: 'bookingUrl', title: 'Booking URL / WhatsApp Link', type: 'url' },
    {
      name: 'contact', title: 'Contact Details', type: 'object',
      fields: [
        { name: 'phone', title: 'Phone Number', type: 'string' },
        { name: 'email', title: 'Email Address', type: 'string' },
        { name: 'whatsapp', title: 'WhatsApp Number (with country code)', type: 'string' },
      ]
    },
    {
      name: 'openingHours', title: 'Opening Hours', type: 'object',
      fields: [
        { name: 'weekdays', title: 'Weekdays', type: 'string', placeholder: '9 AM – 8 PM' },
        { name: 'weekends', title: 'Weekends', type: 'string', placeholder: '10 AM – 6 PM' },
      ]
    },
    {
      name: 'socialMedia', title: 'Social Media Links', type: 'object',
      fields: [
        { name: 'instagram', title: 'Instagram URL', type: 'url' },
        { name: 'facebook', title: 'Facebook URL', type: 'url' },
        { name: 'youtube', title: 'YouTube URL', type: 'url' },
      ]
    },
  ],
}
