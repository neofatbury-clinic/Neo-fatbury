// src/sanity/schemaTypes/siteSettings.ts
// GLOBAL SITE SETTINGS — Brand, Colors, Contact, Nav
// This is ONE document — edit once, applies everywhere
import { defineType, defineField } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: '⚙️ Clinic Info & Settings',
  type: 'document',
  groups: [
    { name: 'brand', title: '🎨 Brand & Colors' },
    { name: 'contact', title: '📞 Contact & Location' },
    { name: 'navigation', title: '🔗 Header & Footer Navigation' },
    { name: 'seo', title: '🔍 Default SEO' },
    { name: 'social', title: '📱 Social Media' },
    { name: 'ads', title: '📊 Ads & Schema' },
  ],
  fields: [
    // ── BRAND ─────────────────────────────────────
    defineField({ name: 'clinicName', title: 'Clinic Name', type: 'string', validation: (r) => r.required(), group: 'brand' }),
    defineField({ name: 'logo', title: 'Logo', type: 'image', options: { hotspot: true }, group: 'brand' }),
    defineField({ name: 'tagline', title: 'Tagline / Slogan', type: 'string', group: 'brand' }),
    defineField({ name: 'favicon', title: 'Favicon (browser tab icon)', type: 'image', group: 'brand' }),

    // COLORS
    defineField({
      name: 'colors',
      title: '🎨 Brand Colors',
      type: 'object',
      description: 'Change these to update colors across the ENTIRE website',
      group: 'brand',
      fields: [
        defineField({ name: 'primary', title: 'Primary Color (Teal)', type: 'string', initialValue: '#00acb1', description: 'Main brand color used for buttons, links, headings' }),
        defineField({ name: 'accent', title: 'Accent Color (Orange)', type: 'string', initialValue: '#e8a317', description: 'Used for highlighted text and CTAs' }),
        defineField({ name: 'background', title: 'Page Background', type: 'string', initialValue: '#ffffff' }),
        defineField({ name: 'surface', title: 'Card/Section Background', type: 'string', initialValue: '#f0f8f8' }),
        defineField({ name: 'text', title: 'Body Text Color', type: 'string', initialValue: '#1a2b3c' }),
        defineField({ name: 'ctaButton', title: 'CTA Button Color', type: 'string', initialValue: '#00acb1' }),
        defineField({ name: 'ctaButtonText', title: 'CTA Button Text Color', type: 'string', initialValue: '#ffffff' }),
      ],
    }),

    // ── CONTACT ───────────────────────────────────
    defineField({
      name: 'contact',
      title: 'Contact Details',
      type: 'object',
      group: 'contact',
      fields: [
        defineField({ name: 'phone', title: 'Primary Phone Number', type: 'string' }),
        defineField({ name: 'whatsapp', title: 'WhatsApp Number', type: 'string' }),
        defineField({ name: 'email', title: 'Email Address', type: 'string' }),
      ],
    }),
    defineField({
      name: 'locations',
      title: 'Clinic Locations',
      type: 'array',
      group: 'contact',
      of: [{
        type: 'object',
        name: 'location',
        fields: [
          defineField({ name: 'name', title: 'Branch Name', type: 'string', description: 'e.g. "Kukatpally Clinic"' }),
          defineField({ name: 'address', title: 'Full Address', type: 'text', rows: 3 }),
          defineField({ name: 'phone', title: 'Branch Phone', type: 'string' }),
          defineField({ name: 'googleMapsUrl', title: 'Google Maps Link', type: 'url' }),
          defineField({ name: 'photo', title: 'Clinic Photo', type: 'image', options: { hotspot: true } }),
          defineField({ name: 'heroImage', title: 'Hero Background Image', type: 'image', options: { hotspot: true } }),
          defineField({
            name: 'openingHours',
            title: 'Opening Hours',
            type: 'array',
            of: [{
              type: 'object',
              fields: [
                defineField({ name: 'day', title: 'Day', type: 'string' }),
                defineField({ name: 'hours', title: 'Hours', type: 'string' }),
              ],
              preview: { select: { title: 'day', subtitle: 'hours' } },
            }],
          }),
        ],
        preview: { select: { title: 'name' } },
      }],
    }),

    // ── NAVIGATION ────────────────────────────────
    defineField({
      name: 'headerMenu',
      title: 'Header Navigation Menu',
      type: 'array',
      group: 'navigation',
      description: 'Add the links that appear at the top of the website',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'label', title: 'Link Label (e.g. Home, About Us)', type: 'string' }),
          defineField({ name: 'url', title: 'URL or Path (e.g. /, /about, /services/laser)', type: 'string' }),
          defineField({ 
            name: 'dropdownItems', 
            title: 'Dropdown Items (Optional)', 
            type: 'array', 
            of: [{
              type: 'object',
              fields: [
                defineField({ name: 'label', title: 'Label', type: 'string' }),
                defineField({ name: 'url', title: 'URL', type: 'string' }),
              ]
            }]
          }),
        ]
      }]
    }),
    defineField({
      name: 'footerMenu',
      title: 'Footer Quick Links',
      type: 'array',
      group: 'navigation',
      description: 'Add the links that appear in the footer',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'label', title: 'Link Label', type: 'string' }),
          defineField({ name: 'url', title: 'URL or Path', type: 'string' }),
        ]
      }]
    }),
    defineField({
      name: 'footerServices',
      title: 'Footer Services Links',
      type: 'array',
      group: 'navigation',
      description: 'Add the service links that appear in the footer',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'label', title: 'Link Label', type: 'string' }),
          defineField({ name: 'url', title: 'URL or Path', type: 'string' }),
        ]
      }]
    }),

    // ── DEFAULT SEO ───────────────────────────────
    defineField({
      name: 'defaultSeo',
      title: 'Default SEO (used when page has no specific SEO)',
      type: 'object',
      group: 'seo',
      fields: [
        defineField({ name: 'title', title: 'Default Page Title', type: 'string', description: 'Shown in Google if page has no specific title' }),
        defineField({ name: 'description', title: 'Default Meta Description', type: 'text', rows: 3 }),
        defineField({ name: 'ogImage', title: 'Default Social Share Image', type: 'image', options: { hotspot: true } }),
      ],
    }),
    defineField({
      name: 'headerAnnouncement',
      title: 'Top Bar Announcement',
      type: 'string',
      description: 'Message shown in the top header bar (leave empty to hide)',
      group: 'seo',
    }),

    // ── SOCIAL ────────────────────────────────────
    defineField({
      name: 'socialMedia',
      title: 'Social Media Links',
      type: 'object',
      group: 'social',
      fields: [
        defineField({ name: 'instagram', title: 'Instagram URL', type: 'url' }),
        defineField({ name: 'facebook', title: 'Facebook URL', type: 'url' }),
        defineField({ name: 'youtube', title: 'YouTube URL', type: 'url' }),
        defineField({ name: 'googleBusiness', title: 'Google Business Link', type: 'url' }),
      ],
    }),

    // ── ADS & SCHEMA ──────────────────────────────
    defineField({
      name: 'schema',
      title: 'Business Schema for Google Ads',
      type: 'object',
      description: '✅ Fill this to boost Google Ads quality score',
      group: 'ads',
      fields: [
        defineField({ name: 'googleAnalyticsId', title: 'Google Analytics ID (GA4)', type: 'string', description: 'e.g. G-XXXXXXXXXX' }),
        defineField({ name: 'googleAdsId', title: 'Google Ads Conversion ID', type: 'string', description: 'e.g. AW-XXXXXXXXXX' }),
        defineField({ name: 'metaPixelId', title: 'Meta/Facebook Pixel ID', type: 'string' }),
        defineField({ name: 'googleVerification', title: 'Google Search Console Verification', type: 'string' }),
        defineField({ name: 'aggregateRating', title: 'Google Business Star Rating', type: 'number', description: 'Your overall clinic rating' }),
        defineField({ name: 'totalReviews', title: 'Total Number of Reviews', type: 'number' }),
        defineField({ name: 'priceRange', title: 'Price Range', type: 'string', options: { list: ['₹', '₹₹', '₹₹₹', '₹₹₹₹'] } }),
      ],
    }),
    defineField({
      name: 'zohoWebhookUrl',
      title: 'Zoho CRM Lead Webhook URL',
      type: 'string',
      description: 'Auto-populated — do not change unless instructed',
      group: 'ads',
    }),
  ],
  preview: { prepare: () => ({ title: '⚙️ Clinic Info & Settings' }) },
})
