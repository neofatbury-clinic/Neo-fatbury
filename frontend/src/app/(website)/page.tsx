// src/app/(website)/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import LeadForm from '@/components/LeadForm';
import ReplicaHero from '@/components/ReplicaHero';
import TreatmentGrid from '@/components/TreatmentGrid';
import TreatmentTabs from '@/components/TreatmentTabs';
import TransformationsSlider from '@/components/TransformationsSlider';
import CustomSchema from '@/components/CustomSchema';
import { client } from '@/sanity/lib/client';
import PageBuilder from '@/components/PageBuilder';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

async function getHomeData() {
  const query = `{
    "settings": *[_type == "siteSettings"][0] {
      ...,
      clinicLocations[] { ... }
    },
    "hero": *[_type == "homepage"][0] {
      ...,
      "heroImage": heroImage.asset->url
    },
    "services": *[_type == "homepage"][0].featuredTreatments[]-> {
      name,
      "slug": slug.current,
      category,
      "image": heroImage.asset->url
    },
    "allServices": *[_type == "service"] | order(order asc) {
      name,
      "slug": slug.current,
      "category": category->slug.current,
      "image": heroImage.asset->url
    },
    "results": *[_type == "homepage"][0].resultsSlider[] {
      label,
      "image": image.asset->url,
      quote
    }
  }`;
  return await client.fetch(query);
}

const RESULTS = [
  { label: 'Laser Hair Reduction', img: '/images/before-after-laser.webp' },
  { label: 'Acne Scar Healing', img: '/images/acne-before-after.webp' },
  { label: 'CoolSculpting', img: '/images/neofatbury-slimming-result.png' },
];

// Hardcoded fallback treatments — always shown if CMS data is empty
const FALLBACK_TREATMENTS: Record<string, { title: string; slug: string; image: string }[]> = {
  skin: [
    { title: 'Laser Hair Reduction', slug: 'laser-hair-reduction', image: '/images/laser-hair-removal.png' },
    { title: 'Acne Scar Treatment', slug: 'acne-scar-treatment', image: '/images/acne-scar-treatment.png' },
    { title: 'Scar Treatment', slug: 'scar-treatment', image: '/images/scra-treatment.png' },
    { title: 'Skin Brightening', slug: 'skin-brightening', image: '/images/skin-lightening.png' },
  ],
  hair: [
    { title: 'Hair Loss Treatment', slug: 'hair-loss-treatment', image: '/images/hair-loss-treatment-new.png' },
    { title: 'Hair Transplantation', slug: 'hair-transplantation', image: '/images/hair-transplantation-new.png' },
    { title: 'Anti-Dandruff Clinical Solutions', slug: 'anti-dandruff-treatment', image: '/images/anti-dandruff-clinical.png' },
  ],
  slimming: [
    { title: 'CoolSculpting', slug: 'coolsculpting', image: '/images/neofatbury-cooling-tech.png' },
    { title: 'Weight Loss', slug: 'weight-loss', image: '/images/clinic-reception.webp' },
    { title: 'Inch Loss', slug: 'inch-loss', image: '/images/neofatbury-slimming-standard.png' },
  ],
};


export default async function Home() {
  const data = await getHomeData();
  const { settings, hero, services, allServices } = data;

  // Use featuredTreatments first, fall back to allServices, then hardcoded data
  const serviceList = (services && services.length > 0) ? services : (allServices && allServices.length > 0) ? allServices : null;

  // Safe filter helper to identify treatments by category
  const getByCategory = (cat: string) => {
    const skinSlugs = ['laser-hair-reduction', 'scar-treatment', 'acne-scar-treatment', 'skin-brightening'];
    const hairSlugs = ['hair-loss-treatment', 'anti-dandruff-treatment', 'hair-transplantation'];
    const slimmingSlugs = ['coolsculpting', 'weight-loss', 'inch-loss', 'coolsculpting-fat-freezing', 'inch-loss-treatment'];

    const filtered = serviceList?.filter((s: any) => {
      const sCat = typeof s.category === 'string' ? s.category.toLowerCase() : '';
      const sSlug = s.slug;
      
      if (sCat === cat.toLowerCase()) return true;
      
      // Fallback matching by slug
      if (cat.toLowerCase() === 'skin' && skinSlugs.includes(sSlug)) return true;
      if (cat.toLowerCase() === 'hair' && hairSlugs.includes(sSlug)) return true;
      if (cat.toLowerCase() === 'slimming' && slimmingSlugs.includes(sSlug)) return true;
      
      return false;
    }).map((s: any) => ({ 
      title: s.name, 
      slug: s.slug, 
      image: s.image 
    })) || [];
  };

  const treatments = {
    skin: FALLBACK_TREATMENTS.skin,
    hair: FALLBACK_TREATMENTS.hair,
    slimming: allServices && allServices.filter((s: any) => s.category === 'slimming').length > 0 
      ? allServices.filter((s: any) => s.category === 'slimming').map((s: any) => ({ title: s.name, slug: s.slug, image: s.image }))
      : FALLBACK_TREATMENTS.slimming,
  };

  return (
    <>
      <CustomSchema schema={hero?.seo?.customSchema} />
      {/* SECTION 1: HERO */}
      <ReplicaHero 
        titleTeal1={hero?.heroHeadline || ""}
        titleTeal2=""
        titleOrange1={hero?.heroAccentLine || ""}
        titleOrange2=""
        subtext={hero?.heroSubtext || ""}
        imageSrc={hero?.heroImage || "/images/neofatbury-hero-banner.webp"}
      />

      {/* SECTION 2: OUR TREATMENTS (TABBED) */}
      <section className="section bg-white" style={{ paddingBottom: '2rem' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 className="section-title" style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Our Treatments</h2>
          </div>
          
          <TreatmentTabs 
            skin={treatments.skin}
            hair={treatments.hair}
            body={treatments.slimming}
          />

          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <Link href="/results" className="btn btn-cyan" style={{ width: '100%', maxWidth: '500px', display: 'inline-block', padding: '1.2rem 1rem', borderRadius: '50px', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '800', backgroundColor: '#00acb1' }}>View our full results gallery</Link>
          </div>
        </div>
      </section>

      {/* SECTION 3: WHY NEOFATBURY STANDS OUT */}
      <section className="section" style={{ backgroundColor: '#fcfcfc', borderTop: '1px solid #f0f0f0', borderBottom: '1px solid #f0f0f0' }}>
        <div className="container text-center">
          <p style={{ color: '#00acb1', fontWeight: '700', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '0.75rem' }}>Why NeoFatbury Stands Out</p>
          <h2 className="section-title" style={{ marginBottom: '1rem' }}>{hero?.whyUsTitle || 'Clinical Excellence, Personal Care'}</h2>
          <div className="grid grid-4" style={{ marginTop: '4rem', gap: '2rem' }}>
            {[
              { title: 'Dermatologist-Led', description: 'Every treatment is supervised by qualified medical professionals.', icon: '👩‍⚕️' },
              { title: 'Safety First', description: 'We exclusively use ISO-certified processes and US-FDA approved equipment.', icon: '🛡️' },
              { title: 'No Hidden Costs', description: 'Transparent clinical pricing with detailed pre-treatment counseling.', icon: '💳' },
              { title: 'Convenient Locations', description: 'Premium luxury clinics located in the heart of Kukatpally and Himayatnagar.', icon: '📍' },
            ].map((p, i) => (
              <div key={i} className="aesthetic-card" style={{ 
                padding: '3rem 2rem', 
                backgroundColor: 'white', 
                borderRadius: '24px', 
                boxShadow: '0 15px 40px rgba(0,172,177,0.06)', 
                border: '1px solid rgba(0,172,177,0.08)',
                textAlign: 'center',
                transition: 'all 0.4s ease'
              }}>
                <div className="icon-box" style={{ 
                  width: '70px', 
                  height: '70px', 
                  margin: '0 auto 1.5rem', 
                  backgroundColor: '#f0f9fa', 
                  borderRadius: '20px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  fontSize: '2.2rem'
                }}>{p.icon}</div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#1a1a1a', fontWeight: '800' }}>{p.title}</h3>
                <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.6, fontWeight: '500' }}>{p.description}</p>
                
                <style jsx>{`
                  .aesthetic-card:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 25px 50px rgba(0,172,177,0.12);
                    border-color: rgba(0,172,177,0.2);
                  }
                  .aesthetic-card:hover .icon-box {
                    background-color: #00acb1;
                    transform: scale(1.1) rotate(5deg);
                    transition: all 0.3s ease;
                  }
                `}</style>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: TRANSFORMATIONS (RESTORED SLIDER IMAGES) */}
      <section className="section" style={{ backgroundColor: '#fff', padding: '6rem 0' }}>
        <div className="container text-center">
          <p style={{ color: '#00acb1', fontWeight: '700', fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '0.75rem' }}>Real Results</p>
          <h2 className="section-title">Clinical <span className="text-accent">Transformations</span></h2>
          <p className="section-subtitle" style={{ color: '#00acb1', fontWeight: '500', maxWidth: '700px', margin: '0 auto' }}>Witness the power of US-FDA approved technology and expert dermatological care.</p>
          
          <TransformationsSlider results={RESULTS} />

          <div style={{ textAlign: 'center', marginTop: '1rem' }}>
            <Link href="/results" className="btn btn-cta" style={{ padding: '1rem 2.5rem', backgroundColor: '#00acb1', color: 'white', borderRadius: '50px', fontWeight: '700' }}>View Our Full Results Gallery</Link>
          </div>
        </div>
      </section>

      {/* SECTION 6: VISIT OUR CLINICS */}
      <section className="section bg-surface" style={{ padding: '6rem 0', borderTop: '1px solid #f0f0f0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <p style={{ color: '#00acb1', fontWeight: '700', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '0.75rem' }}>Find Us</p>
            <h2 className="section-title">Visit Our Clinics in <span className="text-accent">Hyderabad</span></h2>
            <p style={{ color: '#00acb1', fontWeight: '500', marginTop: '1rem' }}>Two premium clinics — conveniently located to serve you better.</p>
          </div>
          
          <div className="grid grid-2" style={{ gap: '3rem' }}>
            {(settings?.clinicLocations || []).slice(0, 2).map((loc: any, i: number) => (
              <div key={i} className="card" style={{ padding: 0, overflow: 'hidden', borderRadius: '24px', backgroundColor: 'white', border: '1px solid #f0f0f0', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                <div style={{ padding: '2.5rem' }}>
                  <h3 style={{ fontSize: '1.4rem', color: '#00acb1', fontWeight: '800', marginBottom: '1rem' }}>{loc.name}</h3>
                  <p style={{ color: '#00898d', lineHeight: 1.6, marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                    {loc.address}
                  </p>
                </div>
                <div style={{ width: '100%', height: '350px' }}>
                  <iframe 
                    src={loc.embedUrl || (loc.name.toLowerCase().includes('kukatpally') ? "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.4200823195633!2d78.39101459999999!3d17.4874492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91ddb45a8f99%3A0x7f1a789fc8a90d2!2sNeo%20Fatbury%20Kukatpally!5e0!3m2!1sen!2sin!4v1775875687552!5m2!1sen!2sin" : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.411634567232!2d78.4835695!3d17.4040055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99da979f4281%3A0x4642220e895ec060!2sNeo%20Fatbury%20Hair%20Skin%20Slimming%20Clinic%20Himayatnagar!5e0!3m2!1sen!2sin!4v1775875842961!5m2!1sen!2sin" )} 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy"
                  ></iframe>
                </div>
                <div style={{ padding: '1.25rem', textAlign: 'center', backgroundColor: '#fafcfc' }}>
                  <a 
                    href={loc.mapsUrl || (loc.name.toLowerCase().includes('kukatpally') ? 'https://share.google/Ee1WRgIrFAtqcNU05' : 'https://share.google/FFcx19nq8NyLJP9YJ')} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={{ color: '#00acb1', fontWeight: '800', fontSize: '0.95rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                  >
                    📍 Get Directions to {loc.name}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DYNAMIC SECTIONS */}
      {hero?.pageBuilder && <PageBuilder content={hero.pageBuilder} />}
    </>
  );
}
