import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'p8ddtj8e',
  dataset: 'production',
  apiVersion: '2023-05-03',
  useCdn: false,
  token: 'skCI7MW9ZFcFji6s08u3bKe05EY7Bni99cDzVqYerfb2vtW12S4jbEaPQ43nhrOr8JQL79A18BF32LRFAVJXiDdJMhgn7ID2eKnA67vgumdeD17mokZSkSDia6YcfqfyUOlBgKtFArC1CSTPUZNKWs93ExnulZMza8WhXKHdSRX2ESzZCkYy',
});

async function checkSpecificAsset() {
  try {
    const asset = await client.getDocument('image-18e292e0d429bdae49b951795c151dd655005354-2752x1536-png');
    console.log('Asset found:', JSON.stringify(asset, null, 2));
  } catch (err: any) {
    console.error('Error:', err.message);
  }
}

checkSpecificAsset();
