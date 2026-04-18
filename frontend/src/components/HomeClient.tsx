// src/components/HomeClient.tsx
"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LeadForm from '@/components/LeadForm';

interface HomeClientProps {
  treatments: any;
  results: any[];
}

export default function HomeClient({ treatments, results }: HomeClientProps) {
  const [tab, setTab] = useState<'Skin' | 'Hair' | 'Slimming'>('Skin');
  const [resultsSlide, setResultsSlide] = useState(0);

  return (
    <>
      {/* Tab Selector */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', margin: '2.5rem 0 1.5rem' }}>
        {(['Skin', 'Hair', 'Slimming'] as const).map(t => (
          <button 
            key={t} 
            onClick={() => setTab(t)}
            style={{ 
              padding: '0.75rem 2.8rem', 
              borderRadius: '12px', 
              fontFamily: 'inherit',
              fontWeight: '700', 
              fontSize: '1rem', 
              cursor: 'pointer', 
              border: '1px solid',
              borderColor: tab === t ? '#00acb1' : '#e5e7eb',
              color: tab === t ? 'white' : '#00acb1', 
              backgroundColor: tab === t ? '#00acb1' : 'transparent', 
              transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
              boxShadow: tab === t ? '0 8px 20px rgba(0,172,177,0.25)' : 'none',
              textAlign: 'center'
            }}>
            {t}
          </button>
        ))}
      </div>

      {/* Tab description */}
      <p style={{ textAlign: 'center', fontSize: '0.98rem', color: '#00acb1', maxWidth: '850px', margin: '0 auto 3rem', lineHeight: 1.8, fontWeight: '500', opacity: 0.9 }}>
        {tab === 'Skin' ? 'Reveal your natural glow with Laser Hair Reduction, Acne Scar Revision, and Skin Brightening peels.' : 
         tab === 'Hair' ? 'Advanced clinical solutions for Hair Loss and Anti-Dandruff treatments designed by specialists.' : 
         'Advanced non-surgical body contouring to help you achieve your desired shape.'}
      </p>

      {/* Treatment Grid */}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2.5rem', marginTop: '4rem' }}>
        {treatments[tab.toLowerCase()]?.map((item: any, idx: number) => (
          <Link key={idx} href={`/${item.category}/${item.slug}`} className="treatment-card-oval" style={{ textDecoration: 'none', textAlign: 'center', position: 'relative', width: '200px' }}>
            <div className="oval-container-outer" style={{ position: 'relative', width: '200px', height: '280px', margin: '0 auto' }}>
              <div className="oval-image-mask" style={{ position: 'relative', width: '100%', height: '100%', borderRadius: '100px', overflow: 'hidden', backgroundColor: '#f0f7f7', border: '4px solid white', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                {item.image && (
                  <Image src={item.image} alt={item.title} fill style={{ objectFit: 'cover' }} />
                )}
              </div>
              <div className="oval-arrow">
                <span style={{ fontSize: '1.4rem', fontWeight: 'bold' }}>→</span>
              </div>
            </div>
            <h4 style={{ marginTop: '1.8rem', fontSize: '0.95rem', fontWeight: '600', color: '#1a1a1a', letterSpacing: '0.3px' }}>{item.title}</h4>
          </Link>
        ))}
      </div>

      {/* Results Slider Logic Integration would go here */}
    </>
  );
}

function statBadge(pos: string): React.CSSProperties {
  return {
    position: 'absolute',
    ...Object.fromEntries(pos.split(';').map(p => { const [k, v] = p.split(':').map(s => s.trim()); return [k, v]; })),
    zIndex: 2, display: 'flex', alignItems: 'center', gap: '0.6rem', backgroundColor: 'white', borderRadius: '10px', padding: '0.75rem 1rem', boxShadow: '0 4px 16px rgba(0,80,82,0.12)', minWidth: '145px',
  } as React.CSSProperties;
}
