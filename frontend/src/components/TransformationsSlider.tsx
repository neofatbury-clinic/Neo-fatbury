"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';

interface Result {
  label: string;
  img: string;
}

interface TransformationsSliderProps {
  results: Result[];
}

export default function TransformationsSlider({ results }: TransformationsSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % results.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(timer);
  }, [results.length]);

  return (
    <div className="results-wrapper" style={{ position: 'relative', maxWidth: '720px', margin: '3rem auto' }}>
      <div className="results-container" style={{ 
        position: 'relative', 
        borderRadius: '24px', 
        overflow: 'hidden', 
        boxShadow: '0 25px 60px rgba(0,172,177,0.1)', 
        border: '1px solid #f0f0f0',
        backgroundColor: 'white'
      }}>
        <div style={{ 
          display: 'flex', 
          transition: 'transform 0.8s cubic-bezier(0.65, 0, 0.35, 1)',
          transform: `translateX(-${currentIndex * 100}%)`
        }}>
          {results.map((r, i) => (
            <div key={i} style={{ flex: '0 0 100%', position: 'relative' }}>
              <div style={{ position: 'relative', width: '100%', aspectRatio: '20/7' }}>
                <Image 
                  src={r.img} 
                  alt={r.label} 
                  fill 
                  style={{ objectFit: 'cover' }}
                  priority={i === 0}
                />
              </div>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                gap: '20%', 
                background: 'white', 
                padding: '1.5rem', 
                borderTop: '1px solid #f0f0f0' 
              }}>
                <div style={{ textAlign: 'center' }}>
                  <span style={{ fontWeight: '900', color: '#00acb1', fontSize: '0.8rem', letterSpacing: '3px', display: 'block' }}>BEFORE</span>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <span style={{ fontWeight: '900', color: '#00acb1', fontSize: '0.8rem', letterSpacing: '3px', display: 'block' }}>AFTER</span>
                </div>
              </div>
              {/* Treatment Label Overlay */}
              <div style={{
                position: 'absolute',
                top: '1.5rem',
                left: '1.5rem',
                backgroundColor: 'rgba(255,255,255,0.9)',
                padding: '0.5rem 1rem',
                borderRadius: '50px',
                fontSize: '0.8rem',
                fontWeight: '800',
                color: '#00acb1',
                boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
              }}>
                {r.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Dots */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', marginTop: '1.5rem' }}>
        {results.map((_, i) => (
          <div 
            key={i} 
            onClick={() => setCurrentIndex(i)}
            style={{ 
              width: currentIndex === i ? '24px' : '8px', 
              height: '8px', 
              borderRadius: '10px', 
              backgroundColor: currentIndex === i ? '#00acb1' : '#ddd',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }} 
          />
        ))}
      </div>
    </div>
  );
}
