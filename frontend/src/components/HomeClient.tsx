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
  'acne-treatment': '/images/neofatbury-acne-scar-procedure.png',
  'acne-scar-treatment': '/images/neofatbury-acne-scar-procedure.png',
  'laser-hair-reduction': '/images/neofatbury-laser-bg-left.png',
  'scar-treatment': '/images/derma-procedure-fixed.webp',
  'skin-brightening': '/images/neofatbury-cheek-banner.webp',
  'hair-loss-treatment': '/images/hair-loss-treatment-new.png',
  'hair-fall-treatment': '/images/hair-loss-treatment-new.png',
  'anti-dandruff-treatment': '/images/anti-dandruff-clinical.png',
  'hair-transplant': '/images/hair-transplantation-new.png',
  'hair-transplantation': '/images/hair-transplantation-new.png',
  'coolsculpting': '/images/coolsculpting-portrait.png',
  'weight-loss': '/images/weight-loss-portrait.png',
  'inch-loss': '/images/inch-loss-portrait.png'
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
        flexDirection: 'row', 
        flexWrap: 'nowrap',
        gap: '1.5rem', 
        padding: '1rem 1rem 4rem',
        overflowX: 'auto',
        scrollSnapType: 'x mandatory',
        WebkitOverflowScrolling: 'touch',
        justifyContent: 'flex-start',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none'
      }}>
        {currentTreatments.map((item: any, idx: number) => {
          let displayImage = item.image || FALLBACK_IMAGES[item.slug] || '/images/neofatbury-clinical-standard.png';
          
          // Force override ONLY for Slimming portraits as requested
          if (['coolsculpting', 'weight-loss', 'inch-loss'].includes(item.slug)) {
            displayImage = FALLBACK_IMAGES[item.slug];
          }

          const categorySlug = item.category || tab.toLowerCase();
          return (
            <Link 
              key={idx} 
              href={`/${categorySlug}/${item.slug}`} 
              className="treatment-card-oval"
              style={{ flex: '0 0 auto', scrollSnapAlign: 'center' }}
            >
              <div className="oval-container-outer">
                <div className="oval-image-mask">
                  <Image 
                    src={displayImage} 
                    alt={item.title} 
                    fill 
                    style={{ objectFit: 'cover' }} 
                    sizes="(max-width: 768px) 100vw, 300px"
                  />
                </div>
                <div className="oval-arrow">
                  <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>→</span>
                </div>
              </div>
              <h4 style={{ 
                marginTop: '1.5rem', 
                fontSize: '1rem', 
                fontWeight: '700', 
                color: '#333', 
                letterSpacing: '0.2px' 
              }}>
                {item.slug === 'weight-loss' ? 'Weight Loss & Transformation' : item.title}
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
            flex-wrap: wrap !important;
            justify-content: center !important;
            overflow-x: visible !important;
            gap: 3rem 2rem !important;
          }
          .treatment-card-oval {
            width: 240px !important;
            flex: none !important;
            scroll-snap-align: none !important;
          }
        }
      `}</style>
    </>
  );
}
