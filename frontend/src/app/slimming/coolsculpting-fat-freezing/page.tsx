"use client";
import Image from "next/image";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";

export default function CoolSculpting() {
  return (
    <>
      {/* 1. HERO SECTION - TRIPLE PILLAR */}
      <section className="service-hero" style={{ backgroundImage: 'url(/images/coolsculpting-bg.png)', backgroundPosition: 'left center' }}>
        <div className="container">
          <div className="service-hero-grid">
            {/* Visual Subject migrated to background */}
            <div className="service-hero-text">
              <h1>Freeze Fat.<br/><span className="accent">Shape Your Body.</span></h1>
              <p>Non-surgical fat reduction with advanced body contouring technology. Achieve your desired shape with zero surgery and zero downtime.</p>
              <div className="hero-trust-badges">
                <div className="hero-trust-badge"><span>❄️</span><span>ZERO DOWNTIME</span></div>
                <div className="hero-trust-badge"><span>🛡️</span><span>FDA APPROVED</span></div>
              </div>
            </div>
            <div className="service-hero-form"><LeadForm /></div>
          </div>
        </div>
      </section>

      {/* 2. PROBLEM SECTION */}
      <section className="section bg-surface text-center" style={{ padding: '3.5rem 0' }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          <h2 className="section-title" style={{ fontSize: '2.4rem' }}>Stubborn Fat <span className="text-accent">That Won’t Go Away?</span></h2>
          <div className="grid grid-4" style={{ marginTop: '3.5rem', gap: '1.25rem' }}>
            {[
              { title: "Belly Fat", desc: "Target persistent fat around the abdomen area.", icon: "🥋" },
              { title: "Love Handles", desc: "Eliminate stubborn fat on the flanks and waist.", icon: "⌛" },
              { title: "Thigh Fat", desc: "Reduce fat on inner and outer thighs for better contour.", icon: "🦵" },
              { title: "Double Chin", desc: "Non-surgical reduction of submental fat for a slim profile.", icon: "👤" }
            ].map(item => (
              <div key={item.title} className="card-sleek">
                <div style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>{item.icon}</div>
                <h3 style={{ fontSize: '1.05rem', marginBottom: '0.75rem', color: 'var(--color-primary)', fontWeight: '700' }}>{item.title}</h3>
                <p style={{ fontSize: '0.85rem', color: '#666', lineHeight: '1.6' }}>{item.desc}</p>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '1.15rem', marginTop: '3.5rem', fontWeight: '600', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
            Even with diet & exercise, some fat stays — <span className="text-accent" style={{ borderBottom: '2px solid rgba(39, 166, 156, 0.2)' }}>we help remove it safely and permanently.</span>
          </p>
        </div>
      </section>

      {/* 3. WHAT IS COOLSCULPTING */}
      <section className="section">
        <div className="container grid grid-2 items-center gap-4">
          <div style={{ position: 'relative', height: '450px', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 15px 45px rgba(0,0,0,0.08)' }}>
            <Image src="/images/neofatbury-slimming-standard.png" alt="CoolSculpting Technology" fill style={{ objectFit: 'cover' }} />
            <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem', background: 'white', padding: '0.5rem 1rem', borderRadius: '8px', fontSize: '0.8rem', fontWeight: '700', color: 'var(--color-primary)', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>NEOFATBURY CLINICAL STANDARD</div>
          </div>
          <div style={{ paddingLeft: '2.5rem' }}>
            <h2 className="section-subtitle" style={{ color: 'var(--color-accent)', fontWeight: '800', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>Precision Contouring</h2>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem', fontSize: '2.4rem' }}>What is <span className="text-accent">CoolSculpting?</span></h2>
            <p className="text-muted" style={{ fontSize: '1.05rem', marginBottom: '2rem', lineHeight: '1.8' }}>
              CoolSculpting is a non-invasive fat reduction treatment that uses controlled cooling to freeze and eliminate stubborn fat cells. The body naturally removes these fat cells over time, resulting in a slimmer, better-contoured physique.
            </p>
            <div style={{ background: '#f8fdfd', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(39, 166, 156, 0.1)', marginBottom: '2.5rem' }}>
               <h4 style={{ color: 'var(--color-primary)', fontWeight: '800', marginBottom: '0.5rem', fontSize: '0.9rem' }}>🛡️ CLINICAL AUTHORITY NOTE</h4>
               <p style={{ fontSize: '0.9rem', color: '#666', fontWeight: '700', lineHeight: '1.5' }}>
                 "This is not a weight-loss treatment, but a specialized body contouring procedure designed for safe and permanent fat reduction."
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. AREAS WE TREAT */}
      <section className="section bg-surface text-center">
        <div className="container">
          <h2 className="section-title">Target <span className="text-accent">Areas</span></h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem', marginTop: '3.5rem' }}>
            {[
              { t: 'Abdomen', i: '🥋' },
              { t: 'Love handles', i: '⌛' },
              { t: 'Thighs', i: '🦵' },
              { t: 'Arms', i: '💪' },
              { t: 'Double chin', i: '👤' }
            ].map(p => (
              <div key={p.t} className="chip-sleek" style={{ padding: '1.25rem 2.5rem', fontSize: '1rem' }}>
                <span style={{ marginRight: '0.5rem' }}>{p.i}</span> {p.t}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. BEFORE / AFTER SECTION */}
      <section className="section text-center">
        <div className="container">
          <h2 className="section-title">See the <span className="text-accent" style={{ color: '#00acb1' }}>Difference</span></h2>
          <p className="section-subtitle">Visible reduction in fat and improved body contour across target areas.</p>
          {/* Sizing increased to fill the 'red box' footprint */}
          <div style={{ maxWidth: '1000px', margin: '3.5rem auto', position: 'relative', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 25px 55px rgba(0,0,0,0.1)' }}>
            <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9' }}>
              <Image src="/images/neofatbury-slimming-banner.webp" alt="CoolSculpting Results" fill style={{ objectFit: 'cover', objectPosition: 'center' }} />
            </div>
            <div style={{ position: 'absolute', bottom: '0', left: '0', width: '100%', background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)', padding: '2.5rem', display: 'flex', justifyContent: 'center', gap: '30vw' }}>
              <span style={{ color: 'white', fontWeight: '900', letterSpacing: '5px', fontSize: '1.25rem' }}>BEFORE</span>
              <span style={{ color: 'white', fontWeight: '900', letterSpacing: '5px', fontSize: '1.25rem' }}>AFTER</span>
            </div>
          </div>
          <p style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '2.5rem', color: '#00acb1' }}>Start Your Body Transformation Journey Today</p>
          <Link href="#book" className="btn btn-primary" style={{ padding: '1.2rem 4rem', fontSize: '1.1rem' }}>Start Your Transformation</Link>
        </div>
      </section>

      {/* 6. BENEFITS SECTION WITH ICONS */}
      <section className="section bg-surface">
        <div className="container">
          <h2 className="section-title text-center">Benefits of <span className="text-accent">CoolSculpting?</span></h2>
          <div className="grid grid-5" style={{ marginTop: '3.5rem', gap: '1.25rem' }}>
            {[
              { t: "Non-surgical", i: "🛡️" },
              { t: "No downtime", i: "🕐" },
              { t: "Permanent", i: "♾️" },
              { t: "Safe & effective", i: "✅" },
              { t: "Natural results", i: "🌿" }
            ].map(benefit => (
              <div key={benefit.t} className="card-benefit" style={{ padding: '2.5rem 1rem', textAlign: 'center' }}>
                <div style={{ fontSize: '2.2rem', marginBottom: '1.25rem' }}>{benefit.i}</div>
                <p style={{ fontWeight: '700', fontSize: '0.9rem', color: 'var(--color-primary)' }}>{benefit.t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. HOW IT WORKS WITH ICONS */}
      <section className="section">
        <div className="container">
          <h2 className="section-title text-center">How the <span className="text-accent">Treatment Works</span></h2>
          <div className="grid grid-4" style={{ marginTop: '4rem', gap: '1.25rem' }}>
            {[
              { step: "📋", title: "Consultation", desc: "Detailed body analysis and personalized plan." },
              { step: "❄️", title: "Treatment", desc: "Controlled cooling applied to target fat areas." },
              { step: "🔬", title: "Fat Reduction", desc: "Fat cells break down naturally via the body." },
              { step: "✨", title: "Visible Change", desc: "Gradual contour refinement in weeks. (30-60 mins/session)" }
            ].map(item => (
              <div key={item.title} className="card-process">
                <div style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>{item.step}</div>
                <h3 style={{ marginBottom: '0.75rem', fontSize: '1.05rem', fontWeight: '700' }}>{item.title}</h3>
                <p className="text-muted" style={{ fontSize: '0.85rem', lineHeight: '1.6' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. TECHNOLOGY SECTION */}
      <section className="section bg-surface">
        <div className="container grid grid-2 items-center gap-4">
          <div style={{ paddingRight: '2.5rem' }}>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>Advanced Body <span className="text-accent">Contouring Technology</span></h2>
            <p className="text-muted" style={{ fontSize: '1.05rem', marginBottom: '2.5rem' }}>
              We use modern, clinically proven fat reduction technology designed for safe and effective results across all body types.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
               {[
                 { t: 'Precision treatment', i: '🎯' },
                 { t: 'Comfortable procedure', i: '😌' },
                 { t: 'Clinically proven', i: '🔬' }
               ].map(p => (
                 <div key={p.t} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: '700' }}>
                   <span style={{ fontSize: '1.2rem' }}>{p.i}</span> {p.t}
                 </div>
               ))}
            </div>
          </div>
          <div style={{ position: 'relative', height: '380px', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 15px 45px rgba(0,0,0,0.06)' }}>
            <Image src="/images/neofatbury-slimming-banner.webp" alt="Body Sculpting Excellence" fill style={{ objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      {/* 9. WHO IS IT FOR */}
      <section className="section text-center">
        <div className="container">
          <h2 className="section-title">Who is This <span className="text-accent">Treatment For?</span></h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem', marginTop: '3.5rem' }}>
            {[
              { t: 'Stubborn fat zones', i: '🎯' },
              { t: 'Body shaping goals', i: '🎨' },
              { t: 'Close to ideal weight', i: '⚖️' },
              { t: 'Men & women', i: '👥' }
            ].map(p => (
              <div key={p.t} className="chip-sleek">
                <span style={{ marginRight: '0.5rem' }}>{p.i}</span> {p.t}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FAQ SECTION */}
      <section className="section bg-surface">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="section-title text-center">Frequently Asked <span className="text-accent">Questions</span></h2>
          <div style={{ marginTop: '4rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {[
              { q: "Is CoolSculpting safe?", a: "Yes, it is FDA-approved and widely used globally for non-surgical fat reduction." },
              { q: "When will I see results?", a: "Visible contouring results typically appear in a few weeks as fat cells are eliminated." },
              { q: "Is it painful?", a: "The procedure involves minimal discomfort, often described as a cold sensation that fades quickly." },
              { q: "Are results permanent?", a: "Yes, the treated fat cells are permanently eliminated by the body." }
            ].map((faq, i) => (
              <div key={i} className="card-sleek" style={{ textAlign: 'left', padding: '1.5rem 2rem' }}>
                <h4 style={{ fontSize: '1.05rem', fontWeight: '800', marginBottom: '0.75rem', color: 'var(--color-primary)' }}>Q: {faq.q}</h4>
                <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: '1.6' }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. TRUST SECTION WITH ICONS */}
      <section className="section text-center">
        <div className="container">
          <h2 className="section-title">Why Choose <span className="text-accent">Neo Clinic?</span></h2>
          <div className="grid grid-4" style={{ marginTop: '4rem', gap: '1.25rem' }}>
            {[
              { t: "Advanced tech", i: "🧬" },
              { t: "Expert doctors", i: "👨‍⚕️" },
              { t: "Safe procedures", i: "🛡️" },
              { t: "Proven results", i: "🏆" }
            ].map(item => (
              <div key={item.t} className="card-trust">
                <div style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>{item.i}</div>
                <h4 style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--color-primary)' }}>{item.t}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. FINAL CTA */}
      <section className="section bg-primary text-white text-center" style={{ padding: '5rem 0' }} id="book">
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 6vw, 3.2rem)', color: 'white', marginBottom: '1.5rem', fontWeight: '900' }}>Ready to Sculpt Your Body?</h2>
          <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.95)', marginBottom: '3rem', fontWeight: '500' }}>Achieve your desired shape without surgery or downtime today.</p>
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
        .service-hero-container {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          width: 100%;
          animation: fadeInUp 0.8s ease-out forwards;
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .service-hero-text {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .trust-item-sleek {
          background: #f8ffff;
          padding: 0.6rem 1.25rem;
          border-radius: 50px;
          font-weight: 700;
          font-size: 0.85rem;
          color: #004d4f;
          border: 1px solid rgba(39, 166, 156, 0.2);
        }
        .card-sleek {
          background: white;
          padding: 2.5rem 1.5rem;
          border-radius: 12px;
          border: 1px solid #f0f0f0;
          box-shadow: 0 4px 20px rgba(0,0,0,0.03);
          transition: transform 0.3s ease;
        }
        .card-sleek:hover { transform: translateY(-5px); }
        .card-benefit {
          background: white;
          padding: 2rem;
          border-radius: 16px;
          border: 1px solid #f2f2f2;
          transition: transform 0.3s ease;
        }
        .card-benefit:hover { transform: translateY(-5px); box-shadow: 0 10px 30px rgba(0,0,0,0.05); }
        .card-process {
          background: white;
          padding: 2.5rem 1.75rem;
          border-radius: 14px;
          text-align: center;
          border: 1px solid #f0f4f4;
          transition: transform 0.3s ease;
        }
        .card-process:hover { transform: translateY(-5px); }
        .card-trust {
          background: white;
          padding: 2.5rem 1.5rem;
          border-radius: 12px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 1.25rem;
          border: 1px solid #f0f0f0;
          transition: transform 0.3s ease;
        }
        .card-trust:hover { transform: translateY(-5px); }
        .chip-sleek {
          background: white;
          padding: 1rem 2rem;
          border-radius: 50px;
          border: 1px solid #f0f0f0;
          font-weight: 700;
          color: var(--color-primary);
          transition: all 0.3s ease;
        }
        .chip-sleek:hover { border-color: var(--color-accent); transform: scale(1.05); }
      `}</style>
    </>
  );
}
