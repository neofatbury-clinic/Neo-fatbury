import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'p8ddtj8e',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2023-05-03',
  token: process.env.SANITY_API_TOKEN,
});

async function audit() {
  const services = await client.fetch(`*[_type == "service"] {
    name,
    "slug": slug.current,
    "category": category->slug.current,
    "categoryId": category->_id,
    _id
  }`);
  const categories = await client.fetch(`*[_type == "category"] {
    name,
    "slug": slug.current,
    _id
  }`);
  console.log('--- SERVICES ---');
  console.log(JSON.stringify(services, null, 2));
  console.log('--- CATEGORIES ---');
  console.log(JSON.stringify(categories, null, 2));
}

audit();
