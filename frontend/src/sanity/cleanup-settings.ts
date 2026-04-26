
import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'p8ddtj8e',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: 'skCI7MW9ZFcFji6s08u3bKe05EY7Bni99cDzVqYerfb2vtW12S4jbEaPQ43nhrOr8JQL79A18BF32LRFAVJXiDdJMhgn7ID2eKnA67vgumdeD17mokZSkSDia6YcfqfyUOlBgKtFArC1CSTPUZNKWs93ExnulZMza8WhXKHdSRX2ESzZCkYy',
  useCdn: false,
});

async function cleanupSchema() {
  const settings = await client.fetch(`*[_type == "siteSettings"][0]`);
  if (!settings) return;

  await client.patch(settings._id)
    .unset(['locations'])
    .commit();

  console.log('Obsolete "locations" field removed successfully!');
}

cleanupSchema().catch(console.error);
