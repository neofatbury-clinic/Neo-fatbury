
import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'p8ddtj8e',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: 'skCI7MW9ZFcFji6s08u3bKe05EY7Bni99cDzVqYerfb2vtW12S4jbEaPQ43nhrOr8JQL79A18BF32LRFAVJXiDdJMhgn7ID2eKnA67vgumdeD17mokZSkSDia6YcfqfyUOlBgKtFArC1CSTPUZNKWs93ExnulZMza8WhXKHdSRX2ESzZCkYy',
  useCdn: false,
});

async function checkPhone() {
  const settings = await client.fetch(`*[_type == "siteSettings"][0]`);
  console.log('--- SANITY DATA CHECK ---');
  console.log('Global Phone (contact.phone):', settings?.contact?.phone);
  console.log('Branches Data:', settings?.clinicLocations?.map((l: any) => ({ name: l.name, phone: l.phone })));
  console.log('-------------------------');
}

checkPhone().catch(console.error);
