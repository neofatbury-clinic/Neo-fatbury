import Image from "next/image";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import ReplicaHero from "@/components/ReplicaHero";
import { client } from "@/sanity/lib/client";

export const metadata = {
  title: 'Best Skin Clinic in Hyderabad | Dermatology & Aesthetics - NeoFatbury',
  description: 'Expert dermatology in Hyderabad (Kukatpally & Himayatnagar). Specialized in Laser Hair Reduction, Acne Treatment, Skin Brightening, and Scar Care.',
};

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function SkinPage() {
  // Fetch skin services dynamically from Sanity
  const query = `*[_type == "service" && category->slug.current == "skin"] | order(order asc) {
    name,
    shortDescription,
    "slug": slug.current,
    "image": heroImage.asset->url
  }`;
  const servicesData = await client.fetch(query);

  // Fallback list of treatments to ensure the page is never empty
  const FALLBACK_SKIN = [
    { name: 'Laser Hair Reduction', slug: 'laser-hair-reduction', image: '/images/laser-machine-banner.webp', shortDescription: 'Safe and permanent hair reduction using world-class laser technology.' },
    { name: 'Acne Scar Treatment', slug: 'acne-scar-treatment', image: '/images/neofatbury-acne-scar-procedure.png', shortDescription: 'Advanced clinical solutions for smooth, scar-free skin.' },
    { name: 'Skin Brightening', slug: 'skin-brightening', image: '/images/derma-procedure-fixed.webp', shortDescription: 'Target pigmentation and uneven skin tone for a radiant glow.' },
    { name: 'Scar Treatment', slug: 'scar-treatment', image: '/images/neofatbury-clinical-standard.png', shortDescription: 'Specialized clinical care for restoring skin texture and clinical perfection.' },
  ];

  const services = (servicesData && servicesData.length > 0) ? servicesData : FALLBACK_SKIN;

  return (
    <>
      {/* 1. HERO SECTION */}
      <ReplicaHero 
        titleTeal1="All Skin"
        titleTeal2=""
        titleOrange1="Treatments"
        titleOrange2=""
        subtext=""
        imageSrc="/images/All Skin Treatments.png"
        leadFormTitle="Book Skin Analysis"
      />

      {/* TREATMENTS GRID */}
      <section className="section" id="treatments">
        <div className="container">
          <h2 className="section-title text-center">Skin <span className="text-accent">Aesthetics</span></h2>
          <p className="section-subtitle text-center">Comprehensive clinical solutions for every skin concern.</p>
          
          <div className="grid grid-2" style={{ marginTop: '3rem', maxWidth: '1000px', margin: '3rem auto 0' }}>
            {services.map((s: any) => (
              <div key={s.name} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ position: 'relative', height: '260px', marginBottom: '1.5rem', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
                  <Image src={s.image || '/images/neofatbury-clinical-standard.png'} alt={s.name} fill style={{ objectFit: 'cover' }} />
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>{s.name}</h3>
                <p className="text-muted" style={{ marginBottom: '1.5rem', flexGrow: 1, lineHeight: 1.6 }}>{s.shortDescription}</p>
                <Link href={`/skin/${s.slug}`} className="btn btn-outline" style={{ width: 'fit-content' }}>View Details</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container">
          <h2 className="section-title text-center">Why Our <span className="text-accent">Skin Care?</span></h2>
          <div className="grid grid-3 mobile-grid-1" style={{ marginTop: '3rem' }}>
            {[
              { title: 'Advanced Technology', desc: 'We use the world’s most advanced lasers and clinical equipment.' },
              { title: 'Personalized Plans', desc: 'No two skins are the same. We tailor every treatment to your skin type.' },
              { title: 'Safe & Clinical', desc: 'Every procedure is performed in a 100% sterile environment.' },
            ].map((p) => (
              <div key={p.title} className="card text-center" style={{ padding: '2.5rem' }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: 'var(--color-primary)' }}>{p.title}</h3>
                <p className="text-muted">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-primary text-center">
        <div className="container">
          <h3 style={{ color: 'white', fontSize: '2.5rem', marginBottom: '1.5rem' }}>Ready for Flawless Skin?</h3>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.25rem', marginBottom: '2.5rem' }}>Book your clinical analysis with our expert dermatologists today.</p>
          <Link href="/contact-us" className="btn" style={{ backgroundColor: 'white', color: 'var(--color-primary)', fontWeight: '700' }}>Schedule Appointment</Link>
        </div>
      </section>
    </>
  );
}
