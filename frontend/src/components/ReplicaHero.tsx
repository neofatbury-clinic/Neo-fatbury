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
  zoom = 1,
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
      minHeight: '600px', 
      width: '90%',
      maxWidth: '1800px',
      margin: '0 auto',
      borderRadius: '30px',
      backgroundColor: '#ffffff', 
      padding: '100px 0 20px 0',
      boxSizing: 'border-box',
      overflow: 'hidden', 
      display: 'flex', 
      alignItems: 'center',
      boxShadow: '0 20px 50px rgba(0,0,0,0.1)'
    }}>
      
      {/* Background Image Layer */}
      <div className="replica-bg-layer" style={{ 
        position: 'absolute', 
        inset: 0, 
        width: '100%', 
        zIndex: 0
      }}>
        <img 
          src={finalImageSrc} 
          alt="Hero Banner" 
          style={{ 
            position: 'absolute', 
            inset: 0, 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover', 
            objectPosition: 'left center',
            transition: 'transform 0.5s ease'
          }} 
        />
      </div>

      <div style={{ 
        position: 'relative', 
        zIndex: 10, 
        display: 'grid', 
        gridTemplateColumns: '1.5fr 380px', 
        gap: '2rem', 
        alignItems: 'center', 
        width: '100%', 
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 2rem'
      }}>
        
        {/* Left Area */}
        <div className="hero-content-text" style={{ padding: '2rem 0' }}>
          <h1 style={{ position: 'absolute', width: '1px', height: '1px', padding: '0', margin: '-1px', overflow: 'hidden', clip: 'rect(0,0,0,0)', border: '0' }}>
            {titleTeal1} {titleOrange1}
          </h1>
        </div>

        {/* Right Area - Lead Form */}
        <div className="hero-content-form">
          <div>
            {showForm && <LeadForm title={leadFormTitle} />}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 968px) {
          .replica-hero { min-height: auto; padding: 0 !important; }
          .replica-hero > div { 
            grid-template-columns: 1fr !important; 
            gap: 0 !important; 
            display: flex !important;
            flex-direction: column !important;
            padding: 0 !important;
          }
          .replica-hero .hero-content-text { height: 260px; width: 100%; order: 1; display: block !important; }
          .replica-hero .hero-content-form { 
            width: 100% !important; 
            background: white !important; 
            padding: 2rem 1.5rem 4rem !important; 
            order: 2 !important;
            margin: 0 !important;
          }
          .replica-bg-layer { height: 260px !important; position: relative !important; z-index: 1 !important; order: 1 !important; width: 100% !important; }
        }
      `}} />
    </section>
  );
}
