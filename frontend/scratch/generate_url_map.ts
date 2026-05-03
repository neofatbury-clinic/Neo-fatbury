import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'p8ddtj8e',
  dataset: 'production',
  apiVersion: '2023-05-03',
  useCdn: false,
});

async function generateUrlMap() {
  const assets = await client.fetch('*[_type == "sanity.imageAsset"]{ _id, originalFilename, url }');
  
  const map: Record<string, string> = {};
  assets.forEach((a: any) => {
    if (a.originalFilename) {
      map[a.originalFilename.toLowerCase().replace('.png', '').trim()] = a.url;
    }
  });

  console.log(JSON.stringify(map, null, 2));
}

generateUrlMap();
