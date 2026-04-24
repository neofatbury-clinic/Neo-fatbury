// src/sanity/skin-sync.ts
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

const SKIN_SERVICES = [
  { name: 'Acne Treatment', slug: 'acne-treatment' },
  { name: 'Acne Scar Treatment', slug: 'acne-scar-treatment' },
  { name: 'Laser Hair Reduction', slug: 'laser-hair-reduction' },
  { name: 'Skin Brightening', slug: 'skin-brightening' },
  { name: 'Scar Treatment', slug: 'scar-treatment' },
  { name: 'Chemical Peels & Hydra-Facials', slug: 'chemical-peels-hydra-facials' },
  { name: 'Anti-Aging & Rejuvenation', slug: 'anti-aging-rejuvenation' },
];

async function sync() {
  console.log('🧼 Cleaning and Syncing Skin Services...');
  
  for (const s of SKIN_SERVICES) {
      // Find any variants with same name or similar slug
      const existing = await client.fetch(`*[_type == "service" && (name == $name || slug.current == $slug)]`, { name: s.name, slug: s.slug });
      
      if (existing.length > 0) {
          for (const doc of existing) {
              console.log(`Updating ${doc.name} (${doc._id})...`);
              await client.patch(doc._id).set({
                  name: s.name,
                  slug: { _type: 'slug', current: s.slug },
                  category: 'skin'
              }).commit();
          }
      } else {
          console.log(`Creating ${s.name}...`);
          await client.create({
              _type: 'service',
              name: s.name,
              slug: { _type: 'slug', current: s.slug },
              category: 'skin',
              order: 1
          });
      }
  }
  console.log('🎉 Skin Services Aligned.');
}

sync().catch(console.error);
