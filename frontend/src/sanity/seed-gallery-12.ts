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

async function seedGallery12() {
  console.log('🚀 Seeding 12 premium Gallery items...');

  const items = [
    { title: 'Full Face Acne Transformation', cat: 'skin', desc: 'Medical-grade treatment for severe cystic acne acne scarring.', img: 'neofatbury-acne-scar-ba.png', slug: 'acne-treatment' },
    { title: 'Full Body Laser Hair Reduction', cat: 'hair', desc: 'Permanent hair reduction using US-FDA Gold Standard technology.', img: 'neofatbury-laser-ba.png', slug: 'laser-hair-reduction' },
    { title: 'Advanced Scalp Restoration', cat: 'hair', desc: 'Clinical hair regrowth therapy for high-density results.', img: 'neofatbury-hair-standard.png', slug: 'hair-loss-treatment' },
    { title: 'CoolSculpting Fat Freezing', cat: 'slimming', desc: 'Non-surgical fat reduction for visible body contouring.', img: 'neofatbury-body-ba.png', slug: 'coolsculpting' },
    { title: 'Clinical Skin Brightening', cat: 'skin', desc: 'Glutathione and vitamin-rich therapy for radiant complexion.', img: 'neofatbury-cheek-banner.webp', slug: 'skin-brightening' },
    { title: 'Dandruff Control Therapy', cat: 'hair', desc: 'Specialized clinical scalp deep-cleansing for clear hair health.', img: 'neofatbury-dandruff-clinical.png', slug: 'anti-dandruff-treatment' },
    { title: 'Targeted Inch Loss', cat: 'slimming', desc: 'Localized fat reduction for arms, thighs, and abdomen.', img: 'neofatbury-slimming-result.png', slug: 'inch-loss' },
    { title: 'Fine Line & Wrinkle Fillers', cat: 'skin', desc: 'Expertly administered dermal fillers for a youthful clinical look.', img: 'neofatbury-acne-scar-banner.png', slug: 'skin-brightening' },
    { title: 'Surgical Precision Transplantation', cat: 'hair', desc: 'High-density FUE hair transplant for natural hairline restoration.', img: 'neofatbury-hair2-banner.webp', slug: 'hair-transplantation' },
    { title: 'Legs Laser Hair Reduction', cat: 'hair', desc: 'Painless laser technology designed for large body areas.', img: 'before-after-laser.webp', slug: 'laser-hair-reduction' },
    { title: 'Acne Scar Subcision', cat: 'skin', desc: 'Professional skin resurfacing to smooth deep acne indentations.', img: 'acne-before-after.webp', slug: 'acne-scar-treatment' },
    { title: 'Abdomen Slimming Protocol', cat: 'slimming', desc: 'Intensive clinical weight loss and fat reduction program.', img: 'neofatbury-slimming-banner.webp', slug: 'weight-loss-treatment' }
  ];

  // Optional: Clear existing "gallery" documents to ensure we have exactly 12 requested
  // await client.delete({query: '*[_type == "gallery"]'});

  for (const item of items) {
    const filePath = join(process.cwd(), 'public', 'images', item.img);
    if (!existsSync(filePath)) {
      console.log(`⚠️ Skip: ${item.img}`);
      continue;
    }

    try {
      console.log(`⬆️ Uploading ${item.img}...`);
      const asset = await client.assets.upload('image', createReadStream(filePath), { filename: item.img });
      
      const service = await client.fetch(`*[_type == "service" && slug.current == $slug][0]`, { slug: item.slug });

      await client.create({
        _type: 'gallery',
        treatment: item.title,
        patientQuote: item.desc,
        combinedImage: { _type: 'image', asset: { _type: 'reference', _ref: asset._id } },
        relatedService: service ? { _type: 'reference', _ref: service._id } : undefined,
        isFeatured: true,
        order: items.indexOf(item) + 1
      });
      console.log(`✅ ${item.title}`);
    } catch (err: any) {
      console.error(`❌ Error seeding ${item.title}: ${err.message}`);
    }
  }
}

seedGallery12()
  .then(() => process.exit(0))
  .catch(console.error);
