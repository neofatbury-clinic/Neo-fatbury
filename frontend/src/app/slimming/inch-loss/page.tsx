"use client";
import Image from "next/image";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";

export default function InchLoss() {
  return (
    <>
      {/* 1. HERO SECTION - TRIPLE PILLAR */}
      <section className="service-hero" style={{ backgroundImage: 'url(/images/coolsculpting-bg.png)', backgroundPosition: 'left center' }}>
        <div className="container">
          <div className="service-hero-grid">
            {/* Visual Subject migrated to background */}
            <div className="service-hero-text">
              <h1>Lose Inches.<br/><span className="accent">Shape Your Body.</span></h1>
              <p>Target stubborn fat and reduce body measurements with advanced, non-surgical refinement. Achieve a slimmer, more sculpted profile with zero downtime.</p>
              <div className="hero-trust-badges">
                <div className="hero-trust-badge"><span>📏</span><span>PRECISION TARGETING</span></div>
                <div className="hero-trust-badge"><span>✨</span><span>VISIBLE REDUCTION</span></div>
              </div>
            </div>
            <div className="service-hero-form"><LeadForm /></div>
          </div>
        </div>
      </section>

      {/* 2. PROBLEM SECTION */}
      <section className="section bg-surface text-center" style={{ padding: '6rem 0' }}>
        <div className="container" style={{ maxWidth: '1100px' }}>
          <h2 className="section-title" style={{ fontSize: '2.8rem' }}>Struggling with <span className="text-accent">Stubborn Inches?</span></h2>
          <div className="grid grid-4" style={{ marginTop: '4rem', gap: '1.5rem' }}>
            {[
              { title: "Belly Fat", desc: "Target reduction in the midsection for a visibly slimmer waistline.", icon: "🥋" },
              { title: "Love Handles", desc: "Refine the flanks and waistline with clinical precision contouring.", icon: "⌛" },
              { title: "Thigh Fat", desc: "Sculpt and reduce fat in inner and outer thighs for improved body shape.", icon: "🦵" },
              { title: "Waistline Issues", desc: "Focus specifically on reducing localized fat deposits that diet won't reach.", icon: "📏" }
            ].map(item => (
              <div key={item.title} className="card-sleek">
                <div style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>{item.icon}</div>
                <h3 style={{ fontSize: '1.15rem', marginBottom: '1rem', color: 'var(--color-primary)', fontWeight: '800' }}>{item.title}</h3>
                <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: '1.7' }}>{item.desc}</p>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '1.3rem', marginTop: '4.5rem', fontWeight: '700', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}>
            Even after workouts, some fat remains — <span className="text-accent" style={{ borderBottom: '2px solid rgba(39, 166, 156, 0.3)' }}>we help target and reduce them effectively.</span>
          </p>
        </div>
      </section>

      {/* 3. WHAT IS INCH LOSS TREATMENT */}
      <section className="section">
        <div className="container grid grid-2 items-center gap-6">
          <div style={{ position: 'relative', height: '550px', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 25px 55px rgba(0,0,0,0.1)' }}>
            <Image src="/images/neofatbury-inchloss-standard.png" alt="Inch Loss Technology" fill style={{ objectFit: 'cover' }} />
            <div style={{ position: 'absolute', bottom: '2rem', left: '2rem', background: 'white', padding: '0.75rem 1.5rem', borderRadius: '12px', fontSize: '0.9rem', fontWeight: '800', color: 'var(--color-primary)', boxShadow: '0 8px 20px rgba(0,0,0,0.15)' }}>NEOFATBURY CLINICAL STANDARD</div>
          </div>
          <div style={{ paddingLeft: '3.5rem' }}>
            <h2 className="section-subtitle" style={{ color: 'var(--color-accent)', fontWeight: '900', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '2.5px', fontSize: '1rem' }}>Precision Refinement</h2>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '2rem', fontSize: '2.8rem' }}>What is <span className="text-accent">Inch Loss Treatment?</span></h2>
            <p className="text-muted" style={{ fontSize: '1.15rem', marginBottom: '2.5rem', lineHeight: '1.8' }}>
              Inch loss treatment involves non-invasive clinical procedures that target localized fat deposits to reduce body measurements and refine your overall silhouette.
            </p>
            <div style={{ background: '#f8fdfd', padding: '2rem', borderRadius: '16px', border: '1px solid rgba(39, 166, 156, 0.15)', marginBottom: '3rem' }}>
               <h4 style={{ color: 'var(--color-primary)', fontWeight: '900', marginBottom: '0.75rem', fontSize: '1rem' }}>📊 CLINICAL POSITIONING</h4>
               <p style={{ fontSize: '1rem', color: '#444', fontWeight: '700', lineHeight: '1.6' }}>
                 "Inch loss focuses on reducing body measurements and reshaping your profile, not just overall body weight."
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. BEFORE / AFTER SECTION */}
      <section className="section text-center">
        <div className="container">
          <h2 className="section-title" style={{ fontSize: '2.8rem' }}>Visible <span className="text-accent">Inch Reduction</span></h2>
          <p className="section-subtitle">Notice a slimmer, more contoured body shape after targeted refinement.</p>
          <div style={{ maxWidth: '480px', margin: '3rem auto', position: 'relative', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 15px 45px rgba(0,0,0,0.1)' }}>
            <div style={{ position: 'relative', width: '100%', aspectRatio: '16/6' }}>
              <Image src="/images/neofatbury-body-ba.png" alt="Inch Loss Results" fill style={{ objectFit: 'cover' }} />
            </div>
            <div className="ba-label-overlay">
              <span className="ba-label">BEFORE</span>
              <span className="ba-label">AFTER</span>
            </div>
          </div>
          <p style={{ fontSize: '1.2rem', fontWeight: '800', marginBottom: '3rem', color: 'var(--color-primary)' }}>Start Your Body Refinement Journey Today</p>
          <Link href="/contact-us" className="btn btn-primary" style={{ padding: '1.25rem 4rem', fontSize: '1.1rem' }}>Start Your Journey</Link>
        </div>
      </section>

      {/* 11. TRUST SECTION */}
      <section className="section text-center">
        <div className="container">
          <h2 className="section-title">Why Choose <span className="text-accent">Neo Clinic?</span></h2>
          <div className="grid grid-4" style={{ marginTop: '5rem', gap: '1.5rem' }}>
            {[
              { t: "Advanced tech", i: "🧬" },
              { t: "Expert doctors", i: "👨‍⚕️" },
              { t: "Safe care", i: "🛡️" },
              { t: "Proven results", i: "🏆" }
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
      <section className="section bg-primary text-white text-center final-cta-section" id="book">
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 6vw, 4.2rem)', color: 'white', marginBottom: '2rem', fontWeight: '900' }}>Ready to Reduce Inches?</h2>
          <p style={{ fontSize: 'clamp(1.1rem, 3vw, 1.5rem)', color: 'rgba(255,255,255,0.95)', marginBottom: '3rem', fontWeight: '500' }}>Achieve a slimmer, more sculpted body without invasive surgery today.</p>
          <div className="final-cta-btns">
            <Link href="/contact-us" className="btn btn-accent btn-lg-sleek">Book Appointment</Link>
            <a href="tel:9700641000" className="btn btn-white-link btn-lg-sleek">Get Free Consultation</a>
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
        .service-title { font-size: clamp(2.2rem, 5vw, 3.4rem); line-height: 1.2; }
        .service-sub { font-size: clamp(1rem, 2vw, 1.15rem); }
        .service-hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
          width: 100%;
        }
        .trust-row-sleek { display: flex; gap: 0.75rem; flex-wrap: wrap; }
        .hero-btns { display: flex; gap: 1rem; }
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
        
        .ba-label-overlay {
          position: absolute; bottom: 0; left: 0; width: 100%; 
          background: linear-gradient(to top, rgba(0,0,0,0.7), transparent); 
          padding: clamp(1.5rem, 5vw, 3rem); display: flex; justify-content: space-around;
        }
        .ba-label { color: white; fontWeight: 900; letterSpacing: 5px; fontSize: clamp(0.9rem, 3vw, 1.3rem); textShadow: 0 2px 4px rgba(0,0,0,0.5); }
        
        .final-cta-section { padding: clamp(5rem, 15vw, 10rem) 0; }
        .final-cta-btns { display: flex; gap: 2rem; justifyContent: center; flexWrap: wrap; }
        .btn-lg-sleek { padding: 1.25rem 4rem; fontSize: 1.15rem; fontWeight: 900; }
        .btn-white-link { backgroundColor: white; color: var(--color-primary); }

        @media (max-width: 1024px) {
          .service-hero-grid { grid-template-columns: 1fr; text-align: center; gap: 3rem; }
          .service-hero-text { display: flex; flex-direction: column; align-items: center; }
          .trust-row-sleek { justify-content: center; }
          .hero-btns { justify-content: center; }
        }
        @media (max-width: 640px) {
          .service-hero { min-height: auto; padding: 3rem 0; }
          .hero-btns { flex-direction: column; width: 100%; }
          .btn-cta-main { padding: 1rem 2rem; width: 100%; }
          .final-cta-btns { flex-direction: column; gap: 1rem; }
          .btn-lg-sleek { padding: 1rem 2.5rem; width: 100%; }
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
        .chip-sleek {
          background: white;
          padding: 1.25rem 2.5rem;
          border-radius: 60px;
          border: 1px solid #f0f0f0;
          font-weight: 800;
          color: var(--color-primary);
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(0,0,0,0.03);
        }
        .chip-sleek:hover { border-color: var(--color-accent); transform: scale(1.05); }
      `}</style>
    </>
  );
}
