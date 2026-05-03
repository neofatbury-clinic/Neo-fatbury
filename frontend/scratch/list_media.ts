import { createClient } from '@sanity/client';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'p8ddtj8e',
  dataset:   process.env.NEXT_PUBLIC_SANITY_DATASET   || 'production',
  token:     process.env.SANITY_API_TOKEN,
  useCdn:    false,
  apiVersion: '2024-01-01',
});

async function listAllMedia() {
  try {
    const assets = await client.fetch(`*[_type == "sanity.imageAsset"]{
      originalFilename,
      url,
      _id
    }`);
    
    console.log('--- ALL SANITY IMAGE ASSETS ---');
    assets.forEach((a: any) => {
      console.log(`- ${a.originalFilename} (${a._id})`);
    });
  } catch (err) {
    console.error('Error fetching media:', err);
  }
}

listAllMedia();
