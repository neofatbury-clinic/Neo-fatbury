
import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'p8ddtj8e',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: 'skCI7MW9ZFcFji6s08u3bKe05EY7Bni99cDzVqYerfb2vtW12S4jbEaPQ43nhrOr8JQL79A18BF32LRFAVJXiDdJMhgn7ID2eKnA67vgumdeD17mokZSkSDia6YcfqfyUOlBgKtFArC1CSTPUZNKWs93ExnulZMza8WhXKHdSRX2ESzZCkYy',
  useCdn: false,
});

async function seedNavigation() {
  const settings = await client.fetch(`*[_type == "siteSettings"][0]`);
  if (!settings) {
    console.log('No siteSettings found. Please create it first.');
    return;
  }

  const headerMenu = [
    { label: 'Home', url: '/' },
    { 
      label: 'Skin', 
      url: '/skin',
      dropdownItems: [
        { label: 'All Skin Treatments', url: '/skin' },
        { label: 'Acne Scar Treatment', url: '/skin/acne-scar-treatment' },
        { label: 'Laser Hair Reduction', url: '/skin/laser-hair-reduction' },
        { label: 'Skin Brightening', url: '/skin/skin-brightening' },
        { label: 'Scar Treatment', url: '/skin/scar-treatment' }
      ]
    },
    { 
      label: 'Hair', 
      url: '/hair',
      dropdownItems: [
        { label: 'All Hair Treatments', url: '/hair' },
        { label: 'Hair Loss Treatment', url: '/hair/hair-loss-treatment' },
        { label: 'Anti-Dandruff Treatment', url: '/hair/anti-dandruff-treatment' },
        { label: 'Hair Transplantation', url: '/hair/hair-transplantation' }
      ]
    },
    { 
      label: 'Slimming', 
      url: '/slimming',
      dropdownItems: [
        { label: 'All Slimming Treatments', url: '/slimming' },
        { label: 'CoolSculpting', url: '/slimming/coolsculpting' },
        { label: 'Weight Loss', url: '/slimming/weight-loss' },
        { label: 'Inch Loss', url: '/slimming/inch-loss' }
      ]
    },
    { label: 'Results', url: '/results' },
    { label: 'Blog', url: '/blog' }
  ];

  const footerMenu = [
    { label: 'About Our Experts', url: '/about-us' },
    { label: 'Our Specialist Doctors', url: '/our-doctors' },
    { label: 'Success Stories (Gallery)', url: '/results' },
    { label: 'Latest Wellness Blog', url: '/blog' },
    { label: 'Privacy Policy', url: '/privacy-policy' },
    { label: 'Terms & Conditions', url: '/terms-conditions' }
  ];

  const footerServices = [
    { label: 'Advanced Skin Clinic in Hyderabad', url: '/skin/' },
    { label: 'Laser Hair Reduction for Men & Women', url: '/skin/laser-hair-reduction/' },
    { label: 'Acne Scar & Pimple Treatment', url: '/skin/acne-scar-treatment/' },
    { label: 'Skin Brightening & Pigmentation', url: '/skin/skin-brightening/' },
    { label: 'Non-Surgical Inch Loss Treatment', url: '/slimming/inch-loss-treatment/' }
  ];

  const topHeaderMenu = [
    { label: 'About Us', url: '/about-us' },
    { label: 'Results', url: '/results' },
    { label: 'Contact', url: '/contact-us' }
  ];

  await client.patch(settings._id)
    .set({
      headerMenu,
      topHeaderMenu,
      footerMenu,
      footerServices
    })
    .commit();

  console.log('Navigation seeded successfully!');
}

seedNavigation().catch(console.error);
