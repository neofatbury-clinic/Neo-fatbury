import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'p8ddtj8e',
  dataset: 'production',
  apiVersion: '2023-05-03',
  useCdn: false,
});

async function checkDoc() {
  const d = await client.fetch('*[_type == "service" && slug.current == "acne-scar-treatment"][0]');
  console.log(JSON.stringify({
    whatIsImage: d.whatIsImage,
    baImage: d.baImage,
    heroImage: d.heroImage
  }, null, 2));
}

checkDoc();
