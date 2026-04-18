"use client";
import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LeadForm from '@/components/LeadForm';


// ─── Treatments Tab ───────────────────────────────────────────
const TREATMENTS = {
  Skin: {
    desc: 'Reveal your natural glow with Laser Hair Reduction, Acne Scar Revision, and Skin Brightening peels.',
    items: [
      { title: 'Laser Hair Removal',     img: '/images/laser-machine-banner.webp', href: '/skin/laser-hair-reduction' },
      { title: 'Acne Scar Treatment',    img: '/images/neofatbury-acne-scar-procedure.png', href: '/skin/acne-scar-treatment' },
      { title: 'Pimples Treatment',      img: '/images/neofatbury-cheek-banner.webp', href: '/skin/acne-treatment' },
      { title: 'Skin Lightening Treatment', img: '/images/derma-procedure-fixed.webp', href: '/skin/skin-brightening' },
      { title: 'Pigmentation Treatment', img: '/images/neofatbury-clinical-standard.png', href: '/skin/skin-brightening' },
    ],
  },
  Hair: {
    desc: 'Advanced clinical solutions for Hair Loss and Anti-Dandruff treatments designed by specialists.',
    items: [
      { title: 'Hair Loss Treatment',   img: '/images/neofatbury-hair2-banner.webp', href: '/hair/hair-loss-treatment' },
      { title: 'Hair Transplantation',  img: '/images/neofatbury-hair-standard.png', href: '/hair/hair-transplantation' },
      { title: 'Anti-Dandruff',         img: '/images/dermatologist_image.webp', href: '/hair/anti-dandruff-treatment' },
      { title: 'Hair Regrowth Therapy', img: '/images/neofatbury-hair-standard.png', href: '/hair/hair-loss-treatment' },
    ],
  },
  Body: {
    desc: 'Advanced non-surgical body contouring, including CoolSculpting (Fat Freezing) and targeted Inch Loss to help you achieve your desired shape.',
    items: [
      { title: 'CoolSculpting',          img: '/images/neofatbury-cooling-tech.png', href: '/slimming/coolsculpting-fat-freezing' },
      { title: 'Inch Loss Treatment',    img: '/images/neofatbury-slimming-standard.png', href: '/slimming/inch-loss-treatment' },
      { title: 'Weight Loss Program',    img: '/images/clinic-reception.webp', href: '/slimming/weight-loss-treatment' },
      { title: 'Body Contouring',        img: '/images/neofatbury-slimming-banner.webp', href: '/slimming' },
    ],
  },
};

export default function Home() {
  const [tab, setTab]                = useState<'Skin' | 'Hair' | 'Body'>('Skin');
  const [treatmentScroll, setTreatmentScroll] = useState(0);
  const [resultsSlide, setResultsSlide] = useState(0);

  const RESULTS = [
    { label: 'Laser Hair Reduction', sub: 'Achieve clear skin texture with US-FDA technology.', img: '/images/before-after-laser.webp' },
    { label: 'Acne Scar Healing', sub: 'Smoother skin and visible scar reduction.', img: '/images/acne-before-after.webp' },
    { label: 'CoolSculpting', sub: 'Visible inch loss and non-surgical body contouring.', img: '/images/neofatbury-slimming-result.png' },
  ];


  useEffect(() => {
    const row = document.getElementById('treatment-row');
    if (row) row.scrollLeft = treatmentScroll * 210;
  }, [treatmentScroll]);

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
            src="/images/neofatbury-hero-banner.webp" 
            alt="NeoFatbury Clinic" 
            fill 
            priority 
            style={{ objectFit: 'cover', objectPosition: '25% center' }} 
          />
          {/* stronger white overlay to create a text safe zone - adjusted for mobile */}
          <div className="hero-overlay" />
        </div>
        
        <div className="container hero-container" style={{ position: 'relative', zIndex: 10, display: 'grid', gridTemplateColumns: '0.8fr 1.2fr 1fr', alignItems: 'center', width: '100%', maxWidth: '1450px', gap: '2rem' }}>
          {/* Column 1: Empty space for the face */}
          <div className="hero-face-gap" />

          {/* Column 2: Hero Text */}
          <div className="hero-text" style={{ color: '#1a1a1a', animation: 'fadeInUp 0.8s ease-out forwards', textShadow: '0 1px 1px rgba(255,255,255,0.8)' }}>
            <h1 className="hero-title" style={{ fontWeight: '800', lineHeight: '1.2', marginBottom: '1.25rem' }}>
              <span style={{ color: '#00acb1' }}>Expert Skin, Hair & Slimming</span> <br/><span style={{ color: '#F39C12' }}>Clinic in Hyderabad</span>
            </h1>
            <p className="hero-sub" style={{ fontSize: '1.05rem', fontWeight: '600', marginBottom: '2rem', color: '#333', maxWidth: '500px', lineHeight: '1.6' }}>
              Transform your confidence with US-FDA approved treatments and expert dermatological care at NeoFatbury.
            </p>
            
            <div className="hero-trust-row" style={{ gap: '0.75rem' }}>
              <div className="trust-item" style={{ fontSize: '0.85rem' }}><span>✅</span> 10+ Years Expert</div>
              <div className="trust-item" style={{ fontSize: '0.85rem' }}><span>✅</span> US-FDA Tech</div>
              <div className="trust-item" style={{ fontSize: '0.85rem' }}><span>✅</span> 15k+ Success</div>
            </div>
          </div>
          
          {/* Column 3: Lead Form */}
          <div className="hero-form-wrap">
            <LeadForm />
          </div>
        </div>
        <style jsx>{`
          .hero-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
            background: linear-gradient(to right, rgba(255,255,255,0.3) 15%, transparent 60%);
          }
          .hero-title {
            font-size: clamp(2.2rem, 5vw, 3.4rem);
          }
          .hero-trust-row {
            display: flex;
            flex-wrap: wrap;
            gap: 1rem 1.5rem;
            color: #333;
            font-weight: 700;
            font-size: 0.95rem;
          }
          .trust-item {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            white-space: nowrap;
          }
          .hero-form-wrap {
            flex: 0 0 450px;
            maxWidth: 100%;
            animation: fadeInUp 0.8s ease-out 0.2s forwards;
            opacity: 0;
          }

          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @media (max-width: 900px) {
            .hero-section { padding: 3rem 0; min-height: 500px; }
            .hero-overlay {
              background: linear-gradient(to bottom, rgba(255,255,255,0.6) 20%, rgba(255,255,255,0.2) 70%);
            }
            .hero-container { grid-template-columns: 1fr !important; gap: 2rem !important; justify-content: center !important; text-align: center !important; padding: 0 1rem; }
            .hero-face-gap { display: none; }
            .hero-text { flex: 1 1 100% !important; margin-bottom: 2rem; }
            .hero-title { font-size: 2.2rem; }
            .hero-sub { margin-left: auto; margin-right: auto; font-size: 0.95rem; }
            .hero-trust-row { justify-content: center; gap: 0.5rem 1rem; }
            .hero-form-wrap { flex: 1 1 100% !important; display: flex; justify-content: center; width: 100%; }
          }

          @media (max-width: 640px) {
            .hero-section { padding: 2.5rem 0; }
            .hero-title { font-size: 1.85rem; }
            .hero-sub { font-size: 0.95rem; margin-bottom: 1.5rem; }
            .hero-trust-row { font-size: 0.85rem; flex-direction: column; align-items: center; gap: 0.5rem; }
            .trust-item { gap: 0.35rem; }
          }
        `}</style>
      </section>

      {/* SECTION 2: OUR TREATMENTS */}
      <section className="section" style={{ backgroundColor: '#fff' }}>
        <div className="container">
          <h2 className="section-title text-center">Our <span className="text-accent">Treatments</span></h2>
          <p className="section-subtitle text-center">Discover world-class dermatology and aesthetic care tailored to your goals.</p>
          
          {/* Tabs */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', margin: '2.5rem 0 1.5rem' }}>
            {(['Skin', 'Hair', 'Body'] as const).map(t => (
              <Link 
                key={t} 
                href={`/${t.toLowerCase() === 'body' ? 'slimming' : t.toLowerCase()}`}
                onClick={(e) => {
                  if (tab !== t) {
                    e.preventDefault();
                    setTab(t);
                    setTreatmentScroll(0);
                  }
                }}
                style={{ 
                  padding: '0.75rem 2.8rem', 
                  borderRadius: '12px', 
                  fontFamily: 'var(--font-heading)', 
                  fontWeight: '700', 
                  fontSize: '1rem', 
                  cursor: 'pointer', 
                  border: '1px solid',
                  borderColor: tab === t ? '#00acb1' : '#e5e7eb',
                  textDecoration: 'none',
                  color: tab === t ? 'white' : '#00acb1', 
                  backgroundColor: tab === t ? '#00acb1' : 'transparent', 
                  transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                  boxShadow: tab === t ? '0 8px 20px rgba(0,172,177,0.25)' : 'none',
                  textAlign: 'center'
                }}>
                {t}
              </Link>
            ))}
          </div>
 
          {/* Tab description */}
          <p style={{ textAlign: 'center', fontSize: '0.98rem', color: '#00acb1', maxWidth: '850px', margin: '0 auto 3rem', lineHeight: 1.8, fontWeight: '500', opacity: 0.9 }}>
            {TREATMENTS[tab].desc}
          </p>
 
          {/* Oliva-Inspired High-End Treatment Grid (Centered) */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2.5rem', marginTop: '4rem' }}>
            {TREATMENTS[tab].items.map((item, idx) => (
              <Link key={`${item.title}-${idx}`} href={item.href} className="treatment-card-oval" style={{ textDecoration: 'none', textAlign: 'center', position: 'relative', width: '200px' }}>
                <div className="oval-container-outer" style={{ position: 'relative', width: '200px', height: '280px', margin: '0 auto' }}>
                  {/* Inner Oval for Masking Image */}
                  <div className="oval-image-mask" style={{ position: 'relative', width: '100%', height: '100%', borderRadius: '100px', overflow: 'hidden', backgroundColor: '#f0f7f7', border: '4px solid white', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                    <Image 
                      src={item.img} 
                      alt={item.title} 
                      fill 
                      style={{ objectFit: 'cover', objectPosition: 'center' }} 
                      sizes="200px"
                    />
                  </div>
                  {/* Arrow circle overlapping the bottom border */}
                  <div className="oval-arrow">
                    <span style={{ fontSize: '1.4rem', fontWeight: 'bold' }}>→</span>
                  </div>
                </div>
                <h4 style={{ marginTop: '1.8rem', fontSize: '0.95rem', fontWeight: '600', color: '#1a1a1a', letterSpacing: '0.3px' }}>{item.title}</h4>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '3rem', padding: '0 1rem' }}>
            <Link href={`/${tab.toLowerCase() === 'body' ? 'slimming' : tab.toLowerCase()}`} className="btn btn-cyan" style={{ width: '100%', maxWidth: '500px', display: 'inline-block', padding: '1.2rem 1rem', borderRadius: '50px', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '800', backgroundColor: '#00acb1', fontSize: 'clamp(0.8rem, 4vw, 1.1rem)' }}>View our full results gallery</Link>
          </div>
        </div>
      </section>


      {/* SECTION 3: WHY NEOFATBURY STANDS OUT */}
      <section className="section" style={{ backgroundColor: '#fcfcfc', borderTop: '1px solid #f0f0f0', borderBottom: '1px solid #f0f0f0' }}>
        <div className="container text-center">
          <p style={{ color: '#00acb1', fontWeight: '700', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '0.75rem' }}>Why NeoFatbury Stands Out</p>
          <h2 className="section-title" style={{ marginBottom: '1rem' }}>Clinical Excellence, <span className="text-accent">Personal Care</span></h2>
          <div className="grid grid-4 mobile-grid-2" style={{ marginTop: '3.5rem' }}>
            {[
              { title: 'Dermatologist-Led', desc: 'Every treatment is supervised by qualified medical professionals.', icon: '👩‍⚕️' },
              { title: 'Safety First', desc: 'We exclusively use ISO-certified processes and internationally recognized equipment.', icon: '🛡️' },
              { title: 'No Hidden Costs', desc: 'Transparent pricing with detailed pre-treatment counseling.', icon: '💳' },
              { title: 'Convenient Locations', desc: 'Premium clinics located in the heart of Kukatpally and Himayatnagar.', icon: '📍' },
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

      {/* SECTION 4: TRANSFORMATIONS (RESULTS GALLERY) */}
      <section className="section" style={{ backgroundColor: '#fff', padding: '6rem 0' }}>
        <div className="container text-center">
          <p style={{ color: '#00acb1', fontWeight: '700', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '0.75rem' }}>Real Results</p>
          <h2 className="section-title">Clinical <span className="text-accent">Transformations</span></h2>
          <p className="section-subtitle" style={{ color: '#00acb1', fontWeight: '500', maxWidth: '700px', margin: '0 auto' }}>Witness the power of US-FDA approved technology and expert dermatological care.</p>
          
          <div 
            className="results-container" 
            style={{ position: 'relative', maxWidth: '720px', margin: '1.5rem auto', borderRadius: '16px', overflow: 'visible', paddingBottom: '1.5rem' }}
            onTouchStart={(e) => {
              const touch = e.touches[0];
              (window as any).startX = touch.clientX;
            }}
            onTouchEnd={(e) => {
              const touch = e.changedTouches[0];
              const endX = touch.clientX;
              const diff = (window as any).startX - endX;
              if (Math.abs(diff) > 50) {
                if (diff > 0) setResultsSlide(s => (s + 1) % RESULTS.length);
                else setResultsSlide(s => (s - 1 + RESULTS.length) % RESULTS.length);
              }
            }}
          >
            <div style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 15px 40px rgba(0,172,177,0.08)', border: '1px solid #f0f0f0' }}>
              <div style={{ display: 'flex', transition: 'transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)', transform: `translateX(-${resultsSlide * 100}%)` }}>
                {RESULTS.map((r, i) => (
                  <div key={i} style={{ flex: '0 0 100%', position: 'relative', backgroundColor: '#fdfdfd' }}>
                    <div style={{ position: 'relative', width: '100%', aspectRatio: '20/7', overflow: 'hidden' }}>
                      <Image src={r.img} alt={r.label} fill style={{ objectFit: 'cover', objectPosition: 'center', backgroundColor: '#f8f8f8' }} />
                    </div>
                    {/* Positioned labels at bottom for visibility - NO OVERLAP ON IMAGE */}
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '20%', background: 'white', padding: '1.25rem', borderTop: '1px solid #eee' }}>
                      <div className="flex flex-col items-center">
                        <span style={{ fontWeight: '900', color: '#00acb1', fontSize: '0.8rem', letterSpacing: '2px' }}>BEFORE</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <span style={{ fontWeight: '900', color: '#00acb1', fontSize: '0.8rem', letterSpacing: '2px' }}>AFTER</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Slider Dots */}
            <div className="slider-dots" style={{ marginTop: '1.5rem' }}>
              {RESULTS.map((_, i) => (
                <div key={i} className={`dot ${resultsSlide === i ? 'active' : ''}`} onClick={() => setResultsSlide(i)} style={{ cursor: 'pointer' }} />
              ))}
            </div>
          </div>
          
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center', padding: '0 1rem' }}>
            <Link href="/results" className="btn btn-cta gallery-cta" style={{ 
              padding: '1rem 2.5rem', 
              backgroundColor: '#00acb1', 
              color: 'white', 
              borderRadius: '50px', 
              fontWeight: '700', 
              fontSize: '0.9rem',
              boxShadow: '0 10px 25px rgba(0,172,177,0.3)',
              transition: 'all 0.3s',
              minWidth: '220px',
              textAlign: 'center'
            }}>View Our Full Results Gallery</Link>
          </div>
        </div>
      </section>

      {/* SECTION 5: DOCTORS & STATS */}
      <section style={{ backgroundColor: '#e8f6f7', padding: 'clamp(3rem, 8vw, 6rem) 0', overflow: 'hidden' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '3rem', flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 320px', position: 'relative', minHeight: 'clamp(300px, 45vh, 400px)', maxWidth: '100%' }}>
            <div style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: 'min(340px, 85vw)', height: 'min(340px, 85vw)', borderRadius: '50%', backgroundColor: '#00acb1', opacity: 0.18, zIndex: 0 }} />
            <div style={{ position: 'relative', zIndex: 1, height: '100%', minHeight: '300px' }}>
              <Image src="/images/dermatologist_image.webp" alt="NeoFatbury Expert Dermatologists" fill style={{ objectFit: 'contain', objectPosition: 'bottom center' }} />
            </div>
            {/* Badges - dynamic positions adjusted via CSS for mobile */}
            <div className="stat-badge badge-1" style={statBadge('top: 8%; left: -20px')}>🏅 <div><b>10+</b><br/>Years Exp</div></div>
            <div className="stat-badge badge-2" style={statBadge('top: 50%; right: -25px; transform: translateY(-50%)')}>📍 <div><b>2</b><br/>Clinics</div></div>
            <div className="stat-badge badge-3" style={statBadge('bottom: 10%; left: -10px')}>👥 <div><b>15K+</b><br/>Clients</div></div>
          </div>
          <div style={{ flex: '1 1 380px', textAlign: 'inherit' }}>
            <p style={{ color: '#00acb1', fontWeight: '600', fontSize: '0.9rem', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Expert Care</p>
            <h2 className="section-title" style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', color: '#004d4f', marginBottom: '1rem', lineHeight: 1.2 }}>Best Dermatologists &amp;<br/>Trichologists in Hyderabad</h2>
            <p style={{ color: '#00acb1', fontWeight: '500', marginBottom: '1.25rem' }}>Leading Skin, Hair &amp; Slimming Clinic in Hyderabad</p>
            <p style={{ color: '#006b6e', lineHeight: 1.8, marginBottom: '2.5rem', fontSize: '0.98rem', fontWeight: '500' }}>NeoFatbury is a chain of leading medico-aesthetic clinics, revolutionizing aesthetics in Hyderabad. Our expert specialists are rigorously trained to give real results for all your concerns.</p>
            <Link href="/our-doctors" className="btn btn-cyan btn-lg" style={{ padding: '1rem 2.5rem', backgroundColor: '#00acb1', borderRadius: '50px' }}>View Our Doctors →</Link>
          </div>
        </div>
        <style jsx>{`
        .results-slider-wrapper {
          position: relative;
          overflow: hidden;
          background: #000;
          border-radius: 12px;
        }
        .results-slides {
          display: flex;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          height: 100%;
        }
        .result-slide {
          flex: 0 0 100%;
          position: relative;
        }
        .nav-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: rgba(255,255,255,0.9);
          color: #00acb1;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          cursor: pointer;
          z-index: 10;
          border: none;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          transition: all 0.3s;
        }
        .nav-btn:hover { background: #00acb1; color: white; scale: 1.1; }
        .prev-btn { left: 20px; }
        .next-btn { right: 20px; }

        .oval-image-container {
          position: relative;
          width: 200px;
          height: 270px;
          border-radius: 100px;
          overflow: hidden;
          margin: 0 auto;
          background-color: #f9fbfb;
          border: 4px solid white;
          box-shadow: 0 12px 30px rgba(0,0,0,0.06);
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
        }
        .treatment-card-oval:hover .oval-image-container {
          transform: translateY(-8px);
          box-shadow: 0 20px 45px rgba(0,172,177,0.15);
          border-color: #00acb1;
        }
        .oval-arrow {
          position: absolute;
          bottom: -20px;
          left: 50%;
          transform: translateX(-50%);
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: #00acb1;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          box-shadow: 0 4px 15px rgba(0,0,0,0.25);
          z-index: 10;
          transition: all 0.3s ease;
          border: 2px solid white;
        }
        .treatment-card-oval:hover .oval-arrow {
          background: #008f92;
          transform: translateX(-50%) scale(1.1);
          box-shadow: 0 6px 20px rgba(0,172,177,0.4);
        }
        .treatment-card-oval:hover .oval-image-mask {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(0,0,0,0.1);
          border-color: #00acb1 !important;
        }
        .oval-image-mask {
          transition: all 0.4s ease;
        }

        .treatment-image-wrapper {
          position: relative;
          height: 320px;
          border-radius: 20px;
          overflow: hidden;
          margin-bottom: 1.5rem;
          transition: all 0.5s ease;
          box-shadow: 0 10px 30px rgba(0,0,0,0.06);
          border: 1px solid #f0f0f0;
        }
        .card-treatment-professional {
          display: block;
          transition: transform 0.3s ease;
        }
        .card-treatment-professional:hover .treatment-image-wrapper {
          transform: translateY(-10px);
          box-shadow: 0 20px 50px rgba(0,172,177,0.12);
        }
        .treatment-content h3 {
          font-size: 1.4rem;
          margin-bottom: 0.6rem;
          color: #1a1a1a;
          font-weight: 800;
          text-align: center;
        }
        .treatment-link {
          color: #00acb1;
          font-weight: 700;
          font-size: 0.95rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 0.5rem;
        }
        .treatment-link .arrow { transition: transform 0.3s ease; }
        .card-treatment-professional:hover .arrow { transform: translateX(5px); }

        @media (max-width: 1024px) {
          .results-container { max-width: 100% !important; border-radius: 0; }
          .nav-btn { width: 40px; height: 40px; font-size: 1.2rem; }
          .oval-image-container { width: 170px; height: 230px; }
          .treatment-image-wrapper { height: 260px; }
        }
          @media (max-width: 768px) {
            .container { justify-content: center; text-align: center; }
            .stat-badge { min-width: 120px !important; padding: 0.5rem 0.75rem !important; font-size: 0.8rem !important; }
            .badge-1 { top: 5% !important; left: 0 !important; }
            .badge-2 { top: 30% !important; right: 0 !important; }
            .badge-3 { bottom: 5% !important; left: 0 !important; }
          }
           @media (max-width: 480px) {
             .stat-badge { display: none !important; }
           }
        `}</style>
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
            {/* Kukatpally Branch */}
            <div className="card" style={{ padding: 0, overflow: 'hidden', borderRadius: '24px', backgroundColor: 'white', border: '1px solid #f0f0f0', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
              <div style={{ padding: '2.5rem' }}>
                <h3 style={{ fontSize: '1.4rem', color: '#00acb1', fontWeight: '800', marginBottom: '1rem' }}>Kukatpally Branch</h3>
                <p style={{ color: '#00898d', lineHeight: 1.6, marginBottom: '1.5rem', fontSize: '0.95rem', minHeight: '3em' }}>
                  4th Floor, Ganesh Plaza, JNTU - Hitech City Rd, K P H B Phase 3, Kukatpally, Hyderabad, 500085.
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#00acb1', fontWeight: '700' }}>
                  <span>📞 Call: </span>
                  <a href="tel:9700641000" style={{ color: '#00acb1', textDecoration: 'none' }}>9700641000</a>
                </div>
              </div>
              <div style={{ width: '100%', height: '350px', backgroundColor: '#eee' }}>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.4200823195633!2d78.39101459999999!3d17.4874492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91ddb45a8f99%3A0x7f1a789fc8a90d2!2sNeo%20Fatbury%20Kukatpally!5e0!3m2!1sen!2sin!4v1775875687552!5m2!1sen!2sin" 
                  width="100%" height="100%" style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                </iframe>
              </div>
            </div>

            {/* Himayatnagar Branch */}
            <div className="card" style={{ padding: 0, overflow: 'hidden', borderRadius: '24px', backgroundColor: 'white', border: '1px solid #f0f0f0', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
              <div style={{ padding: '2.5rem' }}>
                <h3 style={{ fontSize: '1.4rem', color: '#00acb1', fontWeight: '800', marginBottom: '1rem' }}>Himayatnagar Branch</h3>
                <p style={{ color: '#00898d', lineHeight: 1.6, marginBottom: '1.5rem', fontSize: '0.95rem', minHeight: '3em' }}>
                  4th Floor, Velma Bhavan, Beside Pantaloons, Himayatnagar, Hyderabad, 500029.
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#00acb1', fontWeight: '700' }}>
                  <span>📞 Call: </span>
                  <a href="tel:9700641000" style={{ color: '#00acb1', textDecoration: 'none' }}>9700641000</a>
                </div>
              </div>
              <div style={{ width: '100%', height: '350px', backgroundColor: '#eee' }}>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.411634567232!2d78.4835695!3d17.4040055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99da979f4281%3A0x4642220e895ec060!2sNeo%20Fatbury%20Hair%20Skin%20Slimming%20Clinic%20Himayatnagar!5e0!3m2!1sen!2sin!4v1775875842961!5m2!1sen!2sin" 
                  width="100%" height="100%" style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Floating WhatsApp Widget */}
      <a 
        href="https://wa.me/919700641000" 
        target="_blank" 
        rel="noopener noreferrer"
        style={{ 
          position: 'fixed', 
          bottom: '2rem', 
          right: '2rem', 
          zIndex: 1000, 
          width: '60px', 
          height: '60px', 
          backgroundColor: '#25D366', 
          borderRadius: '50%', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          boxShadow: '0 8px 30px rgba(0,0,0,0.25)',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        <svg width="34" height="34" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </>
  );
}

function statBadge(pos: string): React.CSSProperties {
  return {
    position: 'absolute',
    ...Object.fromEntries(pos.split(';').map(p => { const [k, v] = p.split(':').map(s => s.trim()); return [k, v]; })),
    zIndex: 2, display: 'flex', alignItems: 'center', gap: '0.6rem', backgroundColor: 'white', borderRadius: '10px', padding: '0.75rem 1rem', boxShadow: '0 4px 16px rgba(0,80,82,0.12)', minWidth: '145px',
  } as React.CSSProperties;
}

const sliderBtn: React.CSSProperties = { position: 'absolute', top: '50%', transform: 'translateY(-50%)', zIndex: 10, width: '44px', height: '44px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.4)', color: 'white', fontSize: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' };
