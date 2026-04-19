import Image from "next/image";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import { client } from "@/sanity/lib/client";

export const metadata = {
  title: 'Hair Clinic in Hyderabad | Hair Loss & Transplant Specialists - NeoFatbury',
  description: 'Expert hair care in Hyderabad (Kukatpally & Himayatnagar). Specializing in Hair Loss Treatment and Hair Transplantation. Regrow your confidence with NeoFatbury.',
};

export default async function HairPage() {
  // Fetch hair services dynamically
  const query = `*[_type == "service" && category->slug.current == "hair"] | order(order asc) {
    name,
    shortDescription,
    "slug": slug.current,
    "image": heroImage.asset->url
  }`;
  const services = await client.fetch(query);

  return (
    <>
      <section className="service-hero" style={{ backgroundImage: 'url(/images/hair-loss-bg.png)', backgroundPosition: 'left center' }}>
        <div className="container">
          <div className="service-hero-grid">
            <div className="service-hero-text">
              <p className="hero-label">ADVANCED TRICHOLOGY</p>
              <h1>Reclaim Your Hair,<br/><span className="accent">Restore Confidence</span></h1>
              <p>Specialized treatments for thinning, balding, and scalp rejuvenation. Regrow your natural hair with clinical precision.</p>
              <div className="hero-trust-badges">
                <div className="hero-trust-badge"><span>👨‍⚕️</span><span>HAIR SPECIALISTS</span></div>
                <div className="hero-trust-badge"><span>💎</span><span>NATURAL RESULTS</span></div>
              </div>
            </div>
            <div className="service-hero-form"><LeadForm title="Book Hair Analysis" /></div>
          </div>
        </div>
      </section>

      <section className="section" id="treatments">
        <div className="container">
          <h2 className="section-title text-center">Hair <span className="text-accent">Solutions</span></h2>
          <p className="section-subtitle text-center">Clinically proven restoration for men and women.</p>
          
          <div className="grid grid-2" style={{ marginTop: '3rem', maxWidth: '1000px', margin: '3rem auto 0' }}>
            {services.map((s: any) => (
              <div key={s.name} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ position: 'relative', height: '260px', marginBottom: '1.5rem', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
                  <Image src={s.image || '/images/neofatbury-hair2-banner.webp'} alt={s.name} fill style={{ objectFit: 'cover' }} />
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>{s.name}</h3>
                <p className="text-muted" style={{ marginBottom: '1.5rem', flexGrow: 1, lineHeight: 1.6 }}>{s.shortDescription}</p>
                <Link href={`/hair/${s.slug}`} className="btn btn-outline" style={{ width: 'fit-content' }}>Learn More</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-surface text-center">
        <div className="container">
          <h2 className="section-title">Common Hair <span className="text-accent">Concerns</span></h2>
          <div className="grid grid-4 mobile-grid-2" style={{ marginTop: '3rem' }}>
            {['Pattern Balding', 'Thinning Crown', 'Receding Hairline', 'Excessive Shedding'].map(item => (
              <div key={item} className="card" style={{ padding: '1.5rem' }}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>✓</div>
                <h4 style={{ margin: 0 }}>{item}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-primary text-center">
        <div className="container">
          <h3 style={{ color: 'white', fontSize: '2.5rem', marginBottom: '1.5rem' }}>See the Difference</h3>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.25rem', marginBottom: '2rem' }}>Every hair journey starts with a deep clinical analysis.</p>
          <Link href="/contact-us" className="btn" style={{ backgroundColor: 'white', color: 'var(--color-primary)', fontWeight: '700' }}>Schedule Analysis</Link>
        </div>
      </section>
    </>
  );
}
