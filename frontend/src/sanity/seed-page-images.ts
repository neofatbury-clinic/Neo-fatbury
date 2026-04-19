import { createClient } from '@sanity/client';
import * as dotenv from 'dotenv';
import { createReadStream, existsSync } from 'fs';
import { join } from 'path';

dotenv.config({ path: '.env.local' });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'p8ddtj8e',
  dataset:   process.env.NEXT_PUBLIC_SANITY_DATASET   || 'production',
  token:     process.env.SANITY_API_TOKEN,
  useCdn:    false,
  apiVersion: '2024-01-01',
});

async function seedPageImages() {
  console.log('🚀 Seeding Hero Images for Contact and Results pages...');

  const pages = [
    {
      type: 'resultsPage',
      id: 'resultsPage',
      image: 'neofatbury-hero-banner.webp'
    },
    {
      type: 'contactPage',
      id: 'contactPage',
      image: 'clinic-reception.webp'
    }
  ];

  for (const page of pages) {
    const filePath = join(process.cwd(), 'public', 'images', page.image);
    
    if (!existsSync(filePath)) {
      console.log(`⚠️ Image file not found locally: ${page.image} for ${page.id}`);
      continue;
    }

    try {
      console.log(`⬆️ Uploading ${page.image} for ${page.id}...`);
      const asset = await client.assets.upload('image', createReadStream(filePath), {
        filename: page.image,
      });

      console.log(`🔗 Linking image to ${page.id}...`);
      await client.patch(page.id)
        .setIfMissing({ _type: page.type })
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
      
      console.log(`✅ Success for ${page.id}`);
    } catch (err: any) {
      console.error(`❌ Failed for ${page.id}:`, err.message);
    }
  }
}

seedPageImages()
  .then(() => {
    console.log('🎉 Done seeding page images.');
    process.exit(0);
  })
  .catch(console.error);
