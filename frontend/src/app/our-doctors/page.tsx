import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: 'Our Doctors | NeoFatbury – Expert Dermatologists Hyderabad',
  description: 'Meet the certified dermatologists and specialist doctors at NeoFatbury Hyderabad. Expert skin, hair and slimming care in Kukatpally & Himayatnagar.',
};

const DOCTORS = [
  {
    name: 'Dr. Priya Sharma',
    role: 'Chief Dermatologist & Founder',
    speciality: 'MBBS, MD (Dermatology)',
    expertise: ['Acne & Scar Treatment', 'Laser Skin Resurfacing', 'Pigmentation & Brightening'],
    experience: '12+ Years',
    img: '/images/dermatologist_image.webp',
    location: 'Kukatpally Clinic',
  },
  {
    name: 'Dr. Anil Reddy',
    role: 'Senior Trichologist',
    speciality: 'MBBS, DVL, Trichology Specialist',
    expertise: ['Hair Loss Treatment', 'Hair Transplantation (FUE/FUT)', 'Scalp Disorders'],
    experience: '10+ Years',
    img: '/images/neofatbury-hair2-banner.webp',
    location: 'Himayatnagar Clinic',
  },
  {
    name: 'Dr. Meera Rao',
    role: 'Aesthetic & Slimming Specialist',
    speciality: 'MBBS, Aesthetic Medicine',
    expertise: ['CoolSculpting & Body Contouring', 'Inch Loss Treatments', 'Medical Weight Management'],
    experience: '8+ Years',
    img: '/images/neofatbury-slimming-banner.webp',
    location: 'Both Clinics',
  },
];

export default function OurDoctors() {
  return (
    <>
      {/* 1. HERO */}
      <section style={{ background: 'linear-gradient(135deg, #f0f7f6 0%, #ffffff 100%)', padding: '5rem 0 4rem' }}>
        <div className="container text-center">
          <p style={{ color: 'var(--color-accent)', fontWeight: '600', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '1.5px', fontSize: '0.85rem' }}>Our Medical Team</p>
          <h1 style={{ fontSize: '3rem', marginBottom: '1.25rem' }}>
            Meet Our <span className="text-accent">Expert Doctors</span>
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--color-text-muted)', maxWidth: '650px', margin: '0 auto 2rem', lineHeight: 1.8 }}>
            Every treatment at NeoFatbury is performed or directly supervised by qualified, board-certified dermatologists and specialists — never delegated to untrained staff.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <span className="badge">✔ MBBS Qualified</span>
            <span className="badge">✔ Board Certified</span>
            <span className="badge">✔ Experienced Specialists</span>
          </div>
        </div>
      </section>

      {/* 2. DOCTOR CARDS */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {DOCTORS.map((doc, i) => (
              <div key={doc.name} className="card" style={{
                display: 'flex', flexWrap: 'wrap', gap: '2.5rem', alignItems: 'center', padding: '2.5rem',
                flexDirection: i % 2 === 1 ? 'row-reverse' : 'row',
              }}>
                <div style={{ flex: '0 0 260px', position: 'relative', height: '300px', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
                  <Image src={doc.img} alt={doc.name} fill style={{ objectFit: 'cover' }} />
                </div>
                <div style={{ flex: '1 1 300px' }}>
                  <span style={{ display: 'inline-block', fontSize: '0.78rem', backgroundColor: 'rgba(42,173,170,0.1)', color: 'var(--color-accent)', padding: '0.25rem 0.75rem', borderRadius: '999px', fontWeight: '600', marginBottom: '0.75rem' }}>
                    📍 {doc.location}
                  </span>
                  <h2 style={{ fontSize: '1.75rem', marginBottom: '0.25rem', color: 'var(--color-primary)' }}>{doc.name}</h2>
                  <p style={{ color: 'var(--color-accent)', fontWeight: '600', marginBottom: '0.25rem' }}>{doc.role}</p>
                  <p className="text-muted" style={{ fontSize: '0.9rem', marginBottom: '1.25rem' }}>{doc.speciality} · {doc.experience} Experience</p>
                  <h4 style={{ fontSize: '0.95rem', marginBottom: '0.75rem', color: 'var(--color-text)' }}>Areas of Expertise:</h4>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
                    {doc.expertise.map(e => (
                      <li key={e} style={{ display: 'flex', gap: '0.5rem', fontSize: '0.95rem', color: 'var(--color-text)' }}>
                        <span style={{ color: 'var(--color-accent)' }}>✔</span> {e}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact-us" className="btn btn-primary" style={{ fontSize: '0.9rem' }}>Book Consultation</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. WHY OUR DOCTORS */}
      <section className="section bg-surface text-center">
        <div className="container">
          <h2 className="section-title">Why Trust Our <span className="text-accent">Medical Team?</span></h2>
          <div className="grid grid-4" style={{ marginTop: '3rem' }}>
            {[
              { icon: '🎓', title: 'Qualified', desc: 'All doctors hold recognized MBBS qualifications and specialist certifications.' },
              { icon: '🔬', title: 'Evidence-Based', desc: 'Treatments grounded in current clinical research and dermatology literature.' },
              { icon: '❤️', title: 'Patient-First', desc: 'Your safety, comfort, and results drive every decision we make.' },
              { icon: '📋', title: 'Personalized Plans', desc: 'No one-size-fits-all. Every treatment plan is built for you individually.' },
            ].map(w => (
              <div key={w.title} className="card" style={{ padding: '2rem' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{w.icon}</div>
                <h3 style={{ fontSize: '1.05rem', marginBottom: '0.5rem', color: 'var(--color-primary)' }}>{w.title}</h3>
                <p className="text-muted" style={{ fontSize: '0.9rem' }}>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CTA */}
      <section className="section bg-primary text-center" style={{ padding: '6rem 1.5rem' }}>
        <h2 style={{ fontSize: '2.5rem', color: 'white', marginBottom: '1rem' }}>Consult with Our Specialists</h2>
        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.15rem', marginBottom: '2rem' }}>Book a free, no-obligation consultation with one of our expert doctors today.</p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/contact-us" className="btn" style={{ backgroundColor: 'white', color: 'var(--color-primary)' }}>Book Appointment</Link>
          <a href="tel:9700641000" className="btn btn-accent">📞 9700641000</a>
        </div>
      </section>
    </>
  );
}
