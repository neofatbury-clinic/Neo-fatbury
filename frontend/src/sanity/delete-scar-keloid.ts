// Delete Scar & Keloid Treatment from Sanity
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

async function deleteDoc() {
  // Find and delete all versions (published + drafts)
  const docs = await client.fetch(
    `*[_type == "service" && slug.current == "scar-treatment"]{ _id }`
  );
  
  if (!docs.length) {
    console.log('Not found — nothing to delete.');
    return;
  }

  for (const doc of docs) {
    await client.delete(doc._id);
    console.log(`🗑️ Deleted: ${doc._id}`);
    // Also delete draft version
    try {
      await client.delete(`drafts.${doc._id}`);
      console.log(`🗑️ Deleted draft: drafts.${doc._id}`);
    } catch {}
  }

  console.log('✅ Scar & Keloid Treatment removed from CMS.');
}

deleteDoc().catch(console.error);
