// src/sanity/upload-slimming-images.ts
import { createClient } from '@sanity/client';
import * as dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';

dotenv.config({ path: '.env.local' });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'p8ddtj8e',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
  apiVersion: '2024-01-01',
});

const SLIMMING_IMAGES = [
  { slug: 'coolsculpting', filePath: 'home service/Slimming/CoolSculpting.png' },
  { slug: 'weight-loss', filePath: 'home service/Slimming/Weight Loss & Transformation.png' },
  { slug: 'inch-loss', filePath: 'home service/Slimming/Inch Loss & Body Contouring.png' }
];

async function uploadAndLink() {
  console.log('🚀 Starting Slimming Image Upload to Sanity CMS...');

  for (const img of SLIMMING_IMAGES) {
    const fullPath = path.resolve(process.cwd(), '..', img.filePath);
    console.log(`Checking: ${fullPath}`);

    if (!fs.existsSync(fullPath)) {
      console.error(`❌ File not found: ${fullPath}`);
      continue;
    }

    try {
      console.log(`📤 Uploading image for ${img.slug}...`);
      const asset = await client.assets.upload('image', fs.createReadStream(fullPath), {
        filename: path.basename(fullPath)
      });

      console.log(`✅ Asset created: ${asset._id}`);

      // Find the service document
      const query = `*[_type == "service" && slug.current == $slug][0]`;
      const service = await client.fetch(query, { slug: img.slug });

      if (service) {
        console.log(`🔗 Linking asset to service: ${service.name} (${service._id})`);
        await client.patch(service._id)
          .set({
            image: {
              _type: 'image',
              asset: {
                _type: 'reference',
                _ref: asset._id
              }
            }
          })
          .commit();
        console.log(`✨ SUCCESS: ${img.slug} updated in CMS!`);
      } else {
        console.warn(`⚠️ Service document not found for slug: ${img.slug}`);
      }
    } catch (err) {
      console.error(`❌ Error updating ${img.slug}:`, err);
    }
  }

  console.log('\n🏁 CMS Update Complete!');
}

uploadAndLink().catch(console.error);
