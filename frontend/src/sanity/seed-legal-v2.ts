import { createClient } from '@sanity/client';
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'p8ddtj8e',
  dataset:   process.env.NEXT_PUBLIC_SANITY_DATASET   || 'production',
  useCdn:    false,
  token:     process.env.SANITY_API_TOKEN || process.env.NEXT_PUBLIC_SANITY_TOKEN,
  apiVersion: '2023-05-03'
});

const privacyContent = [
  { _key: 'p1', _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'At NeoFatbury Clinic, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard the data you provide to us through our website and during your clinical visits.' }] },
  { _key: 'p2', _type: 'block', style: 'h2', children: [{ _type: 'span', text: '1. Information We Collect' }] },
  { _key: 'p3', _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'We collect several types of information to provide you with high-quality clinical care: (a) Personal Identification Information: Name, email address, phone number, and age. (b) Clinical and Health Information: Details regarding your skin, hair, or weight concerns as shared through our lead forms. (c) Technical Data: IP address, browser type, and usage patterns collected via cookies.' }] },
  { _key: 'p4', _type: 'block', style: 'h2', children: [{ _type: 'span', text: '2. How We Use Your Information' }] },
  { _key: 'p5', _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Your information is used for specific purposes: To schedule and manage clinical appointments, to communicate about your treatment progress, to send personalized skin and hair care tips, and to improve our clinical service offerings. We do not sell your data to third-party marketing agencies.' }] },
  { _key: 'p6', _type: 'block', style: 'h2', children: [{ _type: 'span', text: '3. Data Security and Confidentiality' }] },
  { _key: 'p7', _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'We implement industry-standard security measures to ensure the confidentiality of your health records. Our internal clinical staff follows strict non-disclosure protocols, and all medical records are stored in encrypted environments compliant with health data standards.' }] },
  { _key: 'p8', _type: 'block', style: 'h2', children: [{ _type: 'span', text: '4. WhatsApp and SMS Communications' }] },
  { _key: 'p9', _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'By submitting your phone number, you consent to receive clinical updates and appointment reminders via WhatsApp and SMS. You can opt-out of these communications at any time by replying "STOP".' }] },
  { _key: 'p10', _type: 'block', style: 'h2', children: [{ _type: 'span', text: '5. Cookies and Analytics' }] },
  { _key: 'p11', _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Our website uses cookies to enhance user experience. These cookies allow us to track website performance and optimize the content you see. You may choose to disable cookies in your browser settings, though this may impact certain website functionalities.' }] }
];

const termsContent = [
  { _key: 't1', _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'These Terms and Conditions govern the use of clinical services provided by NeoFatbury Clinic. By booking a consultation or continuing to use this website, you agree to be bound by these terms.' }] },
  { _key: 't2', _type: 'block', style: 'h2', children: [{ _type: 'span', text: '1. Professional Clinical Advice' }] },
  { _key: 't3', _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'All clinical advice, treatment plans, and prescriptions provided at NeoFatbury Clinic are based on individual assessment by our certified dermatologists. These plans are subjective to current medical findings and may be updated based on your treatment response.' }] },
  { _key: 't4', _type: 'block', style: 'h2', children: [{ _type: 'span', text: '2. Appointment and Cancellation Policy' }] },
  { _key: 't5', _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Appointments must be booked in advance. If you need to reschedule or cancel, please notify the clinic at least 24 hours prior to the appointment. Failure to show up for a scheduled appointment without notice may result in a cancellation fee for future bookings.' }] },
  { _key: 't6', _type: 'block', style: 'h2', children: [{ _type: 'span', text: '3. Treatment Refunds and Payments' }] },
  { _key: 't7', _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Payments for clinical procedures and treatments are generally non-refundable once the procedure has been initiated. Package subscriptions for long-term treatments (e.g., Laser Hair Reduction packages) are subject to specific clinic policies regarding partial refunds or transfers.' }] },
  { _key: 't8', _type: 'block', style: 'h2', children: [{ _type: 'span', text: '4. Limitation of Liability' }] },
  { _key: 't9', _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'While NeoFatbury Clinic strives for excellence in all procedures, we are not liable for reactions caused by undisclosed pre-existing medical conditions or failure to follow post-treatment instructions provided by our medical team.' }] },
  { _key: 't10', _type: 'block', style: 'h2', children: [{ _type: 'span', text: '5. Changes to Terms' }] },
  { _key: 't11', _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'NeoFatbury Clinic reserves the right to modify these terms at any time. Changes will be updated on this page and come into effect immediately upon posting.' }] }
];

const disclaimerContent = [
  { _key: 'd1', _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'The medical and clinical information on the NeoFatbury Clinic website is provided as an information resource only and is not to be used or relied on for any diagnostic or treatment purposes.' }] },
  { _key: 'd2', _type: 'block', style: 'h2', children: [{ _type: 'span', text: 'Consultation is Mandatory' }] },
  { _key: 'd3', _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'This information does not create any patient-physician relationship and should not be used as a substitute for professional diagnosis and treatment. Please consult our dermatologist before making any healthcare decisions or for guidance about a specific medical condition.' }] },
  { _key: 'd4', _type: 'block', style: 'h2', children: [{ _type: 'span', text: 'Results May Differ' }] },
  { _key: 'd5', _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Transformational results (Skin brightening, Hair growth, Weight loss) are achieved through a combination of clinical procedures, medication, and lifestyle changes. Results vary significantly from person to person based on age, metabolism, and skin/hair type. No single result should be considered "typical" for all patients.' }] },
  { _key: 'd6', _type: 'block', style: 'h2', children: [{ _type: 'span', text: 'Procedural Risks' }] },
  { _key: 'd7', _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'As with any clinical or medical procedure, there are inherent risks involved. Our dermatologists will discuss all potential side effects and safety considerations during your initial physical consultation. Your safety is our primary priority.' }] },
  { _key: 'd8', _type: 'block', style: 'h2', children: [{ _type: 'span', text: 'No Warranties' }] },
  { _key: 'd9', _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'NeoFatbury Clinic makes no warranties, expressed or implied, as to the completeness or accuracy of any information provided on this website. Content is for educational purposes only.' }] }
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
  console.log("Detailed Legal content seeded.");
}

seedLegal();
