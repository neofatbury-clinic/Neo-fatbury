import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'p8ddtj8e',
  dataset: 'production',
  apiVersion: '2023-05-03',
  useCdn: false,
  token: 'skCI7MW9ZFcFji6s08u3bKe05EY7Bni99cDzVqYerfb2vtW12S4jbEaPQ43nhrOr8JQL79A18BF32LRFAVJXiDdJMhgn7ID2eKnA67vgumdeD17mokZSkSDia6YcfqfyUOlBgKtFArC1CSTPUZNKWs93ExnulZMza8WhXKHdSRX2ESzZCkYy',
});

async function ultimateDelete() {
  const filenames = [
    'Skin Brightening.png',
    'WhatsApp Image 2026-04-21 at 13.41.45.jpeg',
    'Anti-Dandruff Treatment.png',
    'Laser Hair Reduction.png',
    'Hair Transplantation.png',
    'Hair Loss Treatment.png',
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
    console.log(`Targeting ${assets.length} assets:`, assets.map(a => a.originalFilename).join(', '));

    // 2. Find ALL referencing documents and ALL fields
    const referencingDocs = await client.fetch(`*[references($assetIds)]`, { assetIds });
    console.log(`Found ${referencingDocs.length} documents referencing these assets.`);

    for (const doc of referencingDocs) {
      console.log(`Cleaning document: ${doc._type} (${doc._id})`);
      
      // Recursive function to remove asset references from an object
      function cleanObject(obj: any): any {
        if (!obj || typeof obj !== 'object') return obj;
        if (Array.isArray(obj)) return obj.map(cleanObject).filter(i => i !== null);
        
        // If it's a reference to one of our target assets, remove it
        if (obj._type === 'reference' && assetIds.includes(obj._ref)) return null;
        if (obj._type === 'image' && obj.asset && assetIds.includes(obj.asset._ref)) return null;

        const newObj: any = {};
        for (const [key, value] of Object.entries(obj)) {
          const cleaned = cleanObject(value);
          if (cleaned !== null) newObj[key] = cleaned;
        }
        return newObj;
      }

      const cleanedDoc = cleanObject(doc);
      // Ensure we keep _id and _type for the patch
      cleanedDoc._id = doc._id;
      cleanedDoc._type = doc._type;
      
      await client.createOrReplace(cleanedDoc);
      console.log(`- Cleaned and replaced ${doc._type} (${doc._id})`);
    }

    // 3. Delete the assets
    for (const assetId of assetIds) {
      try {
        await client.delete(assetId);
        console.log(`✅ Deleted asset: ${assetId}`);
      } catch (err: any) {
        console.error(`❌ Failed to delete ${assetId}:`, err.message);
      }
    }

  } catch (err: any) {
    console.error('Error:', err.message);
  }
}

ultimateDelete();
