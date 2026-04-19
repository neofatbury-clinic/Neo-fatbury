// src/sanity/seed-pages-master.ts
// Programmatically injects exact hardcoded fallback text into Sanity CMS for singletons.

import { createClient } from '@sanity/client';
import * as dotenv from 'dotenv';
import { v4 as uuidv4 } from 'uuid'; // for any required internal keys

dotenv.config({ path: '.env.local' });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'p8ddtj8e',
  dataset:   process.env.NEXT_PUBLIC_SANITY_DATASET   || 'production',
  token:     process.env.SANITY_API_TOKEN,
  useCdn:    false,
  apiVersion: '2024-01-01',
});

// Helper function to easily define portable text blocks
const textBlock = (text: string) => ({
  _key: uuidv4(),
  _type: 'block',
  style: 'normal',
  markDefs: [],
  children: [
    {
      _key: uuidv4(),
      _type: 'span',
      marks: [],
      text: text,
    },
  ],
});


const PAGE_DATA = [
  // ─────────────────────────────────────────────────────────────
  // HOMEPAGE
  // ─────────────────────────────────────────────────────────────
  {
    _id: 'homepage',
    _type: 'homepage',
    heroHeadline: 'Expert Skin, Hair & Slimming',
    heroAccentLine: 'Clinic in Hyderabad',
    heroSubtext: 'Transform your confidence with US-FDA approved treatments and expert clinical care.',
    heroCtaText: 'Book Free Consultation',
    heroStats: [
      { _key: uuidv4(), number: '10+', label: 'Years Expert' },
      { _key: uuidv4(), number: 'US-FDA', label: 'Tech' },
      { _key: uuidv4(), number: '15k+', label: 'Success' }
    ],
    treatmentsSectionTitle: 'Our Premier Treatments',
    treatmentsSectionSubtitle: 'Discover world-class dermatology and aesthetic care tailored to your goals.',
    whyUsTitle: 'Why Choose NeoFatbury Clinic?',
    whyUsPoints: [
      { _key: uuidv4(), icon: '👩‍⚕️', title: 'Dermatologist-Led', description: 'Every treatment is supervised by qualified medical professionals.' },
      { _key: uuidv4(), icon: '🛡️', title: 'Safety First', description: 'We exclusively use ISO-certified processes and internationally recognized equipment.' },
      { _key: uuidv4(), icon: '💳', title: 'No Hidden Costs', description: 'Transparent pricing with detailed pre-treatment counseling.' },
      { _key: uuidv4(), icon: '📍', title: 'Convenient Locations', description: 'Premium clinics located in the heart of Kukatpally and Himayatnagar.' },
    ],
    resultsSectionTitle: 'Before & After Results',
    doctorsSectionTitle: 'Meet Our Experts'
  },
  // ─────────────────────────────────────────────────────────────
  // ABOUT US
  // ─────────────────────────────────────────────────────────────
  {
    _id: 'aboutPage',
    _type: 'aboutPage',
    title: 'Clinical Excellence in Skin, Hair & Slimming',
    storyTitle: 'About NeoFatbury Clinical Skin & Hair',
    storyText: [
      textBlock('At NeoFatbury, we believe that true beauty is rooted in health and confidence. Our state-of-the-art clinical facility was established with a singular mission: to provide world-class, medically sound aesthetic treatments that deliver undeniable results.'),
      textBlock('With facilities in Kukatpally and Himayatnagar, we combine US-FDA approved technology with the clinical expertise of our renowned dermatologists. From advanced laser therapeutics and hair restoration to non-surgical body contouring, every procedure is tailored specifically to individual genetic and physiological profiles.')
    ],
    stats: [
      { _key: uuidv4(), label: 'Patients Served', value: '10k+' },
      { _key: uuidv4(), label: 'Years Experience', value: '15+' },
      { _key: uuidv4(), label: 'Expert Doctors', value: '5+' },
      { _key: uuidv4(), label: 'Awards Won', value: '12' }
    ],
    pillars: [
      { _key: uuidv4(), title: 'Our Mission', description: 'To provide safe, effective, and scientifically backed aesthetic solutions that enhance natural beauty and restore confidence—all delivered with uncompromising clinical excellence.' },
      { _key: uuidv4(), title: 'Our Vision', description: 'To be the most trusted name in clinical dermatology and aesthetics across India, setting the gold standard for patient safety, technological innovation, and sustainable results.' },
      { _key: uuidv4(), title: 'Core Promise', description: 'Safe clinical procedures, transparent pricing, zero hidden costs, and realistic outcome expectations set during detailed clinical counseling.' }
    ],
    ctaTitle: 'Start Your Journey Today',
    ctaSubtitle: 'Book your free clinical scalp or skin analysis and experience the difference.',
    ctaButton: 'Book Complimentary Analysis'
  },
  // ─────────────────────────────────────────────────────────────
  // CONTACT US
  // ─────────────────────────────────────────────────────────────
  {
    _id: 'contactPage',
    _type: 'contactPage',
    title: 'Contact NeoFatbury Clinic',
    subtitle: 'Book a free consultation, ask us a question, or simply find out which treatment is right for you. Our team responds within hours.',
    leadFormTitle: 'Drop us a Message',
    leadFormDescription: 'Our clinical experts will get back to you within 24 hours.'
  },
  // ─────────────────────────────────────────────────────────────
  // RESULTS GALLERY
  // ─────────────────────────────────────────────────────────────
  {
    _id: 'resultsPage',
    _type: 'resultsPage',
    title: 'Our Clinical Transformations',
    subtitle: 'Real patients. Real clinical outcomes. Your journey starts here.'
  }
];


async function seedPages() {
  console.log('🚀 Starting Seeding for Singletons (Home, About, Contact, Results)...');
  
  for (const doc of PAGE_DATA) {
    try {
      const existing = await client.fetch(`*[_id == "${doc._id}"][0]`);
      
      // Merge rather than overwrite entirely to not lose images if already uploaded 
      if (existing) {
        console.log(`📝 Updating ${doc._id}...`);
        await client.patch(existing._id).set(doc).commit();
      } else {
        console.log(`✨ Creating new ${doc._id}...`);
        await client.create(doc as object & { _type: string });
      }
      console.log(`✅ Success for ${doc._id}`);
    } catch (err: any) {
      console.error(`❌ Failed for ${doc._id}: ${err.message}`);
    }
  }
}

seedPages()
  .then(() => {
    console.log('🎉 Done seeding singletons.');
    process.exit(0);
  })
  .catch((err) => {
    console.error('Fatal execution error:', err);
    process.exit(1);
  });
