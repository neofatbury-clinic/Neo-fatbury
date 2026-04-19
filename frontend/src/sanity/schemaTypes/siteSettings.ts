// src/sanity/schemaTypes/siteSettings.ts
// GLOBAL SITE SETTINGS — Brand, Colors, Contact, Nav
// This is ONE document — edit once, applies everywhere
import { defineType, defineField } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: '⚙️ Clinic Info & Settings',
  type: 'document',
  groups: [
    { name: 'brand', title: '🎨 Brand & Logo' },
    { name: 'contact', title: '📞 Phone, Email & Clinics' },
    { name: 'navigation', title: '🔗 Menu Links' },
    { name: 'seo', title: '🔍 Google & SEO' },
    { name: 'advancedSeo', title: '🤖 Robots & Sitemap' },
    { name: 'contactForm', title: '📝 Lead Form' },
    { name: 'social', title: '📱 Social Media' },
    { name: 'ads', title: '📊 Google Ads & Analytics' },
    { name: 'branding', title: '🖍️ Header & Footer Branding' },
  ],
  fields: [
    // ── BRAND ─────────────────────────────────────
    defineField({
      name: 'clinicName',
      title: 'Clinic Name',
      type: 'string',
      description: "💡 Your clinic's official name. Shown in the header and footer.",
      validation: (r) => r.required(),
      group: 'brand',
    }),
    defineField({
      name: 'logo',
      title: 'Logo Image',
      type: 'image',
      description: '💡 Upload your clinic logo. Recommended size: 200x60px (PNG with transparent background).',
      options: { hotspot: true },
      group: 'brand',
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline / Slogan',
      type: 'string',
      description: '💡 A short catchy phrase, e.g. "Slimming | Skin | Hair | Laser"',
      group: 'brand',
    }),
    defineField({
      name: 'favicon',
      title: 'Website Tab Icon (Favicon)',
      type: 'image',
      description: '💡 The tiny icon that appears in browser tabs. Upload a square image (32x32 or 64x64).',
      group: 'brand',
    }),

    // COLORS
    defineField({
      name: 'colors',
      title: '🎨 Website Colors',
      type: 'object',
      description: '💡 Change these to update colors across the ENTIRE website instantly. Use hex codes like #00acb1.',
      group: 'brand',
      fields: [
        defineField({ name: 'primary', title: 'Primary Color (Main Teal)', type: 'string', initialValue: '#00acb1', description: '💡 Used for buttons, links, and headings. Default: #00acb1' }),
        defineField({ name: 'accent', title: 'Accent Color (Orange/Gold)', type: 'string', initialValue: '#e8a317', description: '💡 Used for highlighted text and special buttons. Default: #e8a317' }),
        defineField({ name: 'background', title: 'Page Background', type: 'string', initialValue: '#ffffff', description: '💡 Main background color. Default: white' }),
        defineField({ name: 'surface', title: 'Card Background', type: 'string', initialValue: '#f0f8f8', description: '💡 Background of cards and sections. Default: light teal' }),
        defineField({ name: 'text', title: 'Body Text Color', type: 'string', initialValue: '#1a2b3c', description: '💡 Color of paragraph text' }),
        defineField({ name: 'ctaButton', title: 'CTA Button Color', type: 'string', initialValue: '#00acb1', description: '💡 "Book Appointment" button color' }),
        defineField({ name: 'ctaButtonText', title: 'CTA Button Text Color', type: 'string', initialValue: '#ffffff', description: '💡 Text on CTA buttons (usually white)' }),
      ],
    }),

    // ── CONTACT ───────────────────────────────────
    defineField({
      name: 'contact',
      title: 'Contact Details',
      type: 'object',
      description: '💡 These details appear in the header, footer, and contact page.',
      group: 'contact',
      fields: [
        defineField({ name: 'phone', title: 'Primary Phone Number', type: 'string', description: '💡 Main clinic number shown in the header. Example: 9700641000' }),
        defineField({ name: 'whatsapp', title: 'WhatsApp Number', type: 'string', description: '💡 Number for the green WhatsApp button. Include country code, e.g. 919700641000' }),
        defineField({ name: 'email', title: 'Email Address', type: 'string', description: '💡 Contact email shown on the website' }),
      ],
    }),
    defineField({
      name: 'locations',
      title: 'Clinic Branches',
      type: 'array',
      description: '💡 Add all your clinic branches here. Each branch gets its own location page.',
      group: 'contact',
      of: [{
        type: 'object',
        name: 'location',
        fields: [
          defineField({ name: 'name', title: 'Branch Name', type: 'string', description: '💡 Example: "Kukatpally Clinic"' }),
          defineField({ name: 'address', title: 'Full Address', type: 'text', rows: 3, description: '💡 Complete postal address for this branch. Example: "City plaza Building, 2nd floor, beside fast rack showroom. Himyathnagar circle, Hyderabad"' }),
          defineField({ name: 'phone', title: 'Branch Phone', type: 'string', description: '💡 Phone number specific to this branch' }),
          defineField({ name: 'googleMapsUrl', title: 'Google Maps Link', type: 'url', description: '💡 Go to Google Maps → Search your clinic → Click "Share" → Copy the link and paste here' }),
          defineField({ name: 'photo', title: 'Clinic Photo', type: 'image', options: { hotspot: true }, description: '💡 A photo of the clinic exterior or reception' }),
          defineField({ name: 'heroImage', title: 'Location Page Background', type: 'image', options: { hotspot: true }, description: '💡 Large background image for the location page hero section' }),
          defineField({
            name: 'openingHours',
            title: 'Opening Hours',
            type: 'array',
            description: '💡 Add each day with its timings',
            of: [{
              type: 'object',
              fields: [
                defineField({ name: 'day', title: 'Day', type: 'string', description: '💡 Example: "Monday - Saturday"' }),
                defineField({ name: 'hours', title: 'Hours', type: 'string', description: '💡 Example: "8:00 AM - 10:00 PM"' }),
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
      title: 'Top Menu Links',
      type: 'array',
      group: 'navigation',
      description: '💡 These are the links shown at the top of every page (Home, Skin, Hair, etc.)',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'label', title: 'Link Name', type: 'string', description: '💡 What visitors see, e.g. "Home", "About Us", "Skin"' }),
          defineField({ name: 'url', title: 'Link URL', type: 'string', description: '💡 Where it goes, e.g. "/" for Home, "/about-us", "/skin"' }),
          defineField({ 
            name: 'dropdownItems', 
            title: 'Dropdown Sub-Links (Optional)', 
            type: 'array',
            description: '💡 If this menu item has a dropdown (like Skin → Acne Treatment, Laser, etc.)',
            of: [{
              type: 'object',
              fields: [
                defineField({ name: 'label', title: 'Sub-Link Name', type: 'string', description: '💡 Example: "Acne Treatment"' }),
                defineField({ name: 'url', title: 'Sub-Link URL', type: 'string', description: '💡 Example: "/skin/acne-treatment"' }),
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
      description: '💡 Links shown at the bottom of every page (About, Contact, Privacy, etc.)',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'label', title: 'Link Name', type: 'string' }),
          defineField({ name: 'url', title: 'Link URL', type: 'string' }),
        ]
      }]
    }),
    defineField({
      name: 'footerServices',
      title: 'Footer Treatment Links',
      type: 'array',
      group: 'navigation',
      description: '💡 Treatment links shown in the footer services column',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'label', title: 'Link Name', type: 'string' }),
          defineField({ name: 'url', title: 'Link URL', type: 'string' }),
        ]
      }]
    }),

    // ── SEO & META ────────────────────────────────
    defineField({
      name: 'defaultSeo',
      title: 'Default Google Settings',
      type: 'object',
      group: 'seo',
      description: "💡 These are used when a page doesn't have its own Google title/description. Think of this as the 'fallback' for SEO.",
      fields: [
        defineField({ name: 'title', title: 'Default Google Title', type: 'string', description: '💡 What appears in the browser tab and Google search. Example: "NeoFatbury - Best Skin Clinic in Hyderabad"' }),
        defineField({ name: 'description', title: 'Default Google Description', type: 'text', rows: 3, description: '💡 The text snippet Google shows below your page title. Keep it under 155 characters.' }),
        defineField({ name: 'ogImage', title: 'Default Social Share Image', type: 'image', options: { hotspot: true }, description: '💡 The image that appears when someone shares your website on WhatsApp, Facebook, or Twitter' }),
        defineField({
          name: 'seoSelfCheck',
          title: '📋 SEO Health Check (Instructions)',
          type: 'text',
          rows: 5,
          readOnly: true,
          initialValue: '1. Metadata: Ensure every page has a Title & Description.\n2. Alt Tags: Ensure every image has an "Alt Text" description.\n3. Headings: Use only one H1 per page.\n4. Keywords: Mention your city (Hyderabad) in the main text.\n5. Speed: Keep images under 200KB.',
          description: '💡 Reference this checklist to ensure your site stays at the top of Google results.'
        }),
      ],
    }),

    // ── ROBOTS & SITEMAP ─────────────────────────
    defineField({
      name: 'robotsConfig',
      title: 'Search Engine Crawling',
      type: 'object',
      group: 'advancedSeo',
      description: '💡 Controls whether Google and other search engines can find and show your website.',
      fields: [
        defineField({ name: 'allowIndexing', title: 'Allow Google to show my website in search results?', type: 'boolean', initialValue: true, description: '💡 Turn this ON (default). Only turn OFF if you want to hide the website from Google temporarily.' }),
        defineField({ name: 'customRobotsTxt', title: 'Custom Rules for Search Engines (Advanced)', type: 'text', rows: 4, description: "⚠️ Only change this if you know what you're doing. Leave empty for default settings." }),
      ],
    }),
    defineField({
      name: 'sitemapConfig',
      title: 'Sitemap Settings',
      type: 'object',
      group: 'advancedSeo',
      description: '💡 A sitemap helps Google find all pages on your website. Configure what to include/exclude.',
      fields: [
        defineField({ name: 'excludePaths', title: 'Pages to Hide from Google Sitemap', type: 'array', of: [{type: 'string'}], description: '💡 Add page URLs that should NOT appear in search results. Example: "/thank-you", "/test-page"' }),
      ],
    }),

    // ── LEAD FORM ────────────────────────────────
    defineField({
      name: 'leadFormSettings',
      title: 'Appointment Form Settings',
      type: 'object',
      group: 'contactForm',
      description: '💡 Customize the consultation booking form that appears on every service page.',
      fields: [
        defineField({ name: 'formTitle', title: 'Form Heading', type: 'string', initialValue: 'Book Your Free Consultation', description: '💡 The big text at the top of the form' }),
        defineField({ name: 'formSubtitle', title: 'Form Subheading', type: 'string', initialValue: 'Get expert care tailored to your needs.', description: '💡 Smaller text below the heading' }),
        defineField({ name: 'buttonText', title: 'Submit Button Text', type: 'string', initialValue: 'Get Free Consultation', description: '💡 What the green button says' }),
        defineField({ name: 'enableWhatsApp', title: 'Show floating WhatsApp button?', type: 'boolean', initialValue: true, description: '💡 The green WhatsApp circle in the bottom-right corner of every page' }),
      ],
    }),

    // ── SOCIAL ────────────────────────────────────
    defineField({
      name: 'socialMedia',
      title: 'Social Media Pages',
      type: 'object',
      group: 'social',
      description: "💡 Add links to your clinic's social media pages. These appear in the footer and schema.",
      fields: [
        defineField({ name: 'instagram', title: 'Instagram Page URL', type: 'url', description: '💡 Example: https://instagram.com/neofatbury' }),
        defineField({ name: 'facebook', title: 'Facebook Page URL', type: 'url', description: '💡 Example: https://facebook.com/neofatbury' }),
        defineField({ name: 'youtube', title: 'YouTube Channel URL', type: 'url', description: '💡 Example: https://youtube.com/@neofatbury' }),
        defineField({ name: 'googleBusiness', title: 'Google Business Profile URL', type: 'url', description: '💡 Your Google Maps business page link' }),
      ],
    }),

    // ── ADS & ANALYTICS ──────────────────────────
    defineField({
      name: 'schema',
      title: 'Google Ads & Analytics Setup',
      type: 'object',
      description: '💡 Connect Google Analytics, Ads tracking, and Meta Pixel to track visitors and ad conversions.',
      group: 'ads',
      fields: [
        defineField({ name: 'googleAnalyticsId', title: 'Google Analytics ID', type: 'string', description: '💡 Find this in Google Analytics 4 → Admin → Data Streams. Looks like G-XXXXXXXXXX' }),
        defineField({ name: 'googleAdsId', title: 'Google Ads Conversion ID', type: 'string', description: '💡 Find this in Google Ads → Tools → Conversions. Looks like AW-XXXXXXXXXX' }),
        defineField({ name: 'metaPixelId', title: 'Facebook/Instagram Pixel ID', type: 'string', description: '💡 Find this in Meta Business Suite → Events Manager → Pixel ID' }),
        defineField({ name: 'googleVerification', title: 'Google Search Console Code', type: 'string', description: '💡 The verification code from Google Search Console to prove you own this website' }),
        defineField({ name: 'aggregateRating', title: 'Clinic Star Rating (for Google)', type: 'number', description: '💡 Your overall Google Business rating, e.g. 4.8' }),
        defineField({ name: 'totalReviews', title: 'Total Google Reviews Count', type: 'number', description: '💡 Total number of Google reviews, e.g. 350' }),
        defineField({ name: 'priceRange', title: 'Price Range', type: 'string', options: { list: ['₹', '₹₹', '₹₹₹', '₹₹₹₹'] }, description: '💡 Select the price level of your clinic' }),
      ],
    }),
    defineField({
      name: 'zohoWebhookUrl',
      title: 'Zoho CRM Webhook URL',
      type: 'string',
      description: '⚠️ This is auto-configured. Do NOT change unless instructed by your developer.',
      group: 'ads',
    }),

    // ── BRANDING ──────────────────────────────────
    defineField({
      name: 'headerAnnouncementText',
      title: 'Top Bar News Message',
      type: 'string',
      description: '💡 e.g., "🎉 Free Clinical Analysis for first 50 patients!". Leave empty to hide.',
      group: 'branding',
    }),
    defineField({
      name: 'footerCopyright',
      title: 'Footer Copyright Text',
      type: 'string',
      initialValue: '© 2024 NeoFatbury Clinical Skin, Hair & Slimming. All Rights Reserved.',
      group: 'branding',
    }),
    defineField({
      name: 'footerDisclaimer',
      title: 'Medical Disclaimer',
      type: 'text',
      rows: 2,
      description: '💡 Small text at the very bottom, e.g., "Results may vary from person to person."',
      group: 'branding',
    }),
  ],
  preview: { prepare: () => ({ title: '⚙️ Clinic Info & Settings' }) },
})
