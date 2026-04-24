// src/sanity/seed-missing-skin.ts
import { createClient } from '@sanity/client';
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'p8ddtj8e',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
  apiVersion: '2024-01-01',
});

// Keyed array helper
function k<T extends object>(arr: T[]): (T & { _key: string })[] {
  return arr.map((item, i) => ({ ...item, _key: `k-${Math.random().toString(36).slice(2)}-${i}` }));
}

const MISSING_SERVICES = [
  {
    name: 'Chemical Peels & Hydra-Facials',
    slug: 'chemical-peels-hydra-facials',
    category: 'skin',
    isFeatured: true,
    order: 6,
    shortDescription: 'Advanced clinical resurfacing and deep hydration treatments for an instant glow and long-term skin health.',
    heroHeadline: 'Instant Glow.',
    heroAccentLine: 'Deep Hydration.',
    heroSubtext: 'Revitalize your complexion with our medical-grade Hydra-Facials and chemical peels. Personalized resurfacing for texture, tone, and total skin health.',
    heroCtaText: 'Book Free Consultation',
    heroTrustBadges: k([
      { icon: '💧', label: 'DEEP HYDRATION' },
      { icon: '✨', label: 'INSTANT RADIANCE' },
    ]),
    problemHeading: 'Dull, Congested &',
    problemAccentText: 'Tired Skin?',
    problemCards: k([
      { icon: '🌫️', title: 'Clogged Pores', desc: 'Congestion and blackheads that make skin look dull and uneven.' },
      { icon: '🌵', title: 'Dryness & Flaking', desc: 'Lack of hydration leading to a rough, lifeless texture.' },
      { icon: '🌑', title: 'Pigmentation', desc: 'Post-acne marks and sun spots that affect clarity.' },
      { icon: '⏳', title: 'Early Aging', desc: 'Fine lines and lost elasticity due to environmental stress.' },
    ]),
    problemBottomText: 'Transform your skin —',
    problemBottomAccent: 'with medical-grade resurfacing and hydration.',
    whatIsLabel: 'Clinical Rejuvenation',
    whatIsHeading: 'What are',
    whatIsAccentWord: 'Peels & Hydra-Facials?',
    whatIsBody: 'Chemical Peels use medical-grade acids to exfoliate dead cells, while Hydra-Facials combine deep cleansing, extraction, and antioxidant infusion for an immediate luminous finish.',
    whatIsListHeading: 'Our premium protocols:',
    whatIsPoints: k([
      { icon: '💧', text: 'Hydrating Vortex tech' },
      { icon: '🧴', text: 'Targeted Clinical Peels' },
      { icon: '💆', text: 'Lymphatic Drainage' },
      { icon: '✨', text: 'Antioxidant Infusion' },
    ]),
    whatIsImageBadge: 'NEOFATBURY GLOW STANDARD',
    benefitsHeading: 'Benefits of',
    benefitsAccentWord: 'Resurfacing',
    benefitItems: k([
      { icon: '✨', text: 'Instant glow' },
      { icon: '🧼', text: 'Deeply cleansed pores' },
      { icon: '💧', text: 'Intense hydration' },
      { icon: '🎯', text: 'Even skin tone' },
      { icon: '🌟', text: 'Smoother texture' },
    ]),
    techHeading: 'Advanced',
    techAccentWord: 'Vortex Technology',
    techBody: 'Our Hydra-Facial system uses patented Vortex-Fusion technology to deliver immediate results with zero irritation or downtime.',
    techFeatures: k([
      { icon: '💎', text: 'Patented Vortex-Fusion' },
      { icon: '🧴', text: 'Medical-grade serums' },
      { icon: '🛡️', text: 'Safe clinical environment' },
    ]),
    trustHeading: 'Why Choose',
    trustAccentWord: 'Neo Clinic?',
    trustItems: k([
      { icon: '👨‍⚕️', text: 'Expert doctors' },
      { icon: '🔬', text: 'Advanced tech' },
      { icon: '🏆', text: 'Proven results' },
      { icon: '🛡️', text: 'Safe care' },
    ]),
    finalCtaHeading: 'Ready for Radiant Skin?',
    finalCtaSubtext: 'Schedule your skin analysis and experience the Hydra-Facial glow today.',
    finalCtaPrimaryBtn: 'Book Appointment',
    finalCtaSecondaryBtn: 'Get Free Consultation',
    seo: { _type: 'object', metaTitle: 'Chemical Peels & Hydra-Facials in Hyderabad | NeoFatbury Clinic', metaDescription: 'Get a medical-grade Hydra-Facial and Chemical Peel at NeoFatbury Hyderabad. Instant glow and deep hydration. Book free consultation.' },
    adSchema: { _type: 'object', priceFrom: 3499, duration: '45-60 mins', aggregateRating: 4.8, reviewCount: 1240 },
  },
  {
    name: 'Anti-Aging & Rejuvenation',
    slug: 'anti-aging-rejuvenation',
    category: 'skin',
    isFeatured: true,
    order: 7,
    shortDescription: 'Advanced non-surgical anti-aging treatments including HIFU, Microneedling RF, and clinical serums to restore youth and elasticity.',
    heroHeadline: 'Timeless Beauty.',
    heroAccentLine: 'Clinical Youth.',
    heroSubtext: 'Reverse the signs of aging with our medical-grade rejuvenation protocols. Safe, effective solutions for wrinkles, sagging, and skin laxity.',
    heroCtaText: 'Book Free Consultation',
    heroTrustBadges: k([
      { icon: '🧬', label: 'COLLAGEN BOOST' },
      { icon: '🛡️', label: 'NON-SURGICAL' },
    ]),
    problemHeading: 'Signs of Aging',
    problemAccentText: 'Affecting You?',
    problemCards: k([
      { icon: '📉', title: 'Loose Skin', desc: 'Sagging around the jawline and neck due to lost collagen.' },
      { icon: '〰️', title: 'Fine Lines', desc: 'Visible wrinkles and crows feet that deepen over time.' },
      { icon: '🌑', title: 'Dullness', desc: 'Loss of natural radiance and slowing of cell turnover.' },
      { icon: '🌵', title: 'Texture Loss', desc: 'Skin that feels thin, paper-like, or lacks elasticity.' },
    ]),
    problemBottomText: 'Aging is natural —',
    problemBottomAccent: 'regaining your youth is a choice.',
    whatIsLabel: 'Scientific Restoration',
    whatIsHeading: 'What is',
    whatIsAccentWord: 'Anti-Aging Therapy?',
    whatIsBody: 'Anti-aging therapy combines advanced technologies like HIFU and MNRF to stimulate deep collagen production and tighten the skin from within.',
    whatIsListHeading: 'Advanced solutions include:',
    whatIsPoints: k([
      { icon: '📡', text: 'HIFU Face Lifting' },
      { icon: '💉', text: 'MNRF Skin Tightening' },
      { icon: '🧬', text: 'Exosome Therapy' },
      { icon: '✨', text: 'Bio-Remodeling' },
    ]),
    whatIsImageBadge: 'NEOFATBURY YOUTH STANDARD',
    benefitsHeading: 'Benefits of',
    benefitsAccentWord: 'Rejuvenation',
    benefitItems: k([
      { icon: '🆙', text: 'Visible face lift' },
      { icon: '🏗️', text: 'Collagen rebuilding' },
      { icon: '✨', text: 'Even skin tone' },
      { icon: '🛡️', text: 'Thicker skin' },
      { icon: '🌟', text: 'Youthful glow' },
    ]),
    techHeading: 'Advanced',
    techAccentWord: 'Collagen Restoration',
    techBody: 'We use US-FDA approved HIFU and RF technologies to target the foundational layers of the skin, triggering long-term structural improvement.',
    techFeatures: k([
      { icon: '💎', text: 'High-intensity Ultrasound' },
      { icon: '🧬', text: 'Radio-frequency precision' },
      { icon: '👨‍⚕️', text: 'Doctor-led protocols' },
    ]),
    trustHeading: 'Why Choose',
    trustAccentWord: 'Neo Clinic?',
    trustItems: k([
      { icon: '👨‍⚕️', text: 'Expert doctors' },
      { icon: '🔬', text: 'Advanced tech' },
      { icon: '🏆', text: 'Proven results' },
      { icon: '🛡️', text: 'Safe care' },
    ]),
    finalCtaHeading: 'Ready to Restore Your Youth?',
    finalCtaSubtext: 'Book your comprehensive anti-aging assessment and start your restoration today.',
    finalCtaPrimaryBtn: 'Book Appointment',
    finalCtaSecondaryBtn: 'Get Free Consultation',
    seo: { _type: 'object', metaTitle: 'Anti-Aging & Rejuvenation in Hyderabad | NeoFatbury Clinic', metaDescription: 'Reverse signs of aging non-surgically at NeoFatbury Hyderabad. HIFU, MNRF, and clinical serums for a youthful lift. Book free consultation.' },
    adSchema: { _type: 'object', priceFrom: 4999, duration: '60-90 mins', aggregateRating: 4.9, reviewCount: 840 },
  },
  {
    name: 'Scar Treatment',
    slug: 'scar-treatment',
    category: 'skin',
    isFeatured: true,
    order: 4,
    shortDescription: 'Advanced clinical revision of surgical, injury, and hypertrophic scars for a smoother, more even skin texture.',
    heroHeadline: 'Fade Scars.',
    heroAccentLine: 'Restore Texture.',
    heroSubtext: 'Our clinical scar revision protocols use advanced lasers and therapeutic injections to flatten and fade surgical or injury scars safely.',
    heroCtaText: 'Book Free Consultation',
    heroTrustBadges: k([
      { icon: '🛡️', label: 'PRECISION REVISION' },
      { icon: '✨', label: 'TEXTURE RESTORED' },
    ]),
    problemHeading: 'Visible Scars',
    problemAccentText: 'Won\'t Go Away?',
    problemCards: k([
      { icon: '⛰️', title: 'Raised Scars', desc: 'Hypertrophic or keloid scars that cause visible Bumps.' },
      { icon: '🌑', title: 'Dark Scars', desc: 'Post-injury pigmentation that stays on the skin.' },
      { icon: '🩹', title: 'Surgical Marks', desc: 'Visible lines from previous surgeries or accidents.' },
      { icon: '🌵', title: 'Rough Texture', desc: 'Uneven or hard skin tissue at the site of healing.' },
    ]),
    problemBottomText: 'Scars are treatable —',
    problemBottomAccent: 'we help restore your skin\'s natural consistency.',
    whatIsLabel: 'Scientific Revision',
    whatIsHeading: 'What is',
    whatIsAccentWord: 'Scar Treatment?',
    whatIsBody: 'Scar treatment uses fractional laser and targeted injections to break down excess scar tissue and stimulate healthy skin remodeling.',
    whatIsListHeading: 'Clinical methods include:',
    whatIsPoints: k([
      { icon: '⚡', text: 'Fractional Laser' },
      { icon: '💉', text: 'Therapeutic Injections' },
      { icon: '🧼', text: 'Clinical Resurfacing' },
      { icon: '🛡️', text: 'Scar Revision Surgery' },
    ]),
    whatIsImageBadge: 'NEOFATBURY SURGICAL STANDARD',
    benefitsHeading: 'Benefits of',
    benefitsAccentWord: 'Scar Revision',
    benefitItems: k([
      { icon: '🧼', text: 'Smoother texture' },
      { icon: '🎯', text: 'Reduced visibility' },
      { icon: '✨', text: 'Even skin tone' },
      { icon: '🛡️', text: 'Prevents growth' },
      { icon: '🌟', text: 'Confidence' },
    ]),
    techHeading: 'Advanced',
    techAccentWord: 'Revision Tech',
    techBody: 'We combine multiple clinical modalities to ensure the scar is treated at different depths for the best possible cosmetic outcome.',
    techFeatures: k([
      { icon: '💎', text: 'Deep fractional laser' },
      { icon: '💉', text: 'Precision injections' },
      { icon: '👨‍⚕️', text: 'Expert surgeons' },
    ]),
    trustHeading: 'Why Choose',
    trustAccentWord: 'Neo Clinic?',
    trustItems: k([
      { icon: '👨‍⚕️', text: 'Expert doctors' },
      { icon: '🔬', text: 'Advanced tech' },
      { icon: '🏆', text: 'Proven results' },
      { icon: '🛡️', text: 'Safe care' },
    ]),
    finalCtaHeading: 'Ready to Fade Your Scars?',
    finalCtaSubtext: 'Schedule your scar assessment and get your personalized revision roadmap today.',
    finalCtaPrimaryBtn: 'Book Appointment',
    finalCtaSecondaryBtn: 'Get Free Consultation',
    seo: { _type: 'object', metaTitle: 'Scar Treatment in Hyderabad | NeoFatbury Clinic', metaDescription: 'Expert scar and keloid revision at NeoFatbury Hyderabad. Advanced laser and injection protocols. Book free consultation.' },
    adSchema: { _type: 'object', priceFrom: 2499, duration: '30-45 mins', aggregateRating: 4.8, reviewCount: 960 },
  }
];

async function seed() {
  console.log('🚀 Seeding Missing Skin Services...');
  for (const svc of MISSING_SERVICES) {
    console.log(`Syncing: ${svc.name}`);
    const existing = await client.fetch(`*[_type == "service" && slug.current == $slug][0]`, { slug: svc.slug });
    if (existing) {
      await client.patch(existing._id).set(svc as any).commit();
      console.log(`✅ UPDATED: ${svc.name}`);
    } else {
      const typeSvc = { ...svc, _type: 'service', slug: { _type: 'slug', current: svc.slug } };
      await client.create(typeSvc as any);
      console.log(`✨ CREATED: ${svc.name}`);
    }
  }
  console.log('🎉 Done seeding missing services.');
}

seed().catch(console.error);
