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

async function superSeed() {
  console.log('🚀 Starting Super-Seed Mission: Restoring Data & Images...');

  // 1. UPLOAD BASE ASSETS
  const upload = async (filename: string) => {
    const filePath = join(process.cwd(), 'public', 'images', filename);
    if (!existsSync(filePath)) return null;
    const asset = await client.assets.upload('image', createReadStream(filePath), { filename });
    return asset._id;
  };

  const resultsHeroId = await upload('neofatbury-hero-banner.webp');
  const contactHeroId = await upload('clinic-reception.webp');
  const baExampleId    = await upload('neofatbury-laser-ba.png');

  const patchPage = async (id: string, type: string, data: any) => {
    // Patch both published and draft
    for (const docId of [id, `drafts.${id}`]) {
      try {
        await client.patch(docId)
          .setIfMissing({ _type: type })
          .set(data)
          .commit();
        console.log(`✅ Patched ${docId}`);
      } catch (err) {
        // Ignore if draft doesn't exist
      }
    }
  };

  // 2. PATCH RESULTS PAGE
  if (resultsHeroId) {
    await patchPage('resultsPage', 'resultsPage', {
      heroImage: { _type: 'image', asset: { _type: 'reference', _ref: resultsHeroId } }
    });
  }

  // 3. PATCH CONTACT PAGE
  if (contactHeroId) {
    await patchPage('contactPage', 'contactPage', {
      heroImage: { _type: 'image', asset: { _type: 'reference', _ref: contactHeroId } }
    });
  }

  // 4. SEED HOMEPAGE SLIDER (to ensure it is not blank)
  if (baExampleId) {
    await patchPage('homepage', 'homepage', {
      resultsSlider: [
        {
          _key: uuidv4(),
          label: 'Laser Hair Reduction',
          image: { _type: 'image', asset: { _type: 'reference', _ref: baExampleId } },
          quote: 'Amazing clinical results!'
        }
      ]
    });
  }

  console.log('🎉 Super-Seed Complete. Data is restored.');
}

superSeed()
  .then(() => process.exit(0))
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
