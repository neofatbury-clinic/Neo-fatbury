// src/sanity/seed-services.ts
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

const SERVICES = [
  {
    name: 'Acne & Pimple Treatment',
    category: 'skin',
    slug: 'acne-treatment',
    headline: 'Clear, Spotless Skin',
    accent: 'Clinical Acne Solutions',
    desc: 'Advanced medical solutions for active acne and pimples using US-FDA technology.'
  },
  {
    name: 'Laser Hair Reduction',
    category: 'skin',
    slug: 'laser-hair-reduction',
    headline: 'Smooth Precision',
    accent: 'Permanent Hair Reduction',
    desc: 'Painless, triple-wavelength laser technology for men and women.'
  },
  {
    name: 'Skin Brightening',
    category: 'skin',
    slug: 'skin-brightening',
    headline: 'Radiant Glow',
    accent: 'Clinical Brightening',
    desc: 'Target pigmentation and uneven skin tone with medical-grade whitening.'
  },
  {
    name: 'Hair Fall Treatment',
    category: 'hair',
    slug: 'hair-fall-treatment',
    headline: 'Stronger Roots',
    accent: 'Stop Hair Loss Today',
    desc: 'Medical regrowth therapies for thinning hair and clinical hair loss.'
  },
  {
    name: 'CoolSculpting',
    category: 'slimming',
    slug: 'coolsculpting',
    headline: 'Freeze the Fat',
    accent: 'Non-Surgical Fat Loss',
    desc: 'US-FDA approved fat freezing to eliminate stubborn fat without surgery.'
  }
];

async function seed() {
  console.log('💎 Seeding Complex Clinical Content to Sanity...');

  for (const s of SERVICES) {
    console.log(`Processing: ${s.name}`);
    
    const doc = {
      _type: 'service',
      name: s.name,
      slug: { _type: 'slug', current: s.slug },
      category: s.category,
      heroHeadline: s.headline,
      heroAccentLine: s.accent,
      heroSubtext: s.desc,
      shortDescription: s.desc.substring(0, 150),
      seo: {
        _type: 'object',
        metaTitle: `${s.name} in Hyderabad | Best Clinic | NeoFatbury`,
        metaDescription: `Get advanced ${s.name} at NeoFatbury Hyderabad. MD-certified doctors and visible results.`,
        canonicalUrl: `https://neofatbury.com/${s.category}/${s.slug}`
      },
      contentSections: [
        {
          _type: 'textSection',
          sectionTitle: `Experience Advanced ${s.name}`,
          body: [
            {
              _type: 'block',
              children: [{ _type: 'span', text: `Our ${s.name} is designed by expert dermatologists to provide maximum results with minimum downtime. We use US-FDA approved technologies that are safe for all Indian skin types.` }]
            }
          ]
        },
        {
          _type: 'benefitsSection',
          sectionTitle: 'Clinical Benefits',
          items: [
            { title: 'Proven Results', description: 'Visible improvement in just a few sessions.', icon: '📈' },
            { title: 'Safe & painless', description: 'Clinical precision with zero discomfort.', icon: '🛡️' }
          ]
        }
      ]
    };

    // Find and update or create
    const existing = await client.fetch(`*[_type == "service" && slug.current == $slug][0]`, { slug: s.slug });
    if (existing) {
      await client.patch(existing._id).set(doc).commit();
      console.log(`✅ Updated existing: ${s.name}`);
    } else {
      await client.create(doc);
      console.log(`✨ Created new: ${s.name}`);
    }
  }

  console.log('\n🚀 ALL TREATMENTS SEEDED WITH SEO & CONTENT!');
}

seed().catch(console.error);
