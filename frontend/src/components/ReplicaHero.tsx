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
  subtext,
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
      minHeight: '550px', 
      width: '100%',
      margin: '0',
      borderRadius: '0',
      backgroundColor: '#00acb1', 
      padding: '100px 0 40px 0',
      boxSizing: 'border-box',
      overflow: 'hidden', 
      display: 'flex', 
      alignItems: 'center'
    }}>
      
      {/* Background Image Layer (90% width) */}
      <div className="replica-bg-layer" style={{ 
        position: 'absolute', 
        top: 0,
        bottom: 0,
        left: 0, 
        width: '90%', 
        zIndex: 0,
        overflow: 'hidden'
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
            transition: 'transform 0.5s ease',
            opacity: 0.85
          }} 
        />
        {/* Clinical Teal Overlay for readability */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to right, rgba(0,172,177,0.4) 0%, transparent 60%)',
          zIndex: 1
        }} />
      </div>

      <div style={{ 
        position: 'relative', 
        zIndex: 10, 
        display: 'grid', 
        gridTemplateColumns: '1.2fr 380px', 
        gap: '4rem', 
        alignItems: 'center', 
        width: '100%', 
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 2rem'
      }}>
        
        {/* Left Area - Content Visibility restored */}
        <div className="hero-content-text" style={{ padding: '2rem 0' }}>
          <h1 style={{ 
            fontSize: 'clamp(2.5rem, 5vw, 4.2rem)', 
            lineHeight: '1.1', 
            fontWeight: '900', 
            color: 'white',
            marginBottom: '1.5rem',
            textShadow: '0 2px 10px rgba(0,0,0,0.1)'
          }}>
            <span style={{ display: 'block' }}>{titleTeal1}</span>
            <span style={{ color: 'var(--color-accent)', display: 'block' }}>{titleOrange1}</span>
          </h1>
          {subtext && (
            <p style={{ 
              fontSize: '1.25rem', 
              color: 'rgba(255,255,255,0.95)', 
              maxWidth: '600px', 
              lineHeight: '1.6',
              fontWeight: '500'
            }}>
              {subtext}
            </p>
          )}
        </div>

        {/* Right Area - Lead Form */}
        <div className="hero-content-form">
          <div style={{ background: 'white', borderRadius: '16px', boxShadow: '0 20px 50px rgba(0,77,79,0.15)', overflow: 'hidden' }}>
            {showForm && <LeadForm title={leadFormTitle} />}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 968px) {
          .replica-hero { 
            min-height: auto; 
            padding: 0 !important; 
            display: flex !important;
            flex-direction: column !important;
          }
          .replica-hero > div { 
            grid-template-columns: 1fr !important; 
            gap: 0 !important; 
            display: block !important;
            padding: 0 !important;
            width: 100% !important;
          }
          .replica-hero .hero-content-text { display: none !important; }
          .replica-hero .hero-content-form { 
            width: 100% !important; 
            background: white !important; 
            padding: 1.5rem 1rem 3rem !important; 
            margin: 0 !important;
            position: relative;
            z-index: 10;
          }
          .replica-bg-layer { 
            height: 240px !important; 
            position: relative !important; 
            z-index: 1 !important; 
            width: 100% !important; 
          }
        }
      `}} />
    </section>
  );
}
