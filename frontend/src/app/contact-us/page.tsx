import Link from 'next/link';
import LeadForm from "@/components/LeadForm";

export default function ContactUs() {
  return (
    <>
      {/* 1. HERO */}
      <section style={{ background: 'linear-gradient(135deg, #f0f7f6 0%, #ffffff 100%)', padding: '5rem 0 4rem', textAlign: 'center' }}>
        <div className="container">
          <p style={{ color: 'var(--color-accent)', fontWeight: '600', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '1.5px', fontSize: '0.85rem' }}>Get in Touch</p>
          <h1 style={{ fontSize: '3rem', marginBottom: '1.25rem' }}>
            Contact <span className="text-accent">NeoFatbury</span>
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--color-text-muted)', maxWidth: '600px', margin: '0 auto', lineHeight: 1.8 }}>
            Book a free consultation, ask us a question, or simply find out which treatment is right for you. Our team responds within hours.
          </p>
        </div>
      </section>

      {/* 2. FORM + INFO */}
      <section className="section">
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', alignItems: 'center' }}>

          {/* Contact Form */}
          <div style={{ flex: '1 1 480px' }}>
            <LeadForm title="Book Your Free Appointment" />
          </div>

          {/* Info Panel */}
          <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

            <div className="card" style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.15rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>📍 Kukatpally Clinic</h3>
              <p className="text-muted" style={{ fontSize: '0.95rem', marginBottom: '0.75rem', lineHeight: 1.7 }}>
                Ganesh Plaza, 1st Floor, Road No 1, KPHB Colony,<br />Kukatpally, Hyderabad — 500072
              </p>
              <a href="tel:9700641000" style={{ color: 'var(--color-accent)', fontWeight: '600', display: 'block', marginBottom: '0.5rem' }}>📞 9700641000</a>
              <a 
                href="https://www.google.com/maps/place/Neo+Fatbury+Kukatpally/@17.4874441,78.3910146,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcb91936b89694b:0xffc13ba33945bd1e!8m2!3d17.4874441!4d78.3910146!16s%2Fg%2F11f4y1f_m0" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}
              >
                View on Maps →
              </a>
            </div>

            <div className="card" style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.15rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>📍 Himayatnagar Clinic</h3>
              <p className="text-muted" style={{ fontSize: '0.95rem', marginBottom: '0.75rem', lineHeight: 1.7 }}>
                Velma Bhavan, 2nd Floor, Main Road,<br />Himayatnagar, Hyderabad — 500029
              </p>
              <a href="tel:9700641000" style={{ color: 'var(--color-accent)', fontWeight: '600', display: 'block', marginBottom: '0.5rem' }}>📞 9700641000</a>
              <a 
                href="https://www.google.com/maps/search/Neo+Fatbury+Himayatnagar+Hyderabad" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}
              >
                View on Maps →
              </a>
            </div>

            <div className="card" style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.15rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>🕐 Clinic Hours</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Monday – Saturday</span>
                  <span style={{ fontWeight: '600', color: 'var(--color-text)' }}>10 AM – 7 PM</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Sunday</span>
                  <span style={{ fontWeight: '600', color: 'var(--color-text)' }}>10 AM – 2 PM</span>
                </div>
              </div>
            </div>

            <div className="card" style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.15rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>💬 WhatsApp Us</h3>
              <p className="text-muted" style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>Chat directly with our team on WhatsApp for quick answers.</p>
              <a
                href="https://wa.me/919700641000"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ width: '100%', justifyContent: 'center', backgroundColor: '#25D366' }}
              >
                💬 Chat on WhatsApp
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* 3. QUICK TRUST */}
      <section className="section bg-surface text-center">
        <div className="container">
          <div className="grid grid-3" style={{ maxWidth: '800px', margin: '0 auto' }}>
            {[
              { icon: '⚡', title: 'Quick Response', desc: 'We call back within 2 hours of your enquiry.' },
              { icon: '🆓', title: 'Free Consultation', desc: 'Your first consultation is always completely free.' },
              { icon: '🔒', title: 'Private & Confidential', desc: 'Your details are never shared with third parties.' },
            ].map(t => (
              <div key={t.title} className="card" style={{ padding: '2rem' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{t.icon}</div>
                <h3 style={{ fontSize: '1.05rem', marginBottom: '0.5rem', color: 'var(--color-primary)' }}>{t.title}</h3>
                <p className="text-muted" style={{ fontSize: '0.9rem' }}>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
