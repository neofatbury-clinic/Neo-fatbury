
import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'p8ddtj8e',
  dataset: 'production',
  useCdn: false,
  token: 'skCI7MW9ZFcFji6s08u3bKe05EY7Bni99cDzVqYerfb2vtW12S4jbEaPQ43nhrOr8JQL79A18BF32LRFAVJXiDdJMhgn7ID2eKnA67vgumdeD17mokZSkSDia6YcfqfyUOlBgKtFArC1CSTPUZNKWs93ExnulZMza8WhXKHdSRX2ESzZCkYy',
  apiVersion: '2023-05-03'
});

async function updateMaps() {
  const settings = await client.fetch('*[_type == "siteSettings"][0]');
  if (!settings || !settings.clinicLocations) {
    console.log("No locations found.");
    return;
  }

  const updatedLocations = settings.clinicLocations.map((loc: any) => {
    if (loc.name.toLowerCase().includes('himayatnagar')) {
      return { ...loc, mapsUrl: 'https://share.google/FFcx19nq8NyLJP9YJ' };
    }
    if (loc.name.toLowerCase().includes('kukatpally')) {
      return { ...loc, mapsUrl: 'https://share.google/Ee1WRgIrFAtqcNU05' };
    }
    return loc;
  });

  await client
    .patch('siteSettings')
    .set({ clinicLocations: updatedLocations })
    .commit();
  
  console.log("Maps seeded successfully.");
}

updateMaps();
