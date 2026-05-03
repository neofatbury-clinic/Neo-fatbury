import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'p8ddtj8e',
  dataset: 'production',
  apiVersion: '2023-05-03',
  useCdn: false,
  token: 'skCI7MW9ZFcFji6s08u3bKe05EY7Bni99cDzVqYerfb2vtW12S4jbEaPQ43nhrOr8JQL79A18BF32LRFAVJXiDdJMhgn7ID2eKnA67vgumdeD17mokZSkSDia6YcfqfyUOlBgKtFArC1CSTPUZNKWs93ExnulZMza8WhXKHdSRX2ESzZCkYy',
});

async function findReferences(assetId: string) {
  try {
    const docs = await client.fetch(`*[references($assetId)]{ _type, name, title, "slug": slug.current }`, { assetId });
    console.log(`Documents referencing ${assetId}:`, JSON.stringify(docs, null, 2));
  } catch (err: any) {
    console.error('Error:', err.message);
  }
}

// Check references for one of the "Copy of NEO" images I saw earlier
// image-07e6fa62d5deedcc8971b1f30bf3a93302e5bd0b-1920x1080-png (Scar Treatment)
findReferences('image-07e6fa62d5deedcc8971b1f30bf3a93302e5bd0b-1920x1080-png');
