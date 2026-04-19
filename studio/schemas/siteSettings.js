// studio/schemas/siteSettings.js
export const siteSettings = {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [

    // ── BRAND IDENTITY ───────────────────────────────────
    { name: 'clinicName', title: 'Clinic Name', type: 'string' },
    { name: 'tagline', title: 'Tagline', type: 'string' },
    {
      name: 'logo',
      title: 'Logo (Header & Footer)',
      type: 'image',
      description: 'Upload your clinic logo here. Shown in header and footer.',
      options: { hotspot: true },
    },
    {
      name: 'favicon',
      title: 'Favicon',
      type: 'image',
      description: 'Browser tab icon (ideally 32x32 or 64x64 PNG/ICO).',
      options: { hotspot: false },
    },

    // ── CONTACT DETAILS ──────────────────────────────────
    {
      name: 'contact',
      title: 'Contact Details',
      type: 'object',
      description: 'These values power the phone number shown in header, footer, and WhatsApp widget.',
      fields: [
        { name: 'phone', title: 'Phone Number', type: 'string', description: 'e.g. 9700641000' },
        { name: 'email', title: 'Email Address', type: 'string', description: 'e.g. info@neofatbury.co.in' },
        {
          name: 'whatsapp',
          title: 'WhatsApp Number (with country code)',
          type: 'string',
          description: 'Include country code without + sign, e.g. 919700641000',
        },
      ],
    },

    // ── HEADER ───────────────────────────────────────────
    {
      name: 'headerAnnouncementText',
      title: 'Header Announcement Bar Text',
      type: 'string',
      description: 'Short promo or announcement shown in the teal bar above the header. Leave empty to hide.',
    },
    {
      name: 'headerMenu',
      title: 'Header Navigation Menu',
      type: 'array',
      description: 'Build the top navigation links. Add dropdowns for treatment categories.',
      of: [
        {
          type: 'object',
          name: 'menuItem',
          title: 'Menu Item',
          fields: [
            { name: 'label', title: 'Label', type: 'string' },
            { name: 'url', title: 'URL', type: 'string', description: 'e.g. /skin or /about-us' },
            {
              name: 'dropdownItems',
              title: 'Dropdown Items (optional)',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    { name: 'label', title: 'Label', type: 'string' },
                    { name: 'url', title: 'URL', type: 'string' },
                  ],
                },
              ],
            },
          ],
          preview: {
            select: { title: 'label', subtitle: 'url' },
          },
        },
      ],
    },

    // ── SEO DEFAULTS ─────────────────────────────────────
    {
      name: 'defaultSeo',
      title: 'Default SEO',
      type: 'object',
      description: 'Fallback meta title and description used when a page does not specify its own.',
      fields: [
        { name: 'title', title: 'Default Meta Title', type: 'string' },
        { name: 'description', title: 'Default Meta Description', type: 'text', rows: 3 },
        { name: 'ogImage', title: 'Default OG Image', type: 'image', options: { hotspot: true } },
      ],
    },

    // ── CLINIC BRANCHES / LOCATIONS ──────────────────────
    {
      name: 'branches',
      title: 'Clinic Branches / Locations',
      type: 'array',
      description: 'Add each branch. Shown in the footer "Clinics & Contact" section.',
      of: [
        {
          type: 'object',
          name: 'branch',
          title: 'Branch',
          fields: [
            { name: 'name', title: 'Branch Name', type: 'string', description: 'e.g. Kukatpally Clinic' },
            { name: 'address', title: 'Address', type: 'text', rows: 2 },
            { name: 'phone', title: 'Branch Phone', type: 'string' },
            { name: 'googleMapsUrl', title: 'Google Maps Link', type: 'url' },
            { name: 'photo', title: 'Clinic Photo', type: 'image', options: { hotspot: true } },
            { name: 'heroImage', title: 'Hero Image', type: 'image', options: { hotspot: true } },
            {
              name: 'openingHours',
              title: 'Opening Hours',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    { name: 'day', title: 'Day(s)', type: 'string', description: 'e.g. Monday – Friday' },
                    { name: 'hours', title: 'Hours', type: 'string', description: 'e.g. 9 AM – 8 PM' },
                  ],
                },
              ],
            },
          ],
          preview: {
            select: { title: 'name', subtitle: 'address' },
          },
        },
      ],
    },

    // ── FOOTER ───────────────────────────────────────────
    {
      name: 'footerDisclaimer',
      title: 'Footer Disclaimer Text',
      type: 'text',
      rows: 3,
      description: 'Medical disclaimer shown at the bottom of the footer.',
    },
    {
      name: 'footerCopyright',
      title: 'Footer Copyright Text',
      type: 'string',
      description: 'e.g. © 2025 NeoFatbury. All Rights Reserved.',
    },

    // ── SOCIAL MEDIA ─────────────────────────────────────
    {
      name: 'socialMedia',
      title: 'Social Media Links',
      type: 'object',
      fields: [
        { name: 'instagram', title: 'Instagram URL', type: 'url' },
        { name: 'facebook', title: 'Facebook URL', type: 'url' },
        { name: 'youtube', title: 'YouTube URL', type: 'url' },
      ],
    },

    // ── BRAND COLORS ─────────────────────────────────────
    {
      name: 'colors',
      title: 'Brand Colors',
      type: 'object',
      description: 'Optional: Override CSS color tokens from the CMS.',
      fields: [
        { name: 'primary', title: 'Primary Color', type: 'string', description: 'Hex, e.g. #005052' },
        { name: 'accent', title: 'Accent Color', type: 'string' },
        { name: 'background', title: 'Background', type: 'string' },
        { name: 'surface', title: 'Surface', type: 'string' },
        { name: 'text', title: 'Text Color', type: 'string' },
        { name: 'ctaButton', title: 'CTA Button Color', type: 'string' },
        { name: 'ctaButtonText', title: 'CTA Button Text Color', type: 'string' },
      ],
    },

    // ── INTEGRATIONS ─────────────────────────────────────
    {
      name: 'bookingUrl',
      title: 'Booking / WhatsApp Link (Book Appointment button)',
      type: 'url',
      description: 'Full URL for the "Book Appointment" CTA button.',
    },
    {
      name: 'zohoWebhookUrl',
      title: 'Zoho CRM Webhook URL',
      type: 'url',
      description: 'Lead form submission endpoint.',
    },
    {
      name: 'schema',
      title: 'JSON-LD Schema (Advanced)',
      type: 'text',
      rows: 5,
      description: 'Optional: Paste structured data JSON-LD for the clinic.',
    },

  ],
}
