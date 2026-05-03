import { createClient } from '@sanity/client';
import fs from 'fs';
import path from 'path';

const client = createClient({
  projectId: 'p8ddtj8e',
  dataset: 'production',
  apiVersion: '2023-05-03',
  useCdn: false,
  token: 'skCI7MW9ZFcFji6s08u3bKe05EY7Bni99cDzVqYerfb2vtW12S4jbEaPQ43nhrOr8JQL79A18BF32LRFAVJXiDdJMhgn7ID2eKnA67vgumdeD17mokZSkSDia6YcfqfyUOlBgKtFArC1CSTPUZNKWs93ExnulZMza8WhXKHdSRX2ESzZCkYy',
});

const MISSING = [
  { slug: 'skin', filename: 'All Skin Treatments.png' },
  { slug: 'hair', filename: 'All Hair Treatments.png' },
];

async function uploadMissing() {
  console.log('🚀 Uploading missing category images...');

  for (const item of MISSING) {
    const filePath = path.join(process.cwd(), 'public', 'images', item.filename);
    if (!fs.existsSync(filePath)) {
      console.log(`❌ File not found locally: ${item.filename}`);
      continue;
    }

    console.log(`⬆️ Uploading ${item.filename}...`);
    const asset = await client.assets.upload('image', fs.createReadStream(filePath), {
      filename: item.filename,
    });
    console.log(`✅ Uploaded. ID: ${asset._id}`);

    const doc = await client.fetch(`*[_type == "category" && slug.current == $slug][0]`, { slug: item.slug });
    if (!doc) {
      console.log(`❌ Category not found: ${item.slug}`);
      continue;
    }

    console.log(`🔗 Linking to category: ${item.slug}...`);
    await client.patch(doc._id)
      .set({
        heroImage: {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: asset._id,
          },
        },
      })
      .commit();
    console.log(`✅ Fixed ${item.slug}`);
  }
}

uploadMissing();
