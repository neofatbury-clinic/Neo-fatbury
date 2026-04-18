"use client";
import Image from "next/image";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";

export default function WeightLossTreatment() {
  const addressedConcerns = ["Belly fat", "Obesity management", "Post-pregnancy weight", "Lifestyle weight gain"];

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
      <section className="section bg-surface text-center">
        <div className="container">
          <h2 className="section-title">Struggling to <span className="text-accent">Lose Weight?</span></h2>
          <div className="grid grid-4" style={{ marginTop: '3.5rem' }}>
            {[
              { title: "Stubborn belly fat", desc: "Fat in the abdominal region that refuses to move despite your diet efforts." },
              { title: "Weight gain despite dieting", desc: "Feeling frustrated when healthy eating doesn't reflect on the scale." },
              { title: "Low energy & slow metabolism", desc: "Feeling constantly tired and struggling with a metabolism that feels sluggish." },
              { title: "Yo-yo weight loss", desc: "The cycle of losing weight only to gain it all back shortly after." }
            ].map(item => (
              <div key={item.title} className="card">
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.75rem', color: 'var(--color-primary)' }}>{item.title}</h3>
                <p className="text-muted" style={{ fontSize: '0.95rem' }}>{item.desc}</p>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '1.3rem', marginTop: '3.5rem', fontWeight: '600' }}>
            👉 You don’t need extreme diets — <span className="text-accent">you need the right plan.</span>
          </p>
        </div>
      </section>

      {/* 3. WHAT IS MEDICAL WEIGHT LOSS */}
      <section className="section">
        <div className="container grid grid-2 items-center gap-4">
          <div style={{ position: 'relative', height: '450px', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
            <Image src="/images/neofatbury-slimming-banner.webp" alt="Medical Weight Loss Procedure" fill style={{ objectFit: 'cover' }} />
          </div>
          <div style={{ paddingLeft: '2rem' }}>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>What is <span className="text-accent">Medical Weight Loss?</span></h2>
            <p className="text-muted" style={{ fontSize: '1.1rem', marginBottom: '2rem', lineHeight: '1.8' }}>
              Medical weight loss involves personalized programs based on your specific body type, lifestyle, and health conditions to achieve safe and sustainable fat loss.
            </p>
            <div style={{ padding: '1.25rem', backgroundColor: 'rgba(39, 166, 156, 0.08)', borderLeft: '5px solid var(--color-accent)', borderRadius: 'var(--radius-sm)', marginBottom: '2rem' }}>
              <p style={{ fontWeight: '600', color: 'var(--color-primary)' }}>“We focus on fat loss and healthy weight management — not quick fixes.”</p>
            </div>
            <h4 style={{ marginBottom: '1rem' }}>May include:</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: '500' }}>✔ Diet planning</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: '500' }}>✔ Body contouring</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: '500' }}>✔ Lifestyle guidance</div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHAT WE ADDRESS */}
      <section className="section bg-surface text-center">
        <div className="container">
          <h2 className="section-title">We Help <span className="text-accent">With</span></h2>
          <div className="grid grid-4" style={{ marginTop: '3.5rem' }}>
            {addressedConcerns.map(item => (
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
          <h2 className="section-title text-center">Real <span className="text-accent">Transformations</span></h2>
          <p className="section-subtitle">See visible fat reduction and body shaping results from our clients.</p>
          <div style={{ maxWidth: '480px', margin: '3rem auto', position: 'relative', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 15px 45px rgba(0,0,0,0.1)' }}>
            <div style={{ position: 'relative', width: '100%', aspectRatio: '16/6' }}>
              <Image src="/images/neofatbury-slimming-banner.webp" alt="Weight Loss Results" fill style={{ objectFit: 'cover' }} />
            </div>
          </div>
          <Link href="#book" className="btn btn-primary" style={{ padding: '1rem 3rem' }}>Start Your Weight Loss Journey</Link>
        </div>
      </section>

      {/* 6. BENEFITS SECTION */}
      <section className="section bg-surface">
        <div className="container">
          <h2 className="section-title text-center">Benefits of Our <span className="text-accent">Weight Loss Program</span></h2>
          <div className="grid grid-5" style={{ marginTop: '3.5rem' }}>
            {[
              "Safe & sustainable weight loss",
              "Improved metabolism",
              "Better energy levels",
              "Reduced fat percentage",
              "Long-term results"
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
          <h2 className="section-title text-center">Our Weight Loss <span className="text-accent">Process</span></h2>
          <div className="grid grid-4" style={{ marginTop: '4rem' }}>
            {[
              { step: "1", title: "Consultation", desc: "Comprehensive body & health analysis for a detailed baseline." },
              { step: "2", title: "Personalized Plan", desc: "Customized diet + treatment program tailored exactly to you." },
              { step: "3", title: "Treatment Sessions", desc: "Expert clinical sessions based on your individual needs." },
              { step: "4", title: "Monitoring", desc: "Regular tracking of your progress and lifestyle adjustments." }
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
            <h2 className="section-title" style={{ textAlign: 'left' }}>Advanced Weight <br/><span className="text-accent">Loss Approach</span></h2>
            <p className="text-muted" style={{ marginBottom: '2rem', fontSize: '1.1rem', lineHeight: '1.8' }}>
              We combine medical expertise, advanced technology, and personalized care to deliver effective and healthy weight loss results.
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontWeight: '500' }}>✔ Safe medical methods</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontWeight: '500' }}>✔ Customized individual plans</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontWeight: '500' }}>✔ Expert clinical supervision</li>
            </ul>
          </div>
          <div style={{ position: 'relative', height: '380px', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
            <Image src="/images/derma-procedure-fixed.webp" alt="Weight Loss Technology" fill style={{ objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      {/* 9. WHO IS IT FOR */}
      <section className="section text-center">
        <div className="container">
          <h2 className="section-title">Who is <span className="text-accent">This For?</span></h2>
          <div className="grid grid-4" style={{ marginTop: '3.5rem' }}>
            {['People struggling with weight loss', 'Individuals with stubborn fat', 'Busy professionals', 'Men & women'].map(item => (
              <div key={item} className="card" style={{ padding: '1.5rem' }}>
                <p style={{ fontWeight: '700', color: 'var(--color-primary)' }}>✔ {item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FAQ SECTION */}
      <section className="section bg-surface">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="section-title text-center">Frequently <span className="text-accent">Asked Questions</span></h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '3rem' }}>
            {[
              { q: "How much weight can I lose?", a: "Results vary significantly based on your unique body type and adherence to the plan." },
              { q: "Is weight loss treatment safe?", a: "Yes, all our plans are completely medically guided and totally safe." },
              { q: "Is this a diet program?", a: "No, it’s a complete lifestyle-based health plan for whole-body wellness." },
              { q: "Will weight come back?", a: "We focus on long-term sustainability to ensure your results are permanent." }
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
            {['Expert clinical guidance', 'Customized programs', 'Proven patient results', 'Safe medical approach'].map(item => (
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
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'white', marginBottom: '1.5rem' }}>Ready to Transform Your Body?</h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.25rem', marginBottom: '3rem' }}>Start your safe and effective weight loss journey today.</p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="#book" className="btn" style={{ backgroundColor: 'white', color: 'var(--color-primary)', fontWeight: '700', padding: '1.25rem 3rem' }}>Book Appointment</Link>
            <a href="#book" className="btn btn-accent" style={{ padding: '1.25rem 3rem' }}>Get Free Consultation</a>
          </div>
        </div>
      </section>

      <style jsx>{`
        .service-hero {
          background: linear-gradient(135deg, rgba(39, 166, 156, 0.05) 0%, rgba(255,255,255,1) 100%);
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
