const { createClient } = require('@sanity/client');

const client = createClient({
  projectId: 'p8ddtj8e',
  dataset: 'production',
  token: 'skCI7MW9ZFcFji6s08u3bKe05EY7Bni99cDzVqYerfb2vtW12S4jbEaPQ43nhrOr8JQL79A18BF32LRFAVJXiDdJMhgn7ID2eKnA67vgumdeD17mokZSkSDia6YcfqfyUOlBgKtFArC1CSTPUZNKWs93ExnulZMza8WhXKHdSRX2ESzZCkYy',
  useCdn: false,
  apiVersion: '2024-01-01',
});

async function fixLinks() {
  console.log('🛠️ Fixing missing category links...');

  const servicesToFix = [
    { name: "Laser Hair Reduction", catId: "cat-skin" },
    { name: "Scar Treatment", catId: "cat-skin" }
  ];

  for (const s of servicesToFix) {
    const docs = await client.fetch(`*[_type == "service" && name == "${s.name}"]`);
    if (docs.length > 0) {
      console.log(`🔗 Linking "${s.name}" to ${s.catId}...`);
      await client.patch(docs[0]._id).set({
        category: {
          _type: 'reference',
          _ref: s.catId
        }
      }).commit();
    }
  }

  console.log('✅ Links fixed!');
}

fixLinks();
