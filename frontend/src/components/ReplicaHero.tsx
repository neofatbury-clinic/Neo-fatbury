import LeadForm from './LeadForm';
import { urlFor } from '@/sanity/client';

interface ReplicaHeroProps {
  titleTeal1?: string;
  titleTeal2?: string;
  titleOrange1?: string;
  titleOrange2?: string;
  subtext?: string;
  imageSrc?: any; // Can be string URL or Sanity Image object
  trustPoints?: { icon: string; text: string }[];
  leadFormTitle?: string;
  showForm?: boolean;
  slug?: string;
}

export default function ReplicaHero({
  titleTeal1,
  titleOrange1,
  subtext,
  imageSrc,
  trustPoints = [],
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

  // Default Trust Points if none provided
  const displayTrustPoints = trustPoints.length > 0 ? trustPoints : [
    { icon: '🛡️', text: 'US-FDA Approved' },
    { icon: '⭐', text: '10+ Years of Expertise' },
    { icon: '✅', text: '15k+ Success' }
  ];

  return (
    <section className="replica-hero" style={{ position: 'relative', minHeight: '650px', backgroundColor: '#00acb1', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
      
      {/* Background Image Layer */}
      <div className="replica-bg-layer" style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <img 
          src={finalImageSrc} 
          alt="Hero Background" 
          style={{ 
            position: 'absolute', 
            inset: 0, 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover', 
            objectPosition: 'left center',
            opacity: 0.9
          }} 
        />
        {/* Subtle Gradient Overlay to ensure text readability if image is busy */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0,172,177,0.4) 0%, transparent 60%)' }}></div>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 10, display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '4rem', alignItems: 'center', width: '100%' }}>
        
        {/* Left Content Area (Text) */}
        <div className="hero-content-text" style={{ padding: '2rem 0' }}>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', color: 'white', fontWeight: '900', lineHeight: '1.1', marginBottom: '1.5rem', textShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
            {titleTeal1 || "Expert Clinical"} <br />
            <span style={{ color: '#ff7e1a' }}>{titleOrange1 || "Aesthetic Care"}</span>
          </h1>
          
          <p style={{ fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', color: 'white', maxWidth: '600px', marginBottom: '3rem', lineHeight: '1.6', fontWeight: '500', opacity: 0.95 }}>
            {subtext || "Transform your confidence with US-FDA approved treatments and expert clinical care at NeoFatbury."}
          </p>

          {/* Trust Badges */}
          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', marginTop: '2rem' }}>
            {displayTrustPoints.map((point, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', backgroundColor: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)', padding: '0.6rem 1.2rem', borderRadius: '50px', border: '1px solid rgba(255,255,255,0.2)' }}>
                <span style={{ fontSize: '1.2rem' }}>{point.icon}</span>
                <span style={{ color: 'white', fontWeight: '700', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{point.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Content Area (Form) */}
        <div className="hero-content-form">
          <div style={{ transform: 'translateY(20px)', animation: 'slideUp 0.6s ease-out forwards' }}>
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
          .replica-hero { min-height: auto; padding: 4rem 0; }
          .replica-hero .container { grid-template-columns: 1fr; gap: 3rem; text-align: center; }
          .replica-hero .hero-content-text { display: flex; flex-direction: column; align-items: center; }
          .replica-hero .hero-content-text p { margin-inline: auto; }
          .replica-hero .hero-content-text div { justify-content: center; }
          .replica-bg-layer img { object-position: center; }
        }
      `}} />
    </section>
  );
}
