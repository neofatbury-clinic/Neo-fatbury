
import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'p8ddtj8e',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: 'skCI7MW9ZFcFji6s08u3bKe05EY7Bni99cDzVqYerfb2vtW12S4jbEaPQ43nhrOr8JQL79A18BF32LRFAVJXiDdJMhgn7ID2eKnA67vgumdeD17mokZSkSDia6YcfqfyUOlBgKtFArC1CSTPUZNKWs93ExnulZMza8WhXKHdSRX2ESzZCkYy',
  useCdn: false,
});

async function checkSettings() {
  const settings = await client.fetch(`*[_type == "siteSettings"][0]`);
  const result = {};
  Object.keys(settings).forEach(key => {
    if (key.toLowerCase().includes('whatsapp') || key.toLowerCase().includes('contact') || key.toLowerCase().includes('social')) {
      result[key] = settings[key];
    }
  });
  console.log(JSON.stringify(result, null, 2));
}

checkSettings().catch(console.error);
