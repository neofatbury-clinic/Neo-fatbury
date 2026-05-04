
import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'p8ddtj8e', 
  dataset: 'production',
  useCdn: false,
  token: 'skCI7MW9ZFcFji6s08u3bKe05EY7Bni99cDzVqYerfb2vtW12S4jbEaPQ43nhrOr8JQL79A18BF32LRFAVJXiDdJMhgn7ID2eKnA67vgumdeD17mokZSkSDia6YcfqfyUOlBgKtFArC1CSTPUZNKWs93ExnulZMza8WhXKHdSRX2ESzZCkYy',
  apiVersion: '2023-05-03',
});

async function checkSettings() {
  const settings = await client.fetch(`*[_type == "siteSettings"][0]`);
  console.log('Site Settings:', JSON.stringify(settings, null, 2));
}

checkSettings();
