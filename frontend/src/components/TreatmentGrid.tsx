"use client";
import Image from 'next/image';
import Link from 'next/link';

interface Treatment {
  title: string;
  slug: string;
  image: string;
  category?: string;
}

interface TreatmentGridProps {
  treatments: Treatment[];
  defaultCategory: string;
}

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

export default function TreatmentGrid({ treatments, defaultCategory }: TreatmentGridProps) {
  return (
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
      {treatments.map((item, idx) => {
        let displayImage = item.image || FALLBACK_IMAGES[item.slug] || '/images/neofatbury-clinical-standard.png';
        
        // Force override for Slimming portraits
        if (['coolsculpting', 'weight-loss', 'inch-loss'].includes(item.slug)) {
          displayImage = FALLBACK_IMAGES[item.slug];
        }

        const categorySlug = item.category || defaultCategory;
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
    </div>
  );
}
