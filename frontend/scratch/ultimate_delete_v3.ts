import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'p8ddtj8e',
  dataset: 'production',
  apiVersion: '2023-05-03',
  useCdn: false,
  token: 'skCI7MW9ZFcFji6s08u3bKe05EY7Bni99cDzVqYerfb2vtW12S4jbEaPQ43nhrOr8JQL79A18BF32LRFAVJXiDdJMhgn7ID2eKnA67vgumdeD17mokZSkSDia6YcfqfyUOlBgKtFArC1CSTPUZNKWs93ExnulZMza8WhXKHdSRX2ESzZCkYy',
});

async function ultimateDeleteV3() {
  const filenames = [
    'slimming-hero.png',
    'hair-loss-hero.png',
    'hair-loss-treatment.png',
    'skin-brightening.png',
    'acne-scar-treatment.png',
    'Skin Brightening.png',
    'WhatsApp Image 2026-04-21 at 13.41.45.jpeg',
    'Anti-Dandruff Treatment.png',
    'Laser Hair Reduction.png',
    'Hair Transplantation.png',
    'Hair Loss Treatment.png',
    'Acne & Pimple Treatment.png',
    'All Skin Treatments.png',
    'All Hair Treatments.png',
    'neofatbury-acne-scar-procedure.png',
    'neofatbury-dandruff-clinical.png'
  ];

  try {
    // 1. Get IDs by exact name
    const assets = await client.fetch(`*[_type == "sanity.imageAsset" && (originalFilename in $filenames || originalFilename match "59fbca*")]{ _id, originalFilename }`, { filenames });
    
    if (assets.length === 0) {
      console.log('No assets found to delete.');
      return;
    }

    const assetIds = assets.map((a: any) => a._id);
    console.log(`Targeting ${assets.length} assets:`, assets.map(a => a.originalFilename).join(', '));

    // 2. Find ALL referencing documents
    const referencingDocs = await client.fetch(`*[references($assetIds)]`, { assetIds });
    console.log(`Found ${referencingDocs.length} documents referencing these assets.`);

    for (const doc of referencingDocs) {
      console.log(`Cleaning document: ${doc._type} (${doc._id})`);
      
      function cleanObject(obj: any): any {
        if (!obj || typeof obj !== 'object') return obj;
        if (Array.isArray(obj)) return obj.map(cleanObject).filter(i => i !== null);
        
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
      cleanedDoc._id = doc._id;
      cleanedDoc._type = doc._type;
      
      await client.createOrReplace(cleanedDoc);
      console.log(`- Cleaned and replaced ${doc._type} (${doc._id})`);
    }

    // 3. Delete the assets
    for (const assetId of assetIds) {
      try {
        await client.delete(assetId);
        console.log(`✅ Deleted asset: ${assetId} (${assets.find(a => a._id === assetId)?.originalFilename})`);
      } catch (err: any) {
        console.error(`❌ Failed to delete ${assetId}:`, err.message);
      }
    }

    console.log('--- DELETION COMPLETE ---');
  } catch (err: any) {
    console.error('Error:', err.message);
  }
}

ultimateDeleteV3();
