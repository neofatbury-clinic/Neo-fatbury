// src/sanity/seed-services-master.ts
// Exact replica of every service page — all sections, all text, all images
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

// ─────────────────────────────────────────────────────────────────────────────
// MASTER SERVICE DATA — exact replica of every page
// ─────────────────────────────────────────────────────────────────────────────
const SERVICES: Record<string, unknown>[] = [

  // ═══════════════════════════════════════════════════════════════════════════
  // SKIN: LASER HAIR REDUCTION  (/skin/laser-hair-reduction)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    _type: 'service',
    name: 'Laser Hair Reduction',
    slug: { _type: 'slug', current: 'laser-hair-reduction' },
    category: 'skin', isFeatured: true, order: 1,
    shortDescription: 'Permanent laser hair reduction using US-FDA approved triple-wavelength technology for all skin tones.',

    // Hero
    heroHeadline:   'Smooth Skin.',
    heroAccentLine: 'Laser Precision.',
    heroSubtext:    'Advanced clinical hair reduction for permanent, smooth results. Experience US-FDA approved technology designed for surgical precision and lasting confidence.',
    heroCtaText:    'Book Free Consultation',
    heroTrustBadges: k([
      { icon: '🛡️', label: 'US-FDA APPROVED' },
      { icon: '💎', label: 'GOLD STANDARD' },
    ]),
    // hero background image is /images/laser-hair-bg.png — upload manually in CMS

    // Problem Section
    problemHeading:    'Tired of Constant',
    problemAccentText: 'Shaving & Waxing?',
    problemCards: k([
      { icon: '🪒', title: 'Frequent Growth',  desc: 'The constant, exhausting need to shave or wax every few days to maintain smoothness.' },
      { icon: '🩹', title: 'Ingrown Hair',     desc: 'Painful bumps and skin irritation caused by traditional hair removal methods.' },
      { icon: '🕒', title: 'Time Consuming',   desc: 'Spending hours every month on temporary routines that never give lasting freedom.' },
      { icon: '🌑', title: 'Skin Darkening',   desc: 'Roughness and dark spots caused by constant friction and chemical hair removal.' },
    ]),
    problemBottomText:   "There's a permanent solution —",
    problemBottomAccent: 'experience the freedom of smooth, hair-free skin forever.',

    // What Is
    whatIsLabel:       'Permanent Freedom',
    whatIsHeading:     'What is',
    whatIsAccentWord:  'Laser Hair Reduction?',
    whatIsBody:        'Laser hair reduction uses concentrated light to target hair follicles, preventing future growth while ensuring your surrounding skin remains safe, smooth, and healthy.',
    whatIsListHeading: 'Why choose our technology:',
    whatIsPoints: k([
      { icon: '❄️', text: 'Pain-free cooling' },
      { icon: '👥', text: 'All skin types' },
      { icon: '🎯', text: 'Precision targeting' },
      { icon: '♾️', text: 'Long-term results' },
    ]),
    whatIsImageBadge: 'NEOFATBURY LASER STANDARD',
    // whatIsImage: /images/neofatbury-clinical-standard.png — upload in CMS

    // Before & After
    baHeading:    'Experience',
    baAccentWord: 'Smoothness',
    baSubtext:    'See noticeable hair reduction and smoother skin results from our elite sessions.',
    baCtaText:    'Start Your Journey to Smooth Skin Today',
    baCtaBtnText: 'Start Your Journey',
    // baImage: /images/neofatbury-laser-ba.png — upload in CMS

    // Benefits
    benefitsHeading:    'Benefits of',
    benefitsAccentWord: 'Laser Hair Reduction',
    benefitItems: k([
      { icon: '♾️', text: 'Permanent reduction' },
      { icon: '⚡', text: 'Pain-free tech' },
      { icon: '🩹', text: 'No ingrown hair' },
      { icon: '✨', text: 'Smoother skin' },
      { icon: '🕒', text: 'Time saving' },
    ]),

    // Technology
    techHeading:    'Advanced',
    techAccentWord: 'Soprano Technology',
    techBody:       'We use clinically proven, FDA-approved Soprano technology to ensure virtually painless and highly effective hair reduction for all skin types.',
    techFeatures: k([
      { icon: '😌', text: 'Pain-free sessions' },
      { icon: '⚡', text: 'Fast & effective' },
      { icon: '🛡️', text: 'All skin types safe' },
    ]),
    // techImage: /images/neofatbury-cooling-tech.png — upload in CMS

    // Trust
    trustHeading:    'Why Choose',
    trustAccentWord: 'Neo Clinic?',
    trustItems: k([
      { icon: '👨‍⚕️', text: 'Expert doctors' },
      { icon: '🔬',   text: 'Advanced tech' },
      { icon: '🏆',   text: 'Proven results' },
      { icon: '🛡️',  text: 'Safe care' },
    ]),

    // Final CTA
    finalCtaHeading:     'Ready for Smooth Skin?',
    finalCtaSubtext:     'Schedule your skin analysis and start your journey towards hair-free skin today.',
    finalCtaPrimaryBtn:  'Book Appointment',
    finalCtaSecondaryBtn: 'Get Free Consultation',

    seo: { _type: 'object', metaTitle: 'Laser Hair Reduction in Hyderabad | NeoFatbury Clinical', metaDescription: 'Permanent laser hair reduction at NeoFatbury Hyderabad. US-FDA approved technology. Book free consultation.' },
    adSchema: { _type: 'object', priceFrom: 1999, duration: '20-30 mins', aggregateRating: 4.9, reviewCount: 2840 },
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // SKIN: ACNE & PIMPLE TREATMENT  (/skin/acne-treatment)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    _type: 'service',
    name: 'Acne & Pimple Treatment',
    slug: { _type: 'slug', current: 'acne-treatment' },
    category: 'skin', isFeatured: true, order: 2,
    shortDescription: 'Clinically proven acne & pimple treatment for all grades using US-FDA cleared medical-grade technology.',

    heroHeadline:   'Clear Skin.',
    heroAccentLine: 'Beat Acne Forever.',
    heroSubtext:    'Advanced clinical acne solutions designed to eliminate breakouts and prevent future scarring. Customized protocols for permanent skin health.',
    heroCtaText:    'Book Free Consultation',
    heroTrustBadges: k([
      { icon: '🛡️', label: 'CLINICALLY SAFE' },
      { icon: '✨',  label: 'CLEAR RESULTS' },
    ]),

    problemHeading:    'Stubborn Acne',
    problemAccentText: "Won't Go Away?",
    problemCards: k([
      { icon: '🌋', title: 'Active Breakouts',  desc: "Persistent pimples, whiteheads, and painful blackheads that don't respond to usual care." },
      { icon: '🛢️', title: 'Excessive Oil',     desc: 'Constant greasy look and clogged pores leading to recurrent flare-ups.' },
      { icon: '🔥', title: 'Painful Cysts',     desc: 'Deep, inflamed acne that causes discomfort and risk of permanent marking.' },
      { icon: '🌑', title: 'Red Marks',         desc: 'Visible post-acne redness and dark spots that mar your complexion.' },
    ]),
    problemBottomText:   'Acne is treatable —',
    problemBottomAccent: "we help restore your skin's health and lasting clarity.",

    whatIsLabel:       'Scientific Control',
    whatIsHeading:     'What is',
    whatIsAccentWord:  'Acne Treatment?',
    whatIsBody:        'Our clinical acne treatment addresses the root causes—targeting bacteria, controlling inflammation, and regulating sebum to clear existing acne and prevent new flare-ups.',
    whatIsListHeading: 'Common treatments include:',
    whatIsPoints: k([
      { icon: '⚡',    text: 'Laser Therapy' },
      { icon: '💆‍♀️', text: 'Medi-Facials' },
      { icon: '🧴',    text: 'Chemical Peels' },
      { icon: '💊',    text: 'Advanced Topicals' },
    ]),
    whatIsImageBadge: 'NEOFATBURY CLINICAL STANDARD',

    baHeading:    'Visible',
    baAccentWord: 'Clarity',
    baSubtext:    'See noticeable skin clearing and reduced inflammation results.',
    baCtaText:    'Start Your Clear Skin Journey Today',
    baCtaBtnText: 'Start Your Journey',

    benefitsHeading:    'Benefits of',
    benefitsAccentWord: 'Acne Treatment',
    benefitItems: k([
      { icon: '🌋', text: 'Reduced breakouts' },
      { icon: '🛢️', text: 'Oil control' },
      { icon: '🎯', text: 'Faded marks' },
      { icon: '🧊', text: 'Calmer skin' },
      { icon: '🌟', text: 'Confidence' },
    ]),

    techHeading:    'Advanced',
    techAccentWord: 'Acne Technology',
    techBody:       'We use clinically proven techniques and FDA-approved technology to safely resolve acne and restore skin health for all ages.',
    techFeatures: k([
      { icon: '💎',   text: 'High-precision lasers' },
      { icon: '🧴',   text: 'Safe clinical peels' },
      { icon: '👨‍⚕️', text: 'Expert dermatologists' },
    ]),

    trustHeading:    'Why Choose',
    trustAccentWord: 'Neo Clinic?',
    trustItems: k([
      { icon: '👨‍⚕️', text: 'Expert doctors' },
      { icon: '🔬',   text: 'Advanced tech' },
      { icon: '🏆',   text: 'Proven results' },
      { icon: '🛡️',  text: 'Safe care' },
    ]),

    finalCtaHeading:     'Ready for Clear Skin?',
    finalCtaSubtext:     'Schedule your skin analysis and start your journey towards acne-free skin today.',
    finalCtaPrimaryBtn:  'Book Appointment',
    finalCtaSecondaryBtn: 'Get Free Consultation',

    seo: { _type: 'object', metaTitle: 'Acne & Pimple Treatment in Hyderabad | NeoFatbury Clinical', metaDescription: 'Get rid of acne at NeoFatbury Hyderabad. Dermatologist-led, US-FDA cleared treatments for all acne types. Book free consultation.' },
    adSchema: { _type: 'object', priceFrom: 1499, duration: '30-45 mins', aggregateRating: 4.8, reviewCount: 1920 },
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // SKIN: ACNE SCAR TREATMENT  (/skin/acne-scar-treatment)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    _type: 'service',
    name: 'Acne Scar Treatment',
    slug: { _type: 'slug', current: 'acne-scar-treatment' },
    category: 'skin', isFeatured: true, order: 3,
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
    adSchema: { _type: 'object', priceFrom: 2999, duration: '45-60 mins', aggregateRating: 4.8, reviewCount: 1340 },
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // SKIN: SKIN BRIGHTENING  (/skin/skin-brightening)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    _type: 'service',
    name: 'Skin Brightening',
    slug: { _type: 'slug', current: 'skin-brightening' },
    category: 'skin', isFeatured: false, order: 4,
    shortDescription: 'Clinical skin brightening for pigmentation, dark spots, and uneven tone using Q-Switch laser and medical-grade peels.',

    heroHeadline:   'Radiant Skin.',
    heroAccentLine: 'Visible Brightening.',
    heroSubtext:    "Professional clinical brightening treatments designed to restore your skin's natural luminance. Achieve an even tone with expert-led protocols.",
    heroCtaText:    'Book Free Consultation',
    heroTrustBadges: k([
      { icon: '✨',  label: 'GLOWING RESULTS' },
      { icon: '🛡️', label: 'SAFE & PROVEN' },
    ]),

    problemHeading:    'Is Your Skin Looking',
    problemAccentText: 'Dull or Uneven?',
    problemCards: k([
      { icon: '🌫️', title: 'Dull Skin',      desc: 'Loss of natural radiance and a tired appearance.' },
      { icon: '🎨', title: 'Uneven Tone',    desc: 'Patchy skin color or dark spots appearing on face.' },
      { icon: '🌑', title: 'Pigmentation',   desc: 'Darkening of skin areas caused by excess melanin.' },
      { icon: '☀️', title: 'Sun Damage',     desc: 'Skin darkened or damaged by persistent UV exposure.' },
    ]),
    problemBottomText:   'Skin brightening focuses on',
    problemBottomAccent: "restoring your skin's natural light and glow.",

    whatIsLabel:       'Scientific Rejuvenation',
    whatIsHeading:     'What is',
    whatIsAccentWord:  'Skin Brightening?',
    whatIsBody:        'Skin brightening treatment involves procedures that reduce pigmentation, remove dead skin cells, and promote a radiant, even-toned complexion.',
    whatIsListHeading: 'Our treatments include:',
    whatIsPoints: k([
      { icon: '⚡',   text: 'Laser treatments' },
      { icon: '🧴',   text: 'Chemical peels' },
      { icon: '💧',   text: 'IV Glow drips' },
      { icon: '💆‍♀️', text: 'Advanced Facials' },
    ]),
    whatIsImageBadge: 'NEOFATBURY RADIANCE STANDARD',

    baHeading:    'Real Results.',
    baAccentWord: 'Real Glow.',
    baSubtext:    'See visible improvements in skin tone, clarity, and radiance from our elite sessions.',
    baCtaText:    'Start Your Glow Transformation Today',
    baCtaBtnText: 'Get Radiant Skin',

    benefitsHeading:    'Benefits of',
    benefitsAccentWord: 'Skin Brightening',
    benefitItems: k([
      { icon: '✨', text: 'Glowing skin' },
      { icon: '🎯', text: 'Even tone' },
      { icon: '🛡️', text: 'Sun protection' },
      { icon: '💧', text: 'Deep hydration' },
      { icon: '🌟', text: 'Confidence' },
    ]),

    techHeading:    'Advanced',
    techAccentWord: 'Dermatology Tech',
    techBody:       'We use modern, clinically proven technology to ensure safe, effective, and luminescent brightening results for all skin types.',
    techFeatures: k([
      { icon: '🔬', text: 'Q-Switch Laser' },
      { icon: '💉', text: 'IV Glutathione' },
      { icon: '🧴', text: 'Medical Peels' },
    ]),

    trustHeading:    'Why Choose',
    trustAccentWord: 'Neo Clinic?',
    trustItems: k([
      { icon: '👨‍⚕️', text: 'Expert doctors' },
      { icon: '🔬',   text: 'Advanced tech' },
      { icon: '🏆',   text: 'Proven results' },
      { icon: '🛡️',  text: 'Safe care' },
    ]),

    finalCtaHeading:     'Ready to Get Your Glow?',
    finalCtaSubtext:     'Schedule your skin analysis and start your brightening journey today.',
    finalCtaPrimaryBtn:  'Book Appointment',
    finalCtaSecondaryBtn: 'Get Free Consultation',

    seo: { _type: 'object', metaTitle: 'Skin Brightening Treatment in Hyderabad | NeoFatbury Clinical', metaDescription: 'Get glowing, even skin with clinical brightening at NeoFatbury Hyderabad. Q-Switch laser, chemical peels & IV glutathione. Book free consultation.' },
    adSchema: { _type: 'object', priceFrom: 1799, duration: '30-45 mins', aggregateRating: 4.7, reviewCount: 980 },
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // HAIR: HAIR LOSS TREATMENT  (/hair/hair-loss-treatment)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    _type: 'service',
    name: 'Hair Loss Treatment',
    slug: { _type: 'slug', current: 'hair-loss-treatment' },
    category: 'hair', isFeatured: true, order: 1,
    shortDescription: 'MD-certified hair loss treatment combining PRP therapy, LLLT, and medicated protocols to stop thinning and regrow hair.',

    heroHeadline:   'Full Hair.',
    heroAccentLine: 'Beat Thinning.',
    heroSubtext:    'Advanced clinical hair restoration protocols for effective, long-lasting results. Regain your density and confidence with expert trichology care.',
    heroCtaText:    'Book Free Consultation',
    heroTrustBadges: k([
      { icon: '💎',   label: 'CLINICALLY PROVEN' },
      { icon: '👨‍⚕️', label: 'EXPERT CARE' },
    ]),

    problemHeading:    'Facing Hair Loss',
    problemAccentText: 'or Thinning?',
    problemCards: k([
      { icon: '📉', title: 'Excessive Hair Fall',  desc: 'Significant hair loss during washing or brushing.' },
      { icon: '🔍', title: 'Thinning Hair',         desc: 'Visible reduction in density and widening partitions.' },
      { icon: '📏', title: 'Receding Hairline',     desc: 'Gradual retreat of hair from the forehead and temples.' },
      { icon: '🩹', title: 'Patchy Loss',           desc: 'Occurrence of bald patches or weak, lifeless hair.' },
    ]),
    problemBottomText:   'Hair loss is common —',
    problemBottomAccent: "and it's treatable with expert care.",

    whatIsLabel:       'Scientific Restoration',
    whatIsHeading:     'What is',
    whatIsAccentWord:  'Hair Loss Treatment?',
    whatIsBody:        'Hair loss treatment focuses on identifying the root cause and using advanced techniques to strengthen hair follicles and promote regrowth.',
    whatIsListHeading: 'Treatments may include:',
    whatIsPoints: k([
      { icon: '💉', text: 'PRP Therapy' },
      { icon: '⚡', text: 'Laser Therapy' },
      { icon: '💊', text: 'Medical treatments' },
    ]),
    whatIsImageBadge: 'NEOFATBURY CLINICAL STANDARD',

    // Causes Section (Hair Loss specific)
    causesSection: {
      heading:    'Common Causes of',
      accentWord: 'Hair Loss',
      items: k([
        { icon: '🧬', title: 'Genetics' },
        { icon: '⚖️', title: 'Hormones' },
        { icon: '🧠', title: 'Stress' },
        { icon: '🍎', title: 'Nutrition' },
        { icon: '🏃', title: 'Lifestyle' },
      ]),
    },

    baHeading:    'Visible Hair',
    baAccentWord: 'Transformation',
    baSubtext:    'See improvements in hair density, thickness, and strength.',
    baCtaText:    'Start Your Hair Regrowth Journey Today',
    baCtaBtnText: 'Start Your Journey',

    benefitsHeading:    'Benefits of',
    benefitsAccentWord: 'Hair Loss Treatment',
    benefitItems: k([
      { icon: '📉',   text: 'Reduced hair fall' },
      { icon: '⚓',   text: 'Stronger roots' },
      { icon: '💇‍♂️', text: 'Improved density' },
      { icon: '🧴',   text: 'Healthier scalp' },
      { icon: '🌟',   text: 'Confidence' },
    ]),

    processHeading:    'Our',
    processAccentWord: 'Treatment Process',
    processSteps: k([
      { icon: '🔬', title: 'Hair Analysis', desc: 'Detailed analysis to identify the cause of loss.' },
      { icon: '📋', title: 'Custom Plan',   desc: 'A tailored restoration roadmap for your profile.' },
      { icon: '⚕️', title: 'Sessions',      desc: 'Safe, medical-grade procedures to stimulate regrowth.' },
      { icon: '🛡️', title: 'Care',          desc: 'Guidance to maintain results and protect growth.' },
    ]),

    techHeading:    'Advanced',
    techAccentWord: 'Hair Technology',
    techBody:       'We use modern dermatology techniques and clinically proven treatments to safely restore hair growth.',
    techFeatures: k([
      { icon: '🛡️', text: 'Safe & effective' },
      { icon: '🕒', text: 'Minimal downtime' },
      { icon: '👥', text: 'Suitable for men & women' },
    ]),

    whoIsItFor: {
      heading:    'Who Can',
      accentWord: 'Benefit?',
      items: k([
        { icon: '👴', text: 'Men with hair loss' },
        { icon: '👩', text: 'Women with thinning hair' },
        { icon: '⏳', text: 'Early baldness' },
        { icon: '📉', text: 'Weak hair' },
      ]),
    },

    faqHeading: 'Frequently Asked Questions',
    faqItems: k([
      { question: 'Can hair loss be reversed?',    answer: 'Yes, early treatment and consistent procedures give best outcomes.' },
      { question: 'How many sessions?',             answer: 'This depends on the severity and root cause of your loss.' },
      { question: 'Is PRP safe?',                   answer: 'Absolutely. It uses your own blood components to stimulate follicles.' },
      { question: 'When are results visible?',      answer: 'Improvement in density is typically seen in a few months.' },
    ]),

    trustHeading:    'Why Choose',
    trustAccentWord: 'Neo Clinic?',
    trustItems: k([
      { icon: '👨‍⚕️', text: 'Expert doctors' },
      { icon: '🔬',   text: 'Advanced tech' },
      { icon: '🤝',   text: 'Personal care' },
      { icon: '🏆',   text: 'Proven results' },
    ]),

    finalCtaHeading:     'Ready to Regrow Your Hair?',
    finalCtaSubtext:     'Take the first step towards thicker, healthier hair today.',
    finalCtaPrimaryBtn:  'Book Appointment',
    finalCtaSecondaryBtn: 'Get Free Consultation',

    seo: { _type: 'object', metaTitle: 'Hair Loss Treatment in Hyderabad | NeoFatbury Clinical', metaDescription: 'Stop hair fall and regrow hair with PRP & LLLT at NeoFatbury Hyderabad. MD-certified protocols. Book free trichology consultation.' },
    adSchema: { _type: 'object', priceFrom: 3999, duration: '45-60 mins', aggregateRating: 4.9, reviewCount: 1580 },
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // HAIR: HAIR TRANSPLANTATION  (/hair/hair-transplantation)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    _type: 'service',
    name: 'Hair Transplantation',
    slug: { _type: 'slug', current: 'hair-transplantation' },
    category: 'hair', isFeatured: true, order: 2,
    shortDescription: 'Elite FUE & DHI hair transplantation with natural hairline design and 98% graft survival rate performed by specialist surgeons.',

    heroHeadline:   'Natural Hair.',
    heroAccentLine: 'Permanent Results.',
    heroSubtext:    'Elite FUE hair transplantation by our specialist surgeons — natural hairline design, dense packing, and undetectable results guaranteed.',
    heroCtaText:    'Book Free Consultation',
    heroTrustBadges: k([
      { icon: '🔬', label: 'FUE & DHI' },
      { icon: '✅', label: 'SURGEON PERFORMED' },
    ]),

    problemHeading:    'Struggling with',
    problemAccentText: 'Baldness or Hair Loss?',
    problemCards: k([
      { icon: '📉', title: 'Progressive Baldness', desc: 'Gradually worsening hair loss that leads to visible bald patches.' },
      { icon: '😔', title: 'Loss of Confidence',    desc: 'Hair loss significantly impacts self-esteem and social confidence.' },
      { icon: '🎭', title: 'Covering Up',            desc: 'Relying on hats, wigs, or concealers every day to hide hair loss.' },
      { icon: '💊', title: 'Treatments Not Working', desc: 'Medical treatments helping but not enough for advanced baldness.' },
    ]),
    problemBottomText:   'Hair transplantation offers a',
    problemBottomAccent: 'permanent, natural-looking solution.',

    whatIsLabel:       'Permanent Solution',
    whatIsHeading:     'What is',
    whatIsAccentWord:  'Hair Transplantation?',
    whatIsBody:        'FUE hair transplantation involves extracting individual hair follicles from the donor area and precisely implanting them into balding areas — creating natural, permanent hair growth that lasts a lifetime.',
    whatIsListHeading: 'Our techniques include:',
    whatIsPoints: k([
      { icon: '🔬', text: 'FUE (Follicular Unit Extraction)' },
      { icon: '💉', text: 'DHI (Direct Hair Implantation)' },
      { icon: '🎨', text: 'Artistic hairline design' },
      { icon: '🛡️', text: '98% graft survival rate' },
    ]),
    whatIsImageBadge: 'NEOFATBURY TRANSPLANT STANDARD',

    baHeading:    'Real Transplant',
    baAccentWord: 'Transformations',
    baSubtext:    'See undetectable, natural-looking hair transplant results from our surgeons.',
    baCtaText:    'Start Your Hair Restoration Journey Today',
    baCtaBtnText: 'Book Consultation',

    benefitsHeading:    'Why Choose',
    benefitsAccentWord: 'Hair Transplantation?',
    benefitItems: k([
      { icon: '♾️',   text: 'Permanent results' },
      { icon: '🌿',   text: 'Natural looking' },
      { icon: '🎨',   text: 'Custom hairline' },
      { icon: '💇‍♂️', text: 'Full density' },
      { icon: '🌟',   text: 'Confidence restored' },
    ]),

    processHeading:    'Our',
    processAccentWord: 'Transplant Process',
    processSteps: k([
      { icon: '🔬', title: 'Consultation',    desc: 'Scalp analysis and graft count assessment.' },
      { icon: '🎨', title: 'Design',          desc: 'Artistic hairline design tailored to your face shape.' },
      { icon: '⚕️', title: 'Procedure',        desc: '6-8 hour procedure under local anaesthesia.' },
      { icon: '🛡️', title: 'Recovery & Growth', desc: '12-month follow-up until full results are visible.' },
    ]),

    techHeading:    'Advanced',
    techAccentWord: 'FUE Technology',
    techBody:       'Our state-of-the-art FUE and DHI equipment, combined with our surgeon-led protocol, delivers the highest graft survival rates in the industry.',
    techFeatures: k([
      { icon: '💎',   text: 'Surgeon performed — not technicians' },
      { icon: '⚕️',   text: '98% graft survival rate' },
      { icon: '🔬',   text: 'Dual FUE & DHI techniques' },
    ]),

    trustHeading:    'Why Choose',
    trustAccentWord: 'Neo Clinic?',
    trustItems: k([
      { icon: '👨‍⚕️', text: 'Expert surgeons' },
      { icon: '🔬',   text: 'Advanced tech' },
      { icon: '🏆',   text: '98% survival rate' },
      { icon: '🛡️',  text: 'Safe procedures' },
    ]),

    faqHeading: 'Frequently Asked Questions',
    faqItems: k([
      { question: 'How many grafts do I need?',              answer: 'Depends on Norwood scale. Typically 1,500–5,000 grafts depending on baldness extent.' },
      { question: 'Is the procedure painful?',               answer: 'Performed under local anaesthesia — you will be comfortable throughout.' },
      { question: 'When will I see the final results?',      answer: 'Full results visible at 12–14 months after the procedure.' },
      { question: 'Is the transplant permanent?',            answer: 'Yes. Donor hair is genetically resistant to baldness and grows for life.' },
      { question: 'Can I shave my head after transplant?',   answer: 'Yes, once fully grown (after 12 months), you can cut, style, or shave normally.' },
    ]),

    finalCtaHeading:     'Begin Your Hair Restoration Journey',
    finalCtaSubtext:     'Book a FREE consultation to assess your donor area and get your personalised plan.',
    finalCtaPrimaryBtn:  'Book Appointment',
    finalCtaSecondaryBtn: 'Get Free Consultation',

    seo: { _type: 'object', metaTitle: 'Hair Transplantation in Hyderabad | NeoFatbury Clinical', metaDescription: 'Get natural, permanent hair transplant (FUE & DHI) at NeoFatbury Hyderabad. Surgeon-performed with 98% graft survival. Book FREE consultation.' },
    adSchema: { _type: 'object', priceFrom: 35000, duration: '6-8 hours', aggregateRating: 4.9, reviewCount: 720 },
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // SLIMMING: COOLSCULPTING  (/slimming/coolsculpting)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    _type: 'service',
    name: 'CoolSculpting (Fat Freezing)',
    slug: { _type: 'slug', current: 'coolsculpting' },
    category: 'slimming', isFeatured: true, order: 1,
    shortDescription: 'Original US-FDA approved CoolSculpting for permanent fat reduction — 20–25% fat cell elimination per area with zero surgery or downtime.',

    heroHeadline:   'Freeze Fat.',
    heroAccentLine: 'Shape Your Body.',
    heroSubtext:    'Non-surgical fat reduction with advanced body contouring technology. Achieve your desired shape with zero surgery and zero downtime.',
    heroCtaText:    'Book Free Consultation',
    heroTrustBadges: k([
      { icon: '❄️',  label: 'ZERO DOWNTIME' },
      { icon: '🛡️', label: 'FDA APPROVED' },
    ]),

    problemHeading:    'Stubborn Fat',
    problemAccentText: "That Won't Go Away?",
    problemCards: k([
      { icon: '🧥', title: 'Belly Fat',    desc: 'Target persistent fat around the abdomen area for a flatter profile.' },
      { icon: '⌛', title: 'Love Handles', desc: 'Eliminate stubborn fat on the flanks and waist permanently.' },
      { icon: '🦵', title: 'Thigh Fat',    desc: 'Reduce fat on inner and outer thighs for improved body contour.' },
      { icon: '👤', title: 'Double Chin',  desc: 'Non-surgical reduction of submental fat for a slim neck profile.' },
    ]),
    problemBottomText:   'Even with diet & exercise, some fat stays —',
    problemBottomAccent: 'we help remove it safely and permanently.',

    whatIsLabel:       'Precision Contouring',
    whatIsHeading:     'What is',
    whatIsAccentWord:  'CoolSculpting?',
    whatIsBody:        'CoolSculpting is a non-invasive fat reduction treatment that uses controlled cooling to freeze and eliminate stubborn fat cells. The body naturally removes these fat cells over time, resulting in a slimmer, better-contoured physique.',
    whatIsListHeading: '',
    whatIsPoints: k([]),
    whatIsImageBadge: 'NEOFATBURY CLINICAL STANDARD',
    whatIsAuthorityNote: {
      label: '⚠️ CLINICAL AUTHORITY NOTE',
      text:  '"This is not a weight-loss treatment, but a specialized body contouring procedure designed for safe and permanent fat reduction."',
    },

    targetAreas: {
      heading:    'Target',
      accentWord: 'Areas',
      items: k([
        { icon: '🥋', text: 'Abdomen' },
        { icon: '⌛', text: 'Love handles' },
        { icon: '🦵', text: 'Thighs' },
        { icon: '💪', text: 'Arms' },
        { icon: '👤', text: 'Double chin' },
      ]),
    },

    baHeading:    'See the',
    baAccentWord: 'Difference',
    baSubtext:    'Visible reduction in fat and improved body contour across target areas.',
    baCtaText:    'Start Your Body Transformation Journey Today',
    baCtaBtnText: 'Start Your Transformation',

    benefitsHeading:    'Why Choose',
    benefitsAccentWord: 'CoolSculpting?',
    benefitItems: k([
      { icon: '🛡️', text: 'Non-surgical' },
      { icon: '🕐', text: 'No downtime' },
      { icon: '♾️', text: 'Permanent' },
      { icon: '✅', text: 'Safe & effective' },
      { icon: '🌿', text: 'Natural results' },
    ]),

    trustHeading:    'Why Choose',
    trustAccentWord: 'Neo Clinic?',
    trustItems: k([
      { icon: '🧬', text: 'Advanced tech' },
      { icon: '👨‍⚕️', text: 'Expert doctors' },
      { icon: '🛡️', text: 'Safe procedures' },
      { icon: '🏆', text: 'Proven results' },
    ]),

    finalCtaHeading:     'Ready to Sculpt Your Body?',
    finalCtaSubtext:     'Achieve your desired shape without surgery or downtime today.',
    finalCtaPrimaryBtn:  'Book Appointment',
    finalCtaSecondaryBtn: 'Get Free Consultation',

    seo: { _type: 'object', metaTitle: 'CoolSculpting Fat Freezing in Hyderabad | NeoFatbury Clinical', metaDescription: 'Permanently eliminate stubborn fat with original CoolSculpting at NeoFatbury Hyderabad. US-FDA approved, zero surgery, zero downtime. Book free consultation.' },
    adSchema: { _type: 'object', priceFrom: 9999, duration: '35-60 mins per area', aggregateRating: 4.8, reviewCount: 1120 },
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // SLIMMING: WEIGHT LOSS  (/slimming/weight-loss)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    _type: 'service',
    name: 'Weight Loss',
    slug: { _type: 'slug', current: 'weight-loss' },
    category: 'slimming', isFeatured: true, order: 2,
    shortDescription: 'MD-certified medical weight management with metabolic testing and personalised clinical protocols for sustainable, healthy weight loss.',

    heroHeadline:   'Medical Weight Loss.',
    heroAccentLine: 'Sustainable Results.',
    heroSubtext:    'MD-certified clinical weight management programs that combine nutritional science, metabolic testing, and medical interventions for healthy, lasting weight loss.',
    heroCtaText:    'Book Free Consultation',
    heroTrustBadges: k([
      { icon: '🏥', label: 'MD-CERTIFIED' },
      { icon: '✅', label: 'NO CRASH DIETS' },
    ]),

    problemHeading:    "Why Diets",
    problemAccentText: "Keep Failing You?",
    problemCards: k([
      { icon: '📉', title: 'Weight Rebounds',    desc: 'Crash diets lead to rapid weight regain once you stop.' },
      { icon: '🧠', title: 'No Root Cause Fix',   desc: 'Generic programs ignore metabolic issues, hormones, and gut health.' },
      { icon: '😔', title: 'Loss of Motivation',  desc: 'Slow or stalled results cause frustration and give-up.' },
      { icon: '🍽️', title: 'Nutrient Deficiency', desc: 'Extreme restriction leads to muscle loss and health problems.' },
    ]),
    problemBottomText:   'Medical weight loss addresses',
    problemBottomAccent: 'root causes — not just calories.',

    whatIsLabel:       'Clinical Approach',
    whatIsHeading:     'What is',
    whatIsAccentWord:  'Medical Weight Loss?',
    whatIsBody:        'Our MD-certified programs begin with comprehensive metabolic testing to find why your body stores fat. We then design a personalised protocol combining medical nutrition therapy, prescription support, and body contouring.',
    whatIsListHeading: 'Our approach includes:',
    whatIsPoints: k([
      { icon: '🔬', text: 'Metabolic testing' },
      { icon: '🥗', text: 'Medical nutrition therapy' },
      { icon: '💊', text: 'Prescription support (if needed)' },
      { icon: '📊', text: 'InBody composition scans' },
    ]),
    whatIsImageBadge: 'NEOFATBURY WELLNESS STANDARD',

    baHeading:    'Real Weight Loss',
    baAccentWord: 'Transformations',
    baSubtext:    'Clients losing 6–12 kg in 3 months sustainably with our MD-certified program.',
    baCtaText:    'Start Your Weight Loss Journey Today',
    baCtaBtnText: 'Start Your Journey',

    benefitsHeading:    'Benefits of',
    benefitsAccentWord: 'Medical Weight Loss',
    benefitItems: k([
      { icon: '📉', text: 'Fat loss' },
      { icon: '💪', text: 'Muscle preserved' },
      { icon: '🧠', text: 'Root cause fixed' },
      { icon: '🔋', text: 'More energy' },
      { icon: '🌟', text: 'Confidence' },
    ]),

    faqHeading: 'Frequently Asked Questions',
    faqItems: k([
      { question: 'How much weight can I lose?',          answer: 'Most clients lose 6–12 kg in the first 3 months.' },
      { question: 'Is this a crash diet?',                answer: 'No. We design medically balanced plans — no starvation or extreme restrictions.' },
      { question: 'Do I need medications?',               answer: 'Only when medically appropriate. Most clients achieve results through optimised nutrition.' },
      { question: 'Is it safe with diabetes or PCOS?',    answer: 'Yes. We have specialist protocols for metabolic conditions.' },
    ]),

    trustHeading:    'Why Choose',
    trustAccentWord: 'Neo Clinic?',
    trustItems: k([
      { icon: '🏥', text: 'MD-certified program' },
      { icon: '🔬', text: 'Metabolic testing' },
      { icon: '🍎', text: 'Clinical nutrition' },
      { icon: '🏆', text: 'Proven results' },
    ]),

    finalCtaHeading:     'Start Your Medical Weight Loss Journey',
    finalCtaSubtext:     'Book a FREE consultation with our weight management doctors.',
    finalCtaPrimaryBtn:  'Book Appointment',
    finalCtaSecondaryBtn: 'Get Free Consultation',

    seo: { _type: 'object', metaTitle: 'Medical Weight Loss in Hyderabad | NeoFatbury Clinical', metaDescription: 'MD-certified weight loss programs at NeoFatbury Hyderabad. Metabolic testing and personalised nutrition for sustainable fat loss. Book free consultation.' },
    adSchema: { _type: 'object', priceFrom: 4999, duration: '60 mins', aggregateRating: 4.8, reviewCount: 890 },
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // SLIMMING: INCH LOSS  (/slimming/inch-loss)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    _type: 'service',
    name: 'Inch Loss & Body Contouring',
    slug: { _type: 'slug', current: 'inch-loss' },
    category: 'slimming', isFeatured: false, order: 3,
    shortDescription: 'Non-surgical inch loss and body contouring using HIFU, radiofrequency, and vacuum therapy — tighten skin and lose inches effectively.',

    heroHeadline:   'Lose Inches.',
    heroAccentLine: 'Sculpt Your Body.',
    heroSubtext:    'Advanced non-surgical HIFU and radiofrequency body contouring to tighten loose skin, reduce inches, and reshape your body — zero downtime.',
    heroCtaText:    'Book Free Consultation',
    heroTrustBadges: k([
      { icon: '✅', label: 'HIFU TECHNOLOGY' },
      { icon: '🛡️', label: 'ZERO DOWNTIME' },
    ]),

    problemHeading:    'Stubborn Fat &',
    problemAccentText: 'Loose Skin?',
    problemCards: k([
      { icon: '🫃', title: 'Loose Belly Skin',    desc: 'Sagging or loose skin around the abdomen that diet cannot fix.' },
      { icon: '🦵', title: 'Flabby Thighs',        desc: 'Excess fat and skin on thighs affecting body shape.' },
      { icon: '💪', title: 'Arm Flab',              desc: 'Loose skin and fat on upper arms that resists exercise.' },
      { icon: '⌛', title: 'Love Handle Stubborn',  desc: "Flanks and waist fat that stays no matter how much you exercise." },
    ]),
    problemBottomText:   'Non-surgical contouring can',
    problemBottomAccent: 'reshape and tighten targeted areas.',

    whatIsLabel:       'Advanced Contouring',
    whatIsHeading:     'What is',
    whatIsAccentWord:  'Body Contouring?',
    whatIsBody:        'Body contouring treatments use HIFU, radiofrequency, and vacuum therapy to disrupt fat cells, stimulate collagen, and tighten skin — delivering visible inch loss without surgery or downtime.',
    whatIsListHeading: 'Our technologies include:',
    whatIsPoints: k([
      { icon: '🔬', text: 'HIFU (High-Intensity Focused Ultrasound)' },
      { icon: '📡', text: 'Multipolar Radiofrequency' },
      { icon: '💆', text: 'Vacuum + RF Combination' },
      { icon: '⚡', text: 'EMS (Electro-Muscle Stimulation)' },
    ]),
    whatIsImageBadge: 'NEOFATBURY BODY STANDARD',

    targetAreas: {
      heading:    'Target',
      accentWord: 'Areas',
      items: k([
        { icon: '🫃', text: 'Abdomen' },
        { icon: '⌛', text: 'Waist & Flanks' },
        { icon: '🦵', text: 'Thighs' },
        { icon: '💪', text: 'Arms' },
        { icon: '👤', text: 'Double chin' },
      ]),
    },

    baHeading:    'Visible Inch Loss',
    baAccentWord: 'Results',
    baSubtext:    'See measurable reduction in circumference and visibly tighter skin.',
    baCtaText:    'Start Your Body Contouring Journey Today',
    baCtaBtnText: 'Start Your Journey',

    benefitsHeading:    'Why Choose',
    benefitsAccentWord: 'Body Contouring?',
    benefitItems: k([
      { icon: '🛡️', text: 'No surgery' },
      { icon: '🕐', text: 'Zero downtime' },
      { icon: '📏', text: 'Measurable inch loss' },
      { icon: '✨', text: 'Tighter skin' },
      { icon: '🌟', text: 'Confidence' },
    ]),

    trustHeading:    'Why Choose',
    trustAccentWord: 'Neo Clinic?',
    trustItems: k([
      { icon: '🔬', text: 'Advanced HIFU tech' },
      { icon: '👨‍⚕️', text: 'Expert doctors' },
      { icon: '📏', text: 'Visible inch loss' },
      { icon: '🏆', text: 'Proven results' },
    ]),

    finalCtaHeading:     "Get the Body Shape You've Always Wanted",
    finalCtaSubtext:     'FREE body contouring consultation — our specialists will measure and map your plan.',
    finalCtaPrimaryBtn:  'Book Appointment',
    finalCtaSecondaryBtn: 'Get Free Consultation',

    seo: { _type: 'object', metaTitle: 'Inch Loss & Body Contouring in Hyderabad | NeoFatbury Clinical', metaDescription: 'Lose inches non-surgically with HIFU, radiofrequency & EMS at NeoFatbury Hyderabad. Visible results from session 1. Book free consultation.' },
    adSchema: { _type: 'object', priceFrom: 2999, duration: '45-60 mins', aggregateRating: 4.7, reviewCount: 670 },
  },
];

// keyed array helper — adds _key to each item
function k<T extends object>(arr: T[]): (T & { _key: string })[] {
  return arr.map((item, i) => ({ ...item, _key: `k-${Math.random().toString(36).slice(2)}-${i}` }));
}

// ─────────────────────────────────────────────────────────────────────────────
async function seed() {
  console.log('🚀 Master Service Seed (Exact Replica)\n');

  for (const svc of SERVICES) {
    const slug = (svc.slug as { current: string }).current;
    console.log(`\n📋 ${svc.name as string}`);

    const existing = await client.fetch<{ _id: string }>(
      `*[_type == "service" && slug.current == $slug][0]`,
      { slug }
    );

    if (existing?._id) {
      // Patch all fields
      await client.patch(existing._id).set(svc as Record<string, unknown>).commit();
      console.log(`  ✅ UPDATED`);
    } else {
      await client.create(svc as object & { _type: string });
      console.log(`  ✨ CREATED`);
    }
  }

  console.log('\n\n🎉 ALL SERVICES SEEDED — EXACT REPLICA OF WEBSITE CONTENT!');
  console.log('\n📌 IMAGES TO UPLOAD MANUALLY IN CMS:');
  console.log('   Each service → Top Banner tab → Drag image from your /public/images/ folder:');
  console.log('   • Laser Hair Reduction  → laser-hair-bg.png');
  console.log('   • Acne Treatment        → acne-scar-bg.png');
  console.log('   • Acne Scar Treatment   → acne-scar-bg.png');
  console.log('   • Skin Brightening      → skin-brightening-bg.png');
  console.log('   • Hair Loss Treatment   → hair-loss-bg.png');
  console.log('   • Hair Transplantation  → (upload a hair transplant image)');
  console.log('   • CoolSculpting         → coolsculpting-bg.png');
  console.log('   • Weight Loss           → (upload a weight loss image)');
  console.log('   • Inch Loss             → (upload a body contouring image)');
}

seed().catch(console.error);
