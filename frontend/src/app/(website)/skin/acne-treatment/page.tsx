"use client";
import Image from "next/image";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";

export default function AcneTreatment() {
  return (
    <>
      {/* 1. HERO SECTION - TRIPLE PILLAR */}
      <section className="service-hero" style={{ backgroundImage: 'url(/images/acne-scar-bg.png)', backgroundPosition: 'left center' }}>
        <div className="container">
          <div className="service-hero-grid">
            {/* Visual Subject migrated to background */}
            <div className="service-hero-text">
              <h1>Clear Skin.<br/><span className="accent">Beat Acne Forever.</span></h1>
              <p>Advanced clinical acne solutions designed to eliminate breakouts and prevent future scarring. Customized protocols for permanent skin health.</p>
              <div className="hero-trust-badges">
                <div className="hero-trust-badge"><span>🛡️</span><span>CLINICALLY SAFE</span></div>
                <div className="hero-trust-badge"><span>✨</span><span>CLEAR RESULTS</span></div>
              </div>
            </div>
            <div className="service-hero-form"><LeadForm /></div>
          </div>
        </div>
      </section>

      {/* 2. PROBLEM SECTION WITH ICONS */}
      <section className="section bg-surface text-center" style={{ padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '1100px' }}>
          <h2 className="section-title" style={{ fontSize: '2.8rem' }}>Stubborn Acne <span className="text-accent">Won’t Go Away?</span></h2>
          <div className="grid grid-4" style={{ marginTop: '4rem', gap: '1.5rem' }}>
            {[
              { title: "Active Breakouts", desc: "Persistent pimples, whiteheads, and painful blackheads that don't respond to usual care.", icon: "🌋" },
              { title: "Excessive Oil", desc: "Constant greasy look and clogged pores leading to recurrent flare-ups.", icon: "🛢️" },
              { title: "Painful Cysts", desc: "Deep, inflamed acne that causes discomfort and risk of permanent marking.", icon: "🔥" },
              { title: "Red Marks", desc: "Visible post-acne redness and dark spots that mar your complexion.", icon: "🌑" }
            ].map(item => (
              <div key={item.title} className="card-sleek">
                <div style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>{item.icon}</div>
                <h3 style={{ fontSize: '1.15rem', marginBottom: '1rem', color: 'var(--color-primary)', fontWeight: '800' }}>{item.title}</h3>
                <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: '1.7' }}>{item.desc}</p>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '1.3rem', marginTop: '4.5rem', fontWeight: '700', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}>
            Acne is treatable — <span className="text-accent" style={{ borderBottom: '2px solid rgba(39, 166, 156, 0.3)' }}>we help restore your skin’s health and lasting clarity.</span>
          </p>
        </div>
      </section>

      {/* 3. WHAT IS ACNE TREATMENT */}
      <section className="section">
        <div className="container grid grid-2 items-center gap-6">
          <div style={{ position: 'relative', height: '550px', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 25px 55px rgba(0,0,0,0.1)' }}>
            <Image src="/images/neofatbury-acne-scar-procedure.png" alt="Acne Treatment Procedure" fill style={{ objectFit: 'cover' }} />
            <div style={{ position: 'absolute', bottom: '2rem', left: '2rem', background: 'white', padding: '0.75rem 1.5rem', borderRadius: '12px', fontSize: '0.9rem', fontWeight: '800', color: 'var(--color-primary)', boxShadow: '0 8px 20px rgba(0,0,0,0.15)' }}>NEOFATBURY CLINICAL STANDARD</div>
          </div>
          <div style={{ paddingLeft: '3.5rem' }}>
            <h2 className="section-subtitle" style={{ color: 'var(--color-accent)', fontWeight: '900', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '2.5px', fontSize: '1rem' }}>Scientific Control</h2>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '2rem', fontSize: '2.8rem' }}>What is <span className="text-accent">Acne Treatment?</span></h2>
            <p className="text-muted" style={{ fontSize: '1.15rem', marginBottom: '2.5rem', lineHeight: '1.8' }}>
              Our clinical acne treatment addresses the root causes—targeting bacteria, controlling inflammation, and regulating sebum to clear existing acne and prevent new flare-ups.
            </p>
            <h4 style={{ marginBottom: '1.5rem', fontSize: '1.2rem', fontWeight: '800' }}>Common treatments include:</h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '3.5rem' }}>
              {[
                { t: 'Laser Therapy', i: '⚡' },
                { t: 'Medi-Facials', i: '💆‍♀️' },
                { t: 'Chemical Peels', i: '🧴' },
                { t: 'Advanced Topicals', i: '💊' }
              ].map(point => (
                <div key={point.t} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontWeight: '800', color: '#004d4f', fontSize: '1.05rem' }}>
                  <span style={{ fontSize: '1.4rem' }}>{point.i}</span> {point.t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. BEFORE / AFTER SECTION */}
      <section className="section text-center">
        <div className="container">
          <h2 className="section-title" style={{ fontSize: '2.8rem' }}>Visible <span className="text-accent">Clarity</span></h2>
          <p className="section-subtitle">See noticeable skin clearing and reduced inflammation results.</p>
          <div style={{ maxWidth: '480px', margin: '2rem auto', position: 'relative', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 15px 40px rgba(0,0,0,0.1)' }}>
            <div style={{ position: 'relative', width: '100%', aspectRatio: '16/6' }}>
              <Image src="/images/neofatbury-acne-scar-ba.png" alt="Acne Treatment Results" fill style={{ objectFit: 'cover' }} />
            </div>
            <div style={{ position: 'absolute', bottom: '0', left: '0', width: '100%', background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)', padding: '1rem', display: 'flex', justifyContent: 'center', gap: '15vw' }}>
              <span style={{ color: 'white', fontWeight: '900', letterSpacing: '3px', fontSize: '0.85rem', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>BEFORE</span>
              <span style={{ color: 'white', fontWeight: '900', letterSpacing: '3px', fontSize: '0.85rem', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>AFTER</span>
            </div>
          </div>
          <p style={{ fontSize: '1.2rem', fontWeight: '800', marginBottom: '3rem', color: 'var(--color-primary)' }}>Start Your Clear Skin Journey Today</p>
          <Link href="/contact-us" className="btn btn-primary" style={{ padding: '1.25rem 4rem', fontSize: '1.1rem' }}>Start Your Journey</Link>
        </div>
      </section>

      {/* 6. BENEFITS SECTION WITH ICONS */}
      <section className="section bg-surface">
        <div className="container">
          <h2 className="section-title text-center">Benefits of <span className="text-accent">Acne Treatment</span></h2>
          <div className="grid grid-5" style={{ marginTop: '4.5rem', gap: '1.5rem' }}>
            {[
              { t: "Reduced breakouts", i: "🌋" },
              { t: "Oil control", i: "🛢️" },
              { t: "Faded marks", i: "🎯" },
              { t: "Calmer skin", i: "🧊" },
              { t: "Confidence", i: "🌟" }
            ].map(benefit => (
              <div key={benefit.t} className="card-benefit" style={{ padding: '2.5rem 1.5rem', textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1.25rem' }}>{benefit.i}</div>
                <p style={{ fontWeight: '800', fontSize: '1rem', color: 'var(--color-primary)' }}>{benefit.t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. TECHNOLOGY SECTION */}
      <section className="section bg-surface">
        <div className="container grid grid-2 items-center gap-6">
          <div style={{ paddingRight: '3.5rem' }}>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '2rem', fontSize: '2.8rem' }}>Advanced <span className="text-accent">Acne Technology</span></h2>
            <p className="text-muted" style={{ fontSize: '1.15rem', marginBottom: '3rem', lineHeight: '1.8' }}>
              We use clinically proven techniques and FDA-approved technology to safely resolve acne and restore skin health for all ages.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
               {[
                 { t: 'High-precision lasers', i: '💎' },
                 { t: 'Safe clinical peels', i: '🧴' },
                 { t: 'Expert dermatologists', i: '👨‍⚕️' }
               ].map(p => (
                 <div key={p.t} style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontWeight: '800', fontSize: '1.1rem' }}>
                   <span style={{ fontSize: '1.4rem' }}>{p.i}</span> {p.t}
                 </div>
               ))}
            </div>
          </div>
          <div style={{ position: 'relative', height: '480px', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 25px 55px rgba(0,0,0,0.1)' }}>
            <Image src="/images/neofatbury-acne-scar-banner.png" alt="Clinical Authority" fill style={{ objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      {/* 11. TRUST SECTION */}
      <section className="section text-center">
        <div className="container">
          <h2 className="section-title">Why Choose <span className="text-accent">Neo Clinic?</span></h2>
          <div className="grid grid-4" style={{ marginTop: '5rem', gap: '1.5rem' }}>
            {[
              { t: "Expert doctors", i: "👨‍⚕️" },
              { t: "Advanced tech", i: "🔬" },
              { t: "Proven results", i: "🏆" },
              { t: "Safe care", i: "🛡️" }
            ].map(item => (
              <div key={item.t} className="card-trust">
                <div style={{ fontSize: '2.8rem', marginBottom: '1.5rem' }}>{item.i}</div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: '800', color: 'var(--color-primary)' }}>{item.t}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. FINAL CTA */}
      <section className="section bg-primary text-white text-center" style={{ padding: '5rem 0' }} id="book">
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 6vw, 3.2rem)', color: 'white', marginBottom: '1.5rem', fontWeight: '900' }}>Ready for Clear Skin?</h2>
          <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.95)', marginBottom: '3rem', fontWeight: '500' }}>Schedule your skin analysis and start your journey towards acne-free skin today.</p>
          <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact-us" className="btn btn-accent" style={{ padding: '1.25rem 3.5rem', fontSize: '1.1rem', fontWeight: '900' }}>Book Appointment</Link>
            <a href="tel:9700641000" className="btn" style={{ backgroundColor: 'white', color: 'var(--color-primary)', padding: '1.25rem 3.5rem', fontSize: '1.1rem', fontWeight: '900' }}>Get Free Consultation</a>
          </div>
        </div>
      </section>

      <style jsx>{`
        .service-hero {
          position: relative;
          overflow: hidden;
          min-height: 600px;
          display: flex;
          align-items: center;
          padding: 3rem 0;
        }
        .hero-bg-img {
          position: absolute;
          inset: 0;
          z-index: 0;
        }
        .hero-bg-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to right, rgba(255,255,255,0.97) 45%, rgba(255,255,255,0.5) 70%, transparent 100%);
        }
        .service-hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
          width: 100%;
        }
        @media (max-width: 1024px) {
          .service-hero-grid { grid-template-columns: 1fr; text-align: center; gap: 2rem; }
          .service-hero-text { display: flex; flex-direction: column; align-items: center; }
          .hero-bg-overlay { background: rgba(255,255,255,0.88); }
        }
        .service-hero-container {
          position: relative;
          z-index: 2;
          width: 100%;
          animation: fadeInUp 0.8s ease-out forwards;
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .trust-item-sleek {
          background: #f0ffff;
          padding: 0.75rem 1.5rem;
          border-radius: 60px;
          font-weight: 800;
          font-size: 0.95rem;
          color: #004d4f;
          border: 1px solid rgba(39, 166, 156, 0.25);
          box-shadow: 0 4px 12px rgba(0,0,0,0.03);
        }
        .card-sleek {
          background: white;
          padding: 3rem 2rem;
          border-radius: 16px;
          border: 1px solid #f2f2f2;
          box-shadow: 0 6px 25px rgba(0,0,0,0.04);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .card-sleek:hover { transform: translateY(-10px); box-shadow: 0 15px 45px rgba(0,0,0,0.08); border-color: var(--color-accent); }
        .card-benefit {
          background: white;
          padding: 2.5rem;
          border-radius: 20px;
          border: 1px solid #f2f2f2;
          transition: all 0.3s ease;
        }
        .card-benefit:hover { transform: translateY(-8px); box-shadow: 0 15px 40px rgba(0,0,0,0.06); }
        .card-trust {
          background: white;
          padding: 3.5rem 2rem;
          border-radius: 16px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 1.5rem;
          border: 1px solid #f2f2f2;
          transition: all 0.3s ease;
        }
        .card-trust:hover { transform: translateY(-8px); border-color: var(--color-accent); }
      `}</style>
    </>
  );
}
