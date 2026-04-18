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

  const treatments = {
    skin: services?.filter((s: any) => s.category === 'skin') || [],
    hair: services?.filter((s: any) => s.category === 'hair') || [],
    slimming: services?.filter((s: any) => s.category === 'slimming') || []
  };

  return (
    <>
      {/* SECTION 1: HERO */}
      <section className="home-hero">
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
          <Image 
            src={hero?.heroImage?.asset?.url || "/images/neofatbury-hero-banner.webp"} 
            alt="NeoFatbury Clinic" 
            fill 
            priority 
            style={{ objectFit: 'cover', objectPosition: '25% center' }} 
          />
          <div className="home-hero-overlay" />
        </div>
        
        <div className="container" style={{ position: 'relative', zIndex: 10, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '3rem' }}>
          <div className="home-hero-text" style={{ flex: '1 1 500px' }}>
            <h1 className="home-hero-title">
              <span style={{ color: '#00acb1' }}>{hero?.heroTitle || 'Expert Skin, Hair & Slimming'}</span> <br/>
              <span style={{ color: '#F39C12' }}>{hero?.heroSubtitle || 'Clinic in Hyderabad'}</span>
            </h1>
            <p className="home-hero-sub">
              {hero?.heroDescription || 'Transform your confidence with US-FDA approved treatments and expert clinical care.'}
            </p>
            
            <div className="home-hero-trust-row">
              <div className="home-trust-item"><span>✅</span> 10+ Years Expert</div>
              <div className="home-trust-item"><span>✅</span> US-FDA Tech</div>
              <div className="home-trust-item"><span>✅</span> 15k+ Success</div>
            </div>
          </div>
          
          <div style={{ flex: '0 0 auto', width: '100%', maxWidth: '450px' }}>
            <div className="bg-white p-6 rounded-3xl shadow-2xl border border-gray-100">
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: OUR TREATMENTS (DYNAMIC) */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="section-title text-center">Our <span className="text-accent">Treatments</span></h2>
          <p className="section-subtitle text-center">Discover world-class dermatology and aesthetic care tailored to your goals.</p>
          
          <HomeClient treatments={treatments} results={[]} />

          <div style={{ textAlign: 'center', marginTop: '3rem', padding: '0 1rem' }}>
            <Link href="/results" className="btn btn-cyan" style={{ width: '100%', maxWidth: '500px', display: 'inline-block', padding: '1.2rem 1rem', borderRadius: '50px', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '800', backgroundColor: '#00acb1', fontSize: 'clamp(0.8rem, 4vw, 1.1rem)' }}>View our full results gallery</Link>
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
