
import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'p8ddtj8e',
  dataset: 'production',
  useCdn: false,
  token: 'skCI7MW9ZFcFji6s08u3bKe05EY7Bni99cDzVqYerfb2vtW12S4jbEaPQ43nhrOr8JQL79A18BF32LRFAVJXiDdJMhgn7ID2eKnA67vgumdeD17mokZSkSDia6YcfqfyUOlBgKtFArC1CSTPUZNKWs93ExnulZMza8WhXKHdSRX2ESzZCkYy',
  apiVersion: '2023-05-03'
});

const privacyContent = [
  { _key: 'k1', _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'At NeoFatbury Clinic, we are committed to protecting your personal and medical information. This privacy policy explains how we collect and use your data.' }] },
  { _key: 'k2', _type: 'block', style: 'h3', children: [{ _type: 'span', text: '1. Information Collection' }] },
  { _key: 'k3', _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'We collect information you provide via our lead forms, such as your name, phone number, and clinical concerns. This data is used solely to provide personalized clinical consultations.' }] },
  { _key: 'k4', _type: 'block', style: 'h3', children: [{ _type: 'span', text: '2. Medical Confidentiality' }] },
  { _key: 'k5', _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Your clinical history and treatment details are strictly confidential and only accessible by our certified dermatologists and clinical staff.' }] }
];

const termsContent = [
  { _key: 'k1', _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'By using our website or booking a consultation, you agree to the following terms and conditions.' }] },
  { _key: 'k2', _type: 'block', style: 'h3', children: [{ _type: 'span', text: '1. Appointment Bookings' }] },
  { _key: 'k3', _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Appointments are subject to availability. Please arrive 15 minutes prior to your scheduled time. Cancellations should be made at least 24 hours in advance.' }] },
  { _key: 'k4', _type: 'block', style: 'h3', children: [{ _type: 'span', text: '2. Clinical Outcomes' }] },
  { _key: 'k5', _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'While our treatments are evidence-based, clinical outcomes vary between individuals. The clinic does not guarantee uniform results for all patients.' }] }
];

const disclaimerContent = [
  { _key: 'k1', _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'The information provided on this website is for educational and informational purposes only and is not intended as medical advice.' }] },
  { _key: 'k2', _type: 'block', style: 'h3', children: [{ _type: 'span', text: 'Clinical Supervision' }] },
  { _key: 'k3', _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'All medical procedures and treatments at NeoFatbury Clinic are performed by or under the direct supervision of qualified and certified dermatologists.' }] },
  { _key: 'k4', _type: 'block', style: 'h3', children: [{ _type: 'span', text: 'Results May Vary' }] },
  { _key: 'k5', _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Results of treatments (Skin, Hair, Slimming) depend on individual factor such as age, genetics, and adherence to post-care protocols. Consultation is mandatory before any treatment.' }] }
];

async function seedLegal() {
  await client
    .patch('siteSettings')
    .set({
      privacyPolicy: privacyContent,
      termsConditions: termsContent,
      medicalDisclaimerContent: disclaimerContent
    })
    .commit();
  console.log("Legal content seeded.");
}

seedLegal();
