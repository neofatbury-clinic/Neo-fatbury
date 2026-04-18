// src/sanity/seed-about.ts
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

async function seed() {
  console.log('🚀 Syncing "About Us" Content to Studio...');

  const aboutData = {
    _type: 'aboutPage',
    _id: 'aboutPage',
    title: 'Clinical Excellence in Skin, Hair & Slimming',
    storyTitle: 'About NeoFatbury Clinical Skin & Hair',
    storyText: [
      {
        _type: 'block',
        children: [{ _type: 'span', text: 'At NeoFatbury, we believe that true beauty is rooted in health and confidence. Our clinic was established to bring the world\'s most advanced US-FDA approved technologies to India, delivered by a team of highly qualified dermatologists and clinical experts.' }]
      },
      {
        _type: 'block',
        children: [{ _type: 'span', text: 'With facilities in Kukatpally and Himayatnagar, we specialize in a "Subject-First" approach, ensuring every treatment plan is as unique as the patient we serve.' }]
      }
    ],
    stats: [
      { _key: 's1', label: 'Patients Served', value: '10k+' },
      { _key: 's2', label: 'Years Experience', value: '15+' }
    ],
    pillars: [
      { _key: 'p1', title: 'Our Mission', description: 'To provide safe, effective, and scientifically backed aesthetic solutions that help our patients look and feel their absolute best.' },
      { _key: 'p2', title: 'Our Vision', description: 'To be the most trusted name in clinical dermatology and slimming across India, known for integrity and excellence.' },
      { _key: 'p3', title: 'Core Promise', description: 'Safe clinical procedures, transparent pricing, and results that speak for themselves. You are in safe hands.' }
    ]
  };

  try {
    await client.createOrReplace(aboutData);
    console.log('✅ "About Us" Sync Completed!');
  } catch (err: any) {
    console.error('❌ Sync failed:', err.message);
  }
}

seed();
