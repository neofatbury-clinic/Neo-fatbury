import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'p8ddtj8e',
  dataset: 'production',
  apiVersion: '2023-05-03',
  useCdn: false,
  token: 'skCI7MW9ZFcFji6s08u3bKe05EY7Bni99cDzVqYerfb2vtW12S4jbEaPQ43nhrOr8JQL79A18BF32LRFAVJXiDdJMhgn7ID2eKnA67vgumdeD17mokZSkSDia6YcfqfyUOlBgKtFArC1CSTPUZNKWs93ExnulZMza8WhXKHdSRX2ESzZCkYy',
});

async function finishDelete() {
  const assetId = 'image-ed73d60db5addc0564ce77b1fe3a1c206a5699ac-2752x1536-png';
  try {
    const referencingDocs = await client.fetch(`*[references($assetId)]{ _id, _type }`, { assetId });
    console.log(`Found ${referencingDocs.length} documents referencing remaining asset.`);

    for (const doc of referencingDocs) {
      await client.patch(doc._id).unset(['heroImage']).commit();
      console.log(`- Unset heroImage for ${doc._type} (${doc._id})`);
    }

    await client.delete(assetId);
    console.log(`✅ Deleted remaining asset: ${assetId}`);
  } catch (err: any) {
    console.error('Error:', err.message);
  }
}

finishDelete();
