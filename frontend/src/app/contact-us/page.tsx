"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function ContactUs() {
  const [form, setForm] = useState({ name: '', phone: '', service: '', location: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    window.location.href = '/thank-you';
  }

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
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', alignItems: 'flex-start' }}>

          {/* Contact Form */}
          <div style={{ flex: '1 1 480px' }}>
            <div className="card" style={{ padding: '2.5rem' }}>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--color-primary)' }}>Book a Free Consultation</h2>
              <p className="text-muted" style={{ marginBottom: '2rem', fontSize: '0.95rem' }}>Fill in your details and our team will call you back within 2 hours.</p>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div>
                  <label style={labelStyle}>Your Full Name *</label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    placeholder="e.g. Priya Reddy"
                    value={form.name}
                    onChange={handleChange}
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label style={labelStyle}>Mobile Number *</label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="10-digit mobile number"
                    value={form.phone}
                    onChange={handleChange}
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label style={labelStyle}>Service Interested In *</label>
                  <select
                    id="contact-service"
                    name="service"
                    required
                    value={form.service}
                    onChange={handleChange}
                    style={inputStyle}
                  >
                    <option value="">Select a service...</option>
                    <optgroup label="Skin Treatments">
                      <option>Laser Hair Reduction</option>
                      <option>Acne & Scar Treatment</option>
                      <option>Skin Brightening</option>
                    </optgroup>
                    <optgroup label="Hair Treatments">
                      <option>Hair Loss Treatment</option>
                      <option>Hair Transplantation</option>
                      <option>Anti-Dandruff Treatment</option>
                    </optgroup>
                    <optgroup label="Slimming & Contouring">
                      <option>CoolSculpting (Fat Freezing)</option>
                      <option>Inch Loss Treatment</option>
                      <option>Weight Loss Program</option>
                    </optgroup>
                    <option>General Consultation</option>
                  </select>
                </div>

                <div>
                  <label style={labelStyle}>Preferred Clinic Location</label>
                  <select
                    id="contact-location"
                    name="location"
                    value={form.location}
                    onChange={handleChange}
                    style={inputStyle}
                  >
                    <option value="">Select location...</option>
                    <option>Kukatpally Clinic</option>
                    <option>Himayatnagar Clinic</option>
                    <option>No preference</option>
                  </select>
                </div>

                <div>
                  <label style={labelStyle}>Your Message (Optional)</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={3}
                    placeholder="Tell us about your concern or ask a question..."
                    value={form.message}
                    onChange={handleChange}
                    style={{ ...inputStyle, resize: 'vertical' }}
                  />
                </div>

                <button
                  id="contact-submit"
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: '100%', justifyContent: 'center', padding: '1rem', fontSize: '1.05rem' }}
                >
                  📅 Get a Call Back
                </button>

                <p style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)', textAlign: 'center' }}>
                  By submitting, you agree to our <Link href="/privacy-policy" style={{ color: 'var(--color-accent)' }}>Privacy Policy</Link>.
                </p>
              </form>
            </div>
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

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: '0.875rem',
  fontWeight: '600',
  marginBottom: '0.5rem',
  color: 'var(--color-text)',
};

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '0.75rem 1rem',
  border: '1.5px solid var(--color-border)',
  borderRadius: 'var(--radius-sm)',
  fontSize: '0.95rem',
  color: 'var(--color-text)',
  backgroundColor: 'white',
  outline: 'none',
  boxSizing: 'border-box',
  fontFamily: 'inherit',
};
