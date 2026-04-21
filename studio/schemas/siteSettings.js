export const siteSettings = {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  groups: [
    { name: 'header', title: 'Header Settings' },
    { name: 'footer', title: 'Footer Settings' },
    { name: 'contact', title: 'Phone, Email & Clinics' },
    { name: 'social', title: 'Social Media' },
    { name: 'integrations', title: 'CRM & Integrations' },
  ],
  fields: [
    // ── HEADER SETTINGS ─────────────────────────────────
    { name: 'clinicName', title: 'Clinic Display Name', type: 'string', group: 'header' },
    { 
      name: 'logo', 
      title: 'Clinic Logo', 
      type: 'image', 
      group: 'header',
      description: 'Transparent PNG preferred. Shown in Header and Footer.',
      options: { hotspot: true }
    },
    { 
      name: 'favicon', 
      title: 'Website Tab Icon (Favicon)', 
      type: 'image', 
      group: 'header',
      description: 'The small logo shown in the browser tab (32x32).'
    },
    { 
      name: 'headerAnnouncementText', 
      title: 'Top Bar Promo Message', 
      type: 'string', 
      group: 'header',
      description: 'e.g. Free Clinical Analysis for first 50 patients!'
    },
    {
      name: 'topHeaderMenu',
      title: 'Top Mini Menu Links',
      type: 'array',
      description: 'Links shown in the very top bar (About, Results, etc.)',
      of: [{
        type: 'object',
        fields: [
          { name: 'label', type: 'string', title: 'Label' },
          { name: 'url', type: 'string', title: 'URL' }
        ]
      }]
    },
    {
      name: 'headerMenu',
      title: 'Top Navigation Menu Bar',
      type: 'array',
      group: 'header',
      description: 'Add your main navigation links here.',
      of: [{
        type: 'object',
        fields: [
          { name: 'label', type: 'string', title: 'Menu Item Label (e.g. Skin)' },
          { name: 'url', type: 'string', title: 'Main Page URL (e.g. /skin)' },
          { 
            name: 'dropdownItems', 
            title: 'Dropdown Sub-Links', 
            type: 'array', 
            of: [{ type: 'object', fields: [{ name: 'label', type: 'string' }, { name: 'url', type: 'string' }], preview: { select: { title: 'label', subtitle: 'url' } } }] 
          }
        ],
        preview: {
          select: { title: 'label', subtitle: 'url' }
        }
      }]
    },

    // ── FOOTER SETTINGS ─────────────────────────────────
    {
      name: 'footerQuickLinks',
      title: 'Footer: Important Links',
      type: 'array',
      group: 'footer',
      description: 'Links in the "Quick Access" column.',
      of: [{ type: 'object', fields: [{ name: 'label', type: 'string' }, { name: 'url', type: 'string' }] }]
    },
    {
      name: 'footerTreatmentLinks',
      title: 'Footer: Treatment Solutions',
      type: 'array',
      group: 'footer',
      description: 'Links specifically for Skin, Hair, or Slimming services.',
      of: [{ type: 'object', fields: [{ name: 'label', type: 'string' }, { name: 'url', type: 'string' }] }]
    },
    { name: 'footerCopyright', title: 'Copyright Text', type: 'string', group: 'footer', description: 'e.g. © 2025 NeoFatbury. All Rights Reserved.' },
    { name: 'footerDisclaimer', title: 'Medical Disclaimer', type: 'text', rows: 3, group: 'footer' },

    // ── CONTACT & CLINICS ───────────────────────────────
    {
      name: 'contact',
      title: 'Call & WhatsApp Settings',
      type: 'object',
      group: 'contact',
      fields: [
        { name: 'phone', title: 'Primary Display Phone', type: 'string' },
        { name: 'email', title: 'Public Email', type: 'string' },
        { name: 'whatsapp', title: 'WhatsApp Number (e.g. 919700641000)', type: 'string' },
      ],
    },
    {
      name: 'branches',
      title: 'Clinic Branches / Locations',
      type: 'array',
      group: 'contact',
      of: [{
        type: 'object',
        fields: [
          { name: 'name', type: 'string' },
          { name: 'address', type: 'text', rows: 2 },
          { name: 'phone', type: 'string' },
          { name: 'googleMapsUrl', type: 'url' }
        ]
      }]
    },

    // ── SOCIAL & INTEGRATIONS ────────────────────────────
    {
      name: 'socialMedia',
      title: 'Social Media Links',
      type: 'object',
      group: 'social',
      fields: [
        { name: 'instagram', type: 'url' },
        { name: 'facebook', type: 'url' },
        { name: 'youtube', type: 'url' }
      ]
    },
    { name: 'zohoWebhookUrl', title: 'Zoho CRM Webhook URL', type: 'url', group: 'integrations' },
    { name: 'bookingUrl', title: 'WhatsApp Booking URL', type: 'url', group: 'integrations' },
  ]
}
