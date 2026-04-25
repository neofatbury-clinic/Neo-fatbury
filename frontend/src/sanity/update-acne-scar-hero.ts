import { createClient } from '@sanity/client';
import * as dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env.local') });

const client = createClient({
  projectId: 'p8ddtj8e',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2023-05-03',
  token: process.env.SANITY_API_TOKEN,
});

async function updateAcneScarContent() {
  try {
    const query = `*[_type == "service" && slug.current == "acne-scar-treatment"][0]._id`;
    const docId = await client.fetch(query);

    if (!docId) {
      console.log('No document found for "acne-scar-treatment".');
      return;
    }

    await client
      .patch(docId)
      .set({
        heroHeadline: 'Smooth Skin.',
        heroAccentLine: 'Zero Acne Scars.',
        heroSubtext: 'Advanced clinical scar restoration using surgical-grade technology.',
        heroTrustBadges: [
          { icon: '💎', text: 'PRECISION TECH' },
          { icon: '🛡️', text: 'FDA APPROVED' }
        ]
      })
      .commit();

    console.log('Successfully updated "Acne Scar Treatment" hero content.');
  } catch (error) {
    console.error('Error updating document:', error);
  }
}

updateAcneScarContent();
