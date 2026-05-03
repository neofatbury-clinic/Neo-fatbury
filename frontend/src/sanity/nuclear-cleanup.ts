import { createClient } from '@sanity/client';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const client = createClient({
  projectId: 'p8ddtj8e',
  dataset:   'production',
  token:     'sktBJL7uoQlIUPcLVPdDhZBeAlkCt78I2EKxcR0RD6jEdB9POwODHSP2uVbli31BZoaFI68QR2EFDW55L7Y7bzXF1Of5gDn4U6yW5oWqGYayyhhcvn8h2DqWOAJNOBCwwKomyVPx0wvFBKFVkJwfDRnP2chyn5yIyU83RisxcAsy3eQPoiDD',
  useCdn:    false,
  apiVersion: '2024-01-01',
});

async function nuclearCleanup() {
  console.log('🚀 Searching for unwanted Skin treatments...');
  
  // Search for anything with these names or slugs
  const targets = await client.fetch(`*[
    (name match "Pimple*" || name match "Pigment*") ||
    (slug.current match "acne-treatment" || slug.current match "pigmentation-treatment")
  ]{ _id, name, "slug": slug.current }`);

  console.log(`Found ${targets.length} targets for deletion.`);

  for (const t of targets) {
    console.log(`🗑️ Deleting: ${t.name || t.slug} (${t._id})`);
    await client.delete(t._id);
  }

  console.log('✨ Cleanup complete! Refresh your page in 30 seconds.');
}

nuclearCleanup().catch(console.error);
