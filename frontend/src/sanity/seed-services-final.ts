// src/sanity/seed-services-final.ts
import { createClient } from '@sanity/client';
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'p8ddtj8e',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
  apiVersion: '2024-01-01',
});

const ALL_SERVICES = [
  // ✨ SKIN
  { name: 'Acne & Pimple Treatment', category: 'skin', slug: 'acne-treatment', h1: 'Clear Spotless Skin', desc: 'Medical-grade acne clearing with US-FDA technology.' },
  { name: 'Laser Hair Reduction', category: 'skin', slug: 'laser-hair-reduction', h1: 'Permanent Smoothness', desc: 'Painless triple-wavelength laser for men & women.' },
  { name: 'Skin Brightening', category: 'skin', slug: 'skin-brightening', h1: 'Radiant Luminous Glow', desc: 'Clinical brightening for pigmentation and uneven tone.' },
  { name: 'Acne Scar Treatment', category: 'skin', slug: 'acne-scar-treatment', h1: 'Texture Restoration', desc: 'Advanced fractional laser & subcision for deep scars.' },
  { name: 'Scar & Keloid Treatment', category: 'skin', slug: 'scar-treatment', h1: 'Safe Scar Revision', desc: 'Clinical precision for surgical and injury scars.' },

  // 💇 HAIR
  { name: 'Hair Loss Treatment', category: 'hair', slug: 'hair-loss-treatment', h1: 'Clinical Hair Regrowth', desc: 'Stop hair thinning with MD-certified regrowth therapies.' },
  { name: 'Hair Transplantation', category: 'hair', slug: 'hair-transplantation', h1: 'Full Natural Density', desc: 'Elite FUE hair transplant performed by clinical experts.' },
  { name: 'PRP Hair Therapy', category: 'hair', slug: 'prp-hair', h1: 'Natural Growth Factors', desc: 'High-concentration injectable growth factor therapy.' },

  // ⚖️ SLIMMING
  { name: 'CoolSculpting', category: 'slimming', slug: 'coolsculpting', h1: 'Freeze Stubborn Fat', desc: 'Original US-FDA approved non-surgical fat reduction.' },
  { name: 'Weight Loss & Transformation', category: 'slimming', slug: 'weight-loss', h1: 'Clinical Weight Management', desc: 'MD-certified programs for healthy, sustainable weight loss.' },
  { name: 'Inch Loss & Body Contouring', category: 'slimming', slug: 'inch-loss', h1: 'Sculpt Your Shape', desc: 'Advanced HIFU & Radio-frequency for body shaping.' }
];

async function seed() {
  console.log('💎 Rebuilding Full Clinical Menu (Aligned with Website)...');

  for (const s of ALL_SERVICES) {
    console.log(`Syncing: ${s.name}`);
    
    const doc = {
      _type: 'service',
      name: s.name,
      slug: { _type: 'slug', current: s.slug },
      category: s.category,
      heroHeadline: s.h1,
      heroSubtext: s.desc,
      shortDescription: s.desc.substring(0, 150),
      seo: {
        _type: 'object',
        metaTitle: `${s.name} in Hyderabad | NeoFatbury Clinical`,
        metaDescription: `Get advanced ${s.name} at NeoFatbury Hyderabad. US-FDA approved technology and expert doctors.`,
      }
    };

    // Replace if exists, Create if not
    const query = `*[_type == "service" && slug.current == $slug][0]`;
    const existing = await client.fetch(query, { slug: s.slug });

    if (existing) {
      await client.patch(existing._id).set(doc).commit();
      console.log(`✅ SYNCED: ${s.name}`);
    } else {
      await client.create(doc);
      console.log(`✨ CREATED: ${s.name}`);
    }
  }

  console.log('\n🚀 ALL TREATMENTS ALIGNED WITH WEBSITE NAVIGATION!');
}

seed().catch(console.error);
