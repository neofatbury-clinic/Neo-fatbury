import { createClient } from '@sanity/client';
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'p8ddtj8e',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  token: 'skCI7MW9ZFcFji6s08u3bKe05EY7Bni99cDzVqYerfb2vtW12S4jbEaPQ43nhrOr8JQL79A18BF32LRFAVJXiDdJMhgn7ID2eKnA67vgumdeD17mokZSkSDia6YcfqfyUOlBgKtFArC1CSTPUZNKWs93ExnulZMza8WhXKHdSRX2ESzZCkYy',
  useCdn: false,
  apiVersion: '2024-01-01',
});

async function checkImages() {
  const query = `*[(_type in ["service", "homepage", "aboutPage"]) || _id in ["homepage", "aboutPage"]] {
    _id,
    _type,
    name,
    title,
    slug,
    "heroImageAssetId": heroImage.asset._ref
  }`;
  
  const results = await client.fetch(query);
  results.forEach(r => {
    const name = r.name || r.title || r._id;
    console.log(`${r._type} (${r._id}): ${name} -> ${r.heroImageAssetId}`);
  });
}

checkImages().catch(console.error);
