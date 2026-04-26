
import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'p8ddtj8e',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: 'skCI7MW9ZFcFji6s08u3bKe05EY7Bni99cDzVqYerfb2vtW12S4jbEaPQ43nhrOr8JQL79A18BF32LRFAVJXiDdJMhgn7ID2eKnA67vgumdeD17mokZSkSDia6YcfqfyUOlBgKtFArC1CSTPUZNKWs93ExnulZMza8WhXKHdSRX2ESzZCkYy',
  useCdn: false,
});

async function clearPhones() {
  const settings = await client.fetch(`*[_type == "siteSettings"][0]`);
  if (!settings?.clinicLocations) {
    console.log('No clinic locations found');
    return;
  }

  const updated = settings.clinicLocations.map((l: any) => ({
    ...l,
    phone: "" // Clear specifically to trigger fallback
  }));

  await client.patch(settings._id)
    .set({ clinicLocations: updated })
    .commit();

  console.log('✅ SUCCESSFULLY CLEARED ALL BRANCH PHONES IN SANITY');
}

clearPhones().catch(console.error);
