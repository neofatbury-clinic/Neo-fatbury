import { createClient } from '@sanity/client';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const client = createClient({
  projectId: 'p8ddtj8e',
  dataset:   'production',
  token:     'sktBJL7uoQlIUPcLVPdDhZBeAlkCt78I2EKxcR0RD6jEdB9POwODHSP2uVbli31BZoaFI68QR2EFDW55L7Y7bzXF1Of5gDn4U6yW5oWqGYayyhhcvn8h2DqWOAJNOBCwwKomyVPx0wvFBKFVkJwfDRnP2chyn5yIyU83RisxcAsy3eQPoiDD',
  useCdn:    false,
  apiVersion: '2024-01-01',
});

// Helper for references
const k = (items: any[]) => items.map((item, i) => ({ ...item, _key: `item_${i}` }));

async function restoreAcneScar() {
  const acneScar = {
    _id: 'service-acne-scar-treatment',
    _type: 'service',
    name: 'Acne Scar Treatment',
    slug: { _type: 'slug', current: 'acne-scar-treatment' },
    category: { _type: 'reference', _ref: 'cat-skin' },
    isFeatured: true, 
    order: 3,
    shortDescription: 'Advanced fractional laser & subcision for acne scars — visible smoothing in as few as 3 sessions.',
    heroHeadline:   'Smooth Skin.',
    heroAccentLine: 'Zero Acne Scars.',
    heroSubtext:    'Advanced clinical scar restoration using surgical-grade technology.',
    heroCtaText:    'Book Free Consultation',
    heroTrustBadges: k([
      { icon: '💎', label: 'PRECISION TECH' },
      { icon: '🛡️', label: 'FDA APPROVED' },
    ]),
    problemHeading:    'Are Acne Scars Affecting',
    problemAccentText: 'Your Confidence?',
    problemCards: k([
      { icon: '🌋', title: 'Pitted Scars',        desc: 'Deep indentations (Ice-pick, Boxcar, Rolling) that affect skin texture.' },
      { icon: '🌊', title: 'Uneven Texture',       desc: 'Rough skin surface that makes makeup application difficult.' },
      { icon: '🌑', title: 'Hyperpigmentation',    desc: 'Stubborn dark or red marks left behind after acne.' },
      { icon: '⛰️', title: 'Raised Scars',         desc: 'Keloids or hypertrophic scars that cause visible bumps.' },
    ]),
    problemBottomText:   'Scars are not permanent —',
    problemBottomAccent: "we help restore your skin's natural smoothness.",
    whatIsLabel:       'Scientific Restoration',
    whatIsHeading:     'What is',
    whatIsAccentWord:  'Acne Scar Treatment?',
    whatIsBody:        'Acne scar treatment involves specialized clinical procedures aimed at reducing the visibility of scars, remodeling collagen, and restoring a smooth, healthy skin texture.',
    whatIsListHeading: 'Precision techniques include:',
    whatIsPoints: k([
      { icon: '⚡',  text: 'Laser Resurfacing' },
      { icon: '🧴',  text: 'Chemical Peels' },
      { icon: '💉',  text: 'Microneedling / MNRF' },
      { icon: '💧',  text: 'Dermal Fillers' },
    ]),
    whatIsImageBadge: 'NEOFATBURY SURGICAL STANDARD',
    baHeading:    'Real Results.',
    baAccentWord: 'Visible Improvement.',
    baSubtext:    'See natural-looking skin refining results from our elite clients.',
    baCtaText:    'Start Your Skin Refining Journey Today',
    baCtaBtnText: 'Start Your Journey',
    benefitsHeading:    'Benefits of',
    benefitsAccentWord: 'Scar Treatment',
    benefitItems: k([
      { icon: '🧼', text: 'Even texture' },
      { icon: '🎯', text: 'Reduced marks' },
      { icon: '✨', text: 'Natural radiance' },
      { icon: '🛡️', text: 'Healthy skin' },
      { icon: '🌟', text: 'Confidence' },
    ]),
    techHeading:    'Advanced',
    techAccentWord: 'Scar Technology',
    techBody:       "We use the latest FDA-approved technology and precision equipment to ensure safe and effective scar restoration for all skin types.",
    techFeatures: k([
      { icon: '💎',   text: 'Precision lasers' },
      { icon: '🧼',   text: 'Sterile environment' },
      { icon: '👨‍⚕️', text: 'Expert doctors' },
    ]),
    trustHeading:    'Why Choose',
    trustAccentWord: 'Neo Clinic?',
    trustItems: k([
      { icon: '👨‍⚕️', text: 'Expert doctors' },
      { icon: '🔬',   text: 'Advanced tech' },
      { icon: '🏆',   text: 'Proven results' },
      { icon: '🛡️',  text: 'Safe care' },
    ]),
    finalCtaHeading:     'Ready for Smooth Skin?',
    finalCtaSubtext:     'Schedule your skin analysis and start your scar restoration journey today.',
    finalCtaPrimaryBtn:  'Book Appointment',
    finalCtaSecondaryBtn: 'Get Free Consultation',
    seo: { _type: 'object', metaTitle: 'Acne Scar Treatment in Hyderabad | NeoFatbury Clinical', metaDescription: 'Reduce acne scars with fractional CO2 laser at NeoFatbury Hyderabad. Visible results in 3 sessions. Book free consultation.' },
  };

  console.log('🩹 Restoring Acne Scar Treatment...');
  await client.createOrReplace(acneScar);
  console.log('✅ Successfully restored Acne Scar Treatment!');
}

restoreAcneScar().catch(console.error);
