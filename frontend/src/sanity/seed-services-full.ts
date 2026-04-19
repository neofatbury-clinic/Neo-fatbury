// src/sanity/seed-services-full.ts
// Comprehensive seed — populates ALL CMS sections for every service
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
// Helper to build a portable-text block from a plain string
// ─────────────────────────────────────────────────────────────────────────────
const block = (text: string) => ({
  _type: 'block',
  _key: Math.random().toString(36).slice(2),
  style: 'normal',
  children: [{ _type: 'span', _key: Math.random().toString(36).slice(2), text, marks: [] }],
  markDefs: [],
});

// ─────────────────────────────────────────────────────────────────────────────
// Service definitions — one object per service page
// ─────────────────────────────────────────────────────────────────────────────
const SERVICES = [

  // ═══════════════════ SKIN TREATMENTS ════════════════════════════════════
  {
    name: 'Laser Hair Reduction',
    slug: 'laser-hair-reduction',
    category: 'skin',
    isFeatured: true,
    order: 1,
    hero: {
      heroHeadline: 'Smooth, Hair-Free Skin.',
      heroAccentLine: 'Laser Precision.',
      heroSubtext: 'Our triple-wavelength diode laser permanently reduces unwanted hair for all skin tones — painlessly, safely, and with lasting results.',
      heroCtaText: 'Book Free Consultation',
      heroTrustBadges: [
        { icon: '✅', label: 'US-FDA Approved' },
        { icon: '🔬', label: 'Triple Wavelength Laser' },
        { icon: '💎', label: '15,000+ Clients Treated' },
        { icon: '⏱️', label: '20-Min Sessions' },
      ],
    },
    shortDescription: 'Permanent laser hair reduction using US-FDA approved triple-wavelength technology for all skin tones.',
    contentSections: [
      {
        _type: 'textSection',
        _key: 'ts1',
        sectionTitle: 'What is Laser Hair Reduction?',
        body: [
          block('Laser Hair Reduction at NeoFatbury uses advanced triple-wavelength diode laser technology to target and destroy hair follicles at the root, providing a permanent solution to unwanted body and facial hair.'),
          block('Unlike traditional methods like waxing, threading, or shaving, laser treatment delivers long-lasting results after just 6–8 sessions, with minimal discomfort and zero downtime.'),
        ],
        imagePosition: 'right',
        backgroundColor: 'White',
      },
      {
        _type: 'benefitsSection',
        _key: 'bs1',
        sectionTitle: 'Why Choose NeoFatbury for Laser Hair Removal?',
        items: [
          { icon: '✅', title: 'US-FDA Approved Technology', description: 'Our machines are certified by the US-FDA ensuring maximum safety and effectiveness.' },
          { icon: '🔬', title: 'All Skin Tones Welcome', description: 'Triple-wavelength tech works safely on skin tones from fair to deep brown.' },
          { icon: '💎', title: '15,000+ Satisfied Clients', description: 'Thousands of men and women across Hyderabad trust NeoFatbury for their laser treatments.' },
          { icon: '⏱️', title: 'Quick 20-Minute Sessions', description: 'Full legs or back done in under 20 minutes — fit it into your lunch break.' },
          { icon: '🏥', title: 'Doctor-Supervised Protocol', description: 'Every session is supervised by our certified dermatologists and laser specialists.' },
          { icon: '🔒', title: 'Permanent Results', description: '80–90% permanent hair reduction after completing your full treatment course.' },
        ],
      },
      {
        _type: 'faqSection',
        _key: 'fq1',
        sectionTitle: 'Laser Hair Reduction — Frequently Asked Questions',
        faqs: [
          { question: 'How many sessions do I need?', answer: 'Most clients achieve 80–90% permanent reduction in 6–8 sessions spaced 4–6 weeks apart.' },
          { question: 'Is the treatment painful?', answer: 'The treatment is nearly painless — most clients describe it as a warm rubber band snap sensation. Our machines have built-in cooling to keep you comfortable.' },
          { question: 'Is it safe for Indian skin tones?', answer: 'Yes! Our triple-wavelength diode laser is specifically designed to work safely and effectively on darker skin tones common in India.' },
          { question: 'What areas can be treated?', answer: 'Full body including face, underarms, arms, legs, bikini area, abdomen, back, and chest.' },
          { question: 'How long do results last?', answer: 'Results are permanent. Any re-growth is typically finer and lighter and can be managed with occasional maintenance sessions.' },
          { question: 'Do I need any preparation?', answer: 'Shave the area 24 hours before your session. Avoid sun exposure, waxing, or threading for 2 weeks before treatment.' },
        ],
      },
      {
        _type: 'ctaSection',
        _key: 'cta1',
        headline: 'Start Your Smooth Skin Journey Today',
        subtext: 'Book your FREE consultation with our laser specialists and get a personalised treatment plan.',
        buttonText: 'Book Free Consultation',
      },
    ],
    seo: {
      metaTitle: 'Laser Hair Reduction in Hyderabad | NeoFatbury Clinical',
      metaDescription: 'Get permanent laser hair reduction at NeoFatbury Hyderabad. US-FDA approved triple-wavelength diode laser for all skin tones. Book a free consultation today.',
    },
    adSchema: { priceFrom: 1999, duration: '20-30 mins', aggregateRating: 4.9, reviewCount: 2840 },
  },

  {
    name: 'Acne & Pimple Treatment',
    slug: 'acne-treatment',
    category: 'skin',
    isFeatured: true,
    order: 2,
    hero: {
      heroHeadline: 'Clear, Spotless Skin.',
      heroAccentLine: 'Medical Precision.',
      heroSubtext: 'Say goodbye to acne breakouts with our clinically proven, US-FDA-cleared treatments designed for all skin types and severities.',
      heroCtaText: 'Book Free Consultation',
      heroTrustBadges: [
        { icon: '🔬', label: 'US-FDA Cleared Tech' },
        { icon: '✅', label: 'Dermatologist Led' },
        { icon: '💎', label: 'All Acne Types Treated' },
        { icon: '🛡️', label: 'Zero Side Effects' },
      ],
    },
    shortDescription: 'Clinically proven acne & pimple treatment for all grades using US-FDA cleared medical-grade technology.',
    contentSections: [
      {
        _type: 'textSection',
        _key: 'ts1',
        sectionTitle: 'Understanding Acne — Why Standard Creams Fail',
        body: [
          block('Acne is a complex medical condition caused by excess sebum, bacterial infection (P. acnes), hormonal imbalance, and clogged pores. Over-the-counter creams only address surface symptoms.'),
          block('At NeoFatbury, our dermatologists diagnose the root cause of your acne and build a personalised medical treatment plan combining light therapy, medical-grade peels, and targeted medications for lasting clearance.'),
        ],
        imagePosition: 'right',
        backgroundColor: 'White',
      },
      {
        _type: 'benefitsSection',
        _key: 'bs1',
        sectionTitle: 'Our Acne Treatment Advantages',
        items: [
          { icon: '🔬', title: 'Root Cause Diagnosis', description: 'We find the exact cause — hormonal, bacterial, or dietary — and treat accordingly.' },
          { icon: '✅', title: 'All Grades Covered', description: 'From mild blackheads to severe cystic acne, we have a clinical protocol for every severity.' },
          { icon: '💎', title: 'Medical Grade Peels', description: 'Salicylic, glycolic, and mandelic peels to unclog pores and resurface skin.' },
          { icon: '🛡️', title: 'Phototherapy (Blue Light)', description: 'US-FDA cleared blue light therapy destroys acne bacteria without antibiotics.' },
          { icon: '🏥', title: 'Doctor Prescribed Protocol', description: 'Every plan is prescribed by our MD dermatologists, not generic recommendations.' },
          { icon: '⭐', title: 'No Harsh Side Effects', description: 'Gentle clinical treatments with zero harsh purging or long-term medication dependency.' },
        ],
      },
      {
        _type: 'faqSection',
        _key: 'fq1',
        sectionTitle: 'Acne Treatment FAQs',
        faqs: [
          { question: 'How many sessions are needed?', answer: 'Mild acne typically clears in 4–6 sessions. Moderate to severe acne may need 8–12 sessions combined with medical therapy.' },
          { question: 'Will my acne come back?', answer: 'With our holistic approach addressing root causes (hormones, diet, lifestyle), recurrence is significantly minimized. We also provide a maintenance protocol.' },
          { question: 'Is the treatment suitable for teenagers?', answer: 'Yes, we have gentle protocols specifically designed for teenage skin that are safe and effective.' },
          { question: 'Can hormonal acne be treated?', answer: 'Yes, our dermatologists can prescribe hormonal regulating therapy alongside laser or light treatments for hormonal acne.' },
          { question: 'What is the downtime?', answer: 'Most treatments have zero to minimal downtime. Light peels may cause 1–2 days of minor redness or flaking.' },
        ],
      },
      {
        _type: 'ctaSection',
        _key: 'cta1',
        headline: 'Ready for Clear, Confident Skin?',
        subtext: 'Get a personalised acne treatment plan from our expert dermatologists — consultation is FREE.',
        buttonText: 'Book Free Consultation',
      },
    ],
    seo: {
      metaTitle: 'Acne & Pimple Treatment in Hyderabad | NeoFatbury Clinical',
      metaDescription: 'Get rid of acne permanently at NeoFatbury Hyderabad. Dermatologist-led, US-FDA cleared treatments for all acne types. Book a free consultation today.',
    },
    adSchema: { priceFrom: 1499, duration: '30-45 mins', aggregateRating: 4.8, reviewCount: 1920 },
  },

  {
    name: 'Acne Scar Treatment',
    slug: 'acne-scar-treatment',
    category: 'skin',
    isFeatured: true,
    order: 3,
    hero: {
      heroHeadline: 'Erase Acne Scars.',
      heroAccentLine: 'Restore Smooth Skin.',
      heroSubtext: 'Advanced fractional laser and subcision technology to dramatically reduce box, ice pick, and rolling acne scars for visibly smooth skin.',
      heroCtaText: 'Book Free Consultation',
      heroTrustBadges: [
        { icon: '🔬', label: 'Fractional CO2 Laser' },
        { icon: '✅', label: 'Subcision & Dermal Fillers' },
        { icon: '💎', label: 'Visible Results in 3 Sessions' },
        { icon: '🛡️', label: 'All Scar Types Treated' },
      ],
    },
    shortDescription: 'Advanced fractional laser & subcision for acne scars — visible smoothing in as few as 3 sessions.',
    contentSections: [
      {
        _type: 'textSection',
        _key: 'ts1',
        sectionTitle: 'Types of Acne Scars We Treat',
        body: [
          block('Acne scars come in several types — icepick scars (deep narrow pits), boxcar scars (wide depressions with sharp edges), and rolling scars (gentle undulating waves). Each type requires a different clinical approach.'),
          block('At NeoFatbury, our scar specialists assess your specific scar morphology and design a combined treatment protocol that may include fractional CO2 laser resurfacing, subcision, micro-needling RF, and dermal fillers for the best possible texture improvement.'),
        ],
        imagePosition: 'right',
        backgroundColor: 'White',
      },
      {
        _type: 'benefitsSection',
        _key: 'bs1',
        sectionTitle: 'Why NeoFatbury for Acne Scar Removal?',
        items: [
          { icon: '🔬', title: 'Fractional CO2 Laser', description: 'Gold-standard laser that resurfaces the skin and stimulates new collagen production.' },
          { icon: '✅', title: 'Subcision Technique', description: 'Needle-based procedure that releases tethered rolling scars from below the skin.' },
          { icon: '💎', title: 'Micro-Needling RF', description: 'Radiofrequency energy delivered via fine needles to tighten and resurface scar tissue.' },
          { icon: '🛡️', title: 'Dermal Fillers for Scars', description: 'Hyaluronic acid fillers to instantly plump and elevate depressed scar areas.' },
          { icon: '🏥', title: 'Combination Protocols', description: 'We combine multiple modalities in one session for faster, more dramatic results.' },
          { icon: '⭐', title: 'Visible in 3 Sessions', description: 'Most clients see significant visible improvement after just 3 sessions.' },
        ],
      },
      {
        _type: 'faqSection',
        _key: 'fq1',
        sectionTitle: 'Acne Scar Treatment FAQs',
        faqs: [
          { question: 'Can all acne scars be completely removed?', answer: 'While 100% removal depends on scar severity and depth, we typically achieve 50–80% improvement in texture and visibility. Deep ice pick scars may require more sessions.' },
          { question: 'How many sessions do I need?', answer: 'Mild scars: 3–4 sessions. Moderate scars: 4–6 sessions. Severe/deep scars: 6–8+ sessions, 4–6 weeks apart.' },
          { question: 'Is there downtime after laser treatment?', answer: 'Fractional CO2 laser typically requires 3–5 days of downtime with redness and mild peeling. Micro-needling has 1–2 days of downtime.' },
          { question: 'Will new scars form if I get acne again?', answer: 'We recommend treating active acne first before scar treatment to prevent new scars from forming during your course.' },
          { question: 'Can dark/brown marks (PIH) also be treated?', answer: 'Yes! Post-inflammatory hyperpigmentation (dark spots) responds very well to our brightening laser protocols and peels.' },
        ],
      },
      {
        _type: 'ctaSection',
        _key: 'cta1',
        headline: 'Reclaim Smooth, Even Skin',
        subtext: 'Our scar specialists will create your personalised treatment roadmap — FREE consultation.',
        buttonText: 'Book Free Consultation',
      },
    ],
    seo: {
      metaTitle: 'Acne Scar Treatment in Hyderabad | NeoFatbury Clinical',
      metaDescription: 'Reduce acne scars with fractional CO2 laser, subcision & micro-needling RF at NeoFatbury Hyderabad. Visible results in 3 sessions. Book free consultation.',
    },
    adSchema: { priceFrom: 2999, duration: '45-60 mins', aggregateRating: 4.8, reviewCount: 1340 },
  },

  {
    name: 'Skin Brightening',
    slug: 'skin-brightening',
    category: 'skin',
    isFeatured: false,
    order: 4,
    hero: {
      heroHeadline: 'Luminous, Radiant Glow.',
      heroAccentLine: 'Clinical Brightening.',
      heroSubtext: 'Target pigmentation, dark spots, and uneven skin tone with our science-backed brightening protocols for a naturally glowing complexion.',
      heroCtaText: 'Book Free Consultation',
      heroTrustBadges: [
        { icon: '✨', label: 'Visible Glow in 1 Session' },
        { icon: '🔬', label: 'Q-Switch Laser Therapy' },
        { icon: '💎', label: 'Treats All Pigmentation Types' },
        { icon: '🛡️', label: 'Safe for Indian Skin' },
      ],
    },
    shortDescription: 'Clinical skin brightening for pigmentation, dark spots, and uneven tone using Q-Switch laser and medical-grade peels.',
    contentSections: [
      {
        _type: 'textSection',
        _key: 'ts1',
        sectionTitle: 'What Causes Skin Dullness & Pigmentation?',
        body: [
          block('Uneven skin tone, dark spots, melasma, tanning, and dullness are caused by excess melanin production triggered by sun exposure, hormonal changes, acne (post-inflammatory hyperpigmentation), or aging.'),
          block('Our clinical brightening protocols use Q-Switch Nd:YAG laser, vitamin C infusion, and targeted medical-grade peels to reduce melanin deposits, refine skin texture, and reveal a natural luminous glow — safely and effectively.'),
        ],
        imagePosition: 'right',
        backgroundColor: 'White',
      },
      {
        _type: 'benefitsSection',
        _key: 'bs1',
        sectionTitle: 'Our Skin Brightening Treatments',
        items: [
          { icon: '🔬', title: 'Q-Switch Nd:YAG Laser', description: 'Targets and breaks down deep melanin deposits without damaging surrounding skin.' },
          { icon: '✨', title: 'Gluta Drip & IV Therapy', description: 'Intravenous glutathione infusion for full-body brightening and antioxidant protection.' },
          { icon: '💎', title: 'Medical-Grade Chemical Peels', description: 'Kojic acid, glycolic acid, and lactic acid peels to resurface and brighten the skin.' },
          { icon: '🛡️', title: 'Carbon Laser Peel (Hollywood)', description: 'Instant brightening treatment with zero downtime — perfect before events.' },
          { icon: '🏥', title: 'Depigmentation Creams', description: 'Prescription-strength depigmentation serums featuring arbutin, retinol, and niacinamide.' },
          { icon: '⭐', title: 'Visible Glow After 1st Session', description: 'Most clients walk out of their first session with noticeably brighter, refreshed skin.' },
        ],
      },
      {
        _type: 'faqSection',
        _key: 'fq1',
        sectionTitle: 'Skin Brightening FAQs',
        faqs: [
          { question: 'How many sessions will I need?', answer: 'Most clients need 4–6 sessions for deep pigmentation. For a basic glow boost, even 1–2 sessions show visible improvement.' },
          { question: 'Is skin brightening the same as skin whitening?', answer: 'No. Our goal is to restore your natural, healthy complexion by reducing excess melanin caused by sun damage, acne, or hormones — not to artificially whiten your skin.' },
          { question: 'Is it safe for Indian skin?', answer: 'Absolutely. All our brightening protocols are specifically calibrated for Indian (Fitzpatrick III–V) skin types.' },
          { question: 'What is the downtime?', answer: 'Carbon laser peel and Q-Switch laser have zero to minimal downtime. Chemical peels may cause 2–3 days of mild flaking.' },
          { question: 'Can I get treatment for my entire body?', answer: 'Yes! We offer full-body brightening treatments including neck, arms, underarms, and intimate areas.' },
        ],
      },
      {
        _type: 'ctaSection',
        _key: 'cta1',
        headline: 'Glow Brighter Than Ever',
        subtext: 'Book your FREE skin analysis and get a personalised brightening plan from our dermatologists.',
        buttonText: 'Book Free Consultation',
      },
    ],
    seo: {
      metaTitle: 'Skin Brightening Treatment in Hyderabad | NeoFatbury Clinical',
      metaDescription: 'Get glowing, even skin with our clinical brightening treatments at NeoFatbury Hyderabad — Q-Switch laser, chemical peels & IV glutathione. Book free consultation.',
    },
    adSchema: { priceFrom: 1799, duration: '30-45 mins', aggregateRating: 4.7, reviewCount: 980 },
  },

  {
    name: 'Scar & Keloid Treatment',
    slug: 'scar-treatment',
    category: 'skin',
    isFeatured: false,
    order: 5,
    hero: {
      heroHeadline: 'Flatten & Fade Scars.',
      heroAccentLine: 'Clinical Scar Revision.',
      heroSubtext: 'Expert treatment for surgical scars, injury scars, and keloids using advanced laser and injection therapy for dramatic improvement.',
      heroCtaText: 'Book Free Consultation',
      heroTrustBadges: [
        { icon: '🔬', label: 'Keloid Specialist Clinic' },
        { icon: '✅', label: 'Laser + Steroid Protocol' },
        { icon: '💎', label: 'All Scar Types Treated' },
        { icon: '🛡️', label: 'Prevents Recurrence' },
      ],
    },
    shortDescription: 'Clinical scar and keloid revision using laser therapy, steroid injections, and advanced resurfacing techniques.',
    contentSections: [
      {
        _type: 'textSection',
        _key: 'ts1',
        sectionTitle: 'Understanding Scars & Keloids',
        body: [
          block('Scars form when the skin repairs itself after injury, surgery, or inflammation. Keloids are a type of raised, overgrown scar that extends beyond the original wound boundary — a condition more common in darker skin types.'),
          block('At NeoFatbury, our scar specialists combine intralesional steroid injections, fractional laser, silicone therapy, and cryotherapy to flatten, fade, and soften scars and keloids — significantly improving their appearance and preventing recurrence.'),
        ],
        imagePosition: 'right',
        backgroundColor: 'White',
      },
      {
        _type: 'benefitsSection',
        _key: 'bs1',
        sectionTitle: 'Our Scar Treatment Approaches',
        items: [
          { icon: '🔬', title: 'Intralesional Steroid Injections', description: 'Directly reduces keloid size and prevents regrowth through anti-inflammatory action.' },
          { icon: '✅', title: 'Fractional Laser Resurfacing', description: 'Stimulates new collagen remodelling to flatten and smooth raised scar tissue.' },
          { icon: '💎', title: 'Cryotherapy (Freeze Therapy)', description: 'Liquid nitrogen freezing to break down keloid tissue and reduce size.' },
          { icon: '🛡️', title: 'Silicone Gel Sheeting', description: 'Clinical-grade silicone therapy to hydrate and soften scar tissue between sessions.' },
          { icon: '🏥', title: 'Surgical Scar Revision', description: 'For severe or disfiguring scars, minor surgical revision can significantly improve appearance.' },
          { icon: '⭐', title: 'Prevention Protocol', description: 'We design a maintenance plan to prevent keloid recurrence after successful treatment.' },
        ],
      },
      {
        _type: 'faqSection',
        _key: 'fq1',
        sectionTitle: 'Scar & Keloid Treatment FAQs',
        faqs: [
          { question: 'Can keloids be permanently removed?', answer: 'Keloids can be significantly reduced and flattened, but they have a tendency to recur. Our combination protocol minimises recurrence risk with ongoing maintenance.' },
          { question: 'How many sessions are needed?', answer: 'Most keloids require 4–8 injection sessions 4–6 weeks apart. Laser sessions are typically 3–6. Results vary by scar age and size.' },
          { question: 'Is the treatment painful?', answer: 'Steroid injections have mild needle discomfort. We apply topical numbing cream before all procedures to maximise your comfort.' },
          { question: 'Can post-surgery scars be treated?', answer: 'Yes! We recommend starting scar treatment 6–8 weeks after surgery for best results.' },
          { question: 'Do keloids return after treatment?', answer: 'With our comprehensive protocol including prevention measures, recurrence rates are significantly lower than with single-modality treatment.' },
        ],
      },
      {
        _type: 'ctaSection',
        _key: 'cta1',
        headline: 'Take Control of Your Scars Today',
        subtext: 'Book a FREE scar assessment with our specialists and get a personalised treatment plan.',
        buttonText: 'Book Free Consultation',
      },
    ],
    seo: {
      metaTitle: 'Scar & Keloid Treatment in Hyderabad | NeoFatbury Clinical',
      metaDescription: 'Expert scar and keloid treatment at NeoFatbury Hyderabad. Laser + steroid injection protocols that flatten, fade and prevent recurrence. Book free consultation.',
    },
    adSchema: { priceFrom: 1999, duration: '30-45 mins', aggregateRating: 4.7, reviewCount: 760 },
  },

  // ═══════════════════ HAIR TREATMENTS ═════════════════════════════════════
  {
    name: 'Hair Loss Treatment',
    slug: 'hair-loss-treatment',
    category: 'hair',
    isFeatured: true,
    order: 1,
    hero: {
      heroHeadline: 'Stop Hair Loss.',
      heroAccentLine: 'Regrow Naturally.',
      heroSubtext: 'MD-certified clinical protocols combining PRP therapy, low-level laser therapy, and medical-grade nutrition to stop thinning and restore full, thick hair.',
      heroCtaText: 'Book Free Consultation',
      heroTrustBadges: [
        { icon: '🔬', label: 'Trichologist-Led Treatment' },
        { icon: '✅', label: 'PRP + LLLT Protocol' },
        { icon: '💎', label: 'Stops Hair Fall in 30 Days' },
        { icon: '🛡️', label: 'For Men & Women' },
      ],
    },
    shortDescription: 'MD-certified hair loss treatment combining PRP therapy, LLLT, and medicated protocols to stop thinning and regrow hair.',
    contentSections: [
      {
        _type: 'textSection',
        _key: 'ts1',
        sectionTitle: 'Why Is Your Hair Falling Out?',
        body: [
          block('Hair loss (alopecia) has many causes — androgenetic alopecia (genetic pattern baldness), telogen effluvium (stress/illness-related sudden shedding), nutritional deficiencies, thyroid disorders, PCOS, or scalp conditions.'),
          block('At NeoFatbury, our trichologists conduct a comprehensive hair and scalp analysis (including trichoscopy and blood tests if needed) to identify the exact cause before designing your personalised treatment protocol.'),
        ],
        imagePosition: 'right',
        backgroundColor: 'White',
      },
      {
        _type: 'benefitsSection',
        _key: 'bs1',
        sectionTitle: 'Our Hair Loss Treatment Protocols',
        items: [
          { icon: '🔬', title: 'PRP Hair Therapy', description: 'Your own platelet-rich plasma injected into the scalp to stimulate dormant follicles and accelerate regrowth.' },
          { icon: '✅', title: 'Low-Level Laser Therapy (LLLT)', description: 'US-FDA cleared laser cap therapy that energises hair follicles and improves scalp blood circulation.' },
          { icon: '💎', title: 'Mesotherapy for Hair', description: 'Micro-injections of vitamins, minerals, and growth factors directly into the scalp for maximum follicle nutrition.' },
          { icon: '🛡️', title: 'Medical Prescription', description: 'FDA-approved medications (Minoxidil, Finasteride) prescribed and monitored by our dermatologists.' },
          { icon: '🏥', title: 'Scalp Microbiome Treatment', description: 'Treatment for dandruff, seborrheic dermatitis, and scalp inflammation that contributes to hair loss.' },
          { icon: '⭐', title: 'GFC (Growth Factor Concentrate)', description: 'Advanced next-generation GFC therapy with 5–10x more growth factors than standard PRP.' },
        ],
      },
      {
        _type: 'faqSection',
        _key: 'fq1',
        sectionTitle: 'Hair Loss Treatment FAQs',
        faqs: [
          { question: 'How quickly will I see results?', answer: 'Most clients notice reduced hair fall within 4–6 weeks. Visible new growth typically appears by 3–4 months. Full results seen at 6–12 months.' },
          { question: 'Is the treatment the same for men and women?', answer: 'No. We design gender-specific protocols since the causes and patterns of hair loss differ significantly between men (androgenetic alopecia) and women (hormonal, telogen effluvium).' },
          { question: 'Do I need to continue treatment forever?', answer: 'Once hair is stabilised and regrown, most clients switch to maintenance therapy (every 3–6 months) to prevent recurrence.' },
          { question: 'Is PRP painful?', answer: 'PRP injections are performed after applying a strong topical numbing cream, making the process comfortable. You may feel mild scalp tenderness for 24 hours after.' },
          { question: 'Can severely bald areas be treated?', answer: 'If follicles are completely dead (shiny bald scalp), medical therapy alone cannot help — hair transplantation is recommended. Our trichologist will advise after examination.' },
        ],
      },
      {
        _type: 'ctaSection',
        _key: 'cta1',
        headline: 'Stop Hair Loss — Start Regrowing Today',
        subtext: 'Get a FREE trichology consultation and scalp analysis with our hair loss specialists.',
        buttonText: 'Book Free Consultation',
      },
    ],
    seo: {
      metaTitle: 'Hair Loss Treatment in Hyderabad | NeoFatbury Clinical',
      metaDescription: 'Stop hair fall and regrow hair with PRP, LLLT & GFC therapy at NeoFatbury Hyderabad. MD-certified protocols for men & women. Book free trichology consultation.',
    },
    adSchema: { priceFrom: 3999, duration: '45-60 mins', aggregateRating: 4.9, reviewCount: 1580 },
  },

  {
    name: 'Hair Transplantation',
    slug: 'hair-transplantation',
    category: 'hair',
    isFeatured: true,
    order: 2,
    hero: {
      heroHeadline: 'Natural, Full Hair.',
      heroAccentLine: 'Permanent Results.',
      heroSubtext: 'Elite FUE hair transplantation by our specialist surgeons — natural hairline design, dense packing, and undetectable results guaranteed.',
      heroCtaText: 'Book Free Consultation',
      heroTrustBadges: [
        { icon: '🔬', label: 'FUE & DHI Technique' },
        { icon: '✅', label: 'Surgeon-Performed' },
        { icon: '💎', label: '98% Graft Survival Rate' },
        { icon: '🛡️', label: 'Lifetime Guarantee' },
      ],
    },
    shortDescription: 'Elite FUE & DHI hair transplantation with natural hairline design and 98% graft survival rate performed by specialist surgeons.',
    contentSections: [
      {
        _type: 'textSection',
        _key: 'ts1',
        sectionTitle: 'What is FUE Hair Transplantation?',
        body: [
          block('Follicular Unit Extraction (FUE) is the gold-standard technique for hair transplantation. Individual follicular units are extracted from the donor area (usually the back of the scalp) and precisely implanted into balding areas, creating natural-looking, permanent hair growth.'),
          block('At NeoFatbury, our transplants are performed entirely by our specialist hair restoration surgeons — not technicians — ensuring precision hairline design, maximum graft survival, and results that are completely undetectable.'),
        ],
        imagePosition: 'right',
        backgroundColor: 'White',
      },
      {
        _type: 'benefitsSection',
        _key: 'bs1',
        sectionTitle: 'Why NeoFatbury for Hair Transplantation?',
        items: [
          { icon: '🔬', title: 'FUE & DHI Techniques', description: 'We offer both standard FUE and Direct Hair Implantation (DHI) for maximum density and precision.' },
          { icon: '✅', title: '100% Surgeon Performed', description: 'Unlike many clinics, every graft extraction and implantation is done by our qualified surgeon.' },
          { icon: '💎', title: '98% Graft Survival Rate', description: 'Our clinical environment, specialised tools, and protocols ensure near-perfect graft survival.' },
          { icon: '🛡️', title: 'Natural Hairline Design', description: 'Our surgeons artistically design your hairline to match your face shape and age-appropriate aesthetics.' },
          { icon: '🏥', title: 'Post-Op Care Included', description: 'Comprehensive 12-month follow-up protocol with PRP sessions included to maximise results.' },
          { icon: '⭐', title: 'Beard & Eyebrow Transplants', description: 'We also perform beard, moustache, and eyebrow transplantation for complete facial restoration.' },
        ],
      },
      {
        _type: 'faqSection',
        _key: 'fq1',
        sectionTitle: 'Hair Transplant FAQs',
        faqs: [
          { question: 'How many grafts will I need?', answer: 'Graft requirements depend on the extent of baldness (Norwood scale). Typically: NW2–3 needs 1,500–2,500 grafts; NW4–5 needs 3,000–4,500 grafts; NW6–7 may need 5,000+ grafts.' },
          { question: 'Is the transplant permanent?', answer: 'Yes. Hair transplanted from the donor area is genetically resistant to DHT (the hormone causing baldness) and will continue to grow for life.' },
          { question: 'When will I see the final results?', answer: 'Transplanted hair falls out in the first 3–4 weeks (normal), then begins regrowing from month 3–4. Full results are visible at 12–14 months.' },
          { question: 'Is the procedure painful?', answer: 'The procedure is performed under local anaesthesia — you will feel minor discomfort during the initial injections but the 6–8 hour procedure itself is painless.' },
          { question: 'Can I shave my head after transplant?', answer: 'Yes! Once fully grown (after 12 months), your transplanted hair will behave exactly like your natural hair and can be cut, styled, or shaved.' },
          { question: 'What is the success rate?', answer: 'With our surgeon-led protocol, we achieve a 95–98% graft survival rate, significantly higher than industry average of 85–90%.' },
        ],
      },
      {
        _type: 'ctaSection',
        _key: 'cta1',
        headline: 'Your Permanent Hair Restoration Journey Starts Here',
        subtext: 'Book a FREE hair transplant consultation to assess your donor area and get a personalised graft estimate.',
        buttonText: 'Book Free Consultation',
      },
    ],
    seo: {
      metaTitle: 'Hair Transplantation in Hyderabad | NeoFatbury Clinical',
      metaDescription: 'Get natural, permanent hair transplant (FUE & DHI) at NeoFatbury Hyderabad. Surgeon-performed with 98% graft survival. Book your FREE consultation today.',
    },
    adSchema: { priceFrom: 35000, duration: '6-8 hours', aggregateRating: 4.9, reviewCount: 720 },
  },

  {
    name: 'PRP Hair Therapy',
    slug: 'prp-hair',
    category: 'hair',
    isFeatured: false,
    order: 3,
    hero: {
      heroHeadline: 'Unleash Your Hair\'s Power.',
      heroAccentLine: 'PRP Growth Therapy.',
      heroSubtext: 'Harness the regenerative power of your own platelet-rich plasma to stop hair loss, awaken dormant follicles, and accelerate natural hair regrowth.',
      heroCtaText: 'Book Free Consultation',
      heroTrustBadges: [
        { icon: '🔬', label: '100% Natural Growth Factors' },
        { icon: '✅', label: 'Zero Chemicals or Drugs' },
        { icon: '💎', label: 'Results in 3–4 Months' },
        { icon: '🛡️', label: 'Minimal Downtime' },
      ],
    },
    shortDescription: 'PRP hair therapy using your own growth factors to stop hair loss and accelerate regrowth — natural, drug-free, and highly effective.',
    contentSections: [
      {
        _type: 'textSection',
        _key: 'ts1',
        sectionTitle: 'How PRP Therapy Works for Hair',
        body: [
          block('PRP (Platelet-Rich Plasma) therapy is a natural, drug-free hair restoration treatment. A small sample of your blood is drawn, spun in a centrifuge to concentrate the platelets, and the resulting plasma — rich in growth factors — is injected directly into your scalp.'),
          block('These growth factors (PDGF, VEGF, IGF) stimulate dormant hair follicles, increase blood supply to the scalp, and trigger the hair\'s natural growth cycle. Most clients experience a noticeable reduction in hair fall within 4–6 weeks and visible new growth by 3–4 months.'),
        ],
        imagePosition: 'right',
        backgroundColor: 'White',
      },
      {
        _type: 'benefitsSection',
        _key: 'bs1',
        sectionTitle: 'PRP vs GFC — We Offer Both',
        items: [
          { icon: '🔬', title: 'Standard PRP', description: 'Concentrated platelet plasma with 3–5x more growth factors than whole blood — effective for early to moderate hair loss.' },
          { icon: '✅', title: 'GFC (Growth Factor Concentrate)', description: 'Advanced GFC therapy extracts 5–10x more growth factors than PRP for significantly faster and denser regrowth.' },
          { icon: '💎', title: 'ACell + PRP Combination', description: 'Extracellular matrix therapy combined with PRP for superior follicle regeneration in advanced cases.' },
          { icon: '🛡️', title: '100% Natural & Drug-Free', description: 'Uses only your own blood — no chemicals, no synthetic drugs, no side effects.' },
          { icon: '🏥', title: 'Combined with LLLT', description: 'We combine PRP with Low-Level Laser Therapy for a powerful synergistic hair growth effect.' },
          { icon: '⭐', title: 'Minimal Downtime', description: 'Return to work the same day. Mild scalp tenderness for 24 hours is the only expected effect.' },
        ],
      },
      {
        _type: 'faqSection',
        _key: 'fq1',
        sectionTitle: 'PRP Hair Therapy FAQs',
        faqs: [
          { question: 'How many PRP sessions do I need?', answer: 'The standard protocol is 4 sessions, 1 month apart, followed by quarterly maintenance sessions.' },
          { question: 'Is PRP painful?', answer: 'A strong numbing cream is applied before the procedure. Most clients feel only mild pressure during injections. The procedure takes about 45–60 minutes.' },
          { question: 'Who is a good candidate for PRP?', answer: 'PRP works best for early to moderate hair loss where follicles are still alive. It is ideal for men with early androgenetic alopecia and women with diffuse thinning.' },
          { question: 'When will I see results?', answer: 'Reduced hair fall typically occurs within 4–6 weeks. Visible new growth appears at 3–4 months. Full results are evident at 6 months after completing the course.' },
          { question: 'Can PRP be used after hair transplant?', answer: 'Yes! PRP is commonly used after hair transplant surgery to improve graft survival and accelerate hair growth.' },
        ],
      },
      {
        _type: 'ctaSection',
        _key: 'cta1',
        headline: 'Naturally Restore Your Hair',
        subtext: 'Get a FREE hair assessment and see if PRP is right for you — no obligation consultation.',
        buttonText: 'Book Free Consultation',
      },
    ],
    seo: {
      metaTitle: 'PRP Hair Therapy in Hyderabad | NeoFatbury Clinical',
      metaDescription: 'Natural PRP and GFC hair therapy to stop hair loss and regrow hair at NeoFatbury Hyderabad. Drug-free, visible results in 3-4 months. Book free consultation.',
    },
    adSchema: { priceFrom: 4999, duration: '45-60 mins', aggregateRating: 4.8, reviewCount: 890 },
  },

  // ═══════════════════ SLIMMING & BODY ═════════════════════════════════════
  {
    name: 'CoolSculpting (Fat Freezing)',
    slug: 'coolsculpting',
    category: 'slimming',
    isFeatured: true,
    order: 1,
    hero: {
      heroHeadline: 'Freeze Stubborn Fat.',
      heroAccentLine: 'No Surgery. No Downtime.',
      heroSubtext: 'The original US-FDA approved CoolSculpting technology permanently eliminates stubborn fat cells through controlled cooling — non-invasively and without a single incision.',
      heroCtaText: 'Book Free Consultation',
      heroTrustBadges: [
        { icon: '🧊', label: 'US-FDA Approved CoolSculpting' },
        { icon: '✅', label: 'Permanent Fat Cell Elimination' },
        { icon: '💎', label: '20–25% Fat Reduction Per Area' },
        { icon: '🛡️', label: 'Zero Downtime' },
      ],
    },
    shortDescription: 'Original US-FDA approved CoolSculpting for permanent fat reduction — 20–25% fat cell elimination per area with zero surgery or downtime.',
    contentSections: [
      {
        _type: 'textSection',
        _key: 'ts1',
        sectionTitle: 'How CoolSculpting Works',
        body: [
          block('CoolSculpting (Cryolipolysis) is a non-invasive, US-FDA approved fat reduction procedure that uses precisely controlled cooling to freeze and permanently destroy fat cells — without affecting the surrounding skin or tissue.'),
          block('Once frozen, the fat cells undergo apoptosis (natural cell death) and are gradually flushed out of the body through the lymphatic system over 2–3 months. Clinical studies show an average of 20–25% fat reduction in the treated area per session, with results that are permanent since dead fat cells cannot regenerate.'),
        ],
        imagePosition: 'right',
        backgroundColor: 'White',
      },
      {
        _type: 'benefitsSection',
        _key: 'bs1',
        sectionTitle: 'Why NeoFatbury CoolSculpting?',
        items: [
          { icon: '🧊', title: 'Original US-FDA Approved Device', description: 'We use the genuine CoolSculpting Elite machine — not generic cryolipolysis copies.' },
          { icon: '✅', title: 'Permanent Fat Cell Removal', description: 'Treated fat cells are permanently eliminated from your body — they cannot return.' },
          { icon: '💎', title: 'Multiple Areas in One Visit', description: 'Treat abdomen, love handles, inner thighs, double chin, and arms — all in one session with dual applicators.' },
          { icon: '🛡️', title: 'Zero Surgery or Needles', description: 'Completely non-invasive — no incisions, no anaesthesia, no stitches, no scars.' },
          { icon: '🏥', title: 'Zero Downtime', description: 'You can return to work, exercise, or social activities immediately after treatment.' },
          { icon: '⭐', title: 'Clinically Proven Results', description: 'Over 8 million CoolSculpting treatments performed worldwide with consistent clinical results.' },
        ],
      },
      {
        _type: 'faqSection',
        _key: 'fq1',
        sectionTitle: 'CoolSculpting FAQs',
        faqs: [
          { question: 'Is CoolSculpting a weight loss treatment?', answer: 'CoolSculpting is a body contouring treatment, not a weight loss program. It targets specific pockets of stubborn fat that resist diet and exercise — ideal for people at or near their target weight.' },
          { question: 'How many sessions do I need?', answer: 'Most areas need 1–2 sessions. Some clients opt for a second session 2–3 months after the first for additional fat reduction in the same area.' },
          { question: 'When will I see results?', answer: 'Results begin to appear at 4–6 weeks as your body eliminates the dead fat cells. Full results are visible at 2–3 months after treatment.' },
          { question: 'Is the treatment painful?', answer: 'You will feel intense cold and suction in the first few minutes, which subsides as the area becomes numb. The session is comfortable — most clients read or use their phones during treatment.' },
          { question: 'Can the fat come back?', answer: 'No. Treated fat cells are permanently destroyed. However, remaining (untreated) fat cells can expand with significant weight gain, so maintaining a healthy lifestyle is recommended.' },
          { question: 'What areas can be treated?', answer: 'Abdomen, flanks (love handles), inner & outer thighs, double chin, upper arms, bra line, back fat, and under-buttocks (banana roll).' },
        ],
      },
      {
        _type: 'ctaSection',
        _key: 'cta1',
        headline: 'Sculpt Your Ideal Body Shape',
        subtext: 'Book a FREE CoolSculpting consultation and body analysis — our specialists will design your personalised treatment plan.',
        buttonText: 'Book Free Consultation',
      },
    ],
    seo: {
      metaTitle: 'CoolSculpting Fat Freezing in Hyderabad | NeoFatbury Clinical',
      metaDescription: 'Permanently eliminate stubborn fat with original CoolSculpting at NeoFatbury Hyderabad. US-FDA approved, zero surgery, zero downtime. Book free consultation.',
    },
    adSchema: { priceFrom: 9999, duration: '35-60 mins per area', aggregateRating: 4.8, reviewCount: 1120 },
  },

  {
    name: 'Weight Loss',
    slug: 'weight-loss',
    category: 'slimming',
    isFeatured: true,
    order: 2,
    hero: {
      heroHeadline: 'Medical Weight Loss.',
      heroAccentLine: 'Sustainable Results.',
      heroSubtext: 'MD-certified clinical weight management programs that combine nutritional science, metabolic testing, and medical interventions for healthy, lasting weight loss.',
      heroCtaText: 'Book Free Consultation',
      heroTrustBadges: [
        { icon: '🏥', label: 'MD-Certified Program' },
        { icon: '✅', label: 'Root Cause Metabolic Testing' },
        { icon: '💎', label: 'Average 8–12 kg in 3 Months' },
        { icon: '🛡️', label: 'No Crash Diets' },
      ],
    },
    shortDescription: 'MD-certified medical weight management with metabolic testing and personalised clinical protocols for sustainable, healthy weight loss.',
    contentSections: [
      {
        _type: 'textSection',
        _key: 'ts1',
        sectionTitle: 'Why Medical Weight Loss is Different',
        body: [
          block('Crash diets and generic gym programs fail 95% of people long-term because they ignore the root causes of weight gain — metabolic dysfunction, hormonal imbalances, insulin resistance, gut health issues, and psychological factors.'),
          block('Our MD-certified weight loss program begins with comprehensive metabolic testing (thyroid, insulin, cortisol, gut microbiome) to understand exactly why your body is storing excess fat. We then design a personalised protocol combining medical nutrition therapy, prescription medications where appropriate, and advanced body contouring to help you achieve and maintain your ideal weight.'),
        ],
        imagePosition: 'right',
        backgroundColor: 'White',
      },
      {
        _type: 'benefitsSection',
        _key: 'bs1',
        sectionTitle: 'Our Weight Loss Approach',
        items: [
          { icon: '🏥', title: 'Comprehensive Metabolic Testing', description: 'Advanced blood work to identify thyroid issues, insulin resistance, hormonal imbalances, and nutritional deficiencies.' },
          { icon: '✅', title: 'Medical Nutrition Therapy', description: 'Personalised eating plans designed by clinical dietitians — not generic calorie counting.' },
          { icon: '💎', title: 'Prescription Weight Management', description: 'Where appropriate, FDA-approved medications to control appetite, improve metabolism, or target specific causes.' },
          { icon: '🛡️', title: 'Body Composition Analysis', description: 'Regular InBody scans to track fat loss, muscle preservation, and metabolic rate — not just weight on a scale.' },
          { icon: '🏥', title: 'Combining Body Contouring', description: 'Complement medical weight loss with CoolSculpting or HIFU for targeted fat removal in stubborn areas.' },
          { icon: '⭐', title: 'Long-Term Maintenance Plan', description: 'We teach sustainable lifestyle strategies so weight loss becomes permanent, not temporary.' },
        ],
      },
      {
        _type: 'faqSection',
        _key: 'fq1',
        sectionTitle: 'Weight Loss Program FAQs',
        faqs: [
          { question: 'How much weight can I lose?', answer: 'Most clients lose 6–12 kg in the first 3 months. Results vary based on starting weight, metabolic health, and compliance with the program.' },
          { question: 'Is this a crash diet or starvation plan?', answer: 'Absolutely not. Our programs are medically designed to ensure you lose fat while preserving muscle mass and maintaining nutritional balance — no starvation or extreme restrictions.' },
          { question: 'Do I need medications?', answer: 'Only when medically appropriate and with your consent. Most clients do not require prescription medications and achieve results through optimised nutrition and lifestyle changes alone.' },
          { question: 'Is it safe for people with diabetes or PCOS?', answer: 'Yes. We have specialist protocols for weight management in the context of diabetes, PCOS, hypothyroidism, and other metabolic conditions.' },
          { question: 'How long does the program last?', answer: 'Our initial program is 3 months. Most clients continue with a 3–6 month maintenance program to consolidate results and prevent rebound.' },
        ],
      },
      {
        _type: 'ctaSection',
        _key: 'cta1',
        headline: 'Start Your Medical Weight Loss Journey',
        subtext: 'Book a FREE consultation with our weight management doctors and get a personalised plan.',
        buttonText: 'Book Free Consultation',
      },
    ],
    seo: {
      metaTitle: 'Medical Weight Loss in Hyderabad | NeoFatbury Clinical',
      metaDescription: 'MD-certified weight loss programs at NeoFatbury Hyderabad. Metabolic testing, personalised nutrition, and medical support for sustainable fat loss. Book free consultation.',
    },
    adSchema: { priceFrom: 4999, duration: '60 mins (initial consultation)', aggregateRating: 4.8, reviewCount: 890 },
  },

  {
    name: 'Inch Loss & Body Contouring',
    slug: 'inch-loss',
    category: 'slimming',
    isFeatured: false,
    order: 3,
    hero: {
      heroHeadline: 'Sculpt. Tone. Reshape.',
      heroAccentLine: 'Body Contouring.',
      heroSubtext: 'Advanced HIFU, radiofrequency, and vacuum suction technologies to tighten loose skin, reduce inches, and sculpt a defined body shape — non-surgically.',
      heroCtaText: 'Book Free Consultation',
      heroTrustBadges: [
        { icon: '✅', label: 'HIFU & Radiofrequency' },
        { icon: '🔬', label: 'Visible Inch Loss in 1 Session' },
        { icon: '💎', label: 'Skin Tightening Included' },
        { icon: '🛡️', label: 'Zero Downtime' },
      ],
    },
    shortDescription: 'Non-surgical inch loss and body contouring using HIFU, radiofrequency, and vacuum therapy — tighten skin and lose inches effectively.',
    contentSections: [
      {
        _type: 'textSection',
        _key: 'ts1',
        sectionTitle: 'Body Contouring — Reshape Without Surgery',
        body: [
          block('Body contouring treatments target localised fat deposits, sagging skin, and poor body definition that resist diet and exercise. These non-surgical technologies work by disrupting fat cells, stimulating collagen production, and improving lymphatic drainage — resulting in measurable inch loss and firmer skin.'),
          block('At NeoFatbury, we combine multiple proven technologies — HIFU (High-Intensity Focused Ultrasound), multipolar radiofrequency, vacuum suction, and EMS (Electro-Muscle Stimulation) — in customised protocols that deliver visible results, often from the very first session.'),
        ],
        imagePosition: 'right',
        backgroundColor: 'White',
      },
      {
        _type: 'benefitsSection',
        _key: 'bs1',
        sectionTitle: 'Our Body Contouring Technologies',
        items: [
          { icon: '🔬', title: 'HIFU Body Technology', description: 'High-Intensity Focused Ultrasound precisely targets deep fat layers and simultaneously tightens skin.' },
          { icon: '✅', title: 'Multipolar Radiofrequency', description: 'RF energy heats fat cells and stimulates collagen, reducing fat and tightening loose skin simultaneously.' },
          { icon: '💎', title: 'Vacuum + RF Combination', description: 'Mechanical vacuum action combined with RF for superior inch reduction on thighs, buttocks, and abdomen.' },
          { icon: '🛡️', title: 'EMS (Electro-Muscle Stimulation)', description: 'The equivalent of 20,000 sit-ups or squats in a 30-minute session to build muscle and reduce fat.' },
          { icon: '🏥', title: 'Lymphatic Drainage Massage', description: 'Advanced lymphatic drainage to reduce water retention, bloating, and enhance detoxification.' },
          { icon: '⭐', title: 'Visible Results in Session 1', description: 'Most clients lose 1–3 cm in circumference measurement after their very first session.' },
        ],
      },
      {
        _type: 'faqSection',
        _key: 'fq1',
        sectionTitle: 'Inch Loss & Body Contouring FAQs',
        faqs: [
          { question: 'How many inches can I lose?', answer: 'Results vary, but most clients lose 2–5 cm in circumference per area over a course of 8–10 sessions. Some clients see up to 1–2 dress sizes of improvement.' },
          { question: 'Is this the same as weight loss?', answer: 'Body contouring targets specific fat deposits and skin laxity — you may not see dramatic scale changes but you will notice significant visible reshaping and clothing fit improvement.' },
          { question: 'What areas can be treated?', answer: 'Abdomen, love handles, thighs, buttocks, arms, double chin, lower back, and hips.' },
          { question: 'Is there any downtime?', answer: 'No downtime at all. You can return to all normal activities immediately after your session.' },
          { question: 'How long do results last?', answer: 'Results are maintained with a healthy lifestyle. Most clients come in for monthly maintenance sessions after their initial course to sustain results.' },
        ],
      },
      {
        _type: 'ctaSection',
        _key: 'cta1',
        headline: 'Get the Body Shape You\'ve Always Wanted',
        subtext: 'FREE body contouring consultation — our specialists will measure and map your personalised plan.',
        buttonText: 'Book Free Consultation',
      },
    ],
    seo: {
      metaTitle: 'Inch Loss & Body Contouring in Hyderabad | NeoFatbury Clinical',
      metaDescription: 'Lose inches and reshape your body non-surgically with HIFU, radiofrequency & EMS at NeoFatbury Hyderabad. Visible results from session 1. Book free consultation.',
    },
    adSchema: { priceFrom: 2999, duration: '45-60 mins', aggregateRating: 4.7, reviewCount: 670 },
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Main seeder — creates or patches every service document
// ─────────────────────────────────────────────────────────────────────────────
async function seed() {
  console.log('🚀 NeoFatbury Full Service Seed — Starting...\n');

  for (const s of SERVICES) {
    console.log(`\n📋 Processing: ${s.name}`);

    // Build content sections array with unique _key values
    const contentSections = s.contentSections.map((section: Record<string, unknown>) => ({
      ...section,
      _key: `${s.slug}-${section._key}`,
    }));

    const doc: Record<string, unknown> = {
      _type: 'service',
      name:  s.name,
      slug:  { _type: 'slug', current: s.slug },
      category:    s.category,
      isFeatured:  s.isFeatured,
      order:       s.order,
      shortDescription: s.shortDescription,

      // Hero
      heroHeadline:    s.hero.heroHeadline,
      heroAccentLine:  s.hero.heroAccentLine,
      heroSubtext:     s.hero.heroSubtext,
      heroCtaText:     s.hero.heroCtaText,
      heroTrustBadges: s.hero.heroTrustBadges.map((b: { icon: string; label: string }, i: number) => ({
        _key:  `${s.slug}-badge-${i}`,
        icon:  b.icon,
        label: b.label,
      })),

      // Content Sections
      contentSections,

      // SEO
      seo: {
        _type:           'object',
        metaTitle:        s.seo.metaTitle,
        metaDescription:  s.seo.metaDescription,
      },

      // Ad Schema
      adSchema: {
        _type:            'object',
        priceFrom:         s.adSchema.priceFrom,
        duration:          s.adSchema.duration,
        aggregateRating:   s.adSchema.aggregateRating,
        reviewCount:       s.adSchema.reviewCount,
      },
    };

    // Check if exists, patch if so, create if not
    const existing = await client.fetch<{ _id: string }>(
      `*[_type == "service" && slug.current == $slug][0]`,
      { slug: s.slug }
    );

    if (existing?._id) {
      await client.patch(existing._id).set(doc).commit();
      console.log(`  ✅ UPDATED: ${s.name}`);
    } else {
      await client.create(doc as object & { _type: string });
      console.log(`  ✨ CREATED: ${s.name}`);
    }
  }

  console.log('\n\n🎉 ALL SERVICE PAGES SEEDED WITH FULL CONTENT!');
  console.log('   → Open your CMS Studio to see all sections populated.');
  console.log('   → Each service now has: Hero, Benefits, FAQ, CTA, and SEO sections.');
}

seed().catch(console.error);
