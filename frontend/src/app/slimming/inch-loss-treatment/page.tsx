"use client";
import Image from "next/image";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";

export default function InchLossTreatment() {
  const targetAreas = ["Abdomen", "Waist", "Thighs", "Arms", "Hips"];

  return (
    <>
      {/* 1. HERO SECTION - TRIPLE PILLAR */}
      <section className="service-hero" style={{ backgroundImage: 'url(/images/coolsculpting-bg.png)', backgroundPosition: 'left center' }}>
        <div className="container">
          <div className="service-hero-grid">
            {/* Visual Subject migrated to background */}
            <div className="service-hero-text">
              <h1>Lose Inches.<br/><span className="accent">Shape Your Body.</span></h1>
              <p>Target stubborn fat and reduce inches with advanced, non-surgical treatments. Visible results with clinical precision.</p>
              <div className="hero-trust-badges">
                <div className="hero-trust-badge"><span>🛡️</span><span>NON-SURGICAL</span></div>
                <div className="hero-trust-badge"><span>✨</span><span>VISIBLE RESULTS</span></div>
              </div>
            </div>
            <div className="service-hero-form"><LeadForm /></div>
          </div>
        </div>
      </section>

      {/* 2. PROBLEM SECTION */}
      <section className="section bg-surface text-center" style={{ padding: '3.5rem 0' }}>
        <div className="container">
          <h2 className="section-title">Struggling with <span className="text-accent">Stubborn Inches?</span></h2>
          <div className="grid grid-4" style={{ marginTop: '3.5rem' }}>
            {[
              { title: "Belly fat not reducing", desc: "Abdominal fat that resists your best efforts in the gym and kitchen." },
              { title: "Love handles", desc: "Persistent fat on the sides that affects how your clothes fit and look." },
              { title: "Thigh fat", desc: "Localized fat deposits on inner or outer thighs that need targeted care." },
              { title: "Waistline issues", desc: "Trouble achieving the waist definition you want despite healthy habits." }
            ].map(item => (
              <div key={item.title} className="card">
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.75rem', color: 'var(--color-primary)' }}>{item.title}</h3>
                <p className="text-muted" style={{ fontSize: '0.95rem' }}>{item.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '3.5rem', padding: '1.25rem', backgroundColor: 'rgba(39, 166, 156, 0.08)', borderRadius: 'var(--radius-sm)', display: 'inline-block' }}>
            <p style={{ fontSize: '1.15rem', fontWeight: '600' }}>
              “Inch loss focuses on reducing body measurements, <span className="text-accent">not body weight.</span>”
            </p>
          </div>
          <p style={{ fontSize: '1.1rem', marginTop: '2.5rem' }}>👉 Even after workouts, some fat areas remain — we help target them.</p>
        </div>
      </section>

      {/* 3. WHAT IS INCH LOSS TREATMENT */}
      <section className="section">
        <div className="container grid grid-2 items-center gap-4">
          <div style={{ position: 'relative', height: '450px', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
            <Image src="/images/neofatbury-slimming-banner.webp" alt="Inch Loss Treatment" fill style={{ objectFit: 'cover' }} />
          </div>
          <div style={{ paddingLeft: '2rem' }}>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>What is <span className="text-accent">Inch Loss Treatment?</span></h2>
            <p className="text-muted" style={{ fontSize: '1.1rem', marginBottom: '2rem', lineHeight: '1.8' }}>
              Inch loss treatment involves non-invasive procedures that target localized fat deposits and help reduce body measurements, improving overall body shape.
            </p>
            <h4 style={{ marginBottom: '1.25rem' }}>It focuses on:</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: '500' }}>✔ Body contouring</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: '500' }}>✔ Fat reduction in specific areas</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: '500' }}>✔ Improved body shape</div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. AREAS WE TARGET */}
      <section className="section bg-surface text-center">
        <div className="container">
          <h2 className="section-title">Target <span className="text-accent">Areas</span></h2>
          <div className="grid grid-5" style={{ marginTop: '3.5rem' }}>
            {targetAreas.map(item => (
              <div key={item} className="card" style={{ padding: '1.5rem' }}>
                <p style={{ fontWeight: '700', color: 'var(--color-primary)' }}>✔ {item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. BEFORE / AFTER SECTION */}
      <section className="section text-center">
        <div className="container">
          <h2 className="section-title">Visible <span className="text-accent">Inch Reduction</span></h2>
          <p className="section-subtitle">Notice a slimmer, more contoured body shape after treatment.</p>
          <div style={{ maxWidth: '480px', margin: '3rem auto', position: 'relative', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 15px 45px rgba(0,0,0,0.1)' }}>
            <div style={{ position: 'relative', width: '100%', aspectRatio: '16/6' }}>
              <Image src="/images/neofatbury-slimming-banner.webp" alt="Inch Loss Results" fill style={{ objectFit: 'cover' }} />
            </div>
          </div>
          <Link href="#book" className="btn btn-primary" style={{ padding: '1rem 3rem' }}>Start Your Transformation Today</Link>
        </div>
      </section>

      {/* 6. BENEFITS SECTION */}
      <section className="section bg-surface">
        <div className="container">
          <h2 className="section-title text-center">Benefits of <span className="text-accent">Inch Loss Treatment</span></h2>
          <div className="grid grid-5" style={{ marginTop: '3.5rem' }}>
            {[
              "Targeted fat reduction",
              "Improved body shape",
              "Non-surgical solution",
              "Quick sessions",
              "Boosted confidence"
            ].map(benefit => (
              <div key={benefit} className="card" style={{ padding: '2rem 1rem' }}>
                <p style={{ fontWeight: '700', color: 'var(--color-primary)', marginBottom: '0.5rem' }}>✔</p>
                <p style={{ fontWeight: '600' }}>{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. HOW IT WORKS */}
      <section className="section">
        <div className="container">
          <h2 className="section-title text-center">Our Treatment <span className="text-accent">Process</span></h2>
          <div className="grid grid-4" style={{ marginTop: '4rem' }}>
            {[
              { step: "1", title: "Body Analysis", desc: "Identify problem areas and map exactly where reduction is needed." },
              { step: "2", title: "Customized Plan", desc: "Personalized roadmap based entirely on your unique body type." },
              { step: "3", title: "Treatment Sessions", desc: "Safe and effective targeted fat reduction using modern technology." },
              { step: "4", title: "Results", desc: "Gradual and visible inch loss achieved with each progressive session." }
            ].map(item => (
              <div key={item.step} className="card text-center" style={{ padding: '2.5rem 1.5rem' }}>
                <div style={{ width: '50px', height: '50px', backgroundColor: 'var(--color-primary)', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', fontWeight: 'bold', margin: '0 auto 1.5rem' }}>{item.step}</div>
                <h3 style={{ marginBottom: '1rem', fontSize: '1.15rem' }}>{item.title}</h3>
                <p className="text-muted" style={{ fontSize: '0.95rem' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. TECHNOLOGY SECTION */}
      <section className="section bg-surface">
        <div className="container grid grid-2 items-center">
          <div>
            <h2 className="section-title" style={{ textAlign: 'left' }}>Advanced Body <br/><span className="text-accent">Contouring Technology</span></h2>
            <p className="text-muted" style={{ marginBottom: '2rem', fontSize: '1.1rem', lineHeight: '1.8' }}>
              We use modern, clinically proven techniques to safely reduce inches and absolute improve body contour.
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontWeight: '500' }}>✔ Safe and comfortable procedures</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontWeight: '500' }}>✔ Advanced clinical equipment</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontWeight: '500' }}>✔ Effective, visible results</li>
            </ul>
          </div>
          <div style={{ position: 'relative', height: '380px', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
            <Image src="/images/derma-procedure-fixed.webp" alt="Inch Loss Technology" fill style={{ objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      {/* 9. WHO IS IT FOR */}
      <section className="section text-center">
        <div className="container">
          <h2 className="section-title">Who is <span className="text-accent">This For?</span></h2>
          <div className="grid grid-4" style={{ marginTop: '3.5rem', marginBottom: '3rem' }}>
            {['Stubborn fat areas', 'Body shaping goals', 'Individuals near ideal weight', 'Men & women'].map(item => (
              <div key={item} className="card" style={{ padding: '1.5rem' }}>
                <p style={{ fontWeight: '700', color: 'var(--color-primary)' }}>✔ {item}</p>
              </div>
            ))}
          </div>
          <div style={{ padding: '1rem 2rem', backgroundColor: 'rgba(39, 166, 156, 0.05)', border: '1px dashed var(--color-accent)', borderRadius: 'var(--radius-sm)', display: 'inline-block' }}>
            <p style={{ fontWeight: '500' }}>“Best suited for body contouring, not for overall weight loss.”</p>
          </div>
        </div>
      </section>

      {/* 10. FAQ SECTION */}
      <section className="section bg-surface">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="section-title text-center">Frequently <span className="text-accent">Asked Questions</span></h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '3rem' }}>
            {[
              { q: "How many sessions are needed?", a: "This depends strictly on your target area and body type; we customize it for you." },
              { q: "Is it painful?", a: "The procedure is completely comfortable with minimal to no discomfort." },
              { q: "When will I see results?", a: "Visible changes are typically seen after just a few consistent treatment sessions." },
              { q: "Is it safe?", a: "Yes, our procedures are non-invasive, safe, and medically supervised." }
            ].map((faq, i) => (
              <div key={i} className="card" style={{ padding: '2rem' }}>
                <h4 style={{ fontSize: '1.15rem', marginBottom: '0.75rem' }}>Q: {faq.q}</h4>
                <p className="text-muted">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. TRUST SECTION */}
      <section className="section text-center">
        <div className="container">
          <h2 className="section-title">Why Choose <span className="text-accent">Neo Clinic?</span></h2>
          <div className="grid grid-4" style={{ marginTop: '3.5rem' }}>
            {['Advanced technology', 'Expert clinical supervision', 'Safe & hygienic setup', 'Proven patient results'].map(item => (
              <div key={item} className="card" style={{ padding: '1.5rem' }}>
                <p style={{ fontWeight: '700', color: 'var(--color-primary)' }}>✔ {item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. FINAL CTA */}
      <section className="section bg-primary text-white text-center" style={{ padding: '7rem 0' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'white', marginBottom: '1.5rem' }}>Ready to Reduce Inches?</h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.25rem', marginBottom: '3rem' }}>Achieve a slimmer, more sculpted body starting today.</p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="#book" className="btn" style={{ backgroundColor: 'white', color: 'var(--color-primary)', fontWeight: '700', padding: '1.25rem 3rem' }}>Book Appointment</Link>
            <a href="#book" className="btn btn-accent" style={{ padding: '1.25rem 3rem' }}>Get Free Consultation</a>
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
        .chip {
          background: white;
          padding: 0.6rem 1.2rem;
          border-radius: 50px;
          font-weight: 600;
          font-size: 0.9rem;
          color: var(--color-primary);
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
          border: 1px solid var(--color-border);
        }
      `}</style>
    </>
  );
}
