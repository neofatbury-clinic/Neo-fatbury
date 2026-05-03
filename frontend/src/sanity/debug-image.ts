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

async function checkImageResolution() {
  const result = await client.fetch(`*[_type == "service" && slug.current == "skin-brightening"][0]{
    name,
    heroImage,
    "image": heroImage.asset->url
  }`);
  
  console.log('--- IMAGE RESOLUTION DEBUG ---');
  console.log(JSON.stringify(result, null, 2));
}

checkImageResolution();
