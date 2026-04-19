import { createClient } from '@sanity/client';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'p8ddtj8e',
  dataset:   process.env.NEXT_PUBLIC_SANITY_DATASET   || 'production',
  token:     process.env.SANITY_API_TOKEN,
  useCdn:    false,
  apiVersion: '2024-01-01',
});

async function seedForm() {
  console.log('🚀 Seeding initial Lead Form settings...');

  const settings = {
    _type: 'contactFormSettings',
    _id: 'contactFormSettings',
    formTitle: 'Book Your Free Consultation',
    formSubtitle: 'Get expert care tailored to your needs.',
    buttonText: 'Get Free Consultation',
    successMessage: 'Thank you! We have received your request.',
    placeholders: {
      name: 'Your Name',
      phone: 'Mobile Number'
    },
    clinics: [
      { _key: '1', id: 'kukatpally', label: 'Kukatpally Clinic', color: '#00acb1' },
      { _key: '2', id: 'himayatnagar', label: 'Himayatnagar Clinic', color: '#df8385' }
    ]
  };

  await client.createOrReplace(settings);
  console.log('✅ Success! Form settings are now in Sanity.');
}

seedForm()
  .then(() => process.exit(0))
  .catch(console.error);
