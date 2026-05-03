import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'p8ddtj8e',
  dataset: 'production',
  apiVersion: '2023-05-03',
  useCdn: false,
  token: 'skCI7MW9ZFcFji6s08u3bKe05EY7Bni99cDzVqYerfb2vtW12S4jbEaPQ43nhrOr8JQL79A18BF32LRFAVJXiDdJMhgn7ID2eKnA67vgumdeD17mokZSkSDia6YcfqfyUOlBgKtFArC1CSTPUZNKWs93ExnulZMza8WhXKHdSRX2ESzZCkYy',
});

async function findVeryLongNames() {
  try {
    const assets = await client.fetch(`*[_type == "sanity.imageAsset" && originalFilename match "Copy of*"]{
      originalFilename,
      _id
    }`);
    
    console.log('--- ALL COPY OF ASSETS ---');
    assets.forEach((a: any) => {
      // Count "Copy of" occurrences
      const count = (a.originalFilename.match(/Copy of/g) || []).length;
      console.log(`${count}|${a.originalFilename}|${a._id}`);
    });
  } catch (err: any) {
    console.error('Error:', err.message);
  }
}

findVeryLongNames();
