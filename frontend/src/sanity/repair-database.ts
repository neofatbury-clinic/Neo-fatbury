import { createClient } from '@sanity/client';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const client = createClient({
  projectId: 'p8ddtj8e',
  dataset:   'production',
  token:     'sktBJL7uoQlIUPcLVPdDhZBeAlkCt78I2EKxcR0RD6jEdB9POwODHSP2uVbli31BZoaFI68QR2EFDW55L7Y7bzXF1Of5gDn4U6yW5oWqGYayyhhcvn8h2DqWOAJNOBCwwKomyVPx0wvFBKFVkJwfDRnP2chyn5yIyU83RisxcAsy3eQPoiDD',
  useCdn:    false,
  apiVersion: '2021-10-21',
});

async function fixBrokenReferences() {
  console.log('🚀 Starting Database Repair...');

  // 1. Fix Service Hero Images
  const services = await client.fetch(`*[_type == "service"]`);
  console.log(`Found ${services.length} services to check.`);

  for (const s of services) {
    let needsUpdate = false;
    const patch: any = {};

    // Fix heroImage
    if (s.heroImage?.asset?._id) {
      console.log(`🔧 Fixing heroImage for: ${s.name}`);
      patch.heroImage = {
        ...s.heroImage,
        asset: { _type: 'reference', _ref: s.heroImage.asset._id }
      };
      needsUpdate = true;
    }

    // Fix baImage
    if (s.baImage?.asset?._id) {
      console.log(`🔧 Fixing baImage for: ${s.name}`);
      patch.baImage = {
        ...s.baImage,
        asset: { _type: 'reference', _ref: s.baImage.asset._id }
      };
      needsUpdate = true;
    }

    // Fix whatIsImage
    if (s.whatIsImage?.asset?._id) {
      console.log(`🔧 Fixing whatIsImage for: ${s.name}`);
      patch.whatIsImage = {
        ...s.whatIsImage,
        asset: { _type: 'reference', _ref: s.whatIsImage.asset._id }
      };
      needsUpdate = true;
    }

    if (needsUpdate) {
      await client.patch(s._id).set(patch).commit();
      console.log(`✅ Fixed ${s.name}`);
    }
  }

  // 2. Fix Category Images
  const categories = await client.fetch(`*[_type == "category"]`);
  for (const c of categories) {
    if (c.heroImage?.asset?._id) {
      console.log(`🔧 Fixing heroImage for category: ${c.title}`);
      await client.patch(c._id).set({
        heroImage: {
          ...c.heroImage,
          asset: { _type: 'reference', _ref: c.heroImage.asset._id }
        }
      }).commit();
    }
  }

  console.log('✨ Database Repair Complete! Please refresh your Sanity Studio.');
}

fixBrokenReferences().catch(console.error);
