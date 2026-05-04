const { createClient } = require('@sanity/client');

const client = createClient({
  projectId: 'p8ddtj8e',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: 'sktBJL7uoQlIUPcLVPdDhZBeAlkCt78I2EKxcR0RD6jEdB9POwODHSP2uVbli31BzoaFI68QR2EFDW55L7Y7bzXF10f5gDn4U6yW5OwqGYayyhhcvn8h2DqWOAJNOBCwwKomyVPx0wvFBKFKwJwFDRnP2chyn5yIyU83RisxcAsy3eQPoiDD'
});

const privacyPolicy = [
  {
    _type: 'block',
    style: 'normal',
    children: [{ _type: 'span', text: 'At NeoFatbury, your privacy is extremely critical to us. This Privacy Policy details the types of personal data we collect, how we securely use it, and how we protect your information.' }]
  },
  {
    _type: 'block',
    style: 'h3',
    children: [{ _type: 'span', text: '1. Information We Collect' }]
  },
  {
    _type: 'block',
    style: 'normal',
    children: [{ _type: 'span', text: 'When you fill out forms on our website (such as the consultation booking forms), we securely collect your Name, Phone Number, and Service Interest. This data is strictly used for contacting you regarding your explicitly requested aesthetic inquiry.' }]
  },
  {
    _type: 'block',
    style: 'h3',
    children: [{ _type: 'span', text: '2. Use of Information' }]
  },
  {
    _type: 'block',
    style: 'normal',
    children: [{ _type: 'span', text: 'Your data is used solely to facilitate your clinic booking and internal tracking analysis for our Google Ads campaigns. Your data is NEVER sold, rented, or distributed to third-party vendors.' }]
  }
];

const termsConditions = [
  {
    _type: 'block',
    style: 'normal',
    children: [{ _type: 'span', text: 'Welcome to NeoFatbury. By accessing this website, you agree to be bound by these Terms and Conditions of use, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.' }]
  },
  {
    _type: 'block',
    style: 'h3',
    children: [{ _type: 'span', text: '1. Use License' }]
  },
  {
    _type: 'block',
    style: 'normal',
    children: [{ _type: 'span', text: 'Permission is granted to temporarily download one copy of the materials (information or software) on NeoFatbury website for personal, non-commercial transitory viewing only.' }]
  },
  {
    _type: 'block',
    style: 'h3',
    children: [{ _type: 'span', text: '2. Disclaimer' }]
  },
  {
    _type: 'block',
    style: 'normal',
    children: [{ _type: 'span', text: 'The materials on NeoFatbury website are provided on an \'as is\' basis. NeoFatbury makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.' }]
  }
];

const medicalDisclaimer = [
  {
    _type: 'block',
    style: 'normal',
    children: [{ _type: 'span', text: 'The information provided on the NeoFatbury website, including text, graphics, images, and other materials, is for educational and informational purposes only and is not intended as a substitute for professional medical advice, diagnosis, or treatment.' }]
  },
  {
    _type: 'block',
    style: 'h3',
    children: [{ _type: 'span', text: '1. Not Medical Advice' }]
  },
  {
    _type: 'block',
    style: 'normal',
    children: [{ _type: 'span', text: 'Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition. Never disregard professional medical advice or delay in seeking it because of something you have read on this website.' }]
  },
  {
    _type: 'block',
    style: 'h3',
    children: [{ _type: 'span', text: '2. Results May Vary' }]
  },
  {
    _type: 'block',
    style: 'normal',
    children: [{ _type: 'span', text: 'Clinical results vary from person to person. Before and after photos are representations of individual results and do not guarantee similar outcomes for all patients.' }]
  }
];

async function seed() {
  const settings = await client.fetch(`*[_type == "siteSettings"][0]`);
  if (!settings) {
    console.log("No siteSettings document found to update.");
    return;
  }

  await client
    .patch(settings._id)
    .set({
      privacyPolicy: privacyPolicy,
      termsConditions: termsConditions,
      medicalDisclaimerContent: medicalDisclaimer
    })
    .commit();

  console.log("Successfully seeded legal content in Sanity.");
}

seed();
