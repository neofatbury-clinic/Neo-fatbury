// src/sanity/queries.ts
// GROQ queries for all NeoFatbury content types — Updated for Advanced Schemas
import { client } from './client'

// ── Homepage ────────────────────────────────────────────
export async function getHomepage() {
  return client.fetch(`*[_type == "homepage"][0]{
    heroHeadline,
    heroAccentLine,
    heroSubtext,
    heroImage,
    heroCtaText,
    heroStats[]{ number, label },
    treatmentsSectionTitle,
    treatmentsSectionSubtitle,
    featuredTreatments[]->{
      name,
      slug,
      shortDescription,
      heroImage, // This is main image now
      category
    },
    treatmentsGridLayout,
    whyUsTitle,
    whyUsPoints[]{ icon, title, description },
    resultsSectionTitle,
    resultsSlider[]{ label, image, quote },
    doctorsSectionTitle,
    featuredDoctors[]->{
      name,
      role,
      photo,
      specialization,
      qualifications
    },
    seo {
      metaTitle,
      metaDescription,
      ogImage
    }
  }`)
}

// ── Services ─────────────────────────────────────────────
export async function getAllServices() {
  return client.fetch(`*[_type == "service"] | order(order asc){
    _id,
    name,
    slug,
    category,
    shortDescription,
    heroImage,
    isFeatured
  }`)
}

export async function getServiceBySlug(slug: string) {
  return client.fetch(`*[_type == "service" && slug.current == $slug][0]{
    name,
    slug,
    category,
    heroHeadline,
    heroAccentLine,
    heroSubtext,
    heroImage,
    heroTrustBadges[]{ icon, label },
    heroCtaText,
    shortDescription,
    contentSections[]{
      ...,
      image,
      faqs[]{ question, answer },
      items[]{ icon, title, description },
      results[]{ label, image, testimonial },
      steps[]{ stepNumber, title, description }
    },
    seo {
      metaTitle,
      metaDescription,
      ogImage,
      keywords,
      noIndex
    },
    adSchema {
      serviceType,
      priceFrom,
      priceTo,
      duration,
      aggregateRating,
      reviewCount
    }
  }`, { slug })
}

// ── Blog ─────────────────────────────────────────────────
export async function getAllBlogPosts() {
  return client.fetch(`*[_type == "blogPost" && isPublished == true] | order(publishedAt desc){
    _id,
    title,
    slug,
    publishedAt,
    category,
    coverImage,
    excerpt,
    tags,
    author->{ name, role, photo }
  }`)
}

export async function getBlogPostBySlug(slug: string) {
  return client.fetch(`*[_type == "blogPost" && slug.current == $slug][0]{
    title,
    slug,
    publishedAt,
    category,
    coverImage,
    body,
    tags,
    author->{ name, role, photo },
    relatedService->{ name, slug },
    seo {
      metaTitle,
      metaDescription,
      ogImage,
      canonicalUrl
    }
  }`, { slug })
}

// ── Team ─────────────────────────────────────────────────
export async function getTeamMembers() {
  return client.fetch(`*[_type == "teamMember" && isVisible == true] | order(order asc){
    _id,
    name,
    role,
    specialization,
    photo,
    bio,
    qualifications,
    experience,
    registrationNumber
  }`)
}

// ── Site Settings ─────────────────────────────────────────
export async function getSiteSettings() {
  return client.fetch(`*[_type == "siteSettings"][0]{
    clinicName,
    logo,
    tagline,
    favicon,
    colors {
      primary,
      accent,
      background,
      surface,
      text,
      ctaButton,
      ctaButtonText
    },
    contact,
    locations[]{
      name,
      address,
      phone,
      googleMapsUrl,
      photo,
      heroImage,
      openingHours[]{ day, hours }
    },
    defaultSeo,
    headerAnnouncement,
    socialMedia,
    schema,
    zohoWebhookUrl
  }`)
}

// ── Testimonials & Gallery (Legacy support) ────────────────
export async function getGallery() {
  return client.fetch(`*[_type == "gallery"] | order(order asc){
    _id, treatment, beforeImage, afterImage, combinedImage, patientQuote, description
  }`)
}
