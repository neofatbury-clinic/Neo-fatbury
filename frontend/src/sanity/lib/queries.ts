// src/sanity/lib/queries.ts
// GROQ queries for all NeoFatbury content types

import { client } from './client'

// ── Homepage ────────────────────────────────────────────
export async function getHomepage() {
  return client.fetch(`*[_type == "homepage"][0]{
    hero, aboutSection, whyUsPoints, seo
  }`)
}

// ── Services ─────────────────────────────────────────────
export async function getAllServices() {
  return client.fetch(`*[_type == "service"] | order(order asc){
    _id, name, slug, category, shortDescription, mainImage, price, duration, isFeatured
  }`)
}

export async function getFeaturedServices() {
  return client.fetch(`*[_type == "service" && isFeatured == true] | order(order asc){
    _id, name, slug, shortDescription, mainImage, price, duration
  }`)
}

export async function getServiceBySlug(slug: string) {
  return client.fetch(`*[_type == "service" && slug.current == $slug][0]{
    name, slug, category, shortDescription, fullDescription, mainImage, price, duration
  }`, { slug })
}

// ── Blog ─────────────────────────────────────────────────
export async function getAllBlogPosts() {
  return client.fetch(`*[_type == "blogPost"] | order(publishedAt desc){
    _id, title, slug, publishedAt, coverImage, excerpt, tags
  }`)
}

export async function getBlogPostBySlug(slug: string) {
  return client.fetch(`*[_type == "blogPost" && slug.current == $slug][0]{
    title, slug, publishedAt, coverImage, body, tags, seo
  }`, { slug })
}

// ── Team ─────────────────────────────────────────────────
export async function getTeamMembers() {
  return client.fetch(`*[_type == "teamMember"] | order(order asc){
    _id, name, role, photo, bio, qualifications
  }`)
}

// ── Testimonials ─────────────────────────────────────────
export async function getFeaturedTestimonials() {
  return client.fetch(`*[_type == "testimonial" && isFeatured == true]{
    _id, clientName, treatment, rating, review, clientPhoto
  }`)
}

// ── Gallery ──────────────────────────────────────────────
export async function getGallery() {
  return client.fetch(`*[_type == "gallery"]{
    _id, treatment, beforeImage, afterImage, description
  }`)
}

// ── Site Settings ─────────────────────────────────────────
export async function getSiteSettings() {
  return client.fetch(`*[_type == "siteSettings"][0]{
    clinicName, logo, tagline, contact, openingHours, socialMedia, bookingUrl
  }`)
}
