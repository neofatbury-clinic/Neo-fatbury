// src/sanity/cleanup-untitled.ts
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

async function cleanup() {
  console.log('🧹 Cleaning up "Untitled" ghost pages from Sanity...');

  // Find all service documents where the name is empty OR doesn't exist
  const ghosts = await client.fetch(`*[_type == "service" && (!defined(name) || name == "" || name == "Untitled")]`);
  
  console.log(`🔍 Found ${ghosts.length} ghost documents.`);

  for (const ghost of ghosts) {
    console.log(`🗑️ Deleting ghost ID: ${ghost._id}`);
    await client.delete(ghost._id);
  }

  console.log('\n✅ CLEANUP COMPLETE! Your clinical lists are now perfect.');
}

cleanup().catch(console.error);
