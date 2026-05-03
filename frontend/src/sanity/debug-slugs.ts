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

async function checkServices() {
  const services = await client.fetch(`*[_type == "service"]{
    name,
    "slug": slug.current,
    "category": category->slug.current,
    heroHeadline,
    heroImage
  }`);
  
  console.log('--- SERVICE SLUGS AND CATEGORIES ---');
  console.log(JSON.stringify(services, null, 2));
}

checkServices();
