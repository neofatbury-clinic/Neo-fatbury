"use client";
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface ComparisonSliderProps {
  before: string;
  after: string;
  label?: string;
  autoSlide?: boolean;
}

export default function ComparisonSlider({ before, after, label, autoSlide = true }: ComparisonSliderProps) {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto-sliding animation effect
  useEffect(() => {
    if (!autoSlide || isDragging) return;

    let direction = 1;
    const interval = setInterval(() => {
      setSliderPos((prev) => {
        if (prev >= 90) direction = -1;
        if (prev <= 10) direction = 1;
        return prev + (0.15 * direction);
      });
    }, 20);

    return () => clearInterval(interval);
  }, [autoSlide, isDragging]);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPos((x / rect.width) * 100);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  return (
    <div 
      ref={containerRef}
      className="comparison-container"
      style={{ 
        position: 'relative', 
        width: '100%', 
        aspectRatio: '16/9', 
        overflow: 'hidden', 
        borderRadius: '24px',
        cursor: 'ew-resize',
        userSelect: 'none',
        boxShadow: '0 20px 50px rgba(0,0,0,0.1)'
      }}
      onMouseDown={() => setIsDragging(true)}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onTouchStart={() => setIsDragging(true)}
      onTouchEnd={() => setIsDragging(false)}
    >
      {/* After Image (Background) */}
      <Image src={after} alt="After" fill style={{ objectFit: 'cover' }} priority />

      {/* Before Image (Clip-path overlay) */}
      <div style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        clipPath: `inset(0 ${100 - sliderPos}% 0 0)` 
      }}>
        <Image src={before} alt="Before" fill style={{ objectFit: 'cover' }} priority />
      </div>

      {/* Handle / Slider Line */}
      <div style={{ 
        position: 'absolute', 
        top: 0, 
        bottom: 0, 
        left: `${sliderPos}%`, 
        width: '2px', 
        backgroundColor: 'white', 
        boxShadow: '0 0 10px rgba(0,0,0,0.3)',
        zIndex: 10
      }}>
        <div style={{ 
          position: 'absolute', 
          top: '50%', 
          left: '50%', 
          transform: 'translate(-50%, -50%)', 
          width: '40px', 
          height: '40px', 
          backgroundColor: 'white', 
          borderRadius: '50%', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
          color: '#00acb1',
          fontSize: '12px',
          fontWeight: '900'
        }}>
          ↔
        </div>
      </div>

      {/* Labels */}
      <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem', color: 'white', fontWeight: '900', fontSize: '0.8rem', textShadow: '0 2px 4px rgba(0,0,0,0.5)', zIndex: 5 }}>BEFORE</div>
      <div style={{ position: 'absolute', bottom: '1.5rem', right: '1.5rem', color: 'white', fontWeight: '900', fontSize: '0.8rem', textShadow: '0 2px 4px rgba(0,0,0,0.5)', zIndex: 5 }}>AFTER</div>
      
      {label && (
        <div style={{ 
          position: 'absolute', 
          top: '1.5rem', 
          left: '50%', 
          transform: 'translateX(-50%)', 
          backgroundColor: 'rgba(0,172,177,0.9)', 
          color: 'white', 
          padding: '0.5rem 1.5rem', 
          borderRadius: '50px', 
          fontSize: '0.85rem', 
          fontWeight: '800',
          zIndex: 5
        }}>
          {label}
        </div>
      )}
    </div>
  );
}
