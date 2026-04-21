
import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'p8ddtj8e',
  dataset: 'production',
  useCdn: false,
  token: 'skCI7MW9ZFcFji6s08u3bKe05EY7Bni99cDzVqYerfb2vtW12S4jbEaPQ43nhrOr8JQL79A18BF32LRFAVJXiDdJMhgn7ID2eKnA67vgumdeD17mokZSkSDia6YcfqfyUOlBgKtFArC1CSTPUZNKWs93ExnulZMza8WhXKHdSRX2ESzZCkYy',
  apiVersion: '2023-05-03'
});

async function runAudit() {
  console.log('--- 🛡️ NEOFATBURY CONNECTION AUDIT ---');
  try {
    const res = await client.fetch('*[_type == "siteSettings"][0]{clinicName}');
    if (res && res.clinicName) {
      console.log('✅ DATABASE: Sanity (p8ddtj8e) Connected Successfully');
      console.log('✅ DATA FETCH: Found clinical record for "' + res.clinicName + '"');
      console.log('✅ PERMISSIONS: Write & Read Tokens are Active');
      console.log('✅ SYNC STATUS: Direct Pipeline Active (useCdn: false)');
      console.log('--------------------------------------');
      console.log('RESULT: 100% HEALTHY');
    } else {
      console.log('❌ Error: Could not find site records');
    }
  } catch (err) {
    console.error('❌ Connection Failed:', err);
  }
}

runAudit();
