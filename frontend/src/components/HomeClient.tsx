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
  'acne-treatment': '/images/neofatbury-cheek-banner.webp',
  'acne-scar-treatment': '/images/neofatbury-acne-scar-procedure.png',
  'laser-hair-reduction': '/images/laser-machine-banner.webp',
  'scar-treatment': '/images/neofatbury-clinical-standard.png',
  'skin-brightening': '/images/derma-procedure-fixed.webp',
  'hair-fall-treatment': '/images/neofatbury-hair2-banner.webp',
  'hair-transplant': '/images/neofatbury-hair-standard.png',
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

      {/* Grid */}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem 1.5rem', marginTop: '3rem', padding: '0 1rem' }}>
        {currentTreatments.map((item: any, idx: number) => {
          const displayImage = item.image || FALLBACK_IMAGES[item.slug] || '/images/neofatbury-clinical-standard.png';
          // Fix: Use correct category in URL
          const categorySlug = item.category || tab.toLowerCase();
          return (
            <Link 
              key={idx} 
              href={`/${categorySlug}/${item.slug}`} 
              className="treatment-card-oval"
            >
              <div className="oval-container-outer">
                <div className="oval-image-mask">
                  <Image 
                    src={displayImage} 
                    alt={item.title} 
                    fill 
                    style={{ objectFit: 'cover' }} 
                    sizes="(max-width: 768px) 140px, 220px"
                  />
                </div>
                <div className="oval-arrow">
                  <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>→</span>
                </div>
              </div>
              <h4 style={{ marginTop: '1.5rem', fontSize: '0.9rem', fontWeight: '700', color: '#1a2b3c', letterSpacing: '0.2px', padding: '0 0.5rem' }}>{item.title}</h4>
            </Link>
          );
        })}
      </div>
    </>
  );
}
