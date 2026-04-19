import { createClient } from '@sanity/client';
import * as dotenv from 'dotenv';
import { v4 as uuidv4 } from 'uuid';

dotenv.config({ path: '.env.local' });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'p8ddtj8e',
  dataset:   process.env.NEXT_PUBLIC_SANITY_DATASET   || 'production',
  token:     process.env.SANITY_API_TOKEN,
  useCdn:    false,
  apiVersion: '2024-01-01',
});

async function populateReferences() {
  console.log('🚀 Populating missing array references...');
  
  // 1. Fetch all services
  const services = await client.fetch(`*[_type == "service"]{_id}`);
  
  if (!services || services.length === 0) {
    console.log('❌ No services found to reference!');
    return;
  }

  // Create reference objects
  const serviceRefs = services.map((s: any) => ({
    _key: uuidv4(),
    _type: 'reference',
    _ref: s._id,
  }));

  try {
    // We only want to highlight 4-6 services maybe, but let's just add all of them or the first 6
    console.log(`🔗 Updating homepage featuredTreatments with ${serviceRefs.length} services...`);
    await client.patch('homepage')
      .setIfMissing({ featuredTreatments: [] })
      .set({ featuredTreatments: serviceRefs })
      .commit();
      
    console.log(`✅ Success!`);
  } catch (err: any) {
    console.error(`❌ Failed: ${err.message}`);
  }
}

populateReferences()
  .then(() => process.exit(0))
  .catch(console.error);
