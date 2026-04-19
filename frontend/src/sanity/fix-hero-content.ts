// Fix CMS hero content to match what's actually shown on the website
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

// These are the EXACT texts currently shown on each live page
const CORRECT_HEROES: Record<string, { heroHeadline: string; heroAccentLine: string; heroSubtext: string; heroTrustBadges: { icon: string; label: string }[] }> = {
  'laser-hair-reduction': {
    heroHeadline:   'Smooth Skin.',
    heroAccentLine: 'Laser Precision.',
    heroSubtext:    'Advanced clinical hair reduction for permanent, smooth results. Experience US-FDA approved technology designed for surgical precision and lasting confidence.',
    heroTrustBadges: [
      { icon: '🛡️', label: 'US-FDA APPROVED' },
      { icon: '💎', label: 'GOLD STANDARD' },
    ],
  },
  'acne-treatment': {
    heroHeadline:   'Clear Skin.',
    heroAccentLine: 'Beat Acne Forever.',
    heroSubtext:    'Advanced clinical acne solutions designed to eliminate breakouts and prevent future scarring. Customized protocols for permanent skin health.',
    heroTrustBadges: [
      { icon: '🛡️', label: 'CLINICALLY SAFE' },
      { icon: '✨', label: 'CLEAR RESULTS' },
    ],
  },
  'acne-scar-treatment': {
    heroHeadline:   'Smooth Skin.',
    heroAccentLine: 'Zero Acne Scars.',
    heroSubtext:    'Advanced clinical scar restoration using surgical-grade technology.',
    heroTrustBadges: [
      { icon: '💎', label: 'PRECISION TECH' },
      { icon: '🛡️', label: 'FDA APPROVED' },
    ],
  },
  'skin-brightening': {
    heroHeadline:   'Radiant Skin.',
    heroAccentLine: 'Visible Brightening.',
    heroSubtext:    "Professional clinical brightening treatments designed to restore your skin's natural luminance. Achieve an even tone with expert-led protocols.",
    heroTrustBadges: [
      { icon: '✨', label: 'GLOWING RESULTS' },
      { icon: '🛡️', label: 'SAFE & PROVEN' },
    ],
  },
};

async function fixHeroes() {
  console.log('🔧 Fixing CMS hero content to match live website...\n');

  for (const [slug, hero] of Object.entries(CORRECT_HEROES)) {
    const doc = await client.fetch<{ _id: string }>(
      `*[_type == "service" && slug.current == $slug][0]`,
      { slug }
    );

    if (!doc?._id) {
      console.log(`  ⚠️ Not found: ${slug}`);
      continue;
    }

    await client.patch(doc._id).set({
      heroHeadline:   hero.heroHeadline,
      heroAccentLine: hero.heroAccentLine,
      heroSubtext:    hero.heroSubtext,
      heroTrustBadges: hero.heroTrustBadges.map((b, i) => ({
        _key:  `${slug}-badge-${i}`,
        icon:  b.icon,
        label: b.label,
      })),
    }).commit();

    console.log(`  ✅ Fixed: ${slug}`);
    console.log(`     Headline:   "${hero.heroHeadline}"`);
    console.log(`     Accent:     "${hero.heroAccentLine}"`);
  }

  console.log('\n✨ All hero texts now match the live website!');
  console.log('ℹ️  NOTE: The hero background IMAGE is stored as a local file in /public/images/');
  console.log('         You can now upload those images to the CMS "Top Banner Image" field.');
  console.log('         Current background images used on each page:');
  console.log('           • Laser Hair Reduction:  /images/laser-hair-bg.png');
  console.log('           • Acne Treatment:        /images/acne-scar-bg.png');
  console.log('           • Acne Scar Treatment:   /images/acne-scar-bg.png');
  console.log('           • Skin Brightening:      /images/skin-brightening-bg.png');
}

fixHeroes().catch(console.error);
