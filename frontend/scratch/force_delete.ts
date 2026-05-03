import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'p8ddtj8e',
  dataset: 'production',
  apiVersion: '2023-05-03',
  useCdn: false,
  token: 'skCI7MW9ZFcFji6s08u3bKe05EY7Bni99cDzVqYerfb2vtW12S4jbEaPQ43nhrOr8JQL79A18BF32LRFAVJXiDdJMhgn7ID2eKnA67vgumdeD17mokZSkSDia6YcfqfyUOlBgKtFArC1CSTPUZNKWs93ExnulZMza8WhXKHdSRX2ESzZCkYy',
});

async function forceDelete() {
  const filenames = [
    'Anti-Dandruff Treatment.png',
    'Hair Transplantation.png',
    'Hair Loss Treatment.png',
    'Skin Brightening.png',
    'Acne & Pimple Treatment.png',
    'All Skin Treatments.png',
    'All Hair Treatments.png'
  ];

  try {
    // 1. Get IDs
    const assets = await client.fetch(`*[_type == "sanity.imageAsset" && originalFilename in $filenames]{ _id, originalFilename }`, { filenames });
    if (assets.length === 0) {
      console.log('No assets found to delete.');
      return;
    }

    const assetIds = assets.map((a: any) => a._id);
    console.log(`Found ${assets.length} assets to delete.`);

    // 2. Remove references from ALL documents
    // We search for any document that references these asset IDs
    const referencingDocs = await client.fetch(`*[references($assetIds)]{ _id, _type }`, { assetIds });
    console.log(`Found ${referencingDocs.length} documents referencing these assets. Unsetting...`);

    for (const doc of referencingDocs) {
      await client.patch(doc._id).unset(['heroImage']).commit();
      console.log(`- Unset heroImage for ${doc._type} (${doc._id})`);
    }

    // 3. Delete the assets
    for (const assetId of assetIds) {
      await client.delete(assetId);
      console.log(`✅ Deleted asset: ${assetId}`);
    }

    console.log('--- ALL REQUESTED ASSETS DELETED ---');
  } catch (err: any) {
    console.error('Error:', err.message);
  }
}

forceDelete();
