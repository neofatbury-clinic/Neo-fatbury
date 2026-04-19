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

async function cleanAndSeed() {
  console.log('🧹 Clearing existing gallery items to remove duplicates...');
  await client.delete({ query: '*[_type == "gallery"]' });

  console.log('🚀 Seeding 12 UNIQUE premium Gallery items...');

  const items = [
    { title: 'Advanced Acne Scar Healing', cat: 'skin', desc: 'Medical-grade treatment for deep cystic acne acne scars.', img: 'neofatbury-acne-scar-ba.png', slug: 'acne-scar-treatment' },
    { title: 'Gold Standard Laser Hair Reduction', cat: 'hair', desc: 'Permanent hair reduction using USFDA clinical technology.', img: 'neofatbury-laser-ba.png', slug: 'laser-hair-reduction' },
    { title: 'Clinical Hair Density Therapy', cat: 'hair', desc: 'Advanced hair regrowth therapy for natural clinical results.', img: 'neofatbury-hair-standard.png', slug: 'hair-loss-treatment' },
    { title: 'CoolSculpting Body Contouring', cat: 'slimming', desc: 'Non-surgical cryolipolysis for targeted fat reduction.', img: 'neofatbury-body-ba.png', slug: 'coolsculpting' },
    { title: 'Skin Brightening & Glow', cat: 'skin', desc: 'Intensive vitamin therapy for radiant, even-toned complexion.', img: 'neofatbury-cheek-banner.webp', slug: 'skin-brightening' },
    { title: 'Scalp Deep Cleansing', cat: 'hair', desc: 'Clinical anti-dandruff and scalp health restoration.', img: 'neofatbury-dandruff-clinical.png', slug: 'anti-dandruff-treatment' },
    { title: 'Abdomimal Fat reduction', cat: 'slimming', desc: 'Clinical slimming protocol for targeted abdominal fat loss.', img: 'neofatbury-slimming-result.png', slug: 'weight-loss-treatment' },
    { title: 'Dermal Fillers Transformation', cat: 'skin', desc: 'Subtle, clinical facial contouring and volume restoration.', img: 'neofatbury-acne-scar-banner.png', slug: 'skin-brightening' },
    { title: 'High-Density Hair Transplant', cat: 'hair', desc: 'Precision FUE transplant for natural hairline density.', img: 'neofatbury-hair2-banner.webp', slug: 'hair-transplantation' },
    { title: 'Legs & Arms Hair Reduction', cat: 'hair', desc: 'Pain-free laser hair reduction for large body surface areas.', img: 'before-after-laser.webp', slug: 'laser-hair-reduction' },
    { title: 'Fractional Skin Resurfacing', cat: 'skin', desc: 'Smoothing deep scars and improving skin texture clinically.', img: 'acne-before-after.webp', slug: 'acne-scar-treatment' },
    { title: 'Full Body Weight Management', cat: 'slimming', desc: 'Intensive clinical program for sustainable healthy weight loss.', img: 'neofatbury-slimming-banner.webp', slug: 'weight-loss-treatment' }
  ];

  for (const item of items) {
    const filePath = join(process.cwd(), 'public', 'images', item.img);
    if (!existsSync(filePath)) continue;

    try {
      console.log(`⬆️ Uploading unique image: ${item.img}...`);
      const asset = await client.assets.upload('image', createReadStream(filePath), { filename: item.img });
      const service = await client.fetch(`*[_type == "service" && slug.current == $slug][0]`, { slug: item.slug });

      await client.create({
        _id: `gallery-${items.indexOf(item)}`, // Constant ID to avoid accidental double-runs
        _type: 'gallery',
        treatment: item.title,
        patientQuote: item.desc,
        combinedImage: { _type: 'image', asset: { _type: 'reference', _ref: asset._id } },
        afterImage: { _type: 'image', asset: { _type: 'reference', _ref: asset._id } }, // For CMS thumbnails
        relatedService: service ? { _type: 'reference', _ref: service._id } : undefined,
        isFeatured: true,
        order: items.indexOf(item) + 1
      });
      console.log(`✅ ${item.title} restored.`);
    } catch (err: any) {
      console.error(`❌ Error seeding ${item.title}: ${err.message}`);
    }
  }
}

cleanAndSeed()
  .then(() => process.exit(0))
  .catch(console.error);
