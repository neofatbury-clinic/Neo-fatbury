import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'p8ddtj8e',
  dataset: 'production',
  apiVersion: '2023-05-03',
  useCdn: false,
  token: 'skCI7MW9ZFcFji6s08u3bKe05EY7Bni99cDzVqYerfb2vtW12S4jbEaPQ43nhrOr8JQL79A18BF32LRFAVJXiDdJMhgn7ID2eKnA67vgumdeD17mokZSkSDia6YcfqfyUOlBgKtFArC1CSTPUZNKWs93ExnulZMza8WhXKHdSRX2ESzZCkYy',
});

async function checkSkinBrightening() {
  try {
    const service = await client.fetch(`*[_type == "service" && slug.current == "skin-brightening"][0]{
      name,
      heroImage {
        asset->{ originalFilename, url }
      }
    }`);
    console.log('Skin Brightening Hero:', JSON.stringify(service, null, 2));
  } catch (err: any) {
    console.error('Error:', err.message);
  }
}

checkSkinBrightening();
