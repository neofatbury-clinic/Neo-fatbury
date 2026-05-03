import Image from "next/image";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import ReplicaHero from "@/components/ReplicaHero";
import TreatmentGrid from "@/components/TreatmentGrid";
import { client, urlFor } from "@/sanity/client";
import CustomSchema from "@/components/CustomSchema";

export const metadata = {
  title: 'Hair Clinic in Hyderabad | Hair Loss & Transplant Specialists - NeoFatbury',
  description: 'Expert hair care in Hyderabad (Kukatpally & Himayatnagar). Specializing in Hair Loss Treatment and Hair Transplantation. Regrow your confidence with NeoFatbury.',
};

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function HairPage() {
  // Fetch hair category data and services dynamically from Sanity
  const query = `{
    "category": *[_type == "category" && slug.current == "hair"][0] {
      ...,
      "heroImage": heroImage.asset->url,
      "seo": seo
    },
    "services": *[_type == "service" && category->slug.current == "hair"] | order(order asc) {
      name,
      shortDescription,
      "slug": slug.current,
      "image": heroImage.asset->url
    }
  }`;
  const { category, services: servicesData } = await client.fetch(query);

  // Fallback list of treatments
  const FALLBACK_HAIR = [
    { name: 'Hair Loss Treatment', slug: 'hair-loss-treatment', image: '/images/neofatbury-hair2-banner.webp', shortDescription: 'Targeted clinical solutions to stop hair fall and trigger regrowth.' },
    { name: 'Anti-Dandruff Treatment', slug: 'anti-dandruff-treatment', image: '/images/neofatbury-dandruff-clinical.png', shortDescription: 'Deep scalp cleansing and medical-grade dandruff solutions.' },
    { name: 'Hair Transplantation', slug: 'hair-transplantation', image: '/images/neofatbury-hair-standard.png', shortDescription: 'Elite FUE & DHI procedures for natural, long-lasting hair restoration.' },
  ];

  const services = (servicesData && servicesData.length > 0) ? servicesData : FALLBACK_HAIR;

  return (
    <>
      <CustomSchema schema={category?.seo?.customSchema} />
      <ReplicaHero 
        titleTeal1={category?.heroHeadline || "All Hair"}
        titleTeal2=""
        titleOrange1="Treatments"
        titleOrange2=""
        subtext={category?.heroSubtext || ""}
        imageSrc={category?.heroImage || "/images/All Hair Treatments.png"}
        leadFormTitle="Book Hair Analysis"
        slug="hair"
      />

      <section className="section" id="treatments">
        <div className="container">
          <div className="treatment-rect-grid" style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
            gap: '2rem', 
            marginTop: '3rem' 
          }}>
            {services.map((s: any) => {
              const sImg = (s.heroImage?.asset) ? urlFor(s.heroImage).url() : (s.image || '/images/neofatbury-hair2-banner.webp');
              return (
                <Link key={s.name} href={`/hair/${s.slug}`} className="treatment-rect-card" style={{ textDecoration: 'none' }}>
                  <div style={{ 
                    position: 'relative', 
                    width: '100%', 
                    aspectRatio: '4/3', 
                    borderRadius: '12px', 
                    overflow: 'hidden',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                    border: '1px solid #f0f0f0'
                  }}>
                    <Image src={sImg} alt={s.name} fill style={{ objectFit: 'cover' }} />
                    <div style={{ 
                      position: 'absolute', 
                      bottom: '1rem', 
                      right: '1rem', 
                      backgroundColor: 'rgba(0,172,177,0.9)', 
                      color: 'white', 
                      padding: '0.5rem 1rem', 
                      borderRadius: '50px',
                      fontSize: '0.8rem',
                      fontWeight: '700'
                    }}>
                      VIEW DETAILS →
                    </div>
                  </div>
                  <h3 style={{ 
                    marginTop: '1.25rem', 
                    fontSize: '1.2rem', 
                    fontWeight: '800', 
                    color: '#333',
                    textAlign: 'left'
                  }}>{s.name}</h3>
                  <p style={{ 
                    color: '#666', 
                    fontSize: '0.9rem', 
                    lineHeight: 1.5, 
                    marginTop: '0.5rem',
                    textAlign: 'left'
                  }}>Expert restoration for natural density and confidence.</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section bg-surface text-center">
        <div className="container">
          <h2 className="section-title">{category?.trustHeading || <>Common Hair <span className="text-accent">Concerns</span></>}</h2>
          <div className="grid grid-4 mobile-grid-2" style={{ marginTop: '3rem' }}>
            {(category?.trustItems && category.trustItems.length > 0) ? (
              category.trustItems.map((p: any, i: number) => (
                <div key={i} className="card" style={{ padding: '1.5rem' }}>
                  <h4 style={{ color: 'var(--color-primary)', marginBottom: '0.5rem' }}>{p.title}</h4>
                  <p style={{ fontSize: '0.9rem', color: '#666' }}>{p.desc}</p>
                </div>
              ))
            ) : (
              ['Pattern Balding', 'Thinning Crown', 'Receding Hairline', 'Excessive Shedding'].map(item => (
                <div key={item} className="card" style={{ padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>✓</div>
                  <h4 style={{ margin: 0 }}>{item}</h4>
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
          <h3 style={{ color: 'white', fontSize: '2.5rem', marginBottom: '1.5rem' }}>{category?.finalCtaHeading || "See the Difference"}</h3>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.25rem', marginBottom: '2.5rem' }}>{category?.finalCtaSubtext || "Every hair journey starts with a deep clinical analysis."}</p>
          <Link href="/contact-us" className="btn" style={{ backgroundColor: 'white', color: 'var(--color-primary)', fontWeight: '700' }}>{category?.finalCtaBtn || "Schedule Analysis"}</Link>
        </div>
      </section>
    </>
  );
}
