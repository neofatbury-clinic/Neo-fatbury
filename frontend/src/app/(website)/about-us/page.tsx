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
  const heroImage = data?.heroImage || '/images/neofatbury-hero-banner.webp';

  return (
    <>
      {/* Hero Section */}
      <section style={{ 
        position: 'relative', 
        padding: '8rem 0 5rem', 
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        textAlign: 'center'
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, marginBottom: '1.5rem', color: 'white' }}>
            {data?.title || 'Clinical Excellence in Skin, Hair & Slimming'}
          </h1>
          <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto', opacity: 0.9, lineHeight: 1.6 }}>
            Founded on the pillars of precision, safety, and results, NeoFatbury is Hyderabad's leading destination for world-class clinical treatments.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section bg-white">
        <div className="container grid grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
          
          {/* Image Column */}
          <div style={{ position: 'relative', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
            <Image 
              src="/images/neofatbury-clinical-standard.png"
              alt="Our Clinical Heritage"
              width={600}
              height={450}
              style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
            />
          </div>
          
          {/* Text Column */}
          <div>
            <span style={{ color: 'var(--color-cta)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.85rem', marginBottom: '1rem', display: 'block' }}>
              Our Story
            </span>
            <h2 className="section-title">
              {data?.storyTitle || 'About NeoFatbury Clinical Skin & Hair'}
            </h2>
            <div style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '2.5rem' }}>
              {data?.storyText ? (
                <PortableText value={data.storyText} />
              ) : (
                <>
                  <p style={{ marginBottom: '1rem' }}>At NeoFatbury, we believe that true beauty is rooted in health and confidence. Our clinic was established to bring the world's most advanced US-FDA approved technologies to India, delivered by a team of highly qualified dermatologists and clinical experts.</p>
                  <p>With facilities in Kukatpally and Himayatnagar, we specialize in a "Subject-First" approach, ensuring every treatment plan is as unique as the patient we serve.</p>
                </>
              )}
            </div>
            
            {/* Stats Grid */}
            <div className="grid grid-2" style={{ gap: '1.5rem' }}>
              {(data?.stats || [
                { value: '10k+', label: 'Patients Served' },
                { value: '15+', label: 'Years Experience' }
              ]).map((stat: any, i: number) => (
                <div key={i} className="card" style={{ padding: '1.5rem', textAlign: 'center', backgroundColor: 'var(--color-surface)' }}>
                  <div style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--color-primary)', marginBottom: '0.5rem' }}>{stat.value}</div>
                  <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600, color: '#666' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section bg-surface">
        <div className="container">
          <div className="grid grid-3" style={{ gap: '2.5rem' }}>
            {(data?.pillars || [
              { title: 'Our Mission', description: 'To provide safe, effective, and scientifically backed aesthetic solutions that help our patients look and feel their absolute best.' },
              { title: 'Our Vision', description: 'To be the most trusted name in clinical dermatology and slimming across India, known for integrity and excellence.' },
              { title: 'Core Promise', description: 'Safe clinical procedures, transparent pricing, and results that speak for themselves. You are in safe hands.' }
            ]).map((pillar: any, i: number) => (
              <div key={i} className="card" style={{ padding: '2.5rem 2rem' }}>
                <h3 style={{ fontSize: '1.4rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>{pillar.title}</h3>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7 }}>{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-white text-center">
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{ background: 'linear-gradient(135deg, var(--color-primary), var(--color-cyan))', padding: '4rem 2rem', borderRadius: 'var(--radius-lg)', color: 'white', boxShadow: 'var(--shadow-lg)' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem', color: 'white' }}>
              {data?.ctaTitle || 'Start Your Journey Today'}
            </h2>
            <p style={{ fontSize: '1.15rem', marginBottom: '2.5rem', opacity: 0.9 }}>
              {data?.ctaSubtitle || 'Book your free clinical scalp or skin analysis and experience the difference.'}
            </p>
            <Link 
              href="/contact-us"
              className="btn btn-cta"
              style={{ fontSize: '1.1rem', padding: '1rem 2.5rem', borderRadius: '50px' }}
            >
              {data?.ctaButton || 'Book Complimentary Analysis'}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
