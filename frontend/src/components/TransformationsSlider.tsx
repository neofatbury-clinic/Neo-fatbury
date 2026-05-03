"use client";
import { useState, useEffect } from 'react';
import ComparisonSlider from './ComparisonSlider';

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
    }, 8000); // More time for comparison interaction

    return () => clearInterval(timer);
  }, [results.length]);

  return (
    <div className="results-wrapper" style={{ position: 'relative', maxWidth: '800px', margin: '3rem auto' }}>
      <div className="results-container" style={{ 
        position: 'relative', 
        borderRadius: '32px', 
        overflow: 'hidden', 
        boxShadow: '0 30px 80px rgba(0,172,177,0.15)', 
        backgroundColor: 'white',
        padding: '1.5rem'
      }}>
        <div style={{ 
          display: 'flex', 
          transition: 'transform 1s cubic-bezier(0.65, 0, 0.35, 1)',
          transform: `translateX(-${currentIndex * 100}%)`
        }}>
          {results.map((r, i) => {
            // Support for split image strings or fallback to same image
            const [before, after] = r.img.includes('|') ? r.img.split('|') : [r.img, r.img];
            
            return (
              <div key={i} style={{ flex: '0 0 100%', position: 'relative', padding: '0 0.5rem' }}>
                <ComparisonSlider 
                  before={before} 
                  after={after} 
                  label={r.label}
                  autoSlide={currentIndex === i}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Pagination Dots */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', marginTop: '2rem' }}>
        {results.map((_, i) => (
          <div 
            key={i} 
            onClick={() => setCurrentIndex(i)}
            style={{ 
              width: currentIndex === i ? '32px' : '8px', 
              height: '8px', 
              borderRadius: '10px', 
              backgroundColor: currentIndex === i ? '#00acb1' : '#ddd',
              cursor: 'pointer',
              transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
            }} 
          />
        ))}
      </div>
    </div>
  );
}
