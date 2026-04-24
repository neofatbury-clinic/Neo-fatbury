
import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'p8ddtj8e', 
  dataset: 'production',
  useCdn: false,
  token: 'skCI7MW9ZFcFji6s08u3bKe05EY7Bni99cDzVqYerfb2vtW12S4jbEaPQ43nhrOr8JQL79A18BF32LRFAVJXiDdJMhgn7ID2eKnA67vgumdeD17mokZSkSDia6YcfqfyUOlBgKtFArC1CSTPUZNKWs93ExnulZMza8WhXKHdSRX2ESzZCkYy',
  apiVersion: '2023-01-01',
});

const serviceHeads = [
  {
    slug: 'skin-brightening',
    title: 'Best Skin Brightening Treatment in Hyderabad | NeoFatbury Clinic',
    desc: 'Professional skin brightening and glutathione treatments for radiant, glowing skin. US-FDA approved technology at NeoFatbury Hyderabad.'
  },
  {
    slug: 'laser-hair-reduction',
    title: 'Permanent Laser Hair Reduction in Hyderabad | NeoFatbury',
    desc: 'Get smooth, hair-free skin with our US-FDA approved laser hair reduction treatments. Safe for all skin types. Expert doctors at NeoFatbury.'
  },
  {
    slug: 'hair-loss-treatment',
    title: 'Effective Hair Loss Treatment in Hyderabad | NeoFatbury Clinic',
    desc: 'Struggling with hair fall? Get clinical hair loss treatments including PRP, Meso, and more at NeoFatbury. Targeted solutions for thinning hair.'
  },
  {
    slug: 'weight-loss',
    title: 'Clinical Weight Loss Program in Hyderabad | NeoFatbury',
    desc: 'Scientific weight loss treatments designed for long-term results. Expert nutritionists and clinical procedures at NeoFatbury Hyderabad.'
  },
  {
    slug: 'inch-loss',
    title: 'Inch Loss & Body Contouring in Hyderabad | NeoFatbury',
    desc: 'Reshape your body with clinical inch loss treatments. Target stubborn fat with non-surgical body contouring technology at NeoFatbury.'
  },
  {
    slug: 'hair-transplantation',
    title: 'Advanced Hair Transplantation in Hyderabad | NeoFatbury',
    desc: 'Natural-looking hair transplants using advanced FUE/DHT techniques. High density and seamless results. Consult NeoFatbury experts today.'
  },
  {
    slug: 'acne-scar-treatment',
    title: 'Best Acne Scar Treatment in Hyderabad | NeoFatbury',
    desc: 'Eliminate deep acne scars, pits, and pigmentation. Clinical scar reduction using US-FDA laser technology at NeoFatbury Hyderabad.'
  },
  {
    slug: 'coolsculpting',
    title: 'CoolSculpting - Non-Surgical Fat Freezing in Hyderabad | NeoFatbury',
    desc: 'Freeze away stubborn fat with US-FDA approved CoolSculpting. No surgery, no downtime. Targeted fat reduction at NeoFatbury Hyderabad.'
  },
  {
    slug: 'anti-dandruff-treatment',
    title: 'Anti-Dandruff Clinical Solutions in Hyderabad | NeoFatbury',
    desc: 'Deep-cleansing clinical anti-dandruff treatments. Restore scalp health and eliminate persistent dandruff with NeoFatbury specialists.'
  },
  {
    slug: 'scar-treatment',
    title: 'Professional Scar Treatment in Hyderabad | NeoFatbury',
    desc: 'Clinical reduction of surgical, injury, or keloid scars. US-FDA approved laser and injection treatments for smooth skin at NeoFatbury.'
  }
];

async function updateHeads() {
  console.log('--- UPDATING SERVICE HEADS (SEO) ---');
  
  for (const head of serviceHeads) {
    try {
      // Find the document ID by slug
      const service = await client.fetch(`*[_type == "service" && slug.current == $slug][0]{_id}`, { slug: head.slug });
      
      if (service) {
        console.log(`Updating SEO for: ${head.slug} (${service._id})`);
        await client
          .patch(service._id)
          .set({
            seo: {
              metaTitle: head.title,
              metaDescription: head.desc,
              canonicalUrl: `https://neofatbury.co.in/services/${head.slug}` // Basic canonical fallback
            }
          })
          .commit();
        console.log(`✅ Success`);
      } else {
        console.log(`❌ Service not found for slug: ${head.slug}`);
      }
    } catch (error) {
      console.error(`❌ Error updating ${head.slug}:`, error);
    }
  }
  
  console.log('--- UPDATE COMPLETE ---');
}

updateHeads();
