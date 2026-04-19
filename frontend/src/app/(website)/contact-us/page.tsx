// src/app/(website)/contact-us/page.tsx
import LeadForm from "@/components/LeadForm";
import { client } from '@/sanity/lib/client';

export const revalidate = 60;

async function getContactData() {
  const query = `{
    "page": *[_type == "contactPage"][0] {
      ...,
      "heroImage": heroImage.asset->url
    },
    "settings": *[_type == "siteSettings"][0]
  }`;
  return await client.fetch(query);
}

export default async function ContactUs() {
  const { page, settings } = await getContactData();
  const branches = settings?.branches || [];
  
  const heroStyle = page?.heroImage 
    ? { background: `linear-gradient(rgba(240, 247, 246, 0.9), rgba(255, 255, 255, 0.9)), url(${page.heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center', padding: '5rem 0 4rem', textAlign: 'center' as const }
    : { background: 'linear-gradient(135deg, #f0f7f6 0%, #ffffff 100%)', padding: '5rem 0 4rem', textAlign: 'center' as const };

  return (
    <>
      {/* 1. HERO */}
      <section style={heroStyle}>
        <div className="container">
          <p style={{ color: 'var(--color-accent)', fontWeight: '600', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '1.5px', fontSize: '0.85rem' }}>Get in Touch</p>
          <h1 style={{ fontSize: '3rem', marginBottom: '1.25rem' }}>
            {page?.title || 'Contact NeoFatbury Clinic'}
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--color-text-muted)', maxWidth: '600px', margin: '0 auto', lineHeight: 1.8 }}>
            {page?.subtitle || 'Book a free consultation, ask us a question, or simply find out which treatment is right for you. Our team responds within hours.'}
          </p>
        </div>
      </section>

      {/* 2. FORM + INFO */}
      <section className="section">
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', alignItems: 'flex-start' }}>

          {/* Contact Form */}
          <div style={{ flex: '2 1 480px' }}>
            <div className="card" style={{ padding: '0' }}>
               <div style={{ padding: '2rem', borderBottom: '1px solid #eee' }}>
                  <h2 style={{ fontSize: '1.8rem', color: 'var(--color-primary)', marginBottom: '0.5rem' }}>{page?.leadFormTitle || 'Drop us a Message'}</h2>
                  <p style={{ color: '#666' }}>{page?.leadFormDescription || 'Our clinical experts will get back to you within 24 hours.'}</p>
               </div>
               <div style={{ padding: '2rem' }}>
                  <LeadForm 
                    title={page?.leadFormTitle} 
                    subtitle={page?.leadFormDescription}
                  />
               </div>
            </div>
          </div>

          {/* Info Panel */}
          <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            
            {branches.map((branch: any, i: number) => (
              <div key={i} className="card" style={{ padding: '2rem' }}>
                <h3 style={{ fontSize: '1.15rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>📍 {branch.name}</h3>
                <p className="text-muted" style={{ fontSize: '0.95rem', marginBottom: '0.75rem', lineHeight: 1.7 }}>
                  {branch.address}
                </p>
                <a href={`tel:${branch.phone}`} style={{ color: 'var(--color-accent)', fontWeight: '600', display: 'block', marginBottom: '0.5rem' }}>📞 {branch.phone}</a>
                <a 
                  href={branch.googleMapsUrl || "https://maps.google.com"} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}
                >
                  View on Maps →
                </a>
              </div>
            ))}

            <div className="card" style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.15rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>💬 WhatsApp Us</h3>
              <p className="text-muted" style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>Chat directly with our team on WhatsApp for quick answers.</p>
              <a
                href={`https://wa.me/${settings?.socialMedia?.whatsapp || '919700641000'}`}
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
    </>
  );
}
