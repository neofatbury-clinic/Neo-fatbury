// src/components/HomeClient.tsx
"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface HomeClientProps {
  treatments: any;
}

// Map of original hardcoded images for each slug as a fallback
const FALLBACK_IMAGES: Record<string, string> = {
  'acne-treatment': '/images/Acne & Pimple Treatment.png',
  'acne-scar-treatment': '/images/Acne & Pimple Treatment.png',
  'laser-hair-reduction': '/images/Laser Hair Reduction.png',
  'scar-treatment': '/images/All Skin Treatments.png',
  'skin-brightening': '/images/Skin Brightening.png',
  'hair-loss-treatment': '/images/Hair Loss Treatment.png',
  'hair-fall-treatment': '/images/Hair Loss Treatment.png',
  'anti-dandruff-treatment': '/images/Anti-Dandruff Treatment.png',
  'hair-transplant': '/images/Hair Transplantation.png',
  'hair-transplantation': '/images/Hair Transplantation.png',
  'coolsculpting': '/images/neofatbury-cooling-tech.png',
  'weight-loss': '/images/clinic-reception.webp',
  'inch-loss': '/images/neofatbury-slimming-standard.png'
};

export default function HomeClient({ treatments }: HomeClientProps) {
  const [tab, setTab] = useState<'Skin' | 'Hair' | 'Slimming'>('Skin');

  const currentTreatments = treatments[tab.toLowerCase()] || [];

  return (
    <>
      {/* Tabs */}
      <div className="treatment-tabs-wrap" style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', margin: '2.5rem 0 1.5rem' }}>
        {(['Skin', 'Hair', 'Slimming'] as const).map(t => (
          <button 
            key={t} 
            onClick={() => setTab(t)}
            style={{ 
              padding: '0.6rem 2rem', 
              borderRadius: '50px', 
              fontFamily: 'inherit',
              flexShrink: 0,
              fontWeight: '700', 
              fontSize: '0.9rem', 
              cursor: 'pointer', 
              border: '1px solid',
              borderColor: tab === t ? '#00acb1' : '#e5e7eb',
              color: tab === t ? 'white' : '#00acb1', 
              backgroundColor: tab === t ? '#00acb1' : 'white', 
              transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
              boxShadow: tab === t ? '0 8px 20px rgba(0,172,177,0.15)' : 'none',
              textAlign: 'center'
            }}>
            {t}
          </button>
        ))}
      </div>

      {/* Description */}
      <p style={{ textAlign: 'center', fontSize: '0.95rem', color: '#00acb1', maxWidth: '850px', margin: '0 1rem 3rem', lineHeight: 1.6, fontWeight: '500', opacity: 0.9 }}>
        {tab === 'Skin' ? 'Reveal your natural glow with Laser Hair Reduction, Acne Scar Revision, and Skin Brightening peels.' : 
         tab === 'Hair' ? 'Advanced clinical solutions for Hair Loss and Anti-Dandruff treatments designed by specialists.' : 
         'Advanced non-surgical body contouring to help you achieve your desired shape.'}
      </p>

      {/* Grid / Slider */}
      <div className="treatment-slider-container" style={{ 
        display: 'flex', 
        overflowX: 'auto', 
        gap: '1.5rem', 
        padding: '1rem 1rem 3rem',
        scrollSnapType: 'x mandatory',
        scrollbarWidth: 'none', // Hide scrollbar for clean look
        msOverflowStyle: 'none'
      }}>
        {currentTreatments.map((item: any, idx: number) => {
          const displayImage = item.image || FALLBACK_IMAGES[item.slug] || '/images/neofatbury-clinical-standard.png';
          const categorySlug = item.category || tab.toLowerCase();
          return (
            <Link 
              key={idx} 
              href={`/${categorySlug}/${item.slug}`} 
              className="treatment-card-oval"
              style={{ 
                flex: '0 0 200px', 
                scrollSnapAlign: 'start',
                textAlign: 'center',
                textDecoration: 'none'
              }}
            >
              <div className="oval-container-outer" style={{ aspectRatio: '0.8', height: 'auto' }}>
                <div className="oval-image-mask" style={{ borderRadius: '24px' }}>
                  <Image 
                    src={displayImage} 
                    alt={item.title} 
                    fill 
                    style={{ objectFit: 'cover' }} 
                    sizes="200px"
                  />
                </div>
                <div className="oval-arrow" style={{ bottom: '-15px' }}>
                  <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>→</span>
                </div>
              </div>
              <h4 style={{ 
                marginTop: '1.5rem', 
                fontSize: '0.95rem', 
                fontWeight: '800', 
                color: '#00acb1', 
                letterSpacing: '0.2px' 
              }}>
                {item.title}
              </h4>
            </Link>
          );
        })}
      </div>

      <style jsx>{`
        .treatment-slider-container::-webkit-scrollbar {
          display: none;
        }
        @media (min-width: 1024px) {
          .treatment-slider-container {
            flex-wrap: wrap;
            justify-content: center;
            overflow-x: visible;
            gap: 3rem 2rem;
          }
          .treatment-card-oval {
            flex: 0 0 240px !important;
          }
        }
      `}</style>
    </>
  );
}
