import { createClient } from '@sanity/client';
import * as dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env.local') });

const client = createClient({
  projectId: 'p8ddtj8e',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2023-05-03',
  token: process.env.SANITY_API_TOKEN,
});

async function searchEverything() {
  try {
    const results = await client.fetch('*[title match "Acne Treatment" || name match "Acne Treatment" || heading match "Acne Treatment" || menuTitle match "Acne Treatment"] {_id, _type, title, name, slug}');
    console.log(JSON.stringify(results, null, 2));
  } catch (error) {
    console.error('Error searching:', error);
  }
}

searchEverything();
