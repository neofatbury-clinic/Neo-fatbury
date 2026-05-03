import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'p8ddtj8e',
  dataset: 'production',
  apiVersion: '2023-05-03',
  useCdn: false,
  token: 'skCI7MW9ZFcFji6s08u3bKe05EY7Bni99cDzVqYerfb2vtW12S4jbEaPQ43nhrOr8JQL79A18BF32LRFAVJXiDdJMhgn7ID2eKnA67vgumdeD17mokZSkSDia6YcfqfyUOlBgKtFArC1CSTPUZNKWs93ExnulZMza8WhXKHdSRX2ESzZCkYy',
});

const MAPPING: Record<string, string> = {
  'laser-hair-reduction': 'Laser Hair Reduction.png',
  'acne-scar-treatment': 'Acne & Pimple Treatment.png',
  'skin-brightening': 'Skin Brightening.png',
  'hair-loss-treatment': 'Hair Loss Treatment.png',
  'hair-transplantation': 'Hair Transplantation.png',
  'anti-dandruff-treatment': 'Anti-Dandruff Treatment.png',
  'skin': 'All Skin Treatments.png',
  'hair': 'All Hair Treatments.png',
};

async function fixHeroImages() {
  console.log('🚀 Fixing Hero Image Links in Sanity...');

  // 1. Fetch all assets to get their IDs
  const assets = await client.fetch(`*[_type == "sanity.imageAsset"]{ _id, originalFilename }`);
  const assetMap: Record<string, string> = {};
  assets.forEach((a: any) => {
    if (a.originalFilename) {
      assetMap[a.originalFilename] = a._id;
    }
  });

  // 2. Update Services
  for (const [slug, filename] of Object.entries(MAPPING)) {
    const assetId = assetMap[filename];
    if (!assetId) {
      console.log(`⚠️ Asset not found in Sanity: ${filename}`);
      continue;
    }

    // Is it a category or a service?
    let doc = await client.fetch(`*[_type == "service" && slug.current == $slug][0]`, { slug });
    let type = 'service';
    
    if (!doc) {
      doc = await client.fetch(`*[_type == "category" && slug.current == $slug][0]`, { slug });
      type = 'category';
    }

    if (!doc) {
      console.log(`❌ Document not found for slug: ${slug}`);
      continue;
    }

    console.log(`🔗 Linking ${filename} to ${type}: ${slug}...`);
    await client.patch(doc._id)
      .set({
        heroImage: {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: assetId,
          },
        },
      })
      .commit();
    console.log(`✅ Fixed ${slug}`);
  }
}

fixHeroImages();
