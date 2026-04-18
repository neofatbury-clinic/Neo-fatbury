// src/sanity/schemaTypes/index.ts
// This file exports ALL schema types — add new ones here
import { service } from './service'
import { blogPost } from './blogPost'
import { gallery } from './gallery'
import { homepage } from './homepage'
import { siteSettings } from './siteSettings'
import { teamMember } from './teamMember'
import { testimonial } from './testimonial'
import { genericPage } from './genericPage'
import { aboutPage } from './aboutPage'

// Named exports for direct import
export { service, blogPost, gallery, homepage, siteSettings, teamMember, testimonial, genericPage, aboutPage }

// Default array export used by sanity.config.ts
export const schemaTypes = [service, blogPost, gallery, homepage, siteSettings, teamMember, testimonial, genericPage, aboutPage]
