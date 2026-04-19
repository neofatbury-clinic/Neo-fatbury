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

async function linkResults() {
  console.log('🔗 Connecting Gallery items to the Results Page singleton...');

  // Get all gallery items
  const galleryItems = await client.fetch('*[_type == "gallery"] | order(order asc) { _id }');
  
  if (galleryItems.length === 0) {
    console.log('❌ No gallery items found to link.');
    return;
  }

  const links = galleryItems.map((item: any) => ({
    _key: Math.random().toString(36).substring(2, 9),
    _type: 'reference',
    _ref: item._id
  }));

  // Patch both resultsPage and drafts.resultsPage
  for (const docId of ['resultsPage', 'drafts.resultsPage']) {
    try {
      await client.patch(docId)
        .set({ galleryItems: links })
        .commit();
      console.log(`✅ Success for ${docId}`);
    } catch (err) {
      // Ignore if doesn't exist
    }
  }
}

linkResults()
  .then(() => process.exit(0))
  .catch(console.error);
