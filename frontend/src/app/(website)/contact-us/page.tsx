// src/app/(website)/contact-us/page.tsx
import LeadForm from "@/components/LeadForm";
import ReplicaHero from "@/components/ReplicaHero";
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
  
  return (
    <>
      {/* 1. HERO (Now correctly using CMS image) */}
      <ReplicaHero 
        titleTeal1={page?.title || ''}
        titleTeal2=""
        titleOrange1=""
        titleOrange2=""
        subtext={page?.subtitle || ''}
        imageSrc={page?.heroImage || "/images/neofatbury-home-hero.png"}
      />

      {/* 2. FORM + INFO */}
      <section className="section" style={{ backgroundColor: '#fff', padding: '6rem 0' }}>
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'flex-start' }}>

          {/* Contact Form */}
          <div style={{ flex: '2 1 550px' }}>
             <div style={{ marginBottom: '2.5rem' }}>
                <h2 style={{ fontSize: '2.4rem', color: 'var(--color-primary)', fontWeight: '900', marginBottom: '1rem' }}>{page?.leadFormTitle || 'Drop us a Message'}</h2>
                <p style={{ fontSize: '1.1rem', color: '#666', lineHeight: '1.6' }}>{page?.leadFormDescription || 'Our medical team is ready to guide you on your transformation journey.'}</p>
             </div>
             <div className="card-form-wrap" style={{ backgroundColor: 'white', borderRadius: '30px', boxShadow: '0 20px 60px rgba(0,0,0,0.06)', border: '1px solid #f0f0f0', padding: '3rem' }}>
                <LeadForm 
                  title={page?.leadFormTitle} 
                  subtitle={page?.leadFormDescription}
                />
             </div>
          </div>

          {/* Info Panel */}
          <div style={{ flex: '1 1 350px', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            
            {/* Clinical Help Section (New) */}
            <div className="card" style={{ padding: '2.5rem', borderRadius: '24px', border: '1px solid #eef2f2', backgroundColor: '#fcfdfd' }}>
              <h3 style={{ fontSize: '1.3rem', color: '#00acb1', fontWeight: '900', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Clinical Help</h3>
              
              <div style={{ marginBottom: '1.5rem' }}>
                <p style={{ color: '#004d4f', fontWeight: '800', fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '0.4rem' }}>Business Hours</p>
                <p style={{ color: '#444', fontSize: '1rem' }}>{page?.businessHours || 'Mon - Sat: 10 AM - 8 PM'}</p>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <p style={{ color: '#004d4f', fontWeight: '800', fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '0.4rem' }}>Email Support</p>
                <a href={`mailto:${page?.email || 'info@neofatbury.com'}`} style={{ color: '#00acb1', fontWeight: '700', fontSize: '1rem', textDecoration: 'none' }}>{page?.email || 'info@neofatbury.com'}</a>
              </div>

              {page?.emergencyContact && (
                <div style={{ marginBottom: '0.5rem' }}>
                  <p style={{ color: '#d97706', fontWeight: '800', fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '0.4rem' }}>Emergency/IVR</p>
                  <p style={{ color: '#444', fontSize: '1rem', fontWeight: '700' }}>{page.emergencyContact}</p>
                </div>
              )}
            </div>

            {/* Branch Details */}
            {settings?.clinicLocations?.map((loc: any, i: number) => (
              <div key={i} className="card" style={{ padding: '2rem', borderRadius: '24px', border: '1px solid #f0f0f0' }}>
                <h3 style={{ fontSize: '1.15rem', color: '#00acb1', fontWeight: '800', marginBottom: '0.75rem' }}>{loc.name}</h3>
                <p style={{ color: '#555', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '1rem' }}>{loc.address}</p>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  {loc.phone && (
                    <a href={`tel:${loc.phone}`} style={{ color: '#00acb1', fontWeight: '700', fontSize: '0.9rem', textDecoration: 'none' }}>📞 Call Clinic</a>
                  )}
                  {loc.mapsUrl && (
                    <a href={loc.mapsUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#666', fontWeight: '600', fontSize: '0.9rem', textDecoration: 'none' }}>📍 Directions</a>
                  )}
                </div>
              </div>
            ))}

            {/* WhatsApp Integration */}
            <a
              href={`https://wa.me/${settings?.socialMedia?.whatsapp || '919700641000'}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              style={{ 
                backgroundColor: '#25D366', 
                color: 'white', 
                padding: '1.5rem', 
                borderRadius: '16px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                gap: '0.75rem', 
                fontWeight: '800',
                fontSize: '1.1rem',
                boxShadow: '0 10px 25px rgba(37, 211, 102, 0.2)'
              }}
            >
              💬 WhatsApp Neo Clinic
            </a>

          </div>
        </div>
      </section>
    </>
  );
}
