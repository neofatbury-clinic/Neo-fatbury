import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'p8ddtj8e',
  apiVersion: '2023-05-03',
  useCdn: false,
  token: 'skCI7MW9ZFcLji6s08u3bKe05EY7Bni99cDzVqYerfb2vtW12S4jbEaPQ43nhrOr8JQL79A18BF32LRFAVJXiDdJMhgn7ID2eKnA67vgumdeD17mokZSkSDia6YcfqfyUOlBgKtFArC1CSTPUZNKWs93ExnulZMza8WhXKHdSRX2ESzZCkYy',
});

async function listDatasets() {
  try {
    const datasets = await client.request({ url: '/datasets' });
    console.log('Datasets:', JSON.stringify(datasets, null, 2));
  } catch (err: any) {
    console.error('Error:', err.message);
  }
}

listDatasets();
