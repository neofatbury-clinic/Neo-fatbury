import { client } from './lib/client';

async function check() {
  const settings = await client.fetch(`*[_type == "siteSettings"][0]`);
  console.log("Site Settings Keys:", Object.keys(settings || {}));
  console.log("Privacy Policy:", !!settings?.privacyPolicy);
  console.log("Terms:", !!settings?.termsConditions);
  console.log("Medical Disclaimer:", !!settings?.medicalDisclaimerContent);
}

check();
