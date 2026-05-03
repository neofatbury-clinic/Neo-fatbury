
import { createClient } from '@sanity/client';
import fs from 'fs';
import path from 'path';

const client = createClient({
  projectId: 'p8ddtj8e',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: 'skCI7MW9ZFcFji6s08u3bKe05EY7Bni99cDzVqYerfb2vtW12S4jbEaPQ43nhrOr8JQL79A18BF32LRFAVJXiDdJMhgn7ID2eKnA67vgumdeD17mokZSkSDia6YcfqfyUOlBgKtFArC1CSTPUZNKWs93ExnulZMza8WhXKHdSRX2ESzZCkYy',
  useCdn: false,
});

const HERO_RESTORE_MAPPING = [
  { slug: 'laser-hair-reduction', file: 'neofatbury-laser-hero.png' },
  { slug: 'acne-scar-treatment', file: 'neofatbury-acne-scar-banner.png' },
  { slug: 'scar-treatment', file: 'neofatbury-clinical-standard.png' },
  { slug: 'skin-brightening', file: 'neofatbury-brightening-hero.png' },
  { slug: 'acne-treatment', file: 'neofatbury-acne-hero.png' },
];

async function restoreHeroImages() {
  console.log('Restoring Original Clinical Hero Images...');
  for (const item of HERO_RESTORE_MAPPING) {
    const service = await client.fetch(`*[_type == "service" && slug.current == $slug][0]`, { slug: item.slug });
    if (service) {
      const filePath = path.join(process.cwd(), 'public/images', item.file);
      if (fs.existsSync(filePath)) {
        console.log(`Uploading ${item.file} for ${item.slug}...`);
        const asset = await client.assets.upload('image', fs.createReadStream(filePath));
        await client.patch(service._id).set({ 
          heroImage: { _type: 'image', asset: { _id: asset._id, _type: 'reference' } } 
        }).commit();
        console.log(`✅ Restored hero image for ${item.slug}`);
      }
    }
  }
}

restoreHeroImages().catch(console.error);
