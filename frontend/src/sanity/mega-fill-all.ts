import { createClient } from '@sanity/client';
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'p8ddtj8e', 
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN || process.env.NEXT_PUBLIC_SANITY_TOKEN,
  apiVersion: '2023-05-03',
});

async function fillEverything() {
  const services = await client.fetch('*[_type == "service"]{ _id, name, slug }');

  for (const s of services) {
    if (!s.name) continue;
    console.log(`Processing: ${s.name}...`);
    
    // Generate Category-based placeholders
    const isHair = s.name.toLowerCase().includes('hair') || s.name.toLowerCase().includes('dandruff');
    const isSkin = s.name.toLowerCase().includes('skin') || s.name.toLowerCase().includes('acne') || s.name.toLowerCase().includes('peel') || s.name.toLowerCase().includes('aging');
    const isSlimming = s.name.toLowerCase().includes('slimming') || s.name.toLowerCase().includes('loss') || s.name.toLowerCase().includes('coolsculpting');

    let typeTag = 'Clinical';
    if (isHair) typeTag = 'Hair';
    if (isSkin) typeTag = 'Skin';
    if (isSlimming) typeTag = 'Slimming';

    const updateData: any = {
      // 1. Problem Section
      problemHeading: `Are you struggling with ${s.name}?`,
      problemAccentText: "Let's fix it.",
      problemCards: [
        { icon: "📉", title: "Loss of Confidence", desc: `Persistent ${s.name} can affect how you feel every day.` },
        { icon: "⏳", title: "Time Consuming", desc: "Temporary fixes and home remedies often fail to provide lasting results." },
        { icon: "💼", title: "Professional Impact", desc: "Your appearance plays a vital role in your first impressions." },
        { icon: "🛡️", title: "Scalp/Skin Health", desc: "Ignoring the root cause can lead to further clinical complications." }
      ],
      problemBottomText: "Stop searching for temporary solutions.",
      problemBottomAccent: "Choose Clinical Excellence.",

      // 2. What is Section
      whatIsLabel: "Procedure Overview",
      whatIsHeading: `Understanding the ${s.name}`,
      whatIsAccentWord: "Process.",
      whatIsBody: `The NeoFatbury ${s.name} is a comprehensive clinical protocol designed to address your concerns at the source. Our expert dermatologists use advanced US-FDA approved technologies to ensure safety, precision, and visible results from the very first session.`,
      whatIsListHeading: "Key Highlights:",
      whatIsPoints: [
        { icon: "🔬", text: "Digital Scalp/Skin Analysis" },
        { icon: "👨‍⚕️", text: "Expert Dermatologist Consultation" },
        { icon: "⚡", text: "US-FDA Approved Technology" },
        { icon: "📅", text: "Personalized Treatment Plan" }
      ],
      whatIsImageBadge: "NEOFATBURY CLINICAL STANDARD",
      whatIsAuthorityNote: {
        label: "Clinical Note",
        text: "Our protocols are revised monthly to include the latest global advancements in aesthetic medicine."
      },

      // 3. Before/After
      baHeading: "Real People.",
      baAccentWord: "Real Results.",
      baSubtext: `See the visible transformations achieved through our clinical ${s.name} protocols.`,
      baCtaText: "Want results like these?",
      baCtaBtnText: "Book Your Analysis",

      // 4. Benefits
      benefitsHeading: "Why our patients love",
      benefitsAccentWord: "this treatment.",
      benefitItems: [
        { icon: "🏆", text: "15,000+ Successful Procedures" },
        { icon: "✨", text: "Visible Results in 3-5 Sessions" },
        { icon: "🛡️", text: "No Side Effects / No Downtime" },
        { icon: "👨‍⚕️", text: "Performed by Certified Experts" },
        { icon: "💎", text: "Premium Clinical Experience" }
      ],

      // 5. How it Works
      processHeading: "Your Journey to",
      processAccentWord: "Success.",
      processSteps: [
        { icon: "1", title: "Consultation", desc: "Detailed diagnosis by our senior specialists using digital tools." },
        { icon: "2", title: "Mapping", desc: "Defining the treatment areas and goal milestones for your plan." },
        { icon: "3", title: "Procedure", desc: "Clinical execution using high-precision US-FDA approved equipment." },
        { icon: "4", title: "Follow-up", desc: "Aftercare guidance to ensure your results last for years." }
      ],

      // 6. Technology
      techHeading: "Advanced Technology for",
      techAccentWord: "Precision.",
      techBody: `At NeoFatbury, we never compromise on safety. Our ${s.name} utilizes the latest generation of clinical hardware recognized globally for its efficacy and comfort.`,
      techFeatures: [
        { icon: "⚙️", text: "Smart-Cooling System for comfort" },
        { icon: "🎯", text: "Precision targeting of cells" },
        { icon: "🛡️", text: "Safety sensors for skin protection" }
      ],

      // 7. Trust
      trustHeading: "Why 10,000+ choose",
      trustAccentWord: "Neo Clinic.",
      trustItems: [
        { icon: "👨‍⚕️", text: "US-Trained Experts" },
        { icon: "🏢", text: "Premium Facilities" },
        { icon: "🤝", text: "Transparent Pricing" },
        { icon: "🌟", text: "5-Star Patient Care" }
      ],

      // 8. FAQ
      faqHeading: "Frequently Asked",
      faqItems: [
        { question: `Is ${s.name} safe?`, answer: "Yes, our procedures are non-invasive and performed under strict clinical supervision using US-FDA approved equipment." },
        { question: "How many sessions are needed?", answer: "Typically, 4-6 sessions are recommended, but a personalized plan will be created during your consultation." },
        { question: "Is there any recovery time?", answer: "Most of our treatments have zero downtime, allowing you to return to work immediately." }
      ],

      // 9. Final CTA
      finalCtaHeading: `Start Your ${s.name} Today.`,
      finalCtaSubtext: "Book a complimentary analysis with our expert dermatologists and take the first step towards a better you.",
      finalCtaPrimaryBtn: "Book Free Consultation",
      finalCtaSecondaryBtn: "Call Now: 97006 41000",

      // 10. SEO
      seo: {
        metaTitle: `${s.name} in Hyderabad | Best Clinic - NeoFatbury`,
        metaDescription: `Get the best ${s.name} in Hyderabad. US-FDA approved technology, expert dermatologists, and 15,000+ success stories. Book now!`,
      },

      // 11. Ads
      adSchema: {
        priceFrom: isSkin ? 1999 : (isHair ? 2999 : 4999),
        duration: "45-60 Minutes",
        aggregateRating: 4.9,
        reviewCount: 350
      }
    };

    // Special fields for specific pages
    if (s.name.includes('Hair Loss')) {
      updateData.causesSection = {
        heading: "Root Causes of",
        accentWord: "Hair Loss",
        items: [
          { icon: "🧬", title: "Genetics" },
          { icon: "🧴", title: "Product Buildup" },
          { icon: "🌪️", title: "Pollution" },
          { icon: "🥗", title: "Nutrition" }
        ]
      };
    }

    try {
      await client.patch(s._id).set(updateData).commit();
      console.log(`✅ ${s.name} updated with full data.`);
    } catch (err) {
      console.error(`❌ Failed to update ${s.name}:`, err);
    }
  }
}

fillEverything();
