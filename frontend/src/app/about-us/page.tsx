import Image from "next/image";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";

export const metadata = {
  title: 'About Us | NeoFatbury – Skin Hair Slimming Clinic Hyderabad',
  description: 'Learn about NeoFatbury — Hyderabad\'s premier skin, hair and slimming clinic with US-FDA approved technology and expert dermatological care in Kukatpally & Himayatnagar.',
};

export default function AboutUs() {
  return (
    <>
      {/* 1. HERO */}
      <section style={{ background: 'linear-gradient(135deg, #f0f7f6 0%, #ffffff 100%)', padding: '5rem 0 4rem' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 0.8fr', alignItems: 'center', gap: '4rem' }}>
          <div style={{ flex: '1 1 500px' }}>
            <p style={{ color: 'var(--color-accent)', fontWeight: '600', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '1.5px', fontSize: '0.85rem' }}>About NeoFatbury</p>
            <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem', lineHeight: 1.2 }}>
              Hyderabad's Premier <br/><span className="text-accent">Skin, Hair & Slimming Clinic</span>
            </h1>
            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', marginBottom: '2rem', lineHeight: 1.8 }}>
              NeoFatbury was founded on a single belief: every person deserves access to world-class aesthetic and dermatological care — safe, transparent, and results-driven.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '700', color: 'var(--color-primary)' }}>✅ 10+ Years Expert</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '700', color: 'var(--color-primary)' }}>✅ US-FDA Tech</div>
            </div>
            <div style={{ flex: '1 1 400px', position: 'relative', height: '300px', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
              <Image src="/images/clinic-reception.webp" alt="NeoFatbury Clinic Interior" fill style={{ objectFit: 'cover' }} />
            </div>
          </div>
          <div>
            <LeadForm />
          </div>
        </div>
      </section>

      {/* 2. STATS */}
      <section className="section bg-surface">
        <div className="container">
          <div className="grid grid-4">
            {[
              { number: '10+', label: 'Years of Expertise' },
              { number: '15,000+', label: 'Success Stories' },
              { number: '2', label: 'Premium Clinics' },
              { number: '100%', label: 'US-FDA Approved Tech' },
            ].map(stat => (
              <div key={stat.label} className="card text-center" style={{ padding: '2.5rem 1.5rem' }}>
                <p style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--color-accent)', marginBottom: '0.5rem' }}>{stat.number}</p>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', fontWeight: '500' }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. OUR STORY */}
      <section className="section">
        <div className="container grid grid-2 items-center">
          <div style={{ position: 'relative', height: '420px', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
            <Image src="/images/derma-procedure-fixed.webp" alt="NeoFatbury Skin Treatment" fill style={{ objectFit: 'cover' }} />
          </div>
          <div>
            <h2 className="section-title" style={{ textAlign: 'left' }}>Our <span className="text-accent">Story</span></h2>
            <p className="text-muted" style={{ marginBottom: '1.5rem', fontSize: '1.05rem', lineHeight: 1.8 }}>
              NeoFatbury was established with the vision of bringing internationally certified aesthetic treatments to the people of Hyderabad. We combine clinical precision with compassionate care — ensuring every client feels heard, safe, and confident in their treatment journey.
            </p>
            <p className="text-muted" style={{ marginBottom: '1.5rem', fontSize: '1.05rem', lineHeight: 1.8 }}>
              Today, we operate two premium clinics in Kukatpally and Himayatnagar — two of Hyderabad's most strategic locations — serving thousands of happy clients every year across skin, hair, and body treatments.
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {['Founded by qualified medical professionals', 'Transparent pricing — no hidden charges', 'Every treatment supervised by certified dermatologists', 'Post-treatment care and follow-up included'].map(p => (
                <li key={p} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', fontSize: '0.97rem', color: 'var(--color-text)' }}>
                  <span style={{ color: 'var(--color-accent)', fontWeight: 'bold', marginTop: '2px' }}>✔</span> {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 4. MISSION & VALUES */}
      <section className="section bg-surface">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 className="section-title">Mission <span className="text-secondary">&amp; Values</span></h2>
            <p className="section-subtitle">A patients-first approach built on clinical excellence and ethical care.</p>
          </div>
          <div className="grid grid-3" style={{ marginTop: '3.5rem' }}>
            {[
              { title: 'Excellence', desc: 'Clinical precision in every skin and hair procedure.', icon: '🏆' },
              { title: 'Integrity', desc: 'Honest clinical advice and transparent pricing.', icon: '🤝' },
              { title: 'Care', desc: 'Patient-centric approach for lasting well-being.', icon: '❤️' },
            ].map((v, i) => (
              <div key={i} className="card" style={{ padding: '2.5rem 1.5rem', backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', border: '1px solid #f0f0f0' }}>
                <div style={{ fontSize: '2.2rem', marginBottom: '1.25rem' }}>{v.icon}</div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.75rem', color: '#00acb1', fontWeight: '700' }}>{v.title}</h3>
                <p style={{ fontSize: '0.9rem', color: '#666' }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CERTIFICATIONS */}
      <section className="section text-center">
        <div className="container">
          <h2 className="section-title">Certifications <span className="text-accent">& Accreditations</span></h2>
          <div className="grid grid-3" style={{ marginTop: '3rem', maxWidth: '800px', margin: '3rem auto 0' }}>
            {[
              { badge: '🏅', title: 'ISO 9001:2015 Certified', desc: 'Our clinical processes meet international quality management standards.' },
              { badge: '🇺🇸', title: 'US-FDA Approved Technology', desc: 'All equipment used has passed US-FDA safety and efficacy evaluation.' },
              { badge: '👨‍⚕️', title: 'Certified Dermatologists', desc: 'Every procedure is performed or directly supervised by board-certified dermatologists.' },
            ].map(c => (
              <div key={c.title} className="card" style={{ padding: '2rem' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{c.badge}</div>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.75rem', color: 'var(--color-primary)' }}>{c.title}</h3>
                <p className="text-muted" style={{ fontSize: '0.9rem' }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CLINICS */}
      <section className="section bg-surface">
        <div className="container">
          <h2 className="section-title text-center">Our <span className="text-accent">Clinic Locations</span></h2>
          <div className="grid grid-2" style={{ marginTop: '3rem', gap: '2rem' }}>
            <div className="card" style={{ padding: '2.5rem' }}>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--color-primary)', marginBottom: '0.75rem' }}>📍 Kukatpally Branch</h3>
              <p className="text-muted" style={{ marginBottom: '1.5rem' }}>Road No 1, KPHB Colony, Kukatpally, Hyderabad — 500072</p>
              <a href="tel:9700641000" style={{ color: 'var(--color-accent)', fontWeight: '600', display: 'block', marginBottom: '1rem' }}>📞 9700641000</a>
              <Link href="/location/kukatpally-hyderabad" className="btn btn-primary" style={{ fontSize: '0.9rem' }}>View Location →</Link>
            </div>
            <div className="card" style={{ padding: '2.5rem' }}>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--color-primary)', marginBottom: '0.75rem' }}>📍 Himayatnagar Branch</h3>
              <p className="text-muted" style={{ marginBottom: '1.5rem' }}>Main Road, Himayatnagar, Hyderabad — 500029</p>
              <a href="tel:9700641000" style={{ color: 'var(--color-accent)', fontWeight: '600', display: 'block', marginBottom: '1rem' }}>📞 9700641000</a>
              <Link href="/location/himayatnagar-hyderabad" className="btn btn-primary" style={{ fontSize: '0.9rem' }}>View Location →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CTA */}
      <section className="section bg-primary text-center" style={{ padding: '6rem 1.5rem' }}>
        <h2 style={{ fontSize: '2.5rem', color: 'white', marginBottom: '1rem' }}>Ready to Start Your Transformation?</h2>
        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.15rem', marginBottom: '2rem' }}>Book a free consultation with our expert dermatologists today.</p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/contact-us" className="btn" style={{ backgroundColor: 'white', color: 'var(--color-primary)' }}>Book Appointment</Link>
          <a href="tel:9700641000" className="btn btn-accent">📞 9700641000</a>
        </div>
      </section>
    </>
  );
}
