const { createClient } = require('@sanity/client');

const client = createClient({
  projectId: 'p8ddtj8e',
  dataset: 'production',
  token: 'skCI7MW9ZFcFji6s08u3bKe05EY7Bni99cDzVqYerfb2vtW12S4jbEaPQ43nhrOr8JQL79A18BF32LRFAVJXiDdJMhgn7ID2eKnA67vgumdeD17mokZSkSDia6YcfqfyUOlBgKtFArC1CSTPUZNKWs93ExnulZMza8WhXKHdSRX2ESzZCkYy',
  useCdn: false,
  apiVersion: '2024-01-01',
});

client.fetch('*[_type == "service"]{ name, "catRef": category._ref, "catTitle": category->title }')
  .then(res => {
    console.log(JSON.stringify(res, null, 2));
  });
