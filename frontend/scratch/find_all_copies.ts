import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'p8ddtj8e',
  dataset: 'production',
  apiVersion: '2023-05-03',
  useCdn: false,
  token: 'skCI7MW9ZFcFji6s08u3bKe05EY7Bni99cDzVqYerfb2vtW12S4jbEaPQ43nhrOr8JQL79A18BF32LRFAVJXiDdJMhgn7ID2eKnA67vgumdeD17mokZSkSDia6YcfqfyUOlBgKtFArC1CSTPUZNKWs93ExnulZMza8WhXKHdSRX2ESzZCkYy',
});

async function findAllCopyOf() {
  try {
    const assets = await client.fetch(`*[_type == "sanity.imageAsset"]{
      originalFilename,
      _id
    }`);
    
    console.log('--- ALL ASSETS ---');
    assets.forEach((a: any) => {
      if (a.originalFilename && (a.originalFilename.includes('Copy') || a.originalFilename.includes('NEO'))) {
        console.log(`${a.originalFilename}|${a._id}`);
      }
    });
  } catch (err: any) {
    console.error('Error:', err.message);
  }
}

findAllCopyOf();
