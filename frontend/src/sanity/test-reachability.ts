import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'p8ddtj8e',
  dataset:   'production',
  useCdn:    true,
  apiVersion: '2024-01-01',
});

async function testFetch() {
  try {
    const results = await client.fetch(`*[_type == "service"][0...1]{ name }`);
    console.log('✅ Public Fetch Success:', results);
  } catch (err) {
    console.error('❌ Public Fetch Failed:', err);
  }
}

testFetch();
