import LeadForm from './LeadForm';
import { urlFor } from '@/sanity/client';

interface ReplicaHeroProps {
  titleTeal1?: string;
  titleOrange1?: string;
  subtext?: string;
  imageSrc?: any; 
  trustPoints?: { icon: string; text: string }[];
  leadFormTitle?: string;
  showForm?: boolean;
}

export default function ReplicaHero({
  titleTeal1,
  titleOrange1,
  imageSrc,
  leadFormTitle,
  showForm = true,
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
    <section className="replica-hero" style={{ position: 'relative', minHeight: '600px', backgroundColor: '#00acb1', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
      
      {/* Background Image Layer (This contains your designed text) */}
      <div className="replica-bg-layer" style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <img 
          src={finalImageSrc} 
          alt="Hero Banner" 
          style={{ 
            position: 'absolute', 
            inset: 0, 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover', 
            objectPosition: 'center'
          }} 
        />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 10, display: 'grid', gridTemplateColumns: '1fr 400px', gap: '4rem', alignItems: 'center', width: '100%' }}>
        
        {/* Left Area - Empty visually because the image already has the text */}
        <div className="hero-content-text" style={{ padding: '2rem 0' }}>
          {/* SEO Only: Hidden H1 for Google search visibility */}
          <h1 style={{ position: 'absolute', width: '1px', height: '1px', padding: '0', margin: '-1px', overflow: 'hidden', clip: 'rect(0,0,0,0)', border: '0' }}>
            {titleTeal1} {titleOrange1}
          </h1>
        </div>

        {/* Right Area - Lead Form */}
        <div className="hero-content-form">
          <div style={{ animation: 'slideUp 0.6s ease-out forwards' }}>
            {showForm && <LeadForm title={leadFormTitle} />}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
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
          .replica-hero .hero-content-text { height: 280px; width: 100%; order: 1; }
          .replica-hero .hero-content-form { 
            width: 100%; 
            background: white; 
            padding: 2rem 1.5rem 4rem; 
            order: 2;
            margin: 0;
          }
          .replica-bg-layer { height: 280px; position: relative; z-index: 1; order: 1; }
        }
      `}} />
    </section>
  );
}
