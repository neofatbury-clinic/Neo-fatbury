
import { createClient } from '@sanity/client';
import fs from 'fs';
import path from 'path';

const client = createClient({
  projectId: 'p8ddtj8e',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: 'skCI7MW9ZFcFji6s08u3bKe05EY7Bni99cDzVqYerfb2vtW12S4jbEaPQ43nhrOr8JQL79A18BF32LRFAVJXiDdJMhgn7ID2eKnA67vgumdeD17mokZSkSDia6YcfqfyUOlBgKtFArC1CSTPUZNKWs93ExnulZMza8WhXKHdSRX2ESzZCkYy',
  useCdn: false,
});

async function restoreLogo() {
  const settings = await client.fetch(`*[_type == "siteSettings"][0]`);
  if (!settings) return;

  const logoPath = path.join(process.cwd(), 'public/images/neofatbury-logo-web.png');
  const faviconPath = path.resolve(process.cwd(), '..', 'favicon.png');
  
  const logoAsset = await client.assets.upload('image', fs.createReadStream(logoPath));
  const faviconAsset = await client.assets.upload('image', fs.createReadStream(faviconPath));

  const tagline = settings.tagline || 'Expert Skin, Hair & Slimming Clinic in Hyderabad';
  
  // Default Colors
  const typography = settings.typography || {};
  const colors = {
    primary: typography.primary || '#00acb1',
    accent: typography.accent || '#e8a317',
    background: typography.background || '#ffffff',
    surface: typography.surface || '#f0f8f8',
    text: typography.text || '#1a2b3c',
    headingFont: typography.headingFont || 'Montserrat',
    bodyFont: typography.bodyFont || 'Poppins'
  };

  await client.patch(settings._id)
    .set({
      tagline,
      typography: colors,
      logo: {
        _type: 'image',
        asset: {
          _type: 'reference',
          _ref: logoAsset._id
        }
      },
      favicon: {
        _type: 'image',
        asset: {
          _type: 'reference',
          _ref: faviconAsset._id
        }
      }
    })
    .commit();

  console.log('Logo and Favicon restored successfully!');
}

restoreLogo().catch(console.error);
