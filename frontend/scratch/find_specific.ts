import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'p8ddtj8e',
  dataset: 'production',
  apiVersion: '2023-05-03',
  useCdn: false,
  token: 'skCI7MW9ZFcFji6s08u3bKe05EY7Bni99cDzVqYerfb2vtW12S4jbEaPQ43nhrOr8JQL79A18BF32LRFAVJXiDdJMhgn7ID2eKnA67vgumdeD17mokZSkSDia6YcfqfyUOlBgKtFArC1CSTPUZNKWs93ExnulZMza8WhXKHdSRX2ESzZCkYy',
});

async function findMissing() {
  try {
    const assets = await client.fetch(`*[_type == "sanity.imageAsset" && (originalFilename == "All Skin Treatments.png" || originalFilename == "All Hair Treatments.png")]`);
    console.log('Assets found:', assets.length);
    assets.forEach((a: any) => console.log(a.originalFilename, a._id));
  } catch (err: any) {
    console.error('Error:', err.message);
  }
}

findMissing();
