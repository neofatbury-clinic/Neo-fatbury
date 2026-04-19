// src/sanity/wipe-services.ts
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

async function wipe() {
  console.log('🧼 Wiping ALL clinical services from Sanity...');
  const ids = await client.fetch('*[_type == "service"]._id');
  console.log(`Found ${ids.length} items to delete.`);

  for (const id of ids) {
    console.log(`🗑️ Deleting: ${id}`);
    await client.delete(id);
  }

  console.log('\n✅ WIPE COMPLETE! Your Studio is now a clean slate.');
}

wipe().catch(console.error);
