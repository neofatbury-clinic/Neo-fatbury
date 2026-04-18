// Type definitions that mirror the Sanity schemas
// These ensure TypeScript knows the shape of content from Sanity

export interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
  alt?: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Specialization {
  title: string;
  description: string;
  image: SanityImage;
  link: string;
}

export interface WhyUsPoint {
  title: string;
  description: string;
}

// ── Home Page ──────────────────────────────────────────────
export interface HomePageData {
  heroHeading: string;
  heroSubheading: string;
  heroImage: SanityImage;
  trustBadges: string[];
  specializations: Specialization[];
  whyUsPoints: WhyUsPoint[];
  locationKukatpally: string;
  locationHimayatnagar: string;
}

// ── Service Page ───────────────────────────────────────────
export interface ServicePageData {
  title: string;
  heroHeading: string;
  heroSubHeading: string;
  heroImage: SanityImage;
  trustBadges: string[];
  problemHeading: string;
  problemPoints: string[];
  whatIsHeading: string;
  whatIsContent: string;
  suitableFor: string[];
  benefitsHeading: string;
  benefits: string[];
  processSteps: ProcessStep[];
  faqItems: FaqItem[];
  finalCtaHeading: string;
  finalCtaSubtext: string;
  seo: {
    metaTitle: string;
    metaDescription: string;
  };
}
