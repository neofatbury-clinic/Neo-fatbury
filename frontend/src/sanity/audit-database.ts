import { createClient } from '@sanity/client';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const client = createClient({
  projectId: 'p8ddtj8e',
  dataset:   'production',
  token:     'sktBJL7uoQlIUPcLVPdDhZBeAlkCt78I2EKxcR0RD6jEdB9POwODHSP2uVbli31BZoaFI68QR2EFDW55L7Y7bzXF1Of5gDn4U6yW5oWqGYayyhhcvn8h2DqWOAJNOBCwwKomyVPx0wvFBKFVkJwfDRnP2chyn5yIyU83RisxcAsy3eQPoiDD',
  useCdn:    false,
  apiVersion: '2024-01-01',
});

async function findAndDestroy() {
  const allDocs = await client.fetch(`*[_type == "service" || _type == "category"]{
    _id, _type, name, title, "slug": slug.current, "cat": category->slug.current
  }`);
  
  console.log('--- ALL SERVICES AND CATEGORIES ---');
  console.log(JSON.stringify(allDocs, null, 2));
}

findAndDestroy();
