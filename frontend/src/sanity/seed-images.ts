// src/sanity/seed-images.ts
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

async function uploadImage(filePath: string) {
  const absolutePath = path.resolve('public/images', filePath);
  if (!fs.existsSync(absolutePath)) {
    console.error(`File not found: ${absolutePath}`);
    return null;
  }
  const imageData = fs.readFileSync(absolutePath);
  return await client.assets.upload('image', imageData, { filename: filePath });
}

async function seed() {
  console.log('🖼️ Starting Image Master Sync to Sanity...');

  try {
    // 1. Upload Hero Image
    console.log('Uploading Hero Banner...');
    const heroAsset = await uploadImage('neofatbury-hero-banner.webp');
    if (heroAsset) {
      await client.patch('homepage').set({
        heroImage: { _type: 'image', asset: { _type: 'reference', _ref: heroAsset._id } }
      }).commit();
      console.log('✅ Homepage Hero Image Linked');
    }

    // 2. Upload Logo
    console.log('Uploading Logo...');
    const logoAsset = await uploadImage('neofatbury-logo-web.png');
    if (logoAsset) {
      await client.patch('siteSettings').set({
        logo: { _type: 'image', asset: { _type: 'reference', _ref: logoAsset._id } }
      }).commit();
      console.log('✅ Clinic Logo Linked');
    }

    // 3. Upload Service Images for key services
    const serviceMap: Record<string, string> = {
      'acne-treatment': 'neofatbury-cheek-banner.webp',
      'acne-scar-treatment': 'neofatbury-acne-scar-procedure.png',
      'laser-hair-reduction': 'laser-machine-banner.webp',
      'skin-brightening': 'derma-procedure-fixed.webp',
      'hair-fall-treatment': 'neofatbury-hair2-banner.webp',
    };

    for (const [slug, fileName] of Object.entries(serviceMap)) {
      console.log(`Uploading ${slug} image...`);
      const asset = await uploadImage(fileName);
      if (asset) {
        // Find the service by slug
        const service = await client.fetch(`*[_type == "service" && slug.current == $slug][0]`, { slug });
        if (service) {
          await client.patch(service._id).set({
            mainImage: { _type: 'image', asset: { _type: 'reference', _ref: asset._id } }
          }).commit();
          console.log(`✅ ${slug} Image Linked`);
        }
      }
    }

    console.log('\n✨ IMAGE SYNC COMPLETE! Every section now has its intended clinical photos.');
  } catch (err: any) {
    console.error('❌ Sync failed:', err.message);
  }
}

seed();
