// src/sanity/audit-services.ts
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

async function audit() {
  console.log('📊 Auditing Clinical Services...');
  const all = await client.fetch(`*[_type == "service"]{ _id, name, category, slug }`);
  
  console.log(`Total Services: ${all.length}`);
  all.forEach((s: any) => {
    console.log(`- [${s._id}] Name: "${s.name}" | Category: "${s.category}" | Slug: "${s.slug?.current}"`);
  });
}

audit().catch(console.error);
