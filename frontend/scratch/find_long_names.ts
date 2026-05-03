import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'p8ddtj8e',
  dataset: 'production',
  apiVersion: '2023-05-03',
  useCdn: false,
  token: 'skCI7MW9ZFcFji6s08u3bKe05EY7Bni99cDzVqYerfb2vtW12S4jbEaPQ43nhrOr8JQL79A18BF32LRFAVJXiDdJMhgn7ID2eKnA67vgumdeD17mokZSkSDia6YcfqfyUOlBgKtFArC1CSTPUZNKWs93ExnulZMza8WhXKHdSRX2ESzZCkYy',
});

async function countAssets() {
  try {
    const count = await client.fetch(`count(*[_type == "sanity.imageAsset"])`);
    console.log('Total Assets:', count);
    
    // List longest filenames
    const longNames = await client.fetch(`*[_type == "sanity.imageAsset"] | order(string::length(originalFilename) desc) [0...20] {
      originalFilename,
      _id
    }`);
    console.log('--- LONGEST FILENAMES ---');
    longNames.forEach((a: any) => console.log(`${a.originalFilename}|${a._id}`));
  } catch (err: any) {
    console.error('Error:', err.message);
  }
}

countAssets();
