// src/app/(website)/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import LeadForm from '@/components/LeadForm';
import HomeClient from '@/components/HomeClient';
import { client } from '@/sanity/lib/client';

export const revalidate = 60;

async function getHomeData() {
  const query = `{
    "settings": *[_type == "siteSettings"][0],
    "hero": *[_type == "homepage"][0],
    "services": *[_type == "homepage"][0].featuredTreatments[]-> {
      title,
      "slug": slug.current,
      category,
      "image": heroImage.asset->url
    },
    "results": *[_type == "homepage"][0].resultsSlider[] {
      label,
      "image": image.asset->url,
      quote
    }
  }`;
  return await client.fetch(query);
}

const RESULTS = [
  { label: 'Laser Hair Reduction', img: '/images/before-after-laser.webp' },
  { label: 'Acne Scar Healing', img: '/images/acne-before-after.webp' },
  { label: 'CoolSculpting', img: '/images/neofatbury-slimming-result.png' },
];

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
        
        <div className="container" style={{ position: 'relative', zIndex: 10, display: 'grid', gridTemplateColumns: '0.8fr 1.2fr 1fr', alignItems: 'center', width: '100%', maxWidth: '1450px', gap: '2rem' }}>
          <div className="hero-face-gap" />
          <div className="home-hero-text">
            <h1 className="home-hero-title">
              <span style={{ color: '#00acb1' }}>{hero?.heroHeadline || 'Expert Skin, Hair & Slimming'}</span> <br/>
              <span style={{ color: '#F39C12' }}>{hero?.heroAccentLine || 'Clinic in Hyderabad'}</span>
            </h1>
            <p className="home-hero-sub">
              {hero?.heroSubtext || 'Transform your confidence with US-FDA approved treatments and expert clinical care.'}
            </p>
            <div className="home-hero-trust-row">
              {(hero?.heroStats || [
                { number: '10+', label: 'Years Expert' },
                { number: 'US-FDA', label: 'Tech' },
                { number: '15k+', label: 'Success' }
              ]).map((stat: any, i: number) => (
                <div key={i} className="home-trust-item"><span>✅</span> {stat.number} {stat.label}</div>
              ))}
            </div>
          </div>
          <div className="hero-form-wrap">
            <LeadForm />
          </div>
        </div>
      </section>

      {/* SECTION 2: OUR TREATMENTS (FIXED IMAGES) */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="section-title text-center">{hero?.treatmentsSectionTitle || 'Our Premier Treatments'}</h2>
          <p className="section-subtitle text-center">{hero?.treatmentsSectionSubtitle || 'Discover world-class dermatology and aesthetic care tailored to your goals.'}</p>
          <HomeClient treatments={treatments} />
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link href="/results" className="btn btn-cyan" style={{ width: '100%', maxWidth: '500px', display: 'inline-block', padding: '1.2rem 1rem', borderRadius: '50px', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '800', backgroundColor: '#00acb1' }}>View our full results gallery</Link>
          </div>
        </div>
      </section>

      {/* SECTION 3: WHY NEOFATBURY STANDS OUT */}
      <section className="section" style={{ backgroundColor: '#fcfcfc', borderTop: '1px solid #f0f0f0', borderBottom: '1px solid #f0f0f0' }}>
        <div className="container text-center">
          <p style={{ color: '#00acb1', fontWeight: '700', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '0.75rem' }}>Why NeoFatbury Stands Out</p>
          <h2 className="section-title" style={{ marginBottom: '1rem' }}>{hero?.whyUsTitle || 'Clinical Excellence, Personal Care'}</h2>
          <div className="grid grid-4 mobile-grid-2" style={{ marginTop: '3.5rem' }}>
            {(hero?.whyUsPoints || [
              { title: 'Dermatologist-Led', description: 'Every treatment is supervised by qualified medical professionals.', icon: '👩‍⚕️' },
              { title: 'Safety First', description: 'We exclusively use ISO-certified processes and internationally recognized equipment.', icon: '🛡️' },
              { title: 'No Hidden Costs', description: 'Transparent pricing with detailed pre-treatment counseling.', icon: '💳' },
              { title: 'Convenient Locations', description: 'Premium clinics located in the heart of Kukatpally and Himayatnagar.', icon: '📍' },
            ]).map((p: any, i: number) => (
              <div key={i} className="card" style={{ padding: '2.5rem 1.5rem', backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.04)', border: '1px solid #f1f1f1' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1.25rem' }}>{p.icon}</div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: '#00acb1', fontWeight: '700' }}>{p.title}</h3>
                <p style={{ fontSize: '0.92rem', color: '#00acb1', opacity: 0.85, lineHeight: 1.6 }}>{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: TRANSFORMATIONS (RESTORED SLIDER IMAGES) */}
      <section className="section" style={{ backgroundColor: '#fff', padding: '6rem 0' }}>
        <div className="container text-center">
          <p style={{ color: '#00acb1', fontWeight: '700', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '0.75rem' }}>Real Results</p>
          <h2 className="section-title">Clinical <span className="text-accent">Transformations</span></h2>
          <p className="section-subtitle" style={{ color: '#00acb1', fontWeight: '500', maxWidth: '700px', margin: '0 auto' }}>Witness the power of US-FDA approved technology and expert dermatological care.</p>
          
          <div className="results-container" style={{ position: 'relative', maxWidth: '720px', margin: '3rem auto', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 15px 40px rgba(0,172,177,0.08)', border: '1px solid #f0f0f0' }}>
            <div style={{ display: 'flex', transition: 'transform 0.5s ease' }}>
              {RESULTS.map((r, i) => (
                <div key={i} style={{ flex: '0 0 100%', position: 'relative' }}>
                  <div style={{ position: 'relative', width: '100%', aspectRatio: '20/7' }}>
                    <Image src={r.img} alt={r.label} fill style={{ objectFit: 'cover' }} />
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'center', gap: '20%', background: 'white', padding: '1.25rem', borderTop: '1px solid #eee' }}>
                    <span style={{ fontWeight: '900', color: '#00acb1', fontSize: '0.8rem', letterSpacing: '2px' }}>BEFORE</span>
                    <span style={{ fontWeight: '900', color: '#00acb1', fontSize: '0.8rem', letterSpacing: '2px' }}>AFTER</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '1rem' }}>
            <Link href="/results" className="btn btn-cta" style={{ padding: '1rem 2.5rem', backgroundColor: '#00acb1', color: 'white', borderRadius: '50px', fontWeight: '700' }}>View Our Full Results Gallery</Link>
          </div>
        </div>
      </section>

      {/* SECTION 6: VISIT OUR CLINICS */}
      <section className="section bg-surface" style={{ padding: '6rem 0', borderTop: '1px solid #f0f0f0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <p style={{ color: '#00acb1', fontWeight: '700', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '0.75rem' }}>Find Us</p>
            <h2 className="section-title">Visit Our Clinics in <span className="text-accent">Hyderabad</span></h2>
            <p style={{ color: '#00acb1', fontWeight: '500', marginTop: '1rem' }}>Two premium clinics — conveniently located to serve you better.</p>
          </div>
          
          <div className="grid grid-2" style={{ gap: '3rem' }}>
            <div className="card" style={{ padding: 0, overflow: 'hidden', borderRadius: '24px', backgroundColor: 'white', border: '1px solid #f0f0f0', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
              <div style={{ padding: '2.5rem' }}>
                <h3 style={{ fontSize: '1.4rem', color: '#00acb1', fontWeight: '800', marginBottom: '1rem' }}>{settings?.branches?.[0]?.name || 'Kukatpally Branch'}</h3>
                <p style={{ color: '#00898d', lineHeight: 1.6, marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                  {settings?.branches?.[0]?.address || '4th Floor, Ganesh Plaza, JNTU - Hitech City Rd, Kukatpally, Hyderabad.'}
                </p>
              </div>
              <div style={{ width: '100%', height: '350px' }}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.4200823195633!2d78.39101459999999!3d17.4874492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91ddb45a8f99%3A0x7f1a789fc8a90d2!2sNeo%20Fatbury%20Kukatpally!5e0!3m2!1sen!2sin!4v1775875687552!5m2!1sen!2sin" width="100%" height="100%" style={{ border: 0 }} allowFullScreen={true} loading="lazy"></iframe>
              </div>
            </div>

            <div className="card" style={{ padding: 0, overflow: 'hidden', borderRadius: '24px', backgroundColor: 'white', border: '1px solid #f0f0f0', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
              <div style={{ padding: '2.5rem' }}>
                <h3 style={{ fontSize: '1.4rem', color: '#00acb1', fontWeight: '800', marginBottom: '1rem' }}>{settings?.branches?.[1]?.name || 'Himayatnagar Branch'}</h3>
                <p style={{ color: '#00898d', lineHeight: 1.6, marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                  {settings?.branches?.[1]?.address || '4th Floor, Velma Bhavan, Beside Pantaloons, Himayatnagar, Hyderabad.'}
                </p>
              </div>
              <div style={{ width: '100%', height: '350px' }}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.411634567232!2d78.4835695!3d17.4040055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99da979f4281%3A0x4642220e895ec060!2sNeo%20Fatbury%20Hair%20Skin%20Slimming%20Clinic%20Himayatnagar!5e0!3m2!1sen!2sin!4v1775875842961!5m2!1sen!2sin" width="100%" height="100%" style={{ border: 0 }} allowFullScreen={true} loading="lazy"></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
