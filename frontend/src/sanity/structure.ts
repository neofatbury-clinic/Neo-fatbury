// src/sanity/structure.ts
// Controls what the content editor sees in the Sanity Studio sidebar
import type { StructureResolver } from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('NeoFatbury CMS')
    .items([

      // ── GLOBAL SETTINGS ──────────────────────────
      S.listItem()
        .title('⚙️ Clinic Info & Settings')
        .id('siteSettings')
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),

      S.divider(),

      // ── PAGES ────────────────────────────────────
      S.listItem()
        .title('🏠 Homepage')
        .id('homepage')
        .child(
          S.document()
            .schemaType('homepage')
            .documentId('homepage')
        ),

      S.listItem()
        .title('🏢 About Us Page')
        .id('aboutPage')
        .child(
          S.document()
            .schemaType('aboutPage')
            .documentId('aboutPage')
        ),

      S.listItem()
        .title('📊 Results Gallery Page')
        .id('resultsPage')
        .child(
          S.document()
            .schemaType('resultsPage')
            .documentId('resultsPage')
        ),

      S.listItem()
        .title('📬 Contact Us Page')
        .id('contactPage')
        .child(
          S.document()
            .schemaType('contactPage')
            .documentId('contactPage')
        ),

      S.listItem()
        .title('📄 Custom Pages')
        .schemaType('genericPage')
        .child(S.documentTypeList('genericPage').title('Custom Pages')),

      S.divider(),

      // ── TREATMENTS ───────────────────────────────
      S.listItem()
        .title('💉 Services & Treatments')
        .child(
          S.list()
            .title('Services by Category')
            .items([
              S.listItem()
                .title('🩺 All Services')
                .child(S.documentTypeList('service').title('All Services')),
              S.listItem()
                .title('✨ Skin Treatments')
                .child(
                  S.documentTypeList('service')
                    .title('Skin Treatments')
                    .filter('_type == "service" && category == "skin"')
                ),
              S.listItem()
                .title('💆 Hair Treatments')
                .child(
                  S.documentTypeList('service')
                    .title('Hair Treatments')
                    .filter('_type == "service" && category == "hair"')
                ),
              S.listItem()
                .title('⚖️ Slimming & Body')
                .child(
                  S.documentTypeList('service')
                    .title('Slimming Treatments')
                    .filter('_type == "service" && category == "slimming"')
                ),
            ])
        ),

      // ── BLOG ─────────────────────────────────────
      S.listItem()
        .title('📝 Blog & Articles')
        .child(
          S.list()
            .title('Blog')
            .items([
              S.listItem()
                .title('📄 All Articles')
                .child(S.documentTypeList('blogPost').title('All Articles')),
              S.listItem()
                .title('✅ Published')
                .child(
                  S.documentTypeList('blogPost')
                    .title('Published Articles')
                    .filter('_type == "blogPost" && isPublished == true')
                ),
            ])
        ),

      S.divider(),

      // ── MEDIA & PROOF ────────────────────────────
      S.listItem()
        .title('📸 Before & After Hub')
        .schemaType('gallery')
        .child(S.documentTypeList('gallery').title('Gallery')),

      S.listItem()
        .title('⭐ Patient Reviews')
        .schemaType('testimonial')
        .child(S.documentTypeList('testimonial').title('Testimonials')),

      S.divider(),

      // ── TEAM ─────────────────────────────────────
      S.listItem()
        .title('👩‍⚕️ Doctors & Team')
        .schemaType('teamMember')
        .child(S.documentTypeList('teamMember').title('Team Members')),
    ])
