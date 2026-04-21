import { createClient } from '@sanity/client';
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'p8ddtj8e',
  dataset:   process.env.NEXT_PUBLIC_SANITY_DATASET   || 'production',
  token:     process.env.SANITY_API_TOKEN,
  useCdn:    false,
  apiVersion: '2024-01-01',
});

import { createReadStream, existsSync } from 'fs';
import { join } from 'path';

const MAPPING: Record<string, string> = {
  'laser-hair-reduction': 'Laser Hair Reduction.png',
  'acne-treatment': 'Acne & Pimple Treatment.png',
  'skin-brightening': 'Skin Brightening.png',
  'hair-loss-treatment': 'Hair Loss Treatment.png',
  'hair-transplantation': 'Hair Transplantation.png',
  'anti-dandruff-treatment': 'Anti-Dandruff Treatment.png',
};

async function uploadImages() {
  console.log('🚀 Starting Hero Image Upload to Sanity...');
  
  for (const [slug, filename] of Object.entries(MAPPING)) {
    const filePath = join(process.cwd(), 'public', 'images', filename);
    
    // Check if the service exists
    const service = await client.fetch(`*[_type == "service" && slug.current == $slug][0]`, { slug });
    if (!service) {
      console.log(`❌ Service not found for slug: ${slug}`);
      continue;
    }

    if (!existsSync(filePath)) {
      console.log(`⚠️ Image file not found locally: ${filename} for ${slug}`);
      continue;
    }

    try {
      console.log(`⬆️ Uploading ${filename} to Sanity for ${slug}...`);
      const asset = await client.assets.upload('image', createReadStream(filePath), {
        filename,
      });

      console.log(`🔗 Linking image to ${slug}...`);
      await client.patch(service._id)
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
      
      console.log(`✅ Success for ${slug}`);
    } catch (err: any) {
      console.error(`❌ Failed for ${slug}:`, err.message);
    }
  }
}

uploadImages()
  .then(() => {
    console.log('🎉 Done uploading images.');
    process.exit(0);
  })
  .catch(console.error);
