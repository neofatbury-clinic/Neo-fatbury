// src/sanity/seed-services.ts
// Full seeding of ALL clinic services matching the website pages
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createClient } from '@sanity/client'
import dotenv from 'dotenv'

dotenv.config({ path: '.env.local' })

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

const SERVICES: any[] = [
  // ── SKIN TREATMENTS ──────────────────────────────────────────
  {
    _type: 'service', _id: 'service-acne-treatment',
    title: 'Acne & Pimple Treatment',
    slug: { _type: 'slug', current: 'acne-treatment' },
    category: 'skin', isPopular: true,
    shortDescription: 'Clinical solutions for active acne, pimples and breakout prevention.',
    description: 'Our clinical acne treatments combine advanced US-FDA technologies — Chemical Peels, Diamond Dermabrasion, and Laser Therapy — to target acne-causing bacteria and prevent scarring.',
    features: [
      { _key: 'f1', feature: 'US-FDA Approved Procedures' },
      { _key: 'f2', feature: 'Dermatologist Led Treatment' },
      { _key: 'f3', feature: 'Zero Downtime' },
      { _key: 'f4', feature: 'Customised for All Skin Types' },
    ],
    faqs: [
      { _key: 'q1', question: 'How many sessions are needed?', answer: 'Typically 4–6 sessions are recommended for optimal results, spaced 2–3 weeks apart.' },
      { _key: 'q2', question: 'Is the treatment painful?', answer: 'Most patients experience minimal discomfort. A topical numbing cream is applied beforehand.' },
    ]
  },
  {
    _type: 'service', _id: 'service-acne-scar-treatment',
    title: 'Acne Scar Treatment',
    slug: { _type: 'slug', current: 'acne-scar-treatment' },
    category: 'skin', isPopular: true,
    shortDescription: 'Effective treatments to reduce and eliminate acne scars.',
    description: 'Our acne scar treatments use advanced laser resurfacing and microneedling to stimulate collagen production and smooth out pitted or raised scars for visibly clearer skin.',
    features: [
      { _key: 'f1', feature: 'Laser Resurfacing Technology' },
      { _key: 'f2', feature: 'Collagen Induction Therapy' },
      { _key: 'f3', feature: 'Safe for All Scar Types' },
      { _key: 'f4', feature: 'Long-Lasting Results' },
    ],
    faqs: [
      { _key: 'q1', question: 'How long does it take to see results?', answer: 'Visible improvement is usually seen after 3–4 sessions. Full results develop over 3–6 months.' },
    ]
  },
  {
    _type: 'service', _id: 'service-scar-treatment',
    title: 'Scar Treatment',
    slug: { _type: 'slug', current: 'scar-treatment' },
    category: 'skin', isPopular: false,
    shortDescription: 'Reduction of all types of scars including surgical and injury scars.',
    description: 'We offer comprehensive scar management solutions for all scar types — hypertrophic, keloid, stretch marks, and surgical scars — using laser therapy, steroid injections, and advanced fillers.',
    features: [
      { _key: 'f1', feature: 'Treats All Scar Types' },
      { _key: 'f2', feature: 'Laser & Injection Techniques' },
      { _key: 'f3', feature: 'Expert Clinical Assessment' },
    ],
    faqs: [
      { _key: 'q1', question: 'Can old scars be treated?', answer: 'Yes, even old scars respond well to our advanced treatment protocols.' },
    ]
  },
  {
    _type: 'service', _id: 'service-skin-brightening',
    title: 'Skin Brightening (Glow)',
    slug: { _type: 'slug', current: 'skin-brightening' },
    category: 'skin', isPopular: true,
    shortDescription: 'Hydra-Facials and clinical brightening treatments for radiant skin.',
    description: 'Revitalize your complexion with our signature brightening treatments that target pigmentation, uneven skin tone, and dullness — leaving you with a natural, lasting glow.',
    features: [
      { _key: 'f1', feature: 'Instant Hydration Boost' },
      { _key: 'f2', feature: 'Deep Exfoliation' },
      { _key: 'f3', feature: 'Visible Glow After 1 Session' },
      { _key: 'f4', feature: 'No Downtime' },
    ],
    faqs: [
      { _key: 'q1', question: 'How long does the glow last?', answer: 'Results typically last 2–4 weeks. Regular monthly sessions are recommended for sustained results.' },
    ]
  },
  {
    _type: 'service', _id: 'service-laser-hair-reduction',
    title: 'Laser Hair Reduction',
    slug: { _type: 'slug', current: 'laser-hair-reduction' },
    category: 'skin', isPopular: true,
    shortDescription: 'Painless, permanent hair reduction for face and body.',
    description: 'Experience silky smooth skin with our high-end Laser Hair Reduction technology (Tri-Beam). Safe for face, legs, arms, and full body. Works on all Indian skin tones.',
    features: [
      { _key: 'f1', feature: 'Tri-Beam Laser Technology' },
      { _key: 'f2', feature: 'Virtually Painless' },
      { _key: 'f3', feature: 'Permanent 80–90% Reduction' },
      { _key: 'f4', feature: 'Safe for All Skin Tones' },
    ],
    faqs: [
      { _key: 'q1', question: 'How many sessions are needed?', answer: '6–8 sessions are typically recommended for permanent results.' },
      { _key: 'q2', question: 'Is it safe for dark skin?', answer: 'Yes, our Nd:YAG laser is specifically safe and effective for Indian skin tones.' },
    ]
  },

  // ── HAIR TREATMENTS ──────────────────────────────────────────
  {
    _type: 'service', _id: 'service-hair-fall-treatment',
    title: 'Hair Fall Treatment',
    slug: { _type: 'slug', current: 'hair-fall-treatment' },
    category: 'hair', isPopular: true,
    shortDescription: 'Clinical solutions to stop hair fall and stimulate regrowth.',
    description: 'Our hair fall treatments address the root cause of hair loss using advanced PRP therapy, mesotherapy, and clinical-grade topical treatments prescribed by our expert trichologists.',
    features: [
      { _key: 'f1', feature: 'PRP (Platelet Rich Plasma) Therapy' },
      { _key: 'f2', feature: 'Scalp Mesotherapy' },
      { _key: 'f3', feature: 'Root Cause Diagnosis' },
      { _key: 'f4', feature: 'Personalized Treatment Plan' },
    ],
    faqs: [
      { _key: 'q1', question: 'How soon will I see results?', answer: 'Most patients see a noticeable reduction in hair fall within 4–6 weeks of starting treatment.' },
    ]
  },
  {
    _type: 'service', _id: 'service-hair-transplant',
    title: 'Hair Transplantation (FUE)',
    slug: { _type: 'slug', current: 'hair-transplant' },
    category: 'hair', isPopular: true,
    shortDescription: 'Advanced FUE hair restoration for natural permanent density.',
    description: 'Restore your hairline with our precision Follicular Unit Extraction (FUE) technique. Our expert surgeons ensure natural-looking results with maximum graft survival rates.',
    features: [
      { _key: 'f1', feature: 'Natural Hairline Design' },
      { _key: 'f2', feature: 'FUE Precision Extraction' },
      { _key: 'f3', feature: '95%+ Graft Survival Rate' },
      { _key: 'f4', feature: 'Expert Surgical Team' },
    ],
    faqs: [
      { _key: 'q1', question: 'How long does the transplant last?', answer: 'FUE hair transplants are permanent. Transplanted follicles are resistant to DHT and will grow for life.' },
      { _key: 'q2', question: 'What is the recovery time?', answer: 'Most patients return to work within 7–10 days. Full results are visible within 9–12 months.' },
    ]
  },
  {
    _type: 'service', _id: 'service-prp-hair',
    title: 'PRP Hair Treatment',
    slug: { _type: 'slug', current: 'prp-hair-treatment' },
    category: 'hair', isPopular: false,
    shortDescription: 'Platelet Rich Plasma to rejuvenate hair follicles and boost growth.',
    description: 'PRP Hair Treatment uses your own blood\'s growth factors to stimulate dormant hair follicles, reduce hair fall, and improve hair thickness and density without any surgery.',
    features: [
      { _key: 'f1', feature: '100% Natural — Uses Your Own Blood' },
      { _key: 'f2', feature: 'Non-Surgical & Safe' },
      { _key: 'f3', feature: 'Improves Thickness & Density' },
    ],
    faqs: [
      { _key: 'q1', question: 'How many sessions are needed?', answer: 'A course of 4–6 sessions is recommended, one per month, for best results.' },
    ]
  },

  // ── SLIMMING & BODY ───────────────────────────────────────────
  {
    _type: 'service', _id: 'service-coolsculpting',
    title: 'CoolSculpting (Fat Freezing)',
    slug: { _type: 'slug', current: 'coolsculpting' },
    category: 'slimming', isPopular: true,
    shortDescription: 'US-FDA cleared non-surgical fat elimination using controlled cooling.',
    description: 'Freeze away stubborn fat without surgery or needles. Our CoolSculpting technology targets and destroys fat cells permanently — they are naturally flushed out by your body over 2–3 months.',
    features: [
      { _key: 'f1', feature: 'No Surgery or Needles' },
      { _key: 'f2', feature: 'US-FDA Cleared Device' },
      { _key: 'f3', feature: 'Permanent Fat Reduction' },
      { _key: 'f4', feature: 'Zero Recovery Time' },
    ],
    faqs: [
      { _key: 'q1', question: 'How many sessions are needed?', answer: 'Most patients need 1–3 sessions per area. Results are visible within 4–8 weeks.' },
      { _key: 'q2', question: 'Is CoolSculpting painful?', answer: 'You may feel intense cold and mild pressure initially, but the area becomes numb within minutes.' },
    ]
  },
  {
    _type: 'service', _id: 'service-coolsculpting-fat-freezing',
    title: 'Fat Freezing Treatment',
    slug: { _type: 'slug', current: 'fat-freezing' },
    category: 'slimming', isPopular: true,
    shortDescription: 'Advanced Cryolipolysis to target and eliminate stubborn fat pockets.',
    description: 'Our Fat Freezing (Cryolipolysis) treatment is ideal for stubborn fat in the abdomen, flanks, thighs, and double chin — areas that don\'t respond to diet and exercise.',
    features: [
      { _key: 'f1', feature: 'Targets All Problem Areas' },
      { _key: 'f2', feature: 'Clinically Proven Technology' },
      { _key: 'f3', feature: 'No Anaesthesia Needed' },
    ],
    faqs: [
      { _key: 'q1', question: 'What areas can be treated?', answer: 'Abdomen, flanks, inner & outer thighs, back fat, arms, and double chin.' },
    ]
  },
  {
    _type: 'service', _id: 'service-inch-loss',
    title: 'Inch Loss Treatment',
    slug: { _type: 'slug', current: 'inch-loss' },
    category: 'slimming', isPopular: false,
    shortDescription: 'Targeted inch loss from problem areas using advanced body contouring.',
    description: 'Our Inch Loss programme combines RF body contouring, cavitation, and lymphatic drainage massage to visibly reduce centimetres from your waist, hips, thighs, and arms.',
    features: [
      { _key: 'f1', feature: 'RF Body Contouring' },
      { _key: 'f2', feature: 'Ultrasound Cavitation' },
      { _key: 'f3', feature: 'Measurable Results Per Session' },
    ],
    faqs: [
      { _key: 'q1', question: 'How many inches can I lose?', answer: 'Most patients lose 1–3 inches per targeted area within a course of 6–8 sessions.' },
    ]
  },
  {
    _type: 'service', _id: 'service-inch-loss-treatment',
    title: 'Advanced Inch Loss Programme',
    slug: { _type: 'slug', current: 'inch-loss-treatment' },
    category: 'slimming', isPopular: false,
    shortDescription: 'A structured programme for sustainable inch reduction and body reshaping.',
    description: 'Our Advanced Inch Loss Programme is a supervised, multi-session treatment plan that combines body contouring technologies with a clinical nutrition guide for maximum results.',
    features: [
      { _key: 'f1', feature: 'Supervised Clinical Programme' },
      { _key: 'f2', feature: 'Nutrition Guidance Included' },
      { _key: 'f3', feature: 'Ongoing Progress Tracking' },
    ],
    faqs: [
      { _key: 'q1', question: 'How long is the programme?', answer: 'Programmes run from 4–12 weeks depending on your goals and target area.' },
    ]
  },
  {
    _type: 'service', _id: 'service-weight-loss',
    title: 'Weight Loss Programme',
    slug: { _type: 'slug', current: 'weight-loss' },
    category: 'slimming', isPopular: true,
    shortDescription: 'Medical weight loss supervised by clinical specialists.',
    description: 'Our medically supervised weight loss programme addresses the root causes of weight gain — hormones, metabolism, and lifestyle — with a personalised clinical protocol.',
    features: [
      { _key: 'f1', feature: 'Doctor-Supervised Plan' },
      { _key: 'f2', feature: 'Metabolic & Hormonal Assessment' },
      { _key: 'f3', feature: 'Personalised Diet Protocol' },
      { _key: 'f4', feature: 'Body Composition Monitoring' },
    ],
    faqs: [
      { _key: 'q1', question: 'How much weight can I lose?', answer: 'Results vary, but most patients lose 4–8 kg in the first month of the structured programme.' },
    ]
  },
  {
    _type: 'service', _id: 'service-weight-loss-treatment',
    title: 'Medical Weight Loss Treatment',
    slug: { _type: 'slug', current: 'weight-loss-treatment' },
    category: 'slimming', isPopular: false,
    shortDescription: 'Injection-based and technology-assisted medical weight reduction.',
    description: 'For patients who need faster results, our medical weight loss treatment uses clinically approved injection protocols combined with advanced body contouring to accelerate fat reduction.',
    features: [
      { _key: 'f1', feature: 'Clinically Approved Injections' },
      { _key: 'f2', feature: 'Combined Technology Protocol' },
      { _key: 'f3', feature: 'Fast Visible Results' },
    ],
    faqs: [
      { _key: 'q1', question: 'Are the injections safe?', answer: 'Yes, all injectable protocols are approved and administered by qualified medical professionals.' },
    ]
  },
]

async function seed() {
  console.log(`\n🌱 Seeding ${SERVICES.length} services to Sanity CMS...\n`)
  let success = 0
  for (const service of SERVICES) {
    try {
      await client.createOrReplace(service)
      console.log(`  ✅ ${service.category.toUpperCase()} → ${service.title}`)
      success++
    } catch (err: any) {
      console.error(`  ❌ Failed: ${service.title} — ${err.message}`)
    }
  }
  console.log(`\n🚀 Done! ${success}/${SERVICES.length} services seeded successfully!\n`)
}

seed()
