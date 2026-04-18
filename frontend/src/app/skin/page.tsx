import Image from "next/image";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";

export const metadata = {
  title: 'Skin Clinic in Hyderabad | Best Dermatologist for Acne, Scar & Brightening - NeoFatbury',
  description: 'NeoFatbury is the leading skin clinic in Hyderabad (Kukatpally & Himayatnagar) for Laser Hair Reduction, Acne Scar Treatment, and Skin Brightening. Consult our expert dermatologists today.',
};

const TREATMENTS = [
  {
    title: 'Laser Hair Reduction',
    desc: 'Permanent reduction of unwanted hair using advanced, US-FDA approved laser technology.',
    href: '/skin/laser-hair-reduction',
    img: '/images/before-after-laser.webp',
  },
  {
    title: 'Acne & Scar Treatment',
    desc: 'Advanced solutions for active acne and deep scars using chemical peels, microneedling, and lasers.',
    href: '/skin/acne-scar-treatment',
    img: '/images/acne-before-after.webp',
  },
  {
    title: 'Skin Brightening',
    desc: 'Remove pigmentation, tan, and dark spots with our clinically proven skin lightening treatments.',
    href: '/skin/skin-brightening',
    img: '/images/neofatbury-cheek-banner.webp',
  },
];

export default function SkinPage() {
  return (
    <>
      {/* 1. HERO SECTION - TRIPLE PILLAR */}
      <section className="service-hero" style={{ backgroundImage: 'url(/images/skin-brightening-bg.png)', backgroundPosition: 'left center' }}>
        <div className="container">
          <div className="service-hero-grid">
            {/* Visual Subject migrated to background */}
            <div className="service-hero-text">
              <h1>Dermatologist-Led<br/><span className="accent">Advanced Skin Clinic</span></h1>
              <p>Restore your natural glow with Hyderabad's most trusted skin experts. US-FDA approved technology for safe and effective results.</p>
              <div className="hero-trust-badges">
                <div className="hero-trust-badge"><span>🏥</span><span>EXPERT DOCTORS</span></div>
                <div className="hero-trust-badge"><span>🛡️</span><span>FDA APPROVED</span></div>
              </div>
            </div>
            <div className="service-hero-form"><LeadForm title="Book Free Skin Analysis" /></div>
          </div>
        </div>
      </section>

      {/* TREATMENTS GRID */}
      <section className="section" id="treatments">
        <div className="container">
          <h2 className="section-title text-center">Skin <span className="text-accent">Treatments</span></h2>
          <p className="section-subtitle text-center">Specialized care for all your skin concerns.</p>
          
          <div className="grid grid-3" style={{ marginTop: '3rem' }}>
            {TREATMENTS.map((t) => (
              <div key={t.title} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ position: 'relative', height: '240px', marginBottom: '1.5rem', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
                  <Image src={t.img} alt={t.title} fill style={{ objectFit: 'cover' }} />
                </div>
                <h3 style={{ fontSize: '1.35rem', marginBottom: '0.5rem' }}>{t.title}</h3>
                <p className="text-muted" style={{ marginBottom: '1.25rem', flexGrow: 1 }}>{t.desc}</p>
                <Link href={t.href} className="btn btn-outline" style={{ width: 'fit-content' }}>Learn More</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section bg-surface">
        <div className="container">
          <h2 className="section-title text-center">Why Choose <span className="text-accent">NeoFatbury Skin Clinic?</span></h2>
          <div className="grid grid-3" style={{ marginTop: '3rem' }}>
            {[
              { title: 'Expert Dermatologists', desc: 'All treatments are supervised by qualified medical professionals.' },
              { title: 'Advanced Technology', desc: 'US-FDA approved equipment for maximum safety and efficacy.' },
              { title: 'Personalized Care', desc: 'Tailored treatment plans based on your unique skin type.' },
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
          <h3 style={{ color: 'white', fontSize: '2.2rem', marginBottom: '1rem' }}>Reveal Your Best Skin Today</h3>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.15rem', marginBottom: '1.5rem' }}>Consult with our experts at Kukatpally or Himayatnagar.</p>
          <Link href="/contact-us" className="btn" style={{ backgroundColor: 'white', color: 'var(--color-primary)' }}>Book Free Consultation</Link>
        </div>
      </section>
    </>
  );
}
