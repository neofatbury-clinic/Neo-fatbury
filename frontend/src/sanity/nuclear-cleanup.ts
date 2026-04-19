// src/sanity/nuclear-cleanup.ts
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

async function nuclear() {
  console.log('🚀 Executing Nuclear Clinical Cleanup (Scanning All Document Types)...');

  // Find EVERY document of ANY type that has a 'category' field set to 'slimming' OR 'skin' OR 'hair'
  // and has NO name or title.
  const phantoms = await client.fetch(`*[
    (category == "slimming" || category == "skin" || category == "hair") && 
    (!defined(name) && !defined(title))
  ]`);
  
  console.log(`🔍 Found ${phantoms.length} phantoms hiding in your Studio folders.`);

  for (const p of phantoms) {
    console.log(`🗑️ Deleting phantom: [${p._id}] Type: ${p._type}`);
    await client.delete(p._id);
  }

  console.log('\n✅ NUCLEAR CLEANUP COMPLETE! Re-syncing your professional treatment menu...');
}

nuclear().catch(console.error);
