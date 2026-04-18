"use client";
import Image from "next/image";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";

export default function HairLossTreatment() {
  return (
    <>
      {/* 1. HERO SECTION - TRIPLE PILLAR */}
      <section className="service-hero" style={{ backgroundImage: 'url(/images/hair-loss-bg.png)', backgroundPosition: 'left center' }}>
        <div className="container">
          <div className="service-hero-grid">
            {/* Visual Subject migrated to background */}
            <div className="service-hero-text">
              <h1>Full Hair.<br/><span className="accent">Beat Thinning.</span></h1>
              <p>Advanced clinical hair restoration protocols for effective, long-lasting results. Regain your density and confidence with expert trichology care.</p>
              <div className="hero-trust-badges">
                <div className="hero-trust-badge"><span>💎</span><span>CLINICALLY PROVEN</span></div>
                <div className="hero-trust-badge"><span>👨‍⚕️</span><span>EXPERT CARE</span></div>
              </div>
            </div>
            <div className="service-hero-form"><LeadForm /></div>
          </div>
        </div>
      </section>

      {/* 2. PROBLEM SECTION */}
      <section className="section bg-surface text-center" style={{ padding: '3.5rem 0' }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          <h2 className="section-title" style={{ fontSize: '2.4rem' }}>Facing Hair Loss <span className="text-accent">or Thinning?</span></h2>
          <div className="grid grid-4" style={{ marginTop: '3.5rem', gap: '1.25rem' }}>
            {[
              { title: "Excessive Hair Fall", desc: "Significant hair loss during washing or brushing.", icon: "📉" },
              { title: "Thinning Hair", desc: "Visible reduction in density and widening partitions.", icon: "🔍" },
              { title: "Receding Hairline", desc: "Gradual retreat of hair from the forehead and temples.", icon: "📏" },
              { title: "Patchy Loss", desc: "Occurrence of bald patches or weak, lifeless hair.", icon: "🩹" }
            ].map(item => (
              <div key={item.title} className="card-sleek">
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{item.icon}</div>
                <h3 style={{ fontSize: '1.05rem', marginBottom: '0.75rem', color: 'var(--color-primary)', fontWeight: '700' }}>{item.title}</h3>
                <p style={{ fontSize: '0.85rem', color: '#666', lineHeight: '1.6' }}>{item.desc}</p>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '1.2rem', marginTop: '3.5rem', fontWeight: '600', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
            Hair loss is common — <span className="text-accent" style={{ borderBottom: '2px solid rgba(39, 166, 156, 0.2)' }}>and it’s treatable with expert care.</span>
          </p>
        </div>
      </section>

      {/* 3. WHAT IS HAIR LOSS TREATMENT */}
      <section className="section">
        <div className="container grid grid-2 items-center gap-4">
          <div style={{ position: 'relative', height: '450px', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 15px 45px rgba(0,0,0,0.08)' }}>
            <Image src="/images/neofatbury-hair-standard.png" alt="Hair Loss Technology" fill style={{ objectFit: 'cover' }} />
            <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem', background: 'white', padding: '0.5rem 1rem', borderRadius: '8px', fontSize: '0.8rem', fontWeight: '700', color: 'var(--color-primary)', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>NEOFATBURY CLINICAL STANDARD</div>
          </div>
          <div style={{ paddingLeft: '2.5rem' }}>
            <h2 className="section-subtitle" style={{ color: 'var(--color-accent)', fontWeight: '800', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>Scientific Restoration</h2>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem', fontSize: '2.4rem' }}>What is <span className="text-accent">Hair Loss Treatment?</span></h2>
            <p className="text-muted" style={{ fontSize: '1.05rem', marginBottom: '2rem', lineHeight: '1.8' }}>
              Hair loss treatment focuses on identifying the root cause and using advanced techniques to strengthen hair follicles and promote regrowth.
            </p>
            <h4 style={{ marginBottom: '1.25rem', fontSize: '1.1rem', fontWeight: '700' }}>Treatments may include:</h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2.5rem' }}>
              {[
                { t: 'PRP Therapy', i: '💉' },
                { t: 'Laser Therapy', i: '⚡' },
                { t: 'Medical treatments', i: '💊' }
              ].map(point => (
                <div key={point.t} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontWeight: '700', color: '#00acb1', fontSize: '0.95rem' }}>
                  <span style={{ fontSize: '1.2rem' }}>{point.i}</span> {point.t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. CAUSES OF HAIR LOSS WITH ICONS */}
      <section className="section text-center" style={{ background: '#f8fdfd' }}>
        <div className="container">
          <h2 className="section-title">Common Causes of <span className="text-accent">Hair Loss</span></h2>
          <div className="grid grid-5" style={{ marginTop: '4rem', gap: '1.5rem' }}>
            {[
              { title: "Genetics", icon: "🧬" },
              { title: "Hormones", icon: "⚖️" },
              { title: "Stress", icon: "🧠" },
              { title: "Nutrition", icon: "🍎" },
              { title: "Lifestyle", icon: "🏃" }
            ].map(type => (
              <div key={type.title} className="card-cause">
                <div className="cause-icon">{type.icon}</div>
                <h4 style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--color-primary)' }}>{type.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. BEFORE / AFTER SECTION */}
      <section className="section text-center">
        <div className="container">
          <h2 className="section-title">Visible Hair <span className="text-accent">Transformation</span></h2>
          <p className="section-subtitle">See improvements in hair density, thickness, and strength.</p>
          <div style={{ maxWidth: '480px', margin: '3rem auto', position: 'relative', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 15px 45px rgba(0,0,0,0.1)' }}>
            <div style={{ position: 'relative', width: '100%', aspectRatio: '16/6' }}>
              <Image src="/images/before-after-laser.webp" alt="Hair Regrowth Results" fill style={{ objectFit: 'cover' }} />
            </div>
            <div style={{ position: 'absolute', bottom: '0', left: '0', width: '100%', background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)', padding: '2rem', display: 'flex', justifyContent: 'center', gap: '20vw' }}>
              <span style={{ color: 'white', fontWeight: '800', letterSpacing: '4px', fontSize: '1.1rem' }}>BEFORE</span>
              <span style={{ color: 'white', fontWeight: '800', letterSpacing: '4px', fontSize: '1.1rem' }}>AFTER</span>
            </div>
          </div>
          <p style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '2.5rem', color: 'var(--color-primary)' }}>Start Your Hair Regrowth Journey Today</p>
          <Link href="#book" className="btn btn-primary" style={{ padding: '1rem 3rem' }}>Start Your Journey</Link>
        </div>
      </section>

      {/* 6. BENEFITS SECTION WITH ICONS */}
      <section className="section bg-surface">
        <div className="container">
          <h2 className="section-title text-center">Benefits of <span className="text-accent">Hair Loss Treatment</span></h2>
          <div className="grid grid-5" style={{ marginTop: '3.5rem', gap: '1.25rem' }}>
            {[
              { t: "Reduced hair fall", i: "📉" },
              { t: "Stronger roots", i: "⚓" },
              { t: "Improved density", i: "💇‍♂️" },
              { t: "Healthier scalp", i: "🧴" },
              { t: "Confidence", i: "🌟" }
            ].map(benefit => (
              <div key={benefit.t} className="card-benefit" style={{ padding: '2rem 1rem', textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{benefit.i}</div>
                <p style={{ fontWeight: '700', fontSize: '0.9rem', color: 'var(--color-primary)' }}>{benefit.t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. HOW IT WORKS */}
      <section className="section">
        <div className="container">
          <h2 className="section-title text-center">Our <span className="text-accent">Treatment Process</span></h2>
          <div className="grid grid-4" style={{ marginTop: '4rem', gap: '1.25rem' }}>
            {[
              { step: "🔬", title: "Hair Analysis", desc: "Detailed analysis to identify the cause of loss." },
              { step: "📋", title: "Custom Plan", desc: "A tailored restoration roadmap for your profile." },
              { step: "⚕️", title: "Sessions", desc: "Safe, medical-grade procedures to stimulate regrowth." },
              { step: "🛡️", title: "Care", desc: "Guidance to maintain results and protect growth." }
            ].map(item => (
              <div key={item.title} className="card-process">
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{item.step}</div>
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
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>Advanced <span className="text-accent">Hair Technology</span></h2>
            <p className="text-muted" style={{ fontSize: '1.05rem', marginBottom: '2.5rem' }}>
              We use modern dermatology techniques and clinically proven treatments to safely restore hair growth.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
               {[
                 { t: 'Safe & effective', i: '🛡️' },
                 { t: 'Minimal downtime', i: '🕒' },
                 { t: 'Suitable for men & women', i: '👥' }
               ].map(p => (
                 <div key={p.t} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: '700' }}>
                   <span style={{ fontSize: '1.2rem' }}>{p.i}</span> {p.t}
                 </div>
               ))}
            </div>
          </div>
          <div style={{ position: 'relative', height: '380px', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 15px 45px rgba(0,0,0,0.06)' }}>
            <Image src="/images/neofatbury-hair2-banner.webp" alt="Hair Restoration" fill style={{ objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      {/* 9. WHO IS IT FOR */}
      <section className="section text-center">
        <div className="container">
          <h2 className="section-title">Who Can <span className="text-accent">Benefit?</span></h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem', marginTop: '3.5rem' }}>
            {[
              { t: 'Men with hair loss', i: '👴' },
              { t: 'Women with thinning hair', i: '👩' },
              { t: 'Early baldness', i: '⏳' },
              { t: 'Weak hair', i: '📉' }
            ].map(p => (
              <div key={p.t} className="chip-sleek"><span style={{ marginRight: '0.5rem' }}>{p.i}</span> {p.t}</div>
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
              { q: "Can hair loss be reversed?", a: "Yes, early treatment and consistent procedures give best outcomes." },
              { q: "How many sessions?", a: "This depends on the severity and root cause of your loss." },
              { q: "Is PRP safe?", a: "Absolutely. It uses your own blood components to stimulate follicles." },
              { q: "When are results visible?", a: "Improvement in density is typically seen in a few months." }
            ].map((faq, i) => (
              <div key={i} className="card-sleek" style={{ textAlign: 'left', padding: '1.5rem 2rem' }}>
                <h4 style={{ fontSize: '1.05rem', fontWeight: '800', marginBottom: '0.75rem', color: 'var(--color-primary)' }}>Q: {faq.q}</h4>
                <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: '1.6' }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. TRUST SECTION */}
      <section className="section text-center">
        <div className="container">
          <h2 className="section-title">Why Choose <span className="text-accent">Neo Clinic?</span></h2>
          <div className="grid grid-4" style={{ marginTop: '4rem', gap: '1.25rem' }}>
            {[
              { t: "Expert doctors", i: "👨‍⚕️" },
              { t: "Advanced tech", i: "🔬" },
              { t: "Personal care", i: "🤝" },
              { t: "Proven results", i: "🏆" }
            ].map(item => (
              <div key={item.t} className="card-trust">
                <div className="trust-icon" style={{ background: 'none', fontSize: '2rem' }}>{item.i}</div>
                <h4 style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--color-primary)' }}>{item.t}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. FINAL CTA */}
      <section className="section bg-primary text-white text-center" style={{ padding: '5rem 0' }} id="book">
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 6vw, 3.2rem)', color: 'white', marginBottom: '1.5rem', fontWeight: '900' }}>Ready to Regrow Your Hair?</h2>
          <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.95)', marginBottom: '3rem', fontWeight: '500' }}>Take the first step towards thicker, healthier hair today.</p>
          <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact-us" className="btn btn-accent" style={{ padding: '1.25rem 3.5rem', fontSize: '1.1rem', fontWeight: '900' }}>Book Appointment</Link>
            <a href="tel:9700641000" className="btn" style={{ backgroundColor: 'white', color: 'var(--color-primary)', padding: '1.25rem 3.5rem', fontSize: '1.1rem', fontWeight: '900' }}>Get Free Consultation</a>
          </div>
        </div>
      </section>

      <style jsx>{`
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
        .card-sleek {
          background: white;
          padding: 2.5rem 1.5rem;
          border-radius: 12px;
          border: 1px solid #f0f0f0;
          box-shadow: 0 4px 20px rgba(0,0,0,0.03);
          transition: transform 0.3s ease;
        }
        .card-sleek:hover { transform: translateY(-5px); }
        .card-cause {
          background: white;
          padding: 2.5rem 1.5rem;
          border-radius: 16px;
          border: 1px solid #eef2f2;
          box-shadow: 0 8px 25px rgba(0,0,0,0.02);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
          transition: transform 0.3s ease;
        }
        .card-cause:hover { transform: translateY(-5px); }
        .cause-icon {
          width: 60px;
          height: 60px;
          background: #f0fdfc;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.8rem;
          border: 1px solid #e0f2f1;
        }
        .card-benefit {
          background: white;
          padding: 2.5rem 1.5rem;
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
