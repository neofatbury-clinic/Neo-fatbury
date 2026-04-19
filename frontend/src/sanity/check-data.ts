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

async function checkData() {
  const galleryCount = await client.fetch('count(*[_type == "gallery"])');
  const serviceCount = await client.fetch('count(*[_type == "service"])');
  const galleryItems = await client.fetch('*[_type == "gallery"]{treatment, beforeImage, afterImage, combinedImage}');
  
  console.log('--- DATA STATUS ---');
  console.log(`Gallery Documents: ${galleryCount}`);
  console.log(`Service Documents: ${serviceCount}`);
  console.log('--- GALLERY SAMPLES ---');
  console.log(JSON.stringify(galleryItems, null, 2));
}

checkData();
