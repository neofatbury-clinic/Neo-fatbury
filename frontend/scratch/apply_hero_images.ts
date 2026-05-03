import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'p8ddtj8e',
  dataset: 'production',
  apiVersion: '2023-05-03',
  useCdn: false,
  token: 'skCI7MW9ZFcFji6s08u3bKe05EY7Bni99cDzVqYerfb2vtW12S4jbEaPQ43nhrOr8JQL79A18BF32LRFAVJXiDdJMhgn7ID2eKnA67vgumdeD17mokZSkSDia6YcfqfyUOlBgKtFArC1CSTPUZNKWs93ExnulZMza8WhXKHdSRX2ESzZCkYy',
});

const MAPPING = {
  // Homepage
  'homepage': 'image-9d8754d349737f65de0bc95a94124dc510fa239b-1920x1080-png',
  
  // Categories (using slugs)
  'skin': 'image-c8e44a5114a65bdf232ae0a2e2b824f4631f8ee5-1920x1080-png',
  'hair': 'image-a2068426ee029acde81d5242596a8de2173be975-1920x1080-png',
  'slimming': 'image-699ae4e8efcbaa6c09006cfc2771919b4af0c365-1920x1080-png',

  // Services (using slugs)
  'acne-scar-treatment': 'image-f90cdbe4c2443566106f36541c0f209b889024f9-1920x1080-png',
  'skin-brightening': 'image-b46124f86f2071145a9d0b91ee6296152821a84f-1920x1080-png',
  'laser-hair-reduction': 'image-af23b2381b0668cf8afaf8525af9941161187f55-1920x1080-png',
  'coolsculpting': 'image-0c031ba02cede7e98c6d7076649ec0232339193a-1920x1080-png',
  'anti-dandruff-treatment': 'image-ff7fbe00e66623d4b8117cd8d95310a7014997b2-1920x1080-png',
  'inch-loss': 'image-2f49d747a3f00be1486a01284ee863aa7c1305a8-1920x1080-png',
  'weight-loss': 'image-1c3a20a40673109cf56ffc439898ebf0cd5b2582-1920x1080-png',
  'hair-transplantation': 'image-fe10a1dcef8396f48eabfacb18e38fe8fb2760e8-1920x1080-png',
  'hair-loss-treatment': 'image-aa02bf15370c60bf970e4a6187f0e7c0ebd181a4-1920x1080-png',
  'scar-treatment': 'image-07e6fa62d5deedcc8971b1f30bf3a93302e5bd0b-1920x1080-png'
};

async function applyHeroImages() {
  try {
    console.log('--- APPLYING HERO IMAGES ---');

    // 1. Update Homepage
    await client.patch('homepage')
      .set({
        heroImage: {
          _type: 'image',
          asset: { _type: 'reference', _ref: MAPPING['homepage'] }
        }
      })
      .commit();
    console.log('✓ Updated Homepage');

    // 2. Update Categories
    for (const [slug, assetId] of Object.entries(MAPPING)) {
      if (['skin', 'hair', 'slimming'].includes(slug)) {
        const cat = await client.fetch(`*[_type == "category" && slug.current == $slug][0]`, { slug });
        if (cat) {
          await client.patch(cat._id)
            .set({
              heroImage: {
                _type: 'image',
                asset: { _type: 'reference', _ref: assetId }
              }
            })
            .commit();
          console.log(`✓ Updated Category: ${slug}`);
        }
      }
    }

    // 3. Update Services
    for (const [slug, assetId] of Object.entries(MAPPING)) {
      if (!['homepage', 'skin', 'hair', 'slimming'].includes(slug)) {
        const service = await client.fetch(`*[_type == "service" && slug.current == $slug][0]`, { slug });
        if (service) {
          await client.patch(service._id)
            .set({
              heroImage: {
                _type: 'image',
                asset: { _type: 'reference', _ref: assetId }
              }
            })
            .commit();
          console.log(`✓ Updated Service: ${slug}`);
        } else {
          console.log(`! Service not found for slug: ${slug}`);
        }
      }
    }

    console.log('--- ALL HERO IMAGES APPLIED ---');
  } catch (err: any) {
    console.error('Error:', err.message);
  }
}

applyHeroImages();
