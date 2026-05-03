import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'p8ddtj8e',
  dataset: 'production',
  apiVersion: '2023-05-03',
  useCdn: false,
  token: 'skCI7MW9ZFcFji6s08u3bKe05EY7Bni99cDzVqYerfb2vtW12S4jbEaPQ43nhrOr8JQL79A18BF32LRFAVJXiDdJMhgn7ID2eKnA67vgumdeD17mokZSkSDia6YcfqfyUOlBgKtFArC1CSTPUZNKWs93ExnulZMza8WhXKHdSRX2ESzZCkYy',
});

async function fixHeroLinksByName() {
  // 1. Fetch all image assets with their filenames
  const assets = await client.fetch('*[_type == "sanity.imageAsset"]{ _id, originalFilename }');
  console.log(`Found ${assets.length} image assets.`);

  const nameMap: Record<string, string> = {};
  assets.forEach((a: any) => {
    if (a.originalFilename) {
      nameMap[a.originalFilename.toLowerCase().replace('.png', '').trim()] = a._id;
    }
  });

  // 2. Define the Mapping based on the exact names visible in Studio
  const MAPPING: Record<string, string[]> = {
    // Service Slugs -> Search Name in Studio
    'laser-hair-reduction': ['laser hair removal', 'laser hair reduction'],
    'acne-scar-treatment': ['acne treatment'],
    'skin-brightening': ['skin brightening'],
    'hair-loss-treatment': ['hair loss'],
    'hair-transplantation': ['hair transplant'],
    'anti-dandruff-treatment': ['anti dandruff'],
    'coolsculpting': ['cool sculpting'],
    'inch-loss': ['inch loss'],
    'weight-loss': ['weight loss'],
    'scar-treatment': ['scar treatment'],
    
    // Category Slugs
    'skin': ['all skin treatments'],
    'hair': ['all hair treatments'],
    'slimming': ['all slimming treatments'],
  };

  const homepageSearch = 'home page';

  // 3. Update Services
  for (const [slug, searchNames] of Object.entries(MAPPING)) {
    let assetId = '';
    for (const name of searchNames) {
      if (nameMap[name]) {
        assetId = nameMap[name];
        break;
      }
    }

    if (assetId) {
      // Try updating service first
      const services = await client.fetch('*[_type == "service" && slug.current == $slug]', { slug });
      for (const service of services) {
        await client.patch(service._id).set({
          heroImage: { _type: 'image', asset: { _type: 'reference', _ref: assetId } }
        }).commit();
        console.log(`✅ Updated Service: ${service.name} with ${assetId}`);
      }

      // Try updating category
      const categories = await client.fetch('*[_type == "category" && slug.current == $slug]', { slug });
      for (const cat of categories) {
        await client.patch(cat._id).set({
          heroImage: { _type: 'image', asset: { _type: 'reference', _ref: assetId } }
        }).commit();
        console.log(`✅ Updated Category: ${cat.name} with ${assetId}`);
      }
    } else {
      console.warn(`⚠️ No asset found for search: ${searchNames.join(', ')}`);
    }
  }

  // 4. Update Homepage
  const homeAssetId = nameMap[homepageSearch];
  if (homeAssetId) {
    const homes = await client.fetch('*[_type == "homepage"]');
    for (const home of homes) {
      await client.patch(home._id).set({
        heroImage: { _type: 'image', asset: { _type: 'reference', _ref: homeAssetId } }
      }).commit();
      console.log(`✅ Updated Homepage with ${homeAssetId}`);
    }
  }

  console.log('--- ALL HERO LINKS FIXED BY NAME ---');
}

fixHeroLinksByName();
