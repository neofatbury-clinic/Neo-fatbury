// src/app/(website)/about-us/page.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import { PortableText } from '@portabletext/react';

export const revalidate = 60;

async function getAboutData() {
  const query = `*[_type == "aboutPage"][0] {
    mainHeading,
    subHeading,
    "floatingImage": floatingImage.asset->url,
    aboutTextTop,
    highlightText,
    aboutTextBottom,
    visionText,
    missionText,
    stats,
    ctaTitle,
    ctaSubtitle,
    ctaButton
  }`;
  return await client.fetch(query);
}

export default async function AboutUs() {
  const data = await getAboutData();

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', padding: '3rem 0', fontFamily: 'var(--font-body)' }}>
      <div className="container" style={{ maxWidth: '1200px', display: 'flex', flexWrap: 'wrap', gap: '3rem', alignItems: 'flex-start' }}>
        
        {/* ─────────────────────────────────────────────────────────
            LEFT SIDEBAR (Table of Contents)
            ───────────────────────────────────────────────────────── */}
        <aside style={{ 
          flex: '0 0 280px', 
          backgroundColor: '#f6fdfd', 
          border: '1px solid #cbedf0', 
          borderRadius: '8px',
          padding: '2rem 0',
          position: 'sticky',
          top: '120px'
        }}>
          <h3 style={{ 
            fontSize: '1.25rem', 
            color: '#1a1a1a', 
            padding: '0 2rem', 
            marginBottom: '1rem',
            fontWeight: 700
          }}>
            Table of Contents
          </h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {[
              { label: 'About NeoFatbury', id: '#about' },
              { label: 'Our Vision', id: '#vision' },
              { label: 'Our Mission', id: '#mission' },
              { label: 'Our Milestones', id: '#milestones' },
              { label: 'Contact Us', id: '#contact' }
            ].map((link, i) => (
              <li key={i} style={{ borderBottom: i !== 4 ? '1px solid #dce8e8' : 'none', margin: '0 2rem' }}>
                <a href={link.id} style={{ 
                  display: 'block', 
                  padding: '1rem 0', 
                  color: 'var(--color-primary)', 
                  fontWeight: 500,
                  fontSize: '0.95rem',
                  textDecoration: 'none',
                  transition: 'color 0.2s'
                }}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </aside>

        {/* ─────────────────────────────────────────────────────────
            RIGHT CONTENT AREA
            ───────────────────────────────────────────────────────── */}
        <main style={{ flex: '1 1 600px', paddingBottom: '5rem' }}>
          
          <div id="about" style={{ paddingTop: '1rem', marginBottom: '3rem' }}>
            <h1 style={{ 
              fontSize: '2.5rem', 
              color: '#1a1a1a', 
              fontWeight: 700, 
              marginBottom: '0.5rem',
              lineHeight: 1.2
            }}>
              {data?.mainHeading || 'Welcome to NeoFatbury Clinic!'}
            </h1>
            <h2 style={{ 
              fontSize: '1.4rem', 
              color: '#1a1a1a', 
              fontWeight: 600, 
              marginBottom: '2rem' 
            }}>
              {data?.subHeading || 'Celebrating the science of transformation!'}
            </h2>

            {/* Content with floating image */}
            <div style={{ color: '#4a4a4a', fontSize: '1rem', lineHeight: 1.8, marginBottom: '2rem' }}>
              <div style={{ 
                float: 'right', 
                marginLeft: '2rem', 
                marginBottom: '1rem',
                width: '350px'
              }}>
                <Image 
                  src={data?.floatingImage || "/images/neofatbury-clinical-standard.png"}
                  alt="NeoFatbury Clinic Experts"
                  width={350}
                  height={250}
                  style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
                />
              </div>

              {data?.aboutTextTop ? (
                <PortableText value={data.aboutTextTop} />
              ) : (
                <>
                  <p style={{ marginBottom: '1rem' }}>
                    Established with a commitment to clinical excellence, NeoFatbury is the epitome of excellence in the realm of dermatological and slimming care, offering avant-garde medico-aesthetic treatments designed to meet the diverse needs of our esteemed clientele. With state-of-the-art clinics in Kukatpally and Himayatnagar, we proudly serve patients across Hyderabad.
                  </p>
                  <p>
                    Powered by a dedicated team of clinical dermatologists and cutting-edge USFDA-approved technologies, NeoFatbury is the premier destination for skin, hair, and body transformations. Our meticulously crafted bespoke treatments ensure absolute safety and efficacy, delivering unparalleled results and enduring client satisfaction. At NeoFatbury, we specialise in addressing an extensive array of concerns, ranging from acne and scars to hair loss, pigmentation, premature ageing, and weight management.
                  </p>
                </>
              )}
            </div>

            {/* Highlight Box perfectly matching the Oliva example */}
            <div style={{ 
              backgroundColor: '#f2fafaf5', 
              padding: '1.5rem 2rem', 
              borderLeft: '4px solid var(--color-primary)',
              marginBottom: '2rem'
            }}>
              <h3 style={{ fontSize: '1.25rem', color: '#1a1a1a', fontWeight: 600, margin: 0 }}>
                {data?.highlightText || "Hyderabad's No. 1 Dermatology, Skin & Hair Clinic"}
              </h3>
            </div>

            <div style={{ color: '#4a4a4a', fontSize: '1rem', lineHeight: 1.8 }}>
              {data?.aboutTextBottom ? (
                <PortableText value={data.aboutTextBottom} />
              ) : (
                <p>
                  Powered by a leading team of medical professionals and the latest USFDA-approved technology, NeoFatbury offers customised and cost-effective treatments clinically proven for safety and efficacy. Our holistic approach helps us deliver optimal results and long-lasting satisfaction to our valuable clients! NeoFatbury specialises in treating your acne, scars, hair loss, hair thinning, premature ageing, wrinkles, saggy skin, cellulite, and stubborn fat.
                </p>
              )}
            </div>
          </div>

          <hr style={{ border: 'none', borderTop: '1px solid #eaeaea', margin: '3rem 0' }} />

          {/* Section: Our Vision */}
          <div id="vision" style={{ paddingTop: '2rem', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2rem', color: '#1a1a1a', fontWeight: 700, marginBottom: '1.5rem' }}>
              Our Vision
            </h2>
            <p style={{ color: '#4a4a4a', fontSize: '1rem', lineHeight: 1.8 }}>
              {data?.visionText || 'To be the most trusted name in clinical dermatology and aesthetics across India, setting the gold standard for patient safety, technological innovation, and sustainable results.'}
            </p>
          </div>

          <hr style={{ border: 'none', borderTop: '1px solid #eaeaea', margin: '3rem 0' }} />

          {/* Section: Our Mission */}
          <div id="mission" style={{ paddingTop: '2rem', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2rem', color: '#1a1a1a', fontWeight: 700, marginBottom: '1.5rem' }}>
              Our Mission
            </h2>
            <p style={{ color: '#4a4a4a', fontSize: '1rem', lineHeight: 1.8 }}>
              {data?.missionText || 'To provide safe, effective, and scientifically backed aesthetic solutions that enhance natural beauty and restore confidence—all delivered with uncompromising clinical excellence.'}
            </p>
          </div>

          <hr style={{ border: 'none', borderTop: '1px solid #eaeaea', margin: '3rem 0' }} />

          {/* Section: Our Milestones */}
          <div id="milestones" style={{ paddingTop: '2rem', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2rem', color: '#1a1a1a', fontWeight: 700, marginBottom: '1.5rem' }}>
              Our Milestones
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
              {(data?.stats || [
                { value: '10,000+', label: 'Happy Clients' },
                { value: '15+', label: 'Years Experience' },
                { value: '2', label: 'Premium Clinics' },
                { value: '100%', label: 'Safety Record' }
              ]).map((stat: any, i: number) => (
                <div key={i} style={{ padding: '2rem', backgroundColor: '#f9fbfb', borderRadius: '8px', textAlign: 'center', border: '1px solid #eaeaea' }}>
                  <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--color-primary)', marginBottom: '0.5rem' }}>{stat.value}</div>
                  <div style={{ fontSize: '0.9rem', color: '#666', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <hr style={{ border: 'none', borderTop: '1px solid #eaeaea', margin: '3rem 0' }} />

          {/* Section: Contact Us (Booking) */}
          <div id="contact" style={{ paddingTop: '2rem' }}>
            <h2 style={{ fontSize: '2rem', color: '#1a1a1a', fontWeight: 700, marginBottom: '1.5rem' }}>
              Contact Us
            </h2>
            <div style={{ 
              backgroundColor: '#f2fafaf5', 
              padding: '3rem', 
              borderRadius: '8px', 
              textAlign: 'center',
              border: '1px solid #cbedf0'
            }}>
              <h3 style={{ fontSize: '1.8rem', color: '#1a1a1a', marginBottom: '1rem', fontWeight: 700 }}>
                {data?.ctaTitle || 'Take the First Step Towards Confidence'}
              </h3>
              <p style={{ color: '#4a4a4a', fontSize: '1.1rem', marginBottom: '2rem' }}>
                {data?.ctaSubtitle || 'Book your free clinical scalp or skin analysis and experience the difference.'}
              </p>
              <Link 
                href="/contact-us"
                style={{ 
                  display: 'inline-block',
                  backgroundColor: 'var(--color-primary)',
                  color: 'white',
                  fontSize: '1.05rem', 
                  padding: '1rem 2.5rem', 
                  borderRadius: '4px',
                  textDecoration: 'none',
                  fontWeight: 600
                }}
              >
                {data?.ctaButton || 'Book Appointment'}
              </Link>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}
