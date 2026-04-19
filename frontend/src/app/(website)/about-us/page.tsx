// src/app/(website)/about-us/page.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import { PortableText } from '@portabletext/react';

export const revalidate = 60;

async function getAboutData() {
  const query = `*[_type == "aboutPage"][0] {
    title,
    "heroImage": heroImage.asset->url,
    storyTitle,
    storyText,
    stats,
    pillars,
    ctaTitle,
    ctaSubtitle,
    ctaButton
  }`;
  return await client.fetch(query);
}

export default async function AboutUs() {
  const data = await getAboutData();
  // We use a high quality clinic/aesthetic fallback image
  const heroImage = data?.heroImage || '/images/neofatbury-hero-banner.webp';

  return (
    <div style={{ backgroundColor: '#ffffff', overflow: 'hidden' }}>
      
      {/* ─────────────────────────────────────────────────────────
          1. LUXURY HERO BANNER & GLASSMORPHISM LEAD
          ───────────────────────────────────────────────────────── */}
      <section style={{ 
        position: 'relative', 
        minHeight: '75vh', 
        display: 'flex',
        alignItems: 'center',
        padding: '6rem 0',
      }}>
        {/* Background Image with Parallax-feel overlay */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
          <Image 
            src={heroImage}
            alt="About NeoFatbury"
            fill
            priority
            style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
          />
          <div style={{ 
            position: 'absolute', inset: 0, 
            background: 'linear-gradient(100deg, rgba(0,0,0,0.85) 0%, rgba(0,70,75,0.6) 50%, rgba(0,0,0,0.1) 100%)' 
          }} />
        </div>

        <div className="container fade-up" style={{ position: 'relative', zIndex: 10, maxWidth: '1400px' }}>
          <div style={{ maxWidth: '750px' }}>
            <div style={{ 
              display: 'inline-block',
              background: 'rgba(255,255,255,0.15)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '50px',
              padding: '0.6rem 1.5rem',
              color: 'var(--color-cta)',
              fontWeight: 700,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              fontSize: '0.85rem',
              marginBottom: '2.5rem'
            }}>
              Discover Our Aesthetic Heritage
            </div>

            <h1 style={{ 
              fontSize: 'clamp(3rem, 6vw, 4.8rem)', 
              fontWeight: 800, 
              color: 'white', 
              lineHeight: 1.1,
              marginBottom: '2rem',
              textShadow: '0 10px 30px rgba(0,0,0,0.3)'
            }}>
              {data?.title || 'Clinical Excellence in Skin & Hair'}
            </h1>
            
            <p style={{ 
              fontSize: '1.25rem', 
              color: '#e8f6f7', 
              lineHeight: 1.8, 
              marginBottom: '3rem',
              maxWidth: '650px',
              fontWeight: 400
            }}>
              Founded on the pillars of absolute precision, uncompromising safety, and undeniable results. NeoFatbury is Hyderabad's most trusted sanctuary for aesthetic medicine.
            </p>

            <Link href="#our-story" className="btn" style={{
              backgroundColor: 'white',
              color: 'var(--color-primary)',
              padding: '1.2rem 2.5rem',
              borderRadius: '50px',
              fontSize: '1rem',
              fontWeight: 700,
              boxShadow: '0 15px 35px rgba(0,0,0,0.2)',
              transition: 'transform 0.3s ease'
            }}>
              Read Our Story ↓
            </Link>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          2. THE 'OUR STORY' ASYMMETRICAL GRID
          ───────────────────────────────────────────────────────── */}
      <section id="our-story" className="section" style={{ padding: '8rem 0', position: 'relative' }}>
        {/* Subtle background decoration */}
        <div style={{ position: 'absolute', right: 0, top: '10%', width: '30%', height: '80%', background: 'var(--color-surface)', borderTopLeftRadius: '100px', borderBottomLeftRadius: '100px', zIndex: 0 }} />
        
        <div className="container grid grid-2" style={{ gap: '6rem', alignItems: 'center', position: 'relative', zIndex: 10 }}>
          
          <div style={{ position: 'relative', height: '100%' }}>
            {/* Main Clinical Image */}
            <div style={{ 
              position: 'relative', 
              borderRadius: '24px', 
              overflow: 'hidden', 
              boxShadow: 'var(--shadow-lg)',
              border: '8px solid white',
              aspectRatio: '4/5'
            }}>
              <Image 
                src="/images/neofatbury-clinical-standard.png"
                alt="Clinic Interior"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            
            {/* Floating Glass Statistic */}
            <div style={{
              position: 'absolute',
              bottom: '-30px',
              right: '-30px',
              background: 'rgba(255,255,255,0.9)',
              backdropFilter: 'blur(10px)',
              padding: '2rem',
              borderRadius: '20px',
              boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
              border: '1px solid var(--color-surface)',
              maxWidth: '220px',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--color-primary)', lineHeight: 1 }}>US-FDA</div>
              <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '0.5rem' }}>Approved Technology</div>
            </div>
          </div>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ width: '40px', height: '2px', background: 'var(--color-cta)' }} />
              <span style={{ color: 'var(--color-cta)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '3px', fontSize: '0.85rem' }}>
                Our Heritage
              </span>
            </div>
            
            <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', color: 'var(--color-text)', fontWeight: 800, lineHeight: 1.15, marginBottom: '2rem' }}>
              {data?.storyTitle || 'Pioneering Clinical Skin & Hair Aesthetics'}
            </h2>
            
            <div style={{ 
              color: '#555', 
              fontSize: '1.1rem', 
              lineHeight: 1.9, 
              marginBottom: '3rem' 
            }}>
              {data?.storyText ? (
                <PortableText value={data.storyText} />
              ) : (
                <>
                  <p style={{ marginBottom: '1.25rem' }}>At NeoFatbury, we believe that true beauty is deeply rooted in physiological health and personal confidence. Our facilities were established to bring the world's most advanced, heavily vetted technologies directly to India, delivered by a hand-picked team of highly qualified dermatologists.</p>
                  <p>Operating out of premium clinics in Kukatpally and Himayatnagar, we strictly adhere to a "Subject-First" protocol—ensuring every treatment plan is precisely configured to the patient's unique biological and aesthetic profile.</p>
                </>
              )}
            </div>

            <Link href="/contact-us" className="btn btn-primary" style={{
              background: 'var(--color-primary)', 
              color: 'white', 
              padding: '1.2rem 2.5rem', 
              borderRadius: '5px',
              fontSize: '0.95rem'
            }}>
              Consult A Dermatologist
            </Link>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          3. DYNAMIC STATS STRIP (DEEP TEAL)
          ───────────────────────────────────────────────────────── */}
      <section style={{ background: '#003a3b', color: 'white', padding: '5rem 0' }}>
        <div className="container">
          <div className="grid grid-4 mobile-grid-2" style={{ gap: '2rem', textAlign: 'center' }}>
            {(data?.stats || [
              { value: '15,000+', label: 'Patients Treated' },
              { value: '10+', label: 'Years Experience' },
              { value: '12', label: 'Clinical Awards' },
              { value: '100%', label: 'Safety Record' }
            ]).map((stat: any, i: number) => (
              <div key={i} style={{ padding: '1rem' }}>
                <div style={{ 
                  fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', 
                  fontWeight: 800, 
                  color: 'var(--color-cta)', 
                  marginBottom: '0.5rem',
                  fontFamily: 'var(--font-heading)'
                }}>
                  {stat.value}
                </div>
                <div style={{ 
                  fontSize: '0.9rem', 
                  color: '#e8f6f7', 
                  textTransform: 'uppercase', 
                  letterSpacing: '2px', 
                  fontWeight: 500 
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          4. VISION & MISSION CARDS
          ───────────────────────────────────────────────────────── */}
      <section className="section bg-surface" style={{ padding: '7rem 0' }}>
        <div className="container text-center mb-12">
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: 'var(--color-primary)', marginBottom: '1rem' }}>
            The Foundation of Our Care
          </h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
            Everything we do is guided by a steadfast dedication to our patients, clinical integrity, and long-term aesthetic outcomes.
          </p>
        </div>

        <div className="container">
          <div className="grid grid-3" style={{ gap: '2.5rem' }}>
            {(data?.pillars || [
              { title: 'Our Mission', description: 'To provide safe, effective, and scientifically backed aesthetic solutions that help our patients look and feel their absolute best.' },
              { title: 'Our Vision', description: 'To be the most trusted name in clinical dermatology and slimming across India, known for integrity and excellence.' },
              { title: 'Core Promise', description: 'Safe clinical procedures, transparent pricing, and results that speak for themselves. You are in profoundly safe hands.' }
            ]).map((pillar: any, i: number) => (
              <div key={i} className="card" style={{ 
                padding: '3rem 2rem', 
                borderTop: '4px solid var(--color-cta)',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{ position: 'absolute', top: '-20px', right: '-20px', fontSize: '8rem', color: 'var(--color-surface)', opacity: 0.5, fontWeight: 900, lineHeight: 1, zIndex: 0 }}>
                  0{i + 1}
                </div>
                <div style={{ position: 'relative', zIndex: 10 }}>
                  <h3 style={{ fontSize: '1.5rem', color: 'var(--color-primary)', marginBottom: '1.25rem', fontWeight: 800 }}>{pillar.title}</h3>
                  <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7, fontSize: '1.05rem' }}>{pillar.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          5. WOW CTA BLOCK
          ───────────────────────────────────────────────────────── */}
      <section style={{ padding: '8rem 0' }}>
        <div className="container" style={{ maxWidth: '1100px' }}>
          <div style={{ 
            background: 'linear-gradient(135deg, var(--color-primary) 0%, #007073 100%)', 
            padding: '5rem 3rem', 
            borderRadius: '40px', 
            color: 'white', 
            boxShadow: '0 25px 50px rgba(0,172,177,0.2)',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Decorative Glass Circles */}
            <div style={{ position: 'absolute', top: '-100px', left: '-100px', width: '300px', height: '300px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)' }} />
            <div style={{ position: 'absolute', bottom: '-50px', right: '-100px', width: '250px', height: '250px', borderRadius: '50%', background: 'rgba(255,255,255,0.08)' }} />
            
            <div style={{ position: 'relative', zIndex: 10, maxWidth: '700px', margin: '0 auto' }}>
              <span style={{ display: 'block', color: 'var(--color-cta)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '1rem', fontSize: '0.9rem' }}>
                Your Transformation Awaits
              </span>
              <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 800, marginBottom: '1.5rem', color: 'white', lineHeight: 1.1 }}>
                {data?.ctaTitle || 'Take the First Step Towards Confidence'}
              </h2>
              <p style={{ fontSize: '1.15rem', marginBottom: '3rem', color: '#e8f6f7', lineHeight: 1.7 }}>
                {data?.ctaSubtitle || 'Experience the NeoFatbury difference with a complimentary clinical analysis across any of our state-of-the-art facilities.'}
              </p>
              
              <Link 
                href="/contact-us"
                className="btn"
                style={{ 
                  backgroundColor: 'var(--color-cta)',
                  color: 'white',
                  fontSize: '1.15rem', 
                  padding: '1.2rem 3rem', 
                  borderRadius: '50px',
                  boxShadow: '0 10px 25px rgba(232, 163, 23, 0.4)',
                  border: 'none',
                  textTransform: 'uppercase',
                  fontWeight: 800,
                  letterSpacing: '1px'
                }}
              >
                {data?.ctaButton || 'Book Your Free Analysis'}
              </Link>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}
