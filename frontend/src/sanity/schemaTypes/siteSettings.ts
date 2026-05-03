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
    { name: 'homeHero', title: '🏠 Homepage Hero Text' },
    { name: 'legal', title: '⚖️ Legal & Compliance' },
  ],
  fields: [
    // ── HOMEPAGE HERO ───────────────────────────
    defineField({
      name: 'heroTitle',
      title: 'Hero Heading (Main Title)',
      type: 'string',
      group: 'homeHero',
      description: '💡 e.g. "Expert Skin, Hair & Slimming"'
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtext (Green Text)',
      type: 'string',
      group: 'homeHero',
      description: '💡 e.g. "Clinic in Hyderabad"'
    }),
    defineField({
      name: 'heroDescription',
      title: 'Hero Description (Paragraph)',
      type: 'text',
      rows: 3,
      group: 'homeHero',
      description: '💡 The longer text describing your clinic.'
    }),

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

    // COLORS & FONTS
    defineField({
      name: 'typography',
      title: '🎨 Colors & Typography',
      type: 'object',
      description: '💡 Change fonts and colors across the ENTIRE website instantly.',
      group: 'brand',
      fields: [
        defineField({
          name: 'headingFont',
          title: 'Heading Font Style',
          type: 'string',
          initialValue: 'Montserrat',
          options: {
            list: [
              { title: 'Montserrat (Bold & Modern)', value: 'Montserrat' },
              { title: 'Playfair Display (Elegant & Classic)', value: 'Playfair Display' },
              { title: 'Poppins (Clean & Professional)', value: 'Poppins' },
              { title: 'Outfit (Sleek & Techy)', value: 'Outfit' },
              { title: 'Lora (Sophisticated Serif)', value: 'Lora' },
            ],
          },
          description: '💡 Used for main titles and section headings.'
        }),
        defineField({
          name: 'bodyFont',
          title: 'Body Text Font Style',
          type: 'string',
          initialValue: 'Poppins',
          options: {
            list: [
              { title: 'Poppins (Best for Readability)', value: 'Poppins' },
              { title: 'Inter (Modern & Neutral)', value: 'Inter' },
              { title: 'Montserrat (Consistent & Strong)', value: 'Montserrat' },
              { title: 'Roboto (Standard & Safe)', value: 'Roboto' },
              { title: 'Open Sans (Friendly & Accessible)', value: 'Open Sans' },
            ],
          },
          description: '💡 Used for paragraphs and smaller text.'
        }),
        defineField({ name: 'primary', title: 'Primary Color (Main Teal)', type: 'string', initialValue: '#00acb1', description: '💡 Used for buttons, links, and headings.' }),
        defineField({ name: 'accent', title: 'Accent Color (Orange/Gold)', type: 'string', initialValue: '#e8a317', description: '💡 Used for highlighted text and special buttons.' }),
        defineField({ name: 'background', title: 'Page Background', type: 'string', initialValue: '#ffffff' }),
        defineField({ name: 'surface', title: 'Card Background', type: 'string', initialValue: '#f0f8f8' }),
        defineField({ name: 'text', title: 'Body Text Color', type: 'string', initialValue: '#1a2b3c' }),
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
        defineField({ name: 'phone', title: 'Primary Phone Number', type: 'string', description: '💡 Main clinic number shown in the header. Example: 7729955577' }),
        defineField({ name: 'whatsapp', title: 'WhatsApp Number', type: 'string', description: '💡 Number for the green WhatsApp button. Include country code, e.g. 917729955577' }),
        defineField({ name: 'email', title: 'Email Address', type: 'string', description: '💡 Contact email shown on the website' }),
      ],
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
      name: 'topHeaderMenu',
      title: 'Navigation: Top Bar Links',
      type: 'array',
      group: 'navigation',
      description: '💡 Secondary links shown in the skinny top bar (e.g. FAQ, About, etc.)',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'label', title: 'Link Name', type: 'string' }),
          defineField({ name: 'url', title: 'Link URL', type: 'string' }),
        ]
      }]
    }),
    defineField({
      name: 'clinicLocations',
      title: 'Clinic Locations (Footer & Contact)',
      type: 'array',
      group: 'contact',
      description: '💡 Add your clinic addresses and Google Maps links here. They will show in the Footer and Contact page.',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'name', title: 'Clinic Name', type: 'string' }),
          defineField({ name: 'address', title: 'Address', type: 'text', rows: 2 }),
          defineField({ name: 'phone', title: 'Phone Number', type: 'string' }),
          defineField({ name: 'mapsUrl', title: 'Google Maps (Navigation) Link', type: 'string' }),
          defineField({ name: 'gbpUrl', title: 'Google Business Profile (Reviews) Link', type: 'string', description: '💡 The link to your Google Business page/reviews.' }),
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
        defineField({ name: 'googleBusiness', title: 'Main Google Business Profile (Fallback)', type: 'url', description: '💡 Your primary Google Maps page. Note: You can set individual links for Himayatnagar and Kukatpally in the "Locations" section above.' }),
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
        defineField({ name: 'googleTagManagerId', title: 'Google Tag Manager ID', type: 'string', description: '💡 The main ID from Google Tag Manager. Looks like GTM-XXXXXXX. Once set, GTM will be active on all pages.' }),
        defineField({ name: 'googleAnalyticsId', title: 'Google Analytics ID (Optional)', type: 'string', description: '💡 Find this in Google Analytics 4. Looks like G-XXXXXXXXXX. (Usually tracked via GTM)' }),
        defineField({ name: 'googleAdsId', title: 'Google Ads Conversion ID (Optional)', type: 'string', description: '💡 Find this in Google Ads. Looks like AW-XXXXXXXXXX. (Usually tracked via GTM)' }),
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
    defineField({
      name: 'zohoConfig',
      title: 'Zoho CRM Status',
      type: 'object',
      group: 'ads',
      description: 'ℹ️ Real-time status of your Zoho CRM integration.',
      readOnly: true,
      fields: [
        defineField({ name: 'status', title: 'Sync Status', type: 'string' }),
        defineField({ name: 'lastSync', title: 'Last Successful Lead Sync', type: 'string' }),
      ]
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
    // ── LEGAL ─────────────────────────────────────
    defineField({
      name: 'privacyPolicy',
      title: 'Privacy Policy Content',
      type: 'array',
      group: 'legal',
      of: [{ type: 'block' }],
      description: '💡 Full text for your Privacy Policy page.'
    }),
    defineField({
      name: 'termsConditions',
      title: 'Terms & Conditions Content',
      type: 'array',
      group: 'legal',
      of: [{ type: 'block' }],
      description: '💡 Full text for your Terms & Conditions page.'
    }),
    defineField({
      name: 'medicalDisclaimerContent',
      title: 'Medical Disclaimer Content',
      type: 'array',
      group: 'legal',
      of: [{ type: 'block' }],
      description: '💡 Full text for your Medical Disclaimer page.'
    }),
  ],
  preview: { prepare: () => ({ title: '⚙️ Clinic Info & Settings' }) },
})
