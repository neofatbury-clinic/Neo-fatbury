"use client";
import Image from "next/image";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";

export default function WeightLoss() {
  return (
    <>
      {/* 1. HERO SECTION - TRIPLE PILLAR */}
      <section className="service-hero" style={{ backgroundImage: 'url(/images/coolsculpting-bg.png)', backgroundPosition: 'left center' }}>
        <div className="container">
          <div className="service-hero-grid">
            {/* Visual Subject migrated to background */}
            <div className="service-hero-text">
              <h1>Lose Weight.<br/><span className="accent">Gain Confidence.</span></h1>
              <p>Doctor-guided weight loss programs designed for safe, effective, and lasting results. Sustainable fat loss tailored to your unique metabolism.</p>
              <div className="hero-trust-badges">
                <div className="hero-trust-badge"><span>🥗</span><span>PERSONALIZED PLANS</span></div>
                <div className="hero-trust-badge"><span>👨‍⚕️</span><span>MEDICALLY SUPERVISED</span></div>
              </div>
            </div>
            <div className="service-hero-form"><LeadForm /></div>
          </div>
        </div>
      </section>

      {/* 2. PROBLEM SECTION */}
      <section className="section bg-surface text-center" style={{ padding: '6rem 0' }}>
        <div className="container" style={{ maxWidth: '1100px' }}>
          <h2 className="section-title" style={{ fontSize: '2.8rem' }}>Struggling to <span className="text-accent">Lose Weight?</span></h2>
          <div className="grid grid-4" style={{ marginTop: '4rem', gap: '1.5rem' }}>
            {[
              { title: "Stubborn Fat", desc: "Persistent fat deposits that don't respond to standard diet or exercise routines.", icon: "🧥" },
              { title: "Metabolic Issues", desc: "Slow metabolism making weight management a constant and difficult struggle.", icon: "⚖️" },
              { title: "Low Energy", desc: "Feeling tired and sluggish throughout the day due to excess body weight.", icon: "🔋" },
              { title: "Yo-Yo Weight", desc: "Successfully losing weight only to see it return quickly after your routine ends.", icon: "📉" }
            ].map(item => (
              <div key={item.title} className="card-sleek">
                <div style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>{item.icon}</div>
                <h3 style={{ fontSize: '1.15rem', marginBottom: '1rem', color: 'var(--color-primary)', fontWeight: '800' }}>{item.title}</h3>
                <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: '1.7' }}>{item.desc}</p>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '1.3rem', marginTop: '4.5rem', fontWeight: '700', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}>
            You don’t need extreme diets — <span className="text-accent" style={{ borderBottom: '2px solid rgba(39, 166, 156, 0.3)' }}>you need the right medically-guided clinical plan.</span>
          </p>
        </div>
      </section>

      {/* 3. WHAT IS WEIGHT LOSS TREATMENT */}
      <section className="section">
        <div className="container grid grid-2 items-center gap-6">
          <div style={{ position: 'relative', height: '550px', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 25px 55px rgba(0,0,0,0.1)' }}>
            <Image src="/images/neofatbury-weightloss-standard.png" alt="Medical Weight Loss" fill style={{ objectFit: 'cover' }} />
            <div style={{ position: 'absolute', bottom: '2rem', left: '2rem', background: 'white', padding: '0.75rem 1.5rem', borderRadius: '12px', fontSize: '0.9rem', fontWeight: '800', color: 'var(--color-primary)', boxShadow: '0 8px 20px rgba(0,0,0,0.15)' }}>NEOFATBURY MEDICAL STANDARD</div>
          </div>
          <div style={{ paddingLeft: '3.5rem' }}>
            <h2 className="section-subtitle" style={{ color: 'var(--color-accent)', fontWeight: '900', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '2.5px', fontSize: '1rem' }}>Sustainable Management</h2>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '2rem', fontSize: '2.8rem' }}>What is <span className="text-accent">Medical Weight Loss?</span></h2>
            <p className="text-muted" style={{ fontSize: '1.15rem', marginBottom: '2.5rem', lineHeight: '1.8' }}>
              Medical weight loss involves personalized, doctor-supervized programs based on your body type, health profile, and lifestyle to achieve safe and sustainable fat loss.
            </p>
            <div style={{ background: '#f8fdfd', padding: '2rem', borderRadius: '16px', border: '1px solid rgba(39, 166, 156, 0.15)', marginBottom: '3.5rem' }}>
               <h4 style={{ color: 'var(--color-primary)', fontWeight: '900', marginBottom: '0.75rem', fontSize: '1rem' }}>📈 CLINICAL POSITIONING</h4>
               <p style={{ fontSize: '1rem', color: '#444', fontWeight: '700', lineHeight: '1.6' }}>
                 "We focus on healthy fat loss and metabolic health — not quick temporary fixes."
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. BEFORE / AFTER SECTION */}
      <section className="section text-center">
        <div className="container">
          <h2 className="section-title" style={{ fontSize: '2.8rem' }}>Real <span className="text-accent">Transformations</span></h2>
          <p className="section-subtitle">See visible fat reduction and body shaping results from our elite medical programs.</p>
          <div style={{ maxWidth: '480px', margin: '3.5rem auto', position: 'relative', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 15px 45px rgba(0,0,0,0.1)' }}>
            <div style={{ position: 'relative', width: '100%', aspectRatio: '16/6' }}>
              <Image src="/images/neofatbury-body-ba.png" alt="Weight Loss Results" fill style={{ objectFit: 'cover' }} />
            </div>
            <div style={{ position: 'absolute', bottom: '0', left: '0', width: '100%', background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)', padding: '3rem', display: 'flex', justifyContent: 'center', gap: '25vw' }}>
              <span style={{ color: 'white', fontWeight: '900', letterSpacing: '5px', fontSize: '1.3rem', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>BEFORE</span>
              <span style={{ color: 'white', fontWeight: '900', letterSpacing: '5px', fontSize: '1.3rem', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>AFTER</span>
            </div>
          </div>
          <p style={{ fontSize: '1.2rem', fontWeight: '800', marginBottom: '3rem', color: 'var(--color-primary)' }}>Start Your Safe Weight Loss Journey Today</p>
          <Link href="/contact-us" className="btn btn-primary" style={{ padding: '1.25rem 4rem', fontSize: '1.1rem' }}>Start Your Journey</Link>
        </div>
      </section>

      {/* 11. TRUST SECTION */}
      <section className="section text-center">
        <div className="container">
          <h2 className="section-title">Why Choose <span className="text-accent">Neo Clinic?</span></h2>
          <div className="grid grid-4" style={{ marginTop: '5rem', gap: '1.5rem' }}>
            {[
              { t: "Expert guidance", i: "👨‍⚕️" },
              { t: "Customized plans", i: "🔬" },
              { t: "Proven results", i: "🏆" },
              { t: "Safe approach", i: "🛡️" }
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
      <section className="section bg-primary text-white text-center" style={{ padding: '10rem 0' }} id="book">
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: 'clamp(2.5rem, 8vw, 4.2rem)', color: 'white', marginBottom: '2rem', fontWeight: '900' }}>Ready to Transform Your Body?</h2>
          <p style={{ fontSize: '1.5rem', color: 'rgba(255,255,255,0.95)', marginBottom: '4.5rem', fontWeight: '500' }}>Start your safe and effective weight loss journey today with doctor-led clinical care.</p>
          <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact-us" className="btn btn-accent" style={{ padding: '1.5rem 4.5rem', fontSize: '1.2rem', fontWeight: '900' }}>Book Appointment</Link>
            <a href="tel:9700641000" className="btn" style={{ backgroundColor: 'white', color: 'var(--color-primary)', padding: '1.5rem 4.5rem', fontSize: '1.2rem', fontWeight: '900' }}>Get Free Consultation</a>
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
        .service-hero-container {
          position: relative;
          z-index: 2;
          width: 100%;
          animation: fadeInUp 0.8s ease-out forwards;
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
        @media (max-width: 1024px) {
          .service-hero-grid { grid-template-columns: 1fr; text-align: center; gap: 3rem; }
          .service-hero-text { display: flex; flex-direction: column; align-items: center; }
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
