import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'p8ddtj8e',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2023-05-03',
  token: process.env.SANITY_API_TOKEN,
});

async function fixAndSeed() {
  // 1. Fix existing services with missing categories
  const toFix = [
    'service-laser-hair-reduction',
    'service-scar-treatment'
  ];

  for (const id of toFix) {
    console.log(`Fixing category for ${id}...`);
    await client
      .patch(id)
      .set({
        category: {
          _type: 'reference',
          _ref: 'cat-skin'
        }
      })
      .commit();
  }

  // 2. Seed missing Acne Treatment
  const acneTreatment = {
    _id: 'service-acne-treatment',
    _type: 'service',
    name: 'Acne Treatment',
    slug: { _type: 'slug', current: 'acne-treatment' },
    category: { _type: 'reference', _ref: 'cat-skin' },
    heroHeadline: 'Acne Treatment',
    heroAccentLine: 'Clear Skin Today',
    heroSubtext: 'Advanced clinical solutions for active acne.',
    order: 0
  };

  console.log('Seeding Acne Treatment...');
  await client.createIfNotExists(acneTreatment);

  console.log('All fixed and seeded!');
}

fixAndSeed();
