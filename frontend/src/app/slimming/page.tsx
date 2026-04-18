import Image from "next/image";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";

export const metadata = {
  title: 'Slimming Clinic in Hyderabad | Weight Loss & Body Contouring - NeoFatbury',
  description: 'Lose weight and shape your body at NeoFatbury Hyderabad. Advanced treatments like CoolSculpting, medical Weight Loss, and Inch Loss. Safe, non-surgical results.',
};

const TREATMENTS = [
  {
    title: 'CoolSculpting (Fat Freezing)',
    desc: 'Non-surgical fat reduction that freezes and eliminates stubborn fat cells permanently.',
    href: '/slimming/coolsculpting-fat-freezing',
    img: '/images/neofatbury-slimming-banner.webp',
  },
  {
    title: 'Medical Weight Loss',
    desc: 'Doctor-guided personalized programs for safe, effective, and sustainable weight management.',
    href: '/slimming/weight-loss-treatment',
    img: '/images/derma-procedure-fixed.webp',
  },
  {
    title: 'Inch Loss Treatment',
    desc: 'Targeted body contouring to reduce measurements in stubborn areas like belly, thighs, and arms.',
    href: '/slimming/inch-loss-treatment',
    img: '/images/neofatbury-slimming-banner.webp',
  },
];

export default function SlimmingPage() {
  return (
    <>
      {/* 1. HERO SECTION - TRIPLE PILLAR */}
      <section className="service-hero" style={{ backgroundImage: 'url(/images/coolsculpting-bg.png)', backgroundPosition: 'left center' }}>
        <div className="container">
          <div className="service-hero-grid">
            {/* Visual Subject migrated to background */}
            <div className="service-hero-text">
              <h1>Get the Body You<br/><span className="accent">Always Desired</span></h1>
              <p>Safe, scientific, and medically supervised slimming solutions. From fat freezing to holistic weight management, achieve your goals gracefully.</p>
              <div className="hero-trust-badges">
                <div className="hero-trust-badge"><span>❄️</span><span>NON-SURGICAL</span></div>
                <div className="hero-trust-badge"><span>🛡️</span><span>MEDICALLY SAFE</span></div>
              </div>
            </div>
            <div className="service-hero-form"><LeadForm title="Book Body Analysis" /></div>
          </div>
        </div>
      </section>

      {/* TREATMENTS GRID */}
      <section className="section" id="treatments">
        <div className="container">
          <h2 className="section-title text-center">Slimming & <span className="text-accent">Contouring</span></h2>
          <p className="section-subtitle text-center">Non-surgical procedures for a slimmer, more defined silhouette.</p>
          
          <div className="grid grid-3" style={{ marginTop: '3rem' }}>
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
          <h2 className="section-title text-center">Modern <span className="text-accent">Body Transformation</span></h2>
          <div className="grid grid-3" style={{ marginTop: '3rem' }}>
            {[
              { title: 'Safe & Non-Surgical', desc: 'Achieve significant results without the risks of invasive surgery.' },
              { title: 'Medically Supervised', desc: 'Personalized programs guided by doctors for safe weight loss.' },
              { title: 'No Weight-Loss Stigma', desc: 'Supportive, private environment focused on your health and goals.' },
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
          <h3 style={{ color: 'white', fontSize: '2.5rem', marginBottom: '1.5rem' }}>Ready to Shape Your Future?</h3>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.25rem', marginBottom: '2rem' }}>Schedule your body composition analysis today.</p>
          <Link href="/contact-us" className="btn" style={{ backgroundColor: 'white', color: 'var(--color-primary)' }}>Book Consultation</Link>
        </div>
      </section>
    </>
  );
}
