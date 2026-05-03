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

async function uploadSlimming() {
  const filename = 'neofatbury-slimming-hero.png';
  const slug = 'slimming';
  
  const filePath = path.join(process.cwd(), 'public', 'images', filename);
  if (!fs.existsSync(filePath)) {
    console.log(`❌ File not found: ${filename}`);
    return;
  }

  console.log(`⬆️ Uploading ${filename}...`);
  const asset = await client.assets.upload('image', fs.createReadStream(filePath), {
    filename: filename,
  });
  
  const doc = await client.fetch(`*[_type == "category" && slug.current == $slug][0]`, { slug });
  if (!doc) {
    console.log(`❌ Category not found: ${slug}`);
    return;
  }

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
  console.log(`✅ Fixed slimming category`);
}

uploadSlimming();
