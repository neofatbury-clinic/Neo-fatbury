const { createClient } = require('@sanity/client');

const client = createClient({
  projectId: 'p8ddtj8e',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true
});

async function check() {
  const settings = await client.fetch(`*[_type == "siteSettings"][0]`);
  if (!settings) {
    console.log("No siteSettings found!");
    return;
  }
  console.log("Terms Content:", JSON.stringify(settings.termsConditions, null, 2));
}

check();
