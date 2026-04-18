import { client, isSanityConfigured } from '@/sanity/client';
import { getServiceBySlug } from '@/sanity/queries';

// Static fallbacks keyed by slug
const STATIC_SERVICES: any = {
  'laser-hair-reduction': {
    title: 'Laser Hair Reduction',
    heroHeading: 'Smooth Skin. Zero Hassle.',
    heroSubHeading: 'Permanent hair reduction with advanced, US-FDA approved laser technology.',
    trustBadges: ['Safe for all skin types', 'Dermatologist supervised', 'Visible results in few sessions'],
    problemHeading: 'Still Struggling with Shaving & Waxing?',
    problemPoints: ['Tired of frequent shaving?', 'Painful waxing sessions?', 'Ingrown hair & skin irritation?'],
    whatIsHeading: 'What is Laser Hair Removal?',
    whatIsContent: 'Laser Hair Removal is a safe and effective procedure that uses focused light energy to target hair follicles, reducing hair growth over time.',
    suitableFor: ['Face', 'Underarms', 'Legs', 'Bikini area', 'Full body'],
    benefitsHeading: 'Why Choose Laser Hair Removal?',
    benefits: ['Permanent hair reduction', 'Smooth & even skin', 'No cuts or burns', 'Reduces ingrown hair', 'Saves time & money long-term'],
    processSteps: [
      { step: '1', title: 'Consultation', description: 'Skin & hair analysis' },
      { step: '2', title: 'Preparation', description: 'Area cleaned & prepped' },
      { step: '3', title: 'Laser Session', description: 'Quick & precise treatment' },
      { step: '4', title: 'Post Care', description: 'Cooling & guidance' },
    ],
    faqItems: [
      { question: 'Is it painful?', answer: 'Minimal discomfort, much less than waxing.' },
      { question: 'How many sessions needed?', answer: 'Typically 6–8 sessions.' },
      { question: 'Is it safe?', answer: 'Yes, performed by trained professionals.' },
      { question: 'Are results permanent?', answer: 'Long-term hair reduction with maintenance.' },
    ],
    finalCtaHeading: 'Ready for Smooth Skin?',
    finalCtaSubtext: 'Say goodbye to unwanted hair forever.',
  },
  'acne-scar-treatment': {
    title: 'Acne & Scar Treatment',
    heroHeading: 'Clear Skin Starts Here.',
    heroSubHeading: 'Advanced acne & scar treatments backed by dermatology experts.',
    trustBadges: ['Safe & clinically proven', 'Personalized treatment plans', 'Visible results'],
    problemHeading: 'Struggling with Acne & Scars?',
    problemPoints: ['Persistent pimples and breakouts', 'Dark spots & pigmentation', 'Acne scars affecting confidence'],
    whatIsHeading: 'What is Acne & Scar Treatment?',
    whatIsContent: 'Acne treatment involves advanced dermatological procedures that target the root cause of acne, reduce inflammation, and improve overall skin texture.',
    suitableFor: ['Whiteheads & Blackheads', 'Hormonal Acne', 'Cystic Acne', 'Acne Scars', 'Pigmentation'],
    benefits: ['Clearer, healthier skin', 'Reduced scars & pigmentation', 'Boost in confidence', 'Long-term results', 'Customized care'],
    processSteps: [
      { step: '1', title: 'Skin Analysis', description: 'Understand your skin type' },
      { step: '2', title: 'Customized Plan', description: 'Based on acne condition' },
      { step: '3', title: 'Treatment Sessions', description: 'Safe & effective procedures' },
      { step: '4', title: 'Follow-up Care', description: 'For long-lasting results' },
    ],
    faqItems: [
      { question: 'How long to see results?', answer: 'Visible improvement in a few sessions.' },
      { question: 'Is it safe?', answer: 'Yes, completely safe under expert supervision.' },
      { question: 'Will acne come back?', answer: 'We focus on long-term control and prevention.' },
      { question: 'Is it painful?', answer: 'Most treatments are comfortable with minimal discomfort.' },
    ],
    finalCtaHeading: 'Say Goodbye to Acne',
    finalCtaSubtext: 'Start your journey to clear, confident skin today.',
  },
};

export async function getServicePageData(slug: string): Promise<any> {
  if (!isSanityConfigured) return STATIC_SERVICES[slug] ?? {};
  try {
    const data = await getServiceBySlug(slug);
    return data ?? STATIC_SERVICES[slug] ?? {};
  } catch {
    return STATIC_SERVICES[slug] ?? {};
  }
}
