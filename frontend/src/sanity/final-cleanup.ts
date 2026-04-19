// src/sanity/final-cleanup.ts
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
  console.log('🧹 Performing Universal Clinical Cleanup...');

  // 1. Find every service document
  const allServices = await client.fetch(`*[_type == "service"]`);
  
  for (const s of allServices) {
    // If it has NO name, and NO slug, it's a ghost. Delete it.
    if (!s.name && !s.slug) {
      console.log(`🗑️ Deleting pure ghost: ${s._id}`);
      await client.delete(s._id);
      continue;
    }

    // If it has a title but NO name, move title to name
    if (s.title && !s.name) {
      console.log(`📝 Fixed Naming for: ${s.title}`);
      await client.patch(s._id).set({ name: s.title }).unset(['title']).commit();
    }
  }

  // 2. Final purge of anything named "Untitled"
  const untitled = await client.fetch(`*[_type == "service" && (name == "Untitled" || !defined(name))]`);
  for (const u of untitled) {
    console.log(`🗑️ Deleting untitled ghost: ${u._id}`);
    await client.delete(u._id);
  }

  console.log('\n✅ YOUR CLINICAL DATABASE IS NOW 100% CLEAN AND NAMED!');
}

cleanup().catch(console.error);
