import LeadForm from './LeadForm';
import { urlFor } from '@/sanity/client';

interface ReplicaHeroProps {
  titleTeal1?: string;
  titleTeal2?: string;
  titleOrange1?: string;
  titleOrange2?: string;
  subtext?: string;
  imageSrc?: any; 
  trustPoints?: { icon: string; text: string }[];
  leadFormTitle?: string;
  showForm?: boolean;
  slug?: string;
  zoom?: number;
}

export default function ReplicaHero({
  titleTeal1,
  titleOrange1,
  imageSrc,
  leadFormTitle,
  showForm = true,
  zoom = 1.05,
}: ReplicaHeroProps) {
  
  // Resolve Image Source
  let finalImageSrc = "/images/neofatbury-hero-banner.webp";
  
  if (typeof imageSrc === 'string' && imageSrc.startsWith('http')) {
    finalImageSrc = imageSrc;
  } else if (imageSrc && typeof imageSrc === 'object') {
    try {
      finalImageSrc = urlFor(imageSrc).url();
    } catch (e) {
      console.warn("Hero image resolution failed", e);
    }
  } else if (typeof imageSrc === 'string' && imageSrc.startsWith('/')) {
    finalImageSrc = imageSrc;
  }

  return (
    <section className="replica-hero" style={{ 
      position: 'relative', 
      minHeight: '500px', 
      background: 'linear-gradient(to right, #ffffff 80%, #00acb1 100%)', 
      overflow: 'visible', 
      display: 'flex', 
      alignItems: 'center' 
    }}>
      
      {/* Background Image Layer (This contains your designed text) */}
      <div className="replica-bg-layer" style={{ 
        position: 'absolute', 
        inset: 0, 
        width: '80%', 
        zIndex: 0,
        animation: 'zoomOutEffect 1.5s ease-out forwards'
      }}>
        <img 
          src={finalImageSrc} 
          alt="Hero Banner" 
          style={{ 
            position: 'absolute', 
            inset: 0, 
            width: '100%', 
            height: '100%', 
            objectFit: zoom > 1 ? 'cover' : 'contain', 
            objectPosition: 'left center',
            transform: `scale(${zoom})`,
            transition: 'transform 0.5s ease'
          }} 
        />
      </div>

      <div style={{ position: 'relative', zIndex: 10, display: 'grid', gridTemplateColumns: '2fr 380px', gap: '1.5rem', alignItems: 'center', width: '100%', paddingLeft: '0', paddingRight: '2rem' }}>
        
        {/* Left Area - Empty visually because the image already has the text */}
        <div className="hero-content-text" style={{ padding: '2rem 0' }}>
          {/* SEO Only: Hidden H1 for Google search visibility */}
          <h1 style={{ position: 'absolute', width: '1px', height: '1px', padding: '0', margin: '-1px', overflow: 'hidden', clip: 'rect(0,0,0,0)', border: '0' }}>
            {titleTeal1} {titleOrange1}
          </h1>
        </div>

        {/* Right Area - Lead Form */}
        <div className="hero-content-form" style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <div style={{ animation: 'slideUp 0.6s ease-out forwards' }}>
            {showForm && <LeadForm title={leadFormTitle} />}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes zoomOutEffect {
          from { transform: scale(1.05); }
          to { transform: scale(1); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 968px) {
          .replica-hero { min-height: auto; padding: 0; }
          .replica-hero .container { 
            grid-template-columns: 1fr; 
            gap: 0; 
            display: flex;
            flex-direction: column;
          }
          .replica-hero .hero-content-text { height: 260px; width: 100%; order: 1; }
          .replica-hero .hero-content-form { 
            width: 100%; 
            background: white; 
            padding: 2rem 1.5rem 4rem; 
            order: 2;
            margin: 0;
          }
          .replica-bg-layer { height: 260px; position: relative; z-index: 1; order: 1; }
        }
      `}} />
    </section>
  );
}
