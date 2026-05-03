import Image from "next/image";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import ReplicaHero from "@/components/ReplicaHero";
import TreatmentGrid from "@/components/TreatmentGrid";
import { client, urlFor } from "@/sanity/client";
import CustomSchema from "@/components/CustomSchema";

export const metadata = {
  title: 'Slimming & Weight Loss Clinic in Hyderabad - NeoFatbury',
  description: 'Top-rated body contouring and weight loss in Hyderabad. Offering US-FDA approved CoolSculpting, Cryolipolysis, and clinical weight loss programs.',
};

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function SlimmingPage() {
  // Fetch slimming category data and services dynamically from Sanity
  const query = `{
    "category": *[_type == "category" && slug.current == "slimming"][0] {
      ...,
      "heroImage": heroImage.asset->url,
      "seo": seo
    },
    "services": *[_type == "service" && category->slug.current == "slimming"] | order(order asc) {
      name,
      shortDescription,
      "slug": slug.current,
      "image": heroImage
    }
  }`;
  const { category, services: servicesData } = await client.fetch(query);

  // Fallback list of treatments
  const FALLBACK_SLIMMING = [
    { name: 'CoolSculpting', slug: 'coolsculpting', image: '/images/neofatbury-cooling-tech.png', shortDescription: 'The world’s most advanced non-surgical fat reduction technique.' },
    { name: 'Weight Loss', slug: 'weight-loss', image: '/images/clinic-reception.webp', shortDescription: 'Safe, medical-grade weight management plans for long-term health.' },
    { name: 'Inch Loss', slug: 'inch-loss', image: '/images/neofatbury-slimming-standard.png', shortDescription: 'Target stubborn fat pockets with precision clinical contouring.' },
  ];

  const services = (servicesData && servicesData.length > 0) ? servicesData : FALLBACK_SLIMMING;

  return (
    <>
      <CustomSchema schema={category?.seo?.customSchema} />
      <ReplicaHero 
        titleTeal1={category?.heroHeadline || "All Slimming"}
        titleTeal2=""
        titleOrange1="Treatments"
        titleOrange2=""
        subtext={category?.heroSubtext || ""}
        imageSrc={category?.heroImage || "/images/neofatbury-slimming-hero.png"}
        leadFormTitle="Book Body Analysis"
      />

      <section className="section" id="treatments">
        <div className="container">
          <h2 className="section-title text-center">Body & <span className="text-accent">Slimming</span></h2>
          <p className="section-subtitle text-center">{category?.description || "Targeted fat reduction and comprehensive inch-loss programs."}</p>
          
          <TreatmentGrid 
            treatments={services.map((s: any) => ({
              title: s.name,
              slug: s.slug,
              image: (s.image?.asset) ? urlFor(s.image).url() : '/images/neofatbury-clinical-standard.png'
            }))} 
            defaultCategory="slimming" 
          />
        </div>
      </section>

      <section className="section bg-surface text-center">
        <div className="container">
          <h2 className="section-title">{category?.trustHeading || <>Why NeoFatbury <span className="text-accent">Slimming?</span></>}</h2>
          <div className="grid grid-3 mobile-grid-1" style={{ marginTop: '3rem' }}>
             {(category?.trustItems && category.trustItems.length > 0) ? (
               category.trustItems.map((p: any, i: number) => (
                 <div key={i} className="card" style={{ padding: '2.5rem' }}>
                    <h4 style={{ color: 'var(--color-primary)', fontSize: '1.2rem', marginBottom: '0.75rem' }}>{p.title}</h4>
                    <p className="text-muted" style={{ fontSize: '0.95rem' }}>{p.desc}</p>
                 </div>
               ))
             ) : (
               [
                 { title: 'US-FDA Approved', desc: 'We only use clinically validated technologies like CoolSculpting.' },
                 { title: 'Medical Supervision', desc: 'All weight loss plans are designed by certified clinical nutritionists.' },
                 { title: 'Sustainable Results', desc: 'Focus on healthy metabolism for results that last long-term.' },
               ].map((p, i) => (
                 <div key={i} className="card" style={{ padding: '2.5rem' }}>
                    <h4 style={{ color: 'var(--color-primary)', fontSize: '1.2rem', marginBottom: '0.75rem' }}>{p.title}</h4>
                    <p className="text-muted" style={{ fontSize: '0.95rem' }}>{p.desc}</p>
                 </div>
               ))
             )}
          </div>
        </div>
      </section>

      {/* FAQ SECTION (CMS Managed) */}
      {category?.faqItems && category.faqItems.length > 0 && (
        <section className="section bg-white">
          <div className="container" style={{ maxWidth: '800px' }}>
            <h2 className="section-title text-center">{category?.faqHeading || "Frequently Asked Questions"}</h2>
            <div style={{ marginTop: '3rem' }}>
              {category.faqItems.map((faq: any, i: number) => (
                <details key={i} style={{ marginBottom: '1rem', border: '1px solid #eee', borderRadius: '8px', padding: '1rem', textAlign: 'left' }}>
                  <summary style={{ fontWeight: '700', cursor: 'pointer', color: 'var(--color-primary)' }}>{faq.question}</summary>
                  <p style={{ marginTop: '1rem', color: '#555', lineHeight: 1.6 }}>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section bg-primary text-center">
        <div className="container">
          <h3 style={{ color: 'white', fontSize: '2.5rem', marginBottom: '1.5rem' }}>{category?.finalCtaHeading || "Start Your Body Transformation"}</h3>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.25rem', marginBottom: '2.5rem' }}>{category?.finalCtaSubtext || "Reach your weight goals with expert medical guidance."}</p>
          <Link href="/contact-us" className="btn" style={{ backgroundColor: 'white', color: 'var(--color-primary)', fontWeight: '700' }}>{category?.finalCtaBtn || "Book Body Analysis"}</Link>
        </div>
      </section>
    </>
  );
}
