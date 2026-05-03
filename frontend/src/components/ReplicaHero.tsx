import Image from 'next/image';
import LeadForm from './LeadForm';

interface ReplicaHeroProps {
  titleTeal1?: string;
  titleTeal2?: string;
  titleOrange1?: string;
  titleOrange2?: string;
  subtext?: string;
  imageSrc?: string;
  trustPoints?: { icon: string; text: string }[];
  leadFormTitle?: string;
  showForm?: boolean;
  slug?: string;
}

const SLUG_IMAGE_MAP: Record<string, string> = {
  'laser-hair-reduction': '/images/Laser Hair Reduction.png',
  'skin-brightening': '/images/Skin Brightening.png',
  'acne-scar-treatment': '/images/Acne Treatment.png',
  'hair-loss-treatment': '/images/Hair Loss.png',
  'hair-transplantation': '/images/Hair Transplant.png',
  'anti-dandruff-treatment': '/images/Anti Dandruff.png',
  'coolsculpting': '/images/Cool Sculpting.png',
  'inch-loss': '/images/Inch loss.png',
  'weight-loss': '/images/Weight loss.png',
  'scar-treatment': '/images/Scar Treatment.png',
  'skin': '/images/All skin treatments.png',
  'hair': '/images/All Hair treatments.png',
  'slimming': '/images/All slimming treatments.png',
};

export default function ReplicaHero({
  imageSrc,
  trustPoints = [],
  leadFormTitle,
  showForm = true,
  slug
}: ReplicaHeroProps) {
  const finalImageSrc = imageSrc || (slug && SLUG_IMAGE_MAP[slug]) || "/images/neofatbury-hero-banner.webp";

  return (
    <section className="replica-hero">
      {/* 1. Absolute Background Image (Sole source of background visual) */}
      <div className="replica-primary-bg" style={{ zIndex: 1 }}>
        <Image 
            src={finalImageSrc} 
            alt="Hero Background" 
            fill
            priority 
            unoptimized
            style={{ objectFit: 'cover', objectPosition: 'left center' }} 
          />
        <div className="replica-primary-overlay"></div>
      </div>

      <div className="replica-hero-container" style={{ position: 'relative', zIndex: 10 }}>
        {/* ── Main Content Grid ── */}
        <div className="replica-primary-box">
          <div className="replica-primary-content">
            {/* Zone 1: Portrait Space (Desktop) */}
            <div className="replica-zone-left desktop-only" style={{ minHeight: '520px' }}></div>

            {/* Zone 2: Typography (Middle) */}
            <div className="replica-zone-middle">
              {/* Trust points only */}
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
