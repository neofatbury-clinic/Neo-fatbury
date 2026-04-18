import { client, isSanityConfigured } from '@/sanity/client';
import { getHomepage } from '@/sanity/queries';

// Static fallback content — used when Sanity is not yet connected
const STATIC_HOME: any = {
  heroHeading: 'Expert Skin, Hair & Slimming Clinic in Hyderabad',
  heroSubheading:
    'Transform your confidence with US-FDA approved treatments and expert dermatological care at NeoFatbury.',
  heroImage: { _type: 'image', asset: { _ref: '', _type: 'reference' } },
  trustBadges: ['10+ Years of Expertise', 'US-FDA Approved Tech', '15,000+ Success Stories'],
  specializations: [
    {
      title: 'Skin Care',
      description:
        'Reveal your natural glow with Laser Hair Reduction, Acne Scar Revision, and Skin Brightening peels.',
      image: { _type: 'image', asset: { _ref: '', _type: 'reference' } },
      link: '/skin',
    },
    {
      title: 'Hair Restoration',
      description:
        'Advanced clinical solutions for Hair Loss and Anti-Dandruff treatments designed by specialists.',
      image: { _type: 'image', asset: { _ref: '', _type: 'reference' } },
      link: '/hair',
    },
    {
      title: 'Weight Management',
      description:
        'Non-surgical body contouring including CoolSculpting (Fat Freezing) and targeted Inch Loss.',
      image: { _type: 'image', asset: { _ref: '', _type: 'reference' } },
      link: '/slimming',
    },
  ],
  whyUsPoints: [
    { title: 'Dermatologist-Led', description: 'Every treatment supervised by qualified medical professionals.' },
    { title: 'Safety First', description: 'ISO-certified processes and US-FDA approved equipment only.' },
    { title: 'No Hidden Costs', description: 'Transparent pricing with detailed pre-treatment counseling.' },
    { title: 'Convenient Locations', description: 'Premium clinics in Kukatpally and Himayatnagar.' },
  ],
  locationKukatpally: 'Road No 1, KPHB Colony, Hyderabad',
  locationHimayatnagar: 'Main Road, Himayatnagar, Hyderabad',
};

export async function getHomePageData(): Promise<any> {
  if (!isSanityConfigured) return STATIC_HOME;
  try {
    const data = await getHomepage();
    return data ?? STATIC_HOME;
  } catch {
    return STATIC_HOME;
  }
}
