// src/sanity/global-audit.ts
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

async function globalAudit() {
  console.log('🌍 Performing Global Clinical Audit (All Document Types)...');
  
  // Fetch EVERY document that has any of our category labels
  const all = await client.fetch(`*[category in ["slimming", "skin", "hair"]]{ _id, _type, name, title, category }`);
  
  console.log(`Total Matches Found: ${all.length}`);
  all.forEach((d: any) => {
    console.log(`- [${d._id}] Type: "${d._type}" | Name/Title: "${d.name || d.title || 'Untitled'}" | Category: "${d.category}"`);
  });
}

globalAudit().catch(console.error);
