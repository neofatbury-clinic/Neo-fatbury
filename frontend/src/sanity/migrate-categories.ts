import { createClient } from '@sanity/client';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'p8ddtj8e',
  dataset:   process.env.NEXT_PUBLIC_SANITY_DATASET   || 'production',
  token:     process.env.SANITY_API_TOKEN,
  useCdn:    false,
  apiVersion: '2024-01-01',
});

async function migrate() {
  console.log('📂 Migrating Category system to dynamic documents...');

  // 1. Create Category documents
  const categories = [
    { _id: 'cat-skin',     _type: 'category', title: 'Skin Treatments',     slug: { current: 'skin' },     icon: '✨', order: 1 },
    { _id: 'cat-hair',     _type: 'category', title: 'Hair Treatments',     slug: { current: 'hair' },     icon: '💇', order: 2 },
    { _id: 'cat-slimming', _type: 'category', title: 'Slimming & Body', slug: { current: 'slimming' }, icon: '⚖️', order: 3 },
  ];

  for (const cat of categories) {
    await client.createOrReplace(cat);
    console.log(`✅ Category created: ${cat.title}`);
  }

  // 2. Map existing services
  const services = await client.fetch('*[_type == "service"]');
  console.log(`🔍 Found ${services.length} services to migrate.`);

  for (const svc of services) {
    if (typeof svc.category === 'string') {
      const catId = svc.category === 'skin' ? 'cat-skin' : 
                    svc.category === 'hair' ? 'cat-hair' : 
                    svc.category === 'slimming' ? 'cat-slimming' : null;

      if (catId) {
        await client.patch(svc._id)
          .set({ category: { _type: 'reference', _ref: catId } })
          .commit();
        console.log(`🔗 Linked "${svc.name}" to ${svc.category}`);
      }
    }
  }

  // 3. Map gallery items too!
  const gallery = await client.fetch('*[_type == "gallery"]');
  // Gallery also has a relatedService reference, but some might have hardcoded category logic in frontend.
  // I should check gallery schema.
  
  console.log('🏁 Migration complete.');
}

migrate()
  .then(() => process.exit(0))
  .catch(console.error);
