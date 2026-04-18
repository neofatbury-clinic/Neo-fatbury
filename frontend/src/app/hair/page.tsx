import Image from "next/image";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";

export const metadata = {
  title: 'Hair Clinic in Hyderabad | Hair Loss & Transplant Specialists - NeoFatbury',
  description: 'Expert hair care in Hyderabad (Kukatpally & Himayatnagar). Specializing in Hair Loss Treatment and Hair Transplantation. Regrow your confidence with NeoFatbury.',
};

const TREATMENTS = [
  {
    title: 'Hair Loss Treatment',
    desc: 'Stop hair thinning and promote regrowth with clinically proven therapies and medical expertise.',
    href: '/hair/hair-loss-treatment',
    img: '/images/neofatbury-hair2-banner.webp',
  },
  {
    title: 'Hair Transplantation',
    desc: 'Permanent natural-looking results with modern FUE and FUT techniques led by specialist trichologists.',
    href: '/hair/hair-transplantation',
    img: '/images/before-after-laser.webp',
  },
];

export default function HairPage() {
  return (
    <>
      {/* 1. HERO SECTION - TRIPLE PILLAR */}
      <section className="service-hero" style={{ backgroundImage: 'url(/images/hair-loss-bg.png)', backgroundPosition: 'left center' }}>
        <div className="container">
          <div className="service-hero-grid">
            {/* Visual Subject migrated to background */}
            <div className="service-hero-text">
              <h1>Reclaim Your Hair,<br/><span className="accent">Restore Confidence</span></h1>
              <p>Advanced trichology solutions for hair thinning, balding, and scalp health. Personalized treatments to give you thick, healthy hair again.</p>
              <div className="hero-trust-badges">
                <div className="hero-trust-badge"><span>💎</span><span>PROVEN RESULTS</span></div>
                <div className="hero-trust-badge"><span>👨‍⚕️</span><span>EXPERT CARE</span></div>
              </div>
            </div>
            <div className="service-hero-form"><LeadForm title="Book Hair Analysis" /></div>
          </div>
        </div>
      </section>

      {/* TREATMENTS GRID */}
      <section className="section" id="treatments">
        <div className="container">
          <h2 className="section-title text-center">Hair <span className="text-accent">Solutions</span></h2>
          <p className="section-subtitle text-center">Comprehensive care for hair regrowth and restoration.</p>
          
          <div className="grid grid-2" style={{ marginTop: '3rem', maxWidth: '900px', margin: '3rem auto 0' }}>
            {TREATMENTS.map((t) => (
              <div key={t.title} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ position: 'relative', height: '240px', marginBottom: '1.5rem', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
                  <Image src={t.img} alt={t.title} fill style={{ objectFit: 'cover' }} />
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>{t.title}</h3>
                <p className="text-muted" style={{ marginBottom: '1.5rem', flexGrow: 1 }}>{t.desc}</p>
                <Link href={t.href} className="btn btn-outline" style={{ width: 'fit-content' }}>Learn More</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section bg-surface">
        <div className="container">
          <h2 className="section-title text-center">Why NeoFatbury for <span className="text-accent">Hair?</span></h2>
          <div className="grid grid-3 mobile-grid-2" style={{ marginTop: '3rem' }}>
            {[
              { title: 'Specialist Trichologists', desc: 'Expert doctors specializing in hair regrowth and restoration.' },
              { title: 'Proven Results', desc: 'Join thousands of happy clients who reclaimed their natural hair.' },
              { title: 'Advanced Facilities', desc: 'Sterile, state-of-the-art clinics for safe procedures.' },
            ].map((p) => (
              <div key={p.title} className="card text-center" style={{ padding: '2rem' }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: 'var(--color-primary)' }}>{p.title}</h3>
                <p className="text-muted">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section bg-primary text-center">
        <div className="container">
          <h3 style={{ color: 'white', fontSize: '2.5rem', marginBottom: '1.5rem' }}>Start Your Hair Journey</h3>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.25rem', marginBottom: '2rem' }}>Get a detailed analysis from our hair experts today.</p>
          <Link href="/contact-us" className="btn" style={{ backgroundColor: 'white', color: 'var(--color-primary)' }}>Book Appointment</Link>
        </div>
      </section>
    </>
  );
}
