import { createClient } from '@sanity/client';
import * as dotenv from 'dotenv';
import { v4 as uuidv4 } from 'uuid';

dotenv.config({ path: '.env.local' });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'p8ddtj8e',
  dataset:   process.env.NEXT_PUBLIC_SANITY_DATASET   || 'production',
  token:     process.env.SANITY_API_TOKEN,
  useCdn:    false,
  apiVersion: '2024-01-01',
});

async function patchAboutUs() {
  console.log('🚀 Patching the aboutPage singleton with new schema layout data...');

  const newDoc = {
    _id: 'aboutPage',
    _type: 'aboutPage',
    mainHeading: 'Welcome to NeoFatbury Clinic!',
    subHeading: 'Celebrating the science of transformation!',
    
    highlightText: "Hyderabad's No. 1 Dermatology, Skin & Hair Clinic",
    
    visionText: "To be the most trusted name in clinical dermatology and aesthetics across India, setting the gold standard for patient safety, technological innovation, and sustainable results.",
    missionText: "To provide safe, effective, and scientifically backed aesthetic solutions that enhance natural beauty and restore confidence—all delivered with uncompromising clinical excellence.",
    
    ctaTitle: 'Take the First Step Towards Confidence',
    ctaSubtitle: 'Book your free clinical scalp or skin analysis and experience the difference.',
    ctaButton: 'Book Appointment',
    
    stats: [
      { _key: uuidv4(), label: 'Happy Clients', value: '10,000+' },
      { _key: uuidv4(), label: 'Years Experience', value: '15+' },
      { _key: uuidv4(), label: 'Premium Clinics', value: '2' },
      { _key: uuidv4(), label: 'Safety Record', value: '100%' }
    ],
    
    aboutTextTop: [
      {
        _key: uuidv4(),
        _type: 'block',
        children: [{ _key: uuidv4(), _type: 'span', text: 'Established with a commitment to clinical excellence, NeoFatbury is the epitome of excellence in the realm of dermatological and slimming care, offering avant-garde medico-aesthetic treatments designed to meet the diverse needs of our esteemed clientele. With state-of-the-art clinics in Kukatpally and Himayatnagar, we proudly serve patients across Hyderabad.', marks: [] }]
      },
      {
        _key: uuidv4(),
        _type: 'block',
        children: [{ _key: uuidv4(), _type: 'span', text: 'Powered by a dedicated team of clinical dermatologists and cutting-edge USFDA-approved technologies, NeoFatbury is the premier destination for skin, hair, and body transformations. Our meticulously crafted bespoke treatments ensure absolute safety and efficacy, delivering unparalleled results and enduring client satisfaction. At NeoFatbury, we specialise in addressing an extensive array of concerns, ranging from acne and scars to hair loss, pigmentation, premature ageing, and weight management.', marks: [] }]
      }
    ],

    aboutTextBottom: [
      {
        _key: uuidv4(),
        _type: 'block',
        children: [{ _key: uuidv4(), _type: 'span', text: 'Powered by a leading team of medical professionals and the latest USFDA-approved technology, NeoFatbury offers customised and cost-effective treatments clinically proven for safety and efficacy. Our holistic approach helps us deliver optimal results and long-lasting satisfaction to our valuable clients! NeoFatbury specialises in treating your acne, scars, hair loss, hair thinning, premature ageing, wrinkles, saggy skin, cellulite, and stubborn fat.', marks: [] }]
      }
    ]
  };

  try {
    const result = await client.createOrReplace(newDoc);
    console.log(`✅ Successfully updated aboutUs page! Document ID: ${result._id}`);
  } catch (err: any) {
    console.error(`❌ Failed: ${err.message}`);
  }
}

patchAboutUs()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
