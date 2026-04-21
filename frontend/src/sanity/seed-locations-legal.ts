// src/sanity/seed-locations-legal.ts
import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'p8ddtj8e', 
  dataset: 'production',
  useCdn: false,
  token: 'skCI7MW9ZFcFji6s08u3bKe05EY7Bni99cDzVqYerfb2vtW12S4jbEaPQ43nhrOr8JQL79A18BF32LRFAVJXiDdJMhgn7ID2eKnA67vgumdeD17mokZSkSDia6YcfqfyUOlBgKtFArC1CSTPUZNKWs93ExnulZMza8WhXKHdSRX2ESzZCkYy',
  apiVersion: '2023-05-03',
});

async function seedSettings() {
  const settings = {
    _id: 'siteSettings',
    _type: 'siteSettings',
    clinicLocations: [
      {
        name: 'NeoFatbury Clinic - Himayatnagar',
        address: 'City plaza Building, 2nd floor, beside fast rack showroom. Himyathnagar circle, Hyderabad',
        phone: '9700641000',
        mapsUrl: 'https://maps.app.goo.gl/himayatnagar-placeholder',
        gbpUrl: 'https://g.page/neofatbury-himayatnagar'
      },
      {
        name: 'NeoFatbury Clinic - Kukatpally',
        address: 'Road No 1, KPHB Colony, Beside Main Road Exit, Hyderabad, Telangana.',
        phone: '9700641000',
        mapsUrl: 'https://maps.app.goo.gl/kukatpally-placeholder',
        gbpUrl: 'https://g.page/neofatbury-kukatpally'
      }
    ],
    // Basic Legal Placeholders
    privacyPolicy: [
      {
        _type: 'block',
        _key: 'block1',
        children: [{ _type: 'span', text: 'This Privacy Policy explains how NeoFatbury collects and uses your data...' }],
        markDefs: [],
        style: 'normal'
      }
    ],
    termsConditions: [
      {
        _type: 'block',
        _key: 'block1',
        children: [{ _type: 'span', text: 'By using this website, you agree to the following terms and conditions...' }],
        markDefs: [],
        style: 'normal'
      }
    ],
    medicalDisclaimerContent: [
      {
        _type: 'block',
        _key: 'block1',
        children: [{ _type: 'span', text: 'The information provided on this website is for educational purposes and not a substitute for professional medical advice...' }],
        markDefs: [],
        style: 'normal'
      }
    ]
  };

  try {
    await client.createOrReplace(settings);
    console.log('✅ Site Settings with Locations & Legal updated successfully!');
  } catch (err) {
    console.error('❌ Failed to update settings:', err);
  }
}

seedSettings();
