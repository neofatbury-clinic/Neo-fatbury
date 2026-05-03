// src/sanity/final-cleanup.ts
import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'p8ddtj8e', 
  dataset: 'production',
  useCdn: false,
  token: 'skCI7MW9ZFcFji6s08u3bKe05EY7Bni99cDzVqYerfb2vtW12S4jbEaPQ43nhrOr8JQL79A18BF32LRFAVJXiDdJMhgn7ID2eKnA67vgumdeD17mokZSkSDia6YcfqfyUOlBgKtFArC1CSTPUZNKWs93ExnulZMza8WhXKHdSRX2ESzZCkYy',
  apiVersion: '2023-05-03',
});

async function cleanup() {
  console.log('Cleanup started...');
  
  // 1. Delete the draft settings that has 0 locations
  try {
    await client.delete('drafts.siteSettings');
    console.log('✅ Deleted drafts.siteSettings');
  } catch (err) {
    console.log('ℹ️ No drafts.siteSettings found or already deleted.');
  }

  // 2. Ensure the main siteSettings has the correct name and other defaults
  try {
    await client.patch('siteSettings')
      .set({
        clinicName: 'NeoFatbury',
        tagline: 'Leading Skin, Hair & Slimming Clinic',
        contact: {
          phone: '7729955577',
          whatsapp: '917729955577',
          email: 'info@neofatbury.com'
        }
      })
      .commit();
    console.log('✅ Updated main siteSettings with correct metadata.');
  } catch (err) {
    console.error('❌ Failed to update siteSettings:', err);
  }
}

cleanup();
