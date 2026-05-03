import Image from 'next/image';
import LeadForm from './LeadForm';

interface ReplicaHeroProps {
  titleTeal1?: string;
  titleTeal2?: string;
  titleOrange1?: string;
  titleOrange2?: string;
  subtext?: string;
  imageSrc: string;
  trustPoints?: { icon: string; text: string }[];
  leadFormTitle?: string;
  showForm?: boolean;
  slug?: string; // Optional slug to help with automatic image mapping
}

// Global mapping of slugs to high-resolution "Replica" images
const SLUG_IMAGE_MAP: Record<string, string> = {
  'laser-hair-reduction': '/images/Laser Hair Reduction.png',
  'acne-scar-treatment': '/images/Acne & Pimple Treatment.png',
  'acne-treatment': '/images/Acne & Pimple Treatment.png',
  'skin-brightening': '/images/Skin Brightening.png',
  'hair-loss-treatment': '/images/Hair Loss Treatment.png',
  'hair-transplantation': '/images/Hair Transplantation.png',
  'anti-dandruff-treatment': '/images/Anti-Dandruff Treatment.png',
  'skin': '/images/All Skin Treatments.png',
  'hair': '/images/All Hair Treatments.png',
};

export default function ReplicaHero({
  titleTeal1,
  titleTeal2,
  titleOrange1,
  titleOrange2,
  subtext,
  imageSrc,
  trustPoints = [],
  leadFormTitle,
  showForm = true,
  slug
}: ReplicaHeroProps) {
  const finalImageSrc = imageSrc || (slug && SLUG_IMAGE_MAP[slug]) || "/images/neofatbury-hero-banner.webp";

  return (
    <section className="replica-hero">
      {/* Absolute Background Image (Sole source of background visual) */}
      <div className="replica-primary-bg">
        <img 
            src={finalImageSrc} 
            alt="Hero Background" 
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'left center' }} 
          />
        <div className="replica-primary-overlay"></div>
      </div>

      <div className="replica-hero-container" style={{ position: 'relative', zIndex: 10 }}>
        {/* ── Mobile-Only Visual ── */}
          <img 
            src={finalImageSrc} 
            alt="Hero Visual" 
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />

        <div className="replica-primary-box">
          <div className="replica-primary-content">
            {/* Zone 1: Portrait Space (Desktop) */}
            <div className="replica-zone-left desktop-only" style={{ minHeight: '520px' }}></div>

            {/* Zone 2: Typography (Middle) */}
            <div className="replica-zone-middle">
              {/* Text removed as it is already in the background image */}
              {trustPoints.length > 0 && (
                <div className="replica-trust-row" style={{ marginTop: 'auto', paddingBottom: '2rem' }}>
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
          {showForm && <LeadForm title={leadFormTitle} />}
        </div>
      </div>
    </section>
  );
}
