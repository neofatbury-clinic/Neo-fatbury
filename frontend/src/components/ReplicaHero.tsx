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

// Direct Sanity CDN URLs for guaranteed loading as fallback
const CDN_URL_MAP: Record<string, string> = {
  'laser-hair-reduction': "https://cdn.sanity.io/images/p8ddtj8e/production/af23b2381b0668cf8afaf8525af9941161187f55-1920x1080.png",
  'acne-scar-treatment': "https://cdn.sanity.io/images/p8ddtj8e/production/f90cdbe4c2443566106f36541c0f209b889024f9-1920x1080.png",
  'skin-brightening': "https://cdn.sanity.io/images/p8ddtj8e/production/b46124f86f2071145a9d0b91ee6296152821a84f-1920x1080.png",
  'hair-loss-treatment': "https://cdn.sanity.io/images/p8ddtj8e/production/aa02bf15370c60bf970e4a6187f0e7c0ebd181a4-1920x1080.png",
  'hair-transplantation': "https://cdn.sanity.io/images/p8ddtj8e/production/fe10a1dcef8396f48eabfacb18e38fe8fb2760e8-1920x1080.png",
  'anti-dandruff-treatment': "https://cdn.sanity.io/images/p8ddtj8e/production/ff7fbe00e66623d4b8117cd8d95310a7014997b2-1920x1080.png",
  'coolsculpting': "https://cdn.sanity.io/images/p8ddtj8e/production/0c031ba02cede7e98c6d7076649ec0232339193a-1920x1080.png",
  'inch-loss': "https://cdn.sanity.io/images/p8ddtj8e/production/2f49d747a3f00be1486a01284ee863aa7c1305a8-1920x1080.png",
  'weight-loss': "https://cdn.sanity.io/images/p8ddtj8e/production/1c3a20a40673109cf56ffc439898ebf0cd5b2582-1920x1080.png",
  'scar-treatment': "https://cdn.sanity.io/images/p8ddtj8e/production/07e6fa62d5deedcc8971b1f30bf3a93302e5bd0b-1920x1080.png",
  'skin': "https://cdn.sanity.io/images/p8ddtj8e/production/c8e44a5114a65bdf232ae0a2e2b824f4631f8ee5-1920x1080.png",
  'hair': "https://cdn.sanity.io/images/p8ddtj8e/production/a2068426ee029acde81d5242596a8de2173be975-1920x1080.png",
  'slimming': "https://cdn.sanity.io/images/p8ddtj8e/production/699ae4e8efcbaa6c09006cfc2771919b4af0c365-1920x1080.png",
  'home': "https://cdn.sanity.io/images/p8ddtj8e/production/9d8754d349737f65de0bc95a94124dc510fa239b-1920x1080.png"
};

export default function ReplicaHero({
  imageSrc,
  trustPoints = [],
  leadFormTitle,
  showForm = true,
  slug
}: ReplicaHeroProps) {
  // 1. If we have a valid absolute URL passed (Sanity), use it.
  // 2. Otherwise, check our hardcoded CDN map using the slug.
  // 3. Fallback to homepage banner.
  const finalImageSrc = (imageSrc && imageSrc.startsWith('http')) 
    ? imageSrc 
    : (slug && CDN_URL_MAP[slug]) 
    || CDN_URL_MAP['home'] 
    || "/images/neofatbury-hero-banner.webp";

  return (
    <section className="replica-hero">
      {/* Background Image Layer (Renders on top of solid teal background) */}
      <div className="replica-primary-bg" style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <img 
            src={finalImageSrc} 
            alt="Hero Background" 
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'left center' }} 
          />
      </div>

      <div className="replica-hero-container" style={{ position: 'relative', zIndex: 10 }}>
        <div className="replica-primary-box">
          <div className="replica-primary-content">
            <div className="replica-zone-left desktop-only" style={{ minHeight: '520px' }}></div>
            <div className="replica-zone-middle">
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

        <div className="replica-zone-right">
          {showForm && <LeadForm title={leadFormTitle} />}
        </div>
      </div>
    </section>
  );
}
