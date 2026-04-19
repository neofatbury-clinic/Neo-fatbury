import { createClient } from '@sanity/client';
import * as dotenv from 'dotenv';
import { createReadStream, existsSync } from 'fs';
import { join } from 'path';
import { v4 as uuidv4 } from 'uuid';

dotenv.config({ path: '.env.local' });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'p8ddtj8e',
  dataset:   process.env.NEXT_PUBLIC_SANITY_DATASET   || 'production',
  token:     process.env.SANITY_API_TOKEN,
  useCdn:    false,
  apiVersion: '2024-01-01',
});

async function seedGallery() {
  console.log('🚀 Restoring Gallery Items (Before/After)...');

  const galleryData = [
    {
      treatment: 'Advanced Laser Hair Reduction',
      category: 'hair',
      description: 'Significant reduction in hair growth after 6 sessions of USFDA Soprano ICE technology.',
      combinedImage: 'neofatbury-laser-ba.png',
      slug: 'laser-hair-reduction'
    },
    {
      treatment: 'Clinical Acne Scar Healing',
      category: 'skin',
      description: 'Deep scar remodeling using medical-grade fractional resurfacing and intensive skin repair.',
      combinedImage: 'neofatbury-acne-scar-ba.png',
      slug: 'acne-scar-treatment'
    },
    {
      treatment: 'Non-Surgical Body Contouring',
      category: 'slimming',
      description: 'Visible inch loss and fat reduction achieved through targeted clinical slimming protocols.',
      combinedImage: 'neofatbury-body-ba.png',
      slug: 'weight-loss-treatment'
    }
  ];

  for (const item of galleryData) {
    const filePath = join(process.cwd(), 'public', 'images', item.combinedImage);
    
    if (!existsSync(filePath)) {
      console.log(`⚠️ Image not found: ${item.combinedImage}`);
      continue;
    }

    try {
      console.log(`⬆️ Uploading ${item.combinedImage}...`);
      const asset = await client.assets.upload('image', createReadStream(filePath), {
        filename: item.combinedImage,
      });

      // Find the service reference
      const service = await client.fetch(`*[_type == "service" && slug.current == $slug][0]`, { slug: item.slug });

      const doc = {
        _type: 'gallery',
        treatment: item.treatment,
        patientQuote: item.description,
        combinedImage: {
          _type: 'image',
          asset: { _type: 'reference', _ref: asset._id }
        },
        relatedService: service ? { _type: 'reference', _ref: service._id } : undefined,
        isFeatured: true,
        order: 1
      };

      await client.create(doc);
      console.log(`✅ Success for ${item.treatment}`);
    } catch (err: any) {
      console.error(`❌ Failed for ${item.treatment}: ${err.message}`);
    }
  }
}

seedGallery()
  .then(() => process.exit(0))
  .catch(console.error);
