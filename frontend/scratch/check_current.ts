import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'p8ddtj8e',
  dataset: 'production',
  apiVersion: '2023-05-03',
  useCdn: false,
  token: 'skCI7MW9ZFcFji6s08u3bKe05EY7Bni99cDzVqYerfb2vtW12S4jbEaPQ43nhrOr8JQL79A18BF32LRFAVJXiDdJMhgn7ID2eKnA67vgumdeD17mokZSkSDia6YcfqfyUOlBgKtFArC1CSTPUZNKWs93ExnulZMza8WhXKHdSRX2ESzZCkYy',
});

async function checkCurrentState() {
  try {
    const data = await client.fetch(`{
      "services": *[_type == "service"]{ name, "slug": slug.current, "heroAssetId": heroImage.asset->_id, "heroFilename": heroImage.asset->originalFilename },
      "categories": *[_type == "category"]{ name, "slug": slug.current, "heroAssetId": heroImage.asset->_id, "heroFilename": heroImage.asset->originalFilename }
    }`);
    
    console.log('--- CURRENT STATE ---');
    console.log('SERVICES:');
    data.services.forEach((s: any) => console.log(`- ${s.name} (${s.slug}): ${s.heroFilename} [${s.heroAssetId}]`));
    console.log('CATEGORIES:');
    data.categories.forEach((c: any) => console.log(`- ${c.name} (${c.slug}): ${c.heroFilename} [${c.heroAssetId}]`));
  } catch (err: any) {
    console.error('Error:', err.message);
  }
}

checkCurrentState();
