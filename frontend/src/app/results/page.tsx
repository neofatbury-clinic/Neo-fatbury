import Image from "next/image";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";

export const metadata = {
  title: 'Results Gallery | NeoFatbury – Before & After Transformations Hyderabad',
  description: 'View real before and after results from NeoFatbury clients in Hyderabad. Skin, hair, and slimming treatment transformations from our Kukatpally and Himayatnagar clinics.',
};

const RESULTS = [
  {
    category: 'Skin',
    treatment: 'Acne Scar Treatment',
    img: '/images/acne-before-after.webp',
    desc: 'Significant reduction in acne scars, improved skin texture and tone after 6 sessions.',
    href: '/skin/acne-scar-treatment',
  },
  {
    category: 'Skin',
    treatment: 'Laser Hair Reduction',
    img: '/images/before-after-laser.webp',
    desc: 'Smooth, stubble-free skin after laser hair reduction. Permanent reduction achieved.',
    href: '/skin/laser-hair-reduction',
  },
  {
    category: 'Skin',
    treatment: 'Skin Brightening',
    img: '/images/neofatbury-cheek-banner.webp',
    desc: 'Visibly brighter, more even skin tone with reduced dark spots and pigmentation.',
    href: '/skin/skin-brightening',
  },
  {
    category: 'Hair',
    treatment: 'Hair Loss Treatment',
    img: '/images/neofatbury-hair2-banner.webp',
    desc: 'Improved hair density and reduced hair fall with targeted clinical treatment.',
    href: '/hair/hair-loss-treatment',
  },
  {
    category: 'Slimming',
    treatment: 'CoolSculpting',
    img: '/images/neofatbury-slimming-banner.webp',
    desc: 'Visible reduction in belly and love handle fat after non-surgical CoolSculpting sessions.',
    href: '/slimming/coolsculpting-fat-freezing',
  },
  {
    category: 'Slimming',
    treatment: 'Inch Loss Treatment',
    img: '/images/derma-procedure-fixed.webp',
    desc: 'Measurable inch reduction around waist and thighs with targeted body contouring.',
    href: '/slimming/inch-loss-treatment',
  },
];

export default function Results() {
  return (
    <>
      {/* 1. HERO */}
      <section style={{ background: 'linear-gradient(135deg, #f0f7f6 0%, #ffffff 100%)', padding: '5rem 0 4rem', textAlign: 'center' }}>
        <div className="container">
          <p style={{ color: 'var(--color-accent)', fontWeight: '600', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '1.5px', fontSize: '0.85rem' }}>Real Client Transformations</p>
          <h1 style={{ fontSize: '3rem', marginBottom: '1.25rem' }}>
            Our <span className="text-accent">Results Gallery</span>
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--color-text-muted)', maxWidth: '650px', margin: '0 auto 2rem', lineHeight: 1.8 }}>
            Real transformations from real NeoFatbury clients. Every result here was achieved under the direct supervision of our certified dermatologists.
          </p>
          <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', fontStyle: 'italic' }}>
            * Results may vary from person to person depending on individual body types, genetics, and treatment adherence.
          </p>
        </div>
      </section>

      {/* 2. RESULTS GRID */}
      <section className="section">
        <div className="container">
          <div className="grid grid-3" style={{ gap: '2rem' }}>
            {RESULTS.map(r => (
              <div key={r.treatment} className="card" style={{ overflow: 'hidden', padding: 0 }}>
                <div style={{ position: 'relative', height: '280px' }}>
                  <Image src={r.img} alt={`${r.treatment} before after results`} fill style={{ objectFit: 'cover' }} />
                  <div style={{
                    position: 'absolute', top: '1rem', left: '1rem',
                    backgroundColor: 'var(--color-accent)', color: 'white',
                    fontSize: '0.75rem', fontWeight: '700', padding: '0.25rem 0.75rem',
                    borderRadius: '999px', textTransform: 'uppercase', letterSpacing: '1px',
                  }}>
                    {r.category}
                  </div>
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--color-primary)' }}>{r.treatment}</h3>
                  <p className="text-muted" style={{ fontSize: '0.9rem', marginBottom: '1.25rem', lineHeight: 1.6 }}>{r.desc}</p>
                  <Link href={r.href} style={{ color: 'var(--color-accent)', fontWeight: '600', fontSize: '0.9rem' }}>
                    Learn about this treatment →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. DISCLAIMER */}
      <section className="section bg-surface">
        <div className="container" style={{ maxWidth: '750px', textAlign: 'center' }}>
          <h2 className="section-title">About Our <span className="text-accent">Results</span></h2>
          <p className="text-muted" style={{ lineHeight: 1.8, marginBottom: '1.5rem' }}>
            All results shown are from real NeoFatbury clients who consented to sharing their transformation. Results vary based on individual body type, genetics, the specific condition being treated, and adherence to post-treatment care instructions.
          </p>
          <p className="text-muted" style={{ lineHeight: 1.8 }}>
            Our certified dermatologists conduct a thorough skin and hair analysis before any treatment to set realistic expectations and create a plan tailored to your needs.
          </p>
        </div>
      </section>

      {/* 4. TRUST SIGNALS */}
      <section className="section text-center">
        <div className="container">
          <h2 className="section-title">Why <span className="text-secondary">15,000+ Clients</span> Trust Us</h2>
          <div className="grid grid-4" style={{ marginTop: '3.5rem' }}>
            {[
              { title: '10+ Years', desc: 'Clinical expertise in dermatology.', icon: '🏅' },
              { title: 'Certified Doctors', desc: 'Treatments led by medical experts.', icon: '👨‍⚕️' },
              { title: 'Advanced Tech', desc: 'US-FDA approved clinical equipment.', icon: '🔬' },
              { title: 'Results Driven', desc: 'Proven track record of success.', icon: '📈' },
            ].map((t, i) => (
              <div key={i} className="card" style={{ padding: '2.5rem 1.5rem', backgroundColor: 'white', borderRadius: '12px', border: '1px solid #f0f0f0' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1.25rem' }}>{t.icon}</div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: '#00acb1', fontWeight: '700' }}>{t.title}</h3>
                <p style={{ fontSize: '0.92rem', color: '#666' }}>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CONSULTATION FORM */}
      <section className="section bg-surface" id="book">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) minmax(300px, 1fr)', gap: '4rem', alignItems: 'center' }}>
          <div>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>Want Results <span className="text-accent">Like These?</span></h2>
            <p className="text-muted" style={{ fontSize: '1.15rem', lineHeight: 1.8, marginBottom: '2rem' }}>
              Every transformation starts with a conversation. Meet our experts for a detailed analysis of your skin, hair, or body goals. 
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
               <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: '700', color: 'var(--color-primary)' }}>💎 Advanced US-FDA Equipment</div>
               <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: '700', color: 'var(--color-primary)' }}>👩‍⚕️ Expert Board-Certified Doctors</div>
               <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: '700', color: 'var(--color-primary)' }}>📍 Convenient Hyderabad Locations</div>
            </div>
          </div>
          <div>
            <LeadForm title="Book Your Transformation" />
          </div>
        </div>
      </section>

      {/* 6. FINAL CTA */}
      <section className="section bg-primary text-center" style={{ padding: '6rem 1.5rem' }}>
        <h2 style={{ fontSize: '2.5rem', color: 'white', marginBottom: '1rem' }}>Your Transformation Starts Here</h2>
        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.15rem', marginBottom: '2rem' }}>Book a free consultation and let our experts design your personal treatment plan.</p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/contact-us" className="btn" style={{ backgroundColor: 'white', color: 'var(--color-primary)' }}>Book Appointment</Link>
          <a href="tel:9700641000" className="btn btn-accent">📞 9700641000</a>
        </div>
      </section>
    </>
  );
}
