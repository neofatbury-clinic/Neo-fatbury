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
    name, slug, category, isFeatured, order, shortDescription,
    "heroImage": heroImage.asset->url, heroHeadline, heroAccentLine, heroSubtext, heroCtaText,
    heroTrustBadges[]{ icon, label },
    problemHeading, problemAccentText, problemBottomText, problemBottomAccent,
    problemCards[]{ _key, icon, title, desc, image },
    whatIsLabel, whatIsHeading, whatIsAccentWord, whatIsBody,
    whatIsListHeading, whatIsImageBadge,
    "whatIsImage": whatIsImage.asset->url, whatIsAuthorityNote{ label, text },
    whatIsPoints[]{ _key, icon, text },
    baHeading, baAccentWord, baSubtext, baCtaText, baCtaBtnText, "baImage": baImage.asset->url,
    benefitsHeading, benefitsAccentWord,
    benefitItems[]{ _key, icon, text },
    processHeading, processAccentWord,
    processSteps[]{ _key, icon, title, desc },
    techHeading, techAccentWord, techBody, "techImage": techImage.asset->url,
    techFeatures[]{ _key, icon, text },
    causesSection{ heading, accentWord, items[]{ _key, icon, title } },
    whoIsItFor{ heading, accentWord, items[]{ _key, icon, text } },
    targetAreas{ heading, accentWord, items[]{ _key, icon, text } },
    trustHeading, trustAccentWord,
    trustItems[]{ _key, icon, text },
    faqHeading, faqItems[]{ _key, question, answer },
    finalCtaHeading, finalCtaSubtext, finalCtaPrimaryBtn, finalCtaSecondaryBtn,
    seo{ metaTitle, metaDescription, canonicalUrl, ogImage },
    adSchema{ priceFrom, duration, aggregateRating, reviewCount }
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
    contact,
    clinicLocations[]{
      name,
      address,
      phone,
      whatsapp,
      googleMapsUrl,
      embedUrl,
      photo
    },
    headerAnnouncementText,
    socialMedia,
    headerMenu[] {
      label,
      url,
      dropdownItems[] {
        label,
        url
      }
    }
  }`)
}

// ── Testimonials & Gallery (Legacy support) ────────────────
export async function getGallery() {
  return client.fetch(`*[_type == "gallery"] | order(order asc){
    _id, treatment, beforeImage, afterImage, combinedImage, patientQuote, description
  }`)
}
