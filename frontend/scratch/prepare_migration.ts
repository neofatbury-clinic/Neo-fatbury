import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'p8ddtj8e',
  dataset: 'production',
  apiVersion: '2023-05-03',
  useCdn: false,
  token: 'skCI7MW9ZFcFji6s08u3bKe05EY7Bni99cDzVqYerfb2vtW12S4jbEaPQ43nhrOr8JQL79A18BF32LRFAVJXiDdJMhgn7ID2eKnA67vgumdeD17mokZSkSDia6YcfqfyUOlBgKtFArC1CSTPUZNKWs93ExnulZMza8WhXKHdSRX2ESzZCkYy',
});

async function prepareMigration() {
  try {
    // 1. Find assets to DELETE
    const deleteFilenames = [
      'Anti-Dandruff Treatment.png',
      'Hair Transplantation.png',
      'Hair Loss Treatment.png',
      'Skin Brightening.png',
      'Acne & Pimple Treatment.png',
      'All Skin Treatments.png',
      'All Hair Treatments.png'
    ];
    
    const toDelete = await client.fetch(`*[_type == "sanity.imageAsset" && originalFilename in $deleteFilenames]{
      originalFilename,
      _id
    }`, { deleteFilenames });
    
    console.log('--- ASSETS TO DELETE ---');
    toDelete.forEach((a: any) => console.log(`${a.originalFilename}: ${a._id}`));

    // 2. Find "Merged" assets to LINK (based on the pattern of "Copy of" or specific names)
    // I will fetch them by looking for the ones with "NEO" and "Copy" in the names
    const mergedAssets = await client.fetch(`*[_type == "sanity.imageAsset" && (originalFilename match "Copy of*" || originalFilename match "NEO*")]{
      originalFilename,
      _id
    }`);
    
    console.log('\n--- POTENTIAL MERGED ASSETS ---');
    mergedAssets.forEach((a: any) => console.log(`${a.originalFilename}: ${a._id}`));

  } catch (err: any) {
    console.error('Error:', err.message);
  }
}

prepareMigration();
