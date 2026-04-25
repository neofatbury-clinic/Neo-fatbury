// src/scripts/seed-categories.ts
const { createClient } = require('@sanity/client');

const client = createClient({
  projectId: 'p8ddtj8e',
  dataset: 'production',
  token: 'skCI7MW9ZFcFji6s08u3bKe05EY7Bni99cDzVqYerfb2vtW12S4jbEaPQ43nhrOr8JQL79A18BF32LRFAVJXiDdJMhgn7ID2eKnA67vgumdeD17mokZSkSDia6YcfqfyUOlBgKtFArC1CSTPUZNKWs93ExnulZMza8WhXKHdSRX2ESzZCkYy',
  useCdn: false,
  apiVersion: '2024-01-01',
});

const CATEGORY_DATA = [
  {
    slug: 'skin',
    data: {
      heroHeadline: "Elite Skin Care. Proven Results.",
      heroSubtext: "Restore your natural glow with advanced medical-grade aesthetics and US-FDA approved clinical skin treatments.",
      trustHeading: "Why Our Skin Care?",
      trustItems: [
        { title: 'Dermatologist-Led Care', desc: 'Every procedure is designed and supervised by qualified skin specialists to ensure 100% safety.' },
        { title: 'US-FDA Approved Tech', desc: 'We exclusively use world-class technology for treatments that are safe for all Indian skin types.' },
        { title: 'Visible Clinical Change', desc: 'See a measurable difference in your skin texture and tone within just a few sessions.' }
      ],
      faqHeading: "Frequently Asked Questions",
      faqItems: [
        { question: 'Are these treatments safe for sensitive skin?', answer: 'Yes! Our dermatologists perform a clinical skin analysis first and customize every setting to match your specific skin sensitivity and type.' },
        { question: 'How many sessions will I need?', answer: 'While many notice a "glow" after session one, we typically recommend a package of 4-6 sessions for deep clinical restoration.' },
        { question: 'Is there any downtime?', answer: 'Most of our advanced medical facials and laser treatments allow you to return to your daily routine immediately.' }
      ],
      finalCtaHeading: "Ready for Clinical Skin Perfection?",
      finalCtaSubtext: "Join 10,000+ happy patients who trust NeoFatbury for their skin transformation.",
      finalCtaBtn: "BOOK FREE SKIN ANALYSIS"
    }
  },
  {
    slug: 'hair',
    data: {
      heroHeadline: "Natural Hair. Permanent Results.",
      heroSubtext: "Restore your hairline and confidence with elite FUE/DHI transplantation and clinical hair-growth therapies performed by expert surgeons.",
      trustHeading: "Common Hair Concerns",
      trustItems: [
        { title: 'Surgeon-Performed', desc: 'Unlike others, our hair transplants are performed by senior specialist surgeons to ensure natural design.' },
        { title: 'Dense Packing', desc: 'We use advanced clinical protocols to achieve high-density results, providing a fuller, youthful look.' },
        { title: 'Comprehensive Care', desc: 'From medical-grade anti-dandruff solutions to regenerative therapies, we treat the root cause.' }
      ],
      faqHeading: "Frequently Asked Questions",
      faqItems: [
        { question: 'How natural will my hair transplant look?', answer: 'Extremely natural. Our surgeons specialize in "Natural-Front" hairline design, angling every graft to match your original growth.' },
        { question: 'Does the treatment hurt?', answer: 'We use advanced local anesthesia and "No-Pain" clinical protocols to ensure you are comfortable throughout.' },
        { question: 'Is the result permanent?', answer: 'Yes. The transplanted hair is taken from "permanent zones" that are resistant to balding, growing for a lifetime.' }
      ],
      finalCtaHeading: "Regrow Your Confidence Today",
      finalCtaSubtext: "Join thousands of patients who have restored their hair with our gold-standard clinical restoration.",
      finalCtaBtn: "BOOK HAIR ANALYSIS"
    }
  },
  {
    slug: 'slimming',
    data: {
      heroHeadline: "Sculpt Your Body. Without Surgery.",
      heroSubtext: "Target stubborn fat and achieve your dream silhouette with US-FDA approved CoolSculpting and clinical inch-loss programs.",
      trustHeading: "Why NeoFatbury Slimming?",
      trustItems: [
        { title: 'Non-Invasive Excellence', desc: 'Zero needles, zero surgery, and zero downtime. Return to work immediately.' },
        { title: 'Permanent Fat Reduction', desc: 'Targeted fat-freezing technology permanently eliminates fat cells in treated areas.' },
        { title: 'Physician-Supervised', desc: 'Every weight loss plan is customized and monitored by certified medical professionals.' }
      ],
      faqHeading: "Frequently Asked Questions",
      faqItems: [
        { question: 'How does non-surgical slimming work?', answer: 'We use advanced US-FDA technologies like Cryolipolysis (Fat Freezing) to destroy fat cells without affecting surrounding tissue.' },
        { question: 'When will I see the final results?', answer: 'You will notice changes as early as 3 weeks, with the most dramatic results appearing between 2 to 3 months.' },
        { question: 'Are the results permanent?', answer: 'Yes! Once the fat cells are eliminated through our clinical processes, they are gone for good.' }
      ],
      finalCtaHeading: "Start Your Transformation Today",
      finalCtaSubtext: "Book a clinical body assessment and discover which slimming program is right for your goals.",
      finalCtaBtn: "BOOK BODY ANALYSIS"
    }
  }
];

async function seed() {
  console.log('🚀 Starting Category Seeding...');

  for (const item of CATEGORY_DATA) {
    try {
      // Find the document by slug
      const docs = await client.fetch(`*[_type == "category" && slug.current == "${item.slug}"]`);
      
      if (docs.length === 0) {
        console.warn(`⚠️ Category with slug "${item.slug}" not found.`);
        continue;
      }

      const docId = docs[0]._id;
      console.log(`📝 Updating category: ${item.slug} (${docId})...`);

      await client
        .patch(docId)
        .set(item.data)
        .commit();

      console.log(`✅ Category "${item.slug}" updated successfully!`);
    } catch (err) {
      console.error(`❌ Error updating "${item.slug}":`, err);
    }
  }

  console.log('✨ Seeding Completed!');
}

seed();
