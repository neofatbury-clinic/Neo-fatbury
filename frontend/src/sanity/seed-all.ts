// src/sanity/seed-all.ts
import { createClient } from '@sanity/client';
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

if (!process.env.SANITY_API_TOKEN) {
  console.error('Missing SANITY_API_TOKEN in .env.local');
  process.exit(1);
}

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'p8ddtj8e',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
  apiVersion: '2024-01-01',
});

async function seed() {
  console.log('🚀 Starting Deep Sync to Sanity Studio...');

  // 1. Seed Site Settings (Clinic Info)
  const siteSettings = {
    _type: 'siteSettings',
    _id: 'siteSettings',
    title: 'NeoFatbury Clinic',
    branches: [
      {
        _key: 'b1',
        name: 'Kukatpally Branch',
        address: '4th Floor, Ganesh Plaza, JNTU - Hitech City Rd, Kukatpally, Hyderabad.',
        phone: '9700641000'
      },
      {
        _key: 'b2',
        name: 'Himayatnagar Branch',
        address: '4th Floor, Velma Bhavan, Beside Pantaloons, Himayatnagar, Hyderabad.',
        phone: '9700641000'
      }
    ]
  };

  // 2. Seed Homepage Hero
  const homepage = {
    _type: 'homepage',
    _id: 'homepage',
    heroTitle: 'Expert Skin, Hair & Slimming',
    heroSubtitle: 'Clinic in Hyderabad',
    heroDescription: 'Transform your confidence with US-FDA approved treatments and expert clinical care. Located in Kukatpally & Himayatnagar.',
  };

  try {
    await client.createOrReplace(siteSettings);
    console.log('✅ Site Settings (Addresses & Phones) Sync Completed');
    
    await client.createOrReplace(homepage);
    console.log('✅ Homepage Hero Text Sync Completed');

    console.log('\n✨ DONE! Your Studio is now fully populated with your exact website data.');
    console.log('You can now edit everything at: https://neofatbury.com/studio');
  } catch (err: any) {
    console.error('❌ Sync failed:', err.message);
  }
}

seed();
