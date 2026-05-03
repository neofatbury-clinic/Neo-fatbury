import Image from "next/image";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import ReplicaHero from "@/components/ReplicaHero";
import TreatmentGrid from "@/components/TreatmentGrid";
import { client, urlFor } from "@/sanity/client";
import CustomSchema from "@/components/CustomSchema";

export const metadata = {
  title: 'Best Skin Clinic in Hyderabad | Dermatology & Aesthetics - NeoFatbury',
  description: 'Expert dermatology in Hyderabad (Kukatpally & Himayatnagar). Specialized in Laser Hair Reduction, Acne Treatment, Skin Brightening, and Scar Care.',
};

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function SkinPage() {
  // Fetch skin category data and services dynamically from Sanity
  const query = `{
    "category": *[_type == "category" && slug.current == "skin"][0] {
      ...,
      heroImage,
      "seo": seo
    },
    "services": *[_type == "service" && category->slug.current == "skin"] | order(order asc) {
      name,
      shortDescription,
      "slug": slug.current,
      heroImage
    }
  }`;
  const { category, services: servicesData } = await client.fetch(query);

  const heroImageSrc = (category?.heroImage?.asset) ? urlFor(category.heroImage).url() : "/images/All Skin Treatments.png";

  // Fallback list of treatments to ensure the page is never empty
  const FALLBACK_SKIN = [
    { name: 'Laser Hair Reduction', slug: 'laser-hair-reduction', image: '/images/laser-machine-banner.webp', shortDescription: 'Safe and permanent hair reduction using world-class laser technology.' },
    { name: 'Acne Scar Treatment', slug: 'acne-scar-treatment', image: '/images/neofatbury-acne-scar-procedure.png', shortDescription: 'Advanced clinical solutions for smooth, scar-free skin.' },
    { name: 'Skin Brightening', slug: 'skin-brightening', image: '/images/derma-procedure-fixed.webp', shortDescription: 'Target pigmentation and uneven skin tone for a radiant glow.' },
    { name: 'Scar Treatment', slug: 'scar-treatment', image: '/images/neofatbury-clinical-standard.png', shortDescription: 'Specialized clinical care for restoring skin texture and clinical perfection.' },
  ];

  const services = (servicesData && servicesData.length > 0) ? servicesData : FALLBACK_SKIN;

  return (
    <>
      <CustomSchema schema={category?.seo?.customSchema} />
      {/* 1. HERO SECTION (CMS Managed) */}
      <ReplicaHero 
        titleTeal1={category?.heroHeadline || "All Skin"}
        titleTeal2=""
        titleOrange1={category?.heroAccentLine || "Treatments"}
        titleOrange2=""
        subtext={category?.heroSubtext || ""}
        imageSrc={heroImageSrc}
        leadFormTitle="Book Skin Analysis"
        slug="skin"
      />

      {/* TREATMENTS GRID */}
      <section className="section" id="treatments">
        <div className="container">
          <h2 className="section-title text-center">Skin <span className="text-accent">Aesthetics</span></h2>
          <p className="section-subtitle text-center">{category?.description || "Comprehensive clinical solutions for every skin concern."}</p>
          
          <TreatmentGrid 
            treatments={services.map((s: any) => ({
              title: s.name,
              slug: s.slug,
              image: (s.heroImage?.asset) ? urlFor(s.heroImage).url() : (s.image || '/images/neofatbury-clinical-standard.png')
            }))} 
            defaultCategory="skin" 
          />
        </div>
      </section>

      {/* WHY OUR SKIN CARE (CMS Managed) */}
      <section className="section bg-surface">
        <div className="container">
          <h2 className="section-title text-center" style={{ marginBottom: '3rem' }}>{category?.trustHeading || <>Why Our <span className="text-accent">Skin Care?</span></>}</h2>
          <div className="grid grid-3 mobile-grid-1">
            {(category?.trustItems && category.trustItems.length > 0) ? (
              category.trustItems.map((p: any, i: number) => (
                <div key={i} className="card text-center" style={{ padding: '2.5rem' }}>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: 'var(--color-primary)' }}>{p.title}</h3>
                  <p className="text-muted">{p.desc}</p>
                </div>
              ))
            ) : (
              [
                { title: 'Advanced Technology', desc: 'We use the world’s most advanced lasers and clinical equipment.' },
                { title: 'Personalized Plans', desc: 'No two skins are the same. We tailor every treatment to your skin type.' },
                { title: 'Safe & Clinical', desc: 'Every procedure is performed in a 100% sterile environment.' },
              ].map((p, i) => (
                <div key={i} className="card text-center" style={{ padding: '2.5rem' }}>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: 'var(--color-primary)' }}>{p.title}</h3>
                  <p className="text-muted">{p.desc}</p>
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
                <details key={i} style={{ marginBottom: '1rem', border: '1px solid #eee', borderRadius: '8px', padding: '1rem' }}>
                  <summary style={{ fontWeight: '700', cursor: 'pointer', color: 'var(--color-primary)' }}>{faq.question}</summary>
                  <p style={{ marginTop: '1rem', color: '#555', lineHeight: 1.6 }}>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FINAL CTA (CMS Managed) */}
      <section className="section bg-primary text-center">
        <div className="container">
          <h3 style={{ color: 'white', fontSize: '2.5rem', marginBottom: '1.5rem' }}>{category?.finalCtaHeading || "Ready for Flawless Skin?"}</h3>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.25rem', marginBottom: '2.5rem' }}>{category?.finalCtaSubtext || "Book your clinical analysis with our expert dermatologists today."}</p>
          <Link href="/contact-us" className="btn" style={{ backgroundColor: 'white', color: 'var(--color-primary)', fontWeight: '700' }}>{category?.finalCtaBtn || "Schedule Appointment"}</Link>
        </div>
      </section>
    </>
  );
}
