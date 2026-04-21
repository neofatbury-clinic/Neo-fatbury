// src/sanity/global-audit.ts
import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'p8ddtj8e', 
  dataset: 'production',
  useCdn: false,
  token: 'skCI7MW9ZFcFji6s08u3bKe05EY7Bni99cDzVqYerfb2vtW12S4jbEaPQ43nhrOr8JQL79A18BF32LRFAVJXiDdJMhgn7ID2eKnA67vgumdeD17mokZSkSDia6YcfqfyUOlBgKtFArC1CSTPUZNKWs93ExnulZMza8WhXKHdSRX2ESzZCkYy',
  apiVersion: '2023-05-03',
});

async function audit() {
  const configs = await client.fetch('*[_type == "siteSettings"]');
  console.log('--- ALL SITE SETTINGS DOCUMENTS ---');
  configs.forEach((c: any) => {
    console.log(`ID: ${c._id}`);
    console.log(`Name: ${c.clinicName}`);
    console.log(`Locations Count: ${c.clinicLocations?.length || 0}`);
    console.log('-------------------------');
  });

  const blogs = await client.fetch('*[_type == "blogPost"]{ _id, title }');
  console.log('\n--- BLOG POSTS ---');
  console.log(JSON.stringify(blogs, null, 2));
}

audit();
