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
  trustPoints = [
    { icon: '✅', text: '10+ Years Expert' },
    { icon: '✅', text: 'US-FDA Tech' },
    { icon: '✅', text: '15k+ Success' }
  ],
  leadFormTitle
}: ReplicaHeroProps) {
  return (
    <section className="replica-hero">
      {/* ── Desktop Background ── */}
      <div className="replica-hero-bg desktop-only">
        <Image 
          src={imageSrc} 
          alt="Hero Background" 
          fill 
          priority 
          quality={90}
          style={{ objectFit: 'cover', objectPosition: 'left center' }} 
        />
      </div>

      <div className="replica-hero-container" style={{ position: 'relative', zIndex: 10 }}>
        {/* ── Mobile-Only Visual (Appears ABOVE text on small screens) ── */}
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

        {/* Zone 1: Empty (Reserved for Portrait on Left in Desktop) */}
        <div className="replica-zone-left desktop-only"></div>

        {/* Zone 2: Typography (Middle) */}
        <div className="replica-zone-middle">
          <h1 className="replica-title">
            <span className="text-teal">{titleTeal1}</span> {titleTeal2 && <br/>}
            {titleTeal2 && <span className="text-teal">{titleTeal2}</span>} {titleTeal2 && <br/>}
            <span className="text-orange">{titleOrange1}</span> {titleOrange2 && <br/>}
            {titleOrange2 && <span className="text-orange">{titleOrange2}</span>}
          </h1>
          <p className="replica-subtext">
            {subtext}
          </p>
          <div className="replica-trust-row">
            {trustPoints.map((point, index) => (
              <div key={index} className="replica-trust-item">
                <span>{point.icon}</span> {point.text}
              </div>
            ))}
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
