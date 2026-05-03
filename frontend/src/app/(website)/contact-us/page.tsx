// src/app/(website)/contact-us/page.tsx
import LeadForm from "@/components/LeadForm";
import ReplicaHero from "@/components/ReplicaHero";
import Image from "next/image";
import { client } from '@/sanity/lib/client';

export const revalidate = 0;

async function getContactData() {
  const query = `{
    "page": *[_type == "contactPage"][0] {
      ...,
      "heroImage": heroImage.asset->url
    },
    "settings": *[_type == "siteSettings"][0] {
      ...,
      clinicLocations[]{
        name, address, phone, mapsUrl, gbpUrl
      },
      contact { phone, email, whatsapp }
    }
  }`;
  return await client.fetch(query);
}


export default async function ContactUs() {
  const { page, settings } = await getContactData();
  const mainPhone = settings?.contact?.phone || '7729955577';
  const mainEmail = settings?.contact?.email || 'info@neofatbury.co.in';
  let whatsapp  = settings?.contact?.whatsapp || '917729955577';
  if (whatsapp.length === 10 && /^\d+$/.test(whatsapp)) {
    whatsapp = `91${whatsapp}`;
  }
  
  return (
    <>
      {/* 1. PREMIUM CONTACT HERO BANNER (Full-width Image) */}
      <section className="contact-hero section" style={{ 
        position: 'relative', 
        height: '450px', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        overflow: 'hidden',
        color: 'white',
        textAlign: 'center'
      }}>
         <Image 
           src={page?.heroImage || "/images/clinic-reception.webp"} 
           alt="Neo Clinic Reception" 
           fill 
           className="contact-hero-img"
           style={{ objectFit: 'cover', zIndex: 1 }} 
           priority
         />
         <div className="contact-hero-overlay" style={{ 
           position: 'absolute', 
           inset: 0, 
           background: 'linear-gradient(to bottom, rgba(0,77,79,0.7), rgba(0,77,79,0.4))', 
           zIndex: 2 
         }}></div>
         
         <div className="container" style={{ position: 'relative', zIndex: 10 }}>
            <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', color: '#fff', fontWeight: '900', marginBottom: '1rem', textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>{page?.title || 'Contact NeoFatbury'}</h1>
            <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.95)', maxWidth: '750px', margin: '0 auto', fontWeight: '600', padding: '0 1rem', lineHeight: '1.6' }}>{page?.subtitle || 'Experience Elite Clinical Care with Our Specialists'}</p>
         </div>
      </section>

      {/* 2. FORM + INFO */}
      <section className="section" style={{ backgroundColor: '#fff', padding: '6rem 0' }}>
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'flex-start' }}>

          {/* Contact Form */}
          <div style={{ flex: '2 1 550px' }}>
             <LeadForm 
               title={page?.leadFormTitle || 'Drop us a Message'} 
               subtitle={page?.leadFormDescription || 'Our clinical experts will get back to you within 24 hours.'}
             />
          </div>

          {/* Info Panel */}
          <div style={{ flex: '1 1 350px', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            
            {/* Clinical Help Section */}
            <div className="card" style={{ padding: '2.5rem', borderRadius: '24px', border: '1px solid #eef2f2', backgroundColor: '#fcfdfd', boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
              <h3 style={{ fontSize: '1.3rem', color: '#00acb1', fontWeight: '900', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Clinical Support</h3>
              
              <div style={{ marginBottom: '1.5rem' }}>
                <p style={{ color: '#004d4f', fontWeight: '800', fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '0.4rem' }}>Primary Booking Number</p>
                <a href={`tel:${mainPhone}`} style={{ color: '#00acb1', fontWeight: '800', fontSize: '1.3rem', textDecoration: 'none' }}>📞 {mainPhone}</a>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <p style={{ color: '#004d4f', fontWeight: '800', fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '0.4rem' }}>Email Support</p>
                <a href={`mailto:${mainEmail}`} style={{ color: '#444', fontWeight: '700', fontSize: '1rem', textDecoration: 'none' }}>{mainEmail}</a>
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <p style={{ color: '#004d4f', fontWeight: '800', fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '0.4rem' }}>Business Hours</p>
                <p style={{ color: '#444', fontSize: '1rem', fontWeight: '600' }}>{page?.businessHours || 'Mon - Sat: 10 AM - 8 PM'}</p>
              </div>
            </div>

            {/* Branch Details */}
            {settings?.clinicLocations?.map((loc: any, i: number) => (
              <div key={i} className="card" style={{ padding: '2rem', borderRadius: '24px', border: '1px solid #f0f0f0', backgroundColor: '#fff' }}>
                <h3 style={{ fontSize: '1.2rem', color: '#00acb1', fontWeight: '800', marginBottom: '0.75rem' }}>{loc.name}</h3>
                <p style={{ color: '#555', fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>{loc.address}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {loc.phone ? (
                    <a href={`tel:${loc.phone}`} style={{ color: '#00acb1', fontWeight: '800', fontSize: '1.1rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      📞 {loc.phone}
                    </a>
                  ) : (
                    <a href={`tel:${mainPhone}`} style={{ color: '#00acb1', fontWeight: '800', fontSize: '1.1rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      📞 {mainPhone}
                    </a>
                  )}
                  {loc.mapsUrl && (
                    <a href={loc.mapsUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#666', fontWeight: '600', fontSize: '0.9rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      📍 Get Directions
                    </a>
                  )}
                </div>
              </div>
            ))}

            {/* WhatsApp Integration */}
            <a
              href={`https://wa.me/${whatsapp}`}
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
