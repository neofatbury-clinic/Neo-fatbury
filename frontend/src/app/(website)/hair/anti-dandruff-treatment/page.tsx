export const revalidate = 0;
import { getServicePageData } from "@/sanity/fetchers/services";
import ReplicaHero from "@/components/ReplicaHero";
import Image from "next/image";
import Link from "next/link";

export default async function AntiDandruffTreatment() {
  const d = await getServicePageData('anti-dandruff-treatment') as Record<string, unknown>;

  const heroH1     = (d.heroHeadline   as string) || '';
  const heroAccent = (d.heroAccentLine as string) || '';
  const heroDesc   = (d.heroSubtext    as string) || '';

  return (
    <>
      <ReplicaHero 
        titleTeal1={heroH1}
        titleTeal2=""
        titleOrange1={heroAccent}
        titleOrange2=""
        subtext={heroDesc}
        imageSrc={d.heroImage || "/images/neofatbury-dandruff-clinical.png"}
        slug="anti-dandruff-treatment"
      />

      {/* 2. PROBLEM SECTION */}
      <section className="section bg-surface text-center" style={{ padding: '3.5rem 0' }}>
        <div className="container" style={{ maxWidth: '1100px' }}>
          <h2 className="section-title" style={{ fontSize: '2.4rem' }}>Struggling with <span className="text-accent">Persistent Dandruff?</span></h2>
          <div className="grid grid-4" style={{ marginTop: '3rem', gap: '1.5rem' }}>
            {[
              { title: "Flaking Scalp", desc: "Visible white flakes on scalp and clothes causing embarrassment.", icon: "/problem_dandruff_flaking_1777208241761.png" },
              { title: "Itching", desc: "Constant irritating itch that disrupts your daily comfort.", icon: "/problem_itching_scalp_1777208262245.png" },
              { title: "Scalp Redness", desc: "Inflammation and redness causing discomfort on the scalp.", icon: "/problem_redness_scalp_1777208283757.png" },
              { title: "Hair Fall", desc: "Dandruff weakening the scalp leading to increased hair shedding.", icon: "/problem_hair_fall_1777208307723.png" }
            ].map(item => (
              <div key={item.title} className="card-sleek">
                <div style={{ position: 'relative', width: '80px', height: '80px', margin: '0 auto 1.5rem', borderRadius: '50%', overflow: 'hidden', border: '2px solid #f0f8f8' }}>
                  <Image src={item.icon} alt={item.title} fill style={{ objectFit: 'cover' }} />
                </div>
                <h3 style={{ fontSize: '1.15rem', marginBottom: '1rem', color: 'var(--color-primary)', fontWeight: '800' }}>{item.title}</h3>
                <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: '1.7' }}>{item.desc}</p>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '1.2rem', marginTop: '4rem', fontWeight: '700', color: 'var(--color-primary)' }}>
            Dandruff is treatable — <span className="text-accent" style={{ borderBottom: '2px solid rgba(39, 166, 156, 0.3)' }}>our experts restore your scalp health permanently.</span>
          </p>
        </div>
      </section>

      {/* 3. WHAT IS ANTI-DANDRUFF TREATMENT */}
      <section className="section">
        <div className="container grid grid-2 items-center gap-6">
          <div style={{ position: 'relative', height: '500px', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 25px 55px rgba(0,0,0,0.1)' }}>
            <Image src="/images/neofatbury-dandruff-clinical.png" alt="Anti-Dandruff Procedure" fill style={{ objectFit: 'cover' }} />
            <div style={{ position: 'absolute', bottom: '2rem', left: '2rem', background: 'white', padding: '0.75rem 1.5rem', borderRadius: '12px', fontSize: '0.9rem', fontWeight: '800', color: 'var(--color-primary)', boxShadow: '0 8px 20px rgba(0,0,0,0.15)' }}>NEOFATBURY SCALP STANDARD</div>
          </div>
          <div style={{ paddingLeft: '3.5rem' }}>
            <h2 className="section-subtitle" style={{ color: 'var(--color-accent)', fontWeight: '900', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '2.5px', fontSize: '1rem' }}>Scalp Science</h2>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '2rem', fontSize: '2.6rem' }}>What is <span className="text-accent">Anti-Dandruff Treatment?</span></h2>
            <p className="text-muted" style={{ fontSize: '1.15rem', marginBottom: '2.5rem', lineHeight: '1.8' }}>
              Anti-dandruff treatment addresses the root causes of dandruff — fungal overgrowth, excessive sebum, and scalp inflammation — using clinical protocols for lasting scalp health.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '3rem' }}>
              {[
                { t: 'Medicated scalp therapy', i: '💊' },
                { t: 'Anti-fungal treatment', i: '🔬' },
                { t: 'Scalp micro-peeling', i: '🧴' },
                { t: 'PRP scalp booster', i: '💉' }
              ].map(point => (
                <div key={point.t} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontWeight: '800', color: '#004d4f', fontSize: '1rem' }}>
                  <span style={{ fontSize: '1.4rem' }}>{point.i}</span> {point.t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. BENEFITS */}
      <section className="section bg-surface">
        <div className="container">
          <h2 className="section-title text-center">Benefits of <span className="text-accent">Anti-Dandruff Treatment</span></h2>
          <div className="grid grid-5" style={{ marginTop: '4rem', gap: '1.5rem' }}>
            {[
              { t: "Flake-free scalp", i: "❄️" },
              { t: "Reduced itching", i: "😌" },
              { t: "Healthy hair", i: "💪" },
              { t: "Balanced sebum", i: "⚖️" },
              { t: "Confidence boost", i: "🌟" }
            ].map(benefit => (
              <div key={benefit.t} className="card-benefit" style={{ padding: '2.5rem 1.5rem', textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1.25rem' }}>{benefit.i}</div>
                <p style={{ fontWeight: '800', fontSize: '1rem', color: 'var(--color-primary)' }}>{benefit.t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TRUST SECTION */}
      <section className="section text-center">
        <div className="container">
          <h2 className="section-title">Why Choose <span className="text-accent">Neo Clinic?</span></h2>
          <div className="grid grid-4" style={{ marginTop: '4rem', gap: '1.5rem' }}>
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

      {/* 6. FINAL CTA */}
      <section className="section bg-primary text-white text-center" style={{ padding: '5rem 0' }} id="book">
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 6vw, 3.2rem)', color: 'white', marginBottom: '1.5rem', fontWeight: '900' }}>Ready for a Healthy Scalp?</h2>
          <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.95)', marginBottom: '3rem', fontWeight: '500' }}>Schedule your scalp analysis and start your journey towards a dandruff-free, healthy scalp today.</p>
          <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact-us" className="btn btn-accent" style={{ padding: '1.25rem 3.5rem', fontSize: '1.1rem', fontWeight: '900' }}>Book Appointment</Link>
            <a href="tel:7729955577" className="btn" style={{ backgroundColor: 'white', color: 'var(--color-primary)', padding: '1.25rem 3.5rem', fontSize: '1.1rem', fontWeight: '900' }}>Get Free Consultation</a>
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{__html:`
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
          padding: 2.5rem 2rem;
          border-radius: 16px;
          border: 1px solid #f2f2f2;
          box-shadow: 0 6px 25px rgba(0,0,0,0.04);
          transition: all 0.3s ease;
        }
        .card-sleek:hover { transform: translateY(-8px); box-shadow: 0 15px 45px rgba(0,0,0,0.08); border-color: var(--color-accent); }
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
          padding: 3rem 2rem;
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
      ` }} />
    </>
  );
}
