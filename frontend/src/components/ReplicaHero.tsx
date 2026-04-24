import Image from 'next/image';
import LeadForm from './LeadForm';

interface ReplicaHeroProps {
  titleTeal1: string;
  titleTeal2?: string;
  titleOrange1: string;
  titleOrange2?: string;
  subtext: string;
  imageSrc: string;
  trustPoints?: { icon: string; text: string }[];
  leadFormTitle?: string;
}

export default function ReplicaHero({
  titleTeal1,
  titleTeal2,
  titleOrange1,
  titleOrange2,
  subtext,
  imageSrc,
  trustPoints = [],
  leadFormTitle
}: ReplicaHeroProps) {
  return (
    <section className="replica-hero">
      {/* Absolute Background Image (Sole source of background visual) */}
      <div className="replica-primary-bg">
        <Image 
            src={imageSrc} 
            alt="Hero Background" 
            fill
            priority 
            quality={90}
            style={{ objectFit: 'cover', objectPosition: 'left center' }} 
          />
        <div className="replica-primary-overlay"></div>
      </div>

      <div className="replica-hero-container" style={{ position: 'relative', zIndex: 10 }}>
        {/* ── Mobile-Only Visual ── */}
        <div className="replica-hero-visual-mobile mobile-only">
          <Image 
            src={imageSrc} 
            alt="Hero Visual" 
            width={800}
            height={600}
            priority
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>

        <div className="replica-primary-box">
          <div className="replica-primary-content">
            {/* Zone 1: Portrait Space (Desktop) */}
            <div className="replica-zone-left desktop-only"></div>

            {/* Zone 2: Typography (Middle) */}
            <div className="replica-zone-middle">
              {titleTeal1 && (
                <h1 className="replica-title">
                  <span className="text-teal">{titleTeal1}</span> {titleTeal2 && <br/>}
                  {titleTeal2 && <span className="text-teal">{titleTeal2}</span>} {titleTeal2 && <br/>}
                  <span className="text-orange">{titleOrange1}</span> {titleOrange2 && <br/>}
                  {titleOrange2 && <span className="text-orange">{titleOrange2}</span>}
                </h1>
              )}
              {subtext && (
                <p className="replica-subtext">
                  {subtext}
                </p>
              )}
              {trustPoints.length > 0 && (
                <div className="replica-trust-row">
                  {trustPoints.map((point, index) => (
                    <div key={index} className="replica-trust-item">
                      <span>{point.icon}</span> {point.text}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Zone 3: Lead Form (Right) */}
        <div className="replica-zone-right">
          <LeadForm title={leadFormTitle} />
        </div>
      </div>
    </section>
  );
}
