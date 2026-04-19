// src/sanity/debug-all.ts
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

async function main() {
  const all = await client.fetch('*[_type == "service"]');
  console.log(`TOTAL SERVICE DOCUMENTS: ${all.length}`);
  all.forEach((d: any) => {
    console.log(`ID: ${d._id} | Name: "${d.name}" | Title: "${d.title}" | Category: "${d.category}"`);
  });
}
main();
