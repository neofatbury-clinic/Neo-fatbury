// src/app/(website)/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import LeadForm from '@/components/LeadForm';
import HomeClient from '@/components/HomeClient';
import { client } from '@/sanity/lib/client';

export const revalidate = 60; // Refresh data every minute

async function getHomeData() {
  const query = `{
    "settings": *[_type == "siteSettings"][0],
    "hero": *[_type == "homepage"][0],
    "services": *[_type == "service"] {
      title,
      "slug": slug.current,
      category,
      "image": mainImage.asset->url
    }
  }`;
  return await client.fetch(query);
}

export default async function Home() {
  const data = await getHomeData();
  const { settings, hero, services } = data;

  const skinServices = services.filter((s: any) => s.category === 'skin');
  const hairServices = services.filter((s: any) => s.category === 'hair');
  const slimmingServices = services.filter((s: any) => s.category === 'slimming');

  const treatments = {
    skin: skinServices,
    hair: hairServices,
    slimming: slimmingServices
  };

  return (
    <>
      {/* SECTION 1: HERO */}
      <section className="hero-section" style={{ 
        position: 'relative', 
        overflow: 'hidden',
        padding: 'clamp(4rem, 8vw, 7rem) 0 4rem'
      }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
          <Image 
            src={hero?.heroImage?.asset?.url || "/images/neofatbury-hero-banner.webp"} 
            alt="NeoFatbury Clinic" 
            fill 
            priority 
            style={{ objectFit: 'cover', objectPosition: '25% center' }} 
          />
          <div className="hero-overlay" />
        </div>
        
        <div className="container hero-container" style={{ position: 'relative', zIndex: 10, display: 'grid', gridTemplateColumns: '0.8fr 1.2fr 1fr', alignItems: 'center', width: '100%', maxWidth: '1450px', gap: '2rem' }}>
          <div className="hero-face-gap" />

          <div className="hero-text" style={{ color: '#1a1a1a', textShadow: '0 1px 1px rgba(255,255,255,0.8)' }}>
            <h1 className="hero-title" style={{ fontWeight: '800', lineHeight: '1.2', marginBottom: '1.25rem' }}>
              <span style={{ color: '#00acb1' }}>{hero?.heroTitle || 'Expert Skin, Hair & Slimming'}</span> <br/><span style={{ color: '#F39C12' }}>{hero?.heroSubtitle || 'Clinic in Hyderabad'}</span>
            </h1>
            <p className="hero-sub" style={{ fontSize: '1.05rem', fontWeight: '600', marginBottom: '2rem', color: '#333', maxWidth: '500px', lineHeight: '1.6' }}>
              {hero?.heroDescription || 'Transform your confidence with US-FDA approved treatments.'}
            </p>
            
            <div className="hero-trust-row" style={{ gap: '0.75rem' }}>
              <div className="trust-item" style={{ fontSize: '0.85rem' }}><span>✅</span> 10+ Years Expert</div>
              <div className="trust-item" style={{ fontSize: '0.85rem' }}><span>✅</span> US-FDA Tech</div>
              <div className="trust-item" style={{ fontSize: '0.85rem' }}><span>✅</span> 15k+ Success</div>
            </div>
          </div>
          
          <div className="hero-form-wrap">
            <LeadForm />
          </div>
        </div>
        <style jsx>{`
          .hero-overlay {
            position: absolute; top: 0; left: 0; width: 100%; height: 100%; zIndex: 1;
            background: linear-gradient(to right, rgba(255,255,255,0.3) 15%, transparent 60%);
          }
          .hero-title { font-size: clamp(2.2rem, 5vw, 3.4rem); }
          .hero-trust-row { display: flex; flex-wrap: wrap; gap: 1rem 1.5rem; color: #333; font-weight: 700; font-size: 0.95rem; }
          .trust-item { display: flex; align-items: center; gap: 0.5rem; white-space: nowrap; }
          .hero-form-wrap { flex: 0 0 450px; maxWidth: 100%; }
          @media (max-width: 900px) {
            .hero-section { padding: 3rem 0; min-height: 500px; }
            .hero-container { grid-template-columns: 1fr !important; gap: 2rem !important; justify-content: center !important; text-align: center !important; padding: 0 1rem; }
            .hero-face-gap { display: none; }
            .hero-text { flex: 1 1 100% !important; margin-bottom: 2rem; }
            .hero-title { font-size: 2.2rem; }
            .hero-sub { margin-left: auto; margin-right: auto; font-size: 0.95rem; }
            .hero-form-wrap { flex: 1 1 100% !important; display: flex; justify-content: center; width: 100%; }
          }
        `}</style>
      </section>

      {/* SECTION 2: OUR TREATMENTS (DYNAMIC) */}
      <section className="section" style={{ backgroundColor: '#fff' }}>
        <div className="container">
          <h2 className="section-title text-center">Our <span className="text-accent">Treatments</span></h2>
          <p className="section-subtitle text-center">Discover world-class dermatology and aesthetic care tailored to your goals.</p>
          
          {/* CLIENT INTERACTIVE PART */}
          <HomeClient treatments={treatments} results={[]} />

          <div style={{ textAlign: 'center', marginTop: '3rem', padding: '0 1rem' }}>
            <Link href="/results" className="btn btn-cyan" style={{ width: '100%', maxWidth: '500px', display: 'inline-block', padding: '1.2rem 1rem', borderRadius: '50px', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '800', backgroundColor: '#00acb1', fontSize: 'clamp(0.8rem, 4vw, 1.1rem)' }}>View our full results gallery</Link>
          </div>
        </div>
      </section>

      {/* SECTION 3: WHY NEOFATBURY (STILL STATIC BUT STYLISH) */}
      <section className="section" style={{ backgroundColor: '#fcfcfc', borderTop: '1px solid #f0f0f0', borderBottom: '1px solid #f0f0f0' }}>
        <div className="container text-center">
          <p style={{ color: '#00acb1', fontWeight: '700', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '0.75rem' }}>Why NeoFatbury Stands Out</p>
          <h2 className="section-title" style={{ marginBottom: '1rem' }}>Clinical Excellence, <span className="text-accent">Personal Care</span></h2>
          <div className="grid grid-4 mobile-grid-2" style={{ marginTop: '3.5rem' }}>
            {[
              { title: 'Dermatologist-Led', desc: 'Every treatment is supervised by qualified medical professionals.', icon: '👩‍⚕️' },
              { title: 'Safety First', desc: 'We exclusively use internationall recognized equipment.', icon: '🛡️' },
              { title: 'No Hidden Costs', desc: 'Transparent pricing with detailed pre-treatment counseling.', icon: '💳' },
              { title: 'Convenient Locations', desc: `Located in ${settings?.branches?.[0]?.name || 'Kukatpally'} and ${settings?.branches?.[1]?.name || 'Himayatnagar'}.`, icon: '📍' },
            ].map((p, i) => (
              <div key={i} className="card" style={{ padding: '2.5rem 1.5rem', backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.04)', border: '1px solid #f1f1f1' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1.25rem' }}>{p.icon}</div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: '#00acb1', fontWeight: '700' }}>{p.title}</h3>
                <p style={{ fontSize: '0.92rem', color: '#00acb1', opacity: 0.85, lineHeight: 1.6 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: VISIT OUR CLINICS (DYNAMIC FROM SETTINGS) */}
      <section className="section bg-surface" style={{ padding: '6rem 0', borderTop: '1px solid #f0f0f0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <p style={{ color: '#00acb1', fontWeight: '700', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '0.75rem' }}>Find Us</p>
            <h2 className="section-title">Visit Our Clinics in <span className="text-accent">Hyderabad</span></h2>
          </div>
          
          <div className="grid grid-2" style={{ gap: '3rem' }}>
            {settings?.branches?.map((branch: any, idx: number) => (
              <div key={idx} className="card" style={{ padding: 0, overflow: 'hidden', borderRadius: '24px', backgroundColor: 'white', border: '1px solid #f0f0f0', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                <div style={{ padding: '2.5rem' }}>
                  <h3 style={{ fontSize: '1.4rem', color: '#00acb1', fontWeight: '800', marginBottom: '1rem' }}>{branch.name}</h3>
                  <p style={{ color: '#00898d', lineHeight: 1.6, marginBottom: '1.5rem', fontSize: '0.95rem', minHeight: '3em' }}>{branch.address}</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#00acb1', fontWeight: '700' }}>
                    <span>📞 {branch.phone}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
