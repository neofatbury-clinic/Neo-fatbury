"use client";
import Image from "next/image";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";

export default function HairTransplantation() {
  return (
    <>
      {/* 1. HERO SECTION - TRIPLE PILLAR */}
      <section className="service-hero" style={{ backgroundImage: 'url(/images/hair-loss-bg.png)', backgroundPosition: 'left center' }}>
        <div className="container" style={{ maxWidth: '1450px' }}>
          <div className="service-hero-grid">
            {/* Visual Subject migrated to background */}
            <div className="service-hero-text">
              <h1>Hair Restoration.<br/><span className="accent">Permanent Confidence.</span></h1>
              <p>Advanced FUE and DHT hair transplantation for natural, high-density results. Restore your hairline permanently with our lead specialists.</p>
              <div className="hero-trust-badges">
                <div className="hero-trust-badge"><span>✨</span><span>NATURAL RESULTS</span></div>
                <div className="hero-trust-badge"><span>👨‍⚕️</span><span>EXPERT SURGEONS</span></div>
              </div>
            </div>
            <div className="service-hero-form"><LeadForm /></div>
          </div>
        </div>
      </section>

      {/* 2. PROBLEM SECTION */}
      <section className="section bg-surface text-center" style={{ padding: '5rem 0' }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          <h2 className="section-title" style={{ fontSize: '2.4rem' }}>Struggling with <span className="text-accent">Hair Loss or Baldness?</span></h2>
          <div className="grid grid-4" style={{ marginTop: '3.5rem', gap: '1.25rem' }}>
            {[
              { title: "Receding Hairline", desc: "Visible retreat of hair from the forehead and temples.", icon: "📏" },
              { title: "Bald Patches", desc: "Occurrence of noticeable hairless areas on the scalp.", icon: "🔍" },
              { title: "Thinning Hair", desc: "Significant loss of density across the crown or top.", icon: "📉" },
              { title: "Loss of Confidence", desc: "Feeling self-conscious about your appearance.", icon: "😔" }
            ].map(item => (
              <div key={item.title} className="card-sleek">
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{item.icon}</div>
                <h3 style={{ fontSize: '1.05rem', marginBottom: '0.75rem', color: 'var(--color-primary)', fontWeight: '700' }}>{item.title}</h3>
                <p style={{ fontSize: '0.85rem', color: '#666', lineHeight: '1.6' }}>{item.desc}</p>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '1.2rem', marginTop: '3.5rem', fontWeight: '600', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
            Hair transplant offers a <span className="text-accent" style={{ borderBottom: '2px solid rgba(39, 166, 156, 0.2)' }}>permanent and effective solution for natural growth.</span>
          </p>
        </div>
      </section>

      {/* 3. WHAT IS HAIR TRANSPLANT */}
      <section className="section">
        <div className="container grid grid-2 items-center gap-4">
          <div style={{ position: 'relative', height: '450px', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 15px 45px rgba(0,0,0,0.08)' }}>
            <Image src="/images/neofatbury-hair-standard.png" alt="Hair Transplant Procedure" fill style={{ objectFit: 'cover' }} />
            <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem', background: 'white', padding: '0.5rem 1rem', borderRadius: '8px', fontSize: '0.8rem', fontWeight: '700', color: 'var(--color-primary)', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>NEOFATBURY SURGICAL STANDARD</div>
          </div>
          <div style={{ paddingLeft: '2.5rem' }}>
            <h2 className="section-subtitle" style={{ color: 'var(--color-accent)', fontWeight: '800', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>Permanent Restoration</h2>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem', fontSize: '2.4rem' }}>What is <span className="text-accent">Hair Transplantation?</span></h2>
            <p className="text-muted" style={{ fontSize: '1.05rem', marginBottom: '2rem', lineHeight: '1.8' }}>
              Hair transplantation is a surgical procedure where healthy hair follicles are extracted and implanted into thinning or bald areas to restore natural hair growth permanently.
            </p>
            <h4 style={{ marginBottom: '1.25rem', fontSize: '1.1rem', fontWeight: '700' }}>Common techniques:</h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2.5rem' }}>
              {[
                { t: 'FUE Extraction', i: '🔬' },
                { t: 'FUT Technique', i: '⚕️' }
              ].map(point => (
                <div key={point.t} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontWeight: '700', color: '#004d4f', fontSize: '0.95rem' }}>
                  <span style={{ fontSize: '1.2rem' }}>{point.i}</span> {point.t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. TYPES OF TRANSPLANT WE OFFER */}
      <section className="section bg-surface text-center">
        <div className="container">
          <h2 className="section-title">Our Hair Transplant <span className="text-accent">Techniques</span></h2>
          <div className="grid grid-3" style={{ marginTop: '4rem', gap: '1.5rem' }}>
            {[
              { title: "FUE Technique", desc: "Minimal scars & faster recovery. Perfect for precision extraction.", icon: "⚡" },
              { title: "FUT Technique", desc: "Suitable for advanced hair loss & larger coverage areas.", icon: "🏗️" },
              { title: "Beard / Eyebrow", desc: "Artistic restoration for facial hair and aesthetic refinement.", icon: "🎨" }
            ].map(type => (
              <div key={type.title} className="card-sleek" style={{ padding: '3rem 2rem' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>{type.icon}</div>
                <h3 style={{ fontSize: '1.15rem', marginBottom: '1rem', color: 'var(--color-primary)', fontWeight: '800' }}>{type.title}</h3>
                <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: '1.6' }}>{type.desc}</p>
                <div style={{ marginTop: '1.5rem', fontWeight: '700', color: 'var(--color-accent)', fontSize: '0.8rem' }}>ENQUIRE NOW</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. BEFORE / AFTER SECTION */}
      <section className="section text-center">
        <div className="container">
          <h2 className="section-title">Real Results. <span className="text-accent">Real Transformation.</span></h2>
          <p className="section-subtitle">See natural-looking hair restoration results from our elite clients.</p>
          <div style={{ maxWidth: '700px', margin: '2rem auto', position: 'relative', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.15)' }}>
            <div style={{ position: 'relative', width: '100%', aspectRatio: '16/7' }}>
              <Image src="/images/neofatbury-hair2-banner.webp" alt="Hair Transplant Results" fill style={{ objectFit: 'cover' }} />
            </div>
            <div style={{ position: 'absolute', bottom: '0', left: '0', width: '100%', background: 'linear-gradient(to top, rgba(0,0,0,0.65), transparent)', padding: '2rem', display: 'flex', justifyContent: 'center', gap: '25vw' }}>
              <span style={{ color: 'white', fontWeight: '800', letterSpacing: '4px', fontSize: '1.1rem' }}>BEFORE</span>
              <span style={{ color: 'white', fontWeight: '800', letterSpacing: '4px', fontSize: '1.1rem' }}>AFTER</span>
            </div>
          </div>
          <p style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '2.5rem', color: 'var(--color-primary)' }}>Start Your Permanent Transformation Today</p>
          <Link href="#book" className="btn btn-primary" style={{ padding: '1rem 3rem' }}>Start Your Transformation</Link>
        </div>
      </section>

      {/* 6. BENEFITS SECTION WITH ICONS */}
      <section className="section bg-surface">
        <div className="container">
          <h2 className="section-title text-center">Benefits of <span className="text-accent">Hair Transplant</span></h2>
          <div className="grid grid-5" style={{ marginTop: '3.5rem', gap: '1.25rem' }}>
            {[
              { t: "Permanent hair growth", i: "♾️" },
              { t: "Natural appearance", i: "🌿" },
              { t: "Improved confidence", i: "💪" },
              { t: "Low maintenance", i: "🛁" },
              { t: "Long-term results", i: "⏳" }
            ].map(benefit => (
              <div key={benefit.t} className="card-benefit" style={{ padding: '2rem 1rem', textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{benefit.i}</div>
                <p style={{ fontWeight: '700', fontSize: '0.9rem', color: 'var(--color-primary)' }}>{benefit.t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. HOW IT WORKS WITH ICONS */}
      <section className="section">
        <div className="container">
          <h2 className="section-title text-center">Our Hair Transplant <span className="text-accent">Process</span></h2>
          <div className="grid grid-4" style={{ marginTop: '4rem', gap: '1.25rem' }}>
            {[
              { step: "📋", title: "Consultation", desc: "Detailed hair analysis & personalized restoration planning." },
              { step: "🔬", title: "Extraction", desc: "Healthy follicles extracted with surgical precision." },
              { step: "⚕️", title: "Implantation", desc: "Precision placement for natural density and direction." },
              { step: "🛡️", title: "Recovery", desc: "Comprehensive healing guidance for optimal regrowth." }
            ].map(item => (
              <div key={item.title} className="card-process">
                <div style={{ fontSize: '2rem', marginBottom: '1.25rem' }}>{item.step}</div>
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
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>Advanced Technology <span className="text-accent">& Expertise</span></h2>
            <p className="text-muted" style={{ fontSize: '1.05rem', marginBottom: '2.5rem' }}>
              We use modern techniques and precision tools to ensure safe, effective, and natural-looking transplant results.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
               {[
                 { t: 'Experienced surgeons', i: '👨‍⚕️' },
                 { t: 'Advanced equipment', i: '🔬' },
                 { t: 'Hygienic environment', i: '🧼' }
               ].map(p => (
                 <div key={p.t} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: '700' }}>
                   <span style={{ fontSize: '1.2rem' }}>{p.i}</span> {p.t}
                 </div>
               ))}
            </div>
          </div>
          <div style={{ position: 'relative', height: '380px', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 15px 45px rgba(0,0,0,0.06)' }}>
            <Image src="/images/neofatbury-hair-standard.png" alt="Surgical Excellence" fill style={{ objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      {/* 9. WHO IS IT FOR */}
      <section className="section text-center">
        <div className="container">
          <h2 className="section-title">Who is Suitable <span className="text-accent">for Hair Transplant?</span></h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem', marginTop: '3.5rem' }}>
            {[
              { t: 'Men with pattern baldness', i: '👴' },
              { t: 'Women with thinning hair', i: '👩' },
              { t: 'Receding hairline cases', i: '⏳' },
              { t: 'Patchy hair loss', i: '📉' }
            ].map(p => (
              <div key={p.t} className="chip-sleek"><span style={{ marginRight: '0.5rem' }}>{p.i}</span> {p.t}</div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. COST / CONSULTATION SECTION */}
      <section className="section bg-surface text-center">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="section-subtitle" style={{ color: 'var(--color-accent)', fontWeight: '800', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>Pricing & Planning</h2>
          <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>Affordable Hair <span className="text-accent">Transplant Solutions</span></h2>
          <p className="text-muted" style={{ fontSize: '1.1rem', marginBottom: '3.5rem' }}>
            Cost depends on the number of grafts and the technique used. We provide transparent pricing and flexible options.
          </p>
          <div className="grid grid-2" style={{ gap: '1.5rem' }}>
            <div className="card-package" style={{ padding: '2.5rem' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>🆓</div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Free Consultation</h3>
              <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '1.5rem' }}>Comprehensive scalp analysis and restoration path planning at no cost.</p>
              <span style={{ fontWeight: '800', color: 'var(--color-accent)' }}>BOOK NOW</span>
            </div>
            <div className="card-package" style={{ padding: '2.5rem' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>💳</div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>EMI Options</h3>
              <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '1.5rem' }}>Affordable monthly payment plans to make your restoration journey stress-free.</p>
              <span style={{ fontWeight: '800', color: 'var(--color-accent)' }}>ENQUIRE NOW</span>
            </div>
          </div>
        </div>
      </section>

      {/* 11. FAQ SECTION */}
      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="section-title text-center">Frequently Asked <span className="text-accent">Questions</span></h2>
          <div style={{ marginTop: '4rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {[
              { q: "Is hair transplant permanent?", a: "Yes, the transplanted follicles are resistant to hair loss, ensuring long-lasting and permanent growth." },
              { q: "Is it painful?", a: "The procedure is performed under local anesthesia, ensuring minimal discomfort during and after the extraction." },
              { q: "When will I see results?", a: "New hair growth typically begins in 3-4 months, with full density appearing within 12 months." },
              { q: "Is it safe?", a: "Extremely safe when performed by experienced surgical experts in a hygienic, medical-grade environment." }
            ].map((faq, i) => (
              <div key={i} className="card-sleek" style={{ textAlign: 'left', padding: '1.5rem 2rem' }}>
                <h4 style={{ fontSize: '1.05rem', fontWeight: '800', marginBottom: '0.75rem', color: 'var(--color-primary)' }}>Q: {faq.q}</h4>
                <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: '1.6' }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. TRUST SECTION */}
      <section className="section bg-surface text-center">
        <div className="container">
          <h2 className="section-title">Why Choose <span className="text-accent">Neo Clinic?</span></h2>
          <div className="grid grid-4" style={{ marginTop: '4rem', gap: '1.25rem' }}>
            {[
              { t: "Experienced doctors", i: "👨‍⚕️" },
              { t: "Advanced tech", i: "🔬" },
              { t: "Patient-focused", i: "🤝" },
              { t: "Proven results", i: "🏆" }
            ].map(item => (
              <div key={item.t} className="card-trust">
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{item.i}</div>
                <h4 style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--color-primary)' }}>{item.t}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13. FINAL CTA */}
      <section className="section bg-primary text-white text-center" style={{ padding: '8rem 0' }} id="book">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)', color: 'white', marginBottom: '1rem', fontWeight: '800' }}>Ready to Transform Your Hair?</h2>
          <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.9)', marginBottom: '2rem', fontWeight: '500' }}>Take the first step towards a fuller head of hair today.</p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="#book" className="btn btn-accent" style={{ padding: '1.25rem 3.5rem', fontSize: '1.1rem', fontWeight: '800' }}>Book Appointment</Link>
            <a href="tel:9700641000" className="btn" style={{ backgroundColor: 'white', color: 'var(--color-primary)', padding: '1.25rem 3.5rem', fontSize: '1.1rem', fontWeight: '800' }}>Get Free Consultation</a>
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
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .service-hero-text {
          flex: 0 1 800px;
          display: flex;
          flex-direction: column;
          align-items: center;
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
          padding: 2rem 1.5rem;
          border-radius: 12px;
          border: 1px solid #f0f0f0;
          box-shadow: 0 4px 20px rgba(0,0,0,0.03);
          transition: transform 0.3s ease;
        }
        .card-sleek:hover { transform: translateY(-5px); }
        .card-package {
          background: white;
          border-radius: 20px;
          border: 1px solid #eef2f2;
          box-shadow: 0 10px 30px rgba(0,0,0,0.02);
          transition: all 0.3s ease;
        }
        .card-package:hover { transform: translateY(-5px); border-color: var(--color-accent); }
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
          padding: 2rem 1.5rem;
          border-radius: 12px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 1rem;
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
